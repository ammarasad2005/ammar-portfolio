# Batch 06 — Research Round 2, Batch 6

**Task ID**: R2-B6
**Portfolios analyzed** (5):
26. Naimur Reza — https://naimur-reza.vercel.app
27. Soufiane El Hamri — https://www.soufiane-elhamri.com
28. Milan Milanovic — https://milan.milanovic.org
29. Juan Benito — https://juanbenito.vercel.app
30. Abhijeet Singh Parihar — https://abhijeet-singh-parihar-portfolio.vercel.app

**Method**: agent-browser (Chromium 1440×900 desktop) for live sites; `curl -sIL` for HTTP-status verification. DOM extraction via `agent-browser eval` covered body/H1 computed styles, heading inventory (H1–H6), canvas/img/svg/iframe/audio/video counts, keyframe names, section ordering, social links, font loading status, CSS variables, OG tags, custom-cursor probes, and active animation audits. For Juan Benito (root URL returned HTTP 500 to `curl`), `agent-browser` rendered the actual Next.js client-side-routed app at `/en` and full DOM analysis was possible.

**Honesty note**: All 5 portfolios visited live. `curl -sIL` on `juanbenito.vercel.app` returns HTTP 500 with body "Internal Server Error"; the agent-browser Chromium render reaches the actual app via client-side routing to `/en` (the title "Juan Benito" loads, headings render, subpages `/about`, `/projects`, `/contact` are reachable). The HTTP-500-on-root behavior is a deployment smell worth flagging. 22 PNG screenshots saved to `/home/z/my-project/research/screenshots/batch_06/`. Per prior batches, screenshots cannot be visually inspected by the agent (Read tool rejects PNGs) — all visual judgments below rely on DOM extraction, computed styles, and inline HTML inspection.

---

## 26. Naimur Reza — https://naimur-reza.vercel.app

- **Reachable**: yes (Vercel, HTTP 200)
- **First impression**: Dark navy `rgb(7,11,18)` + pink-magenta accent `#ff4ecd` with an alias-style hero — the H1 is the brand string "CoderXDreamer" rendered as 13 letter-by-letter spans, suggesting an entrance stagger. Body font Montserrat, H1 font Rajdhani (condensed display sans). A four-font stack is loaded (Geist, Montserrat, NyghtSerif, Rajdhani) — more fonts than necessary.
- **Visual hierarchy**: Hero H1 "CoderXDreamer" dominates (88px / 700 weight / Rajdhani). Subhero "Hello, I'm Naimur Reza — a Software Developer". Below: standard dev-portfolio flow (About → Projects → Skills → Education → Experience → Contact → Footer). Hierarchy is conventional; only the alias-as-H1 deviates.
- **Layout composition**: Single-page long-scroll (10,739px). Fixed transparent nav at top. Sections stacked vertically, each section card-styled with rounded corners on a dark backdrop. Pink accent appears on the H1 (white), CSS var `--primary: #ff4ecd`, but the actual rendered H1 color is `rgb(255,255,255)` — accent is reserved for buttons/badges/cards.
- **Typography**: 4 fonts loaded (Geist, Montserrat, NyghtSerif, Rajdhani) — only Montserrat (body) and Rajdhani (H1) are actually used in computed styles; Geist and NyghtSerif are loaded but unused (anti-pattern: dead-weight font loading). H1 88px / 700. Body Montserrat. No mono font for eyebrows (unlike B1/B2 codified pattern — loses the "two-font developer-coded feel").
- **Color palette**: bg `rgb(7,11,18)` (cool-tinted near-black), body color `rgb(248,236,245)` (warm pink-white). Accent `#ff4ecd` (vibrant magenta-pink). CSS vars (`--background:#fff`, `--primary:#ff4ecd`) are the shadcn/ui defaults but the dark body overrides them — inconsistent theme.
- **Spacing**: Balanced. Sections separated by `py-20` / `mt-28` Tailwind utilities.
- **Hero section**: H1 "CoderXDreamer" (alias / brand name) + role line "Hello, I'm Naimur Reza — a Software Developer" + "Let's Connect" + email + a "Blogs Available" badge (small green "new" tag). Hero animation: letter spans on H1 (entrance stagger, completes quickly — by the time the DOM is queried, all spans are at opacity:1, transform:none). 1 element on the page has an active `shine` keyframe (`.shiny-text`).
- **Navigation**: Fixed transparent nav at `top-5`, no backdrop-blur, no pill shape. Contains: Home / Work / About / Resume / Blog / More. 6 items — at the upper end of nav density.
- **Section ordering** (top-to-bottom): Nav → Hero ("CoderXDreamer") → About Me → Projects (Featured Case Studies) → Skills → Education → Experience → Contact → Footer.
- **Scroll experience**: Standard scroll. No parallax, no scroll-driven transitions, no scroll-triggered reveals observed. Smooth native scroll.
- **Animations & motion**: 7 keyframes declared. Only the `shine` animation actively running post-load. Hero letter-stagger entrance is the signature move (similar to John Clayton B5 — second corpus instance of letter-by-letter H1). Otherwise restrained.
- **Hover interactions**: Buttons have hover lift (`-translate-y-0.5`-style Tailwind). Project cards presumably have hover states (DOM has card markup).
- **Background effects**: Plain dark navy. No canvas, no particles, no gradient overlays.
- **3D elements**: no
- **Responsiveness perception**: Tailwind responsive classes throughout. Likely responsive (could not test mobile viewport).
- **Performance perception**: 60 images, 55 SVGs (lots of icons), 4 fonts loaded (2 unused). Probably mid-weight. No Google Analytics, no third-party trackers observed in inline scripts.
- **Emotional feeling**: Energetic + youthful + dev-portfolio-by-template. The pink-on-dark combination is gamer/streamer-coded. Doesn't read as senior — the alias "CoderXDreamer" + "dope stuff" copy + 4-font load all signal junior/early-career.
- **Originality**: **2/5** — Standard dark portfolio with magenta accent. Letter-stagger H1 is now corpus-common (John Clayton B5). Loses points for: unused font loading, alias-as-H1 (less confident than a real name), "I'm always leveling up" cliché, "build dope stuff with amazing people" copy.
- **What works**:
  - **Letter-stagger H1 entrance** — extends John Clayton B5 pattern. The "CoderXDreamer" alias is rendered as 13 individual spans, allowing per-letter animation. Pattern now appears in 2/26 portfolios (John Clayton, Naimur).
  - **"Blogs Available" new-tag** — small green "new" badge in hero pointing to a recently-shipped feature. Cheapest "site is alive" signal that's also a navigation hint. Extends Ajvad B3 / EMF B4 / Caiovisuals B5 lineage.
  - **Comprehensive OG metadata** — `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:site_name`, `og:locale`, `twitter:card`, `twitter:creator`. Extends John Clayton B5 complete-OG pattern.
- **What does NOT work**:
  - **4 fonts loaded, only 2 used** — Geist + NyghtSerif are loaded by Next.js but never appear in computed styles. Dead-weight font loading. Wasted LCP budget.
  - **Alias "CoderXDreamer" as H1** — real name "Naimur Reza" is demoted to a sub-hero line. The H1 is what screen readers, search engines, and recruiters see first. Real name should be H1.
  - **CSS vars show light theme (`--background:#fff`) but body renders dark `rgb(7,11,18)`** — the dark mode is implemented by overriding at the body level, not via the design tokens. Theme architecture is leaky.
  - **No mono font for eyebrows** — body Montserrat everywhere. Loses the B1/B2 "two-font developer-coded feel" pattern that the rest of the corpus converged on.
- **Notable patterns to consider**:
  - **Letter-stagger H1 entrance** — now 2 corpus instances (John Clayton B5, Naimur B6). Pattern consolidating.
  - **Alias / brand-name as H1** — anti-pattern OR pattern depending on framing. If "CoderXDreamer" is your professional handle, it can work. If it's a gamer tag, it undermines seniority.
  - **"Blogs Available" new-tag in hero** — cheapest "site is alive" + navigation hint combination.

---

## 27. Soufiane El Hamri — https://www.soufiane-elhamri.com

- **Reachable**: yes (Vercel, HTTP 200)
- **First impression**: Dark `rgb(10,10,12)` near-black + Inter everywhere. H1 reads "I'm soufiane El hamri" — with inconsistent case (`soufiane` lowercase, `El` capitalized, `hamri` lowercase). The hero is followed by an unusual "Scroll down" prompt marked as an H2. Two fixed-position Canvas2D elements stack at z-index auto on the body — same anti-pattern as Gunjan Ghate B3 (multiple simultaneous Canvas2D backgrounds).
- **Visual hierarchy**: H1 96px / 700 / Inter dominates. Subhero one paragraph (5+ years experience, Next.js/React/Tailwind/TypeScript/Node, n8n automation, LLM engineering). "Let's Talk" + "See resume" CTAs. H2 "Scroll down" appears as decorative instruction in the hero area.
- **Layout composition**: Single-page scroll (7,401px). Sections: About → Resume → Projects → Blogs → Skills → Contact. No `<footer>` element at all — the page just ends with the contact section. No `<address>` element either.
- **Typography**: Single-font system — Inter for both body and H1. No display font, no mono eyebrow. Loses the two-font developer-coded feel codified in B1.
- **Color palette**: bg `rgb(10,10,12)` (cool-tinted near-black), body color `rgb(237,237,237)` (near-white). Theme-color meta `#0a0a0c`. No accent color observed in CSS — accent appears via Tailwind utilities.
- **Spacing**: Moderate. Sections divided by `my-auto` and `gap-y-3`. Tighter than Naimur.
- **Hero section**: H1 "I'm soufiane El hamri" + emoji eyebrow "✨ Senior Full Stack Developer & AI Engineer" + paragraph bio + "Let's Talk" + "See resume" + "Scroll down" prompt. The hero is a `min-h-[calc(100vh-100px)]` full-viewport section.
- **Navigation**: No persistent nav observed in DOM sections list — the page has only `<main>` with sections; nav may be minimal or hidden. 32 total links across the page.
- **Section ordering**: Hero → About Me (with skills tags: Web Development / SEO / Web scraping / UX UI Design / Llm engineer / Devops / Problem solving / Automation Engineer) → Resume (Experience + Education in two columns) → Projects (section-hub, Inwi.ma, Chat-Bot Assistant, etc.) → Blogs (5 posts with H2 titles) → Skills (with percentage bars) → Contact.
- **Scroll experience**: Native scroll. Two Canvas2D elements fixed-position behind content. No parallax, no scroll-driven transitions.
- **Animations & motion**: 17 keyframes declared. No active animations queried at scroll position. Animations appear to be entrance-only fade/slide reveals.
- **Hover interactions**: Standard link hovers.
- **Background effects**: **2 Canvas2D elements, both `position: fixed; top:0; left:0`**, both 1280×577, both 2D context. Stacked on top of each other on the body. This is the same anti-pattern as Gunjan Ghate B3 (multiple simultaneous Canvas2D backgrounds). The 2 canvases have identical dimensions, suggesting they may be rendering two layers (e.g., particles + gradient) — but the visual cost is doubled regardless.
- **3D elements**: no (Canvas2D only, not WebGL)
- **Responsiveness perception**: Tailwind responsive utilities (`md:` breakpoints throughout).
- **Performance perception**: 17 images, 33 SVGs, 2 fixed-position canvases running continuously. Two fixed-position animations are a performance cost without obvious payoff (they're behind content).
- **Emotional feeling**: Serious + dense + senior. The "5+ years" + RAG/LLM/LangChain content positions him as AI-focused. Loses confidence on the lowercase-name typo and Canvas2D duplication.
- **Originality**: **2/5** — Standard dark portfolio. Loses points for: H1 case inconsistency, "Scroll down" as H2 (anti-pattern — decorative text marked as heading), 2 simultaneous Canvas2D backgrounds (B3 anti-pattern recurred), 16 H2s (most are blog post titles that should be H3), no `<footer>`, no `<address>`. Gains points for: comprehensive OG metadata (rivals John Clayton B5), bilingual-ready structure (English content + Morocco location + Arabic-French locale), AI/LLM specialization angle (differentiator).
- **What works**:
  - **Hero emoji eyebrow** — "✨ Senior Full Stack Developer & AI Engineer" with sparkle emoji. First corpus instance of an emoji eyebrow. Reads as friendly signal of seniority + specialization.
  - **"Scroll down" prompt in hero** — explicit orientation cue. Not marked as H2 ideally, but the intent (orient the user to scroll) is good. First corpus instance of an explicit "Scroll down" affordance in the hero.
  - **AI/LLM specialization in title** — `Dr Milan Milanović` style: title names the specialization. "Full Stack Developer | AI Systems Engineer | RAG & LLM Architect" extends to a third role descriptor. First triple-role title in corpus.
  - **Phone number as "DIRECT LINE"** in contact — "(+212) 641-40-48-42" with "DIRECT LINE" label. First corpus instance of a phone number prominently displayed in the contact section. Senior consultant-coded.
  - **"Let's grab a coffee and jump on conversation"** warm microcopy — first corpus instance of coffee-meeting framing (extends Luca Félix B5 "Let's grab a coffee" pattern, but here it's "Let's grab a coffee and jump on conversation" — slightly awkward English).
- **What does NOT work**:
  - **H1 case inconsistency** — "I'm soufiane El hamri" with mixed case. Reads as a typo, not a styling choice (unlike Barthélémy B4's all-caps aesthetic). The proper name should be "Soufiane El Hamri".
  - **2 simultaneous fixed-position Canvas2D backgrounds** — B3 anti-pattern (Gunjan Ghate) recurred. Both canvases are 1280×577 at body level. Performance cost without cohesion.
  - **16 H2s on one page** — most are blog post titles ("Concurrent Rendering in React...", "The Real Reason Your Project Needs Playwright..."). These should be H3 under an H2 "Blogs" parent. Hierarchy leak.
  - **"Scroll down" marked as H2** — decorative instruction text as a heading. Pollutes the document outline for AT and SEO.
  - **Biblical Lorem Ipsum placeholder** — "Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser." This is KJV-style placeholder text (likely Genesis 1:22-ish) in the skills section. **Confirmed placeholder content shipped to production.** New anti-pattern sub-category.
  - **Self-rated skill percentages** — HTML 95%, React 90%, Next.js 70%, etc. Same anti-pattern as Abhijeet in this batch. Subjective percentages undermine credibility.
  - **No `<footer>` element** — page just ends with contact section. No `<address>`. Violates semantic HTML baseline.
- **Notable patterns to consider**:
  - **Hero "Scroll down" prompt** — explicit orientation cue (steal the principle, mark it as `<p>` not `<h2>`).
  - **AI/LLM role specialization in title** — for AI-focused devs, naming the specialization (RAG, LLM, LangChain) in the title is a strong differentiator.
  - **Phone-number-as-DIRECT-LINE in contact** — extends contact-section pattern beyond email-only. Useful for consultant-style positioning.
  - **Biblical Lorem Ipsum placeholder** — **NEW ANTI-PATTERN**. Religious-text placeholder shipped to production. Worse than `lorem ipsum` because it's identifiable text that looks like real content until read.
  - **2 simultaneous Canvas2D backgrounds** — confirms B3 anti-pattern recurs.

---

## 28. Milan Milanovic — https://milan.milanovic.org

- **Reachable**: yes (Apache/2.4.37 on AlmaLinux, HTTP 200)
- **First impression**: Pure white `rgb(255,255,255)` + Source Serif 4 body + Lora H1 (weight 900). The first portfolio in the corpus with a full serif body type — reads as academic/editorial, distinctly different from the sans-serif dev-portfolio norm. Title "Dr Milan Milanović — CTO & Author of Laws of Software Engineering" — the most senior-titled portfolio in the corpus. Built with Hugo Blox Kit (academic template) but customized enough not to look templatey.
- **Visual hierarchy**: H1 "Dr Milan Milanović" 48px / 900 weight / Lora serif. Below: "Chief Technology Officer" subtitle + "3MD" (company). The hierarchy is title-first, role-second, affiliation-third — academic CV style.
- **Layout composition**: Single-page scroll (12,752px — longest in batch). Sections: Biography → Book → Publications → Posts → Talks → Research → Skills → Contact → Footer. Heavy link density (87 links — academic blogroll style). 16 images, 44 SVGs.
- **Typography**: **Body: Source Serif 4 (serif)**. **H1: Lora (serif, weight 900)**. **CORPUS FIRST**: First portfolio with full serif body type. Pure white + serif body = academic/editorial register. This is a NEW pure-white escape-hatch variant — distinct from EMF B4 (pure white + ultralight sans).
- **Color palette**: bg `rgb(255,255,255)` (pure white), body color `rgb(17,24,39)` (slate-800). No accent color in CSS vars — accent appears via Tailwind utilities (likely blue/indigo for links).
- **Spacing**: Academic-dense. Two-column layouts in many sections (biography + education, publications + source documents). More content per viewport than the other portfolios in this batch.
- **Hero section**: H1 "Dr Milan Milanović" + "Chief Technology Officer" + "3MD" + Professional Summary (1 paragraph: "I write and teach software engineering, architecture, and engineering leadership — helping 400,000+ engineers, managers, and architects through my newsletter and social channels. I'm a Microsoft MVP for Developer Technologies and the author of Laws of Software Engineering."). 4 CTAs: "Get the Book | Subscribe to Newsletter | Career and Leadership Coaching | Full Bio".
- **Navigation**: Top nav with: Home / Book / Coaching / Speaking / Posts / Experience / Publications / Projects / Contact. **9 nav items** — at the high end (Hassan B2 anti-pattern was "9+ social links in nav"; this is 9 nav items but each maps to a real section).
- **Section ordering**: Biography (with Education + Interests) → Book → Publications → Posts (Recent Posts) → Talks → Research → Skills → Contact → Footer.
- **Scroll experience**: Native scroll. No parallax. 11 keyframes declared (likely subtle hover/fade animations). Smooth.
- **Animations & motion**: 11 keyframes. Restrained — academic portfolio aesthetic doesn't reward motion.
- **Hover interactions**: Link underlines, button hovers. Standard.
- **Background effects**: Plain pure white. No canvas, no particles, no grain.
- **3D elements**: no
- **Responsiveness perception**: Tailwind responsive utilities. Hugo Blox is responsive-by-default.
- **Performance perception**: 16 images, 44 SVGs (academic icons), 0 canvas. Lightweight. Static-rendered (Hugo = SSG). Excellent LCP expected.
- **Emotional feeling**: **Serious + academic + authoritative**. Reads like a professor's personal site. The serif + pure white + dense link grid = "this person writes for a living".
- **Originality**: **4/5** — First serif-body portfolio in corpus. First portfolio titled with a doctorate and a published-book credit. Bilingual content (English + Serbian post "Dobrodošli u vrli novi svet"). Skills section as prose (not logo soup). Contact section as plain text. Most senior-titled portfolio in corpus. Loses 1 point for using Hugo Blox (template-based, though heavily customized).
- **What works**:
  - **Full serif body type** — Source Serif 4 body + Lora H1. **CORPUS FIRST**. Refines the B4 "pure white escape hatch" — pure white works not only with ultralight sans (EMF) but also with serif body type. The serif registers as "I write seriously" — appropriate for an author.
  - **Skills section as prose, not logo soup** — Skills organized by category: "Leadership & Management: Engineering Management, Team Scaling & Organizational Design, Mentorship & Coaching, Agile (Scrum, Kanban, SAFe), Product & Roadmap Planning." / "Architecture & Engineering: Software Architecture, Design Patterns, Microservices, Domain-driven Design (DDD)..." This is the prose alternative to logo soup that B3's anti-pattern #16 called for. **Best skills section in the corpus so far.**
  - **Contact section as plain text** — "You can reach me at milan@milanovic.org. / Location: Belgrade, Serbia / Social: Twitter | LinkedIn | GitHub | Newsletter". No contact form. Minimal friction. First corpus instance of an entirely plain-text contact section. Senior-consultant-coded (don't need a form; just email me).
  - **Bilingual content** — Recent Posts includes Serbian-language post "Dobrodošli u vrli novi svet" alongside English posts. Extends Caiovisuals B5 (PT-BR) and EMF B4 (EN/ES) i18n pattern. First Serbian-language portfolio content in corpus.
  - **Newsletter subscriber count as credibility** — "helping 400,000+ engineers, managers, and architects through my newsletter". Specific number = credibility. First corpus instance of newsletter-reach-as-credibility-signal.
  - **Title names the book** — "Dr Milan Milanović — CTO & Author of Laws of Software Engineering". The book title is in the page title. First corpus instance of a published-book credit in the page title.
  - **Academic metadata in About** — Education section lists 4 degrees with date ranges (Ph.D. 2007-2010, M.Sc. 2005-2007, Professional Master 2004-2005, B.Sc. 2002-2004) and institutions. CV-style date ranges extend EMF B4 CV-year-range pattern.
- **What does NOT work**:
  - **1 H2 + 13 H3 heading structure** — Only "Professional Summary" is H2. Every other section heading (Education, Interests, all publications, all posts, all talks) is H3. The hierarchy is shallow — H3s are doing H2 work. Should be: H2 per section, H3 per item.
  - **9 nav items** — at the upper limit. Hassan B2 anti-pattern was "9+ social links in nav" — this is 9 nav items, not social links, but still high. Most senior portfolios (EMF B4) get by with 4-5.
  - **`og:updated_time=2024-01-01T00:00:00+00:00`** — static outdated timestamp in OG metadata. The site has 2026 posts but OG updated_time says 2024-01-01. Inconsistent metadata.
  - **Duplicate `twitter:card` and `twitter:site` meta tags** — same meta name appears twice. Harmless but sloppy.
- **Notable patterns to consider**:
  - **Full serif body type on pure white** — NEW escape-hatch variant. Pure white works with: (a) ultralight sans (EMF B4); (b) full serif body (Milan B6). The common factor is *typographic confidence* — non-default fonts at strong weights.
  - **Skills section as categorized prose** — best skills-section pattern in corpus. Replaces logo soup with readable, scannable, semantically-meaningful text.
  - **Contact section as plain text** — "email + location + inline social links" without a form. Senior-consultant positioning. Reduces form friction.
  - **Title with professional credentials** — "Dr" + "CTO" + "Author of [Book]" in title. For senior devs, naming credentials in the title is a strong differentiator.
  - **Newsletter subscriber count as credibility** — "400,000+ engineers" is a specific, falsifiable claim. Better than "I help developers" (vague).
  - **Bilingual content as cultural signal** — extends i18n pattern beyond EMF (toggle) and Caiovisuals (monolingual PT-BR). Milan mixes EN + RS in one feed.

---

## 29. Juan Benito — https://juanbenito.vercel.app

- **Reachable**: partial — `curl -sIL` returns HTTP 500 ("Internal Server Error") on root, but `agent-browser` Chromium renders the Next.js app via client-side routing to `/en`. Subpages `/en/about`, `/en/projects`, `/en/contact` all load. Title "Juan Benito" appears correctly. The HTTP 500 on root is a deployment smell (likely an SSR error in `app/page.tsx` or middleware), but the client-side app works.
- **First impression**: Warm-tinted light theme with Space Grotesk (single font). Small H1 "Hey, it's Juan Benito!" (24px / 400 weight — conversational, not display). The hero is a CARD (`bg-secondary rounded-xl p-5 shadow-sm`) containing a 3D-rendered avatar image + greeting + bio + 2 paragraphs + CV download button. Floating pill-shaped sticky header at `top-5`. The "Available" badge with animated pulsing dot links to `/contact`.
- **Visual hierarchy**: Hero H1 is small (24px regular) — the avatar image (300×300) is the visual anchor, not the text. Stats "+3 YEARS IN THE FIELD" / "+8 PROJECTS COMPLETED" appear as bold numeric callouts. Featured Skills as horizontal text labels (no logos). Featured Projects (2 shown) with tech stack pills.
- **Layout composition**: Multi-page hybrid. Home `/en` = hero card + stats + featured skills + featured projects (2,071px tall — compact). `/about` = ABOUT H1 + metadata grid (4 cells) + My Story + What I Bring (3 cards) + CTA (1,743px). `/projects` = PROJECTS H1 + 4 project cards (1,755px). `/contact` = CONTACT H1 + intro + response-time callout + form (959px).
- **Typography**: **Single font: Space Grotesk**. Used for both body and H1. The trendy display-style sans popular in dev portfolios. No serif pairing, no mono eyebrow. Loses the two-font developer-coded feel. **HOWEVER**, the H1 weight is only 400 (regular) at 24px — making it conversational rather than display. This is restraint: don't use the display font at display sizes if you don't have anything display-sized to say.
- **Color palette**: bg `rgba(0,0,0,0)` (transparent — relies on html background). Body color `rgb(30,27,24)` (warm near-black, neutral-950-like). CSS vars not exposed (Tailwind v4 with different naming). `color-scheme: light` — light is the default. Header bg `oklab(0.968619 0.00198853 0.00477505 / 0.5)` (warm near-white at 50% opacity).
- **Spacing**: Airy. `space-y-10` between sections, `gap-5` within cards. Generous padding (`p-5` to `p-8`).
- **Hero section**: H1 "Hey, it's [Juan Benito]!" — the name is a link to `/about` with dashed underline decoration. 300×300 3D avatar image (described in alt as "3D avatar" — it's a rendered image, not a live 3D scene). 2 paragraphs of bio. CV download button (`bg-primary text-neutral-2`). Stats block (+3 years, +8 projects). "Available" pulsing-dot badge above hero linking to `/contact`.
- **Navigation**: **Floating pill-shaped sticky header** at `top-5` (20px from top). `bg-neutral-1/50 border-neutral-2/25 sticky top-5 z-10 mt-5 mb-10 overflow-hidden rounded-full border p-4`. Inside: separate `backdrop-blur-lg` div. Left: JB logo (SVG). Center: nav (About / Projects / Contact). Right: theme toggle (sun/moon SVG button, `aria-label="Toggle color theme"`). This is the second corpus instance of pill-shaped floating header (extends John Clayton B5 pattern) — and the cleanest implementation.
- **Section ordering**: Home: Hero → Stats → Featured Skills → Featured Projects → Footer. About: Header → Metadata Grid → My Story → What I Bring → CTA. Projects: Header → Project Cards (4). Contact: Header → Intro → Response Time → Form → Footer.
- **Scroll experience**: Native smooth scroll. 4 keyframes declared. No scroll-driven transitions.
- **Animations & motion**: 4 keyframes (restrained). `animate-ping` on the "Available" badge dot (Tailwind built-in). Hover lifts on cards (`hover:-translate-y-0.5`). Logo hover scale (`hover:scale-110`). Theme toggle hover scale.
- **Hover interactions**: Card hover lifts (`hover:-translate-y-1 hover:shadow-lg`). Logo hover scale. Theme toggle hover scale. Link hover transitions (`hover:text-accent transition-colors duration-300`).
- **Background effects**: Plain warm-tinted light. No canvas, no particles, no grain.
- **3D elements**: no (the "3D avatar" is a static rendered webp image, not a live 3D scene)
- **Responsiveness perception**: Tailwind responsive throughout (`lg:flex-row`, `lg:text-left`, etc.). Card hero stacks vertically on mobile.
- **Performance perception**: 3 images, 17 SVGs, **2 video elements** (both pointing to the same `acolyte-tabs.webm` source — DUPLICATE VIDEO, likely a bug), 0 canvas. Light. Static-rendered via Next.js.
- **Emotional feeling**: **Calm + warm + restrained**. The small H1, the warm light palette, the pill-shaped floating header, the pulsing "Available" dot — all read as confident-without-shouting. First portfolio in batch 6 that feels "designed" rather than templated.
- **Originality**: **4/5** — Multi-page hybrid with locale routing (`/en/...`), pill-shaped floating header (refines John Clayton B5), card-style hero, "Available" pulsing-dot badge (corpus first), stats block in hero (corpus first), About page metadata grid (corpus first), "RESPONSE TIME: Usually within a day" contact microcopy (extends Luca Félix B5). Loses 1 point for: bare "Juan Benito" title (no role), single-font system (loses two-font feel), duplicate video element bug.
- **What works**:
  - **Card-style hero** — hero is a `bg-secondary rounded-xl p-5 shadow-sm` card containing avatar + text + CTA. First corpus instance of hero-as-card. Reads as "the hero is content, not background". The card floats on the page background instead of being the page.
  - **"Available" pulsing-dot badge** — `<a href="/contact">` styled as a pill button with `animate-ping` dot (`<span class="bg-neutral-2 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>`). Animated indicator that the dev is available for work. Links to contact. **CORPUS FIRST**. Cheapest "site is alive AND I am alive" signal in the corpus.
  - **Numeric stats block in hero** — "+3 YEARS IN THE FIELD" / "+8 PROJECTS COMPLETED" as bold numeric callouts. **CORPUS FIRST**. Direct credibility signal — better than subjective skill percentages. Real, countable numbers.
  - **About page metadata grid** — `/about` opens with a 4-cell metadata grid: BASED IN (Donostia / San Sebastián) / ROLE (Full-Stack Web Developer) / EDUCATION (Higher Technician in Web App Development) / LANGUAGES (Spanish · English · Basque). Each cell is a card with icon + label + value. **CORPUS FIRST**. Combines CV-style (Ghulam B3) + Luca Félix B5 third-person about + first-person narrative into one structured page. The metadata block is the executive summary; "My Story" is the narrative depth.
  - **"RESPONSE TIME: Usually within a day"** contact microcopy — extends Luca Félix B5 "Replies in 1-2 days" pattern. Slightly tighter (1 day vs 1-2 days). Sets expectation without a date stamp.
  - **Floating pill-shaped sticky header** — second corpus instance (John Clayton B5). Juan Benito's implementation is cleaner: `rounded-full border p-4` + `backdrop-blur-lg` inner div + logo/nav/theme-toggle layout. Refines the pattern.
  - **Name-as-link in H1** — "Hey, it's [Juan Benito]!" where "Juan Benito" is an `<a href="/about">` with dashed underline. The name itself is the navigation to the About page. Subtle, semantic, clever.
  - **Theme toggle in header** — `aria-label="Toggle color theme"` sun/moon button. Light is default (`color-scheme: light`). Extends the user-toggle pattern.
  - **Locale-prefixed routes** — `/en/about`, `/en/projects`, `/en/contact`. The `/en/` prefix suggests locale-aware routing (Spanish/English/Basque trilingual dev). Even if only English is currently implemented, the architecture is i18n-ready.
  - **Compact home page** — home is only 2,071px tall (shortest in batch 6 beside contact). Demonstrates the hero-only home + content subpages pattern (Nico B2 / EMF B4) at its most restrained.
- **What does NOT work**:
  - **HTTP 500 on root URL** — `curl -sIL https://juanbenito.vercel.app` returns HTTP 500. The site only renders via client-side routing. SSR/middleware is broken. Recruiters / scrapers / link-preview bots that don't execute JS will see "Internal Server Error". **NEW ANTI-PATTERN: deployed portfolio that doesn't SSR**. Worse than Vinay B5 (404) in some ways — at least Vinay fails fast. Juan Benito fails only when JS doesn't run, so the failure is invisible to the dev's own browser.
  - **Duplicate video element** — 2 `<video>` elements in the hero project card, both pointing to the same source (`acolyte-tabs.webm`) with the same poster. One is presumably the intended autoplay preview; the other is dead weight. Bug.
  - **Bare "Juan Benito" title** — `document.title = "Juan Benito"` on home. No role, no specialization. Subpages have better titles ("About • Juan Benito", "Projects • Juan Benito", "Contact • Juan Benito") but the home title is bare.
  - **Single-font system** — Space Grotesk everywhere. No mono eyebrow, no serif accent. Loses the two-font developer-coded feel.
  - **H1 only 24px / weight 400** — conversational scale. Reads as modest. Works for the "Hey, it's Juan Benito!" greeting register, but loses the display-type impact that the corpus has converged on (60-109px H1s).
- **Notable patterns to consider**:
  - **Card-style hero** — hero-as-card vs hero-as-page. Card style reads as "this is one piece of content among many", page-style reads as "this is the whole show". For multi-page hybrids, card-style hero is more honest.
  - **"Available" pulsing-dot badge** — animated availability indicator linking to contact. Best "site is alive AND I am alive" signal in corpus.
  - **Numeric stats block** — real countable numbers (+3 years, +8 projects) replace subjective skill percentages. Direct credibility.
  - **About page metadata grid** — combines CV-style + narrative + executive-summary in one page. Best About-page architecture in corpus.
  - **Name-as-link in H1** — subtle navigation pattern. The H1's most important word (the name) is also a link.
  - **HTTP 500 on root but app works** — **NEW ANTI-PATTERN**: SSR broken, app works only via client routing. Invisible to the dev's own browser.

---

## 30. Abhijeet Singh Parihar — https://abhijeet-singh-parihar-portfolio.vercel.app

- **Reachable**: yes (Vercel, HTTP 200)
- **First impression**: Light slate theme `rgb(248,250,252)` (slate-50) with system-ui font stack (no custom font loaded). Title "Portfolio" — bare template default (B1/B2 anti-pattern). H1 "Hi,I'm Abhijeet Singh Parihar" (60px / 700 / system-ui / slate-900). The hero has a quoted subhead: "MERN Stack Developer and UI/UX enthusiast, crafting responsive, user-focused web apps that blend performance with pixel-perfect design." Skills section uses self-rated percentages (HTML 95%, CSS 95%, JS 95%, React 90%) — same anti-pattern as Soufiane in this batch.
- **Visual hierarchy**: H1 60px dominates. Subhead quote in quotation marks. "View My work" (sic — capitalization typo) and "Scroll" CTAs. Below: standard dev-portfolio flow with a skills filter (All / Frontend / Backend / Tools — first corpus instance of skill-category filtering).
- **Layout composition**: Single-page scroll (5,013px). Fixed nav at top (`fixed w-full z-40`). Sections: Home → About → Skills → Projects → Contact → Footer. Card-based project layout (5 projects with H3 titles + descriptions + tech stack lists + Live Link).
- **Typography**: **System font stack**: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`. No custom font loaded. **B1/B5 anti-pattern confirmed** — same as John Clayton B5. The system-ui font reads as "I didn't choose a font".
- **Color palette**: bg `rgb(248,250,252)` (slate-50, cool-tinted near-white). Body color `rgb(15,23,41)` (slate-900). shadcn/ui CSS vars: `--background: 210 40% 98%`, `--primary: 210,100%,45%` (Tailwind blue-500-ish), `--card: 0 0% 100%` (pure white). Default shadcn blue — not a single intentional accent.
- **Spacing**: Standard `py-24 px-4` per section. Dense within sections.
- **Hero section**: H1 "Hi,I'm Abhijeet Singh Parihar" + quoted subhead (in actual quotation marks in the DOM) + "View My work" CTA + "Scroll" prompt. No image, no avatar. Plain background. **"Hi,I'm" has no space after the comma** — typo in H1.
- **Navigation**: Fixed nav `fixed w-full z-40 transition-all duration-300 py-3`. Brand "Abhijeet Portfolio" on left. Links: Home / About / Skills / Projects / Contact. 5 items — appropriate.
- **Section ordering**: Nav → Hero → About Me → Skills → Featured Projects → Contact → Footer.
- **Scroll experience**: Native scroll. 84 elements with `pulse-subtle` animation running continuously (likely skill-bar or icon pulses). No scroll-driven transitions.
- **Animations & motion**: 4 keyframes. `pulse-subtle` running on 84 elements (likely skill icon containers — constant animation = visual noise). Hover lifts on cards.
- **Hover interactions**: Card hover lifts, button hovers, filter button states.
- **Background effects**: Plain slate-50. No canvas, no particles.
- **3D elements**: no (Three.js mentioned in Jarvis project tech stack but not loaded on the portfolio page itself)
- **Responsiveness perception**: Tailwind responsive throughout. Likely mobile-friendly.
- **Performance perception**: 23 images, 22 SVGs, 0 canvas. Light. Single JS bundle (`/assets/index-DG1VEgda.js` — Vite-built). Static-rendered.
- **Emotional feeling**: **Generic + early-career + template-default**. The system font + slate-50 + blue accent + percentage skills + bare "Portfolio" title all read as "first portfolio built from a tutorial". Doesn't differentiate.
- **Originality**: **1/5** — Lowest originality in batch 6. Loses points for: bare "Portfolio" title (B1 anti-pattern), system-ui font (B1/B5 anti-pattern), self-rated skill percentages (B3/batch-6 anti-pattern), no OG metadata, default shadcn blue, no signature move, "Hi,I'm" typo in H1, "View My work" capitalization typo. Gains 1 point for: skills category filter (corpus-first for skills, though Caiovisuals B5 had it for projects).
- **What works**:
  - **Skills category filter** — All / Frontend / Backend / Tools buttons filter the skills grid. **CORPUS FIRST for skills filtering** (Caiovisuals B5 had filter for projects). For a dev with 18+ skills, category filtering is the right UX.
  - **Contact section with both info and form** — "Contact Information" (Email / LinkedIn / Location) + "Send a Message" form. Two-column layout. Standard but functional.
- **What does NOT work**:
  - **Title: "Portfolio"** — B1/B2 anti-pattern. Bare template default. Tab is the first thing recruiters see.
  - **System font stack** — `ui-sans-serif, system-ui, sans-serif`. B1/B5 anti-pattern. Reads as "I didn't choose a font".
  - **Self-rated skill percentages** — HTML 95%, CSS 95%, JS 95%, React 90%, Redux 70%, Next.js 70%, Tailwind 90%, TypeScript 70%, Vite 80%, Node.js ... Same anti-pattern as Soufiane in this batch. Subjective percentages undermine credibility. (If you really know React at 90%, you should know TypeScript at more than 70% — the percentages don't even pass internal consistency.)
  - **0 OG metadata** — no `og:title`, `og:description`, `og:image`, `twitter:card`. Link previews will be bare. Anti-pattern given John Clayton B5 / Naimur B6 / Soufiane B6 all have complete OG.
  - **84 elements with `pulse-subtle` animation running continuously** — constant subtle pulsing on many elements = visual noise without purpose. Violates the "motion must mean something" principle.
  - **"Hi,I'm" typo in H1** — missing space after comma. H1 is the first thing screen readers and search engines see.
  - **"View My work" capitalization typo** — "My" capitalized mid-phrase. Minor but signals carelessness.
  - **Default shadcn blue accent** — `--primary: 210,100%,45%` is shadcn/ui's default blue. Reads as "I installed shadcn and didn't change anything".
- **Notable patterns to consider**:
  - **Skills category filter** — for high-skill-count portfolios, category filtering (Frontend/Backend/Tools) is better than logo soup.
  - **Self-rated skill percentages** — **CONFIRMED ANTI-PATTERN** in 2/5 portfolios in this batch (Soufiane, Abhijeet). Subjective, internally inconsistent, undermines credibility.

---

## Batch 6 Synthesis

### Patterns that REINFORCE prior findings

1. **Commitment-over-kitchen-sink** — Milan commits to serif + pure white + academic density; Juan Benito commits to warm-tinted light + Space Grotesk + card hero + multi-page hybrid + locale routing. Both feel senior. Naimur (4 fonts loaded, 2 unused) and Abhijeet (system font + 84 pulse animations + bare title) do NOT commit and read as junior. Soufiane is mid (commits to dark + Inter but ships placeholder text + duplicate canvas).
2. **Tinted-neutral background, never pure** — Naimur `rgb(7,11,18)` (cool-tinted near-black), Soufiane `rgb(10,10,12)` (cool-tinted near-black), Juan Benito `rgb(30,27,24)` body on warm-tinted light bg, Abhijeet `rgb(248,250,252)` (cool-tinted near-white). **Milan is the exception**: pure white `rgb(255,255,255)` — but paired with full serif body type, validating the B4 escape-hatch rule extended.
3. **Hero-only home + content subpages** — Juan Benito is the cleanest instance since EMF B4: home `/en` (2,071px) is hero + stats + featured skills + featured projects only; depth lives at `/about`, `/projects`, `/contact`. Extends Jeremiah B1 / Nico B2 / Ajvad B3 / EMF B4 / Artur B5 lineage.
4. **Multi-page hybrid with route prefixes** — Juan Benito uses locale-prefixed routes (`/en/about`, `/en/projects`, `/en/contact`). Even with only English currently, the architecture is i18n-ready. Extends Ajvad B3 (Astro view transitions) / EMF B4 (Vue view transitions) / Luca Félix B5 (Next.js route transitions) to Next.js App Router with locale prefix.
5. **Letter-stagger H1 entrance** — Naimur's "CoderXDreamer" H1 is split into 13 letter spans (entrance stagger, completes by load). Second corpus instance (John Clayton B5 was first). Pattern consolidating.
6. **Floating pill-shaped sticky header** — Juan Benito's `sticky top-5 z-10 mt-5 mb-10 overflow-hidden rounded-full border p-4` + `backdrop-blur-lg` inner div + logo/nav/theme-toggle layout. Second corpus instance (John Clayton B5 was first). Pattern consolidating. Juan Benito's implementation is the cleaner of the two.
7. **Frosted-glass sticky header** — Juan Benito's `bg-neutral-1/50` + `backdrop-blur-lg` extends Phat B2 / John Clayton B5 frosted-glass pattern.
8. **Footer as design surface** — Milan's footer ("© 2026 Milan Milanović") is minimal but present; Juan Benito's footer ("© 2026 Juan Benito. Built with Next.js.") names the framework — extends the "site is alive" footer pattern. Soufiane has NO `<footer>` element (anti-pattern).
9. **Two-font developer-coded feel** — STILL NOT UNIVERSAL. Milan uses two serifs (Source Serif 4 body + Lora H1) — variant of the pattern with serif instead of mono. Juan Benito uses single Space Grotesk (loses the pattern). Naimur uses Montserrat + Rajdhani (no mono). Soufiane uses Inter only. Abhijeet uses system-ui. Only Milan achieves a two-font feel, and he does it with serif+serif.
10. **Complete OG metadata** — Naimur, Soufiane, Juan Benito all have complete OG tags (title, description, image, url, site_name, locale, type) + Twitter card. Milan has complete OG + Twitter + `og:updated_time` (though stale). **Abhijeet has ZERO OG tags** — only the second zero-OG portfolio in corpus (after John Clayton B5 — but John Clayton had complete OG, so Abhijeet is the first confirmed zero-OG).
11. **Multiple-H1 anti-pattern ABSENT in batch 6** — All 5 portfolios have exactly 1 H1. **First batch in corpus with zero multiple-H1 anti-patterns.** The corpus is converging on this baseline.
12. **System-default font anti-pattern** — Abhijeet confirms B1/B5 anti-pattern (`ui-sans-serif, system-ui, sans-serif`). 2/30 portfolios now (John Clayton B5, Abhijeet B6).
13. **Self-rated skill percentages** — Soufiane (Nextjs 90%, Reactjs 90%, SEO 80%, Docker 70%, Mongodb 70%, ...) and Abhijeet (HTML 95%, CSS 95%, JS 95%, React 90%, Redux 70%, Next.js 70%, Tailwind 90%, TypeScript 70%, Vite 80%, Node.js ...). Both in batch 6. Confirms as recurring anti-pattern, not a one-off. Internally inconsistent (Abhijeet rates HTML/CSS/JS all at 95% but React only 90% — anyone who knows JS at 95% should know React higher than 90%).

### Patterns that CONTRADICT or REFINE earlier findings

1. **Pure white escape hatch — REFINED.** EMF B4 demonstrated pure white with ultralight sans. Milan B6 demonstrates pure white with **full serif body type** (Source Serif 4 + Lora weight 900). The common factor is *typographic confidence* — non-default fonts at strong weights. Pure white works when typography carries the page. The rule "pure white only with ultralight display type" should be revised to: **"pure white only with non-default typography at strong weights (ultralight sans OR heavy serif body)"**.
2. **Hero motion that orients — REFINED.** Soufiane's "Scroll down" prompt in the hero is the first *intentional orientation cue* in the corpus (even though it's mis-marked as H2). It tells the user "there's more below". Not a motion, but a *text affordance* that orients. Refines the tension: hero orientation doesn't require motion — a text cue can do it. **Status: text-based orientation cue APPEARS (Soufiane); motion-based orientation still unsolved.**
3. **About section — DEFINITIVELY ANSWERED.** Juan Benito's `/about` combines: (a) metadata grid (BASED IN / ROLE / EDUCATION / LANGUAGES) as executive summary; (b) "My Story" first-person narrative as depth; (c) "What I Bring" 3-card value proposition; (d) "Have a project in mind?" CTA. This combines CV-style (Ghulam B3) + third-person (Luca B5) + first-person narrative (most of corpus) + structured metadata into one page. **Most complete About-page architecture in corpus.**
4. **Skills section — BEST ANSWER IN CORPUS.** Milan's skills section is prose organized by category: "Leadership & Management: Engineering Management, Team Scaling & Organizational Design, Mentorship & Coaching, Agile (Scrum, Kanban, SAFe), Product & Roadmap Planning." / "Architecture & Engineering: Software Architecture, Design Patterns, Microservices, Domain-driven Design (DDD), Event-driven & Service-oriented Architecture, REST/gRPC APIs, Clean Code, TDD." / "Cloud & DevOps: ..." / "Core Technologies: ...". This is the prose alternative to logo soup that B3 anti-pattern #16 called for. **Best skills section in corpus.** Abhijeet's skills category filter (All / Frontend / Backend / Tools) is the secondary answer for high-skill-count portfolios.
5. **Contact section — SPECTRUM ANSWERED.** Milan's plain-text contact ("email + location + inline social links", no form) is the senior-consultant extreme. Soufiane's "DIRECT LINE: (+212) phone" + LinkedIn alternative microcopy is the consultant variant. Juan Benito's "RESPONSE TIME: Usually within a day" + form is the modern-dev variant. Abhijeet's "Contact Information + Send a Message form" is the standard variant. **Spectrum: plain-text (senior) → phone+LinkedIn (consultant) → form+response-time (modern) → form+info (standard).**
6. **Light vs dark default — REFINED.** Batch 6 has 1 pure-white (Milan, with serif body), 1 warm-tinted light (Juan Benito), 1 cool-tinted light (Abhijeet), 2 cool-tinted dark (Naimur, Soufiane). Pure white works with serif body (new variant). Warm-tinted light works with card hero (Juan Benito). Cool-tinted light reads as default-shadcn (Abhijeet — anti-pattern). **Tiebreaker emerging: tinted-light wins for senior/consultant positioning; tinted-dark wins for energetic/developer-coded positioning. Pure white is reserved for typographic-confidence portfolios.**
7. **Custom cursor — STILL ABSENT.** Zero custom cursors in batch 6 (only legitimate cursor values: text on form inputs, default/pointer elsewhere). Status after 30 portfolios: **custom cursor that adds UX remains unsolved.**
8. **Scroll-driven section transitions — STILL ABSENT.** Soufiane has 2 fixed-position Canvas2D backgrounds (anti-pattern, not transitions). Abhijeet has 84 `pulse-subtle` continuous animations (not transitions). Juan Benito has 4 keyframes (entrance + hover, not transitions). Status: still unsolved.
9. **Sound — STILL ABSENT.** Zero `<audio>` elements in batch 6. Status: still unsolved after 30 portfolios.
10. **Real 3D scene — STILL ABSENT.** Zero `<canvas>` WebGL contexts in batch 6 (Soufiane's 2 canvases are 2d context, not webgl). Zero Three.js / Spline / `<model-viewer>` loaded on any portfolio page. Juan Benito has a "3D avatar" but it's a static rendered webp image, not a live 3D scene. Abhijeet mentions Three.js in Jarvis project tech stack but doesn't load it on the portfolio. Whilmar B3's WebGL2 particle field remains the lone 3D-adjacent element. Status: still unsolved.
11. **Hero motion that orients — STILL UNSOLVED (motion-wise).** Soufiane's "Scroll down" text prompt is a text-based orientation cue but not a motion. Naimur's letter-stagger H1 is decorative entrance. Juan Benito's pulsing-dot "Available" badge is a state indicator (orients the user to "this person is available") but not a hero motion. **Status: text-based orientation cue APPEARS (Soufiane "Scroll down" + Juan Benito "Available" badge); motion-based orientation still unsolved.**

### NEW patterns unique to batch 6

1. **Full serif body type** (Milan Milanovic) — first corpus instance of serif body type (Source Serif 4). Extends B4 pure-white escape hatch to serif variant. Reads as academic/editorial. Appropriate for author/CTO/senior positioning.
2. **Skills section as categorized prose** (Milan) — best skills section in corpus. Replaces logo soup (B3 anti-pattern #16) and self-rated percentages (B6 anti-pattern) with readable, scannable, semantically-meaningful prose organized by category.
3. **Contact section as plain text** (Milan) — "email + location + inline social links" with no form. Senior-consultant positioning. Reduces form friction. First corpus instance of entirely plain-text contact.
4. **Card-style hero** (Juan Benito) — hero is a `bg-secondary rounded-xl p-5 shadow-sm` card containing avatar + text + CTA, not the full-page hero. Card floats on the page background. First corpus instance of hero-as-card. Reads as "the hero is one piece of content among many" — appropriate for multi-page hybrid.
5. **"Available" pulsing-dot badge** (Juan Benito) — `<a href="/contact">` styled as a pill button with `animate-ping` dot. Animated availability indicator linking to contact. **CORPUS FIRST**. Cheapest "site is alive AND I am alive" signal. Extends Ajvad B3 / EMF B4 / Caiovisuals B5 / Naimur B6 "site is alive" lineage with a personal-availability dimension.
6. **Numeric stats block in hero** (Juan Benito) — "+3 YEARS IN THE FIELD" / "+8 PROJECTS COMPLETED" as bold numeric callouts. **CORPUS FIRST**. Real countable numbers replace subjective skill percentages. Direct credibility signal.
7. **About page metadata grid** (Juan Benito) — 4-cell metadata grid (BASED IN / ROLE / EDUCATION / LANGUAGES) as executive summary above narrative. **CORPUS FIRST**. Best About-page architecture in corpus.
8. **Name-as-link in H1** (Juan Benito) — "Hey, it's [Juan Benito]!" where the name is an `<a href="/about">` with dashed underline. The H1's most important word (the name) is also the navigation to the About page. Subtle, semantic.
9. **Hero "Scroll down" prompt** (Soufiane) — explicit text-based orientation cue. First corpus instance. (Soufiane mis-marks it as H2 — anti-pattern; the principle of explicit scroll-affordance is the pattern.)
10. **Phone number as "DIRECT LINE" in contact** (Soufiane) — "(+212) 641-40-48-42" with "DIRECT LINE" label. First corpus instance of phone-number-in-contact. Senior consultant-coded.
11. **Triple-role title** (Soufiane) — "Full Stack Developer | AI Systems Engineer | RAG & LLM Architect" in `document.title`. First triple-role title in corpus. For specialized devs, naming the specialization (RAG, LLM, LangChain) in the title is a differentiator.
12. **Emoji eyebrow** (Soufiane) — "✨ Senior Full Stack Developer & AI Engineer" with sparkle emoji as hero eyebrow. First corpus instance of emoji eyebrow. Friendly signal of seniority + specialization.
13. **Hero emoji badge "Blogs Available"** (Naimur) — small green "new" badge in hero pointing to a recently-shipped feature. Cheapest "site is alive" + navigation hint combination.
14. **Biblical Lorem Ipsum placeholder** (Soufiane) — "Fill appear won't may make moveth signs. Fourth. Good own. Green you're moveth us, lesser." KJV-style placeholder text in skills section. **NEW ANTI-PATTERN**. Religious-text placeholder shipped to production. Worse than `lorem ipsum` because it's identifiable as real text that looks like content until read.
15. **HTTP 500 on root URL with client-side-only render** (Juan Benito) — `curl -sIL` returns HTTP 500 ("Internal Server Error") but `agent-browser` renders the Next.js app via client-side routing. SSR/middleware is broken. **NEW ANTI-PATTERN**: deployed portfolio that doesn't SSR. Worse than Vinay B5 (404) in some ways — at least Vinay fails fast. Juan Benito fails only when JS doesn't run, so the failure is invisible to the dev's own browser. Recruiters / scrapers / link-preview bots that don't execute JS see "Internal Server Error".
16. **Skills category filter** (Abhijeet) — All / Frontend / Backend / Tools buttons filter the skills grid. **CORPUS FIRST for skills filtering** (Caiovisuals B5 had filter for projects). For high-skill-count portfolios, category filtering is the right UX.
17. **Duplicate video element bug** (Juan Benito) — 2 `<video>` elements in the same project card, both pointing to the same source. One is presumably the intended autoplay preview; the other is dead weight. New sub-category of dead-media-element anti-pattern.
18. **Bilingual content mixed in feed** (Milan) — Recent Posts includes Serbian-language post "Dobrodošli u vrli novi svet" alongside English posts. Extends Caiovisuals B5 (monolingual PT-BR) and EMF B4 (EN/ES toggle) to mixed-language feed. Cultural signal.
19. **Newsletter subscriber count as credibility** (Milan) — "helping 400,000+ engineers, managers, and architects through my newsletter". Specific number = credibility. First corpus instance of newsletter-reach-as-credibility-signal.
20. **Title with professional credentials** (Milan) — "Dr Milan Milanović — CTO & Author of Laws of Software Engineering". The book title is in the page title. First corpus instance of a published-book credit in the page title.
21. **Trilingual metadata** (Juan Benito) — "LANGUAGES: Spanish · English · Basque" in About page metadata grid. First trilingual metadata in corpus. Cultural + geographic specificity.

### Updated answers to the open tensions

| Tension | Status after batch 6 |
|---|---|
| **Hero motion that orients** | **REFINED.** Soufiane's "Scroll down" text prompt + Juan Benito's "Available" pulsing-dot badge are text-based / state-based orientation cues (not motion). Naimur's letter-stagger H1 is decorative entrance. **Motion-based hero orientation still unsolved after 30 portfolios. Text-based orientation cues now appear in 2/5 batch-6 portfolios.** Carry to batch 7. |
| **Custom cursor that adds UX** | Still unsolved after 30 portfolios. Zero custom cursors in batch 6 (only legitimate cursor values: text on form inputs, default/pointer elsewhere). **Carry to batch 7.** |
| **Scroll-driven section transitions** | Still unsolved. Soufiane's 2 fixed-position Canvas2D backgrounds are anti-pattern (not transitions). Abhijeet's 84 `pulse-subtle` continuous animations are noise (not transitions). Juan Benito's 4 keyframes are entrance+hover (not transitions). **Carry to batch 7.** |
| **Sound** | Still unsolved after 30 portfolios. Zero `<audio>` elements in batch 6. **Carry to batch 7.** |
| **Real 3D scene (not just particles)** | Still unsolved after 30 portfolios. Zero `<canvas>` WebGL contexts in batch 6. Juan Benito's "3D avatar" is a static rendered webp image. Abhijeet mentions Three.js in project tech stack but doesn't load it on the portfolio. Whilmar B3's WebGL2 particle field remains the lone 3D-adjacent element. **Carry to batch 7.** |
| **Code-as-interface, deeper** | Resolved by Artur Bień B5 (embedded generators inside articles). No new resolution in batch 6. |
| **Light vs dark default** | **TIEBREAKER EMERGING.** Tinted-light (Juan Benito warm, Milan pure-white-with-serif) wins for senior/consultant/author positioning. Tinted-dark (Naimur, Soufiane cool-near-black) wins for energetic/developer-coded positioning. Cool-tinted light (Abhijeet slate-50) reads as default-shadcn (anti-pattern). **Pure white reserved for typographic-confidence portfolios (EMF ultralight sans, Milan heavy serif body).** |
| **Premium case study template** | Definitively answered by Luca Félix B5. No new resolution in batch 6. |
| **About section: narrative vs CV vs both** | **DEFINITIVELY ANSWERED by Juan Benito B6.** About page = metadata grid (executive summary) + first-person narrative (My Story depth) + value-proposition cards (What I Bring) + CTA. Combines all prior patterns (CV-style B3, third-person B5, first-person most-of-corpus) into one structured page. |
| **Skills section** | **ANSWERED.** Milan B6: categorized prose ("Leadership & Management: ...", "Architecture & Engineering: ...", "Cloud & DevOps: ...", "Core Technologies: ..."). Best skills section in corpus. Abhijeet B6: category filter (All / Frontend / Backend / Tools) for high-skill-count portfolios. Both alternatives beat logo soup (B3 anti-pattern #16) and self-rated percentages (B6 anti-pattern). |
| **Contact section** | **SPECTRUM ANSWERED.** Milan B6 (plain text: email + location + inline social, no form) = senior consultant. Soufiane B6 (DIRECT LINE phone + LinkedIn alternative) = consultant. Juan Benito B6 (RESPONSE TIME + form) = modern dev. Luca Félix B5 (Slide-to-send + honeypot + reply-time) = premium. Abhijeet B6 (info + form) = standard. |
| **Project filtering / categorization** | Caiovisuals B5 (4-category project filter + total count) is the model for high-volume portfolios. Abhijeet B6 (skills category filter) extends the pattern to skills. |
| **Page/route transitions** | Confirmed — Juan Benito B6 uses Next.js App Router with locale-prefixed routes (`/en/about`, `/en/projects`, `/en/contact`). Extends EMF B4 (Vue), Ajvad B3 (Astro), Luca Félix B5 (Next.js Pages Router) to Next.js App Router with i18n. |
| **Commitment vs kitchen-sink** | Confirmed for batch 6. Milan (serif + pure white + academic density) and Juan Benito (warm light + Space Grotesk + card hero + multi-page + locale routing) both commit and feel senior. Naimur (4 fonts, 2 unused) and Abhijeet (system font + 84 pulse animations + bare title) do not commit. Soufiane is mid (commits to dark + Inter but ships placeholder text + duplicate canvas). |
| **Restraint vs richness** | Reframed as commitment-vs-kitchen-sink (B3). Confirmed. |

### Carried-forward open tensions for batch 7

- Custom cursor that adds UX (0 in 30)
- Scroll-driven section transitions (0 in 30)
- Sound (0 in 30)
- Real 3D scene (0 in 30 — Whilmar B3's particle field is the only 3D-adjacent element)
- Hero motion that orients, motion-based (0 in 30 — text-based orientation cues now appear in Soufiane B6 "Scroll down" + Juan Benito B6 "Available" badge)

### Strongest portfolio in batch 6

**Milan Milanovic — milan.milanovic.org.** Pure white + Source Serif 4 body + Lora H1 (weight 900) = first full-serif portfolio in corpus. Title "Dr Milan Milanović — CTO & Author of Laws of Software Engineering" is the most senior-titled portfolio in corpus. Skills section as categorized prose is the best in corpus. Contact section as plain text (email + location + inline socials, no form) is the senior-consultant extreme. Bilingual content (EN + RS) and newsletter subscriber count (400,000+) as credibility signals are corpus firsts. Loses minor points for 1 H2 / 13 H3 hierarchy leak and Hugo Blox template base.

Runner-up: **Juan Benito — juanbenito.vercel.app.** Warm-tinted light + Space Grotesk + card-style hero + floating pill-shaped sticky header + multi-page hybrid with locale routing. Four corpus-first patterns: (1) "Available" pulsing-dot badge; (2) numeric stats block in hero (+3 years, +8 projects); (3) About page metadata grid (BASED IN / ROLE / EDUCATION / LANGUAGES); (4) name-as-link in H1. Extends Luca Félix B5 "Replies in 1-2 days" → "RESPONSE TIME: Usually within a day". Loses points for: HTTP 500 on root URL (SSR broken), bare "Juan Benito" title, single-font system, duplicate video element bug.

### Weakest portfolio in batch 6

**Abhijeet Singh Parihar — abhijeet-singh-parihar-portfolio.vercel.app.** Bare "Portfolio" title (B1 anti-pattern), system-ui font (B1/B5 anti-pattern), self-rated skill percentages (B6 anti-pattern), 0 OG metadata, default shadcn blue, 84 `pulse-subtle` continuous animations (visual noise), "Hi,I'm" typo in H1, "View My work" capitalization typo. Only positive: skills category filter (corpus-first for skills). Lowest originality in batch 6 (1/5).

Runner-up weak: **Soufiane El Hamri — soufiane-elhamri.com.** H1 case inconsistency ("I'm soufiane El hamri"), 2 simultaneous fixed-position Canvas2D backgrounds (B3 anti-pattern recurred), 16 H2s (most are blog titles that should be H3), "Scroll down" marked as H2 (decorative text as heading), Biblical Lorem Ipsum placeholder text shipped to production (NEW anti-pattern), self-rated skill percentages, no `<footer>` element. Loses points despite comprehensive OG metadata and AI/LLM specialization angle.
