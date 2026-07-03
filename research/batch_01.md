# Batch 01 — Portfolio Research (R1-B1)

**Date:** 2026-07-03
**Agent:** general-purpose (portfolio researcher)
**Portfolios analyzed:** 5 (Jeremiah Haastrup, Krishnanand, Bhushan Zade, Triet Thai, Antônio Junior)
**Method:** `agent-browser` (Playwright headless, 1440×900 desktop viewport) + `curl` headers + DOM `eval` for computed styles, fonts, sections, console & network errors. Screenshots saved to `screenshots/batch_01/`.

All 5 URLs returned HTTP 200. No site was unreachable.

---

## 1. Jeremiah Haastrup — https://jeremiahhaastrup.com

- **Reachable**: yes (HTTP 200, Vercel / Next.js)
- **First impression**: A single, confident screen. Bold cobalt-blue field, oversized mixed-type hero, no scroll, no images. Reads as a brand statement more than a portfolio.
- **Visual hierarchy**: One dominant H2 ("Creative Developer & Designer") in serif italic anchors the page; everything else (location, CTAs, socials, copyright) is small uppercase grotesque around it.
- **Layout composition**: Asymmetric typographic "constellation." Social links ("LINKEDIN / GITHUB / PINTEREST / INSTAGRAM / TIKTOK") are placed around the canvas as design elements rather than in a footer row. Two CTAs ("SEE WORK" → Behance external, "BOOK A CALL") sit near the headline.
- **Typography**: Two-family pairing — **Instrument Serif** (italic display, 48px) for the hero name, **Apfel Grotezk** (Swiss grotesque, 24px / 16px) for everything else. Uppercase for all UI labels.
- **Color palette**: Background `#1E33BF` (rgb(30,51,191), electric cobalt blue); text `#FEFEFE` near-white. No secondary accent — pure two-tone.
- **Spacing**: Airy. Lots of negative space; content fits one viewport (body height ≈ 900px, no scroll).
- **Hero section**: Headline + tagline ("HELPING YOU BUILD BOLD IDENTITIES AND DIGITAL SOLUTIONS") + status line ("OPEN TO ENQUIRIES & COLLABORATION") + 2 CTAs + 5 typographic social links + location top-left + copyright bottom.
- **Navigation**: None. Single screen, no nav, no header.
- **Section ordering**: (Only one section) Hero. That's it. Body scroll height = viewport height.
- **Scroll experience**: No scroll. The page is the hero.
- **Animations & motion**: No captured keyframes in stylesheets. Likely subtle hover transitions only.
- **Hover interactions**: Links are `cursor:pointer`, no underline. Visual hover state not captured statically.
- **Background effects**: Solid cobalt blue. No gradient, grain, particles, or 3D.
- **3D elements**: no.
- **Responsiveness perception**: Likely fine — content is sparse and typographic; should reflow cleanly. Not tested at mobile viewport.
- **Performance perception**: Very fast. No images, no canvas, ~69 KB HTML, preloaded woff2 fonts. Minimal JS.
- **Emotional feeling**: Bold, confident, slightly cocky, design-studio-esque.
- **Originality (4/5)**: Hero-only portfolios exist, but committing to zero in-site work + premium type pairing + a single saturated color is a clear, opinionated stance.
- **What works**:
  - Two-font pairing (Instrument Serif + Apfel Grotezk) instantly elevates perceived quality above any single-family site in this batch.
  - Saturated single-color background is more memorable than any dark-mode variant.
  - Restraint — refusing to scroll — makes the page feel like a deliberate artifact.
- **What does NOT work**:
  - Zero in-site work means the visitor must leave the domain (to Behance) to evaluate him. High friction for recruiters.
  - No nav / no anchor links = nothing to "explore." If the visitor doesn't click the Behance CTA, the visit ends in 5 seconds.
  - Repeated text inside each social link (the same label appears 4–5× in `innerText`) suggests a marquee or decorative duplication that could read as redundant to screen readers.
- **Notable patterns to consider**: (a) **Hero-only single-screen portfolio** as a deliberate brand statement. (b) **Two-typeface pairing** — one display serif + one grotesque workhorse. (c) **Saturated solid background color** (not gradient) as the only "design element."

---

## 2. Krishnanand — https://krishnananda.netlify.app

- **Reachable**: yes (HTTP 200, Netlify, Vite + React SPA). Page shell is only 459 bytes — fully client-rendered.
- **First impression**: A two-tab IDE-style panel floating on a black-and-white abstract Unsplash background. Feels like a junior dev's first portfolio — decent concept, sloppy execution.
- **Visual hierarchy**: Tab bar (Profile / Works) → H1 greeting → role → CTAs (Resume, socials). Hierarchy is correct but typographically weak because no custom fonts are loaded.
- **Layout composition**: Centered card with tab bar at top; content swaps based on selected tab. Profile tab = photo + greeting + socials + resume button. Works tab = featured projects at top, then a long uncurated list of every GitHub repo.
- **Typography**: Body falls back to **Inter, system-ui, Avenir, Helvetica, Arial** (default Vite stack). H1 actually renders in **-apple-system / BlinkMacSystemFont** — i.e., the default OS font — meaning the headline doesn't even use Inter. No display font, no scale system beyond a single 28px H1.
- **Color palette**: Could not extract a solid bg color from the DOM (everything transparent). Visible palette comes from the Unsplash background image (`photo-1618221195710-dd6b41faaea6`, an abstract black-and-white image). Text colors: white `#FFFFFF` for active tab + H1, gray `#A8A8A8` for inactive tab.
- **Spacing**: Tight inside the panel; floating card on a busy photo background creates visual noise.
- **Hero section**: "Hi! I'am Krishnanand" (typo: "I'am") + "Developer I : SE" (which is a generic "Software Engineer" label) + 3 social links + Resume button + circular profile photo (180×180, `static_face1.png`).
- **Navigation**: Tabbed interface (Profile / Works), no global nav, no scroll. Ant Design tabs.
- **Section ordering**: Profile (default) → Works (tab). That's the entire site.
- **Scroll experience**: None on Profile tab. Works tab scrolls a long alphabetical list of repos.
- **Animations & motion**: Ant Design default transitions (`antFadeIn`, `antZoomIn`, `antSlideUpIn`…) + `react-reveal` for entrance animations. Felt generic — library defaults, not custom choreography.
- **Hover interactions**: Ant Design tab + button hovers. Default.
- **Background effects**: A single full-bleed Unsplash photo behind a translucent card. No grain, no parallax.
- **3D elements**: no.
- **Responsiveness perception**: Card-based layout should adapt, but the busy background image will fight text legibility at small sizes.
- **Performance perception**: Light SPA. Loads quickly. Default Vite title is the giveaway that this was deployed without polish.
- **Emotional feeling**: Junior, earnest, slightly unfinished.
- **Originality (2/5)**: IDE-tab metaphor has been done; default fonts show lack of care.
- **What works**:
  - IDE-tab framing ("Profile" / "Works") is a recognizable developer metaphor — feels native to the audience.
  - Profile photo + clear role line is honest and quick to parse.
  - Featured projects at the top of Works tab (Netflix clone, Nitro, Splitter, Apple clone, Snake & Ladder) do have descriptions and "Play Now" / GitHub links — these are the right model.
- **What does NOT work**:
  - **Browser tab title is "Vite + React"** — never customized `document.title`. Strong signal the site was deployed in a hurry. Recruiters see this in their tab bar.
  - **H1 uses the OS default font** — no actual webfont loaded for the most important text on the page.
  - **Works tab dumps 30+ GitHub repos alphabetically** with no descriptions, no images, no filtering. The featured-top + raw-list-bottom split is jarring.
  - Typo "I'am" in the H1.
- **Notable patterns to consider**: (a) **Tabbed Profile/Works** as an alternative to long-scroll portfolios — good *principle* (split "who I am" from "what I made"), even if execution here is weak. (b) **Featured projects (with descriptions) on top, "view all on GitHub" link below** — the correct curation pattern (Krishnanand did this part right; he just failed to actually hide the long list).

---

## 3. Bhushan Zade — https://bhushanz.netlify.app

- **Reachable**: yes (HTTP 200, Netlify). Body scroll height ≈ 10,898px — long-scroll portfolio.
- **First impression**: A sci-fi cyberpunk "terminal dashboard" with bright cyan-on-black, lots of all-caps pseudo-code labels, and broken live-data widgets. Ambitious but cluttered, and visibly buggy.
- **Visual hierarchy**: Loud H1 "Bhushan Zade" (96px) dominates hero. Section H2s (60px) are oversized too. Everything else fights for attention — flashing cyan labels, animated backgrounds, "⚠ STATS_SERVER_OFFLINE" badges.
- **Layout composition**: Vertical stack of themed sections, each introduced by a terminal-style H3 (cyan, monospace, e.g., "GITHUB INTELLIGENCE"). Within sections, cards / pseudo-CLI output / stat blocks. 2 `<canvas>` elements (likely particle or matrix-style background animation).
- **Typography**: **Body and H1/H2 use plain Arial, Helvetica, sans-serif** — a major missed opportunity for a sci-fi theme. Only the small cyan H3 labels use monospace (`ui-monospace, SFMono-Regular, Menlo…`). Should have committed to a display monospace (JetBrains Mono, IBM Plex Mono, Geist Mono) for headlines.
- **Color palette**: Background `rgb(5,5,5)` `#050505` near-black. Text `rgb(237,237,237)` `#EDEDED`. Accent **cyan `rgb(0,243,255)` `#00F3FF`** on terminal-style labels. A secondary purple (`#bc13fe`) appears in the github-readme-stats URL — used as `icon_color`.
- **Spacing**: Dense. Lots of widgets, badges, and pseudo-CLI blocks competing for space. Few breathing rooms.
- **Hero section**: "IDENTITY VERIFICATION: COMPLETE" eyebrow → "Bhushan Zade" H1 → 3 CTAs ("INITIATE PROJECT", "ESTABLISH COMMS", "DOWNLOAD DOSSIER") → fake terminal lines (`$ whoami` → "Bhushan Zade", `$ cat skills.json` …) → "GITHUB INTELLIGENCE" stat block — which is broken (see below).
- **Navigation**: Top nav with "BZ" logo + "Bhushan Zade" + "Home" link + social icons. Sticky behavior not verified.
- **Section ordering**: Hero → Tech Arsenal (skills, 6 category buttons) → EXPERIENCE HUB → DEPLOYMENT ARCHIVE (projects) → PLAYBOXJS → Academic Protocol → NPM REGISTRY → SECURITY LEVELS → ESTABLISH UPLINK (contact) → Footer ("SYSTEM STATUS: ONLINE / REBOOT SYSTEM").
- **Scroll experience**: Long scroll. Many keyframes (`gradient, rainbow-animation, spin, ping, pulse, glow-pulse, scan-fast, spin-reverse, cursor`) suggest continuous background animation. Likely feels busy rather than smooth.
- **Animations & motion**: Excessive for the content density — 9+ named keyframes. Scan-line + glow-pulse + spin effects compete with each other.
- **Hover interactions**: Not isolated; likely button/card hovers. The CTA buttons use terminal-style labels.
- **Background effects**: Near-black with canvas-based effect (particles / scanlines). Multi-keyframe animated backgrounds.
- **3D elements**: no (canvas effects are 2D).
- **Responsiveness perception**: Dense layouts at 1440px — likely challenging at mobile widths given the widget density.
- **Performance perception**: Heavier than others in batch — 24 images, 2 canvas, multiple animation loops, broken third-party calls. Still loads in reasonable time on a fast connection.
- **Emotional feeling**: Busy, slightly chaotic, "trying too hard."
- **Originality (2/5)**: Cyberpunk-terminal has been done many times; using Arial headlines + broken widgets makes it feel template-forked rather than designed.
- **What works**:
  - Themed vocabulary is internally consistent (INITIATE / ESTABLISH / DOSSIER / UPLINK / PROTOCOL).
  - NPM REGISTRY section (showing published `ngx-http-loader` package with 13k+ users) is a strong, specific credibility signal.
  - Mission-highlight bullets in the hero ("Optimized SQL query performance by 95% (30s → 3s)") are concrete and well-written.
- **What does NOT work**:
  - **Browser tab title is still the template default**: "Open Source Next.js Profile Portfolio - Reusable and Customizable" — never replaced with his name.
  - **Broken live-data widgets are visible to the user**: GitHub stats sections show "⚠ STATS_SERVER_OFFLINE / SIGNAL_LOST", "⚠ STREAK_DATA_UNAVAILABLE / SIGNAL_LOST", "⚠ LANG_ANALYSIS_FAILED / SIGNAL_LOST". The `github-readme-stats.vercel.app` API is returning 503.
  - **Fork not cleaned up**: Network panel shows a request to `api.github.com/users/krishnanand654/repos` — i.e., the codebase still references **Krishnanand's** GitHub username. Strong evidence Bhushan's site is a fork of Krishnanand's portfolio template (or a shared upstream template) and the references were never replaced.
  - Headlines in Arial undermine the entire sci-fi premise.
- **Notable patterns to consider**: (a) **NPM REGISTRY / package-credibility section** is a great pattern for backend/library devs — show download counts, link to npm. (b) **Mission-highlight bullets with quantified outcomes** ("95% faster", "13,000+ developers") belong in every portfolio hero. (c) Anti-pattern reference: **never ship widgets that depend on third-party APIs without a graceful fallback**.

---

## 4. Triet Thai — https://katatnt.github.io/portfolio/

- **Reachable**: yes (HTTP 200, GitHub Pages).
- **First impression**: A genuinely refined Unix-shell-themed portfolio. Restrained, cohesive, role-appropriate (Senior DevOps Engineer). The best-executed site in this batch.
- **Visual hierarchy**: Boot-log intro → `$ whoami` command → name + role + key/value metadata → section-by-section shell commands. Hierarchy is carried by structure (command → output) rather than by size.
- **Layout composition**: Sticky top nav (`kata@portfolio` logo + `./about ./projects ./experience ./skills ./certificates ./contact` path-style links) over a single long-scroll page with anchored sections. Each section is framed as `~/section-name` + a shell command + output.
- **Typography**: **Geist Mono everywhere** — single monospace family. H1 36px in a soft neon green (lab(81.52, -56.16, 47.02)). Body in warm off-white. The single-font commitment is what makes the terminal metaphor land.
- **Color palette**: Background `lab(3.78, -1.88, 0.75)` — near-black with a faint green tint. Body text `lab(89.06, -14.82, 9.48)` — warm off-white. H1 accent — soft green/yellow terminal color. No secondary accents. Effectively 2.5 colors.
- **Spacing**: Balanced. Generous line-height inside "command output" blocks; sections separated by clear headers.
- **Hero section**: Boot-log sequence ("[ OK ] Mounting infrastructure volumes…", "[ OK ] Starting kubelet.service…", "[ OK ] Reached target Multi-User System.") → `kata@portfolio:~$ whoami` → "Triet Thai (Kata)" / "Senior DevOps Engineer" → 2-sentence bio → key/value fields: `loc: Ho Chi Minh City, VN`, `uptime: 10y 9mo`, `status: open_to_work`.
- **Navigation**: Sticky header, translucent dark bg `oklab(0.16, …, 0.8)`. Path-style links (`./about`, `./projects`…). Single-page anchors.
- **Section ordering**: `about` → `projects` → `experience` → `skills` → `certificates` → `contact`. Each header styled as a shell command (e.g., `$ ls projects/ --details`, `$ cat experience/career.log`, `$ ls -group-by=category skills`, `$ cert-verify -d certificates/`, `$ contact/init-connection.sh`).
- **Scroll experience**: Smooth single-page scroll. No parallax, no scroll-jacking. Sticky nav stays out of the way.
- **Animations & motion**: Extremely restrained — only **one keyframe** (`pulse`) detected. No entrance animations, no scroll-triggered reveals. Confidence in stillness.
- **Hover interactions**: Standard link hovers. Nothing flashy.
- **Background effects**: Plain dark. No gradient, grain, particles, canvas. Zero visual noise.
- **3D elements**: no.
- **Responsiveness perception**: Clean typographic layout should reflow well; monospace at small sizes can get wide but the layout is column-based.
- **Performance perception**: Very fast. 0 images, 0 canvas, 26 SVGs, ~4.7 KB initial HTML (2773px scroll). No third-party API calls. Zero broken widgets.
- **Emotional feeling**: Calm, competent, senior, role-appropriate.
- **Originality (4/5)**: Terminal theme is common, but the **single-font, single-keyframe, zero-image, zero-third-party** commitment is rare. Restraint is the original move.
- **What works**:
  - **Metadata-as-fields hero** (`loc:` / `uptime: 10y 9mo` / `status: open_to_work`) reframes the standard "Hi I'm X, Senior Y in City" using a metaphor from his own domain (DevOps → system fields). Cohesive and original.
  - **Boot-log intro** sets the theme in 4 lines before the visitor even sees the name — instant context.
  - **Sections framed as shell commands** (`$ ls projects/ --details`, `$ cat experience/career.log`) — every header is in-voice. No section breaks the metaphor.
  - **One font, one accent color, one keyframe** — proves restraint reads as more premium than overload.
- **What does NOT work**:
  - All-monospace, even body copy, can fatigue the eye on long reads — particularly the experience/projects sections with multi-paragraph descriptions. A muted sans for body might improve legibility without breaking theme.
  - No imagery whatsoever means no visual rhythm — the page is text-text-text for 2773px. Could use SVG diagrams (architecture sketches, pipeline flowcharts) to break it up.
- **Notable patterns to consider**: (a) **Reframe standard hero data through your domain's metaphor** (DevOps → system fields; for a frontend dev this could be component-props, for a data scientist → schema/table definitions). (b) **Boot-log / "loading" hero sequence** as a 1-second theme-setter. (c) **Single-font + single-accent + near-zero motion** as a recipe for perceived seniority. (d) **Section headers as in-voice commands** (`$ ls`, `$ cat`, `$ cert-verify`) instead of generic "Projects"/"Experience".

---

## 5. Antônio Junior — https://portfolio-antonio-ten.vercel.app

- **Reachable**: yes (HTTP 200, Vercel). Body scroll height ≈ 5490px.
- **First impression**: A clean, professional, dark-mode backend-dev portfolio in Brazilian Portuguese. Nothing flashy, everything correct. The most "production-grade" portfolio in the batch.
- **Visual hierarchy**: Fixed top nav → centered hero ("Olá, eu sou" eyebrow → "Antônio Junior" H1 → "Desenvolvedor Backend" role → 2 CTAs) → section-by-section content with `// SECTION` mono-eyebrows. H1 64px, H2 35.2px (fluid), H3 14px.
- **Layout composition**: Conventional vertical stack. Each section has an `// EYEBROW` (JetBrains Mono, muted gray, 11px) above an H2 (Inter 700, 35.2px). Three-card layouts for "Sobre mim" sub-features and the technology grid. Sticky header with logo + nav.
- **Typography**: **Inter** (700 weight for H1/H2, 600 for H3, 400 for body) as the workhorse. **JetBrains Mono** used sparingly — only for `// SECTION` eyebrows and tech-category labels at 11px in muted gray. Thoughtful two-font system: a workhorse + a quiet mono accent.
- **Color palette**: Background `#0C0C0C` (rgb(12,12,12)). Text `#F0EFED` (rgb(240,239,237), warm off-white). Muted gray `#717171` for mono eyebrows. No bright accent color observed — palette is essentially grayscale.
- **Spacing**: Balanced. Section padding is comfortable; cards have breathing room.
- **Hero section**: "Olá, eu sou" → "Antônio Junior" (64px) → "Desenvolvedor Backend" → 1-sentence positioning ("Construo APIs robustas, modelos de dados coerentes e sistemas que funcionam em produção — com Python, FastAPI e Docker.") → 2 CTAs ("Ver Projetos", "Currículo") → status footer ("Natal, RN · Brasil" / "Disponível").
- **Navigation**: Fixed header, translucent dark bg `rgba(12,12,12,0.92)`. Logo "AJ" + nav (Sobre / Stack / Experiência / Projetos / Contato / Currículo ↗ external resume link). Mobile menu dialog available.
- **Section ordering**: Hero (Apresentação) → Sobre mim (3 sub-cards: APIs & Backend, Banco de Dados, DevOps & Containers) → Tecnologias (4 categories: Backend / Frontend / Banco de Dados / DevOps & Ferramentas) → Experiência → Projetos → Formação → Contato → Footer.
- **Scroll experience**: Smooth, conventional. Sticky nav with anchor links. Two keyframes only (`pulse`, `scrollDown`) — both functional (status indicator, scroll cue), not decorative.
- **Animations & motion**: Minimal and purposeful. `pulse` for the "Disponível" status dot; `scrollDown` for a hero scroll indicator. Zero entrance animations, zero scroll-triggered reveals.
- **Hover interactions**: Standard link/button hovers. Not flashy.
- **Background effects**: Plain dark `#0C0C0C`. No gradient, grain, particles, or 3D.
- **3D elements**: no.
- **Responsiveness perception**: Strong — has a mobile menu dialog, fluid type via `clamp()` (H2 is 35.2px = a `clamp()` output), ARIA-labeled navigation.
- **Performance perception**: Fast. 16 images, 29 SVGs, 0 canvas, ~47 KB HTML. No third-party widgets. No console errors.
- **Emotional feeling**: Professional, calm, trustworthy, "hireable."
- **Originality (3/5)**: Conventionally structured, but execution is clean and the Brazilian-Portuguese localization + good accessibility raises the bar. Originality is in *care*, not novelty.
- **What works**:
  - **Accessibility is properly implemented**: skip link ("Ir para o conteúdo principal"), ARIA regions (`region "Apresentação"`, `region "Sobre mim"`…), `aria-label`s on nav (`"Navegação principal"`, `"Redes sociais"`). The only portfolio in this batch that takes a11y seriously.
  - **Two-font system done right**: Inter for body/headlines, JetBrains Mono for tiny eyebrow labels — the mono is an *accent*, not the whole page. (Compare to Bhushan's Arial-everywhere.)
  - **Status indicator** in hero ("Disponível" + pulsing dot) is a small but high-signal element for recruiters.
  - **Section eyebrows in mono** (`// SOBRE`, `// STACK TECNOLÓGICA`) give a developer-coded feel without committing to a full terminal theme.
  - **External resume CTA in nav** ("Currículo ↗") — recruiters don't have to hunt.
- **What does NOT work**:
  - The grayscale palette is so restrained it verges on forgettable — no signature visual moment.
  - 16 images but I didn't see them used as a visual rhythm in screenshots — many may be tech logos in the Stack section (fine, but doesn't add personality).
  - Standard section ordering (about → stack → experience → projects → education → contact) is *correct* but predictable.
- **Notable patterns to consider**: (a) **Two-font system: workhorse sans + tiny mono eyebrows** — gives developer-coded feel without a full theme commitment. (b) **`// SECTION` mono-eyebrow** as a low-cost dev signal. (c) **Pulsing "available for work" status dot in hero** — high-signal for recruiters, near-zero cost. (d) **Skip link + ARIA regions + nav aria-labels** as baseline a11y. (e) **External resume link in the main nav** — reduce friction for hiring managers.

---

# Batch 1 Synthesis

## Patterns across multiple portfolios

1. **Developer-environment metaphors are popular — but execution separates senior from junior.** Three of five portfolios (Krishnanand's IDE tabs, Bhushan's cyberpunk dashboard, Triet's Unix shell) used some developer-environment metaphor. **Triet** proved restraint wins: one font (Geist Mono), one accent color, one keyframe, zero images, zero third-party dependencies = reads as senior. **Bhushan** did the opposite: Arial headlines, 9+ keyframes, 2 canvas elements, broken third-party widgets = reads as a half-finished fork. **Same theme family, opposite perceived quality.** Lesson: theme commitment is a font and motion decision, not a "more effects" decision.

2. **Dark mode is the default; a single saturated light/dark background is more memorable.** Four of five portfolios went dark (Krishnanand's Unsplash photo, Bhushan's `#050505`, Triet's near-black, Antônio's `#0C0C0C`). Only Jeremiah chose a saturated solid color (`#1E33BF` cobalt blue) — and he's the most visually memorable of the five. Dark mode is now table-stakes, not differentiation. A confident single-color background (especially a non-neutral one) is a cheap way to stand out.

3. **A surprising number of devs forget to set their own page title.** Krishnanand's tab reads "Vite + React"; Bhushan's reads "Open Source Next.js Profile Portfolio - Reusable and Customizable" (the upstream template name). Two of five portfolios failed the most basic personalization step. This is the easiest possible win and an instant credibility kill when missed.

## Anti-patterns observed

1. **Shipping visibly broken third-party integrations.** Bhushan's site shows "⚠ STATS_SERVER_OFFLINE / SIGNAL_LOST / LANG_ANALYSIS_FAILED" badges because `github-readme-stats.vercel.app` is returning 503. Worse, the network panel reveals a request to `api.github.com/users/krishnanand654/repos` — his codebase still references Krishnanand's GitHub username, indicating a fork that was never cleaned up. **Rule: never let a broken widget be the user's first impression. Either cache the data server-side, fall back to static values, or remove the widget entirely.**

2. **Dumping every GitHub repo into the "Works" section.** Krishnanand's Works tab is a 30+ item alphabetical list of repos with no descriptions, no images, no filtering. The featured projects at the top (with descriptions and "Play Now" links) are the right pattern — but he undermined them by also listing every repo below. **Rule: curate. Featured 3–6 projects with case studies + a single "view all on GitHub" link beats a 30-item dump every time.**

3. **Default fonts as headline typeface.** Krishnanand's H1 renders in `-apple-system` (the OS default), and Bhushan's H1 is plain Arial. Both are senior-credibility killers — a single loaded webfont (Inter, Geist, JetBrains Mono, even Instrument Serif via Google Fonts) costs ~50 KB and instantly reads as deliberate. **Rule: never ship a headline in a system fallback font.**

## Surprising / original moves worth stealing the *principle* of

1. **Jeremiah's hero-only single-screen portfolio.** He shows zero work on his own domain — just name, tagline, two CTAs, social links, and an external Behance link. The *principle* to steal: **a portfolio can be a brand statement, not a comprehensive showcase.** The trade-off is real (recruiters must leave the site to evaluate work), but for a creative-developer positioning, restraint + a saturated color + premium type pairing creates more memorability per pixel than any long-scroll site. Worth considering as a "front door" that links out to deep-dive case studies on subpages.

2. **Triet's metadata-as-fields hero.** Instead of "Hi, I'm X, Senior Y in City," he writes `loc: Ho Chi Minh City, VN / uptime: 10y 9mo / status: open_to_work`. The *principle* to steal: **reframe standard hero data through a metaphor native to your own domain.** For a DevOps engineer that's system fields; for a frontend dev it could be component props; for a data scientist it could be a schema/table definition; for a security researcher it could be a CVE-style metadata block. The metaphor should be coherent with the rest of the site, not decorative.

3. **Antônio's two-font "workhorse + tiny mono accent" system.** Inter does all the heavy lifting (headlines + body); JetBrains Mono appears only as 11px `// SECTION` eyebrows and tech-category labels in muted gray. The *principle* to steal: **you don't have to commit to a full theme to feel developer-coded — a sparingly-used mono accent on eyebrows/labels is enough.** Much lower commitment than Triet's all-mono approach, but still reads as deliberate.

## Tensions & open questions this batch surfaced

- **Restraint vs richness.** Jeremiah proves a single-screen hero can be memorable. Antônio proves a comprehensive 7-section portfolio can be professional. Which model serves the goal better — *brand piece* or *hiring-ready showcase*? Probably depends on the audience: recruiters and hiring managers benefit from Antônio's completeness; creative collaborators and design-studio leads may respond to Jeremiah's restraint. A hybrid (memorable hero *front door* + linked subpages with full case studies) may dominate either extreme.

- **Theme commitment is a font decision, not an effects decision.** Bhushan and Triet both chose a "terminal/dev" theme. Bhushan added canvas animations, 9 keyframes, multiple accent colors, and ended up looking amateur. Triet committed to one mono font, one accent, one keyframe, and ended up looking senior. **The cheapest, highest-leverage design decision in a themed portfolio is the typeface commitment.** Open question: is there a sweet spot between Triet's all-mono austerity and Antônio's all-sans-with-mono-accents? Probably yes — display mono for headlines + sans for body might combine theme coherence with reading comfort.

- **Third-party dependency fragility.** Bhushan's github-readme-stats integration is currently failing. Any portfolio that displays live data (GitHub stats, commit graphs, npm downloads, Medium posts, Twitter feeds) inherits the uptime of those services. **Recommendation: proxy and cache third-party data at build time** (Next.js `getStaticProps` / SSG, GitHub Actions cron, Cloudflare Worker cache). If the upstream is down, serve the last-known-good value. Never render a broken widget to a visitor.

- **Personalization is the lowest-cost credibility win.** Two of five portfolios forgot to set `document.title`. Two of five use default OS fonts in the H1. These are 5-minute fixes with outsized impact on perceived care. The lesson scales: **a short pre-launch checklist (page title, meta description, OG image, custom headline font, broken-link scan, lighthouse run) is worth more than any single feature.**

---

## Artifacts produced

- `/home/z/my-project/research/batch_01.md` (this file)
- `/home/z/my-project/research/screenshots/batch_01/` — 17 PNG screenshots:
  - `p1_jeremiah_*.png` (4 — hero is single-screen; all 4 are visually identical because the page does not scroll, which is itself a finding)
  - `p2_krish_*.png` (3 — hero + Works tab + v2 hero)
  - `p3_bhushan_*.png` (4 — hero + 3 scroll positions)
  - `p4_triet_*.png` (3 — hero + 2 scroll positions)
  - `p5_antonio_*.png` (3 — hero + 2 scroll positions)
