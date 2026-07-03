# Batch 02 — Portfolio Research (R1-B2)

> **Scope**: 5 developer portfolios (corpus items #6–10).
> **Method**: `agent-browser` desktop @ 1440×900 — hero shot, 2–3 mid-scroll shots, computed-style eval, keyframe inventory, link/reachability verification.
> **Context carried in**: Batch 1 confirmed (a) domain-native conceptual metaphor (Triet's shell), (b) two-font developer-coded feel, (c) metadata-as-hero-content, (d) hero-as-brand-statement, (e) anti-patterns: default `document.title`, OS-default H1 fonts, broken 3rd-party widgets, GitHub-repo dumping.

---

## Portfolio 6 — Akash Balasubhramanyam — https://akashblsbrmnm.github.io

- **Reachable**: yes (HTTP 200, GitHub Pages)
- **First impression**: Clean light Tailwind template that reads as a fork the author never finished populating — contact details, GitHub handle, LinkedIn handle and the resume PDF all point to placeholders or 404.
- **Visual hierarchy**: H1 (48px / 800) "Akash Balasubramaniyam" → uppercase mono eyebrow "BROADBAND SOFTWARE ENGINEER" → paragraph → CTA pair. Header is sticky with logo, anchor links, theme-toggle, "Download Resume" pill.
- **Layout composition**: Single-page vertical scroll, `max-w-6xl mx-auto`, 4 stacked sections (Hero, Core skills, Selected projects, Experience, Contact) + footer.
- **Typography**: Single family — **Ubuntu** (body + H1). Mono fallback only on the eyebrow (`font-mono`). H1 48px / 800, eyebrow uppercase tracking-wider.
- **Color palette**: White `#FFFFFF` body, slate `#0F172A` ink, slate-500/600 mid, blue-600 `#2563EB` + indigo-700 gradient for logo avatar and CTA. Blue-700→Indigo-600 gradient token reused. Has `dark:bg-gray-900` Tailwind variant in CSS — dark mode is supported but defaults to light.
- **Spacing**: Balanced (Tailwind defaults: py-6 header, mt-10/mt-12 between sections).
- **Hero section**: Two-column grid — left has H1 + eyebrow + tagline + "View projects" + "Get in touch" CTAs; right column is empty (image slot never filled). `min-h-[56vh]`.
- **Navigation**: Sticky top header. Logo (gradient avatar + "Akash"), three anchor links (Projects/Experience/Contact), theme-toggle (sun/moon SVG), "Download Resume" pill.
- **Section ordering**: Hero → Core skills → Selected projects → Experience → Contact → Footer.
- **Scroll experience**: Plain native scroll. No parallax, no scroll-triggered animations. One keyframe (`pingOpacity`) — likely on a "open to work" status dot (not visible in screenshot).
- **Animations & motion**: Minimal. Only `pingOpacity` keyframe. No signature move.
- **Hover interactions**: Tailwind hover-darken on links (`hover:bg-slate-200`). No transforms.
- **Background effects**: Plain white. No grain, no gradient wash, no canvas. 12 SVGs (likely icons in the skills/projects cards).
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive classes (`md:grid-cols-2`, `sm:`). Should adapt, but mobile nav is just a hidden "Download Resume" — no hamburger observed.
- **Performance perception**: Light. 0 images on hero, only SVG icons. But: a 9.4 KB 404 page is shipped for the missing `resume.pdf` (verified: `curl -I /resume.pdf → 404`).
- **Emotional feeling**: Calm, unfinished.
- **Originality**: 2/5 — cleanly built Tailwind template, but populated with placeholder strings.
- **What works**:
  - Title correctly set ("Akash — Embedded & Broadband Software Engineer") — passes batch 1's #1 anti-pattern.
  - Mono uppercase eyebrow on the role label is a developer-coded signal consistent with batch 1's "two-font feel".
  - 3 curated projects, not a GitHub dump.
- **What does NOT work** (anti-patterns to avoid):
  - Contact section ships `youremail@example.com`, `github.com/yourgithub`, `linkedin.com/in/yourlinkedin` — the author never replaced the template placeholders. Worse than a generic portfolio; reads as abandoned.
  - "Download Resume" CTA points to `resume.pdf` which 404s. A broken primary CTA on a portfolio is a recruiting blocker.
  - Hero right column is empty — the layout promises an image/visual that never arrives.
- **Notable patterns to consider**: Sticky top header with theme-toggle + pill CTA is a clean, repeatable chrome pattern. But it must be paired with finished content or it reads as broken.

---

## Portfolio 7 — Nico Bachner — https://nicobachner.com

- **Reachable**: yes (HTTP 200, Vercel)
- **First impression**: A genuine "hero-only" homepage — just the name in enormous serif and two links. Confidence in negative space. Feels like the homepage of a person who already has too much to say and refuses to perform it.
- **Visual hierarchy**: Single H1 ("Nico Bachner") at 104px Fraunces 800, dominates the entire viewport. Below it: two links, "Projects" and "Notes", left-aligned, small Inter. That's the entire homepage.
- **Layout composition**: One screen, vertically centered. No header, no nav bar, no footer. Everything else lives on `/projects`, `/notes`, and per-project/per-note subpages (e.g. `/suwo`, `/bookshelf`).
- **Typography**: **Two-font system** — Fraunces (serif) for H1 at 104px, Inter for everything else. Both via `next/font` (variable fonts, no FOIT). Body uses **oklch** color values (modern CSS color 4).
- **Color palette**: Warm peach background `rgb(254, 215, 170)` ≈ `oklch(95% 0.05 70)`; ink color `oklch(0.50 0.07 70.7)` — a warm brown, not black. No accent color. The peach + brown pairing is the entire palette.
- **Spacing**: Airy. Hero takes ~100vh. Page margins generous.
- **Hero section**: Just the H1 + two links. No CTA, no email, no social, no image, no metadata. The most minimal hero in the corpus so far — even more stripped than Jeremiah's (batch 1).
- **Navigation**: None on the homepage. Subpages have a tiny "Back" link top-left and a "Next" link bottom-right (sequence-style navigation between projects/notes).
- **Section ordering** (homepage): Hero (name + Projects / Notes links) — that's it.
- **Scroll experience**: There is nothing to scroll on the homepage (verified: 3 consecutive scroll-snap shots produced byte-identical PNGs — page does not move). Subpages scroll naturally with no scroll-triggered animation.
- **Animations & motion**: **0 keyframes** across the entire stylesheet. Zero. No fade-ins, no transitions, nothing. The page is fully static by design.
- **Hover interactions**: Links underline on hover (default browser behavior). No custom hover styling.
- **Background effects**: Solid peach. No grain, no gradient, no texture, no canvas, no SVG.
- **3D elements**: no.
- **Responsiveness perception**: Single column, large type scales down via `clamp`-like Next.js font sizing. Works at any width.
- **Performance perception**: Excellent. 0 images on home, 1 SVG total, 0 iframes, 0 keyframes, 0 third-party scripts. Next.js static export.
- **Emotional feeling**: Calm, confident, editorial. Reads like a book jacket, not a CV.
- **Originality**: 5/5 — first portfolio in corpus where the homepage is the brand and the rest of the site is the content. No other portfolio (incl. batch 1) commits to the hero-only approach this completely.
- **What works**:
  - The peach + warm-brown palette is the most original color choice in the corpus so far — committed, warm, memorable, not "tech-y".
  - 104px Fraunces H1 is the loudest typographic statement seen. Proves restraint and boldness aren't opposites.
  - `/notes` subpage organizes content into "Timeless" vs "Timestamped" — a portfolio-as-digital-garden structure no other portfolio has attempted.
- **What does NOT work** (anti-patterns to avoid):
  - Hero has zero metadata — no location, no role, no status. A recruiter landing here might bounce because they can't tell what Nico does without clicking through. Jeremiah (batch 1) had the same risk; Nico has it worse.
  - Project subpages are extremely terse (title + 1-line description + external links). For someone with 13 projects, the absence of any narrative or imagery makes the work feel less substantial than it likely is.
- **Notable patterns to consider**:
  - **Hero-only homepage with 2 routes** is the strongest execution of the "front door" pattern — extends Jeremiah's hero-only brand-statement with a real content surface. Strong candidate.
  - **Warm cream/peach palette + serif H1** proves a developer portfolio doesn't have to look "developer-y" to feel premium.
  - **Timeless vs Timestamped notes** is an original content architecture for the writing surface.
  - **0 keyframes, 0 images, 0 third-party JS** — most performant portfolio in the corpus so far.

---

## Portfolio 8 — Hassan Tech — https://hassanx.tech

- **Reachable**: yes (HTTP 200, Vercel)
- **First impression**: Light, modern, single-font Geist portfolio with confident copy ("Most designers can't code. Most developers can't design. I do both."). The boldest "hire me" copy in the corpus. Marred only by the surprising presence of Google AdSense iframes — feels like a blogger move on a portfolio.
- **Visual hierarchy**: H1 (48px / 600, "Hey, I'm Hassan. Engineer & Designer.") → bold tagline → "Hire me" + "Open to Opportunities" buttons → profile photo (256px) → 2 photography thumbnails.
- **Layout composition**: 3 sections only — About (left-text + right-photo grid), Work Experience (4 roles in a vertical list), Get in touch (form-less, just email + 9 social links). Header is `position: fixed` with a "Reach Me" button and 9 social icons.
- **Typography**: Single family — **Geist** (Vercel's font). H1 48px / 600. Weight 600, not 800 — softer than Akash's. No mono.
- **Color palette**: White `#FFFFFF` body, near-black `oklch(0.21 0.006 285)` ink, gray-500 mid. **oklch** values throughout (developer-coded, modern). No accent color on hero; blue appears only on the CTA button.
- **Spacing**: Airy. Each section separated by ample whitespace.
- **Hero section**: H1 + tagline + two CTAs on left; portrait photo on right. Tagline is long-form, not a one-liner.
- **Navigation**: Fixed top header with "Reach Me" button (desktop) — opens social link list. Hidden on mobile (`hidden sm:`). 9 social platforms linked: GitHub, Instagram, Twitter/X, Threads, LinkedIn, Peerlist, Discord, Hashnode.
- **Section ordering**: Hero (combined with About) → Work Experience → Get in touch → Footer.
- **Scroll experience**: Plain native scroll. No parallax, no scroll-triggered reveals. 2 keyframes (`ping`, `slideDown`) — likely for status indicators / mobile menu slide.
- **Animations & motion**: Minimal. 2 keyframes, both functional (status dot ping, mobile menu slide-down). No signature move.
- **Hover interactions**: Default. No transform/scale on cards.
- **Background effects**: Plain white. No grain, no gradient. 15 SVGs (icons in nav + skills + footer).
- **3D elements**: no.
- **Responsiveness perception**: Header collapses on mobile. Layout uses Tailwind-style flex/grid.
- **Performance perception**: Fast to load, but **ships 3 third-party iframes**: `googleads.g.doubleclick.net/pagead/ads`, `google.com/recaptcha/api2/aframe`, `googleads.g.doubleclick.net/pagead/html`. **AdSense is enabled on the portfolio** (verified via DOM: `ins.adsbygoogle` + `google_esf` iframe). This is the first corpus portfolio that monetizes with ads.
- **Emotional feeling**: Confident, salesy, slightly diminished by ads.
- **Originality**: 3/5 — clean light + Geist is becoming a Vercel-template trope; the bold copy and the ad monetization are the original moves.
- **What works**:
  - The copy is the strongest "hire me" voice in the corpus — direct, opinionated, confident without being arrogant.
  - Light theme + single Geist font + oklch colors = a clean modern Vercel-coded aesthetic that reads as current.
  - "Open to Opportunities" pill alongside "Hire me" gives the recruiter two clear next actions.
- **What does NOT work** (anti-patterns to avoid):
  - **Google AdSense iframes on a personal portfolio** cheapen the brand. Ads on a portfolio read as "I monetize eyeballs, not outcomes." Strongly avoid.
  - 9 social links in the header is overkill — Discord + Hashnode + Peerlist + Threads + Instagram alongside the standard trio fragments the recruiter's attention. Curate to 2–3.
  - The contact "form" is actually just `mailto:`-style links — no real form. Not a problem on its own, but inconsistent with the "Send Message" CTA on the page.
- **Notable patterns to consider**:
  - **oklch color values** in computed styles are a quiet developer-coded signal (visible to anyone who inspects) — modern alternative to hex.
  - **Two-button hero CTA** (primary action + availability status) is a stronger pattern than the single "View Projects" pill used elsewhere.
  - Light + Geist + single accent is becoming the recognizable "Vercel-coded" look — fine but no longer original.

---

## Portfolio 9 — Phat Tran Tan — https://portfolio-ttp.vercel.app

- **Reachable**: yes (HTTP 200, Vercel)
- **First impression**: Light theme with a working typewriter cursor on the H1 and numbered project list (01, 02, 03, 04). Reads as a competent React dev portfolio — every CTA works, including a real downloadable CV.
- **Visual hierarchy**: H2 eyebrow "FRONT-END DEVELOPER" → H1 "I'm Front-end Developer|" (with blinking cursor) → "Download Resume" CTA. Projects section uses large index numbers (01, 02, 03, 04) as the most visually loud element per card.
- **Layout composition**: Single-page scroll — Hero → About → Skills → Projects → Contact → Footer. Sticky header with backdrop-blur.
- **Typography**: Single family — **Inter**. H1 60px / 600. Eyebrow H2 uppercase. Numbered indices (01, 02, …) likely the same Inter, just very large.
- **Color palette**: Light background (`bg-light` Tailwind token, ~white). H1 in white with the role phrase in indigo `#6366F1`. Indigo is the single accent color. Body text default black.
- **Spacing**: Balanced. Each section is full-viewport or near. `min-h-screen py-*` on Projects.
- **Hero section**: Eyebrow + H1 with blinking typewriter cursor + "Download Resume" button. No image, no metadata. Compact.
- **Navigation**: Sticky top header (`position: sticky`, `backdrop-filter: blur(4px)`, `bg-light/90` — frosted-glass effect). Social icons only (X, LinkedIn, GitHub, Instagram) — no anchor nav links.
- **Section ordering**: Hero → About → Skills → Projects → Contact → Footer.
- **Scroll experience**: Plain native scroll. No parallax. 5 keyframes: `ping`, `pulse`, `spin`, `checkmark`, `styles-module_blink__rqfaf` — the blink is the typewriter cursor.
- **Animations & motion**: Typewriter cursor (single character `|` blinking via CSS animation). `spin` likely for a "loading" state somewhere. `checkmark` for form submission. **Functional motion, not decorative.**
- **Hover interactions**: Default Tailwind hovers.
- **Background effects**: Plain light. No gradient, no grain. 14 SVGs (icons, project thumbnails).
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive (`lg:text-6xl`, `text-5xl`). Should adapt.
- **Performance perception**: 65 images (mostly project screenshots + skill icons). Heavier than Nico/Hassan but reasonable. Next.js with image optimization (`_next/image?url=...&w=384&q=75`).
- **Emotional feeling**: Energetic, professional, slightly template-y.
- **Originality**: 2/5 — well-built but recognizable template; the typewriter cursor is the only signature move.
- **What works**:
  - "Download Resume" links to a real, downloadable PDF (`/CV_TranTanPhat_FrontendDev.pdf`, HTTP 200). Basic but the only portfolio in this batch where the resume CTA actually works.
  - Numbered project ordering (01, 02, 03, 04) gives a strong editorial signal — projects are sequenced, not dumped.
  - Sticky header with `backdrop-blur(4px)` frosted glass is the cleanest nav treatment in the batch.
- **What does NOT work** (anti-patterns to avoid):
  - Typewriter cursor on a fixed string ("I'm Front-end Developer|") is decorative motion that doesn't add information — pure animation flourish. Falls into batch 1's "motion must mean something" tension.
  - Sticky header has only social icons — no anchor links to sections. On a single-page portfolio this forces the user to scroll-find.
  - Skill list is a tag-cloud dump ("MySQL, SCSS, CSS, ReactJS, Metamask, Socket.io, Tail…") rather than a curated subset — mild version of the "dump everything" anti-pattern.
- **Notable patterns to consider**:
  - **Frosted-glass sticky header** (`backdrop-blur` + semi-transparent bg) is the most modern-feeling nav treatment seen so far.
  - **Numbered projects (01, 02, 03, 04)** — strong curation signal worth adopting.
  - **Single accent (indigo `#6366F1`) used only on the role phrase in H1** — restrained, draws the eye to the role identity without recoloring the whole UI.

---

## Portfolio 10 — Jayed Rafi — https://jayedrafi.com

- **Reachable**: yes (HTTP 200, GitHub Pages) — but one nav link (Project Archive) returns GitHub's 404 page.
- **First impression**: A retro-cream static-HTML multi-page portfolio with three fonts (Press Start 2P pixel, Arial body, Comforter script) and no H1 anywhere. Has personality (Garfield photo, retro palette) but ships broken in two places.
- **Visual hierarchy**: Page label "portfolio" (Press Start 2P, top-left, 15px) → nav links (Arial, 15px) → "Jayeds Portfolio" in Comforter script (handwritten, large) → body paragraph in Arial with a right-floated Garfield image. No H1, H2, or H3 in the entire DOM.
- **Layout composition**: Static multi-page HTML — `index.html`, `experience.html`, `education.html`, `miscellaneous.html`, `contact.html`, `project-archive.html` (404). Left sidebar nav (vertical list of pages). Right content area with text + occasional images.
- **Typography**: **Three-font stack** — Press Start 2P (pixel, for "portfolio" label and active page indicator), Arial (body — OS default), Comforter (script, for the page name "Jayeds Portfolio"). No web-font link tag found; likely loaded via @import in `main.css`. Body Arial is a batch-1 anti-pattern (OS-default on body is fine, but on H1 it's a problem — here there is no H1).
- **Color palette**: Warm cream background `rgb(233, 216, 166)` (sandy). Body text gray `rgb(102, 102, 102)`. No accent color. Pure 2-color palette.
- **Spacing**: Loose, table-like. Pages read like 2005-era personal homepages (uses `table.css` for layout on some pages).
- **Hero section**: There is no hero — homepage is just "Jayeds Portfolio" + a paragraph + Garfield image with a broken click handler.
- **Navigation**: Left sidebar, list of 6 page links. Active page highlighted. Same nav on every page. Static HTML, no JS routing.
- **Section ordering** (homepage): Page title → intro paragraph (with right-floated Garfield image) → email link at bottom.
- **Scroll experience**: Plain native. No parallax. No keyframes anywhere (`[]`).
- **Animations & motion**: **0 keyframes.** Two inline `<script>` blocks: `changeImage()` (random image swap on click) and `myFunction()` (sets `lastModified`). Neither runs successfully on the homepage.
- **Hover interactions**: Default link hover only.
- **Background effects**: Solid cream. No grain, no SVG, no canvas.
- **3D elements**: no.
- **Responsiveness perception**: Static HTML with `float: right` image. Likely breaks on narrow viewports — no viewport-specific CSS observed.
- **Performance perception**: Fast (no JS frameworks, 1 image, 0 SVG). But two broken features: `project-archive.html` 404, and `changeImage()` references `getElementById("profile")` while the homepage image has `id=""` (empty) — clicking Garfield throws a TypeError.
- **Emotional feeling**: Playful, retro, unfinished.
- **Originality**: 3/5 — retro pixel + handwritten + cream palette is a genuine aesthetic commitment; the broken execution undercuts it.
- **What works**:
  - Cream `rgb(233, 216, 166)` background + Press Start 2P + Comforter script is the most committed retro palette in the corpus — feels like a zine, not a CV.
  - Multi-page static HTML approach is low-tech in a good way — every page is a real file, easy to inspect, no framework overhead.
  - Experience page lists 6+ roles with company / duration / location in a consistent format — solid content structure.
- **What does NOT work** (anti-patterns to avoid):
  - **`document.title` is "portfolio"** — generic, lowercase, same on every page. Same anti-pattern as Krishnanand (batch 1) leaving "Vite + React".
  - **"Project Archive" nav link returns GitHub Pages 404** — a top-nav link to a non-existent page is a critical broken-link anti-pattern. Mirrors Bhushan's broken widget pattern from batch 1.
  - **`changeImage()` easter egg is broken on the homepage** — calls `document.getElementById("profile").src` but the homepage image's `id` attribute is empty (`id=""`). Clicking the Garfield throws a TypeError. Extends batch 1's "broken third-party widget without fallback" pattern to "broken first-party interaction without test."
  - **No H1, H2, or H3 in the entire DOM.** Page structure relies on `<p>` tags with classes. Fails semantic HTML — bad for SEO, bad for screen readers, bad for the typographic hierarchy.
- **Notable patterns to consider**:
  - **Cream + pixel-font + handwritten-script** is a genuine aesthetic combination worth pilfering the *principle* of (committed retro palette) — not the execution.
  - **Static multi-page HTML** is a viable anti-framework approach — every page is inspectable, performance is trivial, content is the entire site.

---

## Batch 2 Synthesis

### Patterns that REINFORCE batch 1 findings

1. **Restraint reads as senior.** Nico's homepage has 0 keyframes, 0 images, 0 iframes, 0 third-party JS — and is the most original portfolio in this batch. Confirms batch 1's Triet observation that less motion = more confidence.
2. **Title hygiene still varies wildly.** Jayed ships the generic `"portfolio"` (same anti-pattern as Krishnanand's `"Vite + React"`). The other 4 set proper titles — improvement over batch 1.
3. **Broken-feature anti-pattern recurs.** Jayed ships (a) a 404 nav link to `project-archive.html` and (b) a broken `changeImage()` easter egg with `id=""`. Akash ships a `resume.pdf` 404 and `youremail@example.com` placeholders. These extend batch 1's "broken third-party widgets" pattern to "broken first-party interactions" and "placeholders never replaced."
4. **Multi-page hybrid is validated.** Nico (hero-only home + 13 project subpages + notes wiki), Jayed (6 static HTML pages) and Phat (single-page + linked PDF) all use multi-page in different ways. **Confirms batch 1's hypothesis that hybrid (memorable hero front-door + linked case-study subpages) dominates either extreme.**
5. **Single-font portfolios are still valid.** Hassan (Geist), Phat (Inter), Akash (Ubuntu) all run single-font systems cleanly — refines batch 1's "two-font developer-coded feel" pattern: **one font is enough if the typography is otherwise disciplined.**

### Patterns that CONTRADICT or REFINE batch 1 findings

1. **Light theme is fully premium — not dark-dominated.** Batch 1 said "dark mode is table-stakes (4/5)." Batch 2 reverses it: **5/5 portfolios are light theme**, and 2 of them (Nico peach, Jayed cream) use warm-tinted backgrounds instead of pure white. The new principle: **light + warm tint > light + pure white > dark default.** Dark is still valid for developer-coded brand statements, but light-with-warmth reads as editorial / confident.
2. **Hero typography can be much larger than batch 1 suggested.** Nico's 104px Fraunces is the loudest H1 in the corpus by 2×. Batch 1's heroes were all 48–64px. New finding: **a single hero H1 at >96px is a confident move that pairs with otherwise-minimal chrome.**
3. **Two-font system isn't only sans+mono.** Nico proves **serif H1 + sans body** is also a valid developer-portfolio system (Fraunces + Inter). Batch 1's pattern ("sans body + mono eyebrows") is one option; serif+sans is another. Pick based on brand voice.
4. **"OS-default font on H1" anti-pattern is refined.** Jayed uses Arial for body — which is fine — but has no H1 at all (uses `<p class="page-home-name">` instead). The new anti-pattern is: **replacing headings with styled `<p>` tags**, which fails semantic HTML and breaks the typographic hierarchy at the DOM level.

### NEW patterns unique to this batch

1. **Warm cream/peach/sand light backgrounds.** Nico `rgb(254,215,170)` peach, Jayed `rgb(233,216,166)` cream. Warm-tinted lights feel editorial and original; pure white feels template-y. **New candidate palette direction.**
2. **Hero-only homepage with 2 routes (Nico).** Just the name + two links (Projects, Notes). Extends Jeremiah's hero-only brand-statement by giving it a real content surface to point at. **Strongest execution of the front-door pattern in the corpus so far.**
3. **Personal-wiki content architecture (Nico).** `/notes` page splits notes into "Timeless" vs "Timestamped" — a digital-garden structure. **First portfolio in corpus to treat writing as a first-class surface.**
4. **Numbered project ordering (Phat's 01, 02, 03, 04).** Editorial-style curation signal — projects are sequenced, not dumped. **Worth adopting as a curation device.**
5. **Frosted-glass sticky header (Phat's `backdrop-blur(4px)` + semi-transparent bg).** Cleanest nav treatment in the batch; reads as modern without being trendy.
6. **oklch color values in CSS (Hassan, Nico).** Quiet developer-coded signal visible to anyone who opens devtools — modern alternative to hex; reads as "this developer uses current CSS."
7. **Single accent applied only to the role phrase in H1 (Phat's indigo "Front-end Developer").** Restrained — the role identity is the only colored element on the hero. **Stronger than recoloring CTAs or borders.**
8. **Google AdSense on a portfolio (Hassan).** First corpus appearance. Reads as "I monetize eyeballs, not outcomes." **Strongly avoid** — extends the broken-widget pattern into "actively brand-damaging integrations."
9. **Retro pixel font for chrome (Jayed's Press Start 2P on the "portfolio" label).** A committed aesthetic move; paired with cream + script, creates a zine feel. **Steal the principle (committed retro palette), not the execution** (Jayed's broken HTML undercuts it).
10. **9+ social links in nav (Hassan).** Discord + Hashnode + Peerlist + Threads + Instagram + the standard trio. **Anti-pattern — fragments recruiter attention.** Curate to 2–3.

### Updated answers to the open tensions (from `personal_portfolio.md` §4)

- **How much motion is "premium"?** Still: less than you think. Nico's 0-keyframe homepage felt most senior. Phat's typewriter cursor is decorative motion that doesn't add information — supports batch 1's "motion must mean something." **Refined principle: a single functional motion (status ping, mobile-menu slide, form-submit checkmark) is fine; decorative motion on hero text is not.**
- **Hero: 3D, typography, or both?** **No portfolio in batch 2 used 3D.** Across 10 portfolios now, **0 have used 3D successfully.** Typography dominates entirely. Nico's 104px serif is the strongest hero move seen. **Updated answer: typographic statement only; 3D is not earning its place in this corpus.**
- **Single-page vs multi-page vs hybrid?** **Hybrid confirmed.** Nico (hero-only home + subpages) is the cleanest execution. **Recommendation: hero-only front-door + linked case-study + optional writing surface.**
- **Light, dark, or theme-aware?** **Light + warm tint reads most premium.** Batch 2 was 5/5 light. Warm-tinted lights (peach, cream) beat pure white. Dark is still valid for developer-coded brand statements but no longer table-stakes. **Recommendation: light + warm-cream background as default; theme-aware toggle optional but not required.**
- **How to showcase code without feeling like documentation?** **Still unsolved.** No portfolio in batch 2 attempted it. Hassan uses oklch values in CSS (a quiet dev signal) but doesn't surface code as interface. **Open question — carry to batch 3.**
- **How literal should a developer metaphor be?** **Batch 2 had zero domain metaphors** — Akash is "Embedded & Broadband Software Engineer" but doesn't theme the UI around embedded/broadband concepts. **Refines batch 1: for full-stack, metaphor may indeed feel costume-y. Stick to light metaphor (mono eyebrows, oklch colors, mono metadata) over full theme.**

### Specific watch-items requested for this batch — answers

- **3D (Three.js / Spline / CSS 3D)?** None used. Across 10 portfolios now, 0 have used 3D.
- **Light theme successful?** Yes — 5/5 in this batch. Nico (peach) and Jayed (cream) are the strongest light executions; pure-white lights (Akash, Hassan, Phat) read as more template-y. **Warm tint is the key differentiator.**
- **Code in non-documentation way?** Not demonstrated in this batch. Hassan's oklch colors are the closest — a quiet developer signal visible only on inspection.
- **Custom cursor / cursor-follow effects?** None used. Pattern does not appear in this corpus.
- **Scroll-tied animations — orient or distract?** None of these 5 used scroll-tied animations. The most successful portfolio (Nico) had nothing to scroll on the homepage. **Pattern continues to suggest scroll-tied motion is not earning its place.**

---

## Files produced
- `/home/z/my-project/research/batch_02.md` (this file)
- `/home/z/my-project/research/screenshots/batch_02/p6_akash_*.png` (4 screenshots)
- `/home/z/my-project/research/screenshots/batch_02/p7_nico_*.png` (7 screenshots, incl. projects + case study + notes subpages)
- `/home/z/my-project/research/screenshots/batch_02/p8_hassan_*.png` (4 screenshots)
- `/home/z/my-project/research/screenshots/batch_02/p9_phat_*.png` (4 screenshots)
- `/home/z/my-project/research/screenshots/batch_02/p10_jayed_*.png` (5 screenshots incl. experience, contact, 404 archive)
