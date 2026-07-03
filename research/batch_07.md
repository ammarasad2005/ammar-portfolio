# Batch 07 — Portfolios 31–35 (Round 2, Batch 7)

**Analyzed**: 2026-07-03
**Portfolios**:
31. Ohk Soe Htet — https://www.ohksoehtet.dev
32. Jay Bhavsar — https://jay.is-savvy.dev
33. Vinit Shahdeo — https://vinitshahdeo.com
34. Hafeez Mohamad — https://haffee.vercel.app
35. Dale Larroder — https://dalelarroder.com

**Method**: For each portfolio — verified reachability via `curl -sIL`; opened in `agent-browser` at 1440×900; captured hero + 2–3 scroll screenshots; ran `agent-browser eval` to extract computed styles (bg-color, color, font-family, font-size, font-weight, line-height), heading inventory (H1–H3), section ordering, image/canvas/svg/iframe/video/audio counts, keyframe names, custom-cursor audit, framework hints (Next/Astro/Vue/Vite), social-link inventory, scripts, OG metadata; cross-checked subpages via `curl -sIL` + `grep -oE "<h[1-6]…"` for heading inventories.

**Carried-forward open tensions (after batch 6, 30 portfolios)**:
- Custom cursor that adds UX (0 in 30)
- Scroll-driven section transitions (0 in 30)
- Sound (0 in 30)
- Real 3D scene (1 in 30 — Whilmar B3 particle field)
- Hero motion that orients, motion-based (0 in 30 — text cues appeared in B6)

---

## Per-Portfolio Analysis

### 31. Ohk Soe Htet — https://www.ohksoehtet.dev
- **Reachable**: yes (HTTP/2 200, Vercel). Subpages `/projects`, `/blog`, `/resources` all return 200 — confirmed multi-page.
- **First impression**: System/cyberpunk metaphor committed fully. Hero reads as a terminal diagnostic panel — "SOFTWARE_DEV O.S.H.", `[ DIAGNOSTIC_READOUT ]`, `SYS.RDY // 2026`, `STATUS: OPTIMAL`, `UPLINK ESTABLISHED`, `LAT: 0.02ms`. WebGL2 canvas behind hero on a cool-tinted slate-50 background.
- **Visual hierarchy**: H1 "SOFTWARE_DEV" + initials "O.S.H." as the brand mark, with diagnostic metadata strip below (ID/LOC/CAP), then CTA pair "Initialize Connect" + "View Archives". Sections are clearly bounded by mono labels.
- **Layout composition**: Single-page-ish home with content subpages. Hero left-aligned, max-w-2xl. Sections stack vertically with vertical timeline (MY_JOURNEY), card grid (SERVICE_RECORDS), 3-col skills grid (TECHNICAL_SPECS//SKILLS), centered contact (OPEN_COMM_CHANNEL//CONTACT).
- **Typography**: H1 `JetBrains Mono` weight 900 60px / 60px line-height. Body `Chakra Petch` sans 16px. H2 `JetBrains Mono` weight 900 48px uppercase. Two-font developer-coded feel achieved via mono H1+labels + sans body.
- **Color palette**: Body bg `rgb(248,250,252)` (slate-50, cool-tinted near-white). Text `rgb(9,9,11)` (near-black). Accent cyan `#06b6d4` (cyan-500), `#0ea5e9` (sky-500), `#10b981` (emerald, theme-color meta — slight inconsistency vs cyan accent). Slate-900 boxes with cyan borders and `shadow-[0_0_15px_rgba(6,182,212,0.3)]` glow.
- **Spacing**: Balanced — generous vertical gaps between sections (mb-20 between headers), tight grid cells.
- **Hero section**: WebGL2 canvas (1280×577) full-bleed behind content. Diagnostic header (SYS.RDY / STATUS / UPLINK / LAT). H1 "SOFTWARE_DEV O.S.H.". Tagline "Software Developer building digital products with a focus on Fullstack Web and Mobile Applications.". DIAGNOSTIC_READOUT block (`ID // SYSTEM_USER_OSH`, `LOC // SINGAPORE, SG`, `CAP // FULLSTACK WEB + APP`). CTAs: "Initialize Connect" (mailto) + "View Archives". Bonus CTA: `[ SIMULATION_AVAILABLE ] Enter 3D Racing` → external 3D game `https://3d-racing-game-ashy.vercel.app/`.
- **Navigation**: Floating pill-shaped frosted-glass sticky header — `rounded-full border border-cyan-500/30 bg-white/60 p-2 shadow-lg backdrop-blur-md`. 4 icon-only nav buttons (Home/Projects/Resources/Blog) with active state `bg-cyan-600 text-white`. Extends John Clayton B5 / Juan Benito B6 floating pill pattern; this is the cleanest implementation yet — icons-only inside a tight pill.
- **Section ordering**: Header → Hero (with diagnostic) → MY_JOURNEY (vertical timeline) → SERVICE_RECORDS (work history cards) → TECHNICAL_SPECS//SKILLS (3-col grid) → OPEN_COMM_CHANNEL//CONTACT → Footer.
- **Scroll experience**: Standard scroll; section headers animate in (opacity/transform via inline styles applied by intersection observer).
- **Animations & motion**: 3 keyframes only (pulse-cyan, ping, pulse). Restraint signal. Cyan-dot markers pulse along the timeline. The `[ DIAGNOSTIC_READOUT ]` is decorative but not animated. WebGL2 canvas runs the hero background.
- **Hover interactions**: Skill cards: `hover:border-cyan-500 hover:bg-white shadow-sm hover:shadow-md`. Nav buttons: `hover:bg-cyan-50`. Standard hover-lift.
- **Background effects**: WebGL2 canvas (hero only) — second corpus instance after Whilmar B3. Not particles — appears to be a continuous-flow shader. Pure canvas with pointer-events:none (decorative). Vertical gradient lines on service records section (`absolute left-[10%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent`) — cyberpunk scan-line effect.
- **3D elements**: Yes — WebGL2 canvas hero background (decorative). External "3D Racing" link points to a real 3D game on a separate Vercel app (not the portfolio itself).
- **Responsiveness perception**: Tailwind responsive classes throughout (md:grid md:grid-cols-4); should adapt well.
- **Performance perception**: Vite-bundled React + 3 external scripts (Vercel Insights + Speed Insights + app bundle). 4 scripts total. 1 image (profile.jpg). 42 SVGs (icons). Lightweight. WebGL2 canvas is the heaviest element.
- **Emotional feeling**: Futuristic / cyberpunk / system-administrator-coded. Reads as "I think in systems."
- **Originality**: 4/5 — fully committed cyberpunk-system metaphor; second corpus WebGL canvas; cleanest pill-shaped frosted header.
- **What works**:
  - System/cyberpunk metaphor committed fully and consistently (MY_JOURNEY, SERVICE_RECORDS, TECHNICAL_SPECS, OPEN_COMM_CHANNEL — every label earns its place).
  - WebGL2 canvas as hero-only signature element, scoped to one surface (extends Whilmar B3 pattern).
  - Pill-shaped frosted-glass icon-only header is the cleanest instance yet of the floating-pill pattern (B5/B6).
  - DIAGNOSTIC_READOUT metadata block (SYS.RDY / STATUS / UPLINK / LAT) — extends "site is alive" pattern (Ajvad B3 / EMF B4 / Naimur B6) with a system-uptime register.
  - JSON-LD schema.org Person structured data (jobTitle, worksFor: Freelance/Open to Work, sameAs) — SEO + ATS-friendly.
- **What does NOT work**:
  - Theme-color meta says `#10b981` (emerald) but accent is cyan `#06b6d4` — slight inconsistency.
  - WebGL2 canvas has no `aria-hidden="true"` — accessibility concern (screen readers may try to interpret).
  - Hero CTA "Initialize Connect" → `mailto:ohksoehtet.dev@gmail.com` — direct mailto feels abrupt for a "Connect" action; "View Archives" lacks a destination (no `/projects` link in hero, though nav has it).
  - "3D Racing" external link is a different project, not the portfolio — slight cognitive dissonance with hero promise.
- **Notable patterns to consider**:
  - **DIAGNOSTIC_READOUT metadata strip** in hero: `SYS.RDY // 2026`, `STATUS: OPTIMAL`, `UPLINK ESTABLISHED`, `LAT: 0.02ms` — a 4-cell system-uptime register that extends the "site is alive" footer pattern (Ajvad B3 / EMF B4 / Caiovisuals B5 last-modified / Naimur B6 hero badge / Juan Benito B6 "Available" badge) into the hero. Cheapest "this site is alive AND I'm online" signal combination.
  - **Pill-shaped frosted-glass icon-only header** (4 icon buttons in a tight rounded pill with `backdrop-blur-md`) — the cleanest implementation yet; consider adopting.
  - **WebGL2 fluid/shader hero canvas** with `pointer-events:none` + decorative-only intent — second corpus instance of WebGL on a portfolio; widens Whilmar B3 precedent from "particle field" to "abstract shader background."
  - **External "3D Racing" link** from hero — interesting pattern of pointing the portfolio hero to a separate 3D project as proof-of-capability without bloating the portfolio itself.

---

### 32. Jay Bhavsar — https://jay.is-savvy.dev
- **Reachable**: yes (HTTP/2 200, Vercel via Cloudflare). Subpages `/projects/`, `/bookmarks/` both 200 — confirmed multi-page.
- **First impression**: A Brittany-Chiang-layout template clone (mldangelo's open-source personal-site) with senior work history (QAD/Haiku/Media.net/Gartner/Taskit/TCS). Body uses Consolas monospace — feels like a developer's actual terminal in a good way, until you notice the mailto link is broken.
- **Visual hierarchy**: H1 small (36px) Consolas weight 600. "TOP 3% TALENT" credibility badge above H1. Then "Work Highlights" tabbed interface (Brittany Chiang signature). Then certifications grid (3 cloud certs as 150×150 images). Then "Lets's Connect!" contact.
- **Layout composition**: Single-page home (no scrolling depth beyond work history). max-w-2xl centered. Tabbed work interface where selecting an employer (QAD/Haiku/Media.net/Gartner/Taskit/TCS) swaps the right pane with role + bullet-list accomplishments.
- **Typography**: Body `consolas, monospace` — OS-default monospace body. H1 same Consolas 36px weight 600. Proxima Nova (Adobe) is loaded in 7 weights but doesn't appear to be applied to anything I sampled. Body color `rgb(238,238,238)` cascaded (but overridden by Tailwind `text-textPrimary` → `rgb(30,41,59)` slate-800 on actual text).
- **Color palette**: Body bg `rgb(248,250,252)` (slate-50, cool-tinted near-white). Text `rgb(30,41,59)` (slate-800). Primary accent (visible in `text-primaryAccent` Tailwind class) — a teal/teal-ish color (didn't sample exact hex). Slate family throughout — Tailwind defaults.
- **Spacing**: Balanced — generous py-8 / py-16 between sections, tight list items.
- **Hero section**: "TOP 3% TALENT" eyebrow (gold text). H1 "Hey 👋, I'm Jay". Paragraph: "I'm a Backend and Cloud Engineer who thrives to craft solutions that are both simple and elegant. I leverage a diverse array of technologies and tools (including AI) to solve the problem at hand. … I'm a Super Engineer who is on the journey to set new benchmarks of excellence! My email is:" — followed by an inline email link. Then a "or-this" link beside it.
- **Navigation**: Header has 3 text links (Home / Projects / Bookmarks) — minimal. No sticky behavior observed. Underline-offset-4 hover style.
- **Section ordering**: Header → Hero (eyebrow + H1 + paragraph + email + or-this) → Work Highlights (tabbed interface with 6 employer tabs) → Certifications (3 cloud cert images) → Lets's Connect! (email + cal.com + ADPList) → Footer.
- **Scroll experience**: Standard vertical scroll; tab content swap is instant (no transition).
- **Animations & motion**: 17 keyframes (mostly Font Awesome icon animations: fa-beat, fa-bounce, fa-fade, fa-beat-fade, fa-flip, fa-shake, fa-spin × 2; plus wave-animation for 👋 emoji; plus 2 spin). Wave emoji hand wave is the only signature motion.
- **Hover interactions**: Tab hover: background color change. Tab selected: `tab__selected` class with different bg. Email links: `decoration-primaryAccent underline underline-offset-4`.
- **Background effects**: Plain. No canvas, no particles, no grain. Just slate-50.
- **3D elements**: No.
- **Responsiveness perception**: Tailwind responsive — should adapt; tabs may be tight on mobile.
- **Performance perception**: Loads fast (Vue + Gridsome static). 6 scripts (Vue runtime + page chunk + Cloudflare insights + Senja + GA gtag). Senja.io for testimonials loaded but not visible on home — possibly unused or only on subpages.
- **Emotional feeling**: Serious / senior / cloud-engineer-coded. The Consolas body is the personality tell.
- **Originality**: 2/5 — clearly a mldangelo template (Vue + Gridsome) with Brittany Chiang tabbed-work layout. The work history itself is impressive (6 employers across the stack), but the visual language is borrowed. Loses points for unreplaced template email href.
- **What works**:
  - Consolas-monospace body for a Backend/Cloud Engineer reads as authentic — the body font *is* the metaphor (lighter version of Triet B1 single-font Unix shell).
  - Tabbed work history interface (Brittany Chiang pattern) — dense, scannable, senior trajectory visible at a glance (Module Lead @QAD → Principal @QAD → Lead Cloud Architect @Haiku → Senior @Media.net → DevOps @Gartner → Backend @Taskit → Research @TCS).
  - 3 cloud certifications as small 150×150 badge images — clean credibility markers (AWS Pro + AWS Associate + GCP Data Engineer).
  - Contact section combines email + cal.com scheduling + ADPList mentorship — modern multi-channel contact (extends Juan Benito B6 RESPONSE TIME + form pattern).
- **What does NOT work** — **MAJOR ANTI-PATTERN**:
  - **Template-fork-without-cleanup**: The hero email's `mailto:` href is `thanks@mldangelo.com` (the template author Michael D'Angelo's email) — but the visible link text is `thanks@jay.is-savvy.dev`. Clicking the hero email link sends an email to Michael D'Angelo, NOT to Jay. The footer's "Let's Connect" link uses a different (correct) email `mailto:hi@jay-is-savvy.dev`. So the dev never tested the hero email click. This is the **second instance** of the Bhushan B1 anti-pattern (template fork with original author's API URLs / emails left in code).
  - **0 OG metadata** — empty meta object (no og:title, og:description, og:image, og:type, twitter:card). Second confirmed zero-OG portfolio in corpus after Abhijeet B6.
  - **"Lets's Connect!" typo** in H2 — extra apostrophe-s. Spelling error shipped to production.
  - **"or-this@mldangelo.com"** as a secondary hero email link — even if intentional humor, ships the template author's email again.
  - **Consolas OS-default mono** as body font — works for cloud engineer persona, but reads as default-y compared to a deliberate mono like JetBrains Mono (Ohk Soe Htet B7) or Geist Mono (Triet B1).
- **Notable patterns to consider**:
  - **Tabbed work history** (Brittany Chiang pattern) — confirmed recurring pattern, now appearing for the first time in this corpus. Worth adopting: employer names as left tabs, role + bullet accomplishments in right pane.
  - **Cal.com + ADPList in contact** — modern multi-channel contact (scheduling + mentorship). Extends Juan Benito B6 / Luca Félix B5 contact-as-service pattern.
  - **3 cloud certifications as small badge images** — credibility markers without logo soup (avoids Gunjan B3 anti-pattern #16).
  - **"TOP 3% TALENT" eyebrow** — bold credibility claim as hero eyebrow. Corpus first (parallel to Milan B6 "400,000+ engineers" credibility number).
  - **Senja.io testimonial integration** (script loaded) — first corpus instance of a testimonial-widget service being integrated (though not visible on home).

---

### 33. Vinit Shahdeo — https://vinitshahdeo.com
- **Reachable**: yes (HTTP/2 200, Netlify Edge). All subpages (`/about/`, `/now/`, `/featured/`, `/practices/`, `/books/`) return 200 (with /about 301 → /about/ trailing slash redirect).
- **First impression**: Senior Lead Engineer portfolio with the most ambitious multi-page architecture in the corpus. Six subpages — Home / About / Now / Featured / Practices / Books — each with a distinct content purpose. Astro v4.5.10 + Partytown for analytics. The hero says "$ npx vinitshahdeo — try my CLI portfolio" — there's an npm package that mirrors the site.
- **Visual hierarchy**: Hero is sparse: avatar (100×100) + H1 "Vinit Shahdeo" + "Engineering Lead" subtitle with a "Hiring" pulsing-dot badge + 3 social icons + a personality-rich paragraph + 4 secondary links (Peerlist/Substack/Blog/Source). Then the page ends. All depth is one click away.
- **Layout composition**: Hero-only home (extends Jeremiah B1 / Nico B2 / Juan Benito B6 hero-only lineage). max-w-2xl centered, mt-10. Each subpage is its own content surface. Footer element exists but is empty (content lives in /now page as a metadata block).
- **Typography**: Body `DM Sans` 16px (400/500/600 weights). H1 `Kanit` 30px weight 600 (loaded weights 500/600). Third font `KoHo` also loaded (500/600) — likely for accent. Three-font system with distinct roles.
- **Color palette**: Background `#1a1a1a` near-black-warm (not pure black). Layered: `#2a2a2a` cards, `#3a3a3a` borders. Text `#c9c9c9` (muted) / `#e0e0e0` (bright). **Two accent colors**: mustard yellow `#ffe895` (primary) + cyan `#00abda` (secondary, used in pulsing-dot badge + hover states). Sophisticated dual-accent system.
- **Spacing**: Airy — `mt-10 mb-10`, `mb-5` between paragraphs, `mb-14` between content blocks. Generous vertical breathing room.
- **Hero section**: H1 "Vinit Shahdeo" (small 30px). Subtitle "Engineering Lead" + "Hiring" pulsing-dot badge (`bg-[#00abda] pulse-dot` + `text-[#ffe895]` text on `bg-[#2a2a2a]` pill). Avatar (100×100 rounded-lg bordered). Social row (GitHub, X, LinkedIn with hover-opacity dim effect). "$ npx vinitshahdeo — try my CLI portfolio" command-prompt-styled invitation. Personality paragraph: "Software Engineer leading engineering efforts at zzazz, building the world's first large pricing model (LPM) — turning any content into a valuable, tradable asset. From SaaS to FinTech to now AI, it's been a rewarding journey—honored to be a 3x GitHub Star from India and a maintainer for Google Summer Of Code (GSoC), nurturing open-source innovation at Postman. … 🏸 + 🍵 + 👨‍💻 = @vinitshahdeo". Footer links: Peerlist, Substack, Blog, Source.
- **Navigation**: Top header — left: 50×50 logo image. Center: nav ul (Home/About/Now/Featured/Practices/Books) with the current page highlighted in `text-[#ffe895]`. Right: "Ask AI" CTA pill (mustard border, hover glow `hover:shadow-[0_0_20px_rgba(255,232,149,0.35)]`) + email icon. Mobile menu button "Menu +" with a "+" indicator in mustard.
- **Section ordering**: Header → Hero (H1 + subtitle + badge + avatar + social + npx CLI + paragraph + footer links) → empty `<footer>`. Multi-page depth: /about (Work history), /now (Derek Sivers /now page), /featured (13 articles/interviews), /practices (dev culture articles), /books (4-category senior bookshelf).
- **Scroll experience**: Astro View Transitions confirmed (`astro:before-swap` event listener for Partytown iframe persistence). Page transitions are designed, not default.
- **Animations & motion**: 5 keyframes (glowingText, spin, glow, pulseDot, lazyBadgeAppear) — all purposeful, not excessive. `glowing-animation` class on "Bengaluru" — animated glowing text. `lazyBadgeAppear` for the Hiring badge entrance.
- **Hover interactions**: Social row: group-hover dims all to 30% opacity except hovered (`hover:!opacity-100`). Nav links: `hover:text-[#e0e0e0] hover:bg-white/5`. "Ask AI" CTA: `hover:border-[#ffe895] hover:bg-[#ffe895]/15 hover:scale-105`. Active nav: `text-[#ffe895] font-medium bg-[#ffe895]/10 border-r-2 border-[#ffe895]`.
- **Background effects**: Solid `#1a1a1a`. No canvas, no particles. The personality comes from typography + dual-accent color.
- **3D elements**: No.
- **Responsiveness perception**: Tailwind responsive (`sm:flex`, `sm:hidden`, mobile menu). Strong mobile-first.
- **Performance perception**: Astro static-rendered + Partytown offloading Google Analytics to a web worker — **first corpus instance of Partytown**. 6 scripts (Astro hoisted + Partytown + GA + GitHub buttons). 2 images (logo 1080×1080 + home 500×500, both lazy-loaded). Fast.
- **Emotional feeling**: Senior / academic / open-source-citizen. The /now + /books + /practices subpages read as "I am a person with intellectual hobbies, not just a coder."
- **Originality**: 5/5 — most original portfolio in batch 7. Three corpus-first patterns: (1) `$ npx vinitshahdeo` CLI portfolio companion; (2) "Ask AI" CTA → Google search for own name; (3) /practices page linking to dev culture articles (No Hello, XY Problem, Don't Ask to Ask). Plus the most ambitious multi-page architecture yet (6 distinct content subpages).
- **What works**:
  - **6-page multi-page architecture** with distinct content purposes — Home (hero-only) + About (CV) + Now (Derek Sivers /now page) + Featured (press) + Practices (curated dev culture) + Books (senior bookshelf). Each page has a clear single purpose.
  - **"$ npx vinitshahdeo" CLI portfolio companion** — npm package that mirrors the web portfolio in the terminal. Cheapest "code-as-interface" credibility signal in the corpus (extends EMF B4 / Artur Bień B5 code-as-interface pattern).
  - **"Ask AI" CTA** that opens a Google search for "Who is Vinit Shahdeo" (`udm=50` AI-overview mode) — playful acknowledgment that recruiters will ask AI about you anyway; routes them to a curated search.
  - **Derek Sivers /now page** (corpus first explicit /now page) — "Where I'm at, what I'm focused on, and what I'm not." Inspired by nownownow.com (credited explicitly).
  - **/practices page** (corpus first) — links to famous dev-culture articles (No Hello, Don't Ask to Ask, The XY Problem, Kind Engineering, How to Report Bugs Effectively, Respectful Code Reviews). Shows shared values with senior dev community.
  - **/books page** (corpus first senior bookshelf) — 4 categorized book lists: Core Craft & Coding (Pragmatic Programmer / Clean Code / Clean Architecture / DDIA / Building Microservices), Architecture & Systems at Scale (Fundamentals of Software Architecture / SE@Google / Designing Event-Driven Systems / Release It!), Reliability/Delivery/Ops (Accelerate / SRE / SRE Workbook), Leadership & Staff+ Track (Staff Engineer / An Elegant Puzzle / Team Topologies). The book list itself signals the persona.
  - **"Hiring" pulsing-dot badge** — extends Juan Benito B6 "Available" pattern with a different semantics (he's hiring for his team, not available for hire).
  - **3x GitHub Star** explicit credibility in body text (not just title).
  - **JSON-LD schema.org Person** with full structured data (jobTitle, worksFor ZZAZZ, alumniOf VIT/Postman/Novo, knowsAbout, sameAs).
  - **Partytown** for Google Analytics — first corpus instance of web-worker-offloaded analytics (performance signal).
  - **Astro View Transitions** with `astro:before-swap` event — designed page transitions (extends EMF B4 / Ajvad B3 / Luca Félix B5).
  - **OSS Insight widget** embedded on /now page (GitHub dashboard stats thumbnail) — third-party credibility widget done right (single image, lazy-loaded).
  - **Emoji signature** "🏸 + 🍵 + 👨‍💻 = @vinitshahdeo" — personality marker (badminton + tea + code).
  - **Open-source lineage credited** — portfolio source on GitHub + available as Astro theme "Stellar Astro Dev Portfolio". Self-aware of template lineage.
- **What does NOT work**:
  - **Empty `<footer></footer>` element** on home — anti-pattern. Footer exists semantically but contains zero content. (Actual footer content like "Last Modified", "Location", "Committed by" appears at the bottom of /now page as a metadata block, not in a `<footer>`.)
  - **1 H1, 0 H2, 0 H3 on home** — heading hierarchy leak (heading-sparse home, content lives on subpages). Not catastrophic but the home page reads as a single-section page with no outline.
  - **"Ask AI"** opens raw Google search — works but feels slightly hacky (a real LLM-powered "ask about me" widget would be more impressive, though harder to maintain).
  - **Body bg `rgba(0,0,0,0)` transparent** in computed styles — relies on parent for actual bg color. Cosmetic but unprincipled.
- **Notable patterns to consider**:
  - **CLI portfolio companion (`npx <name>`)** — cheapest code-as-interface signal in corpus; npm package that mirrors the web portfolio. ADOPT.
  - **"Ask AI" CTA → curated Google search** — playful acknowledgment that recruiters ask AI about candidates anyway; routes them to a search you can SEO-optimize.
  - **Derek Sivers /now page** — a single page answering "what am I doing right now?" with timestamp + location metadata. ADOPT as a subpage.
  - **/practices page** — curated links to dev-culture articles you align with. ADOPT (distinct from /uses which is tools, this is values).
  - **/books page** — senior bookshelf by category. ADOPT for senior positioning.
  - **Dual-accent system** (mustard + cyan) — sophisticated alternative to single-accent; mustard for primary CTAs/labels, cyan for state indicators (pulsing dot).
  - **Partytown for analytics** — first corpus instance of web-worker-offloaded third-party scripts. ADOPT for performance.
  - **"Hiring" badge variant** of the pulsing-dot pattern — different semantics ("my team is hiring") from "Available" (Juan Benito B6, "I'm available"). Useful variant for senior/lead engineers.
  - **/now page metadata block** ("Last Modified: Tuesday, June 9, 2026 8:07 AM" + "Location: Bengaluru, India" + "Committed by: @vinitshahdeo") — extends Caiovisuals B5 static last-modified pattern with location + git attribution. ADOPT.
  - **Open-source template distribution** — the portfolio IS a public Astro theme. Strongest "I give back" signal possible; extends Caiovisuals B5 / Vinit B7 "Source" link pattern.

---

### 34. Hafeez Mohamad — https://haffee.vercel.app
- **Reachable**: yes (HTTP/2 200, Vercel). Single-page (anchor nav, no subpages).
- **First impression**: Student/new-grad portfolio with academic credibility signals stacked four ways: IEEE publication with DOI, LeetCode Knight-rank stats with daily heatmap, 4 cloud certifications, and a 12-category skills grid. Pure white + Outfit sans + JetBrains Mono accents.
- **Visual hierarchy**: H1 "Hafeez Mohamad" (30px, small). Then 8 H2 sections in this order: Professional Experience, Technical Skills, Data Structures & Algorithms, Innovative Projects, My Education, My Publications, My Certifications, Let's Connect. Footer H2 "Haffee." with tagline. The DSA + Publications + Certifications sections stack credibility markers aggressively.
- **Layout composition**: Single-page vertical scroll. Each section is a content block. Skills section is a 12-cell grid. DSA section is a stats dashboard (rating, level, rank, solved counts, heatmap). Projects are 3 detailed cards.
- **Typography**: Body `Outfit` (sans, weights 300/400/500/600/700 loaded). H1 same Outfit 30px weight 700. `JetBrains Mono` loaded for code/tech accents. Two-font developer-coded feel (sans + mono).
- **Color palette**: Body bg `rgb(255,255,255)` pure white. Text `rgb(30,41,59)` slate-800. Accent visible in `text-accent` Tailwind class (likely the same accent used on "Haffee**.**" period in footer). Tailwind slate + accent.
- **Spacing**: Dense — lots of content per section, less vertical breathing room than Vinit B7. Cards have p-4 to p-6 padding.
- **Hero section**: "Hello, I'm" eyebrow. H1 "Hafeez Mohamad". "A Ful[stack Developer]" truncated tagline. Paragraph: "Driven by a passion to decipher the world built on 0's and 1's, I thrive on creating impactful solutions through technology, crafting products that inspire change and innovation." Six CTA links: LinkedIn / Google / GitHub / Leetcode / X / RESUME. Then "My Career Path" transition into Professional Experience section.
- **Navigation**: Header — logo "Haffee." (text, also marked as H1 — anti-pattern) + 7 anchor links: Home / /Experience / /Skills / /Projects / /Education / /Publications / Let's Talk. Slash-prefixed labels (Unix-shell metaphor lite, like Triet B1 / Ohk Soe Htet B7).
- **Section ordering**: Header → Hero (eyebrow + H1 + tagline + paragraph + 6 CTA links + My Career Path) → Professional Experience → Technical Skills → Data Structures & Algorithms → Innovative Projects → My Education → My Publications → My Certifications → Let's Connect → Footer (Haffee. + tagline + socials).
- **Scroll experience**: Smooth scroll to anchors. Section reveal animations on scroll (enter keyframe).
- **Animations & motion**: 8 keyframes (blob, spin, enter, exit, blink, index-module_cursor__PQg0P [typing-blink cursor — not a custom mouse cursor], animation-os2n7p ×2). Purposeful: enter/exit for section reveals, blink for typing cursor, blob for hero blob background, spin for loading state.
- **Hover interactions**: Skill cards hover-lift. Project cards hover-border. Section headers transition on group-hover.
- **Background effects**: Pure white. "blob" keyframe suggests an animated blob shape (likely in hero or section background).
- **3D elements**: No.
- **Responsiveness perception**: Tailwind responsive (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for skills). Strong mobile.
- **Performance perception**: Next.js App Router (heavy chunking — 10+ chunks loaded on initial render). 15 images (certifications + project screenshots + avatar). 62 SVGs (icons). No third-party scripts visible besides app bundle. Heavy but justified by content density.
- **Emotional feeling**: Ambitious / student-driven / credential-stacking. Reads as "I want you to take me seriously despite being early-career."
- **Originality**: 3/5 — LeetCode DSA section + IEEE publication + 4 certifications is a unique credibility-stacking pattern for new grads. Visual language is generic Tailwind + Outfit. Loses points for 2 H1s (logo + hero).
- **What works**:
  - **DSA section with LeetCode stats** — CORPUS FIRST. Max Rating 2,019, Level: Knight, Global Ranking 29,724/874,830, 636/3977 Solved (152 Easy, 394 Medium, 90 Hard), 759 submissions in the past year, Total active days: 364, Max streak: 325, with daily submission counts rendered as a heatmap. Replaces self-rated skill percentages (Abhijeet B6 / Soufiane B6 anti-pattern) with objective third-party-verified metrics. **Best skills-as-credibility pattern for new grads in corpus.**
  - **Publications section with IEEE paper** — CORPUS FIRST academic publication section. Title, authors (multiple credited), publisher (IEEE), date (10 October 2023), conference (2023 SoftCOM), DOI (10.23919/SoftCOM58365.2023.10271652), abstract. Treats the publication as a real academic citation, not a casual bullet point.
  - **Certifications section** — 4 cloud certs (AWS AI Practitioner, Stripe Professional Developer, Stripe Billing Developer, Stripe Associate Developer). Stripe certs are unusual and signal specialized payments expertise.
  - **Skills section as categorized count grid** — "12 Categories 45 Technologies" with counts per category (Languages: 5, Frontend: 4, Backend: 2, Mobile Development: 2, Databases: 4, Cloud Platforms: 2, AI & Machine Learning: 9, Technologies: 3, CI/CD: 3, UI: 5, Hosting: 2, Tools: 4). Alternative to Milan B6 prose-style skills — count grid is scannable, prose is readable.
  - **Slash-prefixed section labels** (/Experience, /Skills, /Projects) — extends Triet B1 / Ohk Soe Htet B7 Unix-shell metaphor lite.
  - **Footer H2 "Haffee." with period accent** — period-as-accent-color pattern (extends Cade B3 / Caiovisuals B5 period punctuation).
- **What does NOT work**:
  - **2 H1s** (logo "Haffee." + hero "Hafeez Mohamad") — anti-pattern #12 (multiple H1s). The logo should be a styled `<a>` or `<span>`, not H1.
  - **Footer "Haffee." as H2** — same logo text in footer marked as H2. Hierarchy leak (logo shouldn't be a heading).
  - **Hero truncation** — "A Ful" then line break, suggests "A Full Stack Developer" but the layout breaks awkwardly.
  - **6 social links in hero** (LinkedIn / Google / GitHub / Leetcode / X / RESUME) — approaches Hassan B2 anti-pattern #7 (9+ social links). RESUME as one of six is OK but borderline.
  - **Outfit at 30px weight 700 on pure white** — small for a hero H1; doesn't take advantage of the pure-white escape hatch (Milan B6 heavy serif at 30px+ weight or EMF B4 ultralight sans at 109px would). Pure white works only with typographic confidence — Outfit 30px weight 700 is not confident enough.
- **Notable patterns to consider**:
  - **DSA/LeetCode stats section** — objective third-party-verified credibility metrics (rating, level, ranking, solved breakdown, active days, max streak, daily heatmap). ADOPT for new-grad / DSA-heavy portfolios. Replaces self-rated skill percentages (anti-pattern).
  - **Publications section with DOI** — academic credibility for portfolios that have it. ADOPT format: Title / Authors / Publisher / Date / Conference / DOI / Abstract.
  - **Skills as categorized count grid** — alternative to prose (Milan B6) and category filter (Abhijeet B6). "12 Categories 45 Technologies" totals + per-category counts. ADOPT for high-skill-count portfolios where prose would be too long.
  - **Slash-prefixed nav labels** — `/Experience`, `/Skills`, `/Projects`. Confirms Triet B1 / Ohk Soe Htet B7 Unix-shell metaphor lite as recurring pattern.
  - **Certifications as named credentials** — "AWS Certified AI Practitioner", "Stripe Certified Professional Developer" — specificity beats generic "Cloud Certifications" label.

---

### 35. Dale Larroder — https://dalelarroder.com
- **Reachable**: yes (HTTP/2 308 → `https://www.dalelarroder.com/` HTTP/2 200, Vercel). Subpages `/projects`, `/thoughts`, `/uses`, `/stats` all return 200.
- **First impression**: Pure black + WebGL2 fluid canvas + serif H1 on sans body. The most visually striking hero in batch 7. Multi-page architecture with a real /uses page and a Wakatime /stats page — two corpus firsts.
- **Visual hierarchy**: H1 takes the full hero width — a long sentence "Welcome to my personal portfolio — or, as I like to call it, my playground on the web." with three typographic treatments inside (regular + bold + italic-underlined). Then a paragraph. Then nav links inline: LinkedIn / GitHub / X / Email + /projects /thoughts /uses /stats.
- **Layout composition**: Hero is full-viewport (`min-h-svh w-screen`) with the WebGL2 fluid canvas absolutely positioned behind (`z-index:0`, `pointer-events:none`). Content sits at `z-10` with `top-[20%] md:top-[40%]` vertical positioning. Multi-page depth at /projects (8 projects list), /thoughts (technical blog), /uses (5 setup categories), /stats (Wakatime).
- **Typography**: Body `Mukta` (sans, weights 200-600 loaded — wide weight range). H1 `Merriweather` (serif) at 36px weight 500. **INVERSE of typical pattern** — serif H1 on sans body. Three-style H1: regular text + bold ("personal portfolio —") + italic-with-underline ("playground" with `border-b border-b-primary-500`).
- **Color palette**: Body bg `rgb(0,0,0)` pure black. Body color `rgb(255,255,255)` pure white. Primary-500 Tailwind blue (visible on H1 underline). Bold choice — pure black/white with one Tailwind default blue accent.
- **Spacing**: Hero has `space-y-4` between elements, `px-8 md:px-24` horizontal padding, `lg:ml-14` left margin. Generous but tight to viewport edges.
- **Hero section**: Theme toggle (top-right, sun icon). H1 "Welcome to my personal portfolio — or, as I like to call it, my playground on the web." (three-style). Paragraph: "I'm Dale Larroder — a Software Engineer and forever a student of the craft. I love building things for the web and am always on the lookout for new challenges and opportunities to learn. I'm passionate about creating beautiful and functional user experiences. Right now, I'm building cool things at Aphex." (Aphex link with `underline-magic` class). Nav links inline at bottom.
- **Navigation**: No traditional header nav — links are inline in hero: "More about me:" → LinkedIn / GitHub / X / Email icons. Then "/projects /thoughts /uses /stats" as text links. Theme toggle is the only persistent UI element.
- **Section ordering**: Hero (full viewport, WebGL2 canvas + H1 + paragraph + inline links). Multi-page: /projects (8 project H2s with hover translate+scale), /thoughts (technical blog with 7+ articles), /uses (Editor/Terminal/Desktop Apps/Desk Setup/Keyboards), /stats (Wakatime).
- **Scroll experience**: Standard. Subpages likely have their own scroll behaviors.
- **Animations & motion**: 5 keyframes (circle-top-right, pulse, moveHorizontal, moveInCircle, moveVertical) — these keyframe names suggest animated SVG circles in different motion patterns. Separate from the WebGL2 fluid canvas (which runs its own shader). Two layers of motion: WebGL2 fluid background + SVG circle decorations.
- **Hover interactions**: Project H2s: `group-hover:-translate-x-3 group-hover:scale-110` — sophisticated hover that translates the title left while scaling up. Theme toggle: `hover:bg-accent`. Email link: `underline-magic` class (likely animated underline).
- **Background effects**: WebGL2 canvas `#fluid` (1280×577) — CORPUS FIRST fluid simulation canvas. Pure black bg + white text + canvas with `pointer-events:none`. The `id="fluid"` + pointer-events-none + WebGL2 context + pure black bg strongly suggests a Navier-Stokes fluid simulation responding to mouse movement (a popular WebGL effect, e.g. Pavel Dobryakov's WebGL Fluid Simulation).
- **3D elements**: Yes — WebGL2 fluid canvas (hero only, scoped to one surface — extends Whilmar B3 pattern). This is the most visually striking WebGL element in the corpus.
- **Responsiveness perception**: Tailwind responsive (`md:top-[40%]`, `md:px-24`, `lg:ml-14`, `md:text-4xl`). Hero adapts; canvas resizes to viewport.
- **Performance perception**: Next.js App Router + Turbopack (modern bundler). 10+ chunks loaded (Turbopack obfuscated names). No third-party scripts visible besides app bundle. 0 images, 5 SVGs on home. The fluid canvas shader is the heaviest element.
- **Emotional feeling**: Calm / playful / craft-focused. The "playground" framing + serif H1 + fluid canvas reads as "I make beautiful things because I enjoy it."
- **Originality**: 4/5 — most visually striking hero in batch 7. WebGL2 fluid canvas + serif-on-sans inverse typography + /uses + /stats pages = 4 distinct original moves. Loses points for bare title and short meta description.
- **What works**:
  - **WebGL2 fluid canvas** (`#fluid`) as hero-only signature element — second corpus instance of real WebGL (after Whilmar B3 particle field). More visually striking than particles. Pure black bg + white text + decorative-only intent (pointer-events:none). Confirms Whilmar B3 "3D scoped to one surface" pattern extends to fluid sims.
  - **Serif H1 on sans body (inverse pattern)** — Merriweather H1 + Mukta body. Inverse of typical sans-H1-on-serif-body pattern. Reads as "typography-first" without going full-serif (Milan B6).
  - **Three-style H1** — regular + bold + italic-underlined-keyword inside a single H1 sentence. The keyword "playground" gets the italic-underline treatment, drawing the eye to the brand metaphor without colorizing.
  - **Multi-page architecture with /uses and /stats** — /uses (corpus first explicit /uses page, uses.tech pattern) + /stats (corpus first Wakatime stats page). Two corpus-first subpages in one portfolio.
  - **Project hover translate+scale** — `group-hover:-translate-x-3 group-hover:scale-110` on project H2s. Sophisticated hover that combines translate + scale; first corpus instance of this exact combination.
  - **/uses page** with 5 categories: Editor, Terminal, Desktop Apps, Desk Setup, Keyboards — extends dev-culture "uses page" pattern (popularized by wesbos/uses.tech).
  - **/stats page** with Wakatime — first corpus instance of coding-time-tracker data as portfolio content.
  - **/thoughts blog** with real technical articles (React Under the Hood, Turborepo merging, Storybook component library, Why does React need keys?, Nx merging, JS Promise/Async-Await, useState typing) — senior technical writing.
  - **Hero copy "forever a student of the craft"** — humility-coded positioning. Pairs well with the "playground" framing.
  - **Dark/light theme toggle** in top-right — despite default pure black, supports both modes.
- **What does NOT work**:
  - **Title "Dale Larroder"** (bare) — anti-pattern B1. No role, no specialization. "Dale Larroder — Software Engineer" or similar would help recruiters.
  - **Meta description "I build things for the web."** — too short (28 chars). Wastes the SEO surface.
  - **1 H1, 0 H2, 0 H3 on home** — heading hierarchy leak. Like Vinit B7, content lives on subpages, so home is sparse. But the home page reads as a single-section page.
  - **Tailwind default primary-500 blue** on the H1 underline — same default Tailwind blue that contributed to John Clayton B5 / Abhijeet B6 reading as default-y. On pure black + white, the default blue undercuts the visual confidence.
  - **"underline-magic" class** on Aphex link — likely an animated underline, but I couldn't sample the actual CSS (class is not in the inline styles I extracted).
- **Notable patterns to consider**:
  - **WebGL2 fluid canvas** (`#fluid`, `pointer-events:none`, pure black bg) — second corpus instance of real WebGL; widens Whilmar B3 precedent from "particle field" to "fluid sim." ADOPT as hero signature element with reduced-motion fallback.
  - **Three-style H1** — regular + bold + italic-underlined-keyword inside a single H1 sentence. ADOPT as a way to highlight the brand keyword without colorizing.
  - **Serif H1 on sans body (inverse pattern)** — extends two-font developer-coded feel to serif-H1 variant. Alternative to mono-eyebrow pattern.
  - **/uses page** (uses.tech pattern) — 5 categorized tool/setup lists. ADOPT as subpage.
  - **/stats page with Wakatime** — coding time tracker data as portfolio content. ADOPT for developer-coded positioning.
  - **Project hover translate+scale** — `group-hover:-translate-x-3 group-hover:scale-110` on project H2s. ADOPT for project list hover.
  - **Hero "More about me:" + inline social icons + inline text nav** — alternative to traditional header nav; everything lives in hero. Works for hero-only home pages.

---

## Batch 7 Synthesis

### Patterns that REINFORCE prior findings

1. **Commitment-over-kitchen-sink** — Ohk Soe Htet commits to cyberpunk-system metaphor fully (every label earns its place: MY_JOURNEY / SERVICE_RECORDS / TECHNICAL_SPECS // SKILLS / OPEN_COMM_CHANNEL // CONTACT, DIAGNOSTIC_READOUT with SYS.RDY/STATUS/UPLINK/LAT). Vinit commits to Lead Engineer senior persona with 6-page multi-page architecture. Dale commits to pure black + WebGL2 fluid + serif H1 + /uses + /stats. Jay (template clone with broken email href) and Hafeez (2 H1s + Outfit 30px small on pure white) do NOT commit and read as generic.
2. **Tinted-neutral background, never pure** — Ohk Soe Htet `rgb(248,250,252)` cool-tinted near-white, Vinit `#1a1a1a` warm-tinted near-black, Jay `rgb(248,250,252)` cool-tinted near-white. **Two pure-bg portfolios in batch 7**: Hafeez `rgb(255,255,255)` pure white (with Outfit 30px weight 700 — too small to take the escape hatch) and Dale `rgb(0,0,0)` pure black (with WebGL2 fluid canvas behind — the canvas justifies the pure black as a "gallery wall" for the sim). Confirms B4/B6 escape-hatch rule: pure bg works only with typographic confidence OR a strong visual element (canvas) that justifies it.
3. **Hero-only home + content subpages** — Vinit (Home + About/Now/Featured/Practices/Books), Dale (Home + Projects/Thoughts/Uses/Stats), Ohk Soe Htet (Home + Projects/Blog/Resources), Jay (Home + Projects/Bookmarks). 4/5 batch-7 portfolios use multi-page hybrid. Extends Jeremiah B1 / Nico B2 / Ajvad B3 / EMF B4 / Luca Félix B5 / Juan Benito B6 lineage. Multi-page hybrid is now the dominant architecture.
4. **Two-font developer-coded feel** — Ohk Soe Htet (JetBrains Mono + Chakra Petch), Hafeez (Outfit + JetBrains Mono), Jay (Consolas body + Proxima Nova headings loaded but unused), Vinit (DM Sans + Kanit + KoHo 3-font), Dale (Mukta + Merriweather — sans+serif variant). All 5 batch-7 portfolios have a two-font (or three-font) system. Pattern is now near-universal (5/5 in batch 7).
5. **Footer as design surface** — Hafeez's footer has "Haffee." as styled H2 with period accent + tagline + socials. Vinit's /now page has the footer-content-as-metadata-block pattern ("Last Modified: Tuesday, June 9, 2026 8:07 AM" + "Location: Bengaluru, India" + "Committed by: @vinitshahdeo"). Jay's footer is "© 2026 No rights reserved. Feel free to fork!" (open-source vibe). Ohk Soe Htet has footer content but didn't sample it. Dale's home has no visible footer. **Vinit has empty `<footer></footer>` element on home** (anti-pattern: footer exists but content lives elsewhere).
6. **Frosted-glass sticky header** — Ohk Soe Htet's pill-shaped `bg-white/60 backdrop-blur-md border-cyan-500/30` is the cleanest instance yet of the floating-pill pattern (extends Phat B2 / John Clayton B5 / Juan Benito B6). Hafeez uses standard sticky header without blur. Vinit uses solid `#1a1a1a` header (no blur, no pill). Dale has no traditional header (inline hero links).
7. **Complete OG metadata** — Ohk Soe Htet (full OG + Twitter + JSON-LD Person schema), Vinit (full OG + Twitter + JSON-LD Person + WebSite + WebPage schema on /now), Hafeez (full OG + Twitter), Dale (OG title + image + Twitter card, but bare title). **Jay has 0 OG metadata** — second confirmed zero-OG portfolio in corpus (after Abhijeet B6). 4/5 batch-7 portfolios have complete OG metadata; the corpus is converging on this baseline.
8. **JSON-LD schema.org Person** — Ohk Soe Htet (Person schema with jobTitle/worksFor/sameAs), Vinit (Person schema with jobTitle/worksFor/alumniOf/knowsAbout/sameAs — most complete in corpus). 2/5 batch-7 portfolios use JSON-LD. First corpus instances of schema.org Person markup.
9. **Multiple-H1 anti-pattern ABSENT in 4/5 batch-7 portfolios** — Ohk Soe Htet (1 H1), Jay (1 H1), Vinit (1 H1), Dale (1 H1) all have exactly 1 H1. **Hafeez has 2 H1s** (logo "Haffee." + hero "Hafeez Mohamad") — first multiple-H1 anti-pattern since Fikri B4 (9 H1s) / Gunjan B3 (4 H1s). Logo-as-H1 is the new sub-variant of the anti-pattern.
10. **Self-rated skill percentages** — ABSENT in batch 7 (0/5). Replaced by Hafeez's LeetCode objective stats (rating/ranking/solved/heatmap) and Vinit's categorized prose on /practices. **Hafeez's DSA stats are the first credible alternative to self-rated percentages in the corpus.** Confirms self-rated percentages as anti-pattern; offers a positive replacement.

### Patterns that CONTRADICT or REFINE earlier findings

1. **3D scoped to a single surface — REFINED.** Whilmar B3 demonstrated WebGL2 particle field. Batch 7 adds two more instances: Ohk Soe Htet's WebGL2 hero canvas (decorative abstract shader background) and Dale's WebGL2 `#fluid` canvas (likely Navier-Stokes fluid sim responding to mouse). The pattern now spans 3 portfolios (Whilmar / Ohk Soe Htet / Dale) and 2 distinct visual modes (particle field / fluid sim). **Verdict: WebGL as hero-only signature is now a confirmed viable pattern, not a one-off. Pure black bg + white text + fluid canvas is a new variant.**
2. **Pure black bg — REFINED.** Earlier batches (B3, B6) showed tinted-dark (warm-near-black `#0D0D0E` Whilmar, cool-near-black `rgb(7,11,18)` Naimur, cool-near-black `rgb(10,10,12)` Soufiane, warm-near-black `#1a1a1a` Vinit B7). **Dale B7 is the first pure-black `rgb(0,0,0)` portfolio in the corpus** — justified by the WebGL2 fluid canvas as the visual centerpiece. Pure black works when the canvas IS the gallery wall. Without a strong visual element, pure black reads as default-y.
3. **Hero motion that orients — REFINED.** Dale's WebGL2 fluid canvas responds to mouse movement (pointer-events:none suggests mouse position drives the sim via JS). This is the **first corpus instance of a hero motion that responds to user input** — a step toward "orients" (the user's mouse movement is reflected in the hero, providing a "I am here" orientation cue). Not a text-based orientation cue (Soufiane B6 "Scroll down" / Juan Benito B6 "Available" badge), but a **motion-based input-responsive orientation cue**. Status: **motion-based hero orientation PARTIALLY RESOLVED by Dale's mouse-responsive fluid canvas.**
4. **Custom cursor that adds UX — STILL UNSOLVED.** Zero custom cursors in batch 7 (Hafeez has 375 elements with `cursor-pointer` Tailwind class; the `index-module_cursor__PQg0P` keyframe is a typing-blink cursor, not a custom mouse cursor). Status: still unsolved after 35 portfolios.
5. **Scroll-driven section transitions — STILL UNSOLVED.** Dale's project H2s use `group-hover:-translate-x-3 group-hover:scale-110` (hover-driven, not scroll-driven). Ohk Soe Htet's section headers animate in on scroll (intersection observer opacity/transform — scroll-triggered reveals, not scroll-driven transitions). Hafeez's `enter`/`exit` keyframes are section reveals. Status: still unsolved after 35 portfolios.
6. **Sound — STILL UNSOLVED.** Zero `<audio>` elements in batch 7. Status: still unsolved after 35 portfolios.
7. **Real 3D scene (not just particles) — PARTIALLY RESOLVED.** Dale's `#fluid` canvas (likely Navier-Stokes fluid sim) is the first corpus instance of WebGL beyond particle field. While not a "3D scene" in the geometric sense, it's a real GPU shader simulation — significantly more complex than Whilmar B3's particles. Ohk Soe Htet's WebGL2 hero canvas (decorative abstract shader) is a third instance. **Status: "real 3D scene" still unsolved (no three.js / model-viewer / Spline), but "real WebGL shader effect" now has 3 instances.**
8. **Code-as-interface — DEEPER RESOLVED by Vinit B7.** EMF B4 had a Typography Options Panel. Artur Bień B5 embedded interactive Generators inside articles. **Vinit B7 adds a third resolution: `$ npx vinitshahdeo` CLI portfolio companion.** The web portfolio points to a runnable npm package that mirrors the content. Cheapest code-as-interface signal in the corpus (the user runs your name as a CLI command). For full-stack devs, this is the most authentic "I am a developer" signal possible.
9. **Light vs dark tiebreaker — REFINED.** Batch 7 has: 2 pure-bg (Hafeez pure white, Dale pure black) + 1 warm-tinted dark (Vinit `#1a1a1a`) + 2 cool-tinted light (Ohk Soe Htet slate-50, Jay slate-50). The pure-bg portfolios use distinct strategies: Hafeez pure white with Outfit 30px weight 700 (insufficient typographic confidence — reads as default-y) and Dale pure black with WebGL2 fluid canvas (canvas justifies the pure black as gallery wall). **Tiebreaker extended: tinted-light for senior/consultant (Vinit warm-dark, Ohk Soe Htet cool-light), tinted-dark for energetic (Vinit dark), pure white with heavy display type OR pure black with strong visual element (canvas).**
10. **About section: narrative vs CV vs both — REFINED.** Vinit B7 splits About across multiple subpages: /about (Work history CV-style), /now (Derek Sivers /now first-person narrative), /featured (press third-person). The "About" is decomposed across multiple pages with different voices. Extends Juan Benito B6 single-page-About-architecture to multi-page About-architecture. **New variant: About-as-multiple-subpages, each with a different narrative voice.**
11. **Skills section — THIRD ANSWER.** Milan B6 prose-by-category. Abhijeet B6 category filter. **Hafeez B7 adds: categorized count grid** ("12 Categories 45 Technologies" + per-category counts). For high-skill-count portfolios, the count grid is scannable + quantified. **Vinit B7 /practices page adds a fourth: curated links to dev-culture articles you align with** (No Hello, XY Problem, Don't Ask to Ask) — skills-as-shared-values rather than skills-as-tools.
12. **Contact section — EXTENDED.** Milan B6 plain-text. Soufiane B6 phone+LinkedIn. Juan Benito B6 RESPONSE TIME+form. Luca Félix B5 slide-to-send. **Jay B7 adds: email + cal.com + ADPList** (modern multi-channel — email + scheduling + mentorship). **Vinit B7 adds: "Ask AI" CTA → Google search for own name** (playful meta-contact). Two new variants.
13. **Page/route transitions** — Vinit B7 uses Astro View Transitions (`astro:before-swap` event confirmed). Extends EMF B4 (Vue) / Ajvad B3 (Astro) / Luca Félix B5 (Next.js) / Juan Benito B6 (Next.js App Router) to Astro v4.5.10. Pattern is now framework-agnostic across Vue / Astro / Next.js Pages / Next.js App Router.

### NEW patterns unique to batch 7

1. **CLI portfolio companion (`npx <name>`)** (Vinit Shahdeo) — first corpus instance of an npm package that mirrors the web portfolio in the terminal. Cheapest code-as-interface signal in corpus. The web hero explicitly invites: "$ npx vinitshahdeo — try my CLI portfolio". Most authentic "I am a developer" signal possible. **ADOPT.**
2. **"Ask AI" CTA → curated Google search** (Vinit Shahdeo) — first corpus instance. `https://www.google.com/search?q=Who+is+Vinit+Shahdeo&udm=50` (udm=50 is Google's AI overview mode). Playful acknowledgment that recruiters ask AI about candidates anyway; routes them to a search you can SEO-optimize. **ADOPT.**
3. **Derek Sivers /now page** (Vinit Shahdeo) — first corpus instance of an explicit /now page (inspired by nownownow.com, credited). "Where I'm at, what I'm focused on, and what I'm not." With metadata block: Last Modified + Location + Committed by. **ADOPT as subpage.**
4. **/practices page** (Vinit Shahdeo) — first corpus instance. Curated links to famous dev-culture articles (No Hello, Don't Ask to Ask, The XY Problem, Kind Engineering, How to Report Bugs Effectively, Respectful Code Reviews). Skills-as-shared-values rather than skills-as-tools. Distinct from /uses (tools). **ADOPT.**
5. **/books page** (Vinit Shahdeo) — first corpus instance of a senior bookshelf. 4 categorized book lists: Core Craft & Coding, Architecture & Systems at Scale, Reliability/Delivery/Ops, Leadership & Staff+ Track. The book list itself signals the persona (Staff Engineer, An Elegant Puzzle, Team Topologies = "I'm on the Staff+ track"). **ADOPT for senior positioning.**
6. **/uses page** (Dale Larroder) — first corpus instance of an explicit /uses page (uses.tech pattern). 5 categories: Editor, Terminal, Desktop Apps, Desk Setup, Keyboards. Extends dev-culture /uses pattern into the corpus. **ADOPT.**
7. **/stats page with Wakatime** (Dale Larroder) — first corpus instance of a Wakatime coding-stats page. Coding time tracker data as portfolio content. **ADOPT for developer-coded positioning.**
8. **DSA/LeetCode stats section** (Hafeez Mohamad) — first corpus instance. Rating (2,019), Level (Knight), Global Ranking (29,724/874,830), Solved breakdown by Easy/Medium/Hard (152/394/90), submissions in past year (759), Total active days (364), Max streak (325), daily submission heatmap. **Replaces self-rated skill percentages (B6 anti-pattern) with objective third-party-verified metrics.** Best skills-as-credibility pattern for new grads in corpus. **ADOPT for DSA-heavy portfolios.**
9. **Publications section with DOI** (Hafeez Mohamad) — first corpus instance of an academic publication section. Title, authors (multiple credited), publisher (IEEE), date, conference (SoftCOM 2023), DOI (10.23919/SoftCOM58365.2023.10271652), abstract. Treats the publication as a real academic citation. **ADOPT format for portfolios that have publications.**
10. **Skills as categorized count grid** (Hafeez Mohamad) — third skills-section variant after Milan B6 prose and Abhijeet B6 filter. "12 Categories 45 Technologies" totals + per-category counts. Scannable + quantified. **ADOPT for high-skill-count portfolios.**
11. **WebGL2 fluid sim canvas** (Dale Larroder) — second corpus instance of real WebGL (after Whilmar B3 particle field). `#fluid` canvas with `pointer-events:none` on pure black bg. Likely Navier-Stokes fluid sim responding to mouse movement. More visually striking than particles. **ADOPT as hero signature with reduced-motion fallback.**
12. **Three-style H1** (Dale Larroder) — regular + bold + italic-underlined-keyword inside a single H1 sentence. "Welcome to my personal portfolio — or, as I like to call it, my playground on the web." The keyword "playground" gets the italic-underline treatment. **ADOPT as way to highlight brand keyword without colorizing.**
13. **Serif H1 on sans body (inverse pattern)** (Dale Larroder) — Merriweather H1 + Mukta body. Inverse of typical sans-H1-on-serif-body. Extends two-font developer-coded feel to serif-H1 variant. **ADOPT as alternative to mono-eyebrow pattern.**
14. **Project hover translate+scale** (Dale Larroder) — `group-hover:-translate-x-3 group-hover:scale-110` on project H2s. First corpus instance of this exact hover combination. **ADOPT for project list hover.**
15. **DIAGNOSTIC_READOUT metadata strip** (Ohk Soe Htet) — 4-cell system-uptime register in hero: `SYS.RDY // 2026`, `STATUS: OPTIMAL`, `UPLINK ESTABLISHED`, `LAT: 0.02ms`. Extends "site is alive" footer pattern into hero with a system-uptime register. Cheapest "this site is alive AND I'm online" signal combination. **ADOPT.**
16. **Pill-shaped frosted-glass icon-only header** (Ohk Soe Htet) — 4 icon-only nav buttons in a tight `rounded-full bg-white/60 backdrop-blur-md` pill with cyan border. Cleanest implementation yet of floating-pill pattern (B5/B6). Icons-only inside tight pill — most restrained variant. **ADOPT.**
17. **Slash-prefixed nav labels** (Hafeez Mohamad) — `/Experience`, `/Skills`, `/Projects`, `/Education`, `/Publications`. Confirms Triet B1 / Ohk Soe Htet B7 Unix-shell metaphor lite as recurring pattern. Now 3 corpus instances.
18. **"Hiring" badge variant** (Vinit Shahdeo) — extends Juan Benito B6 "Available" pulsing-dot pattern with different semantics. "Hiring" = my team is hiring (Lead Engineer perspective). "Available" = I'm available for hire (job-seeker perspective). **Useful variant for senior/lead engineers.**
19. **Cal.com + ADPList in contact** (Jay Bhavsar) — first corpus instance of cal.com scheduling + ADPList mentorship links in contact. Modern multi-channel contact (email + scheduling + mentorship). **ADOPT.**
20. **Partytown for analytics** (Vinit Shahdeo) — first corpus instance of web-worker-offloaded third-party scripts. Google Analytics runs in a Partytown web worker, freeing the main thread. Performance signal. **ADOPT for performance.**
21. **3x GitHub Star credibility in body text** (Vinit Shahdeo) — first corpus instance of GitHub Star credential (3x!) mentioned explicitly in body text. Distinct from Milan B6 newsletter subscriber count (400,000+). Both are explicit numeric credibility signals from third-party platforms. **ADOPT for portfolios that have such credentials.**
22. **OSS Insight widget embedded** (Vinit Shahdeo on /now) — `next.ossinsight.io/widgets/official/compose-user-dashboard-stats/thumbnail.png?user_id=...` — third-party GitHub stats widget rendered as a single lazy-loaded image. Credibility widget done right (no JS, just an image). **ADOPT.**
23. **Open-source template distribution** (Vinit Shahdeo) — portfolio source on GitHub + available as Astro theme "Stellar Astro Dev Portfolio". Strongest "I give back" signal possible. Extends Caiovisuals B5 / Vinit B7 "Source" link pattern to full template distribution.
24. **Tabbed work history (Brittany Chiang pattern)** (Jay Bhavsar) — first corpus instance of the famous Brittany Chiang tabbed work interface (employer names as left tabs, role + bullet accomplishments in right pane). 6 employer tabs (QAD/Haiku/Media.net/Gartner/Taskit/TCS). **ADOPT as tabbed work-experience pattern.**
25. **"TOP 3% TALENT" eyebrow** (Jay Bhavsar) — bold credibility claim as hero eyebrow. Corpus first (parallel to Milan B6 "400,000+ engineers" credibility number).
26. **3 cloud certifications as small badge images** (Jay Bhavsar) — AWS Pro + AWS Associate + GCP Data Engineer as 150×150 images. Clean credibility markers without logo soup. **ADOPT.**
27. **Wave-emoji hand wave animation** (Jay Bhavsar) — `wave-animation` keyframe on the 👋 emoji in H1 "Hey 👋, I'm Jay". First corpus instance of emoji-as-animated-element in H1. **ADOPT as subtle personality motion.**
28. **Period-as-accent-color in footer logo** (Hafeez Mohamad) — footer "Haffee**.**" where the period is `text-accent`. Extends Cade B3 / Caiovisuals B5 period-punctuation pattern to accent-color variant.
29. **Empty `<footer></footer>` element** (Vinit Shahdeo) — NEW ANTI-PATTERN. Footer element exists semantically but contains zero content. Actual footer content (Last Modified / Location / Committed by) appears as a metadata block inside the /now page `<section>`, not in a `<footer>`. **New sub-variant of "footer as boilerplate" anti-pattern.**
30. **Template-fork-without-cleanup (email href)** (Jay Bhavsar) — NEW ANTI-PATTERN. The hero email's `mailto:` href is `thanks@mldangelo.com` (the template author Michael D'Angelo's email) while the visible link text is `thanks@jay.is-savvy.dev`. Clicking the hero email link sends an email to Michael D'Angelo, NOT to Jay. **Second instance of the Bhushan B1 anti-pattern (template fork with original author's API URLs / emails left in code).** Worse than Bhushan because the visible link text is correct (so the user is deceived into thinking the email goes to Jay).
31. **"Lets's Connect!" typo** (Jay Bhavsar) — extra apostrophe-s in H2. Spelling error shipped to production.
32. **Hero "More about me:" + inline social icons + inline text nav** (Dale Larroder) — alternative to traditional header nav; everything lives in hero. Works for hero-only home pages where the header would otherwise be redundant.
33. **Multi-page About architecture** (Vinit Shahdeo) — About decomposed across multiple subpages each with a different narrative voice: /about (CV), /now (first-person /now narrative), /featured (third-person press). Extends Juan Benito B6 single-page-About-architecture to multi-page About-architecture. **New variant.**

### Updated answers to the open tensions

| Tension | Status after batch 7 |
|---|---|
| **Hero motion that orients** | **PARTIALLY RESOLVED by Dale B7.** Dale's WebGL2 fluid canvas responds to mouse movement (pointer-events:none + WebGL2 + id="fluid" suggests Navier-Stokes sim). This is the **first corpus instance of a hero motion that responds to user input** — a motion-based orientation cue (the user's mouse movement is reflected in the hero). Text-based orientation cues (Soufiane B6 "Scroll down" + Juan Benito B6 "Available" badge) appeared in B6. **Motion-based hero orientation partially resolved by Dale; further resolution still sought (e.g., a hero motion that orients the user to *where to scroll next*, not just reflects their mouse).** |
| **Custom cursor that adds UX** | Still unsolved after 35 portfolios. Zero custom cursors in batch 7 (Hafeez's `index-module_cursor__PQg0P` keyframe is a typing-blink cursor, not a custom mouse cursor). **Carry to batch 8.** |
| **Scroll-driven section transitions** | Still unsolved. Dale's project H2s use hover translate+scale (not scroll). Ohk Soe Htet's section headers animate on scroll via intersection observer (scroll-triggered reveals, not scroll-driven transitions). Hafeez's `enter`/`exit` keyframes are section reveals. **Carry to batch 8.** |
| **Sound** | Still unsolved after 35 portfolios. Zero `<audio>` elements in batch 7. **Carry to batch 8.** |
| **Real 3D scene (not just particles)** | **PARTIALLY RESOLVED by Dale B7.** Dale's `#fluid` WebGL2 canvas (likely Navier-Stokes fluid sim) is the first corpus instance of WebGL beyond particle field. While not a "3D scene" in the geometric sense (no three.js / model-viewer / Spline), it's a real GPU shader simulation — significantly more complex than particles. Ohk Soe Htet's WebGL2 hero canvas (decorative abstract shader) is a third instance. **Status: "real 3D scene" still unsolved (no geometric 3D); "real WebGL shader effect" now has 3 instances (Whilmar B3 particles / Ohk Soe Htet B7 abstract / Dale B7 fluid).** |
| **Code-as-interface, deeper** | **DEEPER RESOLVED by Vinit B7.** Adds a third resolution: `$ npx vinitshahdeo` CLI portfolio companion. EMF B4 (Typography Options Panel) / Artur Bień B5 (embedded Generators) / Vinit B7 (CLI companion) = three distinct resolutions. **For full-stack devs, the CLI companion is the most authentic signal.** |
| **Light vs dark default** | **TIEBREAKER EXTENDED.** Tinted-light for senior/consultant (Vinit warm-dark `#1a1a1a`, Ohk Soe Htet cool-light slate-50, Jay cool-light slate-50), pure-bg with strong visual element (Dale pure black + WebGL2 fluid canvas as gallery wall), pure-bg with typographic confidence (Milan B6 pure white + heavy serif body, EMF B4 pure white + ultralight sans). **Pure white with insufficient typography (Hafeez Outfit 30px weight 700) reads as default-y — escape hatch requires real typographic commitment.** |
| **Premium case study template** | Definitively answered by Luca Félix B5. No new resolution in batch 7. |
| **About section** | **NEW VARIANT by Vinit B7.** About-as-multiple-subpages, each with a different narrative voice: /about (CV), /now (first-person /now narrative), /featured (third-person press). Extends Juan Benito B6 single-page-About-architecture to multi-page. **Three valid About architectures: single-page-rich (Juan Benito B6), hero-only-no-About (most of corpus), multi-page-decomposed (Vinit B7).** |
| **Skills section** | **FOUR ANSWERS NOW.** Milan B6 prose-by-category. Abhijeet B6 category filter. Hafeez B7 categorized count grid. Vinit B7 /practices curated dev-culture links (skills-as-shared-values). All four beat logo soup (B3 anti-pattern #16) and self-rated percentages (B6 anti-pattern). For new-grad / DSA-heavy portfolios, Hafeez's DSA stats section is a fifth complementary answer. |
| **Contact section** | **EXTENDED.** Jay B7 adds: email + cal.com + ADPList (modern multi-channel). Vinit B7 adds: "Ask AI" CTA → curated Google search. Now 6 contact variants in corpus: plain-text (Milan B6) / phone+LinkedIn (Soufiane B6) / RESPONSE TIME+form (Juan Benito B6) / slide-to-send (Luca Félix B5) / email+cal.com+ADPList (Jay B7) / Ask AI (Vinit B7). |
| **Project filtering / categorization** | Caiovisuals B5 (4-category project filter + total count) is the model. No new resolution in batch 7. |
| **Page/route transitions** | Vinit B7 uses Astro View Transitions (`astro:before-swap` event). Extends EMF B4 (Vue) / Ajvad B3 (Astro) / Luca Félix B5 (Next.js Pages) / Juan Benito B6 (Next.js App Router). Pattern is now framework-agnostic across Vue / Astro / Next.js Pages / Next.js App Router. |
| **Commitment vs kitchen-sink** | Confirmed for batch 7. Ohk Soe Htet (cyberpunk-system metaphor committed) + Vinit (6-page Lead Engineer persona committed) + Dale (pure black + WebGL2 fluid + serif H1 + /uses + /stats committed) all commit and read as senior/authentic. Jay (mldangelo template clone with broken email href) and Hafeez (2 H1s + Outfit 30px small on pure white + dense credential-stacking) do not commit and read as template-y / generic. |
| **Restraint vs richness** | Reframed as commitment-vs-kitchen-sink (B3). Confirmed. |

### Carried-forward open tensions for batch 8

- Custom cursor that adds UX (0 in 35)
- Scroll-driven section transitions (0 in 35)
- Sound (0 in 35)
- Real 3D scene (geometric 3D, not just shaders) (0 in 35 — 3 shader/WebGL instances now: Whilmar B3 particles / Ohk Soe Htet B7 abstract / Dale B7 fluid)
- Hero motion that orients beyond input-reflection (Dale B7's fluid sim reflects mouse input; an orientation motion that tells the user *where to go next* still unsolved)

### Strongest portfolio in batch 7

**Vinit Shahdeo — vinitshahdeo.com.** Astro v4.5.10 + Partytown + 6-page multi-page architecture (Home / About / Now / Featured / Practices / Books). Eight corpus-first patterns in one portfolio: (1) `$ npx vinitshahdeo` CLI portfolio companion (cheapest code-as-interface signal in corpus); (2) "Ask AI" CTA → curated Google search for own name; (3) Derek Sivers /now page (first explicit /now); (4) /practices page linking to dev-culture articles; (5) /books page senior bookshelf (4 categories); (6) "Hiring" pulsing-dot badge variant (extends Juan Benito B6 "Available"); (7) Partytown for web-worker-offloaded analytics; (8) Astro View Transitions with `astro:before-swap` event. Plus: dual-accent system (mustard `#ffe895` + cyan `#00abda`), 3-font system (DM Sans + Kanit + KoHo), 3x GitHub Star credibility in body, JSON-LD schema.org Person with full structured data (jobTitle/worksFor/alumniOf/knowsAbout/sameAs), OSS Insight widget embedded on /now, open-source template distribution (Stellar Astro Dev Portfolio Astro theme), emoji signature "🏸 + 🍵 + 👨‍💻 = @vinitshahdeo". Loses minor points for empty `<footer></footer>` element on home and 1 H1 / 0 H2 / 0 H3 heading-sparse home.

Runner-up: **Dale Larroder — dalelarroder.com.** Next.js App Router + Turbopack + pure black + WebGL2 fluid canvas (`#fluid` with `pointer-events:none`) + serif H1 on sans body (Merriweather + Mukta inverse pattern) + three-style H1 (regular + bold + italic-underlined keyword). Four corpus-first patterns: (1) WebGL2 fluid sim canvas (second real WebGL after Whilmar B3 particles); (2) /uses page (uses.tech pattern, 5 categories); (3) /stats page with Wakatime; (4) project hover translate+scale combination. Plus /thoughts technical blog with 7+ real articles, "forever a student of the craft" humility-coded positioning, dark/light theme toggle. Loses points for bare "Dale Larroder" title, 28-char meta description "I build things for the web.", and 1 H1 / 0 H2 / 0 H3 heading-sparse home.

### Weakest portfolio in batch 7

**Jay Bhavsar — jay.is-savvy.dev.** mldangelo Vue+Gridsome template clone with Brittany Chiang tabbed work layout — but the hero email's `mailto:` href is `thanks@mldangelo.com` (the template author's email) while the visible link text is `thanks@jay.is-savvy.dev`. Clicking the hero email sends the message to Michael D'Angelo, NOT to Jay. **Second instance of the Bhushan B1 anti-pattern** (template fork with original author's email left in code) — and worse than Bhushan because the visible link text is correct, so the user is deceived. Plus: 0 OG metadata (second confirmed zero-OG after Abhijeet B6), "Lets's Connect!" typo in H2, Consolas OS-default mono as body font (reads as default-y vs JetBrains Mono), "or-this@mldangelo.com" secondary hero email also points to template author. Only positives: 6-employer senior work trajectory (QAD/Haiku/Media.net/Gartner/Taskit/TCS), 3 cloud certifications (AWS Pro + AWS Associate + GCP Data Engineer), cal.com + ADPList multi-channel contact, "TOP 3% TALENT" eyebrow claim. Lowest originality in batch 7 (2/5).

Runner-up weak: **Hafeez Mohamad — haffee.vercel.app.** 2 H1s (logo + hero — anti-pattern #12), Outfit 30px weight 700 on pure white (insufficient typographic confidence for the pure-white escape hatch — reads as default-y), 6 social links in hero (approaches Hassan B2 anti-pattern #7), footer "Haffee." as H2 (logo-as-heading hierarchy leak), hero tagline "A Ful" truncated awkwardly. Loses points despite strong credibility sections (DSA LeetCode stats / IEEE publication with DOI / 4 cloud certs / 12-category skills count grid).

---

## Batch 7 Screenshot Inventory

Saved to `/home/z/my-project/research/screenshots/batch_07/`:
- `31_ohksoehtet_hero.png` / `31_ohksoehtet_journey.png` / `31_ohksoehtet_service.png` / `31_ohksoehtet_skills.png` / `31_ohksoehtet_contact.png` (5 screenshots)
- `32_jaybhavsar_hero.png` / `32_jaybhavsar_work.png` / `32_jaybhavsar_certs.png` / `32_jaybhavsar_footer.png` (4 screenshots)
- `33_vinitshahdeo_hero.png` / `33_vinitshahdeo_below.png` / `33_vinitshahdeo_now.png` (3 screenshots)
- `34_hafeez_hero.png` / `34_hafeez_exp.png` / `34_hafeez_skills.png` / `34_hafeez_dsa.png` / `34_hafeez_projects.png` (5 screenshots)
- `35_dale_hero.png` (1 screenshot — single-viewport hero, no scroll content on home)

Total: 18 screenshots.
