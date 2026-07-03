# Batch 11 — Portfolios 51–55

> Research Round 3, Batch 11 of 20. Five portfolios analyzed.
> Carried-forward open tensions to watch for (after 50 portfolios): scroll-driven section transitions (0 in 50); sound (0 in 50); loading state fully wired up (Daniyal B9 designed CSS but didn't render — 0 in 50); hero motion that *itself* tells user where to go next (partial); haptic-style mobile feedback (Sri B10 resolved touch-aware interaction; haptic still 0).
> Special watch for this batch: Ayush Raj has a "KIRO" nav item — possible AI assistant chatbot subpage; Shubhanshu Singh title says "Platform Engineer & Architect" — terminal-style senior register; Nabin Khair uses CSS `lab()` color space (modern color); Malik's site is tiny (1569 bytes HTML — likely a tiny React app).

---

## 51. Malik Muhammad Safwan — https://maliksafwan.netlify.app

- **Reachable**: yes (HTTP 200; Netlify static; React + Tailwind + shadcn/ui per footer)
- **First impression**: A clean, honest, low-key junior-to-mid portfolio. Pure white bg, Geist Variable font, restrained 2-keyframe budget. The hero is just a name, a location, and three bullets — no decoration, no animation, no images. Reads as someone who built the portfolio *quickly* but with taste.
- **Visual hierarchy**: H1 "malik safwan" (36px, Geist Variable) at top, 4 H2s for section titles, 6 H3s for project names. Conventional flat hierarchy — no display type.
- **Layout composition**: Single-page, vertically stacked sections, max-width container. Project cards in a 2-col grid (5 projects). Each card has thumbnail image + name + description + tech stack tags.
- **Typography**: Single-font system — Geist Variable (Vercel's font) for everything. H1 36px, body 16px. No mono, no display, no accent face. The lack of a second font is honest for a junior, but reads as default rather than deliberate.
- **Color palette**: Body bg `rgb(255,255,255)` (pure white), text presumably near-black. No accent color observed in the computed style. Project thumbnails bring the only color.
- **Spacing**: Balanced. Reasonable vertical rhythm.
- **Hero section**: "malik safwan" (H1) / "@ hong kong, hkt" (location + timezone shorthand) / "i'm a software engineer from hong kong 🇭🇰" / three bullets ("experienced in react, next.js, and full stack development", "built maktabook, an islamic note-taking app used by 500+ people", "interested in building clean, practical products people actually use"). Below: 4 social links (LinkedIn, GitHub, X — all SVG icons only).
- **Navigation**: None — single-page long-scroll, no sticky header. Just hero → content.
- **Section ordering**: Hero → work experience → personal projects → client projects → currently working on → footer.
- **Scroll experience**: Plain native scroll. 2 keyframes only (`enter`, `exit` — likely framer-motion fade-in on section mount). No parallax, no scroll-triggered animations beyond basic fade-in.
- **Animations & motion**: 2 keyframes only (`enter`, `exit`). Most restrained motion budget in the corpus alongside Triet B1.
- **Hover interactions**: Standard link + card hovers. Nothing notable.
- **Background effects**: Plain white. No particles, no grain, no gradient.
- **3D elements**: no (console showed THREE.Clock deprecation warnings + "WebGL context could not be created" errors — suggests a 3D canvas was attempted but failed silently. The `canvas` count was 0 on inspection, so either it failed before mounting or got cleaned up.)
- **Responsiveness perception**: Standard responsive grid via Tailwind. No bespoke mobile interactions.
- **Performance perception**: Very fast — only 7 imgs, 3 svgs, no scripts beyond the React app bundle. The 3D attempt failure is silent.
- **Emotional feeling**: Calm / honest / slightly under-designed / sincere.
- **Originality**: 2/5 — clean but no signature choice. Saves itself from a 1/5 by (a) the "@ hong kong, hkt" location+timezone shorthand, (b) the honest "currently working on 👨‍🍳" section.
- **What works**:
  - **"@ hong kong, hkt"** — first corpus instance of compact location+timezone combo as hero subtitle. Refines B6 Juan's location-as-metadata pattern with timezone shorthand (HKT = Hong Kong Time). Useful for remote-work credibility (timezone communication).
  - **"currently working on 👨‍🍳" status section** — first corpus instance of a dedicated live-now/working-on section. Refines Vinit B7's `/now` subpage pattern to an inline section. Two items: "maktabook — building and improving my note-taking platform for islamic studies" and "freelance projects — building web apps, landing pages, and software for clients".
  - 2-keyframe restraint — most disciplined motion budget in the corpus alongside Triet B1.
  - Transparent footer: "Built and Styled with React.js, TailwindCSS, ShadcnUI" — honest about stack.
- **What does NOT work**:
  - **Silent WebGL failure** — console errors "THREE.WebGLRenderer: A WebGL context could not be created" + "THREE.Clock deprecated" suggest a 3D background was attempted but failed silently. Either remove the dead code or fix it. (Anti-pattern — shipped broken code.)
  - Single-font system reads as default rather than deliberate. (Not necessarily wrong — Geist Variable is a respectable choice — but no mono or display font means no developer-coded feel.)
  - No nav, no sticky header, no anchor links — pure long-scroll. Works for a short portfolio (5 projects) but won't scale.
- **Notable patterns to consider**:
  - **NEW: Location+timezone shorthand** as hero subtitle ("@ hong kong, hkt") — first corpus instance. Compact credibility signal for remote-work timezone communication.
  - **NEW: "Currently working on" inline status section** — first corpus instance of dedicated live-now section. Inline variant of Vinit B7's `/now` subpage.
  - **Silent 3D failure anti-pattern** — first corpus instance of shipped-but-broken 3D code (THREE.Clock deprecation warnings + WebGL context errors). Cautionary: if you ship 3D, ensure graceful fallback.
  - Pattern reinforcement: 2-keyframe budget (B1 Triet), no-nav single-page (B1 codified), plain-text contact-style simplicity (B6 Milan).

---

## 52. Aayush Raj — https://ayushcmd.me

- **Reachable**: yes (HTTP 200; redirects to www; Vercel; Next.js multi-page app)
- **First impression**: A maximalist dark Next.js portfolio with a muted video bg, 16 canvases, ~17 keyframes, a multi-page architecture (/projects /credentials /skills /about /kiro /buy), an AI assistant chatbot subpage, and a transcript-ref + SPI/CPI trend chart. Most ambitious portfolio in batch 11 and one of the most original in the corpus. Borderline kitchen-sink but held together by a unified "liquid ripple" motion vocabulary.
- **Visual hierarchy**: H1 "Ayush Raj" (Comfortaa 96px, the biggest single piece of type) on top of the hero, with the name split across two lines. Below: 4 H2s for section titles ("FEATURED WORK", "WHO I AM", "EDUCATION & WORK", "SKILLS · WORKFLOW · IDENTITY"), 5 H3s for project names. The hero is the only display moment — the rest is restrained.
- **Layout composition**: Sticky top header (PROJECTS / CREDENTIALS / FORGE / PERSONA / KIRO / DARK — left; "ayushcmd.me" wordmark — leftmost). Hero is full-viewport with muted video bg (profile-back.mp4) and a left-aligned name. Below: featured projects (3 cards in a row), about section with location coords, education section with SPI/CPI chart + transcript ref, skills section with Workflow diagram, contact form (with reCAPTCHA). Footer with "Visitors / Gallery / Monitor" + socials.
- **Typography**: Single-font system — **Comfortaa** (Google) for everything (H1, body, labels). Comfortaa is a rounded geometric sans — unusual choice for a developer portfolio (more common in lifestyle/children's brands). H1 96px. No mono, no display. The single-font choice is unusual but committed — Comfortaa's rounded warmth softens the dark mode.
- **Color palette**: Body bg `rgb(10,10,0)` (near-black warm). Text presumably near-white. No accent color observed in computed style — but the `neonPulse` and `eqDotPulse` keyframes suggest a neon accent (likely cyan/lime) on the equalizer-style decorations.
- **Spacing**: Dense but legible. Cards have tight gutters; sections have generous vertical rhythm.
- **Hero section**: Muted video bg (profile-back.mp4, used twice — once for hero, once for fallback). Left-aligned: nav (PROJECTS / CREDENTIALS / FORGE / PERSONA / KIRO / DARK) → "ayushcmd.me" wordmark → "OPEN TO WORK · INTERNSHIPS" badge → "Ayush / Raj" (split two-line H1) → "FULL-STACK · ML · DEVELOPER" → tagline. Below: metadata grid (STUDENT Lounge 1 / Resume & CV / Get Source / NEXT.JS · PYTHON / ▲ 0 → 1 BUILDER / ⚙ XGBOOST · LSTM / CPI 8.7 / CLASS OF 2028 / IIT PATNA 2024 — 2028 / /in/ayush08iitp).
- **Navigation**: Sticky top header with **5 nav labels + 1 theme toggle**. Nav labels are unusual verbs/nouns rather than section names: PROJECTS / CREDENTIALS / FORGE / PERSONA / KIRO / DARK. Each is a separate Next.js route.
- **Section ordering**: Hero → FEATURED WORK (3 projects) → WHO I AM (about with INDIA 21.2379° N, 81.6337° E GMT+5:30 + IIT-P metadata) → EDUCATION & WORK (academic trend SPI/CPI chart + transcript ref + experience timeline) → SKILLS · WORKFLOW · IDENTITY (skills + IDEA→PLAN→AI HELP→CODE→REVIEW→TEST→LEARN workflow + contact form).
- **Scroll experience**: Smooth scroll. Many scroll-triggered reveals (dfFadeUp, dfPulse, dfScroll). The liquid ripple (liqRip x3) and nav-breathe (navBreathe, navRippleExpand) suggest ambient background animations.
- **Animations & motion**: ~17 keyframes — high but **thematically unified** under "liquid + equalizer + drawer" vocabulary: `ping` (Tailwind), `pulse` (Tailwind), `spin` (Tailwind), `liqRip` ×3 (liquid ripple), `navBreathe`, `navRippleExpand`, `floatIcon`, `dfScroll`, `dfPulse`, `dfFadeUp`, `neonPulse`, `drawerIn`, `overlayIn`, `modalIn`, `eqDotPulse`, `eqFadeIn` (equalizer dot). The `eq-*` family suggests a music-equalizer visual element (animated bars or dots), and the `nav-*` family suggests the nav itself has breathing/ripple motion. Extends B4 Zyon / B10 Karan finding that high keyframe counts are justified if thematically unified.
- **Hover interactions**: Liquid ripple on canvas tags, nav breathing, floating icons. Hover details not directly observable via DOM eval but the keyframe names imply rich hover states.
- **Background effects**: Muted video bg (profile-back.mp4) on hero — first corpus instance of muted video bg (extends B5 Vivek's blurred wallpaper to video). Plus liquid ripple canvas (likely).
- **3D elements**: no (no Three.js / WebGL canvas — all 16 canvases are 2D context, mostly small ~50-300px).
- **Responsiveness perception**: Standard responsive grid. Has drawerIn/overlayIn/modalIn keyframes suggesting mobile drawer + overlay modals.
- **Performance perception**: Heavy — Next.js multi-page with 16 canvases, 2 video elements, ~17 keyframes, GA + Vercel Analytics + custom /api/track. Total assets not measured but clearly heavier than B11's other portfolios.
- **Emotional feeling**: Energetic / maximalist / ambitious / IIT-P student flex / borderline show-off.
- **Originality**: 4/5 — high for concept (AI assistant chatbot + multi-page + canvas tags + workflow diagram + transcript ref). Loses a point for execution (single-font Comfortaa is an odd fit; 16 canvases is borderline excessive; muted video bg has unclear semantic role).
- **What works**:
  - **/kiro AI assistant chatbot** ("AI assistant for Ayush / Ask anything about Ayush or his work / Who is Ayush? / What projects has he built? / What's his tech stack? / Is he open to internships? / What's his GitHub? / Enter to send · Shift+Enter for new line") — **first corpus instance of an AI chatbot subpage for the portfolio owner**. Resolves the "contact form" tension in a unique way — instead of asking the visitor to email, the visitor asks the portfolio itself. The suggested questions are pre-curated to cover the standard recruiter queries. Strong adoptable pattern.
  - **Multi-page hybrid with verb/noun nav labels** (PROJECTS / CREDENTIALS / FORGE / PERSONA / KIRO / DARK) — extends B1 codified "hero-only home + content subpages" pattern. The labels are unusually brand-y (FORGE for projects, PERSONA for about) — adds personality without losing clarity. Multi-page architecture is rare in B10 (zero multi-page portfolios) but reappears strongly here.
  - **Academic SPI/CPI trend chart** ("4/8 SEMS / VERIFY / 9.01 CURRENT CPI / SPI dipped Sem 2, recovering since / SPI / CPI / S1 / S2 / S3 / S4 / GROWTH") + **transcript reference number** ("TRANSCRIPT REF · 24A12RES897") — **first corpus instance of academic transcript chart + first corpus instance of transcript reference number as a credibility marker**. For a student portfolio (IIT Patna class of 2028), this is more credible than skill percentages.
  - **Lat/long coordinates + timezone** ("INDIA 21.2379° N, 81.6337° E GMT+5:30") in About — **first corpus instance of decimal lat/long coordinates**. Refines B11 Malik's "hong kong, hkt" pattern to precise coordinates. More technical/precise register.
  - **Workflow diagram** ("IDEA → PLAN → AI HELP → CODE → REVIEW → TEST → LEARN") — **first corpus instance of an explicit workflow diagram** in a skills section. The inclusion of "AI HELP" as a workflow step is contemporary (2026-vintage honesty about AI in dev workflow).
  - **"OPEN TO WORK · INTERNSHIPS" availability badge** with explicit opportunity type — refines B6 Juan's "Available" pulsing-dot badge with opportunity type labeling. Useful for students specifying internship vs full-time.
  - **Hero metadata grid** (STUDENT Lounge 1 / Resume & CV / Get Source / NEXT.JS · PYTHON / ▲ 0 → 1 BUILDER / ⚙ XGBOOST · LSTM / CPI 8.7 / CLASS OF 2028 / IIT PATNA 2024 — 2028 / /in/ayush08iitp) — extends B6 Juan's hero stats block pattern with a denser metadata grid that mixes identity (IIT Patna, Class of 2028), credibility (CPI 8.7, 0→1 builder), tech stack (NEXT.JS · PYTHON, XGBOOST · LSTM), and links (Resume & CV, Get Source, LinkedIn).
- **What does NOT work**:
  - **16 canvases** is borderline excessive — most are small (~50-300px) and likely serve as liquid-ripple tag decorations, but the count is hard to justify. Risk of jank on low-end devices.
  - **Single-font Comfortaa** is an unusual choice — its rounded warmth softens the dark mode in a way that may read as less "technical". A second mono font (e.g., JetBrains Mono / IBM Plex Mono) for the metadata labels would restore the developer-coded feel.
  - **Muted video bg has unclear semantic role** — `profile-back.mp4` is muted, used twice (likely main + fallback), but the video content wasn't inspected. If it's just ambient texture, it's a heavy asset (206 partial content requests) for unclear payoff.
  - **Only 1 H1 across the entire multi-page site** — each subpage should have its own H1. (Accessibility anti-pattern — same as multi-page sites that share a single H1 in the layout.)
  - **3 `liqRip` keyframe definitions + 2 `navRippleExpand` + 2 `navBreathe`** — minor redundancy in the keyframe set (each defined multiple times). Cleanup candidate.
- **Notable patterns to consider**:
  - **NEW: AI assistant chatbot for portfolio owner** (/kiro page) — first corpus instance. Resolves the "contact form vs plain text" tension in a unique way: the visitor asks the portfolio itself. Pre-curated suggested questions cover standard recruiter queries. Strong adoptable pattern.
  - **NEW: Multi-page hybrid with verb/noun brand-y nav labels** (FORGE / PERSONA / KIRO) — extends B1 codified pattern. The labels add personality without losing clarity.
  - **NEW: Academic transcript chart with SPI/CPI trend** — first corpus instance. For student portfolios, more credible than self-rated skill percentages.
  - **NEW: Transcript reference number** ("TRANSCRIPT REF · 24A12RES897") — first corpus instance. Credibility marker for student portfolios.
  - **NEW: Decimal lat/long coordinates + timezone** ("21.2379° N, 81.6337° E GMT+5:30") — first corpus instance. Refines B11 Malik's "hong kong, hkt" pattern to precise coordinates.
  - **NEW: Workflow diagram in skills section** ("IDEA → PLAN → AI HELP → CODE → REVIEW → TEST → LEARN") — first corpus instance. "AI HELP" as an explicit step is contemporary 2026 honesty.
  - **NEW: "OPEN TO WORK · INTERNSHIPS" availability badge with opportunity type** — refines B6 Juan's pulsing-dot badge.
  - **NEW: Muted video bg on hero** (profile-back.mp4) — first corpus instance. Extends B5 Vivek's blurred-wallpaper lock screen to muted video hero bg.
  - **NEW: 16 small canvas tags as liquid-ripple decorations** — first corpus instance of canvas-as-text-label. Risk: excessive count; benefit: canvas tags can have richer animation than CSS text.
  - Pattern reinforcement: hero metadata grid (B6 Juan), multi-page hybrid (B1 codified), thematically-unified high keyframe count (B4 Zyon / B10 Karan), dark `rgb(10,10,10)` near-black warm (B10 Karan).

---

## 53. Sharuk Sayyed — https://sayyed-sharuk-portfolio.vercel.app

- **Reachable**: yes (HTTP 200; Vercel; Next.js)
- **First impression**: A generic Full Stack Developer portfolio with white bg, Inter font, duplicated project cards (pagination bug), GitHub contributions calendar (react-activity-calendar), and **ZERO semantic headings** (0 H1-H6, no `<main>`, no `<nav>`). Catastrophic accessibility — entire content is divs. Most forgettable portfolio in batch 11.
- **Visual hierarchy**: **Zero semantic headings.** The "Hi I'm Sharuk Sayyed" hero text is in a div, not an H1. Section titles are divs. The visible hierarchy (font-size variations) is conventional but the semantic hierarchy is invisible to screen readers and SEO.
- **Layout composition**: Single-page, max-width container, top header with Home / About / Projects / Skills / Contact / Resume links (all divs, not `<nav>`). Sections stacked vertically. Project cards in a paginated carousel (1-2-3-4-5-6-7 pagination dots). Each project appears twice in the DOM (pagination bug).
- **Typography**: Inter (with full fallback chain including "Apple Color Emoji", "Segoe UI Emoji") — the default Next.js font. No display, no mono, no accent face. Reads as default.
- **Color palette**: Body bg transparent, htmlBg `rgb(255,255,255)` (pure white). Text presumably near-black. No accent color observed.
- **Spacing**: Dense — narrow gutters, tight vertical rhythm.
- **Hero section**: "§" symbol + nav links + "Hi I'm / Sharuk Sayyed / Full Stack Developer with 4 years of experience, specializing in modern, frontend-focused web solutions..." (paragraph). No image, no decoration. Plus a stats row: "1980+ Hours of Coding Experience / 940+ DSA Problems Solved / 8+ Completed Projects / 2400+ Github Contribution".
- **Navigation**: Top header with Home / About / Projects / Skills / Contact / Resume (all divs, no `<nav>`). Not observed as sticky.
- **Section ordering**: Hero → About → Stats → Timeline (work + education, 5 entries) → Live Projects (paginated, 7 projects) → Hobby Projects → Skills → Contact (form with reCAPTCHA).
- **Scroll experience**: Plain native scroll. Only 1 keyframe (the react-activity-calendar loading animation). No scroll-triggered reveals observed.
- **Animations & motion**: 1 keyframe only (`react-activity-calendar--loading-animation`) — comes from the third-party GitHub calendar component, not from the portfolio itself. The portfolio ships **zero custom animations**. Most restrained motion budget alongside B1 Triet's 1-keyframe site, but here it reads as default-lazy rather than disciplined.
- **Hover interactions**: Standard link hovers. Project cards have View Page / Github links.
- **Background effects**: Plain white. No particles, no grain, no gradient.
- **3D elements**: no.
- **Responsiveness perception**: Standard responsive grid. Has a topbar icon image (company logo), so likely a topbar layout pattern.
- **Performance perception**: 36 imgs (project thumbnails + company logos), 189 svgs (skill icons — Devicons-style), 2 iframes (Google reCAPTCHA + GitHub contributions calendar). Reasonable load.
- **Emotional feeling**: Generic / template-y / forgettable.
- **Originality**: 1/5 — generic dark-on-white developer template with no signature design choice. Catastrophic accessibility. Pagination bug. Lowest originality in batch 11 alongside B10 Mehdi.
- **What works**:
  - **GitHub contributions calendar via react-activity-calendar** (using `github-contributions-api.jogruber.de` as the data source) — first corpus instance of a third-party contributions calendar widget. Easy to adopt (drop-in React component). The widget ships its own loading animation keyframe.
  - **Stats with specific numbers** ("1980+ Hours of Coding Experience / 940+ DSA Problems Solved / 8+ Completed Projects / 2400+ Github Contribution") — extends B6 Juan's numeric stats block pattern with DSA-problem count (credible for a developer who grinds LeetCode). The DSA-problem-solved metric is a credibility signal distinct from "years of experience".
  - Project thumbnails use .webp format (smaller file size) — good performance hygiene.
- **What does NOT work**:
  - **ZERO semantic HTML** — 0 H1-H6, no `<main>`, no `<nav>`. Entire content is divs. Catastrophic accessibility (screen readers get nothing). Same anti-pattern as B10 Vivek Patel, but without Vivek's metaphor commitment to justify it. **Worst accessibility in batch 11.**
  - **Duplicated project cards** — each of 7 projects appears twice in the DOM (pagination bug). The pagination component is rendering all slides at once rather than showing/hiding.
  - **Default Next.js 404** — no designed 404 page (confirmed by the `app/not-found-40ff32667b0a0569.js` chunk in network requests, which is the Next.js default).
  - **189 SVGs** — likely skill icons (Devicons-style). Logo-soup anti-pattern (B6 codified skill visualization beyond logo soup). No interactive skill visualization.
  - Title is "Sayyed Sharuk" only — no role descriptor. (Not a title-says-Portfolio anti-pattern, but missing the role context that B6 Juan / B10 Karan establish.)
- **Notable patterns to consider**:
  - **Anti-pattern reinforcement**: Zero semantic HTML (B10 Vivek), default Next.js 404 (B10 Mehdi / Vivek), logo-soup skill icons (B6 anti-pattern).
  - **NEW: react-activity-calendar GitHub contributions widget** — first corpus instance of a drop-in third-party contributions calendar widget. Easy adoption path for portfolios that want a GitHub activity visualization without building one.
  - **NEW: DSA-problems-solved stat** ("940+ DSA Problems Solved") — first corpus instance. Credibility signal distinct from years-of-experience, especially for Indian tech job market where DSA grind is standard.
  - **NEW: Pagination bug (duplicated slides in DOM)** — first corpus instance of broken pagination as an anti-pattern. Cautionary: test pagination components before shipping.

---

## 54. Shubhanshu Singh — https://shubhanshusingh.com

- **Reachable**: yes (HTTP 200; Vercel; Next.js)
- **First impression**: A senior "Platform Engineer & Architect" portfolio with pure black bg, JetBrains Mono H1, terminal-command hero ("$ whoami / shubhanshu_singh / $ cat skills.txt / $ ./experience.sh / $ ./status.sh"), underscore_notation section names ("ABOUT_ME", "WORK_EXPERIENCE"), numbered sections ("01. ABOUT_ME / 02. WORK_EXPERIENCE"), and a flagship-product banner at the very top. Most senior-register portfolio in batch 11.
- **Visual hierarchy**: Top banner (EXEMPLAR product placement) → SHUBHANSHU_SINGH wordmark + nav (ABOUT / SKILLS / EXPERIENCE / SIDE_PROJECTS / EDUCATION / CONTACT) → "PLATFORM ENGINEER & ARCHITECT / BUILDING SCALABLE PLATFORMS FOR THE FUTURE" → terminal hero (`$ whoami` block) → numbered section content. 1 H1, 0 H2, 10 H3s for section titles (uses H3 instead of H2 — minor hierarchy anti-pattern).
- **Layout composition**: Full-viewport hero with top banner → identity + nav row → terminal-command block → numbered sections (01-07) each with detailed content. Work-experience entries use `$` as the bullet character (terminal aesthetic) and `🔹` for sub-bullets. Skills section organized by category with emojis (💻 Full-Stack / 🌐 Web / 📊 Big Data / ☁️ Cloud / 🗄️ Databases / 📱 Mobile / 🔐 Auth / 🧠 AI / 🧬 Vector DBs / 🛠️ AI Frameworks).
- **Typography**: Single-font system — **JetBrains Mono** (Google) for everything. H1 60px. No display, no second sans. Pure-mono portfolio is rare in the corpus (Triet B1 used Geist Mono). The mono-everything choice strongly signals "developer" identity.
- **Color palette**: Body bg `rgb(0,0,0)` (pure black). Text presumably near-white. No accent color observed in computed style. The terminal aesthetic doesn't use green-on-black — it's white-on-black, which is more refined.
- **Spacing**: Balanced. Generous vertical rhythm. Each section is clearly demarcated by numbered header.
- **Hero section**: Top banner: "EXEMPLAR: SRE & RELIABILITY PLATFORM / Running production systems? Exemplar brings SRE, uptime monitoring, and incident management together so your team resolves outages faster and proves reliability to the business. / Visit →". Below: "SHUBHANSHU_SINGH" wordmark + nav (ABOUT / SKILLS / EXPERIENCE / SIDE_PROJECTS / EDUCATION / CONTACT). Below: "PLATFORM ENGINEER & ARCHITECT / BUILDING SCALABLE PLATFORMS FOR THE FUTURE / A DECADE OF LEADERSHIP EXPERIENCE IN SOFTWARE TECHNOLOGY / VIEW_MY_WORK / AI_HANDBOOK / GET_IN_TOUCH / MY_OSS_PROJECTS". Below: "platform_engineer.sh" + terminal block (`$ whoami / shubhanshu_singh / $ cat skills.txt / AWS, GCP, NodeJS, Python, Kubernetes, Gen AI... / $ ./experience.sh / Principal Software Engineer @ Lowe's / $ ./status.sh / Ready to build scalable solutions... / █`).
- **Navigation**: Top header with wordmark (SHUBHANSHU_SINGH) + 6 nav links (ABOUT / SKILLS / EXPERIENCE / SIDE_PROJECTS / EDUCATION / CONTACT) — all uppercase with underscore. Section nav links (VIEW_MY_WORK / AI_HANDBOOK / GET_IN_TOUCH / MY_OSS_PROJECTS) appear inline in hero.
- **Section ordering**: Hero (Exemplar banner + identity + terminal block) → 01. ABOUT_ME → 02. WORK_EXPERIENCE → 03. TECHNICAL_SKILLS → (04 missing in observed text — likely 04. EDUCATION, since 06 is EDUCATION, so 04 may be a different section) → 05. SIDE_PROJECTS → 06. EDUCATION → 07. GET_IN_TOUCH → footer.
- **Scroll experience**: Plain native scroll. 3 keyframes (`pulse`, `enter`, `exit`) — likely for the cursor `█` pulse and framer-motion section fade-in.
- **Animations & motion**: 3 keyframes only — `pulse` (terminal cursor blink), `enter`/`exit` (section mount transitions). Most restrained motion budget alongside B1 Triet.
- **Hover interactions**: Standard link hovers. Not observed in detail.
- **Background effects**: Plain pure black. No particles, no grain, no gradient.
- **3D elements**: no.
- **Responsiveness perception**: Standard responsive layout. Not tested on mobile.
- **Performance perception**: 0 imgs, 27 svgs (icons), 0 canvas, 0 iframe. Very lightweight — only 1 woff2 font file + Next.js chunks. Loads fast.
- **Emotional feeling**: Senior / serious / terminal-coded / engineer's-portfolio.
- **Originality**: 3/5 — terminal aesthetic is well-trodden (B1 Triet, B10 Vedas) but the execution here is committed: pure-black, mono-only, `$`-as-bullet, `_`-notation section names, numbered sections, terminal cursor `█`. Loses points for missing H2 (uses H3 for section titles) and the Exemplar banner being a slightly jarring placement.
- **What works**:
  - **Top-banner flagship product placement before personal identity** — "EXEMPLAR: SRE & RELIABILITY PLATFORM" banner appears BEFORE the "SHUBHANSHU_SINGH" wordmark. **First corpus instance of portfolio-as-product-launchpage hybrid.** The portfolio leads with the product (Exemplar.dev) and treats the personal identity as secondary. Strong pattern for founder/CTO portfolios.
  - **Multi-command terminal hero** ("`$ whoami / shubhanshu_singh / $ cat skills.txt / AWS, GCP, NodeJS, Python, Kubernetes, Gen AI... / $ ./experience.sh / Principal Software Engineer @ Lowe's / $ ./status.sh / Ready to build scalable solutions... / █`") — **first corpus instance of a multi-command terminal hero block**. Extends B1 Triet's terminal theme (single command) to a multi-command narrative. Each command reveals a different piece of identity (whoami = name, skills.txt = stack, experience.sh = current role, status.sh = availability). The closing `█` cursor character is a small but signature detail.
  - **Underscore_notation + numbered section names** ("01. ABOUT_ME / 02. WORK_EXPERIENCE / 03. TECHNICAL_SKILLS / 05. SIDE_PROJECTS / 06. EDUCATION / 07. GET_IN_TOUCH") — **first corpus instance of underscore_notation section names paired with numbered prefixes**. The underscore evokes file/variable naming; the numbers evoke chapter markers. Refines B10 Karan's "Behind the curtains" poetic section name pattern to a terminal-coded variant.
  - **`$` as bullet point character** in work-experience descriptions — **first corpus instance of `$` as a bullet character**. Each job responsibility starts with `$`, evoking shell-prompt output. Sustains the terminal aesthetic through the entire work history section.
  - **Skills organized by category with emoji prefixes** (💻 Full-Stack Frameworks / 🌐 Web Frameworks / 📊 Big Data & Streaming / ☁️ Cloud & Serverless / 🗄️ Databases / 📱 Mobile Development / 🔐 Authorization & Policy Engines / 🧠 AI & Generative Tech / 🧬 Vector Databases / 🛠️ AI Frameworks & Orchestration) — extends B6 codified "skills visualization beyond logo soup" pattern to **emoji-categorized text-list skills**. No icons, no percentages — just categorized text. Credible senior register.
  - **Detailed work history with quantified impact** (e.g., "Led strategic initiatives across 8 products and 100+ engineers", "growing throughput from 4K TPS to 8K+ TPS at peak", "30M–35M DAUs", "$150K+ daily transactions", "9M+ registered user base") — refines B6 Juan's numeric stats block pattern to **inline quantified impact in work descriptions**. Senior register: numbers are in the prose, not in a stats block.
  - **"ACTIVE PROJECT" status tag on side projects** — each of 4 side projects (EXEMPLAR_PROMPT_HUB / MINIMALIST_RBAC_OPA / AI.EXEMPLAR.DEV / HANDBOOK.EXEMPLAR.DEV) has an "ACTIVE PROJECT" badge. Refines B6 Juan's availability badge to project-level liveness signal.
  - **Hero CTA tab labels** (VIEW_MY_WORK / AI_HANDBOOK / GET_IN_TOUCH / MY_OSS_PROJECTS) — first corpus instance of underscore_notation CTA labels. Extends the terminal aesthetic to navigation.
- **What does NOT work**:
  - **Missing H2** — uses H3 for section titles ("01. ABOUT_ME" etc.), but no H2. The H1 is the wordmark, and H3s are sections — the H2 level is skipped. Minor accessibility issue (heading levels should not skip).
  - **Exemplar banner placement** — putting the product banner ABOVE the personal identity is bold but slightly jarring on first view. The user lands expecting a personal portfolio and gets a product pitch. Could be moved below the hero or to a side panel.
  - **Single-font JetBrains Mono for everything** — while the mono-everything choice is committed, body text in mono is harder to read at length (the work-experience section is text-heavy). A second sans (e.g., Inter / Geist) for body would restore readability without breaking the terminal aesthetic.
  - **Footer truncated** ("© 2026 SHUBHANSHU_SINGH. ALL_RI...") — observed text suggests "ALL_RIGHTS_RESERVED" but the truncation suggests the footer is using a non-standard layout that's clipping. (Or just my eval substring cutoff — likely the latter; not necessarily an issue.)
  - **Default Next.js 404** — no designed 404 page.
- **Notable patterns to consider**:
  - **NEW: Top-banner flagship product placement before personal identity** — first corpus instance. Portfolio-as-product-launchpage hybrid. Strong for founder/CTO portfolios.
  - **NEW: Multi-command terminal hero** — first corpus instance. Extends B1 Triet's single-command terminal to a multi-command narrative (whoami / cat skills.txt / ./experience.sh / ./status.sh).
  - **NEW: Underscore_notation + numbered section names** ("01. ABOUT_ME") — first corpus instance. Terminal-coded variant of B10 Karan's poetic section names.
  - **NEW: `$` as bullet point character** — first corpus instance. Sustains terminal aesthetic through work history.
  - **NEW: Terminal cursor `█` at end of hero block** — first corpus instance. Small signature detail.
  - **NEW: Underscore_notation CTA labels** (VIEW_MY_WORK / AI_HANDBOOK / GET_IN_TOUCH / MY_OSS_PROJECTS) — first corpus instance.
  - **NEW: Emoji-categorized text-list skills** (no icons, no percentages, just categorized text) — extends B6 codified pattern with a credible senior variant.
  - **NEW: "ACTIVE PROJECT" status tag on side projects** — refines B6 Juan's availability badge to project-level liveness.
  - Pattern reinforcement: terminal aesthetic (B1 Triet / B10 Vedas), mono-font portfolio (B1 Triet Geist Mono → here JetBrains Mono), pure-black bg (B10 Karan), restrained 3-keyframe budget (B1 Triet), numeric stats in work descriptions (B6 Juan).
  - Anti-pattern: missing H2 (skips heading level), default Next.js 404 (B10 Mehdi / Vivek / Sharuk).

---

## 55. Nabin Khair — https://www.nabinkhair.com.np

- **Reachable**: yes (HTTP 200; redirects to non-www; Vercel; Next.js)
- **First impression**: A senior "Full-Stack Engineer building AI-native products" portfolio with **CSS `lab()` color space** for all theme variables (first corpus instance), Space Grotesk H1, multi-page architecture (home + /blog), 16 projects in a grid, blog with 12+ posts, skills as a 38-item alphabetical text-label list, GitHub contributions calendar with "4053 activities in past 12 months", and a Templates section selling his own design system. Most refined portfolio in batch 11.
- **Visual hierarchy**: H1 "Nabin Khair" (Space Grotesk 36px) → tagline → CTAs (Hire Me / Resume) → sections with H2 titles ("My Journey", "My Work", "From the blog", "My Skills", "Education", "Connect", "Templates") → H3 for individual items (project names, blog post titles, company names). Proper semantic hierarchy (1 H1, 7 H2s, 29 H3s).
- **Layout composition**: Multi-page (home + /blog). Home: hero (left-aligned name + tagline + CTAs) → Professional Experience (timeline) → My Work (16 projects in 4-col grid) → From the blog (4 latest posts) → My Skills (alphabetical label list + GitHub contributions calendar) → Education → Connect (4 socials: LinkedIn / GitHub / Twitter / Figma) → Templates (2 product cards: Aura / Onyx) → footer.
- **Typography**: Single-font system — **Space Grotesk** (Google) for everything. H1 36px. No mono, no display, no accent face. Space Grotesk is a contemporary geometric sans with a slight tech feel — a respectable single-font choice that reads as deliberate rather than default.
- **Color palette**: **CSS `lab()` color space** for all theme variables: `--background: lab(96.52% -.0000298023 .0000119209)` (near-white warm), `--foreground: lab(9.52% -.00000745058 0)` (near-black), `--primary: lab(9.52% -.00000745058 0)` (same as foreground), `--accent: lab(93.04% .0000298023 -.0000119209)` (near-white warm inverse). The lab() values are essentially perceptually-uniform near-white/near-black with sub-perceptual warm shifts. **First corpus instance of CSS lab() color space.** The palette is effectively monochrome (warm white on warm black) with no chromatic accent.
- **Spacing**: Balanced. Generous vertical rhythm. Project grid has tight gutters but readable.
- **Hero section**: "devn." wordmark (top-left, brand-name-with-period) + "blog" link (top-nav) + GitHub icon. Below: "Nabin Khair" (H1) → "Full-Stack Engineer building AI-native products" (tagline) → "I ship production AI products end to end. Frontend, backend, LLM orchestration, edge infrastructure, multi-cloud ops. Whatever the product needs, I can own from architecture through live debugging. I work comfortably across OpenAI, Anthropic, Gemini, and Perplexity, with backends on AWS, GCP, and Cloudflare." (paragraph). Below: "Hire Me E" + "Resume R" CTAs with single-letter hotkey labels.
- **Navigation**: Top header with "devn." (brand wordmark → /) + "blog" (→ /blog) + GitHub icon. Minimal nav — only 2 visible links + icon. Rest of content is long-scroll on the home page.
- **Section ordering**: Hero → My Journey / Professional Experience (6 timeline entries: Mersel AI, Tulio Health, Truly Care, FinFox, Uncle Sams Tech) → My Work (16 projects: TallWatch, GitChat, Assets Man, FlowMint, Better Form, Fastly, PEST.js, nk-skills, Pro MCP, VTheme, Nepali Educate, DataLens, Juju Connect, ENV Store, YourGit, Nepali Calendar) → From the blog (4 latest posts with date + read time) → My Skills (38 alphabetical text labels: AWS, Bash, Better Auth, C++, Claude, Cloudflare, Docker, Drizzle, Express.js, FastAPI, Figma, Gemini, GitHub, JavaScript, MCP, MongoDB, Next.js, Nest.js, OpenAI, Perplexity, Playwright, PostgreSQL, Prisma, Railway, React.js, TanStack Query, Redis, shadcn/ui, Supabase, Tailwind, TypeScript, Vercel, Vertex AI, Zod, Zustand) + GitHub activity calendar ("4053 activities in past 12 months" Jul→Jun) → Education (IOE Purwanchal Campus + Galaxy Secondary School) → Connect (LinkedIn / GitHub / Twitter / Figma) → Templates (Aura / Onyx product cards) → footer ("Built by nabinkhair at codixra").
- **Scroll experience**: Smooth scroll. 3 keyframes (`pulse`, `enter`, `exit`) — likely framer-motion fade-in + a pulse for the availability dot.
- **Animations & motion**: 3 keyframes only — `pulse`, `enter`, `exit`. Restrained motion budget alongside B1 Triet / B11 Shubhanshu.
- **Hover interactions**: Standard link + card hovers. Not observed in detail.
- **Background effects**: Plain warm-white `lab(96.52 ...)`. No particles, no grain, no gradient. The lab() warm shift is sub-perceptual — effectively a pure-white background.
- **3D elements**: no.
- **Responsiveness perception**: Standard responsive grid (4-col project grid likely collapses to 2-col then 1-col on mobile). Not tested on mobile.
- **Performance perception**: 32 imgs (project thumbnails + company logos), 88 svgs (icons). No video, no canvas. Reasonable load.
- **Emotional feeling**: Senior / refined / contemporary / AI-native / product-builder.
- **Originality**: 4/5 — high for the lab() color system, single-letter hotkey labels, templates-as-store section, brand-name-with-period, blog-end-of-list witty copy, and 16-project grid. Loses a point for default Next.js 404 and for the single-font Space Grotesk (no mono).
- **What works**:
  - **CSS `lab()` color space for all theme variables** — `--background: lab(96.52% -.0000298023 .0000119209)`, `--foreground: lab(9.52% -.00000745058 0)`, `--primary: lab(9.52% -.00000745058 0)`, `--accent: lab(93.04% .0000298023 -.0000119209)`. **First corpus instance of modern CSS lab() color space.** Lab() is perceptually uniform (unlike sRGB/hex), so the near-white and near-black have matched lightness levels. The sub-perceptual warm shifts (a* and b* channels at ~0.00003) create an almost-imperceptible warmth. This is the most refined tinted-neutral palette in the corpus — extends B2 Nico's tinted-neutral pattern to lab() perceptual uniformity.
  - **Single-letter keyboard hotkey labels on CTAs** ("Hire Me E / Resume R") — **first corpus instance of single-key hotkey labels on hero CTAs.** The "E" and "R" are presented as separate small letters next to the CTA text, suggesting `Accesskey` or `Cmd+R`-style keyboard shortcuts. Refines B11 Aayush's keyboard interaction register to inline hotkey labels.
  - **Brand name with period** ("devn.") — **first corpus instance of brand-name-with-period.** The period is a typographic flourish that distinguishes the brand from a regular word (compare "devn" vs "devn."). Refines B6 Juan's name-as-link pattern to brand-as-wordmark-with-punctuation.
  - **Templates / design-system section selling premium themes** ("Templates / Structural Grid Templates / Production-ready templates built on the Structural Grid design system — the exposed grid aesthetic used by Linear, Vercel, and Resend. / Aura — A clean, luminous template with soft gradients and spacious layouts. Built for portfolios, landing pages, and SaaS sites. / Get Aura / Live Demo / Onyx — A bold, dark-first template with sharp contrasts and dense information hierarchy. Built for developer tools and dashboards. / Get Onyx / Live Demo / View Design System") — **first corpus instance of portfolio-as-store.** Sells own design system + 2 templates (Aura, Onyx) at the bottom of the portfolio. Refines B11 Shubhanshu's portfolio-as-product-launchpage pattern to portfolio-as-store.
  - **Witty end-of-list copy** ("You've hit the bottom. More posts in the queue — I'll try to write faster.") on the blog page — **first corpus instance of friendly empty-state / end-of-list copy.** Small but signature detail that gives the blog page a personality.
  - **38-item alphabetical text-label skills list** (no icons, no percentages, no bars, no carousel — just alphabetized text) — extends B11 Shubhanshu's emoji-categorized text-list skills to a flat alphabetical variant. The alphabetical ordering signals "this is a reference list, not a ranking". Credible senior register.
  - **GitHub contributions calendar with month labels and total count** ("Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun / 4053 activities in past 12 months / Less / More") — extends B11 Sharuk's react-activity-calendar pattern to a custom calendar with explicit total count + Less/More legend. The "4053 activities" total is a credibility signal distinct from "2400+ Github Contribution" (Sharuk) — it's a precise number, not a rounded-plus.
  - **16-project grid with one-liner taglines** (each project has a name + one-line description: "TallWatch — Detect Downtime before your users do", "GitChat — Chat-based GitHub Client powered by AI", "Assets Man — A self-hosted, open-source Google Drive alternative", etc.) — extends B5 Karan's numbered projects pattern to a flat grid with tagline-style descriptions. The taglines are uniformly sharp and product-y ("Detect Downtime before your users do", "Never Lose Your .env Again", "Bikram Sambat in your macOS menu bar").
  - **4-blog-post preview on home** (Loop Engineering, Understanding AI Harness Engineering, Why LLMs Hallucinate Mechanically, Context Engineering for Agents) with date + read time — **first corpus instance of blog-post preview with read-time metadata** on the home page. Refines B7 Vinit's /books subpage pattern to inline blog-preview.
  - **AI-native product positioning in tagline** ("Full-Stack Engineer building AI-native products") — extends B11 Shubhanshu's "Platform Engineer & Architect" role descriptor to AI-native register. Contemporaneous with the 2026 AI-native product wave.
  - **Multi-cloud + multi-LLM credibility in hero paragraph** ("I work comfortably across OpenAI, Anthropic, Gemini, and Perplexity, with backends on AWS, GCP, and Cloudflare") — first corpus instance of explicit multi-LLM + multi-cloud competence claim in hero. Refines B11 Aayush's metadata grid to inline credibility paragraph.
- **What does NOT work**:
  - **Default Next.js 404** — no designed 404 page (confirmed by the `app/not-found-40ff32667b0a0569.js` chunk in network requests — Next.js default).
  - **Single-font Space Grotesk** — no mono font for code/labels. A second mono font (e.g., JetBrains Mono / IBM Plex Mono) for the project names + tech labels would restore the developer-coded feel that's currently absent.
  - **Templates section at the very bottom** — placing the Templates section AFTER Education/Connect is slightly buried. The templates are a product (not just a portfolio piece) and could be more prominent — perhaps as a top nav item alongside "blog".
  - **Footer company credit is opaque** ("Built by nabinkhair at codixra") — "codixra" is not linkified and not explained. Is it his company? His studio? His side project? Minor mystery.
- **Notable patterns to consider**:
  - **NEW: CSS `lab()` color space** for all theme variables — first corpus instance. Perceptually uniform tinted-neutral palette. Extends B2 Nico's tinted-neutral pattern to lab() perceptual uniformity. Most refined palette in the corpus.
  - **NEW: Single-letter keyboard hotkey labels on CTAs** ("Hire Me E / Resume R") — first corpus instance. Inline hotkey hints on hero CTAs.
  - **NEW: Brand name with period** ("devn.") — first corpus instance. Brand-as-wordmark-with-punctuation.
  - **NEW: Portfolio-as-store** (Templates section selling own design system + 2 templates) — first corpus instance. Extends B11 Shubhanshu's portfolio-as-product-launchpage to portfolio-as-store.
  - **NEW: Witty end-of-list copy** ("You've hit the bottom. More posts in the queue — I'll try to write faster.") — first corpus instance. Friendly empty-state / end-of-list personality.
  - **NEW: Alphabetical text-label skills list** (38 items, no icons, no percentages, alphabetized) — extends B11 Shubhanshu's emoji-categorized variant to a flat alphabetical variant.
  - **NEW: GitHub contributions calendar with explicit total count** ("4053 activities in past 12 months") — extends B11 Sharuk's react-activity-calendar pattern to a custom calendar with precise total count.
  - **NEW: 16-project grid with one-liner taglines** — extends B5 Karan's numbered projects to a flat grid with product-y taglines.
  - **NEW: Blog-post preview with read-time metadata on home** — first corpus instance. Refines B7 Vinit's /books subpage to inline blog-preview.
  - **NEW: AI-native product positioning in tagline** ("Full-Stack Engineer building AI-native products") — contemporaneous 2026 register.
  - **NEW: Multi-LLM + multi-cloud credibility in hero paragraph** ("OpenAI, Anthropic, Gemini, and Perplexity, with backends on AWS, GCP, and Cloudflare") — first corpus instance.
  - Pattern reinforcement: tinted-neutral palette (B2 Nico), single-font system (B1 Triet Geist Mono → here Space Grotesk), multi-page hybrid (B1 codified), 3-keyframe restraint (B1 Triet / B11 Shubhanshu), numeric stats block (B6 Juan), plain-text contact (B6 Milan), blog subpage (B7 Vinit /books → here /blog).
  - Anti-pattern: default Next.js 404 (B10 Mehdi / Vivek / Sharuk / Shubhanshu).

---

## Batch 11 Synthesis

### Patterns that reinforce prior findings

- **Multi-page hybrid (B1 codified)** — reinforced after a zero-instance batch 10. **Aayush Raj** (/projects /credentials /skills /about /kiro /buy — 6 subpages) and **Nabin Khair** (/blog — 2 pages) both ship multi-page Next.js architectures. Batch 10 had zero multi-page portfolios; batch 11 has two. **Refinement**: Multi-page is back; the architecture is viable when each subpage has a distinct semantic role (Aayush: projects/credentials/skills/about/kiro/buy — each is a different content type; Nabin: home/blog — minimum viable split).
- **Terminal aesthetic (B1 Triet / B10 Vedas)** — reinforced by **Shubhanshu** (multi-command terminal hero with `$ whoami / $ cat skills.txt / $ ./experience.sh / $ ./status.sh / █`). Refinement: terminal aesthetic has a spectrum from single-command (B1 Triet) → multi-command narrative (B11 Shubhanshu) → multi-tab widget (B10 Vedas).
- **Pure-black bg (B10 Karan)** — reinforced by **Shubhanshu** (`rgb(0,0,0)`). Refinement: Pure-black works for terminal-coded portfolios; warm near-black (`rgb(5,5,5)` / `rgb(10,10,10)`) works for creative-engineer portfolios.
- **Numeric stats block (B6 Juan)** — reinforced by **Sharuk** ("1980+ Hours / 940+ DSA Problems Solved / 8+ Completed Projects / 2400+ Github Contribution") and **Nabin** ("4053 activities in past 12 months"). **Refinement**: Precise numbers ("4053") read more credible than rounded-plus ("2400+"). The DSA-problems-solved metric is a new credibility signal for Indian tech job market.
- **Plain-text contact (B6 Milan)** — reinforced by **Nabin** (Connect section is just 4 socials: LinkedIn / GitHub / Twitter / Figma — no form). **Aayush** and **Sharuk** ship contact forms (with reCAPTCHA). **Malik** has only socials (no contact section). The plain-text vs form tension splits 3 ways in batch 11.
- **Restrained keyframe budget (B1 Triet)** — reinforced by **Malik** (2 keyframes), **Shubhanshu** (3 keyframes), **Nabin** (3 keyframes). Three of five batch-11 portfolios ship ≤3 custom keyframes. Restraint is the dominant register for senior / refined portfolios.
- **Hero metadata grid (B6 Juan)** — reinforced by **Aayush** (10-cell metadata grid: STUDENT Lounge 1 / Resume & CV / Get Source / NEXT.JS · PYTHON / ▲ 0 → 1 BUILDER / ⚙ XGBOOST · LSTM / CPI 8.7 / CLASS OF 2028 / IIT PATNA 2024 — 2028 / /in/ayush08iitp). **Refinement**: The metadata grid can mix identity (IIT Patna, Class of 2028), credibility (CPI 8.7, 0→1 builder), tech stack (NEXT.JS · PYTHON, XGBOOST · LSTM), and links (Resume & CV, Get Source, LinkedIn) in a single dense block.
- **GitHub contributions calendar** — reinforced by **Sharuk** (react-activity-calendar third-party widget via jogruber.de API) and **Nabin** (custom calendar with total count "4053 activities"). **Refinement**: Two adoption paths — drop-in third-party widget (Sharuk, easy) vs custom calendar (Nabin, more control).
- **Designed 404 page** — **NOT reinforced.** Zero of 5 batch-11 portfolios ship a designed 404. All 5 ship the default Next.js / Netlify 404. Worst batch for 404 design in the corpus.
- **Single-font system (B1 codified)** — reinforced by 4 of 5 batch-11 portfolios (Malik Geist Variable, Aayush Comfortaa, Shubhanshu JetBrains Mono, Nabin Space Grotesk — only Sharuk uses default Next.js Inter). **Refinement**: Single-font systems dominate batch 11; the choice of font is the personality decision (Geist = Vercel-coded, Comfortaa = rounded-warm, JetBrains Mono = terminal-coded, Space Grotesk = contemporary-geometric).

### Patterns that contradict or refine earlier findings

- **Two-font developer-coded feel (B1 codified)** — contradicted by batch 11. **4 of 5 portfolios are single-font** (Malik, Aayush, Shubhanshu, Nabin). None of the 5 ship the B1 two-font pattern (sans + mono). **Refinement**: The two-font pattern is *not* required for a credible developer portfolio. Single-font systems work when the font choice is opinionated enough (JetBrains Mono, Space Grotesk) to carry the design language alone. The two-font pattern remains valuable for adding a developer-coded feel to portfolios whose primary font isn't already mono.
- **Tinted-neutral background (B2 Nico)** — refined by **Nabin's `lab()` color space**. Where B2 Nico used `rgb(254,215,170)` peach as a visible tint, Nabin uses `lab(96.52% -.0000298023 .0000119209)` — a sub-perceptual warm shift on near-white. **Refinement**: Tinted-neutral has a spectrum from visible-tint (B2 Nico, B10 Vedas peach) → sub-perceptual-tint (B11 Nabin lab()). The sub-perceptual variant reads as "more refined than pure white" without committing to a visible color. The `lab()` color space enables perceptual uniformity that hex/rgb cannot.
- **Multi-page hybrid with view transitions (B1, B4, B5 codified)** — refined. Aayush's multi-page Next.js app uses RSC prefetching (`/_rsc` requests) for instant subpage transitions. **Refinement**: Modern Next.js multi-page is functionally single-page (RSC prefetching makes navigation instant). The multi-page architecture pattern is now both semantically richer (distinct URLs for distinct content) AND functionally smooth (RSC prefetching). No more multi-page-vs-single-page tradeoff.
- **Hero motion that orients (B10 partial)** — refined. **Aayush's nav labels** (PROJECTS / CREDENTIALS / FORGE / PERSONA / KIRO / DARK) and **Shubhanshu's hero CTA labels** (VIEW_MY_WORK / AI_HANDBOOK / GET_IN_TOUCH / MY_OSS_PROJECTS) both orient the user via labeled nav. **Refinement**: Nav labels with action verbs (VIEW / GET / FORGE) communicate "what to do next" more clearly than section-name labels (About / Projects / Contact).
- **3D: tasteful when scoped to one surface (B3 refined)** — not contradicted but absent in batch 11. **0 of 5** batch-11 portfolios ship 3D. (Malik has silent WebGL errors but no visible 3D.) **Refinement**: 3D remains rare (only Karan B10 ships real Three.js in 51 portfolios). The default for developer portfolios is *no 3D*.
- **Custom cursor (B8 Bhavesh)** — absent in batch 11. 0 of 5 batch-11 portfolios ship a custom cursor.

### New patterns unique to this batch

| # | Pattern | Source | Note |
|---|---|---|---|
| 66 | **AI assistant chatbot for portfolio owner** (/kiro subpage with pre-curated suggested questions: "Who is Ayush? / What projects has he built? / What's his tech stack? / Is he open to internships? / What's his GitHub?") | Aayush Raj | First corpus instance. Resolves contact-form tension: visitor asks the portfolio itself. Strong adoptable pattern. |
| 67 | **CSS `lab()` color space** for all theme variables (`--background: lab(96.52% -.0000298023 .0000119209)`) | Nabin Khair | First corpus instance. Perceptually uniform tinted-neutral. Extends B2 Nico to lab() perceptual uniformity. |
| 68 | **Single-letter keyboard hotkey labels on CTAs** ("Hire Me E / Resume R") | Nabin Khair | First corpus instance. Inline hotkey hints on hero CTAs. |
| 69 | **Brand name with period** ("devn.") | Nabin Khair | First corpus instance. Brand-as-wordmark-with-punctuation. |
| 70 | **Portfolio-as-store** (Templates section selling own design system + 2 templates: Aura / Onyx) | Nabin Khair | First corpus instance. Extends B11 Shubhanshu's portfolio-as-product-launchpage to portfolio-as-store. |
| 71 | **Witty end-of-list copy** ("You've hit the bottom. More posts in the queue — I'll try to write faster.") | Nabin Khair | First corpus instance. Friendly empty-state / end-of-list personality. |
| 72 | **Alphabetical text-label skills list** (38 items, no icons/percentages, alphabetized) | Nabin Khair | Extends B11 Shubhanshu's emoji-categorized variant to flat alphabetical. |
| 73 | **GitHub contributions calendar with explicit total count** ("4053 activities in past 12 months") | Nabin Khair | Extends B11 Sharuk's react-activity-calendar to custom calendar with precise total. |
| 74 | **16-project grid with one-liner taglines** (each project: name + product-y tagline) | Nabin Khair | Extends B5 Karan's numbered projects to flat grid with taglines. |
| 75 | **Blog-post preview with read-time metadata on home** (4 latest posts: date + read time) | Nabin Khair | First corpus instance. Refines B7 Vinit's /books subpage to inline blog-preview. |
| 76 | **AI-native product positioning in tagline** ("Full-Stack Engineer building AI-native products") | Nabin Khair | Contemporaneous 2026 register. |
| 77 | **Multi-LLM + multi-cloud credibility in hero paragraph** ("OpenAI, Anthropic, Gemini, and Perplexity, with backends on AWS, GCP, and Cloudflare") | Nabin Khair | First corpus instance. |
| 78 | **Top-banner flagship product placement before personal identity** | Shubhanshu Singh | First corpus instance. Portfolio-as-product-launchpage hybrid. |
| 79 | **Multi-command terminal hero** (`$ whoami / $ cat skills.txt / $ ./experience.sh / $ ./status.sh / █`) | Shubhanshu Singh | First corpus instance. Extends B1 Triet's single-command terminal to multi-command narrative. |
| 80 | **Underscore_notation + numbered section names** ("01. ABOUT_ME / 02. WORK_EXPERIENCE") | Shubhanshu Singh | First corpus instance. Terminal-coded variant of B10 Karan's poetic section names. |
| 81 | **`$` as bullet point character** in work-experience descriptions | Shubhanshu Singh | First corpus instance. Sustains terminal aesthetic through work history. |
| 82 | **Terminal cursor `█` at end of hero block** | Shubhanshu Singh | First corpus instance. Small signature detail. |
| 83 | **Underscore_notation CTA labels** (VIEW_MY_WORK / AI_HANDBOOK / GET_IN_TOUCH / MY_OSS_PROJECTS) | Shubhanshu Singh | First corpus instance. |
| 84 | **Emoji-categorized text-list skills** (💻 Full-Stack / 🌐 Web / 📊 Big Data / ☁️ Cloud / etc., no icons/percentages) | Shubhanshu Singh | Extends B6 codified pattern with credible senior variant. |
| 85 | **"ACTIVE PROJECT" status tag on side projects** | Shubhanshu Singh | Refines B6 Juan's availability badge to project-level liveness. |
| 86 | **Location + timezone shorthand** as hero subtitle ("@ hong kong, hkt") | Malik Safwan | First corpus instance. Compact credibility signal for remote-work timezone communication. |
| 87 | **"Currently working on" inline status section** | Malik Safwan | First corpus instance of dedicated live-now section. Inline variant of B7 Vinit's /now subpage. |
| 88 | **Academic SPI/CPI trend chart** ("4/8 SEMS / 9.01 CURRENT CPI / SPI dipped Sem 2, recovering since / S1-S4 / GROWTH") | Aayush Raj | First corpus instance. For student portfolios, more credible than skill percentages. |
| 89 | **Transcript reference number** ("TRANSCRIPT REF · 24A12RES897") | Aayush Raj | First corpus instance. Credibility marker for student portfolios. |
| 90 | **Decimal lat/long coordinates + timezone** ("21.2379° N, 81.6337° E GMT+5:30") | Aayush Raj | First corpus instance. Refines B11 Malik's location+timezone to precise coordinates. |
| 91 | **Workflow diagram** ("IDEA → PLAN → AI HELP → CODE → REVIEW → TEST → LEARN") | Aayush Raj | First corpus instance. "AI HELP" as explicit step is 2026-honest. |
| 92 | **"OPEN TO WORK · INTERNSHIPS" availability badge with opportunity type** | Aayush Raj | Refines B6 Juan's pulsing-dot badge with opportunity-type labeling. |
| 93 | **Muted video bg on hero** (profile-back.mp4, muted, used twice for fallback) | Aayush Raj | First corpus instance. Extends B5 Vivek's blurred-wallpaper lock screen to muted video hero bg. |
| 94 | **16 small canvas tags as liquid-ripple decorations** (~50-300px canvases, all 2D context) | Aayush Raj | First corpus instance of canvas-as-text-label. Risk: excessive count. |
| 95 | **Verb/noun brand-y nav labels** (FORGE / PERSONA / KIRO) | Aayush Raj | Extends B1 codified pattern. Labels add personality without losing clarity. |
| 96 | **react-activity-calendar drop-in third-party widget** (via jogruber.de API) | Sharuk Sayyed | First corpus instance of drop-in contributions calendar. Easy adoption path. |
| 97 | **DSA-problems-solved stat** ("940+ DSA Problems Solved") | Sharuk Sayyed | First corpus instance. Credibility signal for Indian tech job market. |
| 98 | **Pagination bug (duplicated slides in DOM)** | Sharuk Sayyed | First corpus instance of broken pagination as anti-pattern. Cautionary. |
| 99 | **Silent 3D failure** (THREE.Clock deprecation + WebGL context errors but no visible 3D) | Malik Safwan | First corpus instance of shipped-but-broken 3D code. Cautionary. |
| 100 | **RSC prefetching for instant multi-page transitions** (`?_rsc` requests on Next.js) | Aayush Raj | First corpus instance. Modern Next.js multi-page is functionally single-page. |

### Updated answers to the open tensions

| Tension | Status after batch 11 (55 portfolios) |
|---|---|
| **Scroll-driven section transitions** | **STILL UNSOLVED — 0 in 55.** Batch 11 has zero instances. None of Malik/Aayush/Sharu/Shubhanshu/Nabin implement real section morphing on scroll. Aayush's 16 canvases + 17 keyframes are mostly ambient (liquid ripple, nav breathing, equalizer dots) — not section transitions. **Carry to batch 12.** |
| **Sound** | **STILL UNSOLVED — 0 in 55.** No audio in any of batch 11. Aayush's `eqDotPulse`/`eqFadeIn` keyframes suggest a visual equalizer but no audio element or AudioContext instance is used. AudioContext API is available (window-level) in 4/5 sites but no instances are constructed. **Carry to batch 12.** |
| **Real 3D geometric scene** (Three.js / Spline / model viewer) | **RESOLVED (B10 Karan).** No new instances in batch 11. (Malik has silent WebGL errors — a cautionary instance of *attempted but failed* 3D.) |
| **Hero motion that tells user where to go next** | **Partially resolved (refined).** Aayush's verb/noun nav labels (PROJECTS / CREDENTIALS / FORGE / PERSONA / KIRO / DARK) and Shubhanshu's hero CTA labels (VIEW_MY_WORK / AI_HANDBOOK / GET_IN_TOUCH / MY_OSS_PROJECTS) both orient the user via labeled nav. **Refinement**: Nav/CTA labels with action verbs (VIEW / GET / FORGE / GET_IN_TOUCH) communicate "what to do next" more clearly than section-name labels (About / Projects / Contact). Still missing: hero motion *itself* (not nav chrome) that tells the user where to scroll. **Carry to batch 12.** |
| **Mobile-specific gesture/haptic interactions** | **STILL UNSOLVED for haptic.** No new mobile-specific interactions in batch 11. Sri B10 remains the only instance. **Carry to batch 12.** |
| **Loading state (fully wired up)** | **STILL UNSOLVED — 0 in 55.** No designed loading state in batch 11. Aayush's RSC prefetching makes subpage transitions instant (no loading state needed for nav), but no initial-load preloader. **Carry to batch 12.** |

### Carried-forward open tensions for batch 12

- **Scroll-driven section transitions** (0 in 55 — still completely unsolved)
- **Sound** (0 in 55 — likely intentionally rare)
- **Loading state (fully wired up)** (0 in 55 — Daniyal B9 designed but didn't render)
- **Hero motion that itself (not nav chrome) tells user where to go next** (still partial — verb-label nav is the strongest signal so far)
- **Haptic-style mobile feedback** (Sri B10 resolved touch-aware interaction; haptic still 0)

### Strongest portfolio in batch 11

**Aayush Raj — ayushcmd.me.** Next.js on Vercel. Most ambitious portfolio in batch 11 and one of the most original in the corpus. Eight corpus-first patterns: (1) **AI assistant chatbot for portfolio owner** (/kiro subpage with pre-curated suggested questions — first corpus instance, resolves contact-form tension uniquely); (2) **Academic SPI/CPI trend chart** + (3) **Transcript reference number** (first corpus instances of student credibility markers — more credible than skill percentages); (4) **Decimal lat/long coordinates + timezone** (first corpus instance, refines B11 Malik's location+timezone); (5) **Workflow diagram** ("IDEA → PLAN → AI HELP → CODE → REVIEW → TEST → LEARN" — first corpus instance, "AI HELP" as explicit step is 2026-honest); (6) **"OPEN TO WORK · INTERNSHIPS" availability badge with opportunity type** (refines B6 Juan's pulsing-dot badge); (7) **Muted video bg on hero** (first corpus instance, extends B5 Vivek's blurred wallpaper to video); (8) **16 small canvas tags as liquid-ripple decorations** (first corpus instance of canvas-as-text-label). Plus: multi-page hybrid with verb/noun brand-y nav labels (FORGE / PERSONA / KIRO / DARK — extends B1 codified pattern), Comfortaa 96px H1 (unusual rounded-geometric choice), hero metadata grid (extends B6 Juan), RSC prefetching for instant subpage transitions (first corpus instance), ~17 thematically-unified keyframes (extends B4 Zyon / B10 Karan). Loses points for 16 canvases (borderline excessive), single-font Comfortaa (odd fit for developer portfolio), only 1 H1 across multi-page site, and minor keyframe redundancy (3 `liqRip` + 2 `navRippleExpand` + 2 `navBreathe` definitions).

**Runner-up: Nabin Khair — nabinkhair.com.np.** Next.js on Vercel. Most *refined* portfolio in batch 11. Twelve corpus-first patterns: (1) **CSS `lab()` color space** for all theme variables (first corpus instance, perceptually-uniform tinted-neutral — most refined palette in corpus); (2) **Single-letter keyboard hotkey labels on CTAs** ("Hire Me E / Resume R"); (3) **Brand name with period** ("devn."); (4) **Portfolio-as-store** (Templates section selling own design system + Aura/Onyx templates); (5) **Witty end-of-list copy** ("You've hit the bottom. More posts in the queue — I'll try to write faster."); (6) **Alphabetical text-label skills list** (38 items, no icons/percentages); (7) **GitHub contributions calendar with explicit total count** ("4053 activities in past 12 months"); (8) **16-project grid with one-liner taglines**; (9) **Blog-post preview with read-time metadata on home**; (10) **AI-native product positioning in tagline**; (11) **Multi-LLM + multi-cloud credibility in hero paragraph**; (12) **RSC-style multi-page Next.js** (home + /blog, the minimum viable split). Plus: Space Grotesk 36px H1 (contemporary geometric), 3-keyframe restraint, proper semantic hierarchy (1 H1 / 7 H2 / 29 H3), multi-cloud credibility, 4-blog-post preview with date + read time. Loses points for default Next.js 404 and single-font Space Grotesk (no mono).

**Third: Shubhanshu Singh — shubhanshusingh.com.** Next.js on Vercel. Senior "Platform Engineer & Architect" register. Seven corpus-first patterns: (1) **Top-banner flagship product placement before personal identity** (Exemplar banner above SHUBHANSHU_SINGH wordmark — first corpus instance of portfolio-as-product-launchpage); (2) **Multi-command terminal hero** (`$ whoami / $ cat skills.txt / $ ./experience.sh / $ ./status.sh / █` — extends B1 Triet's single-command terminal); (3) **Underscore_notation + numbered section names** ("01. ABOUT_ME"); (4) **`$` as bullet point character** in work history; (5) **Terminal cursor `█` at end of hero block**; (6) **Underscore_notation CTA labels** (VIEW_MY_WORK / AI_HANDBOOK / GET_IN_TOUCH / MY_OSS_PROJECTS); (7) **Emoji-categorized text-list skills** (no icons/percentages, just emoji-prefixed categories). Plus: pure-black `rgb(0,0,0)` bg, JetBrains Mono 60px H1 (terminal-coded), 3-keyframe restraint, quantified impact in work descriptions (8 products, 100+ engineers, 4K→8K+ TPS, 30M-35M DAUs, $150K+ daily, 9M+ users), "ACTIVE PROJECT" status tags on 4 side projects. Loses points for missing H2 (uses H3 for section titles — skips heading level), default Next.js 404, and single-font JetBrains Mono for body (harder to read at length).

### Weakest portfolio in batch 11

**Sharuk Sayyed — sayyed-sharuk-portfolio.vercel.app.** Next.js on Vercel. Generic Full Stack Developer portfolio with no signature design choice. **ZERO semantic HTML** (0 H1-H6, no `<main>`, no `<nav>` — catastrophic accessibility, same anti-pattern as B10 Vivek Patel but without Vivek's metaphor commitment to justify it). Duplicated project cards (pagination bug — each of 7 projects appears twice in DOM). Default Next.js 404. 189 SVGs as logo-soup skill icons (B6 anti-pattern). Only 1 keyframe (react-activity-calendar loading animation — ships zero custom animations). Title "Sayyed Sharuk" with no role descriptor. Lowest originality in batch 11 (1/5). Only positive: react-activity-calendar drop-in third-party widget (first corpus instance — easy adoption path), DSA-problems-solved stat (first corpus instance — credibility signal for Indian tech job market), .webp project thumbnails (good performance hygiene), and the third-party calendar widget is genuinely easy to adopt.

---

## Batch 11 Screenshot Inventory

Saved to `/home/z/my-project/research/screenshots/batch_11/`:
- `51_safwan_hero.png` / `51_safwan_scroll1.png` / `51_safwan_scroll2.png` / `51_safwan_scroll3.png` (4 screenshots)
- `52_aayush_hero.png` / `52_aayush_scroll1.png` / `52_aayush_scroll2.png` / `52_aayush_scroll3.png` / `52_aayush_scroll4.png` / `52_aayush_kiro.png` (6 screenshots — including the /kiro AI assistant subpage)
- `53_sharuk_hero.png` / `53_sharuk_scroll1.png` / `53_sharuk_scroll2.png` / `53_sharuk_scroll3.png` / `53_sharuk_scroll4.png` (5 screenshots)
- `54_shubhanshu_hero.png` / `54_shubhanshu_scroll1.png` / `54_shubhanshu_scroll2.png` / `54_shubhanshu_scroll3.png` / `54_shubhanshu_scroll4.png` / `54_shubhanshu_scroll5.png` (6 screenshots)
- `55_nabin_hero.png` / `55_nabin_scroll1.png` / `55_nabin_scroll2.png` / `55_nabin_scroll3.png` / `55_nabin_scroll4.png` / `55_nabin_scroll5.png` / `55_nabin_blog.png` (7 screenshots — including the /blog subpage)

Total: 28 screenshots. All 5 portfolios reachable; none fabricated.
