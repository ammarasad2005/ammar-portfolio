# Drama-Ghar — Project Deep Understanding

## Project Name

**DramaGhar** (Urdu for "Drama Home") — a personalized Pakistani drama tracking and streaming platform. The repo is hosted at `github.com/ammarasad2005/Drama-Ghar` and is credited (in `README.md`) to contributors Ammar Asad and Hanzlah Ch. Although the GitHub repo / clone directory is named `Drama-Ghar`, the product UI, `metadata.json`, root layout title (`app/layout.tsx` → `title: 'DramaGhar'`), sidebar branding (`Drama` + gold `Ghar`), and footer copyright ("© 2026 DramaGhar") all use the camel-case form **DramaGhar**. The internal `package.json` `name` field is `"ai-studio-applet"`, and `metadata.json` describes "A web app to discover, track and enjoy your favorite Pakistani dramas" — these are leftovers from the Google AI Studio applet scaffolding the project was generated from (see `next.config.ts` comments referencing AI Studio and `DISABLE_HMR`). The project ships with a `WebProgramming_ProjectRubrics.md` file and a self-evaluation table in the README scoring 180/180, indicating it is a **Web Programming course final project**.

## Tech Stack

Concrete libraries and versions pulled from `package.json`:

**Framework & runtime**
- `next` ^15.4.9 (App Router + Route Handlers, `output: 'standalone'`)
- `react` ^19.2.1 / `react-dom` ^19.2.1
- `typescript` 5.9.3, `eslint` 9.39.1, `eslint-config-next` 16.0.8
- `tsconfig.json`: `target: ES2017`, `strict: true`, `moduleResolution: bundler`, path alias `@/*` → `./*`

**Styling & UI primitives**
- `tailwindcss` 4.1.11 + `@tailwindcss/postcss` 4.1.11 + `@tailwindcss/typography` ^0.5.19
- `tw-animate-css` ^1.4.0, `autoprefixer` ^10.4.21, `postcss` ^8.5.6
- `class-variance-authority` ^0.7.1, `clsx` ^2.1.1, `tailwind-merge` ^3.3.1 (the standard `cn()` helper in `lib/utils.ts`)
- `lucide-react` ^0.553.0 (icons)
- `motion` ^12.23.24 (Framer Motion v12; `transpilePackages: ['motion']` in `next.config.ts`)
- Radix UI: `@radix-ui/react-dialog` ^1.1.15, `@radix-ui/react-separator` ^1.1.8, `@radix-ui/react-slot` ^1.2.4, `@radix-ui/react-tabs` ^1.1.13
- Fonts: Inter + Playfair Display via `next/font/google` (`app/layout.tsx`)

**Data layer**
- `mongoose` ^9.6.2 (MongoDB Atlas — primary store for user data)
- Supabase Postgres REST API (no client SDK; raw `fetch` to `https://grrffdnkupjmsgfdnzfd.supabase.co/rest/v1/...` with a hardcoded publishable key)

**Auth & security**
- `jose` ^6.2.3 (HS256 JWT sign/verify at the Edge)
- `bcryptjs` ^3.0.3 + `@types/bcryptjs` (password hashing, salt rounds 10)
- `crypto` (Node built-in) for reset-token generation and SHA-256 hashing
- `nodemailer` ^8.0.7 + `@types/nodemailer` (Gmail SMTP for password reset)

**Forms & validation**
- `react-hook-form` ^7.75.0
- `@hookform/resolvers` ^5.2.2
- `zod` ^4.4.3

**Date/time**
- `date-fns` ^4.1.0 + `date-fns-tz` ^3.2.0 (all schedule math uses `Asia/Karachi`)

**Video**
- `react-youtube` ^10.1.0 (YouTube iframe wrapper)

**AI / other (declared but lightly used)**
- `@google/genai` ^1.17.0 — declared in `package.json` and referenced in `README.md` as "AI Integration", but a repo-wide grep for `@google/genai|genai|gemini|GoogleGenerativeAI` returns matches **only in `README.md`, `package.json`, and `package-lock.json`** — i.e. the dependency is installed but not imported by any application source file. *Inferred:* the AI integration is aspirational/unused or was prototyped then removed.
- `firebase-tools` ^15.0.0 (devDependency; no `firebase.json` present — *inferred:* likely intended for deployment but not wired up)

**Build / dev tooling**
- `next dev` / `next build` / `next start` / `next clean` / `eslint .` scripts
- A standalone `generate-pages.js` Node script that writes the per-route `page.tsx` wrapper files under `app/(app)/*/page.tsx`

## Overview

DramaGhar is a web app for browsing, streaming, and tracking Pakistani TV dramas. The README enumerates the user-facing capabilities: browse 200+ dramas across major Pakistani channels (ARY Digital, HUM TV, Geo Entertainment, Green Entertainment, Express Entertainment), stream episodes inline via embedded YouTube players, track per-episode watch history with today / weekly / lifetime hour analytics, save dramas to a watchlist, set airing reminders, view a live Electronic Program Guide (EPG) TV-schedule grid that auto-scrolls to "now", manage an account (display name + password), and (for admins) manage users from a dedicated dashboard.

The project is more than a generic CRUD app: it combines (a) a live third-party schedule feed, (b) a third-party catalog/episode data source, (c) its own user/watchlist/history/reminders persistence, (d) client-side YouTube streaming with progress telemetry, and (e) a content-based recommendation endpoint that uses the user's most-recently-watched channel. The product's visual identity is deliberate — deep emerald (`#082F22`) sidebar, gold accent (`#CBA358` / `#D4AF37`), Playfair Display headings, Inter body, Urdu calligraphy in the sidebar footer ("کہانیوں سے رشتے بنتے ہیں" — *Connections are built through stories*).

The README also contains a 35-row self-evaluation rubric (180/180 self-awarded) and the repo includes `WebProgramming_ProjectRubrics.md`, so the project is explicitly a graded academic submission. The GitHub repo currently has 1 star.

## Architecture

The codebase follows the Next.js 15 App Router layout, with a clear separation between a shared-screens layer and thin per-route page wrappers.

**Layer 1 — Edge Middleware** (`middleware.ts`): Runs on every non-static request. Reads the `session` cookie, calls `jose.jwtVerify()` with HS256, and enforces: unauthenticated → redirect to `/login` (with a `publicRoutes` allow-list that includes `/login`, `/signup`, `/forgot-password`, `/reset-password`, and the three public auth APIs); authenticated user hitting `/login` or `/signup` → redirect to `/`; authenticated non-admin hitting `/admin/*` → redirect to `/`. The matcher excludes `api`, `_next/static`, `_next/image`, `favicon.ico`, `sitemap.xml`, `robots.txt`.

**Layer 2 — Route Handlers** (`app/api/**/route.ts`): 13 API endpoints across `auth/`, `admin/`, `drama/`, `dramas/`, `schedule/`, `history/`, `watchlist/`, `reminders/`, `recommendations/`. All are `dynamic = 'force-dynamic'`. Each handler that touches user data calls `dbConnect()` (cached Mongoose connection from `lib/mongodb.ts`) and `getSession()` (from `lib/auth.ts`) to resolve the current user from the JWT cookie. Admin endpoints additionally check `session.role === 'admin'` and return 403 otherwise.

**Layer 3 — Page routes** (`app/(app)/*/page.tsx`): The root `app/page.tsx` simply calls `redirect('/home')`. There is **no single SPA entry**; instead there are 11 thin client-side page wrappers under `app/(app)/` (`home`, `schedule`, `explore`, `channels`, `watchlist`, `continue`, `reminders`, `history`, `settings`, `admin`, `drama/[slug]`). These were generated by `generate-pages.js` and each one: (a) pulls `user` from `UserContext`, (b) wires a `handleNavigate` callback that uses `next/navigation`'s `router.push()`, (c) renders a shared "screen" component from `components/screens/`. The shared `(app)/layout.tsx` renders `Sidebar` + `Header` + footer chrome.

**Layer 4 — Screen components** (`components/screens/*`): 15 full-page screen components (HomeScreen, ScheduleScreen, ExploreScreen, DramaDetailScreen, ChannelsScreen, ContinueWatchingScreen, WatchlistScreen, RemindersScreen, HistoryScreen, SettingsScreen, AdminScreen, AboutScreen, LoginScreen, ForgotPasswordScreen, ResetPasswordScreen). They are pure client components (`'use client'`) that fetch their own data on mount via `fetch('/api/...')` and accept an `onNavigate(screen, params?)` prop for client-side routing.

**Layer 5 — Reusable components** (`components/drama/`, `components/epg/`, `components/ui/`): Sub-components for the drama detail view (`episode-list`, `drama-card`, `video-player-modal`), the EPG grid (`timeline`, `channel-row`, `program-block`, `date-selector`, `epg-schedule`), and shadcn-style UI primitives (`button`, `card`, `badge`, `dialog`, `tabs`, `separator`, `skeleton`, `input`).

**Layer 6 — Lib / models** (`lib/`, `models/`): `lib/mongodb.ts` (cached Mongoose singleton), `lib/auth.ts` (JWT sign/verify/cookie helpers), `lib/drama-types.ts` + `lib/epg-types.ts` (TypeScript interfaces matching pakdrama.pk's Supabase schema), `lib/date-utils.ts` (PKT-aware date formatting), `lib/utils.ts` (`cn`). Mongoose models: `User`, `History`, `Watchlist`, `Reminder`, `DramaView`.

**Layer 7 — Data sources** (external): Drama catalog + episodes + channels + cast come from **Supabase Postgres** owned by `pakdrama.pk` (the project is, in effect, a frontend for pakdrama.pk's data). Live EPG schedule comes from a direct proxy to `https://www.pakdrama.pk/api/web-schedule`. User-specific data lives in **MongoDB Atlas**. A standalone `scripts/pakdrama-scraper.py` writes a 7-day schedule CSV but is **not invoked by the app** — it appears to be an offline exploration/seed tool.

**Cross-cutting**: `context/UserContext.tsx` is a React Context that calls `/api/auth/me` on mount and exposes `{ user, isLoading, checkAuth, logout }`. It is the single source of truth for the current user on the client.

## Application Model

The app uses a **hybrid SSR + CSR model**, despite the README's claim of a "true SPA":

- **Server-side**: Next.js App Router server renders each route's `page.tsx` wrapper (which is `"use client"`, so it renders to HTML on the server then hydrates). The Edge middleware runs on every request at the CDN edge for JWT validation. Route Handlers are serverless functions (`force-dynamic`). There is **no SSG / ISR** for app routes; only the `/api/schedule` route uses `next: { revalidate: 300 }` for upstream caching, and `/api/dramas` and `/api/drama/[slug]` set `Cache-Control: public, s-maxage=300, stale-while-revalidate=600` for CDN caching.
- **Client-side**: All screen components are client components. Each one fetches its own data on mount (`useEffect` → `fetch('/api/...')`) and manages local state. Navigation between screens is client-side via `router.push()` (no full page reload), but it IS multi-route — each route is a separate URL (`/home`, `/schedule`, `/drama/[slug]`, etc.) with its own `page.tsx`.
- **Auth model**: JWT in HTTP-only cookie (`session`), signed with HS256. Default expiry 24h, extended to 30d when `rememberMe: true` is passed at login. Session restore on every page load via `UserContext` calling `/api/auth/me`.
- **Guest mode**: A `/api/auth/guest` endpoint creates a transient session with a generated `ObjectId`, a fake `guest_<id>@dramaghar.local` email, `role: 'user'`, `isGuest: true`, and a 30-day cookie. No `User` document is created in MongoDB — so *inferred:* guest watch history / watchlist writes will fail at the DB-foreign-key level (the `userId` won't exist in the `users` collection), or they will be persisted against an orphan ObjectId. The README does not document guest mode at all.

*Inferred:* The README's "true SPA" and "single Next.js page (`app/page.tsx`)" descriptions reflect an earlier architecture that has since been refactored into a multi-route App Router structure — the `generate-pages.js` script and the existence of 11 separate `page.tsx` files under `app/(app)/` confirm this.

## Data Model

There are two distinct data tiers: pakdrama.pk's Supabase schema (read-only from DramaGhar's perspective) and DramaGhar's own MongoDB schema.

### Supabase (pakdrama.pk) — observed via `lib/drama-types.ts` and the API routes

- **`programs`** table (the Drama entity): `id`, `title`, `slug`, `poster_path`, `status` (Ongoing | On Air | Ended | Upcoming | Completed), `format` (Drama | Movie | Game Show | …), `release_year`, `views`, `episode_count`, `channel_id`, `channel_name`, `schedule_days`, `schedule_time`, `description`, `director`, `genre`, `genre_list`, `is_active`. Queried in `app/api/dramas/route.ts` and `app/api/drama/[slug]/route.ts`. Notably, the code **intentionally does NOT filter by `is_active`** (see comment in `app/api/dramas/route.ts`): "many dramas with episodes (like Pehli Barish) have is_active=false in Supabase but are still valid and visible on the original pakdrama.pk site".
- **`episodes`** table: `id`, `program_id`, `episode_number`, `title`, `youtube_id`, `video_url`, `air_date`, `created_at`. Ordered by `episode_number.desc`.
- **`channels`** table: `id`, `name`, `slug`, `logo_path`.
- **`program_cast`** table: `role`, `character_name`, `program_id`, plus a nested `actors(id, name, slug, image_path)` relation (Supabase PostgREST resource-embedding syntax).
- **`web-schedule`** (pakdrama.pk's own API, not Supabase): returns an array of channels each with `programs[]` where each program has `id`, `title`, `slug`, `start_time_pkt` (ISO 8601 with `+05:00` offset), `end_time_pkt`, `schedule_time` (e.g. "8:00 PM"), `status`, `airingType` (Repeat | PrimeTime | Fresh), `isPrime`, `poster_path`, `format`. Defined in `lib/epg-types.ts`.
- **Storage**: Media assets live at `https://grrffdnkupjmsgfdnzfd.supabase.co/storage/v1/object/public/media/<path>` (helper `getMediaUrl()` in `lib/drama-types.ts`). Channel logos are SVGs under `media/channels/`.

### MongoDB (DramaGhar's own) — observed in `models/*.ts`

- **`User`** (`models/User.ts`): `email` (unique, lowercase, trimmed), `passwordHash` (bcrypt hash, `select: false`), `name?`, `role` (enum `user` | `admin`, default `user`), `status` (enum `active` | `inactive`, default `active`), `resetToken?`, `resetExpiry?`, auto timestamps. Instance method `comparePassword(candidate)` uses `bcrypt.compare`.
- **`History`** (`models/History.ts`): `userId` (ObjectId ref User), `slug`, `title`, `episode` (string), `progress` (number 0–100), `image?`, `watchDurationMinutes` (default 0), `lastWatched` (Date). Compound unique index on `{userId, slug, episode}` — so re-watching the same episode upserts the same row instead of duplicating.
- **`Watchlist`** (`models/Watchlist.ts`): `userId`, `slug`, `title`. Compound unique index `{userId, slug}` — one watchlist entry per drama per user.
- **`Reminder`** (`models/Reminder.ts`): `userId`, `slug`, `title`, `time` (string, e.g. "8:00 PM"), `channel` (string), `image?`. Compound unique index `{userId, slug}`.
- **`DramaView`** (`models/DramaView.ts`): `slug` (unique), `views` (number). Local counter that is **added** to the Supabase-supplied view count in `app/api/drama/[slug]/route.ts` (line 60–65): `drama.views = (drama.views || 0) + localView.views`. Incremented on every drama-detail page load via `POST /api/drama/[slug]/view`.

### Relationships

A Drama is identified by its Supabase `slug` across both tiers. MongoDB documents reference dramas only by `slug` (a denormalized string, not a foreign key) plus a cached `title` — so if pakdrama.pk renames or removes a drama, DramaGhar's history/watchlist/reminders rows will dangle. The `History` GET endpoint mitigates stale image URLs by re-fetching `poster_path` from Supabase for every history item and stripping any `picsum.photos` placeholder URLs (a leftover from an earlier placeholder-image era).

## Pipelines / Flows / Execution Path

### Flow 1 — Discovery (Browse → Detail → Stream)

1. Authenticated user lands on `/home` (after `app/page.tsx` redirects there). `HomeScreen.tsx` mounts three parallel `fetch`es: `/api/history` (for "Resume Watching"), `/api/recommendations` (for "Recommended"), `/api/schedule?date=<PKT today>` (for "Live on TV Now").
2. `/api/recommendations/route.ts` (`app/api/recommendations/route.ts`): if a session exists, queries MongoDB `History` for the 10 most-recent watch entries, takes `watchedSlugs[0]` (the most-recent slug), fetches its `channel_name` from Supabase, then runs a Supabase query for `programs` with `channel_name=eq.<preferred>` and `slug=not.in.(<watched>)`, ordered by `views.desc`, limit 5. If that returns fewer than 3, it falls back to a global trending query (limit 10), merges uniquely, and returns the top 3 with constructed image URLs.
3. "Live on TV Now" filters the EPG schedule client-side: only programmes whose `start_time_pkt ≤ now < end_time_pkt` are shown, with a pulsing "LIVE" badge.
4. User clicks a drama card → `onNavigate('drama', { slug })` → `router.push('/drama/<slug>')` → `app/(app)/drama/[slug]/page.tsx` renders `DramaDetailScreen`.
5. `DramaDetailScreen.tsx` `useEffect` fetches `/api/drama/<slug>` which fans out into **four Supabase queries**: (a) the `programs` row by slug, (b) local `DramaView` for view-count augmentation, (c) `episodes` by `program_id` ordered by `episode_number.desc`, (d) `channels` by `channel_id`, (e) `program_cast` with nested `actors`. The merged `DramaDetail` JSON is returned.
6. Side effect on load: `fetch('/api/drama/<slug>/view', { method: 'POST' })` increments the local view counter (fire-and-forget).
7. User clicks "Watch Now" or an episode → `handlePlayEpisode` opens `VideoPlayerModal` (react-youtube iframe) AND fires `POST /api/history` with the drama/episode metadata.
8. While playing, `VideoPlayerModal.tsx` runs a `setInterval` every 5 seconds; if the YouTube player state is `1` (playing) and ≥30 seconds have elapsed since the last log, it calls `onProgress(30)`. `DramaDetailScreen.handleTrackProgress` converts that to `incrementMinutes: Math.ceil(30/60) = 1` and POSTs to `/api/history` with `$inc: { watchDurationMinutes: 1 }`. *Observed quirk:* this rounds 30 seconds up to 1 minute, so watch-time analytics overcount by ~2×.

### Flow 2 — Scheduling (EPG grid)

1. User navigates to `/schedule` → `ScheduleScreen` renders `<EpgGrid date={selectedDate} selectedChannel={...} />`.
2. `EpgGrid.tsx` `useEffect` fetches `/api/schedule?date=YYYY-MM-DD`. The API route (`app/api/schedule/route.ts`) proxies to `https://www.pakdrama.pk/api/web-schedule?date=...` with `next: { revalidate: 300 }` (5-minute upstream cache), parses the response (handles three shapes: `data.data.result` as a JSON string, a top-level array, or `data.data` as an array), and returns the channels array.
3. `EpgGrid` computes a current-time marker in minutes-since-PKT-midnight (`(Date.now() - startOfDayPktUnix) / 60000`), updates every 60s, and renders a 24-hour horizontal grid at **2px per minute** (so 24h = 2880px wide). Each programme block is positioned at `left = startMinutes * 2` with `width = duration * 2 - 1`.
4. On mount, the grid auto-scrolls to center the current time (`scrollLeft = nowMinutes * 2 - 200`). A pulsing emerald dot + vertical line marks "now". The user can also click-drag to scroll (mouse-down/move handlers).
5. Channel logos are loaded from a hardcoded map of 5 channels (ARY Digital, Express Entertainment, Geo Entertainment, Green Entertainment, HUM TV); `LTN Family` is explicitly filtered out (`ch.name === 'LTN Family'` → false).

### Flow 3 — Tracking (Watchlist + Reminders + History)

1. **Watchlist add**: From `DramaDetailScreen`, "Add to Schedule" button → `POST /api/watchlist` with `{ dramaId, title, slug, posterPath, channel, day, time }`. The `Watchlist` model only persists `userId`, `slug`, `title` — the extra fields are accepted by the route but not stored (the schema doesn't declare them). Duplicate insert returns 400 "Already in watchlist" via the 11000 catch.
2. **Reminders**: `POST /api/reminders` with `{ slug, title, time, channel, image }` upserts on `{userId, slug}`. Reminders are surfaced on `/reminders` and there is no push-notification or cron job — *inferred:* a reminder is purely a UI affordance showing "this drama airs at <time> on <channel>".
3. **History analytics**: `HistoryScreen.tsx` fetches `/api/history`, then `calculateAnalytics()` buckets `watchDurationMinutes` by `lastWatched` into today / last-7-days / lifetime and formats as "X hours Y minutes".

### Flow 4 — Authentication

1. **Register** (`POST /api/auth/register`): validates email+password exist, checks for existing user, `bcrypt.hash(password, 10)`, creates User (role defaults to `user`, status to `active`), calls `createSession()` which sets the HTTP-only `session` cookie.
2. **Login** (`POST /api/auth/login`): `User.findOne({email}).select('+passwordHash')`, `user.comparePassword(password)`, blocks inactive users with 403, `createSession({...}, rememberMe)`.
3. **Session restore** (`GET /api/auth/me`): `getSession()` decrypts the cookie, returns `{userId, email, role, name, isGuest}`.
4. **Logout** (`POST /api/auth/logout`): `destroySession()` deletes the cookie.
5. **Forgot password** (`POST /api/auth/forgot-password`): `crypto.randomBytes(32).toString('hex')` → SHA-256 hashed → stored as `resetToken`, `resetExpiry = now + 60min`. Sends email via Nodemailer/Gmail SMTP with link `${APP_URL}/?resetToken=<raw>&email=<encoded>`. If `EMAIL_USER`/`EMAIL_PASS` env vars are missing, it logs the reset URL to the console instead (dev fallback). Returns the same success message whether or not the email exists (anti-enumeration).
6. **Reset password** (`POST /api/auth/reset-password`): looks up user by `email + resetToken (hashed) + resetExpiry > now`, sets new `bcrypt.hash(password, 10)`, clears the token, saves.
7. **Guest** (`POST /api/auth/guest`): generates a transient `ObjectId`, creates a JWT session with `isGuest: true` and 30-day cookie — no MongoDB `User` document is created.
8. **Edge middleware** (`middleware.ts`) gates every page request before it reaches a handler: invalid/expired JWT → treated as unauthenticated → redirected to `/login` unless on a public route.

### Flow 5 — Admin

1. `Sidebar.tsx` conditionally pushes `{ id: 'admin', label: 'Admin Dashboard', icon: UserCog }` into `secondaryNav` only when `user?.role === 'admin'`.
2. `GET /api/admin/users` returns all users (excluding `passwordHash`) sorted by `createdAt.desc`. Both `GET` and `PATCH` short-circuit with 403 if `session.role !== 'admin'`.
3. `PATCH /api/admin/users` updates `role` and/or `status` for a given `userId`.
4. `DELETE /api/admin/users?userId=...` (not documented in the README's API table) deletes a user by ID.
5. Edge middleware redirects non-admins away from `/admin/*` before the request even reaches the page.

## Problem Solved

Pakistani dramas air on a fixed weekly schedule across a handful of channels (ARY Digital, HUM TV, Geo, Green, Express), and full episodes are uploaded to YouTube shortly after broadcast — but there is no single, polished, personalized destination that combines (a) a live TV-guide grid in PKT, (b) a searchable 200+ drama catalog with cast/episode metadata, (c) in-app streaming, and (d) per-user tracking (history, watchlist, reminders, watch-time analytics). DramaGhar solves this by acting as a unified, authenticated frontend on top of pakdrama.pk's existing data (Supabase catalog + `web-schedule` API) and YouTube's embeddable episode videos, while adding its own user accounts, watchlist, reminders, history, and analytics layer that the upstream source does not provide.

The problem is concretely visible in the data flow: pakdrama.pk owns the content metadata, but it has no concept of "your watchlist" or "you watched 4.5 hours this week" — DramaGhar adds exactly that personal layer via MongoDB + JWT auth, layered over the shared catalog. The admin dashboard also solves the operational problem of account management (deactivating abusive users, granting/revoke admin role) which pakdrama.pk as a public site would not expose.

## Motivation for Building It

The README's "Project Overview" section frames the motivation implicitly: *"a personalized Pakistani drama tracking and streaming platform"*. The contributors are listed as Ammar Asad and Hanzlah Ch. The presence of `WebProgramming_ProjectRubrics.md` (an academic rubric covering Functionality, Password Encryption, RBAC, Form Validation, Navigation, UI/UX, Auth & Session, Git, Footer, Content & Creativity, Performance) and the README's 180/180 self-evaluation table make it explicit that the **primary external motivation is satisfying a Web Programming course final-project rubric** — every README section is structured to map 1:1 to a rubric criterion.

*Inferred* secondary motivations, grounded in the code:
- A genuine desire to build a "polished streaming app" experience (Framer Motion animations, Urdu calligraphy, emerald/gold palette, "Salaam, {name}" greeting) rather than a generic CRUD demo.
- An interest in Pakistani drama culture specifically (the subtitle "کہانیوں سے رشتے بنتے ہیں", PKT timezone handling, hardcoded 5 Pakistani channel logos).
- Convenience: the contributors presumably watched Pakistani dramas themselves and wanted a tracking UI comparable to Netflix/Trakt but localized to the Pakistani drama ecosystem.

## Novel Aspects

- **Hybrid two-database architecture**: MongoDB for user-owned data and Supabase (a third party's Supabase, not their own) for catalog/episode data, joined at the API layer by `slug`. This is unusual — most apps own all their data. DramaGhar explicitly treats pakdrama.pk's Supabase as a read-only upstream and writes its own data against a separate store.
- **EPG grid with auto-scroll-to-now and 2px/minute pixel math** (`EpgGrid.tsx`): a custom, from-scratch timeline grid (no library) that positions each programme block via absolute positioning at `left = startMinutes * 2`, with a live pulsing "now" indicator, click-drag scrolling, and a sticky channel-column header that translates horizontally with `scrollX` state. This is the most genuinely novel piece of frontend engineering in the repo.
- **View-count augmentation** (`DramaView` model + `POST /api/drama/[slug]/view`): the app maintains its OWN view counter in MongoDB and adds it to the Supabase-supplied view count at read time (`drama.views = supabase.views + localView.views`). This lets the app show "views" that reflect DramaGhar traffic without ever writing to the upstream Supabase.
- **Anti-enumeration forgot-password**: `POST /api/auth/forgot-password` returns the same generic success message whether or not the email exists, and the reset token is SHA-256 hashed before storage (so a DB leak doesn't expose valid tokens).
- **Guest mode with transient ObjectId**: `/api/auth/guest` issues a real JWT with a freshly-generated `ObjectId` and `isGuest: true`, so guest users can navigate protected routes without registering. *Inferred:* the design intent is to let curious visitors explore before committing to sign-up.
- **Content-based + trending recommendation fusion** (`/api/recommendations`): a lightweight, two-stage recommender (preferred-channel matching → trending fallback with de-duplication against already-watched slugs) without any ML model.
- **Bilingual UX touches**: Urdu calligraphy in the sidebar footer, "Salaam, {name}" greeting, PKT timezone handling throughout.
- **`generate-pages.js` codegen**: rather than hand-writing 11 nearly-identical `page.tsx` wrappers, the contributors wrote a Node script that generates them. This is a small but real developer-experience optimization.

## Optimizations / Efficiencies

- **MongoDB connection caching** (`lib/mongodb.ts`): the `dbConnect()` function caches the Mongoose promise on `global.mongoose` to survive Next.js dev hot-reloads and to reuse the connection across serverless invocations — the standard Next.js + Mongoose pattern.
- **Edge-based JWT verification** (`middleware.ts`): auth runs at the CDN edge (not in a Node lambda) on every request, so unauthorized requests never reach a serverless function.
- **CDN caching headers** on read-heavy catalog endpoints: `/api/dramas` and `/api/drama/[slug]` set `Cache-Control: public, s-maxage=300, stale-while-revalidate=600`; `/api/schedule` uses Next's `next: { revalidate: 300 }`. This dramatically reduces the load on the upstream pakdrama.pk / Supabase APIs.
- **Lazy per-screen data fetching**: each screen component fetches only its own data in `useEffect` on mount. The home screen fires three parallel fetches (history, recommendations, schedule) without blocking each other.
- **`output: 'standalone'`** in `next.config.ts`: produces a minimal self-contained production build (smaller container image).
- **`transpilePackages: ['motion']`**: required for Framer Motion v12 + Next 15 compatibility.
- **Compound unique indexes** in Mongoose (`{userId, slug, episode}` on History, `{userId, slug}` on Watchlist/Reminder): prevent duplicate rows at the DB level so the application code can rely on upsert semantics.
- **Image optimization**: `next/image` is used throughout (`<Image fill>` with explicit `sizes` on the drama detail poster); `next.config.ts` whitelists four remote image hostnames (picsum.photos, the Supabase bucket, img.youtube.com, i.ytimg.com).
- **Stale-image cleanup** in `/api/history` and `/api/reminders` GET handlers: re-fetches `poster_path` from Supabase and strips `picsum.photos` placeholder URLs, so old history rows get fresh images over time.

## Design Decisions

- **Custom JWT auth instead of NextAuth/Auth.js**: the contributors built their own session system with `jose` + HTTP-only cookies + bcrypt. This is more work but gives full control over the session payload shape (e.g. `isGuest`, `role`) and lets the Edge middleware verify tokens without importing the full Auth.js runtime.
- **HTTP-only, `SameSite=Lax`, `secure`-in-production cookies** (`lib/auth.ts`): the cookie is not accessible from JavaScript (XSS-resistant) and is scoped to the path root. *Trade-off:* no `__Secure-` or `__Host-` prefix, no CSRF token (relies on `SameSite=Lax` for CSRF mitigation).
- **Salt rounds = 10 for bcrypt** (industry standard; ~100ms per hash).
- **Password reset via query-string token** (`?resetToken=<raw>&email=<encoded>`) rather than a path-based `/reset-password/<token>` route: simpler to implement on top of the existing `/login` page but means tokens may leak via Referer headers or browser history if not handled carefully. *Inferred:* a deliberate simplicity/rubric-driven choice.
- **Denormalized drama reference (slug + title)** in MongoDB docs rather than a foreign key to a local `Drama` table: keeps the app purely a frontend for pakdrama.pk's catalog and avoids replicating the catalog locally.
- **Hardcoded Supabase publishable key** in API routes (`sb_publishable_HrDqnn2HRf38IZtvYF5V8g_b7C_4FOf`): safe because it is a *publishable* key (read-only), but it does couple DramaGhar permanently to pakdrama.pk's specific Supabase project.
- **Hardcoded JWT secret fallback** (`process.env.JWT_SECRET || "fallback_secret_key"`): a deliberate dev convenience but a real production risk if env vars are misconfigured — *inferred:* acceptable for a course project, unacceptable for production.
- **Filtering out `LTN Family`** from the EPG grid: an explicit domain decision — LTN Family is a Pakistani channel that pakdrama.pk includes but DramaGhar hides, presumably because it doesn't fit the curated channel set.
- **Not filtering by `is_active`** in Supabase queries: explicitly documented in code comments — pakdrama.pk has dramas with `is_active=false` that still have valid episodes (e.g. *Pehli Barish*), so DramaGhar shows them anyway to keep EPG→detail deep links working.
- **`force-dynamic` on every API route**: ensures fresh data at the cost of no static optimization — appropriate because every route either reads user state or proxies live third-party data.
- **Generated page wrappers** (`generate-pages.js`): keeps the per-route `page.tsx` files trivially thin and identical in shape (auth check → wire `onNavigate` → render screen component), so adding a new screen is a one-liner.

## Notable Implementation Details

- **`EpgGrid.tsx` pixel math**: 2px per minute, 24 hours = 2880px wide, current-time indicator at `translate3d(${nowMinutes * 2}px, 0, 0)` with `willChange: 'transform'` and a `transition-all duration-1000 ease-linear` for smooth minute-by-minute movement. The scroller uses manual `mousedown`/`mousemove`/`mouseup` handlers for click-drag scrolling with a 2× speed multiplier (`walk = (x - startX) * 2`).
- **`VideoPlayerModal.tsx` progress tracking**: a `setInterval` every 5 seconds checks `playerRef.current.getPlayerState() === 1` (YouTube API's "playing" constant), and only logs when `currentTime - lastLoggedTimeRef.current >= 30`. The YouTube player ref is captured in `onReady`. There's also a portrait-orientation "Rotate for Full Screen" hint that auto-dismisses after 5 seconds on mobile, and Escape-key close support.
- **`/api/drama/[slug]/route.ts` multi-fetch fan-out**: a single API call triggers four sequential Supabase REST queries (program, episodes, channel, cast) — the cast query uses PostgREST's resource-embedding syntax `program_cast?select=role,character_name,actors(id,name,slug,image_path)` to join the `actors` table in one request.
- **`/api/recommendations/route.ts` two-stage fusion**: stage 1 (content-based) fetches up to 5 dramas from the user's preferred channel excluding already-watched slugs; stage 2 (trending fallback) only runs if stage 1 returned fewer than 3, fetches 10 global top-viewed dramas excluding already-watched, and merges uniquely until 3 are collected.
- **`/api/history` GET image refresh**: for every history item, the route fetches `poster_path` from Supabase for the union of slugs (`slug=in.(slug1,slug2,...)`), builds a `Map<slug, poster_path>`, and rewrites each item's `image` field — stripping `picsum.photos` placeholder URLs.
- **`models/History.ts` unique compound index** `{userId, slug, episode}`: enables the upsert pattern in `POST /api/history` (`findOneAndUpdate(..., {upsert: true, new: true})`) so re-watching the same episode updates `lastWatched` and `$inc`s `watchDurationMinutes` instead of creating a duplicate row.
- **`app/api/drama/[slug]/view/route.ts`**: a fire-and-forget endpoint called from `DramaDetailScreen` on every drama-detail page load — `DramaView.findOneAndUpdate({slug}, {$inc: {views: 1}}, {new: true, upsert: true})`. The README does not document this endpoint.
- **`middleware.ts` matcher**: `'/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'` — a negative lookahead that exempts all API routes and Next.js internals from the page-protection logic. *However*, the middleware DOES read cookies and verify JWTs for `/_next/image` requests that aren't matched (they ARE matched-and-excluded) — *inferred:* the matcher is correct and intentional.
- **`lib/date-utils.ts`**: replicates the `q` (formatInTimeZone) and `qD` (formatDateKey) helper functions from pakdrama.pk's own frontend source (per the comment "equivalent to the `q` function in the original pakdrama.pk source"). `getRollingDates()` generates a -1 to +5 day window around PKT "today".
- **`generate-pages.js`**: a codegen script that writes 10 standard page wrappers + 2 special-cased ones (ExploreScreen as default export, DramaDetailScreen with `[slug]` dynamic param). Running it again would overwrite the page files.
- **`scripts/pakdrama-scraper.py`**: a standalone Python script (using `requests`, sleeps 1s between days) that fetches 7 days of `web-schedule` data and writes `pakdrama_api_schedule_full.csv`. It is **not invoked anywhere in the JS/TS code** — *inferred:* it was used for offline exploration of the pakdrama.pk API shape before building the live `/api/schedule` proxy.

## Tradeoffs and Limitations

- **No real progress tracking**: `History.progress` is always written as `0` or `100` (the `VideoPlayerModal` reports fixed 30-second increments, and the UI renders the progress bar at a hardcoded `width: 100%` in `HistoryScreen`, `ContinueWatchingScreen`, and `HomeScreen`). The "Continue Watching" feature does not actually resume at a timestamp — clicking it just navigates to the drama detail page. *Observed directly in the source.*
- **Watch-time overcounting**: `VideoPlayerModal` reports `onProgress(30)` (30 seconds) every 30 seconds of playback; `DramaDetailScreen.handleTrackProgress` converts that to `incrementMinutes: Math.ceil(30/60) = 1` minute. So 30 actual seconds of playback = 1 logged minute — analytics overcount by ~2×.
- **No test suite**: there is no `__tests__`, `*.test.ts`, `*.spec.ts`, vitest/jest config, or CI workflow file in the repo. The `npm run lint` script is the only static check, and `next.config.ts` sets `eslint: { ignoreDuringBuilds: true }`.
- **Hardcoded JWT secret fallback**: `lib/auth.ts` and `middleware.ts` both use `process.env.JWT_SECRET || "fallback_secret_key"`. If the env var is missing in production, all tokens are signed with a publicly-known secret — a complete auth bypass.
- **Hardcoded Supabase publishable key**: every API route that hits Supabase hardcodes `sb_publishable_HrDqnn2HRf38IZtvYF5V8g_b7C_4FOf`. This is read-only and safe to expose, but it permanently couples DramaGhar to pakdrama.pk's Supabase project; if pakdrama.pk rotates the key or shuts down the project, DramaGhar's entire catalog and EPG break with no fallback.
- **No upstream data ownership**: DramaGhar cannot add, edit, or remove dramas — it is entirely dependent on pakdrama.pk's data continuing to exist. There is no local copy of the catalog.
- **AI integration is declared but unused**: `@google/genai` ^1.17.0 is in `package.json` and the README lists "AI Integration (Google Generative AI)" as a feature, but a repo-wide grep confirms it is **never imported** by any application source file. The recommendation engine is plain content-based filtering, not AI.
- **README is partially stale**: the README claims "true SPA", "single Next.js page (`app/page.tsx`)", "all navigation in React state — no full page reloads", but the actual code uses a multi-route App Router (`app/page.tsx` redirects to `/home`; there are 11 separate `page.tsx` files under `app/(app)/`). The README also claims JWT `exp` of 7 days, but `lib/auth.ts` uses `24h` (or `30d` with `rememberMe`). The README claims the Zod schema enforces "minimum password length (8 chars)" but `LoginScreen.tsx` enforces `min(6)`. The README omits the `DELETE /api/admin/users` endpoint and the entire guest-mode feature.
- **Guest mode has no backing User document**: `/api/auth/guest` creates a JWT with a transient `ObjectId` but never writes a `User` to MongoDB. Any subsequent `POST /api/history` / `/api/watchlist` / `/api/reminders` from a guest will create documents with a `userId` that doesn't exist in the `users` collection — Mongoose doesn't enforce this as a foreign key, so the rows will be written but orphaned. *Inferred:* guest mode is best-effort and likely produces DB orphans.
- **About/Privacy/Contact footer links are placeholders**: all three footer buttons route to `/about` (see `app/(app)/layout.tsx` lines 62–64) — there is no real Privacy or Contact page.
- **No CSRF protection**: relies entirely on `SameSite=Lax` cookies. State-changing `POST`/`DELETE`/`PATCH` endpoints do not validate a CSRF token. Acceptable for `SameSite=Lax` but not for `SameSite=None` scenarios.
- **Single-channel recommendation signal**: `/api/recommendations` only uses the *single most-recently-watched* drama's `channel_name` as the preference signal. A user who watches one show on a different channel will get skewed recommendations until they watch something else.
- **`firebase-tools` devDependency with no `firebase.json`**: declared but not wired up — *inferred:* leftover or planned-for-later deployment tooling.

## Impact or Value

For end users, DramaGhar consolidates a fragmented Pakistani-drama viewing experience (scattered YouTube uploads, no personalized TV-guide, no tracking) into a single authenticated web app with a live EPG grid, a 200+ drama catalog, in-app streaming, and quantitative watch analytics. The product genuinely feels closer to a Netflix/Trakt-style experience than to a generic CRUD demo — the emerald/gold visual identity, Urdu calligraphy, Framer Motion micro-interactions, and PKT-aware scheduling all reinforce a "real product" feel rather than a homework exercise.

Academically, the project demonstrates end-to-end competence across the rubric axes: custom JWT auth with Edge-middleware verification, bcrypt password hashing with `select: false` and `comparePassword` instance method, secure token-based password reset with SHA-256 hashing and 60-minute expiry, two-role RBAC (admin/user) enforced at both the middleware and route-handler layers, client+server Zod validation, full CRUD for history/watchlist/reminders, an admin dashboard with user management, and a non-trivial custom EPG grid component. The README's 180/180 self-evaluation is broadly defensible against the code, though the "AI Integration" claim is overstated and the "true SPA" / "8-char password" / "7-day JWT" descriptions are stale.

Technically, the most reusable ideas are: (a) the hybrid "foreign Supabase + own MongoDB" pattern for adding a personal layer over a third-party catalog without replicating it, (b) the local `DramaView` counter that augments an upstream view count without writing to the upstream, (c) the from-scratch 2px-per-minute EPG grid with auto-scroll-to-now, and (d) the `generate-pages.js` codegen pattern for keeping Next.js App Router page wrappers DRY. The repo has 1 GitHub star, so its real-world reach is small, but as a portfolio piece and a Web Programming capstone it credibly demonstrates full-stack proficiency.
