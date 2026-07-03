# Batch 18 — Portfolios 86–90

> **Task ID**: R5-B18 · Agent: general-purpose (portfolio researcher)
> **Corpus position**: 86 / 100 — 91 / 100 — 92 / 100 — 93 / 100 — 94 / 100 (Round 5, Batch 18 of 20)
> **Method**: `agent-browser` (Chromium, 1440×900), DOM `eval`, console inspection, `curl -sIL` for reachability. 21 screenshots saved to `/home/z/my-project/research/screenshots/batch_18/`.

**Reachability check (curl -sIL)**: all 5 URLs returned HTTP 200 / 301→200. All 5 fully reachable.

---

### 86. Abdullah Bozdağ — https://abdullahbozdag.com

- **Reachable**: yes (HTTP 200, Vercel, Next.js)
- **First impression**: Warm cream desktop-app layout — a single `h-screen` canvas with no body scroll; the left side is a scrollable content panel, the right side is an icon-and-text sidebar nav. Feels like a focused tool, not a webpage.
- **Visual hierarchy**: 1 H1 ("Abdullah Bozdağ") at text-6xl bold tracking-tight → 0 H2 → 0 H3. The page is structurally flat: only 1 H1 in the DOM at a time, because the sidebar switches view state (Home / Projects / Experience / Contact) without re-routing — each view re-renders inside the same max-w-2xl scrollable panel.
- **Layout composition**: `relative z-10 flex h-screen` — flex row, left `flex-1` (centered content) + right `w-24` sidebar. Mobile: `md:hidden fixed bottom-0` backdrop-blur bottom nav with the same 4 icons. Sidebar shows 4 vertically-stacked buttons (lucide house / arrow-right / briefcase / mail), each with icon + tiny "Home" / "Projects" / "Experience" / "Contact" text label below. A vertical pill indicator (1px × 12px, copper `#B87333`, `top: 288px`) slides between active items.
- **Typography**: Default browser serif (computed `Times New Roman` — the Google font wasn't loaded in the headless run; in production it's almost certainly a real custom font, but the markup only references `tracking-tight font-bold text-5xl md:text-6xl`). Body text is sans system stack. Two-tier type.
- **Color palette**: Background `#EDE5D8` (warm cream), text `#2D1F1A` (dark brown), accent `#B87333` (copper). A subtle SVG noise filter overlays at 3% opacity. **First corpus instance of a tan + brown + copper triad on a portfolio.** Reads as warm, vintage, almost paper-like.
- **Spacing**: Balanced — `space-y-8` between content blocks, `space-y-4` within. The 4 sidebar buttons sit `gap-6` apart.
- **Hero section** (Home view): H1 + one-line tagline ("Backend developer & full-stack builder. I create web applications and solve complex problems with clean, efficient code.") + 4 inline social links (X / GitHub / LinkedIn / Email). No image, no canvas, no animation. The site has 9 CSS keyframes (mostly for the active-pill transition).
- **Navigation**: Right-side icon-and-text sidebar (w-24, hidden md:flex). Mobile: bottom nav. No top header. **A variant of Emmanuel's icon-only sidebar pattern, but with tiny text labels under each icon** — solves the discoverability problem of icon-only nav without abandoning the no-scroll app-shell concept.
- **Section ordering** (state-switched, not scroll-based): Home → Projects → Experience → Contact. Projects view lists 4 projects (Rota, parolla.app, sanalyer.com, Old Portfolio) with descriptive paragraphs. Experience view has tech-stack grouping (Primary Stack / Mobile & Tools) + 5 chronological job entries. Contact view: "Get in Touch" + availability line + "Email Me" CTA.
- **Scroll experience**: No page scroll. Inner content panel scrolls (`max-h-full overflow-y-auto scrollbar-thin`) when content overflows. View transitions are state-based, not animated — no fade, no slide.
- **Animations & motion**: Minimal. Hover scale-110 on sidebar icons (`transition-transform duration-200 group-hover:scale-110`), active-pill position transition, hover color transitions on links. 9 keyframes total but most are utility-level.
- **Hover interactions**: Sidebar icon scale + opacity (active = full opacity + accent color; inactive = 50% opacity + brown text). Social links: color transition only.
- **Background effects**: Solid `#EDE5D8` with a 3%-opacity SVG noise filter overlay (data URI of `feTurbulence` fractalNoise). No gradient, no particles, no 3D.
- **3D elements**: none.
- **Responsiveness perception**: Adaptive — desktop uses right sidebar, mobile uses bottom nav (also icon + tiny label).
- **Performance perception**: Fast. Single page, Next.js client-rendered, no heavy assets. The body HTML is only ~16KB.
- **Emotional feeling**: Calm, focused, warm. Reads as "I value restraint and craft."
- **Originality**: 3/5 — the desktop-app no-scroll pattern echoes Juan/Emmanuel, but the warm cream + copper palette and the icon+label sidebar variant are personal. The "Old Portfolio" project link (pointing to his previous cyberpunk-themed site) is a self-aware wink.
- **What works**:
  - Warm tan + brown + copper palette is genuinely fresh — first corpus instance of a paper/parchment-feeling portfolio.
  - Sidebar with icon + tiny text label is the most legible compromise between icon-only minimalism and full text nav.
  - "Old Portfolio" entry in Projects that links to his previous cyberpunk site — a self-aware, low-ego joke about aesthetic growth.
- **What does NOT work**:
  - State-switching instead of routing means the URL never changes; can't deep-link to /projects or /experience. Bad for sharing.
  - No H2 or H3 anywhere — when a view has multiple projects, they're not semantically structured. SEO/AT: only one heading per "page".
  - Console showed 14 errors from a stale `cdn.simpleicons.org` fetch failure (`zod`, `android`, `html5`, `express`, etc.) — these reference a `ThreeDSphere` component from `portfolio-fayed.vercel.app`. Either Abdullah copied a Next.js template that references a 3D sphere dependency, or the headless browser's console is contaminated from a prior session. Either way, the production page has zero canvas elements, so the sphere never renders.
- **Notable patterns to consider**:
  - **Icon + tiny-text sidebar** (Abdullah variant of Emmanuel's icon-only sidebar) — solves discoverability without abandoning the no-scroll app shell.
  - **Warm cream + brown + copper palette** — first corpus instance of paper-feeling warm palette; viable alternative to the tinted-light (peach/cream) family.
  - **Self-aware "Old Portfolio" link** as a project entry — playful meta-commentary on aesthetic evolution.

---

### 87. Decoopman Nicolas — https://ncsdecoopman.github.io

- **Reachable**: yes (HTTP 200, GitHub Pages, Astro)
- **First impression**: A French-language data-engineer portfolio with a tsParticles canvas background, scroll-snap full-height sections, gradient-text H1, and a sun/moon theme toggle in the top-right corner. Reads as modern-French-academic with technical polish.
- **Visual hierarchy**: 1 H1 ("Nicolas Decoopman") → 5 H2s (each a section title with an accent-colored period: "Comprendre.\nConstruire.", "Mon parcours.", "Une question ? Contactez-moi !", "Mes partenaires.", "Recommandations.") → 14 H3s (job titles in parcours + names in recommendations).
- **Layout composition**: 6 `snap-start min-h-[100dvh]` sections stacked vertically: hero / about / parcours (timeline) / contact / partners / recommendations. Floating theme-toggle (top-right, fixed). No persistent top nav — the only anchor link visible is the Contact icon in hero. Each section has its own gradient class (`section-gradient-projet`, `section-gradient-contact`) suggesting subtle background transitions.
- **Typography**: H1 is `Raleway, sans-serif` at 64px (clamp 2rem–4rem), weight 700. H2s use `text-[clamp(1.8rem,3vw,2.5rem)] font-semibold`. Body uses Raleway throughout. Two-tier system. Mono is not used.
- **Color palette**: Light theme default — bg `#F3F4F6` (cool gray), text `#33371F` (near-black with green tint), accent `#3B82F6` (Tailwind blue-500), bg-alt `#E5E7EB`. Has theme toggle to dark. CSS custom properties drive everything: `--color-bg`, `--color-text`, `--color-accent`, `--color-bg-alt`.
- **Spacing**: Each section is `min-h-[100dvh]` so spacing is cinematic — vertical breathing room dominates.
- **Hero section**: Centered H1 + tagline ("Data Scientist & AI Engineer"), both with `bg-gradient-to-r from-[var(--color-text)] to-[var(--color-accent)] bg-clip-text text-transparent` — gradient-text fade from text color to accent. Below: 3 round 80×80 icon buttons (Contact / GitHub / LinkedIn) with hover bg-alt. Behind: tsParticles canvas (110 particles, no links, animated 0.16–0.32 speed, accent-colored). A radial-gradient "hero-halo" emanates from top-right corner using `color-mix(in oklab, var(--color-accent) 18%, transparent)`.
- **Navigation**: No top nav. Floating theme-toggle in top-right corner (`fixed top-4 right-4 z-50`). Single in-page anchor (the Contact icon in hero links to `#contact`). Section-to-section navigation is via scroll-snap.
- **Section ordering**: hero → about → parcours (timeline of 6+ roles: WHYMPR / NAIVO / NIVÉO / CNRS etc.) → contact (form: Nom/Email/Message → Envoyer, wired as a Google Form) → partners → recommendations.
- **Scroll experience**: Scroll-snap (`snap-start min-h-[100dvh]`) gives the page a fullscreen-section feel — each scroll locks to the next section. 2 keyframes total, no scroll-triggered animations beyond snap.
- **Animations & motion**: tsParticles background animates continuously. Hero halo is static. "reveal" class on hero elements suggests `animation-fill-mode: both` with `--delay` stagger (0ms / 150ms / 300ms). The MutationObserver on `data-theme` re-inits tsParticles when theme changes — nice touch.
- **Hover interactions**: Round icon buttons: `hover:bg-[var(--color-bg-alt)]` with `transition-colors duration-300`. No transforms, no scale.
- **Background effects**: tsParticles canvas (full-page `absolute inset-0 -z-10`), 110 floating dots. Hero-only radial halo. Section gradient overlays (`section-gradient-projet`, `section-gradient-contact`) — subtle color shifts between sections.
- **3D elements**: none.
- **Responsiveness perception**: Sections use `min-h-[100dvh]` (dynamic viewport height) which handles mobile browser chrome correctly. Tailwind responsive classes throughout.
- **Performance perception**: Astro static site, but tsParticles adds a canvas + JS module. 31 images (project logos / partner logos / recommendation avatars). 9 SVGs (icons). Reasonable.
- **Emotional feeling**: Calm, professional, French-academic. Slightly conservative — the kind of portfolio a thesis advisor would approve of.
- **Originality**: 2.5/5 — solid execution of standard Astro patterns (snap-scroll, gradient text, theme toggle, particles). The "Mes partenaires" + "Recommandations" sections are unusual for a dev portfolio but feel like LinkedIn imports rather than native portfolio content.
- **What works**:
  - **Color period after section title**: `<h2>Mon parcours<span style="color:var(--color-accent)">.</span></h2>` — single character in accent color as punctuation. Subtle, consistent across all 5 H2s.
  - **Recommandations section** — first corpus instance of a formal recommendations section with 3 named recommenders, their roles, dates, and the relationship ("Jocelyne était la responsable directe de Nicolas"). Reads like LinkedIn endorsements, but curated.
  - Theme-toggle that re-inits tsParticles with the new accent color via MutationObserver — small detail that shows craft.
- **What does NOT work**:
  - **No nav** — a 6-section snap-scroll site without any section nav is exhausting to navigate; you have to scroll through everything to find anything.
  - French-only content limits audience (but the dev is clearly targeting French employers).
  - "Mes partenaires" section header is followed by seemingly no partner logos in the screenshots — possibly empty or below-the-fold content.
  - 14 imgs loaded for "partners" + "recommendations" could be lazy-loaded but appear to all be in initial DOM.
- **Notable patterns to consider**:
  - **Accent-color period as H2 punctuation** — 1-character branding device, applied consistently across all section titles.
  - **Recommandations section with named endorsers + roles + dates + relationship** — first corpus instance of formal recommendations as a section (instead of testimonials).
  - **Astro snap-scroll with `min-h-[100dvh]`** — using dynamic viewport height correctly for mobile.
  - **MutationObserver on `data-theme`** to re-init canvas particles with new accent color — small craft signal.

---

### 88. Mihir Chauhan — https://chauhan-mihir.vercel.app

- **Reachable**: yes (HTTP 200, Vercel, static HTML + JS — no framework detected)
- **First impression**: A "developer-as-product" spec-sheet metaphor portfolio. The H1 is the product name, the hero is a datasheet (CLASS / TRAINING / MODALITIES / DEPLOYED AT / LOCATION / STATUS), experience entries are "RUN-05 / RUNNING" deployments, projects are "P-01 / P-02" part numbers. Extreme commitment to a single conceptual frame.
- **Visual hierarchy**: 1 H1 ("MIHIR CHAUHAN" on 2 lines, letter-by-letter scramble animation) → 6 H2s (OVERVIEW / EXPERIENCE / PROJECTS / SKILLS / PUBLICATIONS / CONTACT) → 18 H3s (job titles, project names, skill categories). Clean three-tier hierarchy.
- **Layout composition**: Topbar (logo + numbered nav `01 Overview`…`06 Contact` + DARK theme button + hamburger) → main content with `section.section` blocks. A 4-cell `bench` (benchmark) grid sits between hero and overview. A scrolling `marquee` of tech keywords sits between bench and overview. Progress bar (`#progress`) fixed at top, currently `scaleX(0.457)`.
- **Typography**: H1 is `Archivo, -apple-system, sans-serif` at **120px, weight 850** — extreme display weight at extreme size. Section H2s use the same Archivo. Body uses a sans serif. Mono labels use `.mono` class (likely a mono font for spec keys, nav numbers, captions). **Two-font + mono system, with 850 weight as the signature.**
- **Color palette**: Background `#F2F1E5` (warm cream, similar to Abdullah's family but cooler/lighter). Text appears near-black. Alternating sections use `section-alt` (slightly different bg). Contact section uses `section-dark` (inverted).
- **Spacing**: Generous — wrap containers, large vertical spacing between sections. The hero spec-card has `space-y` between rows.
- **Hero section**: Hero eyebrow (mono, `data-scramble`): "TECHNICAL SPECIFICATION · HUMAN, GENERALLY CAPABLE". H1 is letter-by-letter span layout with `--d:0.035s` increment per letter (animation delay). Below H1: a 2-column grid — left is a "spec-card" with 6 KEY/VALUE rows (CLASS / TRAINING / MODALITIES / DEPLOYED AT / LOCATION / STATUS), each row has a mono `spec-key` and a regular `spec-val`. The STATUS row contains a pulsing dot before "Open to ML / AI engineering roles". Right column: a portrait photo with mono caption "FIG. 1 — THE SYSTEM IN QUESTION" (academic-paper figure caption applied to a self-portrait).
- **Navigation**: Sticky topbar with logo (custom SVG mark — looks like an M + half-C combined) + 6 numbered nav links (01 Overview / 02 Experience / 03 Projects / 04 Skills / 05 Publications / 06 Contact) + DARK toggle + hamburger. Active link gets `.active` class. CTA link (`nav-link-cta`) for Contact.
- **Section ordering**: hero → bench (4-cell metrics) → marquee (scrolling tech keywords) → §01 OVERVIEW → §02 EXPERIENCE → §03 PROJECTS → §04 SKILLS → §05 PUBLICATIONS → §06 CONTACT → footer.
- **Scroll experience**: Standard scroll, but with `#progress` bar at top showing scroll position via `transform: scaleX()`. Snap not enabled. Sections don't have entrance animations beyond the hero scramble.
- **Animations & motion**:
  - **Letter-by-letter H1 scramble**: each letter is its own `<span class="ch" style="--d:0.035s">` — staggered fade/slide in.
  - **Scroll progress bar**: `transform: scaleX(0.457)` updates with scroll position.
  - **Marquee**: CSS animation scrolling tech keywords (LLM EVALUATION / MULTI-AGENT SYSTEMS / RAG PIPELINES / MLOPS / AWS · ECS FARGATE / PROMPT ENGINEERING / SHIPS TO PRODUCTION) — duplicated content for seamless loop.
  - **Count-up metrics**: `data-count="3.96"` and `data-decimals="2"` on bench numbers suggests they animate from 0 to value when in viewport.
  - **CTA tip**: floating "EMAIL ME →" label (`#cta-tip`) that follows the cursor or appears on hover — `aria-hidden` so decorative.
  - Only 2 CSS keyframes total — most motion is JS-driven (scramble, count-up, progress).
- **Hover interactions**: Nav links show numbered prefix. Cards likely have hover states. Spec-card rows have `class="in"` suggesting entrance animation.
- **Background effects**: Solid `#F2F1E5`. No particles, no gradients, no grain. Section-alt variation provides contrast.
- **3D elements**: none.
- **Responsiveness perception**: Topbar collapses to hamburger (`menu-btn`) on mobile. Hero-grid likely stacks.
- **Performance perception**: Fast. Static HTML, no framework, minimal JS. Single portrait image (`Images/mihir-web.jpg` with `fetchpriority="high"`). 1 img, 1 svg, 0 canvas.
- **Emotional feeling**: Confident, technical, slightly cocky. The "with proof where it exists, and none invented where it doesn't" line in Projects sets the tone.
- **Originality**: 4.5/5 — strongest single-metaphor commitment in this batch. The "developer as a product spec sheet" frame is sustained across hero, experience (RUN-XX), projects (P-XX), and figure captions. Only loses half a point because the spec-sheet metaphor itself isn't brand-new (Md Sarfaraz's hero-as-terminal is in the same family), but the *sustained application* across every section is.
- **What works**:
  - **Spec-card hero metadata** (CLASS / TRAINING / MODALITIES / DEPLOYED AT / LOCATION / STATUS) — the most literal datasheet-as-hero pattern in the corpus. Every key is a noun, every value is concrete.
  - **"RUN-XX / RUNNING|COMPLETE" deployment metaphor for experience** — reframes each job as a deployment with status. RUN-05 = "Research Intern / CU Anschutz", status RUNNING. RUN-04 = "AI Engineer (Capstone) / Honda 99P Labs", status COMPLETE. Reads as continuous deployment history.
  - **Bench metrics with directional prefixes**: "3.96 GPA", "96.5% CV model accuracy", "−50% query time", "+40% business data coverage" — the +/− prefixes signal impact (not vanity). The minus sign on "−50% QUERY TIME" is a Unicode minus (`−`), not a hyphen — typographic care.
  - **FIG. 1 caption on self-portrait** — academic-paper figure caption convention. "FIG. 1 — THE SYSTEM IN QUESTION" is funny and intentional.
  - **Marquee of capabilities between hero and overview** — 7 short uppercase phrases (LLM EVALUATION / MULTI-AGENT SYSTEMS / RAG PIPELINES / MLOPS / AWS · ECS FARGATE / PROMPT ENGINEERING / SHIPS TO PRODUCTION). The last phrase "SHIPS TO PRODUCTION" is the punchline.
- **What does NOT work**:
  - The "CURRENTLY LEARNING" block in overview lists Kubernetes, LangGraph, MCP, PyTorch internals, AI coding tools — five topics. Reads as buzzword-bingo rather than focused. Could be 2 topics with depth.
  - 850-weight Archivo at 120px is *intense* — on a 13" laptop it might dominate the screen.
  - Contact section uses a `FROM_NAME / REPLY_TO / PROMPT` form that looks like a third-party form service. The labels "FROM_NAME" / "REPLY_TO" are technical but may confuse non-technical recruiters.
- **Notable patterns to consider**:
  - **Spec-card hero** — KEY/VALUE datasheet as hero content (most literal version of metadata-as-hero-content).
  - **"RUN-XX / RUNNING|COMPLETE" deployment metaphor** for experience entries — first corpus instance of CI/CD run-status framing applied to career history.
  - **P-XX project numbering as part numbers** — like SKUs in a catalog.
  - **§ section sign + numbered sections** ("§ 01 OVERVIEW") — typographic prefix more elegant than "// 01" or "01.".
  - **Bench metrics with +/− directional prefixes** — impact-aware numbers.
  - **FIG. N caption convention** applied to non-figure elements (self-portrait).
  - **Marquee of capability phrases** as a section-divider / pacing device.
  - **Archivo 850 weight at 120px** — extreme display weight, first corpus instance at this combination.
  - **Letter-by-letter H1 scramble with `--d` delay per letter** — reinforces Md Sarfaraz / Emmanuel pattern.
  - **"with proof where it exists, and none invented where it doesn't"** — meta-commentary on the portfolio's own honesty, in the Projects intro. Reinforces the "meta-commentary as section H2" pattern.

---

### 89. Mahatab Hossen Sudip — https://sudipmhx.pro.bd

- **Reachable**: yes (HTTP 200, Vercel, Next.js)
- **First impression**: A polished MERN-stack portfolio with a floating pill nav, grid-paper background, serif H1 that's a value proposition (not his name), and categorized skills. Reads as a competent mid-level dev portfolio — tasteful but not surprising.
- **Visual hierarchy**: 1 H1 (the value proposition: "I craft purposeful experiences that ignite creativity and spark engagement.") → 4 H2s (About Me / Skills And Experience / My Projects / Let's create something new for big move) → 6 H3s (project names + SudipMHX). The H1 is the value prop, not the name — interesting reversal.
- **Layout composition**: Floating rounded-full nav (centered top, 65–75% width, backdrop-blur-3xl, shadow) with logo on left and nav links on right. Hero section with grid background. About, Skills, Projects sections stacked vertically. Footer with availability CTA.
- **Typography**: H1 is `Domine, "Domine Fallback"` (serif) at 60px, weight 600. Body uses system sans. **First corpus instance of Domine serif for H1** — has wide serifs and an almost-print feel.
- **Color palette**: Background `#F7F8FA` (cool light gray, near-white). Text appears dark gray. Cool palette — distinct from the warm creams of Abdullah and Mihir.
- **Spacing**: Generous, container-based. Skills section uses a 2-column grid (category list left, tag cloud right).
- **Hero section**: "Hey, I am Sudip!" eyebrow + serif H1 value proposition + tagline ("As a MERN stack and WordPress expert, I design and develop digital experiences that are engaging, functional, and impactful.") + 4 social links (GitHub / LinkedIn / Twitter / Gmail) + "Know me better" CTA + "Scroll Down" hint. Grid-paper background pattern (`grid-background` class).
- **Navigation**: **Floating pill nav** (first corpus instance of a true pill-shaped floating nav): `fixed top-2 left-1/2 -translate-x-1/2 ... rounded-full backdrop-blur-3xl shadow-lg shadow-blue-900/10 w-[70%] md:w-[75%] lg:w-[65%]`. Links use a **duplicate-text skew+translate hover animation**: each link has two copies of the text inside `<span class="relative inline-flex overflow-hidden">`. Default state: first copy is `translate-y-0 skew-y-0`, second copy is `translate-y-[110%] skew-y-12`. On hover: first copy becomes `-translate-y-[110%] skew-y-12`, second copy becomes `translate-y-0 skew-y-0`. So the text "rolls up and skews out" while the duplicate "rolls up and un-skews in" — a Y-axis flip with skew.
- **Section ordering**: Hero → About Me → Skills And Experience → My Projects → Footer (with "Available for work" + "Let's create something new for big move" + Get In Touch + socials).
- **Scroll experience**: Standard scroll, no snap, no parallax. Sections fade in via Tailwind transitions.
- **Animations & motion**: 3 keyframes total. Nav-link hover skew+translate is the signature micro-interaction. Otherwise minimal motion.
- **Hover interactions**: Nav links have the duplicate-text skew flip. Project cards likely have hover states (Featured tag + category). Buttons have `transition-all duration-500`.
- **Background effects**: `grid-background` class on hero section — grid-paper pattern. Cool light bg otherwise. No particles, no gradients, no 3D.
- **3D elements**: none.
- **Responsiveness perception**: Nav pill changes width responsively (70% mobile → 65% lg). Mobile menu appears via hamburger.
- **Performance perception**: Reasonable. 19 imgs, 19 svgs (likely icons). Next.js with image optimization.
- **Emotional feeling**: Polished, friendly, professional. Not edgy. The kind of portfolio that wins recruiter approval without surprising anyone.
- **Originality**: 2.5/5 — competent execution of standard patterns. The duplicate-text skew hover is the only signature move.
- **What works**:
  - **Value-proposition-as-H1** (not name-as-H1) — "I craft purposeful experiences that ignite creativity and spark engagement." positions the dev as a craftsperson, not a name. Different from the name-as-link / name-as-H1 pattern.
  - **Floating pill nav** — rounded-full, backdrop-blur, centered-top. Less aggressive than a sidebar, more modern than a top bar. First corpus instance of pill-shaped floating nav.
  - **Duplicate-text skew+translate hover** on nav links — clever Y-axis flip animation. Each link has two text copies that swap on hover with a 12deg skew.
  - **Skills with category sub-labels**: "Web Design / CSS Framework", "JavaScript (ES6) / Language", "React.js / JavaScript Library", "MongoDB / NoSQL Database", "GIT / Version Control", "WordPress / CMS". Each tech is annotated with its category — reads like a categorized glossary.
- **What does NOT work**:
  - **H1 is a value proposition, but the value proposition itself is generic** — "I craft purposeful experiences that ignite creativity and spark engagement" could be on any designer's site. Specificity beats poetry.
  - Skills section lists 16 technologies — slightly too many. The "Web Design / CSS Framework" entry is questionable (CSS Framework is a category, not a specific tool).
  - "View All Projects" CTA suggests more projects exist beyond the 6 shown — but only 6 are listed with one-line descriptions, no case studies.
- **Notable patterns to consider**:
  - **Value-proposition-as-H1** (instead of name-as-H1) — alternative to the dominant name-as-H1 pattern.
  - **Floating pill nav** (rounded-full, centered, backdrop-blur) — modern alternative to sidebar or top-bar nav.
  - **Duplicate-text skew+translate hover** for nav links — Y-axis flip with skew.
  - **Skills with category sub-labels** ("React.js / JavaScript Library") — turns skills list into a categorized glossary.
  - **Domine serif H1** — first corpus instance of this specific serif, print-like feel.

---

### 90. Mitul Savani — http://mitulsavani.com

- **Reachable**: yes (HTTP 301 → HTTPS 200, GitHub Pages, static HTML)
- **First impression**: A 2019-2023-era static portfolio with jQuery, magic-grid masonry, Font Awesome icons, and 4 H1s used as section labels ("docs." "open source." "research." "projects."). Reads as honest, dated, and intentionally simple — like a README rendered as a webpage.
- **Visual hierarchy**: 4 H1s (each a section label with period suffix: "docs.", "open source.", "research.", "projects.") → 0 H2 → 0 H3. **Flattest heading hierarchy in the corpus.** Body content is plain `<p>` paragraphs inside `<section>` blocks. Anti-pattern semantically (4 H1s), but the lowercase-with-period aesthetic is consistent.
- **Layout composition**: Single-column page. Top: profile block (Hey there 👋🏽 + about paragraphs + vertical social sidebar). Below: 4 sections (docs / open source / research / projects), each with H1 + magic-grid masonry of cards. Magic-grid arranges cards via `position: absolute; transform: translate(Xpx, 0px)` — automatic masonry layout.
- **Typography**: H1 is `Questrial, sans-serif` at 50px, weight 700. Body uses sans system. Questrial is a rounded geometric sans — gives the site a friendly, slightly soft feel.
- **Color palette**: Background `#FFFFFF` (pure white). Text appears near-black. **Pure white, no tint.** No accent color visible in the H1 (monochrome design).
- **Spacing**: Cards in magic-grid have ~24px gutters. Sections separated by H1-only breaks (no extra padding).
- **Hero section**: "Hey there 👋🏽" + 3-paragraph bio (AgreeYa Solutions, Kandou, Claryty, SF State, Folsom CA, India, Formula 1 + rockets + space). No CTA buttons. Sidebar with 4 social icons (LinkedIn / GitHub / Twitter / Email).
- **Navigation**: **None.** No top nav, no anchor menu, no in-page links beyond the socials sidebar. Pure scroll page. The 4 H1 section labels serve as informal nav.
- **Section ordering**: Profile (Hey there + bio + socials) → docs. (Résumé + Cover Letter cards) → open source. (4 OSS contribution cards with repo metrics) → research. (Claryty research) → projects. (6 project cards: Mood, X_O, EventUp, macysExpress, spiral, daug) → footer ("Copyright © 2023. All Rights Reserved.").
- **Scroll experience**: Standard scroll, no snap, no parallax, no animations beyond the initial page load (animate.css is loaded but no `.animated` classes are applied visibly). 0 keyframes in CSS.
- **Animations & motion**: A loading spinner (`#loading` div with `#spinner`) is in the DOM but `display: none` — likely showed during page load. No other motion.
- **Hover interactions**: Cards have hover states (likely shadow or border change via index.css). Social icons change color on hover.
- **Background effects**: Pure white. No gradient, no grain, no particles.
- **3D elements**: none.
- **Responsiveness perception**: magic-grid handles reflow automatically. Sidebar likely collapses on mobile.
- **Performance perception**: Light. jQuery 3.4.1 + animate.css 3.7.0 + Font Awesome 5.7.1 + magic-grid + index.css. ~5 external requests. Page is fast.
- **Emotional feeling**: Calm, dated, honest. Reads as "I made this in a weekend in 2019 and haven't touched it since." Sincere but unmaintained.
- **Originality**: 2/5 — minimal but not in a designed way. The 4-H1-as-section-labels pattern is unique but accidental rather than intentional.
- **What works**:
  - **Open source contributions as a dedicated section with fork/star counts** — first corpus instance of OSS contributions treated as primary content. Each entry shows repo name, contribution description, and metrics ("99K 21.4K" = stars + forks for facebook/react-native). Reads as "real engineering impact at scale."
  - **4-card docs section** (Résumé + Cover Letter) — treats the resume and cover letter as primary artifacts, not buried in a footer link.
  - **Magic-grid masonry** — auto-arranging card layout, lightweight, no framework dependency.
- **What does NOT work**:
  - **4 H1s, 0 H2, 0 H3** — destroys document outline. Worst semantic structure in this batch.
  - **`<title>mitulsavani</title>`** — lowercase, no descriptor. Same anti-pattern as Fikri (`document.title = "personal_website"`) and Krishnanand.
  - **Last updated 2023** — copyright footer says "© 2023". Stale portfolios signal "I'm not actively maintaining my own brand."
  - **No nav at all** — a 5-section page with no nav menu is hard to navigate; users must scroll blindly.
  - **Pure white + Questrial + 4 H1s** reads as "I didn't design this, I just wrote content."
- **Notable patterns to consider**:
  - **Open source contributions as a section with repo metrics** — first corpus instance of OSS contribution history as primary content.
  - **Lowercase-with-period section labels** ("docs.", "open source.", "research.", "projects.") — terminal/Unix-y aesthetic but applied to H1s (anti-pattern). The aesthetic itself could be applied to H2 eyebrows instead.
  - **Magic-grid masonry** for auto-arranging card layouts — lightweight vanilla JS alternative to CSS Grid masonry.
  - **Résumé + Cover Letter as primary cards in a "docs" section** — elevates the documents from footer-link to first-class content.

---

## Batch 18 Synthesis

### Patterns that *reinforce* prior findings

| Pattern | Source | Reinforced by |
|---|---|---|
| Letter-by-letter H1 split with staggered delay | Md Sarfaraz, Emmanuel | **Mihir Chauhan** — each letter is `<span class="ch" style="--d:0.035s">` with 35ms increment per character |
| Meta-commentary as section intro | Md Sarfaraz ("Production work, told as operating narrative not resume dump.") | **Mihir Chauhan** — Projects intro: "Selected systems — with proof where it exists, and none invented where it doesn't." |
| Numeric stats block in hero-or-near-hero | Juan (time-as-H1), Md Sarfaraz (impact-scene) | **Mihir Chauhan** — 4-cell `bench` grid (3.96 GPA / 96.5% accuracy / −50% query time / +40% data coverage) immediately after hero |
| No-body-scroll app-shell layout | Juan (desktop sim), Emmanuel (icon-only sidebar) | **Abdullah Bozdağ** — `h-screen relative overflow-hidden` with content panel scrolling inside; right-side icon sidebar |
| Theme toggle (sun/moon, fixed corner) | Multiple | **Decoopman** — `fixed top-4 right-4` theme-toggle as the *only* persistent UI element |
| Scroll progress bar | Bhavesh (2px gradient lime→pink→cyan→volt) | **Mihir Chauhan** — `#progress` fixed top bar with `transform: scaleX()` |
| Warm-tinted light background | Nico (peach), EMF (pure white + ultralight), Abdullah (cream) | **Abdullah (#EDE5D8), Mihir (#F2F1E5)** — both warm creams; **Sudip (#F7F8FA)** — cool light gray |
| Two-font + mono system | Antônio, Triet, Whilmar, Nico, EMF | **Mihir Chauhan** — Archivo (display, 850 weight) + sans (body) + `.mono` (labels, captions, spec keys) |
| Numbered sections (01 / 02 / 03) | Phat Tran Tan, Sudip (in nav), prior batches | **Mihir Chauhan** — `01 Overview`…`06 Contact` in nav, `§ 01`–`§ 06` in section H2s |
| Pulsing "Available" dot in hero metadata | Multiple | **Mihir Chauhan** — STATUS row of spec-card: `<span class="dot" aria-hidden="true"></span>Open to ML / AI engineering roles` |
| Multi-page Next.js with sub-routes | Sudip (`/about`, `/projects`, `/blog`) | Confirms the multi-page pattern continues |
| Section-specific gradient backgrounds | Whilmar (architectural-engineering) | **Decoopman** — `section-gradient-projet`, `section-gradient-contact` classes for subtle bg transitions between sections |
| Particle background (canvas-based) | Whilmar (WebGL2 particles) | **Decoopman** — tsParticles (110 dots, no links, accent-colored) — lighter, no-WebGL variant |

### Patterns that *contradict* or refine earlier findings

| Earlier finding | Refinement from Batch 18 |
|---|---|
| "Pure white only works with ultralight display type at very large sizes" (Batch 4) | **Mitul Savani contradicts this** — pure white with Questrial 50px weight 700 reads as dated, not premium. Confirms: pure white needs an *extreme* type gesture (ultralight OR ultraheavy) to work. Mitul's 700-weight-50px is in the dead middle. |
| "Icon-only sidebar = radical minimalism, zero text labels" (Emmanuel, Batch 17) | **Abdullah refines this** — icon + tiny `text-xs` label under each icon. Solves discoverability without abandoning the no-scroll app shell. The refined rule: **icon-only sidebar works for ≤4 items; beyond that, add tiny labels.** |
| "Name-as-H1" dominant pattern | **Sudip contradicts** — value-proposition-as-H1 ("I craft purposeful experiences…"). The name appears as eyebrow ("Hey, I am Sudip!"). Reinforces Phat Tran Tan's pattern of putting name in a secondary position. |
| "Document outline: 1 H1 per page" (anti-pattern #9, #12) | **Mitul** has 4 H1s, **Abdullah** has 1 (but state-switched views break deep-linking). Mitul is the worst semantic-structure case in batch 18. |
| "Tinted-neutral, never pure" (Batch 2) | **Mitul contradicts** with pure white — and reads as dated, not premium. Confirms the principle: pure needs an extreme type gesture. |

### New patterns unique to this batch

1. **Spec-card hero metadata (KEY/VALUE datasheet)** — Mihir Chauhan. The most literal datasheet-as-hero pattern in the corpus. 6 rows: CLASS / TRAINING / MODALITIES / DEPLOYED AT / LOCATION / STATUS. Each key is a noun, each value is concrete. Evolution of "metadata-as-hero-content" toward product-spec framing.

2. **"RUN-XX / RUNNING|COMPLETE" deployment metaphor for experience** — Mihir Chauhan. Reframes each job as a CI/CD run with status. RUN-05 = current job (RUNNING), RUN-04 = previous (COMPLETE). First corpus instance of CI/CD run-status framing applied to career history. Combines with P-XX project numbering for a unified "everything is a deployable artifact" metaphor.

3. **Bench metrics with +/− directional prefixes** — Mihir Chauhan. "−50% QUERY TIME" and "+40% BUSINESS DATA COVERAGE" use Unicode minus (`−`) and plus signs to signal *direction of impact*. Better than vanity numbers (3.96 GPA, 96.5% accuracy) because they show *change* not just *value*.

4. **FIG. N caption convention** applied to non-figure elements — Mihir Chauhan's self-portrait is captioned "FIG. 1 — THE SYSTEM IN QUESTION". Academic-paper figure convention borrowed as a humor device.

5. **§ section sign + numbered sections** — Mihir Chauhan. `§ 01 OVERVIEW`, `§ 02 EXPERIENCE`. More typographically elegant than `// 01` (developer-coded) or `01.` (catalog). The § character signals "section reference" in academic/legal typography.

6. **Marquee of capability phrases as section divider** — Mihir Chauhan. Between hero and overview, a scrolling marquee of 7 uppercase phrases (LLM EVALUATION / MULTI-AGENT SYSTEMS / RAG PIPELINES / MLOPS / AWS · ECS FARGATE / PROMPT ENGINEERING / SHIPS TO PRODUCTION). Functions as a pacing device and a recap of capability surface area.

7. **Accent-color period as H2 punctuation** — Decoopman. `<h2>Mon parcours<span style="color:var(--color-accent)">.</span></h2>`. Single character in accent color as terminal punctuation. Applied consistently across all 5 H2s. One-character branding device.

8. **Recommandations section with named endorsers + roles + dates + relationship** — Decoopman. First corpus instance of formal recommendations as a dedicated section. Each recommendation card shows: name, role/title, recommendation text, date, relationship to recommender ("Jocelyne était la responsable directe de Nicolas"). LinkedIn-imported pattern, but curated.

9. **Floating pill nav** (rounded-full, centered-top, backdrop-blur) — Sudip. First corpus instance of pill-shaped floating nav. Less aggressive than a sidebar, more modern than a top bar. Width responsively scales (70% → 65%).

10. **Duplicate-text skew+translate hover** on nav links — Sudip. Each nav link has two text copies inside `<span class="relative inline-flex overflow-hidden">`. On hover, the visible copy translates up 110% + skews 12deg, while the hidden copy translates up from below + un-skews. A Y-axis flip with skew — original micro-interaction.

11. **Skills with category sub-labels** — Sudip. "React.js / JavaScript Library", "MongoDB / NoSQL Database", "GIT / Version Control", "WordPress / CMS". Each tech is annotated with its category — turns skills list into a categorized glossary. Better than logo soup, less rigid than prose categorization.

12. **Value-proposition-as-H1** (not name-as-H1) — Sudip. "I craft purposeful experiences that ignite creativity and spark engagement." Positions the dev as a craftsperson, not a name. Name appears as eyebrow ("Hey, I am Sudip!"). Alternative to the dominant name-as-H1 pattern.

13. **Open source contributions as a section with repo metrics** — Mitul Savani. First corpus instance of OSS contribution history as primary content. Each entry shows: repo name (facebook/react-native), contribution description, and repo metrics (99K stars, 21.4K forks). Reads as "real engineering impact at scale."

14. **Icon + tiny-text sidebar** (Abdullah variant of icon-only sidebar) — Abdullah. Solves the discoverability problem of icon-only nav without abandoning the no-scroll app-shell. Tiny `text-xs` label under each icon. Refined rule: **icon-only sidebar works for ≤4 items; beyond that, add tiny labels.**

15. **Warm cream + brown + copper palette** — Abdullah. First corpus instance of a paper/parchment-feeling warm palette on a portfolio. `#EDE5D8` (cream) + `#2D1F1A` (brown) + `#B87333` (copper). Viable alternative to the tinted-light (peach/cream) family.

16. **Archivo 850 weight at 120px** — Mihir Chauhan. Extreme display weight, first corpus instance at this combination. Pushes the "ultralight display" rule (Batch 4) into a new register: ultraheavy display *also* works at extreme sizes.

17. **Domine serif H1** — Sudip. First corpus instance of this specific Google serif. Wide serifs, print-like feel. Adds to the serif-H1 family (Nico's Fraunces, Jeremiah's Instrument Serif, etc.).

18. **Magic-grid masonry** — Mitul. Lightweight vanilla JS masonry (`position: absolute; transform: translate()`) — alternative to CSS Grid masonry for card layouts.

19. **Self-aware "Old Portfolio" link as a project entry** — Abdullah. Lists his previous cyberpunk-themed portfolio as a project. Self-aware, low-ego joke about aesthetic growth. Reinforces "meta-commentary as content" pattern.

### Updated answers to the open tensions

| Tension | Status after Batch 18 |
|---|---|
| **Scroll-driven section transitions** | **STILL UNSOLVED.** 0 in 90 portfolios. Batch 18 has scroll-snap (Decoopman) and scroll-progress-bar (Mihir), but neither is a "scroll-driven *section transition*" in the GSAP ScrollTrigger sense. The closest thing is Abdullah's no-body-scroll state-switching, which *eliminates* scroll rather than driving transitions through it. Carry to batch 19. |
| **Haptic-style mobile feedback** | **STILL UNSOLVED.** 0 in 90 portfolios. None of batch 18 mentions `navigator.vibrate`, `Vibration API`, or haptic-style micro-interactions. Carry to batch 19. |

### Cumulative-quality observations

- **Batch 18 strongest portfolio**: **Mihir Chauhan** — sustained "developer-as-product-spec-sheet" metaphor across hero (CLASS/TRAINING/MODALITIES/STATUS), experience (RUN-XX/COMPLETE), projects (P-XX), figure captions (FIG. 1), and section numbering (§ 01). 4.5/5 originality. The bench metrics with directional +/− prefixes is the best numeric-stats-block execution in the corpus.

- **Batch 18 most original move**: Mihir's "RUN-XX / RUNNING|COMPLETE" deployment metaphor for experience entries — reframes career history as a deployment log. Original application of CI/CD vocabulary to non-CI/CD content.

- **Batch 18 weakest portfolio**: **Mitul Savani** — 4 H1s, 0 H2, 0 H3, lowercase `<title>mitulsavani</title>`, last-updated 2023, pure white with no extreme type gesture, no nav at all. The OSS-contributions-as-section pattern is the only redeeming feature.

- **Anti-patterns to add to the master list**:
  - **4 H1s as section labels with period suffix** (Mitul) — destroys document outline. The lowercase-with-period aesthetic itself could be salvaged by applying it to H2 eyebrows instead.
  - **Pure white with mid-weight type (50px / 700 weight)** (Mitul) — confirms that pure white needs an *extreme* type gesture (ultralight OR ultraheavy) to read as premium.
  - **Last-updated 2023 copyright in 2026** (Mitul) — stale portfolios signal "I'm not actively maintaining my own brand."
  - **State-switching without URL change** (Abdullah) — can't deep-link to /projects or /experience. Bad for sharing.

### Carry-forward to Batch 19

- Watch for any portfolio that uses **ScrollTrigger / IntersectionObserver-driven section transitions** (background color shifts, layout morphs, content reflows tied to scroll position).
- Watch for any portfolio that uses **Vibration API / haptic-style micro-interactions** on mobile.
- The "developer-as-product" spec-sheet metaphor (Mihir) is strong — watch for variants in remaining portfolios.
- The "deployment metaphor for career history" (Mihir's RUN-XX) is original — watch for similar vocabulary mappings (e.g., commits-as-jobs, PRs-as-projects).
