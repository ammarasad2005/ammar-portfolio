# gcr-resources-fetch — Project Deep Understanding

## Project Name
**GCR Fetch — Google Classroom Resource Downloader** (repository name: `gcr-resources-fetch`).

The `manifest.json` declares the user-visible name `"GCR Fetch"` at version `1.0.0`, with the description "Bulk-download all resources from a Google Classroom course as a ZIP archive." The README's tagline reinforces this positioning: "Bulk-download every resource from a Google Classroom course as a single ZIP archive." The `gcr-` prefix decodes to **G**oogle **C**lass**R**oom, and `resources-fetch` describes the core action: fetching all resources (attachments, files, links) from a course. The Firefox/Gecko extension ID is `gcr-fetch@ammarasad.com` (from `manifest.json` → `browser_specific_settings.gecko.id`), confirming the author is `ammarasad` and the product name is "GCR Fetch".

## Tech Stack

**Extension framework / runtime**
- Chrome **Manifest V3** (`manifest_version: 3` in `manifest.json`), with a service worker background script (`background.js`).
- Cross-browser: also targets Firefox via `browser_specific_settings.gecko` (`strict_min_version: "109.0"`), with branching in `background.js` and `api/token.js` for `moz-extension://` redirect URIs.

**UI / frontend**
- **Vanilla JavaScript**, custom HTML/CSS — no framework (React, Vue, etc.) and no build/bundler step.
- Google-design-language styling (Google Sans + Roboto fonts, Google blue gradients) loaded from Google Fonts CDN.
- The sidebar is an `<iframe>` pointing at `sidebar/sidebar.html`, loaded as a `web_accessible_resource`.

**Authentication / OAuth**
- `chrome.identity.launchWebAuthFlow` (interactive OAuth 2.0 code flow) in `background.js`.
- Server-side code/token exchange via a **Vercel serverless function** (`gcr-fetch-backend/api/token.js`, Node ≥ 18 per `package.json`).
- Scopes (from `background.js`): `classroom.courses.readonly`, `classroom.coursework.me.readonly`, `classroom.courseworkmaterials.readonly`, `classroom.announcements.readonly`, `drive.readonly`, `drive.file`, plus `email` and `profile`.

**APIs consumed**
- Google Classroom REST API v1 (`classroom.googleapis.com/v1/courses/{id}/courseWork`, `/courseWorkMaterials`, `/announcements`, `/courseWork/-/studentSubmissions`).
- Google Drive API v3 (`www.googleapis.com/drive/v3/files/{id}?alt=media`, `/files/{id}/export?mimeType=...`, `/files/{id}/copy`, `DELETE /files/{id}`).
- Google OAuth2 v2 userinfo endpoint (`www.googleapis.com/oauth2/v2/userinfo`) and token endpoint (`oauth2.googleapis.com/token`).

**Libraries**
- **JSZip** (`lib/jszip.min.js`) — vendored, used for in-browser ZIP archive creation with DEFLATE level-6 compression.

**Dev tooling / deployment**
- No `package.json` at the repo root, no test suite, no CI config (no `.github/`, no `*.yml`/`*.yaml`), no TypeScript, no ESLint config.
- Backend deployed via Vercel CLI (`vercel --prod`); config is `gcr-fetch-backend/vercel.json` with a single `/api/(.*)` → `/api/$1` route.
- License: MIT (`LICENSE`).

## Overview
GCR Fetch is a browser extension that bulk-downloads every resource attached to a Google Classroom course into a single ZIP archive. The README frames the problem vividly: a typical semester-long course can require "20–25 minutes of manual clicking and downloading" because resources (PDFs, slides, docs, spreadsheets) are scattered across Stream posts, Classwork topics, and announcements with no built-in "download all" button.

The extension is loaded unpacked (not published to the Chrome Web Store) and injects a floating "⬇ GCR Fetch" button into every `classroom.google.com` page via the content script. Clicking the button opens a sidebar panel where the user signs in with a Google account (any Google account, not just the Chrome profile's), scans the current course, reviews/filter/selects discovered resources, and downloads them as a ZIP.

Two distinguishing capabilities are emphasized in the README: (1) **hybrid resource detection** that combines DOM scraping with the Classroom REST API so that resources hidden behind "See more", collapsed topics, or unexpanded classwork are still found; and (2) an **External Resources Dashboard** — a self-contained HTML page bundled into the ZIP — for non-downloadable items (YouTube videos, Google Forms, Drive folders, web links) that come with search, category filters, dark/light mode, and clipboard copy buttons.

The extension is explicitly positioned for students preparing for exams, educators archiving a course before it is deleted, and "anyone who uses Google Classroom and has experienced the tedium of downloading resources one by one." A note in the README restricts the hosted instance to users signing in with a `@isb.nu.edu.pk` email — suggesting the deployed OAuth client is configured for a specific organization (Inferred: the author's university domain).

## Architecture
The extension follows a four-layer architecture, with strict separation between untrusted page DOM, trusted sidebar UI, privileged service worker, and a server-side secret holder.

**Layer 1 — Content script (`content.js`).** Injected at `document_idle` only into `https://classroom.google.com/*`. Responsibilities: detect SPA navigation via a `MutationObserver` on URL changes, inject the floating toggle button and a sandboxed sidebar `<iframe>` (sandbox attribute: `allow-scripts allow-same-origin allow-downloads`), scrape the live Classroom DOM for attachment links (it has DOM access the iframe lacks), and relay messages between the sidebar iframe and the background service worker. Communication with the iframe uses `window.postMessage` with strict origin checks (`SIDEBAR_ORIGIN` derived from `chrome.runtime.getURL`); communication with the background uses `chrome.runtime.sendMessage`.

**Layer 2 — Sidebar (`sidebar/sidebar.{html,css,js}`).** Loaded inside the iframe from a `chrome-extension://` URL (same extension, therefore trusted). Despite being in an iframe it has access to `chrome.runtime` (per the `allow-same-origin` sandbox flag), so it can send messages directly to the background. It orchestrates the entire UX: auth state, scan trigger, filter/select, download progress. It also loads `lib/fetcher.js` and `lib/zipper.js` plus the vendored `lib/jszip.min.js` (see script tags at the bottom of `sidebar.html`). The HTML ships a strict `Content-Security-Policy` meta tag restricting `default-src 'self'`, `script-src 'self'`, `img-src` to `self`/`data:`/two Google thumbnail hosts, and `connect-src 'self'`.

**Layer 3 — Background service worker (`background.js`).** The privileged layer handling: OAuth flow (`LAUNCH_AUTH_FLOW`), token retrieval with refresh (`GET_AUTH_TOKEN`), an authenticated fetch proxy (`FETCH_WITH_AUTH`), sign-out (`SIGN_OUT`), and cached user info (`GET_USER_INFO`). All Google API calls from the sidebar/fetcher are proxied through `FETCH_WITH_AUTH`, which enforces an HTTPS-only, hardcoded Google-domain allowlist (`classroom.googleapis.com`, `www.googleapis.com`, `drive.google.com`, `docs.google.com`) and injects the `Authorization: Bearer <token>` header.

**Layer 4 — Vercel backend (`gcr-fetch-backend/api/token.js`).** A single serverless function that exchanges authorization codes for tokens and refreshes expired tokens. Its sole purpose is to hold `GCR_CLIENT_SECRET` as a Vercel environment variable so the secret never appears in the extension bundle. It enforces CORS limited to `chrome-extension://{EXTENSION_ID}` (and `moz-extension://` origins), rejects non-POST requests, validates input lengths (codes/refresh tokens capped at 512 chars), and never logs tokens.

## Application Model
The application is a **browser extension**, not a web app or CLI. Its runtime model is:

- **Persistent across pages**: a content script auto-injects UI into every `classroom.google.com` page.
- **Event-driven, message-passing concurrency**: three execution contexts (page/content, sidebar iframe, service worker) communicate exclusively via `postMessage` and `chrome.runtime.sendMessage` with typed message envelopes (`SCAN_PAGE`, `REQUEST_AUTH_TOKEN`, `REQUEST_FETCH`, `FETCH_WITH_AUTH`, `FETCH_RESPONSE`, `DOM_SCRAPE_RESULT`, `CLOSE_SIDEBAR`, `SIDEBAR_READY`).
- **Stateful but ephemeral UI state**: `sidebar.js` keeps module-level state (`allFiles`, `filteredFiles`, `activeFilter`, `zipMode`, `isScanning`, `authToken`, `currentCourseId`); these reset whenever the sidebar is reloaded.
- **Persistent auth state**: tokens live in `chrome.storage.local` under keys `gcr_access_token`, `gcr_refresh_token`, `gcr_token_expiry`, `gcr_user` (managed only by `background.js`).
- **Permissions** (`manifest.json`): `identity`, `scripting`, `downloads`, `storage`, plus `host_permissions` for `classroom.google.com`, `classroom.googleapis.com`, `www.googleapis.com`, `drive.google.com`, `docs.google.com`, and the backend `gcr-fetch-backend.vercel.app`.
- **No background page lifecycle persistence**: as an MV3 service worker, `background.js` can be suspended; tokens survive because they are in `chrome.storage.local`, not in-memory.
- **No server-side data store**: the Vercel function is stateless and stores nothing.

## Data Model

**Google Classroom entities fetched** (each maps to a Classroom API endpoint called in `lib/fetcher.js`):

| Entity | Endpoint | Source field | Pages |
|---|---|---|---|
| Coursework (assignments) | `/v1/courses/{id}/courseWork?pageSize=250` | `courseWork[]` | single page |
| Course materials | `/v1/courses/{id}/courseWorkMaterials?pageSize=250` | `courseWorkMaterial[]` | single page |
| Announcements (Stream) | `/v1/courses/{id}/announcements?pageSize=250` | `announcements[]` | single page |
| Student submissions ("Your Work") | `/v1/courses/{id}/courseWork/-/studentSubmissions?userId=me&pageSize=100` | `studentSubmissions[]` | single page |

**Material attachment shapes** parsed in `materialToFileEntry()` — the Classroom API returns materials as one of four discriminated-union variants: `driveFile`, `link`, `form`, `youtubeVideo`. Each is normalized to a `FileEntry`.

**Local `FileEntry` shape** (assembled across `content.js`, `fetcher.js`, `zipper.js`):
```
{
  id,                // synthetic: `drive-{fileId}`, `link-{url}`, `youtube-{id}`, `form-{url}`, `folder-{id}`
  name,              // sanitized filename (≤120 chars, allowlisted charset)
  url,               // direct download URL (Drive alt=media or export endpoint)
  driveFileId,       // raw Google Drive file ID (used for dedupe)
  mimeType,          // raw Google MIME type
  topic,             // classroom topic / post title, used as ZIP folder in "categorized" mode
  source,            // provenance tag: 'stream-dom' | 'classwork-dom' | 'coursework-api' | 'materials-api' | 'announcement-api' | 'submissions-api' | '*-text'
  postTitle,         // parent coursework/post title
  thumbnailUrl,      // optional Drive thumbnail
  isExternalLink,    // true for YouTube/Forms/folders/web links (excluded from blob download)
  linkType,          // 'youtube' | 'form' | 'folder' | 'link'
  isSubmission,      // true for "Your Work" attachments
  selected           // checkbox state set by sidebar.js
}
```

**Persistent storage shape** (`chrome.storage.local`):
- `gcr_access_token: string`
- `gcr_refresh_token: string`
- `gcr_token_expiry: number` (ms epoch)
- `gcr_user: { email, name, picture }`

**MIME-type → export-format mapping** (`materialToFileEntry` in `fetcher.js`): Google Apps native types are converted to Office formats at URL-construction time:
- `application/vnd.google-apps.document` → `.docx` via `export?mimeType=...wordprocessingml.document`
- `application/vnd.google-apps.spreadsheet` → `.xlsx` via `...spreadsheetml.sheet`
- `application/vnd.google-apps.presentation` → `.pptx` via `...presentationml.presentation`
- `application/vnd.google-apps.drawing` → `.png` via `export?mimeType=image/png`
- `application/vnd.google-apps.folder` → external link (not downloaded)

## Pipelines / Flows / Execution Path

**1. Install.** User downloads the repo ZIP, extracts, opens `chrome://extensions`, enables Developer Mode, clicks "Load unpacked", selects the folder containing `manifest.json` (`README.md` → Installation Guide). No build step, no credentials setup — the hosted Vercel backend and Google OAuth client are preconfigured (constants `CLIENT_ID`, `EXTENSION_ID`, `BACKEND_URL` in `background.js`).

**2. Page load / UI injection.** On every `classroom.google.com/*` navigation, `content.js` runs at `document_idle`. `init()` injects styles, the floating button (`#gcr-fetch-toggle-btn`), and the sidebar iframe (`#gcr-fetch-sidebar-frame`, src = `chrome.runtime.getURL('sidebar/sidebar.html')`). A `MutationObserver` watches for SPA URL changes and re-notifies the sidebar with `SCAN_PAGE` messages, re-injecting the button after an 800 ms debounce (`observeNavigation()`).

**3. Auth.** When the sidebar opens and `checkAuthState()` finds no token, it shows the auth panel. User clicks "Sign in with Google" → `sidebar.js` sends `LAUNCH_AUTH_FLOW` → `background.js` builds the Google OAuth URL (response_type=code, access_type=offline, prompt=consent) and calls `chrome.identity.launchWebAuthFlow`. Google redirects back with `?code=...` to `https://{EXTENSION_ID}.chromiumapp.org`. The service worker extracts the code and POSTs `{grantType:'authorization_code', code}` to `https://gcr-fetch-backend.vercel.app/api/token`. The Vercel function forwards to `https://oauth2.googleapis.com/token` with `client_id` + `client_secret` (from env), returns `{access_token, refresh_token, expires_in}`. Background stores them in `chrome.storage.local`, fetches userinfo, stores `gcr_user`, and replies to the sidebar.

**4. Scan (hybrid detection).** User clicks "Scan" → `startScan()` requests a token (`GET_AUTH_TOKEN`, refreshing if within 2-min expiry buffer), then posts `REQUEST_DOM_SCRAPE` to the parent. `content.js#scrapeDom()` walks all `<a href>` and topic headings (`[class*="topic-title"]`, `h2`, `h3`), classifies each link via `parseDriveUrl` / `isFileLink` / `isExternalDomLink`, derives topic context by walking up to 10 ancestors, and returns the file list to the sidebar via `DOM_SCRAPE_RESULT`. The sidebar then calls `window.GCRFetcher.fetchAllResources(courseId, domFiles, onProgress)` which queries the four Classroom API endpoints in sequence, parsing each material through `materialToFileEntry()` and also regex-extracting URLs from plaintext descriptions (`extractUrlsFromText`). Results are merged with dedup by `driveFileId` and `url`. Each API call is individually try/caught so a failure on one endpoint doesn't abort the others — the extension degrades gracefully to "DOM results only".

**5. Review / select.** Files render in `sidebar.js#renderFileList()` (pure `createElement`, no `innerHTML`). Filter chips (All / Documents / Images) and a "Include my submissions" toggle re-apply `matchesFilter()`. Checkboxes mutate `file.selected`; Select All / Deselect All bulk-toggle.

**6. Download / ZIP assembly.** User picks ZIP mode (Flat vs By Topic) and optionally "Download documents as PDF", then clicks Download. `startDownload()` calls `window.GCRZipper.downloadAsZip(selected, zipMode, convertToPdf, onProgress)` in `lib/zipper.js`. The flow:
  - Partition into `downloadFiles` (fetchable blobs) and `linkFiles` (external).
  - If any `linkFiles`: generate the `External Resources.html` blob via `generateHtmlBlob()` and add to ZIP.
  - For each downloadable file: if PDF conversion requested and convertible, `convertAndFetchPdfBlob()` either swaps the `mimeType=` param on existing export URLs or, for non-Google-native files, performs a 3-step `copy → export PDF → delete` workflow via the Drive API; otherwise `fetchFileBlob(file.url)` proxies through `FETCH_WITH_AUTH` (response returned as base64 to cross the message channel, then decoded to a Blob).
  - `buildZipPath()` sanitizes each path segment and resolves collisions with `(1)`, `(2)`, … suffixes up to 999.
  - `zip.generateAsync({compression:'DEFLATE', compressionOptions:{level:6}})` produces the final Blob.
  - `triggerDownload()` creates an `<a download>` with an object URL, clicks it, and revokes the URL after 1 second. Filename: `gcr-resources-{Date.now()}.zip`.

**7. Sign out.** `SIGN_OUT` removes the four `chrome.storage.local` keys; sidebar resets to auth panel.

## Problem Solved
The README's "The Problem" section is unusually candid and specific: "If you've ever used Google Classroom during exam season, you know the pain." The problem is that Google Classroom offers no bulk-download affordance — resources are scattered across Stream posts, Classwork topics, and announcements, accessible only by scrolling the entire feed from oldest to newest and clicking each attachment individually. The README quantifies this: "A typical course with a semester's worth of material can easily take 20–25 minutes of manual clicking and downloading," and frames it as a "procrastination trigger — the friction of 'I have to download everything first' is enough to push students away from preparing for their exams entirely."

GCR Fetch solves this by collapsing the entire download workflow into a single scan + one-click ZIP download, while also solving three secondary problems that any naive solution would miss: (1) resources hidden behind "See more", collapsed topics, or unexpanded classwork (solved by hybrid DOM + API detection); (2) Google Docs/Sheets/Slides aren't directly downloadable — they must be exported via the Drive API (solved by automatic MIME-type-based export to Office formats or PDF); (3) non-downloadable resources (YouTube, Forms, Drive folders, web links) — solved by the External Resources Dashboard HTML page bundled into the ZIP rather than silently dropped.

## Motivation for Building It
The README explicitly states the motivation in its closing line: "Built for students, by a student who got tired of clicking 'Download' 47 times." The "47 times" detail is specific enough to be autobiographical — the author personally experienced the friction and built a tool to eliminate it.

Additional motivational signals visible in the repo:
- The README is unusually thorough and polished for a personal project (architecture diagrams, security section, permissions table, install + dev-setup guides), suggesting the author wanted others (classmates, the wider student community) to adopt it.
- The note restricting the hosted instance to `@isb.nu.edu.pk` sign-ins (Inferred: the author's university email domain) suggests the initial deployment was for the author's own university cohort.
- The MIT license and complete self-hosting instructions ("For Developers & Self-Hosters") indicate the author intends for the design to be forkable by students at other institutions.

## Novel Aspects

- **Hybrid DOM + API resource detection.** Most Classroom downloader approaches pick one strategy. GCR Fetch does both: `content.js` scrapes the live DOM (catching whatever the user has rendered), then `fetcher.js` augments with the Classroom REST API (catching lazy-loaded, collapsed, or "See more"-hidden resources). The two streams are de-duplicated by Drive file ID and URL in `merge()`. This is a meaningfully more robust design than either approach alone.

- **Server-side OAuth code exchange for a browser extension.** Browser extensions cannot keep a client secret confidential, so most MV3 extensions either (a) use `chrome.identity.getAuthToken` (limited to the Chrome profile's Google account) or (b) ship the client secret in the bundle (insecure). GCR Fetch uses a third, less-common pattern: `launchWebAuthFlow` with a code flow, then proxies the code-to-token exchange through a Vercel serverless function that holds the secret as an env var. This lets the extension "work with ANY Google account regardless of the Chrome browser profile" (README) without leaking the secret — a deliberate tradeoff that adds backend infrastructure in exchange for both security and account flexibility.

- **PDF conversion via copy-export-delete.** For non-Google-native Office files (uploaded `.docx`, `.xlsx`, etc.), the extension cannot directly export to PDF (the Drive `export` endpoint only works on Google Apps MIME types). `convertAndFetchPdfBlob()` solves this with a 3-step workflow: `POST /files/{id}/copy` with a `mimeType` override to convert the file to a Google Apps type → `export?mimeType=application/pdf` → `DELETE /files/{newId}` to clean up the temp file. This is a clever reuse of the Drive API to synthesize PDF export for arbitrary documents.

- **External Resources Dashboard as a self-contained HTML artifact.** Rather than dropping non-downloadable links into a README or CSV, `zipper.js#generateHtmlBlob()` generates a polished single-file HTML page with dark/light themes, search, category filters, copy-to-clipboard buttons, and SVG icons — included in the ZIP as `External Resources.html`. This treats YouTube/Forms/folders/web links as first-class outputs rather than second-class citizens.

- **Defense-in-depth filename sanitization at three layers.** `sanitizeFilename()` appears independently in `content.js`, `fetcher.js`, and `zipper.js` (as `sanitizeZipSegment`), each with traversal-pattern stripping, path-separator replacement, character allowlisting, and length capping. This is unusual rigor for a student-built extension and prevents ZIP-slip-style path traversal attacks.

## Optimizations / Efficiencies

- **Token expiry buffer.** `EXPIRY_BUFFER_MS = 2 * 60 * 1000` — tokens are refreshed 2 minutes before actual expiry (`getValidAccessToken()`), avoiding mid-download 401s on long batch fetches.
- **Refresh-on-401 with session invalidation.** If a fetch returns 401, the background clears `gcr_access_token` and `gcr_token_expiry` and reports `needsSignIn: true`, prompting a clean re-auth instead of retrying with a bad token.
- **Base64 blob transport across the message channel.** `FETCH_WITH_AUTH` cannot return a `Blob` directly (Chrome message channels only support JSON-serializable data). `background.js` converts blobs to base64 in 8192-byte chunks (`String.fromCharCode(...uint8Array.subarray(...))`), and `zipper.js#fetchFileBlob` decodes back to a `Blob`. This avoids `postMessage` structured-clone limits while keeping memory bounded by chunked encoding.
- **Deduplication sets.** `seenIds` (Drive file IDs) and `seenUrls` are pre-populated from the DOM scrape so the API phase only adds genuinely new resources — saving redundant Drive downloads.
- **Collision-safe ZIP paths.** `buildZipPath()` maintains a `usedPaths` Set and appends `(1)…(999)` suffixes, so two attachments named "lecture1.pdf" don't silently overwrite each other in the archive.
- **DEFLATE level-6 compression.** A middle-ground compression level — not the slow max (9) nor the fast min (1) — chosen for ZIP generation.
- **Temporary-file cleanup for PDF conversion.** The `copy → export → DELETE` workflow always deletes the temp file even if export succeeds, preventing Drive quota bloat from converted copies.
- **Graceful per-endpoint failure.** Each of the four Classroom API calls in `fetchAllResources` is independently try/caught; failures are collected in an `errors[]` array and surfaced as a toast, but the scan continues with whatever endpoints succeeded.

The repo does not implement explicit rate limiting, request queuing, or backoff. Inferred: this is acceptable because Classroom API quotas are per-user and the typical course yields well under the 250-per-page limits, but a course with >250 coursework items in a single topic would be silently truncated (see Tradeoffs).

## Design Decisions

- **No build step, no framework, vendored JSZip.** The extension ships raw `.js` files loaded via `<script>` tags in `sidebar.html`. Decision: maximize portability and lower the barrier to "load unpacked" by non-developers. Tradeoff: no module system, no TypeScript, no tree-shaking — but for an extension this size, that is acceptable.
- **Sidebar as a sandboxed iframe rather than a Shadow DOM panel.** The sidebar is `chrome.runtime.getURL('sidebar/sidebar.html')` loaded into an `<iframe sandbox="allow-scripts allow-same-origin allow-downloads">`. Decision: full HTML/CSS isolation from Classroom's own DOM, plus the iframe can use `chrome.runtime` directly thanks to `allow-same-origin`. The CSP meta tag in `sidebar.html` then locks down what the iframe can load.
- **`launchWebAuthFlow` instead of `chrome.identity.getAuthToken`.** Decision: support any Google account, not just the Chrome profile's signed-in account. Cost: requires a backend to hold the client secret, plus a more complex redirect-URI handling story (different for Chrome `chromiumapp.org` vs Firefox `127.0.0.1/mozoauth2/...`).
- **No `innerHTML`/`outerHTML` anywhere — all DOM built with `createElement`.** Decision: eliminate XSS vectors entirely. The README's Security section calls this out explicitly, and the code comments in every file reinforce it ("Security: No innerHTML / outerHTML used"). This is unusual discipline for vanilla-JS UI code.
- **HTTPS-only origin allowlist in the fetch proxy.** `FETCH_WITH_AUTH` hardcodes four Google origins and rejects everything else, including all non-HTTPS URLs. Decision: even if a compromised or buggy caller constructs an off-origin URL, the proxy refuses.
- **Cross-browser support from day one.** `manifest.json` includes `browser_specific_settings.gecko`, `background.js` branches on `isFirefox`, and `api/token.js` branches the redirect URI for `moz-extension://`. Decision: support Firefox users without maintaining a separate fork.
- **`prompt: 'consent'` on every auth.** `buildAuthUrl()` always sets `prompt: 'consent'` rather than `select_account`. Decision: force Google to issue a fresh `refresh_token` every time (Google only returns refresh tokens on the first consent unless prompt=consent is used), avoiding the "lost refresh token" failure mode.

## Notable Implementation Details

- **Course ID extraction handles base64-encoded IDs** (`fetcher.js#extractCourseId`). The Classroom web UI sometimes encodes the numeric course ID as base64 in the URL (`/c/<b64id>/...`); the function tries `atob()` on non-numeric IDs and accepts the decoded value if it's purely numeric. This is an undocumented Classroom quirk the author clearly reverse-engineered.
- **External-link host allowlist excludes most `google.com` subdomains.** Both `content.js#isExternalDomLink` and `fetcher.js#createExternalLinkEntry` use the same allowlist of `drive.google.com`, `docs.google.com`, `sites.google.com`, `colab.research.google.com` — all other `*.google.com` links (e.g., accounts, support, classroom internal nav) are ignored to avoid polluting the link dashboard with non-resource Google UI URLs.
- **`courseWorkMap` for submission topic attribution.** `fetcher.js` builds a `Map<courseWorkId, courseWorkTitle>` while scanning coursework, then uses it during student-submission scanning to attribute each submission to the correct assignment title for the ZIP topic path (`My Submissions/{assignmentTitle}`).
- **Progress reporting through callbacks.** Both `fetchAllResources(courseId, domFiles, onProgress)` and `downloadAsZip(files, mode, convertToPdf, onProgress)` accept a progress callback rather than returning a stream/iterator — a pragmatic fit for vanilla JS without async iterators.
- **`MutationObserver` re-injection debounce.** `observeNavigation()` waits 800 ms after a URL change before re-injecting the toggle button, acknowledging that Classroom's SPA re-renders asynchronously.
- **Download trigger cleanup.** `triggerDownload()` revokes the object URL after 1 second and removes the `<a>` element from the body — preventing leaked object URLs and DOM accumulation across multiple downloads.
- **Toast system in sidebar.js.** `showToast(message, type)` builds a `<div>` with `createElement`, animates it out after 4 seconds, and removes it 220 ms later. Exposed as `window.showToast` so `zipper.js` can surface PDF-conversion API errors directly.
- **Hardcoded extension ID.** `EXTENSION_ID = 'fjcdbnkobmjngdbmgacmkgpggeblbhia'` is baked into `background.js` and `api/token.js`. The `manifest.json` includes a `key` field, which fixes the extension ID across machines — necessary for the redirect URI and CORS origin to remain stable.
- **Backend CORS handles `null` origin.** `api/token.js` accepts `origin === 'null'` (which can occur in sandboxed iframes) and `moz-extension://` prefixes, falling back to `*` only when no origin header is present at all.

## Tradeoffs and Limitations

- **No pagination loop — silent truncation at 250/100 items.** Every Classroom API call uses a single `pageSize=250` (or 100 for submissions) request with no `pageToken` handling. If a course has more than 250 coursework items or 100 submissions in a single page, the excess will be silently dropped. The README does not mention this limit. Inferred: this is acceptable for typical courses but would fail for unusually large classes.
- **No explicit rate limiting, retry, or backoff.** The Classroom and Drive APIs have per-user quotas; the extension relies on sequential `await` calls (not parallel) to stay within default limits, but a 429 or 503 response is treated as a hard error with no retry. A large download batch could fail partway with no resume capability.
- **`chrome.storage.local` has a 5 MB limit** (per Chrome documentation, not stated in the repo). The extension stores only short tokens and user info here, so this is unlikely to bind — but if Google ever returns an unusually large refresh token or the user info object grew, storage could fail silently.
- **PDF conversion is slow and burns Drive API quota.** The copy-export-delete pattern issues three Drive API calls per converted file and creates a transient file in the user's Drive. For a course with hundreds of Office attachments, this multiplies API calls and risks hitting Drive write quotas. The README's UI labels the toggle honestly: "Download documents as PDF (takes longer)".
- **No tests, no CI, no type checking.** The repo has no `test/` directory, no `package.json` at the root, no `.github/` workflows, no TypeScript. Bugs in the parsing or sanitization logic would only surface at runtime.
- **Not published on the Chrome Web Store.** Users must "Load unpacked" in Developer Mode, which excludes non-technical users and ChromeOS users without developer mode. The README acknowledges this and frames it as a "less than a minute" setup, but it is a real distribution limitation.
- **Hosted instance is domain-restricted.** The README notes users "only need to sign in using your university `@isb.nu.edu.pk` email address to use it," meaning the deployed OAuth consent screen is configured (likely as an Internal-type or domain-restricted External app) for one university. Self-hosters must create their own Google Cloud project — the dev-setup guide documents this, but it raises the barrier for non-`isb.nu.edu.pk` users of the hosted instance.
- **Service worker suspension can interrupt long scans.** MV3 service workers are suspended after ~30 seconds of inactivity. The Classroom API calls in `fetchAllResources` are sequential `await`s; if a single endpoint stalls long enough, the worker could be torn down. The code does not use `chrome.alarms` or other keepalive techniques (Inferred limitation).
- **No resume on partial download failure.** If the ZIP download fails partway (e.g., network error on blob 47 of 80), the user must re-scan and re-download from scratch. There is no cache of already-fetched blobs.
- **Security is strong but not formally audited.** The "no innerHTML" rule and triple-layer filename sanitization are commendable, but the README does not claim any third-party security review. The trust model ultimately rests on the user trusting the author's hosted Vercel function and hardcoded OAuth client.

## Impact or Value
The README's positioning is explicit about impact: the tool targets "Students who need to bulk-download course materials for exam preparation, offline study, or archival," "Educators who want to save a course's shared resources before the classroom is archived or deleted," and "Anyone who uses Google Classroom and has experienced the tedium of downloading resources one by one." The quantified value proposition is converting "20–25 minutes of manual clicking" into a single scan-and-download — roughly a 95% time reduction for the user's stated use case.

With 3 stars on GitHub (the most-starred of the user's selected repos), the project has at least escaped pure single-user territory, suggesting modest real-world adoption. The README's closing tagline — "Built for students, by a student who got tired of clicking 'Download' 47 times" — frames the impact in personal, immediate terms: a scratch-your-own-itch tool whose primary value is eliminating a universal micro-friction in the Google Classroom experience. The External Resources Dashboard and hybrid DOM+API detection elevate it above what a naive "scrape the page and zip the links" script would deliver — for the target audience, the value is in not having to think about which resources are downloadable vs. linkable, or which Google Docs need export conversion, or where files should be organized in the archive. The MIT license and complete self-hosting guide amplify the potential impact beyond the author's immediate university by making the design forkable for any institution.
