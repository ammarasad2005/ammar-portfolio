# Batch 17 — Portfolios 81-85 (Research Round 5, Batch 17)

**Task ID**: R5-B17
**Agent**: general-purpose (portfolio researcher)
**Date**: 2026-07-03
**Portfolios analyzed**: 5
- 81. Pieter-Jan Scheir — https://www.pieterjanscheir.com
- 82. Qihang Feng — https://qfeng.beaverexp.com
- 83. Brhane Giday — https://brhane.vercel.app
- 84. Md Sarfaraz Alam — https://mdsaifedu.eu.cc/3D-portfolio/
- 85. Emmanuel Alabi — https://emjjkk.tech

All 5 URLs returned HTTP 200/307 (redirects confirmed reachable). Screenshots saved to `/home/z/my-project/research/screenshots/batch_17/`.

---

## Per-Portfolio Analysis

### 81. Pieter-Jan Scheir — https://www.pieterjanscheir.com

- **Reachable**: yes (307 → /en — i18n routing)
- **First impression**: Belgian fullstack developer's restrained Tailwind+Radix portfolio. Feels like a senior Lee Robinson / Vercel-adjacent design — clean, lab-color white, amber accent, system font. Light/dark toggle. The 3×3 grid logo that re-shuffles on hover is the only "playful" touch in an otherwise disciplined layout.
- **Visual hierarchy**: H1 (name) at 72px → sidebar nav with diamond markers → 7 H2s as section titles (uppercase, small) → 24 H3s as entry titles. Hierarchical and disciplined.
- **Layout composition**: Single-page with sidebar nav + center main column. Hero contains only nav (vertical on lg). Sections: About → Experience → Education → Projects → Skills → Technologies → Contact. Footer is one-line copyright. Multi-page option via `/projects` subroute ("View all projects" button).
- **Typography**: `ui-sans-serif, system-ui, sans-serif` — system stack only (no Google Font). 72px H1. Section H2s are small (md:text-xl ~20px) bold uppercase. Reading text is base (16px). Three sizes only — extremely disciplined.
- **Color palette**: Background `lab(100 0 0)` (pure white using modern CSS color function). Text `lab(7.78201 -0.0000149012 0)` (near-black with tiny chroma). Borders use `oklab()` with low alpha (`oklab(0 0 0 / 0.1)`). Single accent: amber-600 (`fill-amber-600` / `stroke-amber-600`) for diamond markers and links. **All colors use `lab()` or `oklch()` — modern CSS color-space pattern at its most disciplined.**
- **Spacing**: balanced. `transform-gpu` and `overflow-x-clip` on every section suggest careful scroll performance. Sections have generous `py-20`-style vertical rhythm.
- **Hero section**: contains ONLY vertical sidebar navigation (About / Experience / Education / Projects / Skills / Technologies / Contact) — each with a small diamond (`M3 0L6 3L3 6L0 3Z`) SVG that shifts color on hover. Name + role appear on initial paint above the nav. No hero image, no large H1 — restraint pattern.
- **Navigation**: sticky header (`fixed inset-x-0`) with logo on left, theme toggle on right. Sidebar nav is the primary in-page navigation. No bottom nav. Logo is a 3×3 grid of black/white squares that re-shuffles positions on hover (Tailwind `group-hover:col-start`/`row-start` swap) — first corpus instance of an *interactive pixel-grid logo*.
- **Section ordering**: Header → Hero (sidebar nav) → About → Experience → Education → Projects → Skills → Technologies → Contact → Footer.
- **Scroll experience**: smooth native scrolling. No parallax. No scroll-triggered reveal animations visible (Framer Motion is loaded but only for the `style="opacity: 1; transform: none;"` no-op markers — animations seem disabled or just initial-state).
- **Animations & motion**: 4 keyframes only. Logo hover re-shuffle uses CSS transitions. Experience entries use Radix Dialog for click-to-expand. Restrained.
- **Hover interactions**: logo grid re-shuffles cells on hover (`transition-all duration-300`); experience cards have a group-hover dimming effect (`group-hover/experiences:md:opacity-40 hover:md:bg-white/30`); nav items change diamond color amber-600 → amber-500.
- **Background effects**: plain `lab(100 0 0)` white. No gradient, no grain, no particles, no 3D.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive classes throughout. Mobile gets the sidebar collapsed to horizontal nav (`flex justify-center gap-10 lg:flex-col`).
- **Performance perception**: 0 canvas, 0 iframe, 13 imgs (project thumbnails), 49 SVGs (icons), 4 keyframes. Lightweight, fast.
- **Emotional feeling**: calm, senior, restrained, Belgian-design-coded.
- **Originality** (1-5, with note): **3/5**. Disciplined execution but the design language is recognizable (Lee Robinson / Vercel-adjacent Tailwind+Shadcn). Original moves: (1) 3×3 grid logo with hover cell-reshuffle, (2) sidebar nav as hero content (no large H1 in hero), (3) Radix Dialog click-to-expand for experience entries, (4) `lab()`/`oklch()` color discipline at the entire-portfolio level.
- **What works** (2-3 bullets):
  - **3×3 grid logo with hover cell-reshuffle** — first corpus instance of a logo that *physically re-arranges its pixels on hover*. Subtle but tactile.
  - **Sidebar nav as hero content (no large H1 hero)** — instead of a big H1, the hero IS the navigation. Reinforces B16 codified "hero-only home" pattern but as "nav-as-hero."
  - **Radix Dialog click-to-expand for experience entries** — each experience is a card that opens a dialog with full details. Solves the CV-dump problem by progressive disclosure.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **i18n routing setup but no language-switcher for own portfolio** — the only Dutch (`/nl`) link on the page goes to his employer's site (vandenbroele.be). The `/en` URL promises i18n but never delivers a `/nl` version. Anti-pattern: i18n infrastructure without content.
  - **Tailwind `transform-gpu` + `overflow-x-clip` on every section** — defensive CSS, but suggests underlying scroll-jank that needed patching rather than root-cause fixing.
- **Notable patterns to consider**:
  - **3×3 grid logo with hover cell-reshuffle** (PJ) — first corpus instance. Adopt as tactile brand mark.
  - **Sidebar nav as hero content** — instead of large H1 hero, the hero is the navigation itself. Adopt for senior portfolios where the user's *next action* is more important than name-repetition.
  - **Radix Dialog for click-to-expand experience entries** — progressive disclosure pattern. Adopt.
  - **`lab()`/`oklch()` color discipline at the entire-portfolio level** — first corpus instance of *every* color value using modern CSS color functions. Reinforces B15 codified `lab()`/`oklch()` pattern at maximum discipline.

---

### 82. Qihang Feng — https://qfeng.beaverexp.com

- **Reachable**: yes (HTTP 200, GitHub Pages)
- **First impression**: Material-UI portfolio with a "Work in Progress" eyebrow. Page is exactly 900px tall (= viewport) — only hero content exists. The 5 nav buttons (Home/About/Skills/Projects/Contact) lead nowhere. The portfolio ships an honest WIP.
- **Visual hierarchy**: H1 64px ("Hi, I'm Qihang Feng.") dominates. Eyebrow overline "Software Engineering Portfolio · Work in Progress" above. H5 subhead below. P body paragraph. Two CTAs (Start / Download Resume). No other headings on the page.
- **Layout composition**: Sticky Material-UI AppBar (HEADER.MuiPaper-root) + center hero (SECTION#home.MuiBox-root) + minimal footer. No second section. Single-screen.
- **Typography**: Roboto (Material default) — `Roboto, Helvetica, Arial, sans-serif`. 64px H1. No additional fonts. 0 keyframes — zero motion library.
- **Color palette**: Background `rgb(255, 255, 255)`. Subtle SVG geometric pattern overlay on body: Material Blue 700 (`#1976d2`) at 6% opacity, repeating decorative SVG (`width='192' height='192'`). No accent color in the hero (uses default Material primary blue from the AppBar).
- **Spacing**: airy — Material-UI default spacing (8px grid). Generous margins around hero content.
- **Hero section**: Material overline eyebrow "Software Engineering Portfolio · Work in Progress" → 64px H1 "Hi, I'm Qihang Feng." → H5 "MEng student building full stack applications and machine learning projects with React, FastAPI, PyTorch, and SQL." → P "I focus on practical software development, reproducible machine learning workflows, data structures, and technical content that turns complex ideas into clear materials." → CTA buttons "Start" + "Download Resume".
- **Navigation**: 5 buttons in the AppBar (Home/About/Skills/Projects/Contact) — none of them have hrefs, none scroll to sections, none open dialogs. Pure visual placeholders.
- **Section ordering**: Header → Hero → Footer. Nothing else.
- **Scroll experience**: page height = viewport height (900px). Nothing to scroll.
- **Animations & motion**: 0 keyframes. Zero animations.
- **Hover interactions**: default Material-UI button hover states only.
- **Background effects**: subtle SVG geometric pattern overlay at 6% opacity. Aesthetic, first corpus instance of *decorative SVG pattern overlay* on body background.
- **3D elements**: no.
- **Responsiveness perception**: Material-UI responsive grid. Mobile would still show only the hero.
- **Performance perception**: 0 canvas, 0 img, 5 SVG, 0 iframe, 0 keyframes. Extremely lightweight — only the hero text and a small SVG pattern.
- **Emotional feeling**: honest, work-in-progress, student-coded. The "Work in Progress" eyebrow is the most honest thing in the batch.
- **Originality** (1-5, with note): **1/5**. Material-UI default styling, no customization, no shipped content beyond hero. The only original move is the *honest WIP eyebrow*. The portfolio is a placeholder.
- **What works** (2-3 bullets):
  - **Honest "Work in Progress" eyebrow** — the portfolio explicitly states it's WIP. Reinforces B1 Vinay / B14 Hozaifa / B79 Jerry failure-mode spectrum, but with a *deliberate, honest* failure mode: "this is a placeholder, I'm telling you it's a placeholder." Better than Jerry's CRA default.
  - **Decorative SVG pattern overlay on body background** — first corpus instance. Subtle 192×192 tile of Material Blue 700 at 6% opacity. Aesthetic alternative to flat white.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **5 nav buttons with no destinations** — Home/About/Skills/Projects/Contact buttons all have null hrefs and do nothing. Anti-pattern: nav promises content that doesn't exist.
  - **Page height = viewport** — portfolio is literally one screen of content. The "Work in Progress" eyebrow doesn't excuse shipping nav buttons to nowhere.
  - **Material-UI default styling with zero customization** — every color, every spacing, every font is Material default. Reads as "I scaffolded this 2 hours ago." Anti-pattern: framework defaults as portfolio.
- **Notable patterns to consider**:
  - **Honest "Work in Progress" eyebrow** (QF) — explicit WIP signal. Adopt as: if you ship an incomplete portfolio, label it. Better than hiding the incompleteness.
  - **Decorative SVG pattern overlay on body background** (QF) — first corpus instance. Subtle aesthetic alternative to flat backgrounds. Adopt.

---

### 83. Brhane Giday — https://brhane.vercel.app

- **Reachable**: yes (Vercel, HTTP 200)
- **First impression**: Senior portfolio (5+ years, MS CMU Africa, Staff Software Engineer). Warm-tinted near-white background, system font, 4-stat hero block, click-to-expand Radix-style experience entries, "Engineering at Scale" / "Professional Journey" / "Featured Projects" hero H2s. Polished senior-devcoded portfolio.
- **Visual hierarchy**: 1 H1 (name, 72px) → 4 H2s (Engineering at Scale, Professional Journey, Featured Projects, Let's Connect) → 20 H3s (Education / Recent Achievements / Technical Expertise / role titles / project titles). Tight hierarchy.
- **Layout composition**: Sticky header (logo "brhanegiday" + nav buttons + Resume + "Let's Talk" CTA) → hero with name + role + tagline + location chip + 4-stat block → About (Education + Recent Achievements + Technical Expertise) → Experience (timeline) → Projects (filter + grid) → Contact → Footer (3-column).
- **Typography**: `ui-sans-serif, system-ui, sans-serif` system stack only. 72px H1 weight 700. Section H2s are medium-large. Reading text is base. Three tiers.
- **Color palette**: Background `lab(97.6833 -0.330806 -0.66179)` — *slightly warm-tinted near-white* (the b axis at -0.66 nudges it warm). Text near-black. Accent: green `lab(59.0978 -58.6621 41.2579)` (high-chroma green) — used for links, stat numbers. No second accent.
- **Spacing**: balanced. Each section has `py-20`-style rhythm. Cards have rounded borders (shadcn-style rounded-3xl).
- **Hero section**: name "Brhane Giday" + role "Software Engineer & AI Researcher" + tagline "Building AI-Powered Solutions for Real-World Impact" + location chip "Kigali, Rwanda · Carnegie Mellon University Africa" + 4-stat numeric block: "5+ Years Experience / 15+ Projects Delivered / 4+ AI Solutions Built / 4+ Teams Led" + CTAs (View My Work / Resume / Contact).
- **Navigation**: sticky header `fixed top-0` with backdrop-blur (`bg-background/95 backdrop-blur-md border-b`). Logo "brhanegiday" (lowercase concatenation — first corpus instance of *brand-style logo with no separator*). Nav buttons (Home/About/Experience/Projects/Contact) + Resume PDF link + "Let's Talk" CTA.
- **Section ordering**: Home → About (Education + Recent Achievements + Technical Expertise) → Experience → Projects → Contact → Footer.
- **Scroll experience**: smooth native. No parallax. 2 keyframes only — extremely restrained for a portfolio of this scale.
- **Animations & motion**: 2 keyframes only. Subtle hover transitions on cards. No scroll-triggered reveal visible. Restrained senior pattern (reinforces B76 Veerendra's 0-keyframe pattern).
- **Hover interactions**: experience cards have group-hover dimming (similar to PJ pattern). Project cards lift on hover.
- **Background effects**: plain tinted near-white. No gradient, no grain, no particles.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive throughout. 110 SVGs (mostly Lucide icons) scale crisply.
- **Performance perception**: 0 canvas, 0 img, 110 SVG (icons), 0 iframe, 2 keyframes. Lightweight.
- **Emotional feeling**: senior, polished, achievement-focused, African-tech-credible (CMU Africa + Kigali-based).
- **Originality** (1-5, with note): **3/5**. Solid senior execution. Original moves: (1) "Engineering at Scale" as About-section H2, (2) "Professional Journey" as Experience-section H2 (vs. literal "Experience"), (3) "Featured Projects" implies curation, (4) location+affiliation chip in hero ("Kigali, Rwanda · Carnegie Mellon University Africa"), (5) years-per-tech inline tags ("React 5y / Next.js 4y"), (6) "brhanegiday" lowercase-concatenated brand logo, (7) Current/full time status badges on experience entries.
- **What works** (2-3 bullets):
  - **"Engineering at Scale" / "Professional Journey" / "Featured Projects" as section H2s** — first corpus instance of *aspirational* section H2s (vs. literal "About" / "Experience" / "Projects"). Reinforces B16 codified "Behind the curtains" naming pattern at section-H2 level.
  - **Years-per-tech inline tags** ("React 5y / Next.js 4y / TypeScript 4y") — first corpus instance of *experience-duration inline tags per tech*. Strong credibility signal — turns "skills list" into "evidence of depth."
  - **Location+affiliation chip in hero** ("Kigali, Rwanda · Carnegie Mellon University Africa") — pairs geography with institution. Reinforces B3 Sambhu's location-SEO pattern at its most credible (CMU Africa is a real credential).
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **110 SVGs feels heavy on icon count** — every list item has a Lucide icon. Adds visual noise without adding meaning. Could reduce by 50%.
  - **"brhanegiday" lowercase brand logo** — readability is fine, but combining it with the standard Resume + Let's Talk CTA stack makes the header feel busy. Anti-pattern: too many CTAs in a single sticky header.
- **Notable patterns to consider**:
  - **Aspirational section H2s** ("Engineering at Scale" / "Professional Journey" / "Featured Projects") — adopt as section naming pattern. Reinforces B16 codified pattern.
  - **Years-per-tech inline tags** ("React 5y") — first corpus instance. Strong credibility signal. Adopt.
  - **4-stat numeric block in hero** (5+ Years / 15+ Projects / 4+ AI Solutions / 4+ Teams Led) — reinforces B15 codified numeric stats block pattern. Senior-consultant variant.
  - **Current/full time status badges on experience entries** — first corpus instance of status-badge on experience entries. Pair with date range.
  - **AWS Certified Cloud Practitioner + CompTIA Linux+ as About-section credentials** — reinforces B80 Om cert-link pattern; here the cert name itself is the credibility (not the link).
  - **"Bash & Beyond YouTube Channel Founder" as a side-project entry in About** — first corpus instance of *YouTube-channel-as-side-project* in About. Reinforces B16 codified body-discipline / secondary-identity pattern.
  - **3-column footer** (Quick Links / Resources / Get in Touch) — clean information architecture. Adopt.
  - **Filter pills on projects** ("All / Full-Stack Development / AI/ML Application / Frontend Engineering") — reinforces B15 codified filter pattern. Filter values are project categories.

---

### 84. Md Sarfaraz Alam — https://mdsaifedu.eu.cc/3D-portfolio/

- **Reachable**: yes (Cloudflare, HTTP 200)
- **First impression**: STRONGEST PORTFOLIO IN BATCH 17. Pure-black canvas with a real Three.js r183 scene embedded in the hero, persistent 2D-canvas background, scene-as-section naming, fully-wired command palette triggered by `/` or `Shift+K`, live GitHub push activity + Spotify now-playing + visitor signature guestbook, two-roles-only experience (extreme anti-CV-dump). Senior SRE / Azure operations portfolio with cinematic framing.
- **Visual hierarchy**: 1 H1 (multi-line: "Cloud reliability / with real operations depth / and platform calm under pressure.") 72px → 9 H2s (impact metrics as H2s: "MTTR reduction" / "Cloud cost down" / "Apps supported"; plus scene headings) → 111 H3s (lots of microcontent — commit messages, project titles, capability tags). Hierarchical but unusually uses H2 for *metric labels* not section titles.
- **Layout composition**: Sticky header (logo + 4 nav buttons + ◇ + `/Shift K` command palette trigger + Resume) → portfolio-shell (with persistent 2D canvas background) → 8 scenes: hero / impact / live / experience(work) / projects / capabilities / contact / github-graph → footer.
- **Typography**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` — system stack only. 72px H1. Three-tier hierarchy.
- **Color palette**: Background `rgb(0, 0, 0)` pure black. Text appears to be near-white. No accent color visible in the H1 (monochrome). The command palette UI uses a futuristic HUD aesthetic (`command-palette__halo`, `spotify-widget__grid`, `spotify-widget__orbit` class names suggest cyberpunk-futuristic styling).
- **Spacing**: cinematic — sections have generous vertical space, each ~700-1200px tall. Tall narrow 478×618 Three.js canvas in hero suggests an *aspect-ratio-locked centerpiece*.
- **Hero section**: hero-scene contains: slash-tag eyebrow "Azure / AKS / observability / CI-CD / incident response" + 3-line H1 "Cloud reliability / with real operations depth / and platform calm under pressure." + tagline "I build calmer systems. Over the last 4+ years I have reduced MTTR, tuned cloud cost, improved AKS reliability, and supported enterprise production workloads where failure has real operational weight." + CTAs (View selected work / GitHub) + "Now" status line "Improving Azure reliability, reducing incident noise, and building release confidence." + 478×618 Three.js canvas.
- **Navigation**: sticky header (logo "MS" + "Md Sarfaraz Alam Site Reliability Engin..." text) + 4 nav buttons (Story / Work / Capabilities / Contact) + ◇ button (likely theme toggle) + `/Shift K` command palette trigger + Resume PDF link.
- **Section ordering**: Header → Hero (Story) → Impact (numeric metrics) → Live (GitHub + Spotify + Visitors + Contact preview) → Work (Experience — only 2 roles: "Now" + "Earlier") → Projects → Capabilities → Contact → GitHub contribution graph → Footer.
- **Scroll experience**: persistent 1440×900 2D canvas as background (with low-alpha particle/star texture based on pixel sampling: [15,19,31,255,16] — very dark with subtle variation). Three.js 478×618 hero canvas. No scroll-snap. No scroll-driven section transitions (despite the "scene" terminology, transitions are normal scroll).
- **Animations & motion**: 2 keyframes only (restrained). Three.js scene animates in hero. 2D background canvas likely has subtle particle motion.
- **Hover interactions**: command palette items have `command-item--active` state. Live cards have hover states (`live-card live-card--spotify`).
- **Background effects**: persistent 2D canvas across all scenes — subtle dark texture/particles. Pure-black base. Three.js 478×618 centerpiece in hero.
- **3D elements**: YES. Three.js r183 confirmed (`data-engine="three.js r183"` on canvas). 478×618 webgl2 canvas as hero centerpiece. 300×150 webgl2 canvas (smaller — possibly a secondary widget). 1440×900 2D canvas (background particle field). **Three real canvases — most canvas-heavy portfolio in batch.**
- **Responsiveness perception**: Tailwind classes visible. The 478×618 Three.js canvas likely scales down on mobile.
- **Performance perception**: 3 canvases running (Three.js r183 + 2D background). Heavier than the other 4 in batch but justified by the 3D hero centerpiece. No images (2 imgs only, both small).
- **Emotional feeling**: cinematic, futuristic, calm-under-pressure (matches the H1 tagline "platform calm under pressure"), senior-SRE-coded.
- **Originality** (1-5, with note): **5/5**. Strongest originality in batch 17. Original moves: (1) scene-as-section naming (hero-scene / impact-scene / live-scene / etc.), (2) slash-trigger + Shift+K command palette with 4-group categorization (Pages / Projects / Actions / Links) + letter-glyph-prefix per item type (P/A/L), (3) live Spotify now-playing widget ("Live audio signal"), (4) "Production work, told as operating narrative not resume dump" meta-commentary as Experience H2, (5) two-roles-only experience (Now + Earlier — extreme anti-CV-dump), (6) visitor signature guestbook ("Leave your signal"), (7) GitHub latest push activity with emoji commit messages ("💀 stealthily update year progress bar"), (8) GitHub contribution graph at bottom as a section, (9) slash-tag eyebrow in hero ("Azure / AKS / observability / CI-CD / incident response"), (10) "Now" status line in hero, (11) impact section uses H2s as metric labels (40% MTTR / 20% Cloud cost / 10+ Apps), (12) "Stack shown with restraint" as Capabilities H2 (design principle as section title).
- **What works** (2-3 bullets):
  - **Fully-wired command palette triggered by `/` or `Shift+K`** — strongest command palette in the corpus. 4-group categorization (Pages / Projects / Actions / Links) + letter-glyph prefix per item type + embedded action shortcuts (Download resume / Send email / Call now) + 28+ projects indexed. Reinforces B15 codified "Ctrl+K keyboard shortcut menu" pattern and refines it with slash-trigger + letter-glyph-prefix + action-shortcuts.
  - **Two-roles-only experience (Now + Earlier)** — extreme anti-CV-dump pattern. Reinforces B16 codified "Operational Experience as distinct section" but at its most radical: only 2 entries, both labeled by temporal position rather than date.
  - **Live Spotify now-playing widget** — first corpus instance of live Spotify feed on portfolio. Pairs with B16 codified "live GitHub push activity" pattern — both are live-signals. Adds "audio signal" alongside "code signal."
  - **Slash-tag eyebrow in hero** ("Azure / AKS / observability / CI-CD / incident response") — first corpus instance of slash-as-separator eyebrow. Distinct from B15 codified slash-route tab labels.
  - **"Now" status line in hero** ("Improving Azure reliability, reducing incident noise, and building release confidence.") — reinforces B13 codified "Now-page pattern" but as hero eyebrow (not separate /now route).
  - **Meta-commentary as H2** ("Production work, told as operating narrative not resume dump." / "Stack shown with restraint." / "Contribution graph sits at bottom now.") — design principles written AS section headings. First corpus instance of self-aware meta-commentary as section structure.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **111 H3s is excessive** — the H3 count suggests every small label, tag, commit message, and link is tagged H3. Heading hierarchy is misused for visual styling rather than semantic structure. Anti-pattern: H3-as-styling.
  - **Three.js scene may not be necessary** — for a SRE/DevOps portfolio, the 3D hero centerpiece adds visual weight without adding information. The portfolio would still be strong without it. Risk: 3D-as-decoration rather than 3D-as-content.
  - **"◇" unlabeled icon button** — there's a button with just "◇" as content. Probably theme toggle but no aria-label visible in our inspection. Accessibility risk.
- **Notable patterns to consider**:
  - **Fully-wired command palette triggered by `/` or `Shift+K` with 4-group categorization + letter-glyph-prefix** — adopt as the strongest command palette pattern in corpus.
  - **Slash-trigger (in addition to Ctrl+K)** — VSCode/GitHub-style. Reinforces B15 codified Ctrl+K pattern with `/` as an additional trigger.
  - **Letter-glyph-prefix per command palette item type** (P=Pages, A=Actions, L=Links) — first corpus instance. Scannable.
  - **Embedded action shortcuts in command palette** (Download resume / Send email / Call now) — first corpus instance of *action shortcuts* (not just navigation) in a command palette.
  - **Live Spotify now-playing widget** (MSA) — first corpus instance. Adopt as audio-signal pattern. Pairs with live GitHub push activity.
  - **Scene-as-section naming** (hero-scene / impact-scene / live-scene / etc.) — first corpus instance of "scene" as the unit of portfolio content. Cinematic framing.
  - **Two-roles-only experience (Now + Earlier)** — extreme anti-CV-dump. Adopt for senior portfolios where chronology matters less than current scope.
  - **Meta-commentary as H2** ("Production work, told as operating narrative not resume dump.") — design principles AS section headings. First corpus instance. Adopt.
  - **Slash-tag eyebrow** ("Azure / AKS / observability / CI-CD / incident response") — first corpus instance of slash-as-separator eyebrow. Adopt.
  - **"Now" status line in hero** — reinforces B13 codified Now-page pattern. Adopt as hero eyebrow variant.
  - **Impact section with H2s as metric labels** (40% MTTR / 20% Cloud cost / 10+ Apps) — first corpus instance of metric-as-H2 pattern. Adopt for SRE/ops portfolios.
  - **GitHub contribution graph at bottom as a section** — reinforces B15 codified "live GitHub push activity" pattern at section-scale.
  - **Visitor signature guestbook ("Leave your signal")** — reinforces B10 Karan visitor signature guestbook pattern. Adopt.
  - **GitHub commit messages with emojis as content** ("💀 stealthily update year progress bar") — first corpus instance of *emoji in commit message* being visible on portfolio. Reinforces B10 Karan live push activity with personality.
  - **"Stack shown with restraint" as Capabilities H2** — design principle as section title. Reinforces B76 Veerendra's restraint pattern at the section-title level.

---

### 85. Emmanuel Alabi — https://emjjkk.tech

- **Reachable**: yes (HTTP 307 → www.emjjkk.tech, HTTP 200)
- **First impression**: Astro-built blog-portfolio for a CS student. Multi-page architecture (Home / About / Projects / Contact) with **Astro View Transitions + a fully-wired designed loading state** (a "loading cat" GIF overlay that fires on every navigation event). Icon-only sidebar nav on desktop, icon-only bottom nav on mobile. Nickname "Thursday" in quotes in H1. Blog-focused — 5 posts with 2026 dates.
- **Visual hierarchy**: 1 H1 (name + nickname + role) 30px → 1 H2 ("Recent blog posts") → 5 H3s (blog post titles). On the home page, hierarchy is blog-centric (not project-centric).
- **Layout composition**: 28%-width desktop sidebar (left, icon-only Lucide nav) + main content column (hero + blog list). Mobile: bottom-fixed nav (icon-only). Multi-page: home (hero + blog list) / about / projects / contact.
- **Typography**: `"Google Sans", sans-serif` — first corpus instance of Google Sans as primary UI font. 30px H1 (smaller than the 72px norm). Body text base. Two tiers only.
- **Color palette**: Background `rgb(248, 250, 252)` — Tailwind slate-50 (cool-tinted near-white). Text near-black. Accent: blue-700 (`text-blue-700` Tailwind) for active nav and links. Single accent.
- **Spacing**: airy. Hero has generous vertical rhythm. Blog list has clear separation between posts.
- **Hero section**: name "Emmanuel \"Thursday\" Alabi" + role "Software developer & CS Student" + tagline "I'm a software developer building full-stack web applications with a focus on performance and optimization. I also build mobile apps, discord bots, stream overlays, anything connected to a web server." + CTAs (See my projects / Contact Me / Resume).
- **Navigation**: **icon-only sidebar** (desktop, lg:block, 28% width) with 4 Lucide icons (house / user / folder / mail). **Icon-only bottom-fixed nav** (mobile, lg:hidden). NO TEXT LABELS — radical minimalism. Reinforces B16 codified "verb/noun brand-y nav labels" pattern at its opposite extreme (no labels at all).
- **Section ordering** (home page): Sidebar → Hero (header section) → Body (Recent blog posts list) → Bottom nav (mobile only).
- **Scroll experience**: Astro View Transitions between pages — page-to-page transitions are smooth. Loading overlay fires on `astro:before-navigate` and fades out 150ms after `astro:after-navigate`. **First corpus instance of a fully-wired designed loading state.**
- **Animations & motion**: 9 keyframes (most in batch). Loading overlay fade-in/out. Astro view transitions handle page-to-page motion.
- **Hover interactions**: nav items change color to blue-700 on hover. Blog post cards likely have hover states.
- **Background effects**: plain slate-50. No gradient, no grain.
- **3D elements**: no.
- **Responsiveness perception**: Astro + Tailwind responsive. Sidebar → bottom nav breakpoint at `lg`. Icon-only nav scales perfectly across breakpoints.
- **Performance perception**: 0 canvas, 2 imgs, 11 SVG, 0 iframe, 9 keyframes. Astro = static HTML output → very fast initial paint. Loading overlay is a single 100×100 GIF.
- **Emotional feeling**: personal, student-coded, blog-first, African-tech (Thai-Nigerian in Rwanda). The "loading cat" GIF adds personality.
- **Originality** (1-5, with note): **4/5**. Several original moves: (1) **fully-wired designed loading state** (first in corpus — solves an open tension), (2) icon-only sidebar + bottom nav (no text labels at all), (3) nickname "Thursday" in quotes in H1, (4) Google Sans as primary UI font (first corpus instance), (5) Astro View Transitions for multi-page portfolio (first corpus instance of Astro view transitions), (6) loading cat GIF as personality-driven loading indicator.
- **What works** (2-3 bullets):
  - **Fully-wired designed loading state** — first corpus instance. The `#loading-overlay` div with a cat GIF is wired to `astro:before-navigate` / `astro:after-navigate` events, has `aria-busy` toggle, theme-aware background (`#000000` dark / `#f8fafc` light), 150ms fade-out delay. **Solves the "Designed loading state" open tension after 80 portfolios.**
  - **Icon-only sidebar + bottom nav (no text labels)** — radical minimalism. First corpus instance of zero text labels in nav across both desktop and mobile. The 4 Lucide icons (house/user/folder/mail) are universally understood.
  - **Astro View Transitions for multi-page portfolio** — first corpus instance of Astro view transitions in the corpus. Pairs with the loading overlay for a polished multi-page experience.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **Loading cat GIF from Tenor** (`media.tenor.com`) — third-party dependency for a portfolio's loading state. If Tenor goes down or removes the GIF, the loading state breaks. Anti-pattern: third-party-hosted critical UI assets. Should be self-hosted.
  - **Icon-only nav with no `aria-label`s visible** — accessibility risk. Icon-only nav requires `aria-label` per link for screen readers. (The `<a>` tags do have `href`s but we didn't observe explicit aria-labels.)
  - **30px H1 is too small** — the name is the most important element on the page. 30px reads as a paragraph, not a heading. Anti-pattern: under-scaled H1.
- **Notable patterns to consider**:
  - **Fully-wired designed loading state** (EA) — **SOLVES THE OPEN TENSION.** Pattern: `#loading-overlay` div + `aria-busy` toggle on `astro:before-navigate` / `astro:after-navigate` + theme-aware background + 150ms fade-out delay. Personality-driven indicator (cat GIF). Adopt.
  - **Astro View Transitions for multi-page portfolio** (EA) — first corpus instance. Pairs with loading overlay for polished multi-page UX. Adopt.
  - **Icon-only sidebar + bottom nav (no text labels)** — radical minimalism. Adopt with `aria-label` for accessibility.
  - **Nickname "Thursday" in quotes in H1** — first corpus instance of quoted-nickname in H1. Personal-brand pattern. Adopt for personal portfolios.
  - **Google Sans as primary UI font** — first corpus instance. Reinforces B16 codified single-font pattern; Google Sans is a less-common choice vs. Inter/Poppins/Sora.
  - **"Open for work Custom dev services..." services section on /projects page** — first corpus instance of *services-offered section* on a portfolio. Different from B13 plain-text senior-consultant contact. Adopt for freelancer/student portfolios.
  - **Blog-first portfolio (5 posts with 2026 dates)** — reinforces B5 John Clayton blog-as-portfolio pattern. Here the blog IS the portfolio home page (not a separate /blog route).
  - **Multi-page with view transitions** — Astro-specific implementation of B15 codified "multi-page hybrid with RSC prefetching" pattern, but using Astro view transitions instead of Next.js RSC.

---

## Batch 17 Synthesis

### Patterns that *reinforce* prior findings

| Pattern | Source | Reinforced by |
|---|---|---|
| Single-font system (Inter / Poppins / Sora / system-stack) | B1 Triet, B11 Nabin, B14 Dipak, B15 codified, B16 (5/5 single-font) | B81 PJ (system-ui), B82 QF (Roboto), B83 Brhane (system-ui), B84 MSA (system-ui), B85 EA (Google Sans). **5/5 portfolios in batch 17 are single-font. Two consecutive batches at 5/5 — single-font is the dominant 2024-2026 portfolio typography rule.** |
| `lab()`/`oklch()` modern CSS color functions | B15 codified | B81 PJ (entire palette uses `lab()`/`oklch()` — most disciplined instance), B83 Brhane (`lab()` background). **2/5 in batch.** |
| Numeric stats block in hero | B15 codified | B83 Brhane (5+ Years / 15+ Projects / 4+ AI Solutions / 4+ Teams Led), B84 MSA (40% MTTR / 20% Cloud cost / 10+ Apps — but as H2s, not as a stat block). |
| Live GitHub push activity in footer/section | B10 Karan, B15 codified | B84 MSA ("Latest push 1h ago" + commit message + repo name in Live section). Reinforces with *emoji in commit message* ("💀 stealthily update year progress bar"). |
| Visitor signature guestbook | B10 Karan | B84 MSA ("Leave your signal" — visitor signature guestbook in Live section). |
| Ctrl+K keyboard shortcut menu | B15 codified | B84 MSA (`/Shift K` trigger + 4-group command palette). **Refines:** adds slash-trigger + letter-glyph-prefix + action-shortcuts. |
| Plain-text senior-consultant contact | B13 codified | B84 MSA (GitHub / Email / Phone / Resume PDF — plain text, no form). |
| Multi-page architecture | B5 John Clayton, B13 Hugo, B16 Nathan (case-study subroutes) | B81 PJ (`/projects` subroute + "View all projects" button), B85 EA (Astro multi-page: / / /about / /projects / /contact). |
| Location+affiliation in hero | B3 Sambhu (location-SEO headshot) | B83 Brhane ("Kigali, Rwanda · Carnegie Mellon University Africa" location+affiliation chip). |
| Filter pills on projects | B15 codified | B83 Brhane (All / Full-Stack Development / AI/ML Application / Frontend Engineering). |
| Category-prefix-over-project-name project card | B16 Nathan | B83 Brhane (project cards have "Full-Stack Development" category above project name). |
| Cert-link patterns | B14 Anurag, B15 Poonam, B16 Om | B83 Brhane (AWS Certified Cloud Practitioner + CompTIA Linux+ as About-section credentials — cert name as credibility, not as link). |
| Now-page pattern (status line) | B13 codified | B84 MSA ("Now / Improving Azure reliability, reducing incident noise, and building release confidence." as hero eyebrow). |
| Restraint as design principle (0-2 keyframes) | B13 Atal (2-keyframe), B16 Veerendra (0-keyframe) | B81 PJ (4 keyframes), B82 QF (0 keyframes), B83 Brhane (2 keyframes), B84 MSA (2 keyframes). **4/5 portfolios in batch 17 are at 0-4 keyframes — restraint remains the senior signal.** |
| Hero motion budget | B13 Atal (2-keyframe), B16 Veerendra (0-keyframe) | B82 QF (0 keyframes — new minimum alongside B16 Veerendra). |
| Stale copyright anti-pattern | B15 Poonam (2019), B16 Nathan (2021) | None in batch 17 — all 5 portfolios show 2026 copyright. Improvement. |
| Multi-page case-study routes | B16 Nathan (`/projects/<slug>`) | B81 PJ (`/projects` subroute — only index page, not individual case studies), B85 EA (`/projects` index). Less mature than B16 Nathan. |
| Section-stripe rhythm | B15 Dinesh, B16 Utsav | None in batch 17. |
| Body-discipline / secondary-identity | B16 Veerendra + Utsav | B83 Brhane ("Bash & Beyond YouTube Channel Founder" as About-section side project — YouTube-channel-as-secondary-identity). Refines: secondary identity is *content-creation* (YouTube channel), not body-discipline. |
| Footer as personal-statement surface | B13 Aditya (anti-AI), B16 Om (religious) | None in batch 17 — footers are conventional (© 2026 + 3-column). |
| "Featured Projects" implies curation | B15 codified | B83 Brhane ("Featured Projects" as H2 — explicit curation signal). |
| Project status badges | B14 Anurag | B83 Brhane (Current / full time status badges on experience entries — not projects). Refines: status-badge pattern extends to experience entries. |
| Dead-placeholder / failure-mode spectrum | B1 Vinay (404), B14 Hozaifa (parking), B16 Jerry (CRA placeholder) | B82 QF ("Work in Progress" eyebrow — *honest* placeholder, content-aware). **New failure mode:** honest WIP. |

### Patterns that *contradict* or refine earlier findings

| Pattern | Earlier finding | Refined by |
|---|---|---|
| Hero H1 scale | B12 codified 204.8px display H1 (largest); B16 Veerendra 18px (smallest) | B85 EA (30px H1) — refines the lower bound. 30px is between Veerendra's 18px brand-mark and the 64-72px norm. Blog-portfolio variant: H1 doesn't need to be huge when the blog list is the primary content. |
| Hero content | B15 codified metadata-as-hero, time-as-H1, name-as-link | B81 PJ (sidebar nav AS hero content — no large H1 in hero, just nav). **New variant:** nav-as-hero. The hero's job is to orient the user to *what's available*, not to repeat the name. |
| Experience without CV dump | B16 Veerendra (incidents section), B16 Nathan (case studies), B16 Utsav (no experience section) | B84 MSA (two-roles-only: Now + Earlier — most radical compression). **Refines:** the CV-dump problem is solved at its extreme by reducing to 2 temporal-position-labeled entries. |
| Command palette | B15 codified Ctrl+K | B84 MSA refines with: (1) slash `/` as additional trigger (VSCode-style), (2) letter-glyph-prefix per item type (P/A/L), (3) 4-group categorization (Pages / Projects / Actions / Links), (4) embedded action shortcuts (Download resume / Send email / Call now), (5) 28+ projects indexed. **The strongest command palette in the corpus.** |
| Live signal patterns | B10 Karan (GitHub push + visitor guestbook), B15 codified | B84 MSA adds: live Spotify now-playing ("Live audio signal"). **Refines:** live signal is a 4-tuple now: GitHub push + visitor count + Spotify now-playing + GitHub contribution graph. |
| Section naming | B16 codified "Behind the curtains", aspirational H2s | B81 PJ uses literal section names (About/Experience/...). B83 Brhane uses aspirational H2s ("Engineering at Scale", "Professional Journey", "Featured Projects"). B84 MSA uses scene-names (hero-scene/impact-scene/...) + meta-commentary H2s ("Production work, told as operating narrative not resume dump." / "Stack shown with restraint."). **Refines:** section naming has 4 levels of escalation: literal → aspirational → scene-naming → meta-commentary. |
| Single-accent | B1 Triet, B16 codified | B81 PJ (amber-600 single accent), B82 QF (Material Blue default), B83 Brhane (green accent), B85 EA (blue-700). **4/5 single-accent.** B84 MSA is monochrome (no accent). |

### New patterns unique to this batch

1. **Fully-wired designed loading state** (B85 EA) — **SOLVES OPEN TENSION #2** ("Designed loading state — 0 fully-wired instances in 80"). Pattern: `#loading-overlay` div + `aria-busy` toggle on `astro:before-navigate` / `astro:after-navigate` + theme-aware background (`#000000` dark / `#f8fafc` light) + 150ms fade-out delay + personality-driven indicator (loading cat GIF). **First corpus instance of a fully-wired designed loading state.**
2. **Astro View Transitions for multi-page portfolio** (B85 EA) — first corpus instance of Astro view transitions in the corpus. Pairs with the loading overlay for a polished multi-page UX. Astro-specific alternative to B15 codified "multi-page hybrid with RSC prefetching" (Next.js).
3. **Live Spotify now-playing widget** (B84 MSA) — first corpus instance of live Spotify feed on portfolio. "Live audio signal" as a section. Pairs with live GitHub push activity (code signal + audio signal).
4. **Slash-trigger (`/`) command palette in addition to keyboard shortcut** (B84 MSA — `/Shift K`) — first corpus instance of slash as command palette trigger. VSCode/GitHub-style. Reinforces B15 codified Ctrl+K pattern with `/` as additional trigger.
5. **Letter-glyph-prefix per command palette item type** (B84 MSA — P=Pages, A=Actions, L=Links) — first corpus instance. Scannable command palette UI.
6. **Embedded action shortcuts in command palette** (B84 MSA — Download resume / Send email / Call now) — first corpus instance of *action shortcuts* (not just navigation) in a command palette.
7. **Scene-as-section naming** (B84 MSA — hero-scene / impact-scene / live-scene / narrative-scene / projects-scene / capabilities-scene / contact-scene / github-graph-scene) — first corpus instance of "scene" as the unit of portfolio content. Cinematic framing.
8. **Meta-commentary as section H2** (B84 MSA — "Production work, told as operating narrative not resume dump." / "Stack shown with restraint." / "Contribution graph sits at bottom now.") — first corpus instance of self-aware design-principle-as-section-heading.
9. **Two-roles-only experience (Now + Earlier)** (B84 MSA) — extreme anti-CV-dump. Most radical compression of experience section in corpus.
10. **Slash-tag eyebrow in hero** (B84 MSA — "Azure / AKS / observability / CI-CD / incident response") — first corpus instance of slash-as-separator eyebrow. Distinct from B15 codified slash-route tab labels.
11. **Impact section with H2s as metric labels** (B84 MSA — "40% MTTR reduction" / "20% Cloud cost down" / "10+ Apps supported" each as H2) — first corpus instance of metric-as-H2 pattern.
12. **Years-per-tech inline tags** (B83 Brhane — "React 5y / Next.js 4y / TypeScript 4y / JavaScript 5y / Tailwind CSS 3y") — first corpus instance of *experience-duration inline tags per tech*. Turns skills list into evidence of depth.
13. **3×3 grid logo with hover cell-reshuffle** (B81 PJ) — first corpus instance of a logo that *physically re-arranges its pixels on hover*. Tactile brand mark.
14. **Sidebar nav as hero content (no large H1)** (B81 PJ) — first corpus instance of nav-as-hero. Hero's job is to orient the user to what's available, not to repeat the name.
15. **Radix Dialog click-to-expand for experience entries** (B81 PJ) — first corpus instance of progressive disclosure for experience entries. Solves CV-dump via click-to-expand.
16. **Icon-only sidebar + bottom nav (no text labels at all)** (B85 EA — Lucide house/user/folder/mail across both desktop sidebar and mobile bottom nav) — first corpus instance of *zero text labels* in nav. Radical minimalism.
17. **Quoted nickname in H1** (B85 EA — `Emmanuel "Thursday" Alabi`) — first corpus instance of quoted-nickname in H1. Personal-brand pattern.
18. **Google Sans as primary UI font** (B85 EA) — first corpus instance. Reinforces B16 codified single-font pattern; Google Sans is a less-common choice vs. Inter/Poppins/Sora.
19. **"Open for work Custom dev services..." services section on /projects page** (B85 EA) — first corpus instance of *services-offered section* on a portfolio. Different from B13 plain-text senior-consultant contact.
20. **Honest "Work in Progress" eyebrow** (B82 QF) — first corpus instance of explicit WIP signal. New failure-mode: *honest* placeholder (vs. B16 Jerry's CRA default placeholder which is unintentional).
21. **Decorative SVG pattern overlay on body background** (B82 QF — Material Blue 700 at 6% opacity, 192×192 tile) — first corpus instance. Subtle aesthetic alternative to flat white.
22. **Aspirational section H2s** ("Engineering at Scale" / "Professional Journey" / "Featured Projects") (B83 Brhane) — first corpus instance of *aspirational* section H2s (vs. literal "About" / "Experience" / "Projects"). Reinforces B16 codified "Behind the curtains" pattern at section-H2 level.
23. **"brhanegiday" lowercase-concatenated brand logo** (B83 Brhane) — first corpus instance of *brand-style logo with no separator*. Reads as a Twitter/Instagram handle.
24. **YouTube-channel-as-side-project in About** (B83 Brhane — "Bash & Beyond YouTube Channel Founder") — first corpus instance of YouTube-channel-as-side-project in About. Reinforces B16 codified secondary-identity pattern; refines: secondary identity is *content-creation* (YouTube), not body-discipline.
25. **3-column footer** (Quick Links / Resources / Get in Touch) (B83 Brhane) — clean information architecture. Less original than B16 codified footer-as-design-surface, but well-organized.
26. **Three.js r183 with 3 canvases** (B84 MSA) — reinforces B10 Karan real Three.js scene pattern. Here at 3 canvases (478×618 hero centerpiece + 300×150 secondary + 1440×900 background) — most canvas-heavy portfolio in batch. **But: 3D-as-decoration risk for an SRE portfolio.**

### Updated answers to the open tensions (STILL-unsolved ones)

| Tension | Status after batch 17 (85 portfolios) |
|---|---|
| **Scroll-driven section transitions** | **STILL 0 in 85.** B84 MSA uses "scene" terminology for sections (hero-scene / impact-scene / live-scene / etc.) but the actual transitions between sections are normal scroll — no scroll-driven morph/transition. The 1440×900 2D canvas is a *persistent* background, not a transition surface. The 478×618 Three.js canvas is hero-only. B85 EA uses Astro view transitions for *page-to-page* transitions (not section-to-section scroll transitions). **Refined:** Astro view transitions solve page-to-page transitions but NOT scroll-driven section transitions. The tension is now 0/85 with one partial resolution (Astro view transitions for multi-page). |
| **Designed loading state (fully-wired preloader)** | **RESOLVED by B85 Emmanuel Alabi.** `#loading-overlay` div with cat GIF + `aria-busy` toggle on `astro:before-navigate` / `astro:after-navigate` + theme-aware background + 150ms fade-out delay. **First fully-wired instance in 85 portfolios.** Caveat: uses a third-party Tenor-hosted GIF (anti-pattern — should be self-hosted). |
| **Haptic-style mobile feedback** | **STILL 0 in 85.** No portfolio in this batch mentions or implements haptic feedback (`navigator.vibrate()` or similar). Tension remains fully unsolved. |

### Other tensions updates

- **Hero motion that orients** — partially resolved (B15 Juan's dock-as-nav is strongest signal). No new signal in B17. B81 PJ's sidebar-nav-as-hero could be a variant: the hero orients by *listing destinations*.
- **Sound** — resolved (B14 Kavi). No new instance in B17.
- **Long experience history without CV dump** — B84 MSA's solution: two-roles-only (Now + Earlier) — the most radical compression in the corpus. B81 PJ's solution: Radix Dialog click-to-expand (progressive disclosure). B83 Brhane's solution: traditional timeline with Technologies tags + Key Achievements bullets + status badges. B85 EA's solution: traditional About page with Education + Work/Volunteer sections. **Refined answer:** the CV-dump problem has 4 solutions now: (a) case-study routes (B16 Nathan), (b) "Operational Experience" incidents section (B16 Veerendra), (c) two-roles-only (B84 MSA), (d) click-to-expand Radix Dialog (B81 PJ).

### Adoptability recommendations for the premium portfolio project

**High-priority adoptions from this batch**:
1. **Fully-wired designed loading state** (B85 EA) — pattern: `#loading-overlay` + `aria-bust` toggle on navigation events + theme-aware background + fade-out delay. **Adopt with self-hosted indicator** (not Tenor-hosted GIF). Solves open tension #2.
2. **Astro View Transitions for multi-page portfolio** (B85 EA) — adopt as the multi-page UX pattern. Pairs with loading overlay.
3. **Command palette triggered by `/` AND `Shift+K` with 4-group categorization + letter-glyph-prefix + embedded action shortcuts** (B84 MSA) — adopt as the strongest command palette pattern in corpus. Refines B15 codified Ctrl+K pattern.
4. **Two-roles-only experience (Now + Earlier)** (B84 MSA) — adopt for senior portfolios where chronology matters less than current scope.
5. **Meta-commentary as section H2** (B84 MSA — "Production work, told as operating narrative not resume dump." / "Stack shown with restraint.") — adopt as design-principle-as-section-heading pattern.
6. **Years-per-tech inline tags** (B83 Brhane — "React 5y / Next.js 4y") — adopt for skills section. Turns skills list into evidence of depth.
7. **Slash-tag eyebrow in hero** (B84 MSA — "Azure / AKS / observability / CI-CD / incident response") — adopt as slash-as-separator eyebrow pattern.
8. **Live Spotify now-playing widget** (B84 MSA) — adopt as audio-signal pattern. Pairs with live GitHub push activity.
9. **3×3 grid logo with hover cell-reshuffle** (B81 PJ) — adopt as tactile brand mark.
10. **Aspirational section H2s** (B83 Brhane — "Engineering at Scale" / "Professional Journey" / "Featured Projects") — adopt as section naming pattern.
11. **Icon-only sidebar + bottom nav** (B85 EA) — adopt with `aria-label`s for accessibility. Radical minimalism.
12. **Impact section with H2s as metric labels** (B84 MSA — 40% MTTR / 20% Cloud cost / 10+ Apps as H2s) — adopt for SRE/ops portfolios.
13. **Radix Dialog click-to-expand for experience entries** (B81 PJ) — adopt as progressive disclosure pattern.

**Anti-patterns to avoid from this batch**:
1. **Third-party-hosted critical UI assets** (B85 EA — loading cat GIF from Tenor) — never. Self-host critical UI.
2. **5 nav buttons with no destinations** (B82 QF) — never ship nav that doesn't go anywhere.
3. **111 H3s (heading hierarchy as styling)** (B84 MSA) — never use H3 for visual styling. Use semantic headings.
4. **30px H1** (B85 EA) — never. The name is the most important element. Use ≥48px.
5. **3D-as-decoration for non-3D portfolios** (B84 MSA — Three.js for an SRE portfolio) — be cautious. 3D should add information, not just weight.
6. **i18n routing without translated content** (B81 PJ — `/en` URL but no `/nl` version) — never ship i18n infrastructure without content.
7. **Icon-only nav without `aria-label`s** (B85 EA) — never. Always provide accessible names.
8. **Unlabeled icon buttons** (B84 MSA — "◇" button with no aria-label) — never. Always label.
9. **110 SVGs (icon noise)** (B83 Brhane) — reduce icon count. Every icon should add meaning.
