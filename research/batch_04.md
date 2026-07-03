# Batch 04 — Portfolio Research Analysis

> **Task ID**: R1-B4 · **Agent**: general-purpose (portfolio researcher) · **Method**: agent-browser DOM extraction at 1440×900 + 28 screenshots
> **Portfolios analyzed**: 16. Fikri Rozan · 17. Electric Magic Factory · 18. Auroob Ahmad · 19. Barthélémy Pousset · 20. Zyon Tiangson
> **Carried forward from batches 1–3**: domain-native metaphor, two-font developer-coded feel, metadata-as-hero, hero-only home + linked subpages, warm-tinted light OR tinted-dark (avoid pure black/white), numbered projects `01 02 03`, frosted-glass sticky header, single accent on role phrase, live date stamp, view transitions, case study template, footer as design surface. Anti-patterns: default `document.title`, dumping every GitHub repo, OS-default H1 fonts, broken third-party widgets, Google AdSense, 9+ social links, H1-replaced-by-`<p>`, template placeholders, multiple Canvas2D backgrounds, empty "Coming Soon" subpages. Open tensions: commitment-vs-kitchen-sink, 3D scope, **code-as-interface still unsolved**.
> **Note on method**: agent-browser screenshots are saved to `/home/z/my-project/research/screenshots/batch_04/` (28 PNGs) but cannot be visually inspected by the agent — findings below rely on DOM extraction, computed styles, console logs, and `curl` verification. Where visual confirmation would change a finding, it is flagged.

---

## 16. Fikri Rozan — https://fikrirozan.vercel.app

- **Reachable**: yes (HTTP 200, Vercel/Next.js)
- **First impression**: A warm-toned dark portfolio on a Vite/Next template, with a Canvas2D background and the page title literally `personal_website` — a missed-open-tab giveaway.
- **Visual hierarchy**: 9 H1s spread across the page (anti-pattern); section H1s render at 60px / weight 800 (Portfolio section H1 is transparent text — likely a CSS text-stroke trick that failed). Hero H1 uses weight 400 — soft, not confident.
- **Layout composition**: Two-column hero (text + portrait image), then single-column sections: About → Skills → Portfolio → Experience → Testimonials → Contact.
- **Typography**: Plus Jakarta Sans throughout (one family, no mono companion — loses the developer-coded two-font feel). Hero 60px / 400; section H1s 60px / 800. Body 16–18px.
- **Color palette**: Body `oklch(1 0 0)` (pure white) but every section uses `bg-ink` dark tinted backgrounds with `text-cream-light` `rgb(255, 247, 228)`. Single warm accent `#d9c8bf` (clay-rose / peach-milk) applied to the role phrase "Fikri Rozan" and "Frontend Specialist" in hero — confirms batches 1–3 single-accent-on-role-phrase pattern. Hover states use `focus:bg-peach-milk` and `focus:ring-clay-rose`.
- **Spacing**: Balanced — `py-20` hero, `grid md:grid-cols-2 gap-10`, generous max-width.
- **Hero section**: Two-column grid. Left: greeting + name + role + typewriter cursor (`h-5 w-[1px] bg-foreground` — `opacity: 0.3501` confirms a blinking cursor) + subtitle "Crafting web experiences That users love & scale with growth." Right: portrait photo. Background: Canvas2D (1440×1024) overlaid with `bg-ink/60 backdrop-blur-sm` — first batch-4 portfolio to use backdrop-blur over canvas.
- **Navigation**: Desktop nav hidden on mobile (`hidden lg:block fixed top-8 right-12 z-50`); mobile uses `lg:hidden ... bg-[var(--color-ink)]/90 backdrop-blur` — frosted-glass sticky header pattern from batch 2.
- **Section ordering**: hero → about → skills → portfolio → experience → testimonials → contact → (no footer).
- **Scroll experience**: No scroll-triggered animations detected (0 keyframes). Sections simply appear.
- **Animations & motion**: 0 custom keyframes. Only the typewriter cursor blinks (CSS opacity animation, not a keyframe). Restraint by default — but lacks a signature move.
- **Hover interactions**: Contact form inputs use floating labels (`peer-placeholder-shown:top-2`) and accent-color focus ring.
- **Background effects**: Single Canvas2D behind hero (size-full, 2D context). Plain backgrounds elsewhere.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind `md:` breakpoints used throughout; mobile nav drawer present.
- **Performance perception**: Light (no heavy assets, no WebGL, only 18 imgs and 17 SVGs).
- **Emotional feeling**: Warm-but-unfinished; the clay-rose palette reads inviting, but the template-default title and 9 H1s break the spell.
- **Originality**: 2/5 — competent Tailwind template; warm-tinted palette is the only memorable move.
- **What works**:
  - Warm clay-rose/peach-milk accent on tinted dark sections — palette discipline.
  - Frosted-glass mobile sticky header.
  - Multi-link project cards (year, category, achievements bullets, tech tags).
- **What does NOT work**:
  - `document.title` is the Vite default `"personal_website"` — anti-pattern from batch 1.
  - 9 H1 tags on one page — multiple-H1 anti-pattern from batch 3 (Gunjan had 4).
  - Portfolio section H1 has `color: rgba(0,0,0,0)` (transparent) — likely a broken text-stroke effect.
  - No footer at all — every section ends on contact form with no closing surface.
  - Single testimonial in Indonesian ("Saya dan Rozan pernah satu tim…") — reads as filler.
- **Notable patterns to consider**: warm clay-rose/peach-milk accent on tinted-dark (palette candidate); Canvas2D + backdrop-blur overlay (cheap "depth" layer); project card template with year + category + achievements bullets + tech tags.

---

## 17. Electric Magic Factory (Jesús Olano) — https://electricmagicfactory.com/en

- **Reachable**: yes (HTTP 200, Vercel/Vue 3). `/en` redirects to `/` (i18n detection); `/projects` and `/articles` subpages reachable. One transient 500 ("Error - Request ID: …") hit mid-session but `curl` and reload returned 200 — flaky hosting, not broken.
- **First impression**: Editorial-grade premium. A 109px ultralight H1 ("Hi! My name is Jesús Olano and I make webs to be seen.") with `<strong>` inline emphasis, vertical-text sidebar spelling "ELECTRIC MAGIC FACTORY" letter-by-letter, and a typography-settings panel hidden behind a settings icon. The strongest portfolio in batch 4 — and the strongest in the 20-portfolio corpus so far on the "code-as-interface" axis.
- **Visual hierarchy**: One H1 per page, semantically emphasized with `<strong>` (not `<span>`) for the role/key phrases — clean. The page uses a 12-column grid (`u-col-span-full`, `u-col-start-3 u-col-span-2`) with horizontal rules between sections (`u-border-b-1 u-border-gris-7`) — editorial newspaper grid.
- **Layout composition**: Two surface zones: (1) a fixed left vertical sidebar containing the ELECTRIC MAGIC FACTORY logo + vertical-text label + main nav (ABOUT ME / MY PROJECTS / ARTICLES) + anchor subnav (INTRO / BIO / MY EXPERIENCE / 2022-2025 / 2019-2022 / 2015-2022 / CONTACT ME); (2) a wide right content column with sectioned editorial flow.
- **Typography**: **Four font families** loaded: Soehne (premium German sans, primary H1), Adjusted HelveticaNeue/Helvetica/Arial/sans-serif (fallback chain), Inconsolata (mono, used for technical metadata), Caslon (serif, used in body), ElectricMagicIcons (icon font). H1: Soehne weight 200 at 109.656px (line-height 119.999px) — *ultralight + huge* is the signature. Body uses Caslon/Times New Roman fallback. This is the first 4-font system in the corpus; most use 1–2.
- **Color palette**: Body `rgb(255, 255, 255)` pure white (contradicts batch 2–3 "avoid pure white"); text `rgb(0, 0, 0)` pure black on body BUT H1 uses `rgb(26, 26, 26)` off-black. Single accent: `--vivid-violet-5` (`u-bg-vivid-violet-5`) on tech-stack pill backgrounds. CSS uses `--gris-0` through `--gris-80` grayscale tokens + `--vivid-violet-5`. Refines "avoid pure white" — pure white CAN work when paired with ultralight premium type, off-black H1, and a single saturated accent.
- **Spacing**: Generous, editorial. `u-mb-third`, `u-pb-fourth` — quarter/half spacing scale based on a modular type system.
- **Hero section**: Full-bleed editorial H1 spanning grid columns, with subhead "I'm a Frontend Developer who loves to build websites and apps. My current focus is on component libraries and design systems, web performance optimization and e-commerce." Three `<strong>` inline emphases in the H1 (Hi!, Jesús Olano, webs to be seen). No image, no canvas, no animation — typographic confidence.
- **Navigation**: Fixed left vertical sidebar with logo + main nav (3 routes: /, /projects, /articles) + anchor subnav for homepage sections. No top sticky header. Multi-page hybrid (homepage + /projects + /articles).
- **Section ordering**: intro → bio → experience (3 year-range blocks: 2022-2025, 2019-2022, 2015-2022) → contact → footer. 4 sections on homepage — restrained.
- **Scroll experience**: Smooth, no scroll-jacking. Year-range anchors in sidebar jump to experience blocks.
- **Animations & motion**: 1 keyframe (counted via DOM iteration; cross-origin sheets may hide more — the visible CSS contains `@layer transitions` with `.page-enter-active` / `.page-leave-active` / `.blur-enter-active` route-transition classes). **View Transitions API is in active use**: `view-transition-name: main` on `.l-main`, `view-transition-name: title-1` and `view-transition-name: title-2` on title elements — **shared-element transitions between routes**. This is the first designed page-transition pattern in the 20-portfolio corpus. Page enters with `filter: blur(2px); opacity: 0` → blur-out to full opacity (0.4s ease-out-quad on leave, 0.2s on enter).
- **Hover interactions**: Vivid-violet tech-stack pills with hover state. Settings icon (`.u-icon-setting`) hover transitions `u-text-gris-40 → u-text-gris-60`.
- **Background effects**: Plain white. No gradient, no grain, no particles.
- **3D elements**: no.
- **Responsiveness perception**: Mobile collapses the sidebar; `md:` breakpoints adjust grid spans.
- **Performance perception**: 14 fonts loaded (heavy!) but well-subset. 55 images (logos for tech stack + client projects). View Transitions API native — no JS transition library.
- **Emotional feeling**: Confident, editorial, mature. Feels like a design-systems engineer's portfolio should feel — the typography IS the exhibit.
- **Originality**: 5/5 — typography options panel + view transitions + ultralight 109px H1 + live local time + multi-language is the densest set of original patterns in the corpus.
- **What works**:
  - **Typography Options Panel** — clicking the settings icon reveals a live editor: Min Viewport (Width px + Font Size px + Type Scale dropdown with 12 named ratios from Minor Second 1.067 through Octave 2 + Custom), Max Viewport (same), Reset to Defaults. This is the first non-cosmetic "code-as-interface" pattern in the corpus: a frontend dev who specializes in design systems uses their portfolio as a LIVE DEMO of typographic engineering. The user can see how the page renders at any viewport with any type scale. **Resolves the open tension "code-as-interface still unsolved"** for the design-systems specialization.
  - **View Transitions API with shared elements** — `view-transition-name: main` + `title-1` + `title-2` means the main content and title elements persist visually across route changes. Page transition: blur(2px) + opacity 0 → focus + opacity 1. First designed page-transition pattern in the corpus. Confirms Ajvad's Astro view transitions from batch 3 generalize to Vue Router.
  - **Live local time + location in footer** — "A Coruña, Spain; 14:15 (UTC+01:00)". Verified live: re-extraction 9 minutes later showed "14:24" — actually counting. Improves on Ajvad's date stamp (batch 3) by combining local time + timezone + location in one footer line.
  - **Multi-language (EN/ES) toggle** — first i18n portfolio in the corpus.
  - **CV-style year-range timeline** — experience section uses year-range anchor IDs (`#year-start-2022`, `#year-start-2019`, `#year-start-2015`) that double as nav and section dividers.
- **What does NOT work**:
  - **`/projects` subpage has 0 H1s** — anti-pattern. Project names (REPÚBLICA MARDI GRAS, PICK STATSGAL, JIMMY GARAGE, NAIR JOSE, MANUEL EIRIS) are H2s but there is no H1 above them. Confirms SEO-title-as-H1 anti-pattern from batch 3 (Ghulam).
  - Pure black body text `rgb(0, 0, 0)` on pure white is the *one* deviation from the tinted palette; H1 escapes via off-black `rgb(26, 26, 26)`. Body copy would benefit from the same tint.
  - 14 fonts loaded is heavy — even subsetting, this is a performance cost.
  - One transient 500 mid-session (Request ID: 01KWKYY3CTMAEXCFP3CAVTNK3P) suggests flaky hosting — but `curl` confirmed 200 on retry.
- **Notable patterns to consider**: typography options panel (the answer to code-as-interface for design-systems specialization); view transitions API with shared-element names; live local time + timezone + location in footer; multi-language toggle; CV-style year-range anchors as nav; ultralight (weight 200) H1 at 109px; vertical-text logo sidebar; vivid-violet single accent on tech-stack pills; 4-font editorial system (sans + serif + mono + icon).

---

## 18. Auroob Ahmad — https://auroob.github.io/dev-port

- **Reachable**: yes (HTTP 200, GitHub Pages / React create-react-app).
- **First impression**: A photo of Islamabad as full-bleed background with name + role centered on top. Reads as a junior/beginner React portfolio — div-only DOM, no semantic HTML, multiple English typos, and an empty "My Technical Stack" section.
- **Visual hierarchy**: One H1 ("Auroob Ahmad") at 64px / weight 700 in Jost, with H5 used for the eyebrow ("Hi There! 👋🏼 I'm") and role ("Software Engineer") — **breaks heading hierarchy** (skips H2, H3, H4). 3 H2s for section titles, 7 H4s for project names, 2 H5s, 1 H6 — disorderly.
- **Layout composition**: Single-column, no nav. Background photo (Islamabad) full-bleed; semi-opaque content card on top.
- **Typography**: Body font is the OS-default stack `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif` — anti-pattern from batch 1 (Bhushan). H1 uses Jost — the only non-system font. Mixed system + Jost with no mono companion.
- **Color palette**: Body bg transparent, but `.App` div uses a full-bleed background image (`Islamabad-background.a0669f0b5bbe037c40ac.jpg`) — geographic context via photo, a pattern not seen in batches 1–3. Text color pure black `rgb(0, 0, 0)` on body; H1 color light `rgb(239, 237, 237)` — suggests dark-overlay on the photo behind. No accent color detected.
- **Spacing**: Cramped — content card with default padding; project list items tightly stacked.
- **Hero section**: Centered eyebrow (H5 "Hi There! 👋🏼 I'm"), H1 ("Auroob Ahmad"), role (H5 "Software Engineer"), 3 social icons (Github, Gmail, LinkedIn — all base64-encoded 32×32 PNGs).
- **Navigation**: none. Single-page scroll with no nav bar, no anchor links.
- **Section ordering**: intro → projects → My Technical Stack (EMPTY — section header only, no content follows) → about me → (no footer, no contact section). 3 H2s: "Projects I have worked on", "My Technical Stack", "About Me".
- **Scroll experience**: Default scroll, no animations (0 keyframes).
- **Animations & motion**: 0 keyframes. No motion at all.
- **Hover interactions**: None detected (no hover styles on project cards).
- **Background effects**: Full-bleed Islamabad photograph — only portfolio in batch 4 to use a real photo background.
- **3D elements**: no.
- **Responsiveness perception**: React CRA default; no obvious responsive issues but no `viewport` meta-breakpoint testing.
- **Performance perception**: Light — 0 canvas, 0 svg, 0 iframe, 0 video. 35 imgs (5 project illustrations at 250×250 PNGs + 3 base64 social icons + repeat instances).
- **Emotional feeling**: Junior, earnest, geographic — Islamabad photo is personal but layout doesn't carry the warmth.
- **Originality**: 1/5 — generic React CRA portfolio with one personal touch (Islamabad photo).
- **What works**:
  - Islamabad background photo — cheap geographic/personal signal, not seen in batches 1–3.
  - 7 projects listed with consistent card shape (name + 1-line description + "Skills Used:" list).
  - Resume PDF download works (200, 77KB, 1-page PDF).
- **What does NOT work**:
  - **Zero semantic HTML** — 0 `<header>`, 0 `<main>`, 0 `<nav>`, 0 `<section>`, 0 `<article>`, 0 `<footer>`, 0 `<aside>`. Entire DOM is 54 divs under `<div id="root"><div class="App">`. Worst semantic-HTML violation in the 20-portfolio corpus.
  - **No SEO meta tags** at all — no description, no og:title, no og:image, no twitter:card. Title is just `"Auroob Ahmad"`. Search-invisible.
  - **Empty "My Technical Stack" section** — H2 with no content between it and the next H2. Anti-pattern (empty section).
  - **Multiple English typos**: "Network Monitroring Tool" (Monitoring), "SaSS" (Sass/SASS), "SketcUp" (SketchUp), "Auguest 2020" (August), "acheivements" (achievements), "frontent" (frontend). Reads as careless.
  - H5 used for eyebrow + role (should be p or h2) — breaks heading hierarchy.
- **Notable patterns to consider**: real-photo geographic background (Islamabad) — cheap personal signal, but needs typography + layout commitment to work; project card shape (name + 1-line description + skills list) — minimalist pattern from a junior portfolio.

---

## 19. Barthélémy Pousset — https://barthelemypousset.com

- **Reachable**: yes (HTTP 200, Vercel/Next.js).
- **First impression**: A single-screen tabbed portfolio styled like a stack of orange sticky notes on lined notebook paper. Click About / Skills / Projects / Contact and the orange sticky note pulls over the page (literally — `@keyframes pull-over`) to become the full-page paper. The 🤡 emoji in the corner links to a YouTube rickroll. Most original motion in batch 4 — and the most broken semantic HTML (zero headings).
- **Visual hierarchy**: **Zero headings on the entire page** — 0 H1, 0 H2, 0 H3, 0 H4, 0 H5, 0 H6. The tab labels (About, Skills, Projects, Contact) are `<button>` elements; the section titles inside each tab ("Who am I?", "Skills and Education", "Projects and creations", "Contact Me") are plain text in divs. This is the most extreme heading-violation in the corpus (worse than Auroob, which had 1 H1).
- **Layout composition**: `body { overflow: hidden }` — **single-screen, no scroll**. The whole portfolio fits in `h-screen` (vh). A "Barth's Stuff" label sits skewed at -9° in the center; an orange sticky-note "card" is positioned absolute with `skew-x-3` rotations. Tabs across the top (About / Skills / Projects / Contact buttons); content reveals inside the lined-paper card when a tab is clicked.
- **Typography**: **Four font families loaded** via Next.js font modules: Geist (Vercel's sans, primary), Geist Mono (mono), Permanent Marker (Google handwriting font), Kalam (Google handwriting font). Permanent Marker + Kalam reinforce the notebook-paper aesthetic. Body font: Geist with Arial/Helvetica fallback.
- **Color palette**: Body `rgb(255, 255, 255)` pure white with `bg-sky-50` (sky-50 = `#f0f9ff` near-white blue) on the main section; dark mode `bg-stone-600`. Sticky-note cards: `bg-orange-200` (`#fed7aa` peach). Notebook paper: `bg-lined-paper` (custom texture). Text `rgb(23, 23, 23)` off-black. Submit button: `bg-blue-500` (vivid blue). Single saturated blue accent on the form submit button only.
- **Spacing**: Tight inside the card (`p-4 m-4 border-2 rounded-2xl border-stone-300`). The single-screen constraint forces density.
- **Hero section**: Tabs (About / Skills / Projects / Contact) + "Barth's Stuff" label skewed at -9° + 🤡 emoji centered + footer-line "Barthélémy POUSSET 2026 - LinkedIn - GitHub". The "hero" is really the *tab interface itself*.
- **Navigation**: Four tab buttons (About / Skills / Projects / Contact) across the top of the sticky-note card. Clicking triggers `@keyframes pull-over` (orange sticky note slides up, scales to 120% width, becomes the page) and renders the tab's content in-place. No URL change — pure client-side state.
- **Section ordering**: Tab content: About (presentation + work experience — 3 jobs: SwissLife mai 2024-apr 2025, Cleverconnect Jul 2019-apr 2024, Decathlon Nov 2017-Jun 2019) → Skills (Frontend/Backend/Mobile/Devops + Education with EQF levels) → Projects (6 projects: Murmure, Coins-App, Retrolove, Next Portfolio, Puzzle-Bricks, Personnal Server stack) → Contact (3 social links + form). All within one screen.
- **Scroll experience**: None — `overflow: hidden`. Body scrollHeight = viewport height (900px).
- **Animations & motion**: **3 purposeful keyframes** — `pull-over` (sticky note pulls over to become page: 0% z-index 20 translateY(0) → 50% z-index 20 translateY(-120%) → 100% z-index 100 width 120% height 100% left -10% translateY(0)), `put-back` (reverse), `pulse` (opacity 0.5 at 50%). The pull-over is the signature interaction — first tab-switch-as-physical-motion pattern in the corpus. Each pull-over/put-back is ~0.4s.
- **Hover interactions**: White/50 backdrop-blur rotated decorative tabs at the corners of the orange sticky note, with `transition-opacity duration-300 opacity-100` hover.
- **Background effects**: `bg-lined-paper` (notebook-paper texture, custom CSS background-image likely) + `bg-sky-50` base + `bg-orange-200` sticky notes with `shadow-lg`.
- **3D elements**: no.
- **Responsiveness perception**: `text-[3vw]` for tab labels (fluid type), `[@media(max-height:...)]` query — at least one viewport-aware media query.
- **Performance perception**: Light (2 imgs, 0 svg, 0 canvas, 0 iframe). Geist + Permanent Marker + Kalam font loads (3 Next.js font modules).
- **Emotional feeling**: Playful, hand-made, French — the "I built it with my own hands :)" copy in About reinforces this.
- **Originality**: 4/5 — sticky-note pull-over tab transition is the most original motion in batch 4. Loses a point for the zero-headings semantic violation.
- **What works**:
  - **Pull-over keyframe** — orange sticky note slides up and becomes the page. Tab switching as physical motion. Unique signature interaction.
  - **Notebook-paper + sticky-note aesthetic** with Geist + Permanent Marker + Kalam font pairing — the typography commits to the metaphor.
  - **6 substantial projects with multi-link cards** — Murmure alone has 4 links (live demo + frontend GitHub + backend GitHub + analysis article). Project cards include name + description + "Skills Used:" tag list.
  - **EQF levels on Education** (European Qualifications Framework level 5/6/7) — first education section with formal EU qualification levels, regionally native signal.
  - **🤡 rickroll easter egg** — playful chrome that fits the personality without breaking the design.
- **What does NOT work**:
  - **Zero headings** — 0 H1/H2/H3/H4/H5/H6 anywhere on the page. Section titles ("Who am I?", "Projects and creations", etc.) are plain text in divs. Worst heading hierarchy in the 20-portfolio corpus. Screen readers have no document outline.
  - **Meta description has a typo**: "Find here all everything about Barthélémy POUSSET's professional life and projects" — "all everything" is redundant.
  - **Multiple English typos** in body content: "Enginering" (Engineering), "Developpement" ×3 (Development), "Developement", "assitance" (assistance), "Personnal" (Personal), "scroling" (scrolling). French developer writing in English without proofreading.
  - **Mixed French month names in an English portfolio**: "mai 2024" (mai = May) in work experience. Either commit to French or translate.
  - `body { overflow: hidden }` blocks scroll-to-expand on mobile, and the single-screen constraint forces dense content into a small card.
- **Notable patterns to consider**: pull-over keyframe for tab switching (signature motion candidate); notebook-paper texture as conceptual metaphor for a developer who "builds with his own hands"; 4-font system (sans + mono + 2 handwriting) committed to a notebook aesthetic; multi-link project cards (demo + frontend + backend + article); EQF levels on Education (regionally native credential signal); single-screen + tabbed + body overflow:hidden (extends Jeremiah batch 1 hero-only pattern to multi-tab single-screen).

---

## 20. Zyon Tiangson — https://zyon-portfolio.vercel.app

- **Reachable**: yes (HTTP 200, Vercel/Vite + React).
- **First impression**: A Steam-inspired portfolio — pure black bg, bluish-gray text, Motiva Sans (the actual Steam font), achievement rarity tiers (COMMON / RARE / EPIC / LEGENDARY) applied to real certifications, and a "GITHUB REPLAY / YOUR YEAR IN CODE" section modeled on Steam Year-in-Review. Strongest conceptual metaphor in batch 4 — but every GitHub API call fails on load, leaving "Failed to load featured projects", "NaN%", and all-zero stats visible to the user.
- **Visual hierarchy**: One H1 ("Victor Zyon Tiangson") at only 26px / weight 200 — *ultralight + small*; reads as a Steam profile name, not a hero. 0 H2s — section titles (PROFILE, PROJECTS, GITHUB REPLAY, ACHIEVEMENT SHOWCASE, TECHNICAL SKILLS, PERSONAL HOBBIES & INTERESTS, GITHUB STATS, RECENT ACTIVITY, CONNECT WITH ME) are likely styled divs/spans, not headings.
- **Layout composition**: Single-page scroll with 11 sections, each styled as a Steam profile card (`.card`, `.showcase-card`, `.profile-overview`, `.github-replay`, `.achievements-showcase`, `.tech-stack`, `.hobbies-showcase`, `.stats-card`, `.activity-feed`, `.connections-card`). Header has Steam-style chrome: "INFO / 🏆 / 1/19" (counter).
- **Typography**: **Motiva Sans** — the actual Steam font (Valve's in-house typeface, embedded via `@font-face`). Single-family system. H1 weight 200, body text weight default. No mono companion — misses the developer-coded two-font pattern.
- **Color palette**: Body bg pure black `rgb(0, 0, 0)` (Steam dark); text `rgb(199, 213, 224)` (Steam bluish-gray, the exact Steam profile body color). Section cards likely use Steam's dark gradient surfaces. Achievement rarity tiers each have a unique color treatment (COMMON = gray, RARE = blue, EPIC = purple, LEGENDARY = gold/orange) — driven by keyframes `legendaryGlow`, `legendaryGlowPulse`, `rarityPulse`, `ringGlow`, `ringShimmer`. Rainbow effects (`rainbowRotate`, `rainbowText`, `rainbow-shift`) for special items.
- **Spacing**: Card-based modular layout; each `.card` is a self-contained Steam profile section.
- **Hero section**: Profile section (Steam profile header): name + role (".NET Developer | Development Team Lead | Web Developer | Scrum Master") + location ("Quezon City, Philippines") + bio ("Just your average developer from the Philippines -- currently leading a development team and working primarily with the .NET stack. I've also worn the Scrum Master hat, backed by a few certifications to prove it.").
- **Navigation**: Header with PROFILE / PROJECTS / CONTACT / SKILLS anchor links (single-page). No top sticky nav observed beyond the Steam-style header.
- **Section ordering**: profile → projects → github-replay → achievements-showcase → skills → hobbies-showcase → stats-card → activity-feed → connections-card → footer. 11 sections (matches Whilmar batch 3's 12 sections in "every-feature" territory).
- **Scroll experience**: Default browser scroll through 11 sections. No scroll-driven transitions.
- **Animations & motion**: **33 keyframes** — highest in batch 4 (and the 20-portfolio corpus). Names reveal the Steam-themed motion vocabulary: `badgePulse`, `dropdownSlideIn`, `slideIn`, `legendaryGlow`, `shine`, `rarityPulse`, `statusPulse`, `spin`, `float`, `ringGlow`, `ringShimmer`, `rainbowRotate`, `numberGlow`, `rainbowText`, `pulse`, `glowCosmic`, `counterPop`, `slideInRight`, `legendaryGlowPulse`, `shine`, `iconPop`, `progressFill`, `shimmer`, `rainbow-shift`, `slideUp`, `slideInFromRight`, `fadeIn`, `slideUp`, `doorSwing`, `messageSlide`, `steamPulse`, `highlightPulse`, `highlightPulseCosmic`. Refines the commitment-vs-kitchen-sink tension: 33 keyframes is "kitchen-sink" by count, but every keyframe thematically serves the Steam metaphor — so the *commitment* is intact even though the *count* is excessive. The motion is unified by Steam's visual vocabulary (pulses, glows, rarity rings, shimmer).
- **Hover interactions**: Achievement cards likely have rarity-glow hovers (per `legendaryGlow` / `rarityPulse` keyframes); specific hover styles not extracted.
- **Background effects**: Pure black with Steam dark-gradient surfaces per card. No WebGL, no Canvas2D, no particles.
- **3D elements**: no — but the developer lists Three.js + React Three Fiber in skills (claims 3D expertise not deployed on the portfolio itself).
- **Responsiveness perception**: Tailwind responsive classes likely; Steam profile cards stack on mobile.
- **Performance perception**: Light (0 canvas, 6 imgs, 23 svg, 1 iframe — the iframe is the embedded resume PDF). 33 keyframes is a lot of CSS but cheap to run.
- **Emotional feeling**: Gamer-maximalist, themed, slightly broken — the Steam theme is unmistakable but the broken GitHub integrations undercut the polish.
- **Originality**: 4/5 — Steam metaphor + achievement rarity tiers + GitHub Replay (Year-in-Review) is the most conceptually original in batch 4. Loses a point for the broken execution.
- **What works**:
  - **Domain-native conceptual metaphor extended** — Steam theme for a gamer developer. Joins Triet's Unix shell (batch 1) and Whilmar's architectural-engineering (batch 3) — proves metaphor generalizes to any domain the developer identifies with. Uses the actual Steam font (Motiva Sans), the actual Steam colors, and the actual Steam UI patterns (profile / achievements / activity feed / connections).
  - **Steam achievement rarity tiers applied to real credentials** — Professional Scrum Master™ I = EPIC (Scrum.org, 2023); Outstanding Thesis Award = LEGENDARY (First Place, 2017); 8+ Years of Experience = RARE; Civil Service Professional = COMMON. Adapts game-design metadata to a resume — first time credentials have been gamified in the corpus.
  - **Embedded resume PDF as iframe** (`/resume.pdf#view=FitH`) — inline PDF preview in a Steam-trailer-style frame rather than a download link. First inline-resume-preview pattern in the corpus.
  - **"Currently playing" microcopy in Hobbies** — "Casual Gamer / CURRENTLY ACTIVE / Currently playing Hollow Knight: Silksong -- Digimon Story: Time Stranger is next on my backlog" — first hobbies section with active-status microcopy. Adapts Steam's "currently playing" status to personal hobbies.
  - **Title is descriptive with role + location**: "Victor Zyon Tiangson | .NET Developer, Scrum Master & Development Team Lead | Philippines" — best page title in batch 4. Includes role(s) + country.
  - **Comprehensive 5-category skills taxonomy**: Languages & Frameworks (C#, .NET, ASP.NET MVC, Web Forms, Entity Framework, LINQ, ADO.NET, Python, JavaScript, TypeScript), Front-end & UI (HTML5, CSS3, Tailwind, Bootstrap, React, Blazor, Three.js, React Three Fiber, Framer Motion), Database (MS SQL Server, Supabase, Firebase), Tools & Platforms (Visual Studio, VS Code, Git, Azure DevOps, SSMS, IIS, Vercel, Vite, DocFX, Selenium), Practices (Agile Scrum, CI/CD, Code Reviews, Documentation).
- **What does NOT work**:
  - **Entire GitHub API integration is broken** — 10+ console errors on load: "Error fetching featured project: Failed to fetch repo", "Error fetching repositories: Failed to fetch repos", "Error fetching user events: Failed to fetch events", "Error fetching user profile: Failed to fetch user". The featured-projects section renders "Failed to load featured projects" to the user; GitHub Stats card shows "Total Projects 0 / Total Stars 0 / Total Forks 0 / Active Projects NaN%"; Activity Feed shows "No recent activity"; GitHub Replay shows "0 TOTAL COMMITS / 0 LONGEST STREAK / 0 DAYS CODED". Confirms batch 1 anti-pattern: shipping broken third-party widgets without fallbacks (Bhushan's GitHub-stats 503). Same anti-pattern, more severe — the entire portfolio's "live data" surface is dead.
  - **`NaN%` rendered as visible text** — `Active Projects NaN%` shows a JavaScript NaN value leaking to the DOM. Anti-pattern: number formatting not sanitized.
  - **0 H2s on the entire page** — section titles (PROFILE, PROJECTS, GITHUB REPLAY, ACHIEVEMENT SHOWCASE, etc.) are not headings. Only 1 H1 (the name). Document outline broken.
  - **H1 is only 26px** — well below the 48–76px confident range identified in batches 1–3. The ultralight weight 200 makes it readable, but 26px reads as a Steam profile name rather than a hero.
  - **11 sections tips into "every-feature" syndrome** — matches Whilmar batch 3's 12 sections. Skills + Hobbies + Stats + Activity + Connections could be consolidated.
  - Three.js + React Three Fiber claimed in skills but no 3D deployed on the portfolio itself — resume says one thing, portfolio shows another.
- **Notable patterns to consider**: Steam-inspired domain-native metaphor (extends Triet/Whilmar); achievement rarity tiers (COMMON/RARE/EPIC/LEGENDARY) applied to real credentials (gamified credentials); embedded resume PDF as iframe with `#view=FitH` (inline preview); "Currently playing" microcopy in Hobbies (Steam status adapted to personal life); 5-category skills taxonomy (Languages / Frontend / Database / Tools / Practices); descriptive title with role + country; Motiva Sans as domain-native font choice. **Anti-pattern warning**: never ship a live GitHub-API integration without a static fallback cached at build time.

---

## Batch 4 Synthesis

### Patterns that REINFORCE batches 1–3

- **Domain-native conceptual metaphor generalizes further**: Zyon's Steam theme joins Triet's Unix shell (B1) and Whilmar's architectural-engineering (B3). Pattern now confirmed across 3 batches: when the portfolio's content architecture borrows a domain the developer identifies with (DevOps shell, architecture, gaming), it signals "I think in this medium" instantly. **Adopt-when-domain-fits** — and the domain need not be the day-job domain (Zyon is a .NET dev by day, gamer by passion).
- **`document.title` default still recurs**: Fikri Rozan's title is the Vite default `"personal_website"` — same anti-pattern category as Krishnanand's "Vite + React" (B1).
- **Multiple H1s anti-pattern escalates**: Fikri has 9 H1s (vs Gunjan's 4 in B3). Barthélémy has 0 H1s (worst heading hierarchy in the corpus — worse than Jayed's H1-replaced-by-`<p>` in B2). Auroob skips H2/H3/H4 and uses H5 for eyebrow+role. Zyon has only 1 H1 + 0 H2s (section titles aren't headings). Heading hygiene is the most-violated semantic rule across 20 portfolios.
- **Shipping broken third-party widgets without fallbacks recurs, severely**: Zyon's entire GitHub API integration fails on load — 10+ console errors, "Failed to load featured projects" visible, "NaN%" rendered, all-zero stats. Same anti-pattern as Bhushan's GitHub-stats 503 (B1), but more severe: the entire live-data surface is dead. **Hard rule for our portfolio**: never ship a client-side GitHub fetch without a build-time-cached static fallback.
- **Restraint-vs-richness is commitment-vs-kitchen-sink, confirmed**: EMF (1 keyframe) and Zyon (33 keyframes) both commit to a register (editorial premium vs Steam maximalist) — both feel intentional. Fikri (0 keyframes) is restraint-by-default, not commitment. Barthélémy (3 keyframes) commits to notebook-card-flip. Auroob (0 keyframes) is empty, not restrained. The differentiator: does every motion serve the metaphor?
- **Warm-tinted palette recurs**: Fikri's clay-rose `#d9c8bf` / peach-milk / cream-light on `bg-ink` dark; EMF's vivid-violet on white. Both confirm the single-accent-on-role-phrase pattern from batches 1–3.
- **Single-screen hero-only portfolio recurs**: Barthélémy uses `body { overflow: hidden }` with h-screen + tab switching — extends Jeremiah's hero-only brand statement (B1) to a multi-tab single-screen.
- **Multi-page hybrid validated**: EMF has homepage + /projects + /articles subpages with proper per-page titles ("Frontend development — Electric Magic Factory", "My work — Electric Magic Factory"). Confirms Nico (B2) and Ajvad/Ghulam (B3).
- **Single accent on role phrase only**: Fikri applies `#d9c8bf` only to "Fikri Rozan" and "Frontend Specialist"; EMF applies vivid-violet only to tech-stack pills. Confirms batches 1–3.
- **Frosted-glass sticky header**: Fikri's mobile nav uses `bg-[var(--color-ink)]/90 backdrop-blur`. Confirms batch 2.

### Patterns that CONTRADICT or REFINE earlier findings

- **Pure white CAN work** — EMF uses pure white body `rgb(255, 255, 255)` paired with Soehne weight 200 at 109px, off-black H1 `rgb(26, 26, 26)`, and a single vivid-violet accent. Refines B2–B3 finding "avoid pure white". The real rule: pure white + pure black + system font is what fails (Auroob). Pure white + off-black + premium type + single accent is premium (EMF). Tinted-light is still *safer* for most cases, but pure white is no longer an automatic disqualifier when paired with editorial typography.
- **H1 size is a function of weight, not just px**: EMF H1 = 109px weight 200 (ultralight + huge = confident). Zyon H1 = 26px weight 200 (ultralight + small = Steam profile name, intentional). Fikri H1 = 60px weight 400 (regular + medium = soft, less confident). Barthélémy has 0 H1. Gunjan (B3) was 36px Bangers (display + small = wrong). Refines the "48–76px confident range" rule from B3: **weight 200–300 ultralight lets you break the size rule in either direction**; bold + small is the only failure mode.
- **Hero copy can be a full sentence with inline emphasis**: EMF "Hi! My name is Jesús Olano and I make webs to be seen." uses `<strong>` inline for "Hi!", "Jesús Olano", and "webs to be seen" — semantic, no spans, no per-word styling. Refines Jeremiah's brand-statement pattern (B1): the hero need not be 1–3 words; a full sentence with semantic emphasis works if every emphasized phrase carries weight.
- **33 keyframes can be justified if thematically unified**: Zyon's 33 keyframes (badgePulse, legendaryGlow, rarityPulse, ringGlow, ringShimmer, steamPulse, highlightPulseCosmic, etc.) all serve the Steam metaphor — every motion has a Steam-UI referent. Refines B3's "0–2 functional keyframes is the sweet spot": that's true for *non-themed* portfolios; *themed* portfolios can scale keyframes if every motion reinforces the metaphor. The motion is unified by the Steam visual vocabulary.
- **Title style refined**: "Victor Zyon Tiangson | .NET Developer, Scrum Master & Development Team Lead | Philippines" (Zyon) is the best page title in batch 4 — name + role(s) + country. Confirms B3's "Name — Role" sweet spot but extends it: when the developer has multiple roles + a country worth signaling, the title can carry them all without becoming a CV line (unlike Whilmar's "Whilmar Bitoco — Web Developer & Visual Artist" + "V2.0.26_STABLE" in footer).

### New patterns UNIQUE to batch 4

1. **Typography Options Panel** (EMF) — clicking a settings icon reveals a live editor: Min Viewport (Width px + Font Size px + Type Scale dropdown with 12 named ratios from Minor Second 1.067 through Octave 2 + Custom), Max Viewport (same), Reset to Defaults. The user can see how the page renders at any viewport with any type scale. **This is the first non-cosmetic "code-as-interface" pattern in the corpus** — a frontend dev who specializes in design systems uses their portfolio as a LIVE DEMO of typographic engineering. The typography IS the exhibit.
2. **View Transitions API with shared-element transitions** (EMF) — `view-transition-name: main` + `title-1` + `title-2` means the main content and title elements persist visually across route changes. Page transition: `filter: blur(2px); opacity: 0` → focus + opacity 1 (0.4s ease-out-quad on leave, 0.2s on enter). First *designed page-transition pattern* in the 20-portfolio corpus. Vue Router page transitions + View Transitions API for shared elements. Confirms and extends Ajvad's Astro view transitions (B3).
3. **Live local time + timezone + location in footer** (EMF) — "A Coruña, Spain; 14:15 (UTC+01:00)". Verified live (9 minutes elapsed during analysis → "14:24"). Improves on Ajvad's date stamp (B3) by combining local time + timezone + location in one footer line. Cheapest "site is alive" + geographic signal combined.
4. **Multi-language toggle (i18n)** (EMF) — EN/ES toggle in footer. First portfolio in the corpus with explicit language switching.
5. **Steam achievement rarity tiers applied to real credentials** (Zyon) — Professional Scrum Master™ I = EPIC; Outstanding Thesis Award = LEGENDARY; 8+ Years of Experience = RARE; Civil Service Professional = COMMON. Adapts game-design metadata to a resume. First gamified-credentials pattern.
6. **Embedded resume PDF as iframe with `#view=FitH`** (Zyon) — inline PDF preview rather than download link. First inline-resume-preview pattern in the corpus.
7. **Pull-over keyframe for tab switching** (Barthélémy) — `@keyframes pull-over` slides an orange sticky note up (translateY -120%) then expands it to 120% width / 100% height to become the page. Tab switching as physical motion. First tab-switch-as-physical-motion pattern. Paired with `put-back` (reverse) and `pulse` (3 keyframes total).
8. **Single-screen + tabbed + body overflow:hidden** (Barthélémy) — extends Jeremiah's hero-only brand statement (B1) to multi-tab single-screen. Body scrollHeight = viewport height; tabs reveal content in-place via pull-over.
9. **Notebook-paper + sticky-note aesthetic with 4-font system** (Barthélémy) — `bg-lined-paper` (notebook texture) + `bg-orange-200` (sticky notes) + Geist + Geist Mono + Permanent Marker + Kalam (2 handwriting fonts). First 4-font system committed to a paper metaphor.
10. **Multi-link project cards** (Barthélémy, Fikri) — Murmure (Barthélémy) has 4 links per card: live demo + frontend GitHub + backend GitHub + analysis article. Confirms and extends Ghulam's "Live Preview" + "Read Article" dual-link (B3). For substantial projects, 3–4 links per card (demo, source, writeup) reads as senior.
11. **EQF levels on Education** (Barthélémy) — European Qualifications Framework level 5/6/7 attached to each degree. First education section with formal EU qualification levels — regionally native credential signal.
12. **Geographic context via background photo** (Auroob) — Islamabad background photo as full-bleed bg-image. First real-photo geographic background in the corpus. (Didn't work for Auroob because layout/typography didn't commit, but the *pattern* is interesting.)
13. **"Currently playing" microcopy in Hobbies** (Zyon) — "Currently playing Hollow Knight: Silksong -- Digimon Story: Time Stranger is next on my backlog". First hobbies section with active-status microcopy. Adapts Steam's "currently playing" status to personal life.
14. **CV-style year-range anchors as nav** (EMF) — `#year-start-2022`, `#year-start-2019`, `#year-start-2015` anchor IDs double as nav and section dividers. First year-range-as-nav pattern.
15. **Vertical-text logo sidebar** (EMF) — "ELECTRIC MAGIC FACTORY" letter-by-letter vertical down the left edge. First vertical-text sidebar in the corpus.
16. **🤡 rickroll easter egg** (Barthélémy) — playful chrome linking the 🤡 emoji to a YouTube rickroll. First deliberate easter egg in the corpus.

### Updated answers to the open tensions

(a) **Code-as-interface — PARTIALLY SOLVED**. EMF's Typography Options Panel is the first non-cosmetic code-as-interface pattern in the corpus. The portfolio IS a live demo of typographic engineering — when the developer's domain IS interface engineering (design systems, type scales, component libraries), the portfolio can BE the exhibit. The user manipulates real CSS variables (`--font-size`, `--type-scale`) and sees the page re-render. **Generalizes**: code-as-interface works when (1) the developer's specialization is interface engineering AND (2) the controls manipulate real, visible design tokens (not cosmetic toggles). For non-design-systems devs, Zyon's metaphor-as-content (Steam theme applied to credentials, achievements, activity) is the alternative answer — the metaphor IS the exhibit, even if no code is literally executed.

(b) **Restraint-vs-richness = commitment-vs-kitchen-sink — CONFIRMED**. EMF (1 keyframe) and Zyon (33 keyframes) both feel intentional because both commit to a register. Fikri (0 keyframes) and Auroob (0 keyframes) feel unintentional because they're empty, not restrained. The differentiator: every motion must serve the metaphor. **Adopt**: commit to a register; cut anything that doesn't serve it.

(c) **Light vs dark — REFINED**. Pure white CAN work when paired with ultralight premium type (EMF). Tinted-dark (Fikri's `bg-ink`) and tinted-light (Barthélémy's `bg-sky-50`) both viable. Pure black (Zyon) works for Steam metaphor specifically. The real failure mode is pure white + pure black + system font (Auroob) — contrast + type + palette all default.

(d) **3D — still absent across 20 portfolios**. Three.js claimed in skills (Zyon) but not deployed. Whilmar's WebGL2 particle field (B3) remains the only 3D-adjacent element. Pattern holds: tasteful when scoped to one surface, but no one in the corpus has shipped a real 3D scene.

(e) **Custom cursor — STILL ABSENT across 20 portfolios**. Multiple false positives (`u-cursor-pointer`, `cursor-pointer`, `cursor-not-allowed` Tailwind utilities) but no actual custom cursor element. Verdict: custom cursors remain an unclaimed pattern. Could be a differentiator if scoped to one surface (e.g., custom cursor only on the hero).

(f) **Scroll-driven section transitions — STILL ABSENT**. No portfolio uses scroll-driven animations tied to section transitions. EMF's year-range anchor jumps are the closest (instant jump, not driven).

(g) **Page transitions — ANSWERED**. EMF uses View Transitions API with shared-element names (`view-transition-name: main` + `title-1` + `title-2`) for route changes — first designed page-transition pattern in the corpus. Vue Router `.page-enter-active` / `.page-leave-active` with `filter: blur(2px); opacity: 0` blur-in/out. Confirms and extends Ajvad's Astro view transitions (B3) to a different framework (Vue). **Adopt**: View Transitions API with named shared elements for multi-page hybrid.

(h) **Hero motion that orients — STILL ABSENT**. First motion on all 5 batch-4 portfolios is either none (restraint: EMF, Barthélémy) or decorative (Fikri's Canvas2D backdrop-blur, Zyon's badge pulses). No portfolio uses hero motion to *orient* the user (e.g., a transition that reveals the hero's structure). Open question persists.

(i) **Project case study depth — what makes a case study feel "premium"**. Across batches 1–4, premium case studies have: (1) year + category + min-read (Ghulam B3); (2) breadcrumb + ToC + related articles (Ghulam B3); (3) multi-link cards: demo + source + writeup (Barthélémy); (4) "Key Achievements" bulleted list (Fikri); (5) tech-stack tags as pills (EMF, Fikri); (6) live client URLs (EMF). **Synthesis**: premium = breadcrumb + date + min-read + tech-stack pills + multi-link + Key Achievements + (optional) ToC + related articles. None of the 20 portfolios has *all* of these.

(j) **Microcopy — STANDOUTS**. EMF's "I make webs to be seen." (5-word hero). Barthélémy's "I built it with my own hands :)" (about). Zyon's "Currently playing Hollow Knight: Silksong -- Digimon Story: Time Stranger is next on my backlog" (hobbies). Zyon's "Just your average developer from the Philippines -- currently leading a development team and working primarily with the .NET stack. I've also worn the Scrum Master hat, backed by a few certifications to prove it." (bio — self-deprecating but specific). **Pattern**: microcopy that works is specific, slightly self-deprecating, and names a real artifact (game, tech, side project). Generic "passionate developer" copy fails.

(k) **Sound — STILL ABSENT** across 20 portfolios. Zyon's "Retrolove" project claims a "sick soundtrack" but the portfolio itself is silent. Sound remains an unclaimed pattern.

---

## Carry-forward for batch 5

**Highest-priority patterns to verify or refute in batch 5**:
- Does any portfolio ship a real 3D scene (Three.js, R3F, shader)? Whilmar's WebGL2 particle field remains the lone example.
- Does any portfolio use a custom cursor scoped to one surface?
- Does any portfolio use scroll-driven section transitions (CSS `animation-timeline: scroll()` or `ScrollTrigger`)?
- Does any portfolio use sound as a designed element (not autoplay)?
- Does any portfolio use a Typography Options Panel or similar live design-token editor (extending EMF's pattern)?
- Does any portfolio navigate between routes with a designed transition that goes beyond blur-in/out?
- Does any portfolio's hero motion orient the user to the page's structure (not just decorate)?

**Anti-patterns to keep tracking**:
- Default `document.title` (Fikri B4 — `"personal_website"` is the new low).
- Multiple H1s (Fikri B4: 9) AND zero H1s (Barthélémy B4: 0) — both extremes of heading violation.
- Shipping broken third-party widgets without fallbacks (Zyon B4 — entire GitHub integration dead).
- `NaN%` rendered as visible text (Zyon B4 — number formatting not sanitized).
- Empty section headers (Auroob B4 — "My Technical Stack" h2 with no content).
- English typos in non-native-English portfolios (Auroob B4: "Monitroring", "SaSS", "SketcUp", "Auguest", "acheivements", "frontent"; Barthélémy B4: "Enginering", "Developpement", "Personnal", "scroling").

**Patterns confirmed enough to retire from active search**:
- Domain-native conceptual metaphor (3 confirmations: Triet B1, Whilmar B3, Zyon B4).
- Two-font developer-coded feel (Antônio B1, Whilmar B3, EMF B4 with 4-font editorial system as the upper bound).
- Warm-tinted light OR tinted-dark (Nico B2, Whilmar B3, Fikri B4, EMF B4).
- Frosted-glass sticky header (Nico B2, Ajvad B3, Fikri B4).
- Multi-page hybrid (Nico B2, Ajvad B3, Ghulam B3, EMF B4).
- View Transitions API for page transitions (Ajvad B3 Astro, EMF B4 Vue).
- Live time/date stamp in footer (Ajvad B3 date, EMF B4 local-time-with-timezone).

---

## Files produced

- `/home/z/my-project/research/batch_04.md` (this file)
- `/home/z/my-project/research/screenshots/batch_04/*.png` (28 PNGs):
  - `16_fikri_{hero,about,skills,portfolio,experience,contact}.png` (6)
  - `17_emf_{hero,bio,exp1,exp2,contact,projects,typo_panel}.png` (7)
  - `18_auroob_{hero,projects,stack,about}.png` (4)
  - `19_barth_{hero,scroll,about_modal,after_click,projects,skills,contact}.png` (7)
  - `20_zyon_{hero,projects,github_replay,achievements,skills,footer}.png` (6)
