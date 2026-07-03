# Batch 08 — Portfolios 36–40 (Round 2, Batch 8)

**Analyzed**: 2026-07-03
**Portfolios**:
36. Himavanth Kumar Perni — http://himavanth-kumar-perni-portfolio.vercel.app
37. Amit Kumar Raj — https://amitkumarraj.vercel.app
38. Ganesh Angadi — https://ganeshangadi.online
39. Hungry Bear Studio — https://www.hungrybearstudios.com
40. Bhavesh Gudlani — https://bhaveshgudlani.me

**Method**: For each portfolio — verified reachability via `curl -sIL` (all 5 returned HTTP/2 200; Bhavesh on GitHub Pages, Hungry Bear on Weebly, the other three on Vercel). Opened in `agent-browser` at 1440×900. Captured hero + 3–5 scroll screenshots per site. Ran `agent-browser eval` to extract computed styles (bg-color, color, font-family, font-size, font-weight, line-height), heading inventory (H1–H3), section ordering, image/canvas/svg/iframe/video/audio counts, keyframe names, custom-cursor audit, framework hints (Next.js App Router / Weebly / GitHub Pages static), social-link inventory, scripts, OG metadata. For Bhavesh, downloaded HTML and parsed inline JS to verify the custom-cursor + scroll-progress-bar logic; for Himavanth, inspected Next.js chunks to confirm the embedded file-converter tool.

**Carried-forward open tensions (after batch 7, 35 portfolios)**:
- Custom cursor that adds UX (0 in 35)
- Scroll-driven section transitions (0 in 35)
- Sound (0 in 35)
- Real 3D scene (geometric 3D, not just shaders) (0 in 35 — 3 shader/WebGL instances)
- Hero motion that orients beyond input-reflection (Dale B7 fluid sim reflects mouse input; an orientation motion that tells the user *where to go next* still unsolved)

---

## Per-Portfolio Analysis

### 36. Himavanth Kumar Perni — http://himavanth-kumar-perni-portfolio.vercel.app
- **Reachable**: yes (HTTP/2 200, Vercel, Next.js App Router with RSC + Next-Router-State-Tree headers).
- **First impression**: A dark-slate Next.js portfolio with a hero full-bleed background image (uwp4442486.jpeg) overlaid by a Canvas2D particle field. Feels like a standard "developer portfolio template" until you scroll past the projects and find a real working file-converter tool embedded in the page.
- **Visual hierarchy**: H1 "Hi, I'm Himavanth Kumar Perni" 60px weight 700 centered on hero over the image. Subtitle "A Full-Stack Developer" 30px. Two CTAs ("View My Work" white pill / "Contact Me" white-bordered pill). Sections then stack vertically: About → Projects (10 cards) → Experience (4 cards) → Certificates → Spotify playlist → File Converter → Contact. The converter section is a surprise 7th section that breaks the conventional ordering.
- **Layout composition**: Single-page home. Hero full-screen with bg image + canvas particles overlay. Subsequent sections are conventional vertically-stacked Tailwind cards. No subpages.
- **Typography**: H1 `Inter, "Inter Fallback"` 60px weight 700. Body `Inter` 16px. Single-font Inter throughout — default Next.js + Tailwind stack. No display font, no mono eyebrow. Reads as "I shipped the default."
- **Color palette**: Body bg `rgb(17, 24, 39)` (Tailwind gray-900 — tinted-dark navy). Text `rgb(243, 244, 246)` (gray-100). Accent `rgb(37, 99, 235)` (Tailwind blue-600). The hero CTAs use `bg-white text-blue-600` — inverts the bg/fg relationship.
- **Spacing**: Balanced — standard `py-16`/`py-20` Tailwind rhythm.
- **Hero section**: Full-screen `<section class="relative h-screen">` with `<img>` fill background + `<canvas class="absolute inset-0">` 1280×577 overlay. Centered white text on top. No metadata strip, no eyebrow, no availability badge. Two CTAs.
- **Navigation**: Standard top header with `HKP` logo (initials) + 5 text links (About/Projects/Experience/Certificates/Contact). Not sticky (no backdrop-blur).
- **Section ordering**: Hero → About Me → Projects → Experience → Certificates → "Listen To My Playlist🎶🎶" (Spotify embed) → "Free Unlimited 📁 Converter" → Contact Me → Footer.
- **Scroll experience**: Standard vertical scroll. No parallax, no scroll-triggered reveals observed.
- **Animations & motion**: 6 keyframes only (restraint signal). Canvas2D particles drift across the hero. No scroll-triggered animations.
- **Hover interactions**: Hero CTAs `hover:bg-blue-100` / `hover:bg-white hover:text-blue-600`. Standard.
- **Background effects**: Hero bg image + Canvas2D particle overlay (decorative — extends the particle-field-on-hero pattern from Whilmar B3, but on Canvas2D not WebGL2).
- **3D elements**: No — Canvas2D particles only.
- **Responsiveness perception**: Tailwind responsive classes (`sm:` / `md:` / `lg:`) throughout. Should adapt well.
- **Performance perception**: 21 scripts (Next.js chunks). 15 images. Heavy by corpus standards — but no third-party widgets beyond the Spotify iframe. No analytics visible in DOM.
- **Emotional feeling**: Serious / conventional / template-default. The dark slate + blue accent reads as "developer portfolio default #37."
- **Originality**: 2/5 — standard dark-portfolio template; the embedded file-converter tool is the only original move (and it ships as a second H1).
- **What works**:
  - **Embedded "Free Unlimited 📁 Converter" tool** — real client-side file conversion (image / audio / video formats accepted) embedded directly in the portfolio. Second corpus instance of the "embedded live Generator" pattern (Artur Bień B5 was first). Code-as-interface signal — proof the dev can ship a real tool, not just a static site.
  - Canvas2D particle field over hero image is restrained (50-ish particles, no performance cost).
  - Title is custom: "Himavanth Kumar Perni - Full-Stack Developer" — no anti-pattern.
- **What does NOT work**:
  - **Second H1 "Free Unlimited 📁 Converter"** — anti-pattern #12 (multiple H1s). The converter's heading should be H2, not H1. Destroys document outline.
  - **Spotify playlist section embedded between Certificates and a File Converter** — two unrelated "extra" sections tacked on at the end reads as cluttered, not personality. The playlist section title "Listen To My Playlist🎶🎶" has emoji doubled (🎶🎶) and feels off-brand for a senior full-stack portfolio.
  - **Single-font Inter, no display font, no mono eyebrow** — reads as "default Next.js + Tailwind." Two-font developer-coded feel completely missing.
  - **No `theme-color` meta, no `<meta name="theme-color">`** — minor mobile-tab polish missing.
- **Notable patterns to consider**:
  - **Embedded real file-converter tool** as a portfolio section — extends Artur Bień B5 embedded live Generators pattern to a different domain (file processing vs CSS art). Confirms "embed a working tool you built" as a recurring code-as-interface pattern. **ADOPT the principle** (embed a real working tool) — but ship it under an H2, not a second H1.
  - **Spotify playlist iframe embed** — first corpus instance of audio embed (though it's third-party content, not a custom sound design). Does not resolve the open sound tension (still 0 instances of original sound design). **Don't adopt** — reads as filler.

---

### 37. Amit Kumar Raj — https://amitkumarraj.vercel.app
- **Reachable**: yes (HTTP/2 200, Vercel, Next.js App Router).
- **First impression**: A pure-white Tailwind portfolio with a wave SVG background and an emerald-green H1. The hero reads as a generic "Hi I am / [name] / I am a Full Stack Developer" template — until the projects section starts spawning 90+ nested `<section>` elements, revealing fragmented DOM structure.
- **Visual hierarchy**: H1 "Amit Kumar Raj" 48px weight 700 emerald-700. H2 "I am a Full Stack Developer" 36px. Paragraph (very long — 3 sentences about Full-Stack skills). Then 5 social icons. Then 8 project H3s (KabadiKing, StudyNotion, Wanderlust, Online Auction, Weather Forecasting, Bharath Chats, BrainSpark Quizz, EcoNexus) — generic CRUD app names with no narrative.
- **Layout composition**: Single-page home. Hero `max-w-3xl` left-aligned with wave SVG bg. Projects appear in cards. Footer with hometown/phone/social/credits.
- **Typography**: H1 `__Inter_f367f3` (Next.js font loader, Inter). H1 48px weight 700. Body Inter. Single-font Inter. The emerald-700 H1 is the only color tell.
- **Color palette**: Body bg `rgba(0, 0, 0, 0)` (transparent — actual white from bg image). Text `rgb(0, 0, 0)`. H1 `rgb(4, 120, 87)` (Tailwind emerald-700). Accent on buttons `rgb(4, 120, 87)` emerald and `rgb(185, 28, 28)` red — dual accent without a system.
- **Spacing**: Tight — `max-w-3xl` content column with `m-4` margins. Footer dense with multiple inline blocks.
- **Hero section**: `<p>👋 Hi, I am</p><h1>Amit Kumar Raj</h1><h2>I am a Full Stack Developer</h2><p>[long paragraph]</p>` then 5 social SVG icons. Background: wave SVG from "Get Waves" generator (`background/bg2.svg`).
- **Navigation**: Header with 5 text links (Home/About/Projects/Contact/Hire Me). "Hire Me" is the only CTA — extends corpus pattern of one CTA in nav.
- **Section ordering**: Hero → Projects (8 cards) → Contact → Footer (with Hometown, Phone, 5 Social Links, Image Credits, Copyright).
- **Scroll experience**: Standard vertical scroll. No scroll-triggered animations.
- **Animations & motion**: 7 keyframes (mostly Font Awesome icon animations and hover translate).
- **Hover interactions**: Social icons `hover:-translate-y-1.5` + color swap. Standard.
- **Background effects**: Wave SVG (generated from getwaves.io — credited in footer as "Get Waves"). Pure-white bg otherwise. No canvas, no particles.
- **3D elements**: No.
- **Responsiveness perception**: Tailwind responsive (`lg:` / `text-2xl`/`text-xl` etc.). Should adapt.
- **Performance perception**: 26 scripts (heaviest in batch). Pure-white bg. Fast despite script count (Next.js static).
- **Emotional feeling**: Generic / beginner-coded / template-default. The emerald accent + wave SVG + generic project names reads as "I just finished a bootcamp."
- **Originality**: 1/5 — fully generic. No signature move, no original content architecture, no display font, no metaphor.
- **What works**:
  - Has proper OG metadata (`og:title`, `og:image`) — better than Jay B7 / Abhijeet B6 zero-OG anti-pattern.
  - "Hire Me" nav CTA is a single clear call-to-action.
  - Title is descriptive: "Amit kumar Raj- Full Stack Web Developer" — though lowercase 'k' in 'kumar' is a minor typo.
- **What does NOT work**:
  - **90+ nested `<section>` elements** — extreme DOM fragmentation. Each project card is wrapped in 3-4 nested `<section>` tags. Reads as template cruft, not semantic structure. (Probably an artifact of copying a layout template.)
  - **Wave SVG background** from "Get Waves" generator — credited in footer (honest) but reads as default-y background choice. Not original.
  - **Generic project names** (KabadiKing Scrap Marketplace, StudyNotion E-Learning, Wanderlust Travels, Online Auction System, The Weather Forecasting, Bharath Chats, BrainSpark Quizz, EcoNexus) — all read as bootcamp tutorial projects. No narrative for any of them.
  - **Long hero paragraph** (3 sentences, 60+ words) — violates hero-as-brand-statement pattern. Reads as a CV objective statement.
  - **Single-font Inter, no display font, no eyebrow** — same anti-pattern as Himavanth B8.
  - **Title typo**: "Amit kumar Raj" (lowercase 'k') — minor but signals carelessness.
- **Notable patterns to consider**:
  - **Wave SVG background from a generator** (getwaves.io) — first corpus instance of a wave SVG bg. Pattern: a generated SVG shape as background. **Don't adopt** — reads as default-y unless paired with strong typography. Ganesh B8 (also pure white, also serif) shows how to make pure-white work.
  - **"Hire Me" as nav CTA** — extends single-CTA-in-nav pattern (Juan Benito B6 / Vinit B7 "Available" badge). Variant wording.

---

### 38. Ganesh Angadi — https://ganeshangadi.online
- **Reachable**: yes (HTTP/2 200, Vercel, Next.js). Subpages: /blog (linked in nav).
- **First impression**: A pure-white DevOps portfolio with Playfair Display serif body and a bright orange accent. Unix command-line metaphor committed fully — every section opens with a `$` command (`$ man ganesh`, `$ history | grep "milestones"`, `$ ls -lh /opt/projects`, `$ skills --level=expert`). The H1 is `.sr-only` (screen-reader-only), with the visible name rendered as an H3 in monospace. Reads as confident + system-thinker.
- **Visual hierarchy**: Visible name "GANESH ANGADI" as H3 in monospace, weight 800, color `#ff7a00` orange. Eyebrow `$ man ganesh` in monospace. Below: large "System Thinker" H2 in Playfair Display weight 800. Profile photo left (4:5 aspect). About-card content right. Subsequent sections each have a `$`-prefixed monospace eyebrow → large H2 → content.
- **Layout composition**: Single-page home (with /blog subpage). Pill-shaped floating frosted-glass nav header at top center. About section with photo + content card. Then vertical stack: Achievements & Awards / Recognition & Experience / DevOps Projects / Currently Building / DevOps Skills / System Architecture & Engineering Principles (with 6 H3 principles) / Services / Contact.
- **Typography**: Body `Playfair Display` (serif!). H1 is `.sr-only` (16px weight 400 Inter — visually hidden, screen-reader-only). Visible H2 "System Thinker" 48px Playfair weight 800. Visible name H3 in `monospace` weight 800 color accent. Two-font system achieved via Playfair Display serif body + monospace eyebrows — extends Milan B6 full-serif portfolio pattern with a more pragmatic DevOps persona.
- **Color palette**: `--bg: #fff` (pure white). `--card-bg: #f9f9f9` (near-white card). `--accent: #ff7a00` (orange). `--fg` near-black. Single accent. Pure-white escape hatch justified by Playfair Display serif body (extends Milan B6 / EMF B4 pure-white-with-strong-typography pattern).
- **Spacing**: Balanced — `padding: 100px 24px` on sections, `gap: 12px-48px` in cards.
- **Hero section**: About section is the visual hero. `$ man ganesh` eyebrow (monospace, accent color, `.flicker` class for terminal flicker animation). Visible name "GANESH ANGADI" as H3 in monospace weight 800 accent color. Photo + bio card. Then `$ whoami — DevOps Engineer | System Thinker` tagline.
- **Navigation**: **Pill-shaped floating frosted-glass nav header** at top center (`position:fixed; top:16px; left:50%; transform:translateX(-50%)` with `border-radius:999px; backdrop-filter:blur(12px); box-shadow:0 2px 16px rgba(0,0,0,0.18)`). 8 text links (About/Awards/Projects/Stack/Thinking/Services/Contact/Blog). Monospace font, 12px weight 500-600. Extends John Clayton B5 / Juan Benito B6 / Ohk Soe Htet B7 pill pattern. Uses an animated active-link background pill that slides between links (`<div>` with `position:absolute; left:9px; width:57.9375px; background:var(--accent); opacity:0.15`).
- **Section ordering**: Header → About (`$ man ganesh`) → System Thinker (positioning statement) → Achievements & Awards (`$ history | grep "milestones"`) → Recognition & Experience → DevOps Projects (`$ ls -lh /opt/projects`) → Currently Building → DevOps Skills (`$ skills --level=expert`) → System Architecture (`$ cat /etc/sysctl.conf`) → Services (`$ systemctl list-units --type=service`) → Contact (`$ ping -c 4 ganesh.online`) → Footer (`$ echo "Built to last, not to impress."`).
- **Scroll experience**: Standard vertical scroll. Section reveal animations via inline `opacity:0; transform:translateY(20px)` initial state, transitioned to visible (likely via IntersectionObserver — though the rendered HTML shows `opacity: 1; transform: none` on inspected elements, suggesting JS-applied final state).
- **Animations & motion**: 6 keyframes only. `.flicker` class on terminal eyebrows — likely a subtle opacity flicker (terminal-CRT effect).
- **Hover interactions**: Nav links color swap to accent on hover. Project cards lift.
- **Background effects**: Pure white. No canvas, no particles, no grain. 1 image (profile photo).
- **3D elements**: No.
- **Responsiveness perception**: Inline-style responsive (`clamp(28px, 4vw, 48px)` font sizes, `flex-wrap: wrap` on about-card). Should adapt.
- **Performance perception**: 23 scripts (Next.js chunks). 1 image (profile). Lightweight. Loads fast.
- **Emotional feeling**: Confident / senior / system-thinker-coded. The DevOps persona is the personality tell.
- **Originality**: 4/5 — fully committed Unix-DevOps metaphor on a pure-white serif canvas. Distinct from Triet B1 (single-font Unix shell on tinted-dark) by pairing the metaphor with serif body + pure-white + bright orange accent.
- **What works**:
  - **Unix command-line metaphor** committed fully — every section eyebrow is a `$` command relevant to the section's content (`$ man ganesh` / `$ history | grep "milestones"` / `$ ls -lh /opt/projects` / `$ skills --level=expert` / `$ cat /etc/sysctl.conf` / `$ systemctl list-units --type=service` / `$ ping -c 4 ganesh.online`). Extends Triet B1 Unix-shell metaphor with section-specific commands. Most semantically-coherent metaphor in corpus.
  - **`.sr-only` H1 + visible H3 name in monospace** — first corpus instance of using `.sr-only` to hide a clean SEO H1 while rendering the visible name as a styled element. Solves the "name as the visual hero" problem without breaking document outline. **ADOPT**.
  - **Pill-shaped floating frosted-glass nav** with animated sliding active-link background — extends B5/B6/B7 pill pattern with sliding active indicator. Cleanest pill implementation in corpus.
  - **Pure-white + Playfair Display serif + bright orange accent** — confirms pure-white escape hatch works with serif body (extends Milan B6 full-serif + EMF B4 ultralight-sans escape-hatch variants to a third variant: serif body on pure-white with strong accent).
  - **Footer as terminal command**: `$ echo "Built to last, not to impress."` — extends footer-as-design-surface pattern with a Unix-echo footer slogan. Corpus first.
  - **System Architecture & Engineering Principles section** with 6 H3 principles (Think in control flow / Model failure states / Design for observability / Prefer explicit over magical abstractions / Break systems to understand them / A deploy without a rollback is a gamble) — first corpus instance of "engineering principles as content." Reads as a manifesto. Extends Vinit B7 /practices pattern (curated links) to original authored principles. **ADOPT**.
  - **OG metadata complete**: `og:title`, `og:image=profile.jpg`, descriptive meta description.
- **What does NOT work**:
  - **H1 is `.sr-only`** — technically accessible (screen readers see it) but visually absent. While clever, it means the visible document outline starts at H2. Slight risk of confusing SEO crawlers that prioritize visible H1. (Still better than 0 H1 / 9 H1 anti-patterns.)
  - **Title "Ganesh Angadi | DevOps Engineer Portfolio"** includes "Portfolio" — extends the bare "Portfolio" title anti-pattern to "Portfolio"-in-title variant. Drop the word "Portfolio."
  - **No third-party credibility signals** — no GitHub stars, no Wakatime, no cert images. Relies entirely on text claims ("1st place MCP hackathon winner" in meta description, but not visually emphasized on the page).
  - **Mixed serif body + monospace eyebrows + sans H1 (Inter, hidden)** — three font families technically. Risk of feeling scattered. In practice reads as "serif body + mono eyebrows" because the Inter H1 is invisible.
- **Notable patterns to consider**:
  - **`.sr-only` H1 pattern** — first corpus instance. Hides a clean SEO H1 ("Ganesh Angadi - DevOps Engineer") from visual display while rendering the visible name as styled monospace H3. Solves the "visible name should be the visual hero but document outline needs a real H1" tension. **ADOPT** as accessibility-correct way to have a visual hero name without breaking document outline.
  - **Section-specific Unix command eyebrows** — `$ man` / `$ history` / `$ ls -lh` / `$ cat` / `$ systemctl` / `$ ping` / `$ echo` — each command semantically relevant to the section. Extends Triet B1 generic Unix-shell metaphor to section-aware commands. Most semantically-coherent metaphor in corpus. **ADOPT**.
  - **Footer as terminal echo slogan** — `$ echo "Built to last, not to impress."` in footer. Extends footer-as-design-surface pattern with a Unix-echo footer slogan that doubles as a personal motto. **ADOPT**.
  - **Engineering Principles as authored content** — 6 H3 principles in a dedicated section. Extends Vinit B7 /practices curated-links pattern to authored original principles. Reads as a manifesto. **ADOPT**.
  - **Animated sliding active-link background** in pill nav — extends B5/B6/B7 pill pattern. Cleanest implementation. **ADOPT**.
  - **Pure-white + Playfair Display + bright orange accent** as a fourth pure-white escape-hatch variant (after EMF B4 ultralight-sans, Milan B6 heavy-serif, Ganesh B8 serif-body-with-mono-eyebrows).

---

### 39. Hungry Bear Studio — https://www.hungrybearstudios.com
- **Reachable**: yes (HTTP/2 200, Cloudflare-fronted Weebly). Multi-page (Work/Blog/Resume/Log In).
- **First impression**: A Weebly-hosted motion-design studio portfolio — NOT a developer portfolio. The home page is a single full-screen grid of 25 commercial animation projects (Right Box, Dashing, Twizzlers Frankenstein, Lego Starwars, Yahoo Mail, etc.). No personal narrative, no "About Me," no skills section. Different category from the other 39 portfolios in corpus.
- **Visual hierarchy**: No H1. The site name "Hungry Bear studios" appears as a logo link top-left. 25 project titles are H3s in a grid. Single H2 "CONTACT" at the bottom. Pure visual portfolio — the work speaks for itself.
- **Layout composition**: Single-page home with multi-page subpages. Top bar with logo + 4 nav links (Work/Blog/Resume/Log In). Then a grid of 25 project thumbnails, each linking to its own subpage. Then a Contact section at the bottom. Weebly template-driven layout.
- **Typography**: Body `"Open Sans", Helvetica, sans-serif` — default web font. No display font, no mono. Weebly-template default.
- **Color palette**: Pure white `rgb(255, 255, 255)` bg, black text. No accent color (all color comes from project thumbnails themselves).
- **Spacing**: Grid-dense — project thumbnails fill the viewport with small gutters.
- **Hero section**: No hero section per se — the home page IS the work grid. The first viewport shows ~6 project thumbnails.
- **Navigation**: Top nav with logo + 4 text links (Work/Blog/Resume/Log In). Not sticky. Weebly default. The "Log In" link is a Weebly site-owner login — anti-pattern for a public portfolio.
- **Section ordering**: Top nav → Work grid (25 projects) → Contact H2 → Footer.
- **Scroll experience**: Standard vertical scroll through the work grid. No animation, no parallax.
- **Animations & motion**: 1 keyframe only (extreme restraint — but this is because the site is so simple, not because of design discipline).
- **Hover interactions**: Project thumbnails likely have a hover state (didn't observe explicit hover effects).
- **Background effects**: Pure white. No canvas, no particles. 24 images total (all project thumbnails).
- **3D elements**: No.
- **Responsiveness perception**: Weebly template responsive — should adapt.
- **Performance perception**: 30 scripts (Weebly analytics + ad/tracking scripts — heaviest script count in corpus). Slow load.
- **Emotional feeling**: Commercial / studio / work-gallery. Reads as "we are a studio that has shipped 25 commercials."
- **Originality**: 1/5 — generic Weebly template. No signature design choice. The 25 project list is the only value, but it's presented without design.
- **What works**:
  - **Work-as-portfolio** — the entire site IS the work. No "About Me," no skills, no experience section. The work speaks for itself. Studio portfolio pattern.
  - Multi-page architecture (each project gets its own subpage with production credits "Produced at Carbon VFX / Tiny Milk / Nathan Love / Hornet Inc / Three [Legos]" — extends case-study template pattern from Ghulam B3 / Luca Félix B5 to studio subpages).
  - Production-credit attribution per project — clean, honest, professional.
- **What does NOT work**:
  - **0 H1 elements** — anti-pattern #13 (zero headings). Page has 1 H2 + 25 H3 but no H1. Destroys document outline.
  - **"Log In" link in public nav** — Weebly site-owner login link visible in public nav. Anti-pattern: corporate-website cruft in a portfolio.
  - **Title "Hungry Bear studios - Hungry Bear Studios Projects"** — redundant ("Hungry Bear studios" + "Hungry Bear Studios Projects"). Reads as auto-generated.
  - **30 scripts** — heavy Weebly analytics + tracking scripts. Slow.
  - **Default Open Sans + pure white + no accent** — Weebly template default. Reads as "I didn't design this."
  - **No "About" page or studio narrative** — even studios need a brand statement. The complete absence of any narrative reads as evasive, not confident.
- **Notable patterns to consider**:
  - **Studio portfolio vs individual portfolio** — first corpus instance of a studio portfolio. Key difference: work-as-portfolio (every project is a subpage), no personal About section, no skills section, no resume-style experience. The studio's identity is the work itself. **For individual portfolio, don't adopt** — individuals need narrative + skills + experience. But the "work grid as home page" pattern is interesting for high-volume portfolios.
  - **Production-credit attribution per project** ("Produced at Carbon VFX" / "Produced at Nathan Love") — clean, honest way to credit collaborative work. Extends Luca Félix B5 case-study template to multi-employer studio context. **ADOPT** for any project done at an agency/employer.
  - **Weebly site-owner login in public nav** — anti-pattern. Don't ship site-admin links in public nav. **NEW ANTI-PATTERN**.

---

### 40. Bhavesh Gudlani — https://bhaveshgudlani.me
- **Reachable**: yes (HTTP/2 200, GitHub Pages static site). Single-page.
- **First impression**: A tinted-dark (`#0D0B1F`) AI/ML engineer portfolio with a custom cursor (instant dot + eased ring), a Canvas2D geometric-shape particle field, and a scroll progress bar in gradient lime→pink→cyan. The H1 reads "BHAVESH / GUDLANI / Builds complete systems" — name-as-H1 with role phrase embedded. Lightest script count in corpus (3 scripts only).
- **Visual hierarchy**: H1 split into 3 spans on separate lines — "BHAVESH / GUDLANI / Builds complete systems" — Syne weight 800 66.56px. Subtitle paragraph with `<strong>` highlights on "backend APIs and databases" and "AI pipelines and production deployments." Two CTAs: "See My Work" (lime) + "Get in touch ↗" (bordered). Then projects (5 H3s: KYRON, LLM Engine, Self-Healing RAG, Jal Vaani, SACH-AI). Then Skill Stack, Work Experience, Education & Certifications, Contact.
- **Layout composition**: Single-page home with 6 sections (Hero / Tagline / Skill Stack / Work Experience / Education / Contact). Hero is two-column (left: name+sub+CTAs / right: implicit). Custom cursor + progress bar overlay. Canvas2D particle field as full-page bg.
- **Typography**: H1 `Syne, sans-serif` weight 800 66.56px. Body `DM Sans, sans-serif` 16px. Two-font system: Syne display + DM Sans body. Both are contemporary Google Fonts — Syne is the unusual display choice (geometric, slightly quirky).
- **Color palette**: Body bg `rgb(13, 11, 31)` (`#0D0B1F` deep navy/purple — tinted-dark). Text `rgb(245, 242, 236)` (`#F5F2EC` warm off-white — cream-tinted). **Tri-accent system**: lime `#C6FF00`/`#9DC700`, pink `#D63868`/`#FF4D8C`, cyan `#00A8B8`/`#00F0FF`, plus `var(--volt)` for progress bar gradient. Canvas particle colors: lime/pink/cyan/yellow/mint/purple (6 colors). Extends Vinit B7 dual-accent system to tri-accent.
- **Spacing**: Tight hero, balanced sections. Section padding via clamp.
- **Hero section**: Two-column hero (`.hero-left` with H1/sub/CTAs; right side implicit). H1 has 3 spans on 3 lines. Subtitle paragraph with bolded keywords. Two CTAs (primary lime + secondary bordered with ↗ arrow). Below hero: project cards.
- **Navigation**: Top nav with 5 text links (About/Projects/Skills/Experience/Contact Me). Shrinks on scroll (`scrollY > 50` adds `.on` class). Mobile hamburger menu.
- **Section ordering**: Hero (BHAVESH GUDLANI Builds complete systems) → Tagline section ("Full-stack, AI/ML, backend, mobile – all of it.") → Skill Stack → Work Experience → Education & Certifications → Contact ("Let's build something").
- **Scroll experience**: **Scroll progress bar** at top (`#pb` 2px tall, gradient lime→pink→cyan→volt, `transform:scaleX` updated on scroll based on `scrollY / (scrollHeight - innerHeight)`). First corpus instance of explicit scroll progress indicator. Plus IntersectionObserver-based scroll reveal with `.rv` class. Plus skill-tags stagger animation via separate IntersectionObserver.
- **Animations & motion**: 9 keyframes (moderate). Canvas2D particle field: 50 floating geometric shapes (circle/square/triangle/diamond) in 6 bright colors, pulsing alpha (Math.sin-based), rotation, drift velocity. **Custom cursor**: `#cd` direct-follow dot (8px lime, `mix-blend-mode: difference`) + `#cr` eased-lerp ring (32px white border, lerps with `rx += (mx-rx)*.11`). On hover over interactive elements, `#cd` grows to 11px square (3px border-radius) and `#cr` grows to 48px with lime border. Touch devices (`@media(hover:none)`) hide the custom cursor and restore `cursor: auto`. **First corpus instance of a custom cursor that adds UX.**
- **Hover interactions**: Custom cursor hover state (described above). Project cards have hover transitions. Nav buttons have `transform .2s var(--snap)`.
- **Background effects**: **Canvas2D geometric particle field** (`#bgc` 1280×577, full-page bg, 50 shapes, 6 colors, pulsing). Decorative — `pointer-events:none` likely. Not WebGL — uses Canvas2D, so it's lighter than Whilmar B3 / Ohk Soe Htet B7 / Dale B7 WebGL canvases.
- **3D elements**: No (Canvas2D only).
- **Responsiveness perception**: Custom cursor hidden on touch devices via `@media(hover:none)`. Mobile hamburger menu. Skill tags wrap. Project cards have `@media(max-width:1024px)` adjustments. Responsive.
- **Performance perception**: **3 scripts only** (lightest in corpus — pure static site on GitHub Pages). No Next.js / React runtime. No analytics. Loads instantly.
- **Emotional feeling**: Energetic / futuristic / playful-technical. The bright tri-accent on dark navy reads as confident + AI-native.
- **Originality**: 5/5 — strongest portfolio in batch 8. Three corpus-first patterns: (1) custom cursor that adds UX (instant dot + eased ring + hover state + mix-blend-mode + touch-device fallback); (2) scroll progress bar in gradient; (3) Canvas2D geometric particle field (extends Whilmar B3 / Ohk Soe Htet B7 / Dale B7 WebGL particle field to Canvas2D variant). Plus: tri-accent system, name-as-H1 with role phrase embedded, Syne display font, 3-script lightweight static site.
- **What works**:
  - **Custom cursor that adds UX** — `#cd` (8px lime dot with `mix-blend-mode: difference` for visibility on any bg) + `#cr` (32px white-border ring, eased lerp following). Hover over interactive elements triggers `.hov` class on body: dot grows to 11px square, ring grows to 48px with lime border. Touch devices (`@media(hover:none)`) hide the cursor and restore `cursor: auto`. Three layers of UX value: (1) constant visible feedback, (2) instant dot for precision, (3) eased ring for confirmation, (4) hover state for interactivity signal, (5) mix-blend-mode for accessibility on any background. **FIRST CORPUS INSTANCE. RESOLVES OPEN TENSION.**
  - **Scroll progress bar** — `#pb` 2px tall, fixed top, gradient `lime → pink → cyan → volt`, `transform:scaleX` updated on scroll. First corpus instance of explicit scroll progress indicator. Cheap orientation cue.
  - **Name-as-H1 with role phrase embedded** — "BHAVESH / GUDLANI / Builds complete systems" — three spans on three lines. Extends Juan Benito B6 name-as-link-in-H1 to name-as-H1-with-role-phrase. Reads as confident + role-clear.
  - **Tri-accent system** — lime / pink / cyan as a coherent palette. Extends Vinit B7 dual-accent to tri-accent. Used purposefully: lime for primary CTAs + cursor + progress-bar start, pink for secondary accents + progress-bar middle, cyan for tertiary accents + progress-bar end.
  - **3-script static site on GitHub Pages** — lightest in corpus. No framework runtime. No analytics. Pure HTML+CSS+JS. Loads instantly. Extends Triet B1 / Jeremiah B1 lightweight pattern to its extreme.
  - **JSON-LD schema.org Person + WebSite** with comprehensive structured data (jobTitle, address, alumniOf, hasOccupation, knowsAbout, sameAs) — best-structured-data portfolio in corpus after Vinit B7.
  - **Footer**: "Bhavesh Gudlani · Solapur, India · 2025 / Made to be remembered – thanks for stopping by." — quiet signature footer with personal motto. Extends Milan B6 plain-text footer pattern with a personal motto.
  - **Title is descriptive + role-tagged**: "Bhavesh Gudlani – Full-Stack Developer & AI/ML Engineer | India" — proper title with role + location.
- **What does NOT work**:
  - **OG image broken** — `og:image` points to `https://bhaveshgudlani.dev/og-image.jpg` (different domain — `.dev` instead of `.me`); `curl` confirms `bhaveshgudlani.me/og-image.jpg` returns 404. The `.dev` domain may not serve that path either. Either way, OG previews will be broken when shared on social media.
  - **Canvas2D particles are visible only at the top** — they render behind the hero but the canvas resizes to viewport; if the user scrolls past the hero, the canvas is `position:fixed`-like (full-page bg) but the particles are visible only behind content sections where the bg is mostly covered. Slight waste of CPU on lower sections.
  - **9 keyframes** — moderate count. Not excessive but not as restrained as Triet B1 (1) or Cade B3 (1).
  - **No `<meta name="theme-color">`** — minor mobile-tab polish missing (though the body bg is `#0D0B1F` which would be the obvious theme-color).
- **Notable patterns to consider**:
  - **Custom cursor that adds UX** (FIRST CORPUS INSTANCE) — `#cd` instant-follow dot (8px, lime, `mix-blend-mode: difference`) + `#cr` eased-lerp ring (32px white border, lerp factor .11). Hover state: dot → 11px square; ring → 48px with lime border. Touch-device fallback via `@media(hover:none)`. **RESOLVES the open tension "Custom cursor that adds UX."** Five UX values: (1) constant visible feedback, (2) instant dot for precision, (3) eased ring for confirmation, (4) hover state for interactivity signal, (5) mix-blend-mode for accessibility on any bg. **ADOPT.**
  - **Scroll progress bar** (FIRST CORPUS INSTANCE) — `#pb` 2px tall, fixed top, gradient `lime → pink → cyan → volt`, `transform:scaleX` updated on scroll. Cheap orientation cue — tells user where they are on the page. **ADOPT** as partial resolution of "hero motion that orients" tension.
  - **Canvas2D geometric particle field** (extends Whilmar B3 / Ohk Soe Htet B7 / Dale B7 WebGL to Canvas2D) — 50 floating geometric shapes (circle/square/triangle/diamond) in 6 bright colors, pulsing alpha, rotation. Lighter than WebGL variant. **ADOPT** as lighter alternative to WebGL particle field.
  - **Tri-accent system** (extends Vinit B7 dual-accent) — lime / pink / cyan as a coherent palette, used purposefully (lime = primary, pink = secondary, cyan = tertiary, with progress-bar gradient through all three). **ADOPT** for sites that need more color variety than dual-accent allows.
  - **Name-as-H1 with role phrase embedded** (extends Juan Benito B6 name-as-link-in-H1) — "BHAVESH / GUDLANI / Builds complete systems" as three spans on three lines. Reads as confident + role-clear. **ADOPT**.
  - **Syne display + DM Sans body** — first corpus instance of Syne (geometric, slightly quirky display font). Distinctive without being trendy. **ADOPT** as display-font candidate.
  - **Lightest script count in corpus** (3 scripts) — pure static site on GitHub Pages, no framework runtime, no analytics. **ADOPT** as performance ceiling reference.
  - **Footer as personal motto** — "Made to be remembered – thanks for stopping by." Extends Milan B6 plain-text footer with personal motto. **ADOPT**.
  - **JSON-LD Person + WebSite** with comprehensive structured data — second-best structured data in corpus after Vinit B7. **ADOPT**.

---

## Batch 8 Synthesis

### Patterns that REINFORCE prior findings

1. **Pure-white escape hatch works with strong typography** — Ganesh B8 (Playfair Display serif body + monospace eyebrows + bright orange accent on pure white) confirms the pure-white escape hatch requires real typographic commitment. Extends Milan B6 (heavy serif body) / EMF B4 (ultralight sans) to a third variant: **serif body + mono eyebrows on pure white with strong accent**.
2. **Tinted-dark for energetic personas** — Bhavesh B8 (deep navy `#0D0B1F` + warm cream text + tri-accent bright colors) confirms tinted-dark + warm-cream-text + bright-accent pattern from Whilmar B3 / Dale B7 for energetic/futuristic personas.
3. **Unix-shell metaphor as recurring pattern** — Ganesh B8 (DevOps) uses section-specific `$` commands (`$ man ganesh` / `$ history | grep` / `$ ls -lh` / `$ cat /etc/sysctl.conf` / `$ systemctl` / `$ ping -c 4` / `$ echo`). Now 4 corpus instances: Triet B1 (single-font Unix shell) / Ohk Soe Htet B7 (cyberpunk diagnostic) / Hafeez B7 (slash-prefixed nav) / Ganesh B8 (section-aware commands). Ganesh's section-specific commands are the most semantically-coherent instance.
4. **Pill-shaped floating frosted-glass nav** — Ganesh B8's pill (`border-radius:999px; backdrop-filter:blur(12px); box-shadow:0 2px 16px rgba(0,0,0,0.18)`) with animated sliding active-link background is the cleanest implementation yet. Now 4 corpus instances: John Clayton B5 / Juan Benito B6 / Ohk Soe Htet B7 / Ganesh B8.
5. **JSON-LD schema.org Person structured data** — Bhavesh B8 ships comprehensive Person + WebSite structured data (jobTitle/address/alumniOf/hasOccupation/knowsAbout/sameAs). Confirms Vinit B7 / Ohk Soe Htet B7 pattern as recurring.
6. **Single-font Inter without display font reads as default-y** — Himavanth B8 (Inter 60px weight 700) and Amit B8 (Inter 48px weight 700) both ship single-font Inter without display font or mono eyebrow. Confirms anti-pattern: Inter-only on Next.js+Tailwind default reads as "I shipped the default." Two-font developer-coded feel is the minimum bar.
7. **Generic CRUD project names signal bootcamp-portfolio** — Amit B8's 8 project names (KabadiKing Scrap Marketplace / StudyNotion E-Learning / Wanderlust Travels / Online Auction System / Weather Forecasting / Bharath Chats / BrainSpark Quizz / EcoNexus) all read as bootcamp tutorial projects. Confirms B1 anti-pattern #2 (dumping every project without curation).
8. **Footer as personal motto / signature** — Bhavesh B8 ("Made to be remembered – thanks for stopping by.") extends Milan B6 plain-text footer / Ganesh B8 (`$ echo "Built to last, not to impress."`) extends footer-as-design-surface. Two new variants in batch 8.

### Patterns that CONTRADICT or refine earlier findings

1. **`.sr-only` H1 pattern** (Ganesh B8) — first corpus instance of hiding a clean SEO H1 (`Ganesh Angadi - DevOps Engineer`) from visual display while rendering the visible name as a styled H3. **Refines** the "1 H1 per page" rule (anti-patterns #12 / #13 / #14): it's OK to have a visually-hidden H1 if there's exactly one and it's properly structured for AT. Solves the tension between "visible name should be the visual hero" and "document outline needs a real H1." **NEW PATTERN.**
2. **Engineering Principles as authored content** (Ganesh B8) — 6 H3 principles (Think in control flow / Model failure states / Design for observability / Prefer explicit over magical abstractions / Break systems to understand them / A deploy without a rollback is a gamble) in a dedicated "System Architecture & Engineering Principles" section. **Refines** Vinit B7 /practices pattern: Vinit curated external links to famous dev-culture articles; Ganesh authors original principles. **NEW PATTERN** — extends skills-section answers from 4 (Milan prose / Abhijeet filter / Hafeez count grid / Vinit curated links) to 5 (authored principles).
3. **Studio portfolio vs individual portfolio** (Hungry Bear B8) — first corpus instance of a true studio portfolio. Key difference: work-as-portfolio (every project is a subpage), no personal About section, no skills section, no resume-style experience. The studio's identity is the work itself. **Refines** the hero-as-brand-statement pattern: for studios, the work grid IS the brand statement; for individuals, the hero name+role is the brand statement. **Don't adopt studio pattern for individual portfolio.**

### Patterns UNIQUE to this batch

1. **Custom cursor that adds UX** (Bhavesh B8) — `#cd` instant-follow dot (8px lime, `mix-blend-mode: difference`) + `#cr` eased-lerp ring (32px white border, lerp factor .11). Hover state: dot grows to 11px square, ring grows to 48px with lime border. Touch-device fallback via `@media(hover:none)`. **FIRST CORPUS INSTANCE. RESOLVES OPEN TENSION.**
2. **Scroll progress bar** (Bhavesh B8) — `#pb` 2px tall, fixed top, gradient `lime → pink → cyan → volt`, `transform:scaleX` updated on scroll. **FIRST CORPUS INSTANCE.**
3. **Canvas2D geometric particle field** (Bhavesh B8) — 50 floating geometric shapes (circle/square/triangle/diamond) in 6 bright colors, pulsing alpha, rotation. Extends Whilmar B3 / Ohk Soe Htet B7 / Dale B7 WebGL particle field to Canvas2D variant (lighter, no WebGL context).
4. **Tri-accent system** (Bhavesh B8) — lime / pink / cyan as a coherent palette, used purposefully (primary/secondary/tertiary + progress-bar gradient through all three). Extends Vinit B7 dual-accent.
5. **Name-as-H1 with role phrase embedded** (Bhavesh B8) — "BHAVESH / GUDLANI / Builds complete systems" as three spans on three lines. Extends Juan Benito B6 name-as-link-in-H1.
6. **`.sr-only` H1 pattern** (Ganesh B8) — first corpus instance of hiding a clean SEO H1 from visual display while rendering visible name as styled H3. Solves visible-name-vs-document-outline tension.
7. **Section-specific Unix command eyebrows** (Ganesh B8) — `$ man` / `$ history` / `$ ls -lh` / `$ cat` / `$ systemctl` / `$ ping` / `$ echo` — each section opens with a semantically-relevant Unix command. Most semantically-coherent Unix-metaphor instance in corpus.
8. **Footer as terminal echo slogan** (Ganesh B8) — `$ echo "Built to last, not to impress."` Extends footer-as-design-surface with Unix-echo footer slogan that doubles as personal motto.
9. **Engineering Principles as authored content** (Ganesh B8) — 6 H3 authored engineering principles in a dedicated section. Extends Vinit B7 /practices curated-links pattern to authored original principles.
10. **Animated sliding active-link background in pill nav** (Ganesh B8) — extends B5/B6/B7 pill pattern with sliding active indicator (`<div>` with `position:absolute; background:var(--accent); opacity:0.15` that moves between links).
11. **Embedded real file-converter tool** (Himavanth B8) — real client-side file conversion (image/audio/video) embedded as a portfolio section. Second corpus instance of "embedded live Generator" pattern (Artur Bień B5 first). Confirms "embed a real working tool you built" as recurring code-as-interface signal.
12. **Production-credit attribution per project** (Hungry Bear B8) — "Produced at Carbon VFX" / "Produced at Nathan Love" per project. First corpus instance of explicit per-project employer/agency attribution. Extends Luca Félix B5 case-study template to multi-employer context.

### NEW ANTI-PATTERNS in batch 8

1. **Second H1 for embedded tool section** (Himavanth B8) — "Free Unlimited 📁 Converter" shipped as a second H1 on the same page as the hero H1. Even though the converter is a real feature, it should be H2. **Variant of anti-pattern #12.**
2. **"Log In" link in public nav** (Hungry Bear B8) — Weebly site-owner login link visible in public nav. Corporate-website cruft in a portfolio.
3. **Generic wave-SVG background from generator** (Amit B8) — wave SVG from getwaves.io credited in footer. Reads as default-y background choice without strong typography to anchor it.
4. **90+ nested `<section>` elements** (Amit B8) — extreme DOM fragmentation from copying a layout template. Reads as template cruft.
5. **Broken OG image pointing to a different domain** (Bhavesh B8) — `og:image` points to `bhaveshgudlani.dev/og-image.jpg` while the site is on `bhaveshgudlani.me`. OG previews will be broken when shared.
6. **"Portfolio" word in title** (Ganesh B8) — title "Ganesh Angadi | DevOps Engineer Portfolio" includes "Portfolio." Drop the word "Portfolio" — the URL context already implies it.

### Updated answers to the open tensions

| Tension | Status after batch 8 |
|---|---|
| **Hero motion that orients** | **PARTIALLY RESOLVED by Bhavesh B8 (scroll progress bar).** The scroll progress bar (`#pb` 2px tall, fixed top, gradient, `transform:scaleX` on scroll) is a **constant orientation cue** — tells the user where they are on the page at all times. Combined with Bhavesh's IntersectionObserver scroll reveal + nav shrink on scroll, the user always knows their position. Combined with Dale B7's mouse-input-reflection (fluid sim), there are now **two complementary partial resolutions**: (a) Dale B7 — input-reflection (mouse moves fluid sim); (b) Bhavesh B8 — position-orientation (scroll progress bar). A hero motion that tells the user *where to go next* still unsolved. |
| **Custom cursor that adds UX** | **RESOLVED by Bhavesh B8.** First corpus instance. `#cd` instant-follow dot (8px lime, `mix-blend-mode: difference` for visibility on any bg) + `#cr` eased-lerp ring (32px white border). Hover state: dot → 11px square, ring → 48px with lime border. Touch-device fallback via `@media(hover:none)`. Five UX values: (1) constant visible feedback, (2) instant dot for precision, (3) eased ring for confirmation, (4) hover state for interactivity signal, (5) mix-blend-mode for accessibility. **Adopt as the canonical custom-cursor pattern.** |
| **Scroll-driven section transitions** | Still unsolved after 40 portfolios. Bhavesh B8 has scroll-triggered reveals (IntersectionObserver `.rv` class) + scroll progress bar + nav shrink on scroll — but these are scroll-triggered reveals, not scroll-driven section *transitions* (where one section morphs into the next as you scroll). Carry to batch 9. |
| **Sound** | Still unsolved after 40 portfolios. Himavanth B8 has a Spotify playlist iframe embed (audio content from third-party), but no original sound design. **Zero original sound design in 40 portfolios.** Likely intentionally rare. Carry to batch 9. |
| **Real 3D scene (geometric 3D, not just shaders)** | Still unsolved after 40 portfolios. Bhavesh B8's Canvas2D geometric particle field is 2D shapes (circle/square/triangle/diamond) — geometric but flat, not 3D. Now 4 canvas/WebGL particle-field instances: Whilmar B3 (WebGL2) / Ohk Soe Htet B7 (WebGL2 abstract) / Dale B7 (WebGL2 fluid sim) / Bhavesh B8 (Canvas2D geometric). Geometric 3D still unsolved. Carry to batch 9. |
| **Code-as-interface, deeper** | **DEEPER RESOLVED by Himavanth B8 (embedded file converter).** Adds a fourth resolution: real working client-side tool embedded in the portfolio. EMF B4 (Typography Options Panel) / Artur Bień B5 (embedded Generators) / Vinit B7 (CLI companion) / Himavanth B8 (embedded file converter) = four distinct resolutions. **For full-stack devs, the embedded real tool is a strong signal — but ship under H2, not a second H1.** |
| **Light vs dark default** | **TIEBREAKER EXTENDED.** Batch 8 adds: Ganesh B8 (pure-white + Playfair Display serif + bright orange accent — third pure-white escape-hatch variant after EMF B4 ultralight-sans and Milan B6 heavy-serif), Bhavesh B8 (tinted-dark `#0D0B1F` + warm-cream text + tri-accent — energetic/AI-native persona). Confirms: tinted-dark for energetic/futuristic personas; pure-white for senior-confidence (with strong typography); tinted-light for consultant/senior. |
| **Premium case study template** | Definitively answered by Luca Félix B5. Hungry Bear B8 confirms studio case-study template with "Produced at [studio]" attribution per project. |
| **About section** | **No new variant in batch 8.** Ganesh B8 uses single-page About-as-hero (visible name + bio card + `$ man ganesh` eyebrow). Confirms hero-only-no-About + single-page-rich + multi-page-decomposed as the three valid architectures. |
| **Skills section** | **FIVE ANSWERS NOW.** Milan B6 prose-by-category. Abhijeet B6 category filter. Hafeez B7 categorized count grid. Vinit B7 /practices curated dev-culture links. **Ganesh B8 authored engineering principles** (6 H3 principles as manifesto). All five beat logo soup (B3 anti-pattern #16) and self-rated percentages (B6 anti-pattern). |
| **Contact section** | No new variant in batch 8. Bhavesh B8 uses email + Get in touch ↗ CTA + footer motto (minimal). Ganesh B8 uses mailto + LinkedIn/GitHub/Instagram + "Let's work together →" CTA. Confirms 6 existing contact variants. |
| **Project filtering / categorization** | No new resolution in batch 8. |
| **Page/route transitions** | No new resolution in batch 8. Ganesh B8 is single-page (no transitions). Bhavesh B8 is single-page (no transitions). Hungry Bear B8 is multi-page Weebly (default browser transitions). |
| **Commitment vs kitchen-sink** | Confirmed for batch 8. Ganesh B8 (Unix-DevOps metaphor + serif body + pure-white committed) + Bhavesh B8 (custom cursor + Canvas2D particles + tri-accent + name-as-H1 committed) both commit and read as confident. Amit B8 (Inter + wave SVG + 90 sections + generic projects) and Himavanth B8 (Inter + dark slate + Spotify playlist + file converter tacked on) do not commit — kitchen-sink middle. Hungry Bear B8 is a Weebly template (out of scope for "commitment" since it's not a developer portfolio). |

### Carried-forward open tensions for batch 9

- Scroll-driven section transitions (0 in 40 — scroll-triggered reveals yes; scroll-driven section morphing no)
- Sound (0 in 40 original sound designs — Himavanth B8 Spotify embed doesn't count)
- Real 3D scene (geometric 3D, not just shaders) (0 in 40 — 4 shader/Canvas2D particle-field instances now)
- Hero motion that orients *where to go next* (Bhavesh B8 scroll progress bar tells position; Dale B7 fluid sim reflects input; neither tells the user where to scroll next)

### Strongest portfolio in batch 8

**Bhavesh Gudlani — bhaveshgudlani.me.** Static site on GitHub Pages (3 scripts only — lightest in corpus). Three corpus-first patterns: (1) **custom cursor that adds UX** (`#cd` instant dot with `mix-blend-mode: difference` + `#cr` eased ring + hover state + `@media(hover:none)` fallback — first corpus instance, resolves open tension); (2) **scroll progress bar** (`#pb` 2px gradient `lime→pink→cyan→volt`, `transform:scaleX` on scroll — first corpus instance); (3) **Canvas2D geometric particle field** (50 floating shapes, 6 colors, pulsing — extends WebGL particle-field pattern to Canvas2D variant). Plus: tri-accent system (lime/pink/cyan — extends Vinit B7 dual-accent), name-as-H1 with role phrase embedded ("BHAVESH / GUDLANI / Builds complete systems" — extends Juan Benito B6), Syne display + DM Sans body two-font system, JSON-LD Person + WebSite with comprehensive structured data, footer personal motto ("Made to be remembered – thanks for stopping by."), tinted-dark `#0D0B1F` + warm-cream `#F5F2EC` text pairing. Loses minor points for broken OG image (points to `.dev` instead of `.me`).

Runner-up: **Ganesh Angadi — ganeshangadi.online.** Next.js on Vercel. Pure-white + Playfair Display serif body + bright orange accent + monospace eyebrows — fourth pure-white escape-hatch variant (after EMF B4 ultralight-sans / Milan B6 heavy-serif / and now Ganesh serif-body-with-mono-eyebrows). Four corpus-first patterns: (1) **`.sr-only` H1 pattern** (clean SEO H1 hidden from visual, visible name as styled H3 — first corpus instance, solves visible-name-vs-document-outline tension); (2) **section-specific Unix command eyebrows** (`$ man ganesh` / `$ history | grep` / `$ ls -lh` / `$ cat` / `$ systemctl` / `$ ping` / `$ echo` — most semantically-coherent Unix-metaphor instance in corpus); (3) **footer as terminal echo slogan** (`$ echo "Built to last, not to impress."`); (4) **authored engineering principles section** (6 H3 principles — extends Vinit B7 /practices curated-links to authored manifesto). Plus: pill-shaped floating frosted-glass nav with animated sliding active-link background (cleanest pill implementation yet), DevOps Engineer positioning, comprehensive OG metadata. Loses minor points for "Portfolio" word in title and mixed serif-body + mono-eyebrow + sans-hidden-H1 (3 font families technically).

### Weakest portfolio in batch 8

**Amit Kumar Raj — amitkumarraj.vercel.app.** Next.js on Vercel. Pure white + Inter + Tailwind emerald-700 + wave SVG bg from getwaves.io. Fully generic — no signature design choice. 90+ nested `<section>` elements (extreme DOM fragmentation from copied layout template). 8 generic bootcamp-style project names (KabadiKing Scrap Marketplace / StudyNotion E-Learning / Wanderlust Travels / Online Auction System / Weather Forecasting / Bharath Chats / BrainSpark Quizz / EcoNexus). Single-font Inter without display font or mono eyebrow (same anti-pattern as Himavanth B8). Long hero paragraph (3 sentences, 60+ words) violates hero-as-brand-statement pattern. Title typo: "Amit kumar Raj" (lowercase 'k'). Has proper OG metadata + "Hire Me" nav CTA — only positives. Lowest originality in batch 8 (1/5).

Runner-up weak: **Hungry Bear Studio — hungrybearstudios.com.** Weebly-hosted motion-design studio portfolio — NOT a developer portfolio. 0 H1 elements (anti-pattern #13). Default Open Sans + pure white + no accent (Weebly template default). 30 scripts (heaviest script count in corpus — Weebly analytics + tracking). "Log In" link in public nav (Weebly site-owner login — anti-pattern). Redundant title ("Hungry Bear studios - Hungry Bear Studios Projects"). No About page or studio narrative. Out of scope for "developer portfolio" but documented for completeness — confirms the studio-vs-individual portfolio distinction. Notable for "Produced at [studio]" per-project production-credit attribution pattern.

---

## Batch 8 Screenshot Inventory

Saved to `/home/z/my-project/research/screenshots/batch_08/`:
- `36_himavanth_hero.png` / `36_himavanth_scroll1.png` / `36_himavanth_scroll2.png` / `36_himavanth_scroll3.png` / `36_himavanth_scroll4.png` (5 screenshots)
- `37_amit_hero.png` / `37_amit_scroll1.png` / `37_amit_scroll2.png` / `37_amit_scroll3.png` / `37_amit_scroll4.png` (5 screenshots)
- `38_ganesh_hero.png` / `38_ganesh_scroll1.png` / `38_ganesh_scroll2.png` / `38_ganesh_scroll3.png` / `38_ganesh_scroll4.png` / `38_ganesh_scroll5.png` (6 screenshots)
- `39_hungrybear_hero.png` / `39_hungrybear_scroll1.png` / `39_hungrybear_scroll2.png` / `39_hungrybear_scroll3.png` / `39_hungrybear_scroll4.png` (5 screenshots)
- `40_bhavesh_hero.png` / `40_bhavesh_scroll1.png` / `40_bhavesh_scroll2.png` / `40_bhavesh_scroll3.png` / `40_bhavesh_scroll4.png` (5 screenshots)

Total: 26 screenshots.
