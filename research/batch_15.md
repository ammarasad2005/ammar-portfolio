# Batch 15 — Portfolios 71-75 (Round 4, Batch 15)

> Researcher: general-purpose (portfolio researcher)
> Task ID: R4-B15
> Method: `agent-browser` desktop 1440×900, screenshots + DOM eval + snapshot tree + network/errors inspection.
> Corpus position: 75 of 100 portfolios analyzed.

## Portfolios analyzed

| # | Name | URL | Reachable | Stack signal |
|---|---|---|---|---|
| 71 | Poonam Chauhan | https://poo17nam.github.io/profile | ✅ yes | Bootstrap 3 + Lato + Font Awesome |
| 72 | Dinesh Barri | https://dineshbarri-portfolio.vercel.app → https://dineshbarri.dev | ✅ yes | Next.js + Tailwind + Sora + Sonner + Framer Motion |
| 73 | Juan Cisneros | https://portfoliojuanfranciscocisneros.web.app | ✅ yes | Astro v4.8.6 (dark desktop simulation) |
| 74 | Fayed Ishtar Chowdhury | https://portfolio-fayed.vercel.app | ✅ yes | Vite/React + Tailwind + Virgil + terminal-as-hero |
| 75 | Yuji Sato | https://yujisatojr.github.io/react-portfolio-template | ✅ yes | React + Material-UI + Lato |

All 5 reachable. No fallback needed.

---

## 71. Poonam Chauhan — https://poo17nam.github.io/profile

- **Reachable**: yes
- **First impression** (1-2 sentences): A classic 2019-era Bootstrap resume site. Senior Software Engineer at Salesforce with real shipped-app credibility (Jio News, Jio Talks on Play Store / Apple Store).
- **Visual hierarchy**: Traditional top-nav + hero name + resume sections. 1 H1 ("Poonam Chauhan"), 7 H2s, 12 H3s — proper document outline. H1 at 80px Lato 900.
- **Layout composition**: Single-column, max-width container (Bootstrap default). Hero left-aligned with name + Senior Software Engineer subtitle + Download Resume CTA. Below: About / Experience (timeline of 5 roles) / Education / Projects (5 cards w/ thumbnails) / Skills / Get in Touch (form).
- **Typography** (family feel, scale, weight): **Single font — Lato** (`Lato:300,400,700,900` from Google Fonts). H1 80px / 900 weight. Reinforces single-font pattern (B1 Triet, B14 Dipak).
- **Color palette** (hex codes if discernible):
  - Bootstrap blue `#31708e` (`rgb(51,122,183)`)
  - Peter River blue `#3498db` (`rgb(52,152,219)`)
  - Light blue `#a0cfee` (`rgb(160,207,238)`)
  - Dark navy `#374054` (`rgb(55,64,84)`)
  - Slate gray `#74808a` (`rgb(116,128,138)`)
  - Body text `#333333`
  - Pure white background `#ffffff`
- **Spacing** (dense / balanced / airy): Balanced — Bootstrap default paddings. Section rhythm predictable.
- **Hero section**: Left-aligned name (80px Lato 900) + subtitle "Senior Software Engineer" + "Download Resume" CTA (Google Docs link). No image, no animation, no parallax. Plain background.
- **Navigation**: Sticky top nav. 6 links: About / Experience / Education / Projects / Skills / Contact. Bootstrap pill style.
- **Section ordering** (top-to-bottom): Nav → Hero (name+subtitle+resume) → About → Experience (5 roles) → Education → Projects (5 cards) → Skills → Contact form → Footer (Copyright © 2019 + 4 social links).
- **Scroll experience**: Native scroll, no parallax, no scroll-triggered animations. 4 keyframes only.
- **Animations & motion**: Minimal. 4 CSS keyframes total — likely Bootstrap-default hover/fade states. No signature motion.
- **Hover interactions**: Standard Bootstrap link/button hover states.
- **Background effects** (gradient, grain, particles, 3D, plain?): Plain white. Section "Skills" may have light gray bg.
- **3D elements**: no.
- **Responsiveness perception**: Bootstrap 3 grid → mobile-first responsive. Probably adequate but dated.
- **Performance perception**: Loads fast — single CSS file (bootstrap.min.css + styles.css) + Lato font + Font Awesome. No JS framework. ~50KB page weight. Very light.
- **Emotional feeling**: Serious / dated / corporate-resume. Reads as 2017-2019 Bootstrap template — appropriate register for a Salesforce senior engineer, but visually uninspired.
- **Originality** (1-5, with note): **2/5**. No original visual move. The credibility comes from the resume content (Salesforce + Telstra + Reliance Jio + Jio News/Jio Talks Play Store apps), not the design. Reinforces "senior engineers don't need fancy design — they need real shipped work."
- **What works** (2-3 bullets):
  - **Shipped-app credibility via Play Store / Apple Store links** on Jio News and Jio Talks project cards (third corpus instance of app-store-link-as-credibility after B6/B12 mobile-app portfolios, but first as Play Store + Apple Store paired links).
  - **Real company-anchored experience timeline** — Salesforce (2 roles: SMTS + MTS), Telstra, Reliance Jio (2 roles: Backend Dev + Automation Tester). 5 roles across 3 companies with location tags ("Bangalore", "Mumbai") on each H3.
  - **Single Lato font + Bootstrap blue palette** — coherent, restrained, predictable. Low cognitive load.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **Bare "My Portfolio" title tag** — reinforces B2 anti-pattern #21. Should be `Poonam Chauhan | Senior Software Engineer`. Fourth corpus instance.
  - **Zero meta tags** (no description, no OG, no twitter:card, no author) — reinforces B14 Vishal's "0 meta tags" anti-pattern. Page has no SEO surface.
  - **Copyright © 2019** in footer — site hasn't been updated in 6+ years. Stale-dated portfolio anti-pattern. Signals neglect.
- **Notable patterns to consider**:
  - **App-store link pairs (Play + Apple) on project cards** — strong credibility signal for mobile-app projects. Adopt if shipping mobile work.
  - **Location-tagged company names in H3** ("Salesforce, Bangalore" / "Reliance Jio Infocomm Limited, Mumbai") — different from B14 Sambhu's "location in `<title>` for SEO" pattern. Here, location is on the company-name heading — a CV/register-level location signal, not SEO. Subtle.
  - **5-role experience timeline with role-progression** (SMTS → MTS at Salesforce, Backend Dev → Automation Tester at Reliance Jio) — first corpus instance of *internal-role-progression* shown explicitly (promotion/demotion/lateral within same company). Reinforces B12 codified experience-timeline pattern with internal progression as a credibility signal.

---

## 72. Dinesh Barri — https://dineshbarri-portfolio.vercel.app (redirects to https://dineshbarri.dev)

- **Reachable**: yes (Vercel app serves at custom domain `dineshbarri.dev`)
- **First impression** (1-2 sentences): A polished Next.js + Tailwind dark-mode data-science portfolio. Codeforces Master + AI Agent / RAG developer — the strongest "modern data professional" portfolio in the corpus.
- **Visual hierarchy**: 8 nav links (About/Skills/Experience/Projects/Education/Certifications/Contact + "Get in Touch" CTA). 1 H1 ("Dinesh Barri" 60px Sora) + 7 H2s + 26 H3s — robust document outline.
- **Layout composition**: Section-per-page pattern. `min-h-screen` per section with alternating backgrounds (`bg-secondary/20` on Skills / Experience / Education / Contact — section-stripe rhythm). Sticky top nav with `{ DB }` brand mark + 8 nav links + CTA button.
- **Typography** (family feel, scale, weight): **Single font — Sora** (`Sora, system-ui, sans-serif`). H1 60px. Reinforces single-font pattern.
- **Color palette** (hex codes if discernible):
  - Background near-black `rgb(7, 10, 19)` (`#070a13`)
  - Text `rgb(248, 250, 252)` (slate-50)
  - Muted `rgb(148, 163, 184)` (slate-400)
  - **Cyan accent** `rgb(10, 204, 230)` (`#0acce6` — electric cyan, NOT Tailwind default cyan `#06b6d4`)
  - **Amber accent** `rgb(245, 159, 10)` (`#f59f0a` — Tailwind amber-500)
  - Section stripe `bg-secondary/20` (slate-800/20)
- **Spacing** (dense / balanced / airy): Airy — `py-24` per section (96px top+bottom). Each section is full-viewport-height. Generous breathing room.
- **Hero section**: Full-screen flex-centered hero. H1 "Dinesh Barri" + name-animation likely (Framer Motion `enter`/`exit`/`float` keyframes). Tagline mentions "Codeforces Master" + "Data Analyst" + "Data Scientist". Two CTAs: "View Projects" + "Resume" (PDF link). 4 social-icon links (GitHub/LinkedIn/mail/resume).
- **Navigation**: Sticky top nav (`fixed top-0 left-0 right-0 z-50`). Brand mark `{ DB }` on left. 7 anchor links + "Get in Touch" CTA button on right. Backdrop blur on scroll.
- **Section ordering**: Hero → About (with 6 "expertise cards": Data Analytics / ML / Clean Code / Problem Solver / AI Agent Developer / Collaboration) → Skills (categorized: Programming & Analytics / ML / etc.) → Experience → Projects (6+ cards w/ View Code + Live Demo) → Education → Certifications (Google, Coursera) → Contact → Footer.
- **Scroll experience**: Smooth-scroll to anchors. Framer Motion `enter`/`exit` keyframes suggest scroll-triggered section reveal. No parallax. No scroll-driven section *transitions* (open tension still unsolved).
- **Animations & motion**: 14 keyframes — Framer Motion defaults (`pulse`, `enter`, `exit`, `float`, `pulse-glow`, `accordion-up/down`, `swipe-out-{left,right,up,down}`, `sonner-fade-{in,out}`, `sonner-spin`). Sonner = toast library. Most keyframes are library defaults, not custom signatures. The `float` + `pulse-glow` combo is the only signature move (likely on hero avatar or CTA).
- **Hover interactions**: Standard Tailwind hover states. Accordion-down/up on cert cards (radix-ui accordion).
- **Background effects**: Dark `#070a13` base. Section stripes via `bg-secondary/20`. No particles, no gradient, no 3D, no grain.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive — looks well-handled.
- **Performance perception**: Next.js + Tailwind + Sora + Sonner — moderate. Sora variable font + Framer Motion bundle is heavier than Poonam's. No images in hero (avatar is GitHub avatar URL — `avatars.githubusercontent.com/u/28930465?v=4`). Reasonable.
- **Emotional feeling**: Modern / professional / data-science-coded. Calm dark theme with cyan accent — feels like a 2025-era AI engineer's portfolio.
- **Originality** (1-5, with note): **3/5**. The Codeforces Master + AI Agent / n8n / RAG combination is unique. The cyan+amber dual-accent on near-black is tasteful and avoids the green/cyan terminal cliché (B13 Atal codified). But the layout is Next.js/Tailwind template-grade (section-stripe rhythm is the most common 2024-2026 portfolio pattern).
- **What works** (2-3 bullets):
  - **Dual-accent palette: cyan + amber on near-black** — `#0acce6` electric cyan (deviates from Tailwind default) + `#f59f0a` amber. First corpus instance of cyan+amber on near-black. Avoids the green/cyan terminal cliché. Tasteful and signal-rich: cyan for primary actions, amber for status/highlights.
  - **Codeforces Master badge in hero** — first corpus instance of competitive-programming *rank-title* (not just LeetCode link) in hero. Reinforces B14 Anurag's LeetCode-in-hero pattern with the stronger "Master" rank-title (top 0.5% globally). Strong credibility signal for an algorithms-heavy role.
  - **Section-stripe rhythm via `bg-secondary/20`** on alternating sections — the most-codified 2024-2026 dark-portfolio pattern. Predictable, scannable, accessible.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **8 nav links is too many** — 7 anchor links + "Get in Touch" CTA = 8 items in the top nav. Reinforces B3 codified "5±2 nav items" rule (this exceeds upper bound). Cognitive load on recruiter.
  - **Project cards link to novypro.com for Live Demo (Power BI dashboards)** — third-party dashboard-hosting service. Reinforces B1 Bhushan "shipping broken third-party widgets" risk pattern. novypro is less-known than Tableau public; link-rot risk.
  - **Resume PDF served from same domain (`/Dinesh_Barri_Google_Resume.pdf`)** — filename suggests "Google resume variant" (likely a tailored resume for Google application). Filename leaks application intent. Minor.
- **Notable patterns to consider**:
  - **`{ DB }` monogram brand mark in nav** (initials in curly braces) — second corpus instance of curly-brace brand mark after B12 codified. Reinforces pattern.
  - **Sonner toast library for notifications** — first corpus instance of Sonner. Modern React toast lib. Pattern: use Sonner for form-submit feedback (e.g., "Message sent" toast on contact form).
  - **AI Agent / n8n / RAG in expertise cards** — first corpus instance of *AI Agent developer* as an expertise-card title. Reinforces B14 Anurag's "AI/ML" pattern with a more specific n8n/RAG framing. Signals 2025-2026 *applied AI* (not just model training).
  - **Codeforces rank-title (Master) in hero** — adoptable for any portfolio claiming algorithms credibility. Stronger than LeetCode-link-only.
  - **Alternating `bg-secondary/20` section stripes** — most-codified dark-portfolio pattern. Already in corpus.
  - **Tailwind `font-bold` color in oklch format** — color values stored in oklch (modern CSS color function). First corpus instance of oklch in computed styles. Tailwind v4 default. Future-proof.

---

## 73. Juan Cisneros — https://portfoliojuanfranciscocisneros.web.app

- **Reachable**: yes
- **First impression** (1-2 sentences): **A fully-wired macOS desktop simulation** — lock screen with date/time as hero, then a desktop with dock, opening app windows with macOS traffic-light controls. The most ambitious metaphor-driven portfolio in the corpus.
- **Visual hierarchy**: Two-stage hierarchy — (1) lock screen with H2 date + H1 time as hero, (2) desktop with H1 "Juan Francisco Cisneros 👋🏻" + dock + per-app windows. **67 H1 elements** (every section/subsection heading inside windows is H1 — semantic structure broken).
- **Layout composition**: Full-screen macOS lock screen → click "Flecha" arrow to "unlock" → desktop with dock at bottom. Dock has 6 app icons: Finder / Books / AppStore / Xcode / Reminders / Trash Bin. Each app opens a window with traffic-light close/minimize/maximize controls (top-left). Apps map to sections:
  - **Finder** → "My Experience" (Metropolitan Touring / Remax / Construecuador)
  - **Books** → "Education" (Universidad San Francisco de Quito / Unidad Educativa Tomas Moro)
  - **AppStore** → "My Google Play Published Apps" (with a Cancel/Continue modal that links to Google Play developer page — second instance of Google Play dev-page link)
  - **Xcode** → "My Projects" (DevProbe / BizSwap / Sticker Tracker Album Qatar / MyCryptoWallet / WikiMarvel / NewsApp / Remax Geeks / One American Way)
  - **Reminders** → "My Certificates" (9 certificates: University Recognition GPA 3.8 / AWS Academy / Selenium / Project Management / Excel 2020 Expert / IB Diploma / English/Italian Proficiency / College Board Diploma)
  - **Trash Bin** → appears to do nothing on click (no window opens) — likely a "reset" affordance
- **Typography** (family feel, scale, weight): **Single font — Quicksand** (`Quicksand, sans-serif`). H1 96px (the time display). Time as H1 at 96px is unique.
- **Color palette** (hex codes if discernible):
  - Background pure black `rgb(0, 0, 0)` (the desktop)
  - Lock-screen time H1 `rgba(255, 255, 255, 0.79)` (white at 79% opacity — classic macOS lock-screen feel)
  - macOS window chrome default light gray (presumably — screenshots confirm)
- **Spacing** (dense / balanced / airy): Window-based spacing — each app window has its own internal padding. Generous.
- **Hero section**: **Lock-screen hero** — H2 "Friday, July 3" (date, computed from current date) + H1 "3:08" (current time, updates live) + an arrow image "Flecha" (Spanish for "arrow") clickable to unlock. Below the dock: H1 "Juan Francisco Cisneros 👋🏻" + LinkedIn + GitHub links. **Time-as-H1 hero is the most original hero concept in the corpus.**
- **Navigation**: **macOS dock as nav** — 6 app icons in a dock bar at the bottom of the desktop. Clicking an app icon opens a window with that section's content. The dock is the only navigation. No top nav, no hamburger, no anchor links. The active app shows a label bubble (e.g., "Finder Logo Experience" when Experience window is open).
- **Section ordering**: Lock-screen → desktop with dock → user opens windows in any order. There is no linear scroll. **Non-linear section access** — first corpus instance of dock-as-primary-nav with no scroll. Different from B11/B12 codified horizontal-nav pattern.
- **Scroll experience**: **No page scroll** — the desktop is fixed. Scrolling inside a window is local to that window. The site is a desktop-metaphor application, not a scrolling page. Different from every prior corpus portfolio.
- **Animations & motion**: **196 CSS keyframes** — the most in any single portfolio in the corpus (beats B14 Kavi's 21). Most are macOS-mimicking animations: window open/close, dock icon bounce, lock-screen time fade, traffic-light hover, etc. The animation density is necessary for the metaphor to feel real. Not excessive in context.
- **Hover interactions**: Dock icons presumably bounce on hover (macOS behavior). Traffic-light buttons show symbols on hover (close = ×, minimize = −, maximize = +).
- **Background effects**: Pure black desktop. No wallpaper visible (or wallpaper is also black). No particles, no gradient.
- **3D elements**: no (the dock magnification is 2D CSS).
- **Responsiveness perception**: Likely desktop-only — the macOS metaphor breaks on mobile. Probable anti-pattern for mobile users.
- **Performance perception**: Astro static site → fast first paint. But 116 images + 196 keyframes = heavy. Many images are loaded from `raw.githubusercontent.com` URLs (project screenshots from repo README files) — fragile.
- **Emotional feeling**: Playful / nostalgic / Apple-fan / Ecuadorian-QA-engineer-coded. The 👋🏻 emoji + Spanish "Flecha" + English content trilingual-coder feel.
- **Originality** (1-5, with note): **5/5**. The most original portfolio in the corpus alongside B13 Atal's terminal. Time-as-H1 lock-screen hero + macOS dock-as-nav + windows-as-sections + no-page-scroll = four original moves in one portfolio. The macOS-traffic-light window chrome (B13 Atal codified) is here too, but elevated to a full desktop simulation.
- **What works** (2-3 bullets):
  - **macOS desktop simulation as portfolio architecture** — lock-screen hero (date+time) → desktop with dock → app windows as sections. First corpus instance of a fully-wired desktop-metaphor portfolio. The metaphor is committed to fully (no half-measures).
  - **Time-as-H1 hero** (live-updating current time at 96px Quicksand) — most original hero concept in the corpus. Different from B3 EMF's three-style H1 / B14 Vishal's wave-text / B13 Atal's CLI prompt. The time is both content (you arrived at this moment) and metaphor (lock-screen). Adoptable principle: hero text that is *live data*, not static identity.
  - **Dock-as-nav with no page scroll** — first corpus instance of non-linear, non-scrolling portfolio navigation. The dock IS the architecture. Different from B13 Hugo's service-taxonomy-as-architecture (which was still scroll-based).
  - **App-icon-to-section mapping with active-app label bubble** ("Finder Logo Experience" when Experience window is open) — accessibility-friendly affordance showing which app maps to which section. First corpus instance.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **67 H1 elements** — every section/subsection heading inside windows is H1. Catastrophic semantic-structure failure. Reinforces B14 Kavi/Vishal "0 H2/H3" anti-pattern but inverted: too many H1s instead of too few. Worst document-outline pollution in the corpus.
  - **Project images loaded from `raw.githubusercontent.com`** — 9+ images fetched from project repo README files (`juanfranciscocis/DevProbe_Tesis/raw/.../Screenshot_2024-05-27_at_10.08.32_PM-removebg-preview-2.png`). Fragile: if any repo is renamed/deleted/made-private, the image breaks. Should host images locally.
  - **Default "Astro description" meta tag** — placeholder meta description not replaced. Reinforces B14 Vishal "0 meta tags" anti-pattern variant: meta tag exists but is the framework default placeholder. SEO surface = 0.
  - **Mobile experience unknown** — macOS desktop metaphor likely breaks on mobile (no dock hover, no traffic-light precision, window chrome overflows). Probably an anti-pattern for mobile users.
- **Notable patterns to consider**:
  - **macOS lock-screen as hero** — date (H2) + time (H1, live) + "Flecha" arrow to enter. **First corpus instance.** Adoptable principle: hero as a *gateway* (lock/unlock) rather than a *headline*. Different from B13 Atal's CLI prompt (also a gateway but text-based).
  - **Dock-as-primary-nav** — 6 app icons in macOS dock at bottom of screen. **First corpus instance of dock-as-primary-nav with no scroll.** Adoptable principle: replace top-nav with a dock for portfolios with few sections (≤6).
  - **App-icon-to-section mapping** — Finder→Experience, Books→Education, AppStore→Published Apps, Xcode→Projects, Reminders→Certificates, Trash→(reset/no-op). **First corpus instance of metaphor-consistent app-icon-to-section mapping.** Each macOS app is repurposed semantically: Books for education (reading), AppStore for published apps (distribution), Xcode for projects (development), Reminders for certificates (achievement list), Trash for reset. Clever.
  - **macOS traffic-light window controls (close/minimize/maximize)** — reinforces B13 Atal codified pattern. Adoptable as the close-button affordance on any modal/section-window.
  - **Active-app label bubble in dock** ("Finder Logo Experience" when Experience window is open) — first corpus instance of dock-label-on-active. Accessibility-friendly.
  - **Time-as-H1 hero with live updating** — first corpus instance. Most original hero in the corpus. Adoptable principle: hero text = live data (time, location, weather, GitHub commit count, etc.).
  - **Welcome modal with WhatsApp Me / Email Me / Call Me / Download My CV / Restart actions** — first corpus instance of a "welcome dialog" appearing after unlock. Multi-channel contact CTA (WhatsApp + Email + Phone) — first corpus instance of WhatsApp + phone-as-tel link in a portfolio.
  - **Trilingual coder signal** (Spanish "Flecha" + English content + Italian Proficiency Certificate in certificates) — first corpus instance of Spanish-language UI affordance. Subtle multilingual register.
  - **"GPA 3.8" in certificate title** (University Recognition Certificate - GPA 3.8) — first corpus instance of GPA inside certificate-list item (vs. B14 Vishal's CGPA in education section). Appropriate for a junior/QA engineer register.
  - **AppStore app modal with Cancel/Continue that links to Google Play developer page** — first corpus instance of a "go to my published apps" modal pattern. The Cancel/Continue dialog mimics the macOS App Store "open external link" confirmation.
  - **Skills modal with categorized frameworks** (QA Frameworks: Selenium/Playwright/Azure DevOps/Jira; Frontend: React/Angular/Flutter/IONIC/Bootstrap; Backend: Node/Express/FireBase/Spring Boot; Cloud: AWS/Azure/Docker; ML: TensorFlow/PyTorch/Scikit-Learn; Data: Pandas/Numpy/Matplotlib/Seaborn; DB: MySQL/SQLite/PostgreSQL/MongoDB/FireStore; DevOps: Git/GitHub/Azure DevOps; Languages: JS/TS/HTML/CSS/PHP/Python/Java/C++/Dart/Swift/Markdown/LaTeX; Spoken: Spanish Native/Italian C1/English C1) — first corpus instance of *spoken-language proficiency levels* (C1/Native) in skills. Reinforces B3 codified categorized-skills pattern with the addition of human-language proficiency.
- **Open tension update**:
  - **Hero motion that orients where to go next**: PARTIALLY resolved — the dock IS the orientation. After unlock, the user sees 6 app icons telling them exactly where they can go. Different from B13 Atal's slash-route tab strip (also dock-like). Both are dock/tab-as-orientation patterns.
  - **Scroll-driven section transitions**: STILL unsolved — Juan's portfolio *avoids* scroll entirely (no-page-scroll architecture). This is technically a resolution-by-elimination: if there's no scroll, there's no need for scroll-driven transitions. But it's not a scroll-driven-transition implementation — it's a non-scroll alternative.

---

## 74. Fayed Ishtar Chowdhury — https://portfolio-fayed.vercel.app

- **Reachable**: yes
- **First impression** (1-2 sentences): A black-background terminal-themed portfolio with rotating cog background images and a Virgil handwriting font. The terminal prompt hero ("Guest@browser ~ % ./fayed.sh") is paired with a typewriter cursor + 30 numbered "movea0"–"movea30" keyframes for spark/particle animation.
- **Visual hierarchy**: Terminal-window hero with H1 "Hi, I'm Fayed!" (Virgil 48px) + zsh prompt block below. Profile section with H1 "Fayed Ishtar Chowdhury" + role tagline + expertise list. Skills / About / Career (3 jobs) / Projects / Highlights sections.
- **Layout composition**: Single-page vertical scroll with sticky nav. Hero is a terminal-window card on black. Each section is full-width with `#id` anchors.
- **Typography** (family feel, scale, weight): **Single font — Virgil** (`Virgil, serif`). Virgil is the handwriting font used by Excalidraw. Hand-drawn aesthetic. H1 48px. First corpus instance of Virgil as the primary portfolio font.
- **Color palette** (hex codes if discernible):
  - Background pure black `rgb(0, 0, 0)`
  - Text white `rgb(255, 255, 255)`
  - Muted `oklch(0.967 0.003 264.542)` (slate-50-ish in oklch)
  - Secondary muted `oklch(0.872 0.01 258.338)` (slate-300-ish)
  - **Accent `oklch(0.809 0.105 251.813)`** (light blue / periwinkle in oklch — modern Tailwind v4 oklch color)
- **Spacing** (dense / balanced / airy): Balanced — typical Tailwind section padding. Terminal block is dense (multi-line prompt).
- **Hero section**: Terminal-window card with three rows: (1) "Hi, I'm Fayed!" H1 in Virgil, (2) zsh prompt block "Guest@browser ~ % ./fayed.sh" + "Last login: Fri, Jul 03, 2026, 15:10:29 on ttsy01" + "Guest@browser ~ % Turning ideas into code and challenges into solutions. Passionat|" with caret-blink cursor. Behind: 2 rotating cog background images (mechanical/steampunk aesthetic). **Terminal + cog + handwriting font = hybrid metaphor.**
- **Navigation**: Sticky top nav with 5 anchor links: Profile / Skills / About / Career / Projects (visible at `max-[300px]:hidden` — bizarre breakpoint, likely a Tailwind typo for `max-md:hidden`). Backdrop blur.
- **Section ordering**: Hero (terminal) → Profile (name + tagline + expertise bullet list) → Skills (Tech Stack: Languages / Frameworks / etc.) → About (2 paragraphs) → Career (3 jobs: Bevy Commerce Engineering Team Lead / GGLink Software Engineer / Upwork Freelance Web Developer) → Projects (Electron Download Manager / Celery Redis Task Queue / DX Ball Game / etc.) → Highlights → Footer (mailto + LinkedIn + GitHub).
- **Scroll experience**: Native scroll, no parallax. Cog images likely have `drift` animation (one of the 39 keyframes). Section reveals likely on scroll (Framer Motion or Tailwind transitions).
- **Animations & motion**: 39 keyframes — most-categorized:
  - **`spin`, `ping`** — Tailwind default
  - **`enter`, `exit`** — Framer Motion default
  - **`caret-blink`** — terminal cursor blink
  - **`drift`** — cog background drift/rotate
  - **`flash`** — likely alert/notification flash
  - **`Typewriter-cursor`** (×2) — typewriter effect cursor
  - **`movea0`–`movea30`** (31 keyframes) — most likely per-letter or per-spark keyframes for a typing/spark effect. **First corpus instance of 31 individually-numbered keyframes for one effect.** Could be letter-by-letter spark/particle animation on a hero text.
- **Hover interactions**: Standard Tailwind hover states. Project cards likely have hover-reveal of live-demo link.
- **Background effects**: Pure black + 2 rotating cog images (mechanical aesthetic). No gradient, no grain, no particles. Cog images are visible at hero and profile sections.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive. `max-[300px]:hidden` breakpoint is odd — likely a typo. Mobile nav may be broken at <300px width (uncommon viewport).
- **Performance perception**: Vite + React + Tailwind + Virgil font. Light. Cog images are PNG files served from same domain. No third-party images.
- **Emotional feeling**: Mechanical / steampunk / hacker-coded. The cog + terminal + handwriting font creates a "tinkerer's workshop" feel — different from B13 Atal's clean terminal or B1 Triet's minimal terminal.
- **Originality** (1-5, with note): **4/5**. Virgil handwriting font + cog background + terminal hero + 31-keyframe spark animation = a unique hybrid metaphor. Not as committed as Juan's macOS sim, but more original than Dinesh's polished template.
- **What works** (2-3 bullets):
  - **Virgil handwriting font on a developer portfolio** — first corpus instance. Different from B1 Triet's JetBrains Mono or B13 Atal's amber-on-black terminal. Virgil reads as "hand-drawn / Excalidraw / approachable" — a softer register than monospace. Adoptable principle: handwriting font for *personality* (not for body text).
  - **Terminal hero with live `Last login:` timestamp + `Guest@browser ~ %` prompt** — reinforces B13 Atal's terminal-hero pattern with a *guest-user* prompt (not the owner's name). Different from B1 codified CLI `$` prompt pattern: here the prompt is `Guest@browser ~ %` (the visitor is the guest, the owner is the script being executed). Clever inversion.
  - **31 individually-numbered keyframes (`movea0`–`movea30`)** — first corpus instance. Suggests per-letter or per-spark animation. Most granular keyframe naming in the corpus. Adoptable principle: number-suffixed keyframes for staggered letter/particle animations.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **Bare "My Portfolio" title** — reinforces B2 anti-pattern #21. Fifth corpus instance. Should be "Fayed Ishtar Chowdhury | Full-Stack Developer".
  - **Only viewport meta + author meta** — no description, no OG, no twitter:card. Reinforces B14 Vishal "0 meta tags" anti-pattern variant (some meta, but no SEO surface).
  - **`max-[300px]:hidden` nav breakpoint** — likely a Tailwind typo for `max-md:hidden` (768px). At <300px viewport (rare but exists on some foldables), nav disappears entirely with no replacement. Accessibility failure on tiny viewports.
  - **Hybrid metaphor (terminal + cog + handwriting)** — three metaphors at once (CLI prompt + mechanical cog + hand-drawn font). Reinforces B14 Kavi "commitment vs kitchen-sink" anti-pattern at the metaphor level. Less committed than Juan's macOS sim or Atal's terminal.
- **Notable patterns to consider**:
  - **`Guest@browser ~ % ./fayed.sh` prompt** — first corpus instance of *guest-user prompt* + *owner-as-script*. The visitor is "Guest", the owner is invoked as `./fayed.sh`. Inverts the standard CLI prompt pattern (B1 codified).
  - **`Last login:` timestamp in hero** — first corpus instance. Mimics macOS terminal "Last login" message. Live timestamp = "you arrived at this moment" (similar to Juan's lock-screen time-as-H1).
  - **Cog background images (×2)** — first corpus instance of mechanical/steampunk cog imagery on a developer portfolio. Reinforces B14 Kavi "video background" pattern with a *mechanical* register (vs. video / particles / gradient).
  - **Typewriter cursor animation on hero tagline** — reinforces B3 codified typewriter pattern. The tagline is truncated mid-word ("Passionat|") with a blinking cursor — implies "still typing". Adoptable as a subtle hero signature.
  - **Virgil handwriting font** — first corpus instance. Excalidraw's font. Adoptable for personality-driven portfolios (not corporate register).
  - **`./fayed.sh` filename pattern** — owner-as-shell-script. Reinforces B1 Vinit's `npx <name>` CLI companion pattern with a `./<name>.sh` variant.
  - **`oklch()` color values** — second corpus instance (after Dinesh). Tailwind v4 default. Future-proof.

---

## 75. Yuji Sato — https://yujisatojr.github.io/react-portfolio-template

- **Reachable**: yes
- **First impression** (1-2 sentences): A Material-UI React portfolio with a dark hero on white body, blue MUI default nav, and Lato single-font. Three expertise sections (Full Stack / DevOps / GenAI & LLM) signal a 2025-era generalist engineer.
- **Visual hierarchy**: 4 nav buttons (Expertise / History / Projects / Contact) + Avatar in top-left. 5 H1s (Yuji Sato / Expertise / Career History / Personal Projects / Contact) + 10 H2s + 7 H3s. Robust document outline.
- **Layout composition**: Single-page scroll. Nav with avatar + brand + 4 buttons + 2 social links. Hero (Yuji Sato + Full Stack Engineer). Section per H1.
- **Typography** (family feel, scale, weight): **Single font — Lato** (`Lato, sans-serif`). H1 88px (largest in batch). Reinforces single-font pattern. Same font as Poonam — coincidence or shared template.
- **Color palette** (hex codes if discernible):
  - Body white `rgb(255, 255, 255)`
  - H1 white `rgb(255, 255, 255)` (on dark hero background)
  - **MUI default blue** `rgb(25, 118, 210)` (`#1976d2` — Material-UI primary blue)
  - Dark text `rgb(39, 40, 34)` (`#272822` — Monokai editor background color, repurposed as text)
  - Darker `rgb(5, 15, 11)`
  - `theme-color=#000000` (meta tag)
- **Spacing** (dense / balanced / airy): Material-UI default spacing — balanced, predictable.
- **Hero section**: Dark hero with H1 "Yuji Sato" 88px Lato + paragraph "Full Stack Engineer" + 2 social-icon links (GitHub, LinkedIn). Avatar image in top-left of nav. No CTA buttons in hero (the nav IS the CTA surface).
- **Navigation**: Sticky top nav with MUI elevation. Left: avatar + brand. Right: 4 MUI buttons (Expertise / History / Projects / Contact). 2 social links. **MUI buttons instead of anchor links** — first corpus instance of MUI-button-nav. Slightly heavier visual weight than text links.
- **Section ordering**: Hero → Expertise (3 cards: Full Stack Web Development / DevOps & Automation / GenAI & LLM, each with paragraph + tech-stack pill list) → Career History → Personal Projects (Filmate AI / High Speed Chase / Astro Raiders / Datum / WeManage / BYUH COVID-19) → Contact.
- **Scroll experience**: Native scroll, no parallax. MUI default scroll behavior. No scroll-triggered animations (the 32 keyframes are mostly FontAwesome + MUI defaults).
- **Animations & motion**: 32 keyframes — most are library defaults:
  - **FontAwesome animations** (`fa-beat`, `fa-bounce`, `fa-fade`, `fa-beat-fade`, `fa-flip`, `fa-shake`, `fa-spin`) — for icon hover effects
  - **`cd-bounce-1`, `cd-bounce-2`, `cd-bounce-2-inverse`** — likely a custom slider/carousel bounce (cd = ?)
  - **`mui-auto-fill`, `mui-auto-fill-cancel`** — MUI input autofill animations (browser autofill styling)
  - **No signature motion.** Most keyframes are framework defaults. Zero custom animation.
- **Hover interactions**: FontAwesome icon hover animations (fa-bounce, fa-shake). MUI button ripple on click.
- **Background effects**: White body, dark hero (likely `#000000` or `#1976d2`-tinted dark). No gradient, no particles, no 3D, no grain.
- **3D elements**: no.
- **Responsiveness perception**: Material-UI responsive grid. Adequate.
- **Performance perception**: React + MUI + Lato + FontAwesome. Moderate. MUI adds bundle weight (emotion + @mui/material). GitHub Pages deployment — no SSR.
- **Emotional feeling**: Modern / generalist / corporate-friendly. Calm. No strong personality register.
- **Originality** (1-5, with note): **2/5**. MUI default blue + Lato + dark hero on white body = template-grade. The three-expertise-card structure (Full Stack / DevOps / GenAI) is the only structural originality. No signature motion, no signature visual.
- **What works** (2-3 bullets):
  - **Three-expertise-card structure** (Full Stack Web Development / DevOps & Automation / GenAI & LLM) — first corpus instance of *GenAI & LLM as a named expertise card* with a tech-stack pill list (OpenAI / Groq / LangChain / Qdrant / Hugging Face / LlamaIndex / Streamlit). Reinforces B14 Anurag's AI/ML pattern with a more *applied GenAI* framing (vs. model training).
  - **Avatar in nav** (small avatar image in top-left of nav, beside brand) — first corpus instance of nav-avatar. Different from hero-avatar (B3 codified). Adoptable: small avatar in nav for personal-brand reinforcement on every scroll position.
  - **Project thumbnails as link wrappers** (the thumbnail image is itself a link to the project) — first corpus instance of full-card-thumbnail-as-link. Different from "View Project" text-link pattern (B1 codified).
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **MUI default blue (`#1976d2`) as primary brand color** — first corpus instance of *unmodified framework-default primary color* on a portfolio nav. Reinforces "Tailwind-default-blur-orb" anti-pattern (B14 Anurag) at the color-choice level. Pick a brand color, don't ship the framework default.
  - **`theme-color=#000000` meta but body is white** — inconsistent meta signal. Mobile browser address bar will be black, but page is white. Should be `theme-color=#ffffff` (or the actual hero color).
  - **32 keyframes, all library defaults** — zero custom animation. Reinforces "no signature motion" pattern. Even Poonam (4 keyframes) has more animation intent. Yuji's portfolio has the *highest keyframe count with zero custom motion* — pure framework-default bloat.
- **Notable patterns to consider**:
  - **Three-expertise-card structure with GenAI & LLM as a named card** — adoptable for any 2025-2026 generalist engineer. Reinforces B14 codified AI/ML pattern with applied-GenAI framing.
  - **Avatar in nav (top-left, small)** — first corpus instance. Adoptable for personal-brand reinforcement on every scroll position.
  - **MUI-button-nav (4 buttons instead of anchor links)** — first corpus instance. Slightly heavier visual weight; not necessarily better than text links. Consider only if MUI is already the design system.
  - **Monokai-editor-dark-color as text color** (`rgb(39, 40, 34)` = `#272822` = Monokai background) — first corpus instance of editor-theme color repurposed as text color. Subtle dev-coded signal.
  - **Project list with real shipped-product links** (Filmate AI → filmate.club, Datum → datumlearn.com, WeManage → wemanage.jp, BYUH COVID-19 → byuh.edu/covid-19-case-management) — strong credibility signal. Real production apps, not just GitHub repos. Reinforces B14 Anurag's "live demo" pattern with *real production domains* (not novypro/third-party).

---

## Batch 15 Synthesis

### Patterns that *reinforce* prior findings

- **Single-font pattern** continues to dominate: 4/5 portfolios use a single font family (Poonam Lato, Dinesh Sora, Juan Quicksand, Fayed Virgil, Yuji Lato). Reinforces B1 Triet single-font extreme and B14 Dipak single-font-JetBrains-Mono pattern. *Note: two of five use Lato specifically — Lato is becoming the most-used single font in the corpus alongside JetBrains Mono.*
- **Bare "My Portfolio" title anti-pattern** persists: Poonam "My Portfolio", Fayed "My Portfolio". Reinforces B2 anti-pattern #21. Now 6+ corpus instances.
- **Bootstrap blue / MUI default blue as unmodified framework color** (Poonam Bootstrap blue, Yuji MUI `#1976d2`) — reinforces B14 Anurag's "Tailwind-default-blur-orb" anti-pattern at the color-choice level. Framework defaults are not brand colors.
- **Dark-mode near-black background** (Dinesh `#070a13`, Juan `#000000`, Fayed `#000000`) — reinforces B2 codified dark-default-2024-2026 pattern. 3/5 portfolios are dark.
- **Categorized skills with tech-stack pill lists** (Dinesh, Fayed, Yuji) — reinforces B3 codified categorized-skills pattern.
- **Project cards with Live Demo + View Code link pair** (Dinesh, Fayed) — reinforces B11/B12 codified project-card pattern.
- **Sticky top nav with brand mark + anchor links + CTA** (Dinesh, Fayed) — reinforces B1 codified sticky-nav pattern. Dinesh's `{ DB }` monogram reinforces B12 curly-brace brand mark.
- **MacOS traffic-light window chrome** (Juan) — reinforces B13 Atal codified pattern. Juan extends to a full desktop simulation.
- **Terminal/CLI hero** (Fayed `Guest@browser ~ % ./fayed.sh`) — reinforces B1 codified CLI hero pattern and B1 Vinit's `npx <name>` CLI companion with a `./<name>.sh` variant.
- **Typewriter cursor on hero tagline** (Fayed) — reinforces B3 codified typewriter pattern.
- **Section-stripe rhythm via `bg-secondary/20`** (Dinesh) — reinforces B14 codified dark-portfolio pattern.
- **Avatar in nav** (Yuji) — *variant* of B3 hero-avatar pattern, relocated to nav.
- **Tailwind v4 `oklch()` color values** (Dinesh, Fayed) — second and third corpus instances (after B14 first oklch signal). Trend confirmation: oklch is the new default.

### Patterns that *contradict* or refine earlier findings

- **67 H1 elements on one page** (Juan) — REFINES B14 Kavi/Vishal "0 H2/H3" anti-pattern with the *opposite extreme*: too many H1s instead of too few. Juan's document outline is `H1 × 67 + H2 × 1 + H3 × 0`. The *intent* was probably "every heading is the most important in its window" — but semantically, every heading cannot be H1. Most extreme document-outline pollution in the corpus. Cautionary: macOS-window metaphor breaks HTML heading semantics if implemented naively.
- **Project images loaded from `raw.githubusercontent.com`** (Juan — 9+ images) — REFINES B1 Bhushan "shipping broken third-party widgets" anti-pattern with a *fragile-image-hosting* variant. Different from third-party API widgets (GitHub stats): here, *images* are loaded from raw GitHub URLs. If repo is renamed/deleted/made-private, images break. Should host images locally.
- **Time-as-H1 hero** (Juan — live `3:08` at 96px Quicksand) — REFINES B3 EMF's three-style H1 and B14 Vishal's wave-text H1 with a *live-data H1* variant. Different from all prior corpus H1 patterns: the H1 is *not* the owner's name (Juan's name is a separate H1 below the time). First corpus instance of *hero-H1-is-live-data*.
- **Non-scrolling desktop-metaphor architecture** (Juan) — CONTRADICTS the implicit assumption that portfolios are scroll-based pages. Juan's portfolio has *no page scroll* — the desktop is fixed, windows open on top. First corpus instance of non-scrolling portfolio architecture. Reframes the open tension "scroll-driven section transitions" — if there's no scroll, the tension dissolves by elimination (not by resolution).
- **Guest-user prompt pattern** (Fayed `Guest@browser ~ %`) — REFINES B1 codified CLI prompt pattern with a *visitor-as-guest* inversion. The standard pattern is `$ <owner-name>` or `npx <owner-name>` (visitor invokes owner). Fayed's pattern makes the visitor the prompt user ("Guest") and the owner the script being executed (`./fayed.sh`). Different relationship between visitor and owner.
- **Dual-accent palette: cyan + amber on near-black** (Dinesh `#0acce6` cyan + `#f59f0a` amber) — REFINES B13 Atal's "amber-on-near-black terminal palette" with a *dual-accent* variant. Atal's single amber accent on near-black avoids the green/cyan terminal cliché; Dinesh's dual cyan+amber on near-black also avoids the cliché while adding a status-color dimension (cyan = primary, amber = status/highlight). Adoptable dual-accent pattern.
- **Virgil handwriting font on a developer portfolio** (Fayed) — CONTRADICTS the implicit assumption that developer portfolios use monospace or geometric sans-serif fonts. Virgil (Excalidraw's handwriting font) reads as "approachable / hand-drawn / non-corporate". First corpus instance. Reframes the codified two-font/single-font pattern with a *register-shift* variant: handwriting font signals personality, monospace signals technical, geometric sans signals corporate.
- **MUI default blue as unmodified framework color** (Yuji `#1976d2`) — REFINES B14 Anurag's "Tailwind-default-blur-orb" anti-pattern at the *color-choice* level. Framework defaults are not brand colors. Different from Poonam's Bootstrap blue (which is at least the theme color of the Bootstrap template). Yuji's MUI blue is the unmodified React default — most-default framework color in the corpus.
- **Sonner toast library** (Dinesh) — REFINES B14 codified "toast for form feedback" pattern with a specific modern library (Sonner). First corpus instance of Sonner. Reinforces toast-as-feedback pattern with a 2024-2026 library choice.
- **Codeforces Master rank-title in hero** (Dinesh) — REFINES B14 Anurag's LeetCode-in-hero pattern with the *rank-title* variant. Different from a link: Dinesh's "Codeforces Master" is a *rank achieved* (top 0.5% globally), not just a profile link. Stronger credibility signal.
- **Avatar in nav (not hero)** (Yuji) — REFINES B3 codified hero-avatar pattern with a *nav-avatar* variant. Relocates the avatar from hero (one-time visibility) to nav (every-scroll visibility). Adoptable for personal-brand reinforcement on every scroll position.
- **App-icon-to-section metaphor mapping** (Juan: Finder→Experience, Books→Education, AppStore→Published Apps, Xcode→Projects, Reminders→Certificates, Trash→reset) — REFINES B13 Hugo's service-taxonomy-as-architecture with a *metaphor-consistent* variant. Each macOS app is repurposed semantically: Books for education (reading), AppStore for published apps (distribution), Xcode for projects (development), Reminders for certificates (achievement list), Trash for reset. First corpus instance of *app-icon-to-section metaphor mapping*.

### New patterns unique to this batch

- **macOS desktop simulation as portfolio architecture** (Juan) — **FIRST corpus instance.** Lock-screen hero (date+time) → desktop with dock → app windows as sections. Most-committed metaphor in the corpus. Four original moves in one portfolio: (1) time-as-H1 hero, (2) dock-as-nav, (3) app-icon-to-section mapping, (4) no-page-scroll architecture.
- **Time-as-H1 hero with live updating** (Juan — `3:08` at 96px Quicksand) — **FIRST corpus instance.** Most original hero in the corpus. The H1 is *live data* (current time), not static identity. Adoptable principle: hero text = live data.
- **Dock-as-primary-nav with no scroll** (Juan) — **FIRST corpus instance of dock-as-primary-nav with no page scroll.** Different from B13 Atal's slash-route tab strip (which is a horizontal tab strip, not a macOS dock). Adoptable for portfolios with ≤6 sections.
- **Lock-screen-as-gateway hero** (Juan — date H2 + time H1 + "Flecha" arrow to unlock) — **FIRST corpus instance of hero-as-gateway (lock/unlock).** Different from B13 Atal's CLI prompt (also a gateway but text-based).
- **67 H1 elements on one page** (Juan) — **FIRST corpus instance of catastrophic H1 overuse.** Most extreme document-outline pollution in the corpus. Cautionary: metaphor-driven portfolios must still respect HTML semantics.
- **App-icon-to-section metaphor mapping** (Juan — Finder→Experience, Books→Education, etc.) — **FIRST corpus instance.** Metaphor-consistent section naming.
- **Active-app label bubble in dock** (Juan — "Finder Logo Experience" when Experience window is open) — **FIRST corpus instance of dock-label-on-active.** Accessibility-friendly.
- **Welcome modal with WhatsApp + Email + Phone + CV + Restart actions** (Juan) — **FIRST corpus instance of multi-channel welcome modal.** First corpus instance of WhatsApp link + tel: link in a portfolio.
- **Spoken-language proficiency levels in skills** (Juan — Spanish Native / Italian C1 / English C1) — **FIRST corpus instance of CEFR-level proficiency labels.** Different from B3 codified categorized-skills (which is tech-only).
- **GPA inside certificate-list item** (Juan — "University Recognition Certificate - GPA 3.8") — **FIRST corpus instance of GPA in certificate list.** Different from B14 Vishal's CGPA-in-education.
- **Trilingual coder signal** (Juan — Spanish "Flecha" + English content + Italian proficiency) — **FIRST corpus instance of Spanish-language UI affordance.**
- **AppStore modal with Cancel/Continue linking to Google Play dev page** (Juan) — **FIRST corpus instance of "go to my published apps" modal pattern.** Mimics macOS App Store "open external link" confirmation.
- **Dual-accent palette: cyan + amber on near-black** (Dinesh) — **FIRST corpus instance of cyan+amber dual-accent on near-black.** Avoids green/cyan terminal cliché. Adoptable dual-accent pattern.
- **Codeforces Master rank-title in hero** (Dinesh) — **FIRST corpus instance of competitive-programming rank-title (not just link) in hero.**
- **AI Agent / n8n / RAG as named expertise** (Dinesh) — **FIRST corpus instance of *applied AI Agent developer* as an expertise-card title.** Reinforces B14 Anurag's AI/ML pattern with applied-AI framing.
- **Sonner toast library** (Dinesh) — **FIRST corpus instance of Sonner.**
- **`{ DB }` monogram brand mark in nav** (Dinesh) — reinforces B12 curly-brace brand mark pattern. Second corpus instance.
- **`oklch()` color values** (Dinesh, Fayed) — second/third corpus instances. Tailwind v4 default.
- **Virgil handwriting font** (Fayed) — **FIRST corpus instance of Virgil (Excalidraw font) as primary portfolio font.**
- **`Guest@browser ~ % ./fayed.sh` guest-user prompt** (Fayed) — **FIRST corpus instance of guest-user prompt + owner-as-script.** Inverts standard CLI prompt.
- **`Last login:` timestamp in hero** (Fayed) — **FIRST corpus instance.** Mimics macOS terminal "Last login" message. Live timestamp.
- **31 individually-numbered keyframes (`movea0`–`movea30`)** (Fayed) — **FIRST corpus instance of 31 individually-numbered keyframes for one effect.** Most granular keyframe naming in the corpus.
- **Cog background images (×2, mechanical/steampunk)** (Fayed) — **FIRST corpus instance of mechanical cog imagery on a developer portfolio.**
- **App-store-link pairs (Play + Apple) on project cards** (Poonam — Jio News + Jio Talks) — **FIRST corpus instance of paired Play Store + Apple Store links on project cards.**
- **5-role experience timeline with internal-role-progression** (Poonam — SMTS→MTS at Salesforce, Backend Dev→Automation Tester at Reliance Jio) — **FIRST corpus instance of *internal-role-progression* shown explicitly.** Reinforces B12 codified experience-timeline with promotion/lateral signal.
- **Location-tagged company names in H3** (Poonam — "Salesforce, Bangalore" / "Reliance Jio Infocomm Limited, Mumbai") — **FIRST corpus instance of *location-on-company-H3* (not in `<title>`).** CV/register-level location signal. Different from B14 Sambhu's "location in `<title>` for SEO" pattern.
- **Avatar in nav (top-left, small)** (Yuji) — **FIRST corpus instance of nav-avatar.** Different from B3 hero-avatar.
- **MUI-button-nav (4 buttons instead of anchor links)** (Yuji) — **FIRST corpus instance of MUI-button-nav.**
- **Project-thumbnail-as-link-wrapper** (Yuji — thumbnail image is the link) — **FIRST corpus instance of full-card-thumbnail-as-link.** Different from "View Project" text-link.
- **Monokai-editor-dark-color as text color** (Yuji `#272822`) — **FIRST corpus instance of editor-theme color repurposed as text color.** Subtle dev-coded signal.
- **Three-expertise-card structure with GenAI & LLM as a named card** (Yuji — Full Stack / DevOps / GenAI & LLM) — **FIRST corpus instance of *applied GenAI* as a named expertise card** with a tech-stack pill list (OpenAI / Groq / LangChain / Qdrant / Hugging Face / LlamaIndex / Streamlit).
- **Copyright © 2019 stale-dated footer** (Poonam) — **FIRST corpus instance of stale-dated copyright.** Signals neglect. Anti-pattern.

### Updated answers to the open tensions

| Tension | Status after batch 15 (75 portfolios) |
|---|---|
| **Sound** | ✅ Resolved in batch 14 (Kavi). No new sound instances this batch. |
| **Scroll-driven section transitions** | **STILL unsolved — but a non-scroll alternative appeared.** Juan Cisneros's portfolio has *no page scroll* (macOS desktop simulation with window-on-window architecture). This is a resolution-by-elimination: if there's no scroll, the tension dissolves. But it's not a scroll-driven-transition implementation — it's an alternative architecture. The original tension (scroll-driven section morphing on a scrolling page) remains 0 in 75. Dinesh, Fayed, Poonam, Yuji all use native scroll with no scroll-driven transitions. Watch continues. |
| **Designed loading state (fully wired)** | **STILL unsolved. 0 fully-wired in 75.** No portfolio in batch 15 has a fully-wired preloader. Fayed has `caret-blink` + `Typewriter-cursor` keyframes (typing-animation loading state, but only on hero tagline — not a page-load preloader). Juan's lock-screen-as-gateway is the closest *architectural* loading-state (the lock-screen IS a designed loading state for the desktop) — but it's not a preloader, it's the hero. Watch continues. |
| **Hero motion that tells user where to go next** | **PARTIALLY resolved — Juan's dock-as-nav is the strongest signal yet.** After unlocking Juan's lock-screen hero, the user sees 6 app icons in a dock at the bottom — telling them exactly where they can go (Experience / Education / Published Apps / Projects / Certificates / Reset). Different from B13 Atal's slash-route tab strip (horizontal text tabs) — Juan's is a macOS dock (vertical-positioned app icons). Both are dock/tab-as-orientation patterns. Juan's is more committed (full metaphor). |
| **Haptic-style mobile feedback** | **STILL unsolved. 0 in 75.** No portfolio in batch 15 implements `navigator.vibrate()` or haptic-style mobile feedback. Watch continues. |

### Anti-patterns flagged this batch

- **Bare "My Portfolio" title** (Poonam, Fayed) — reinforces B2 anti-pattern #21. Now 6+ corpus instances.
- **Zero / placeholder meta tags** (Poonam 0 meta, Fayed viewport+author only, Juan "Astro description" placeholder) — reinforces B14 Vishal "0 meta tags" anti-pattern with a *placeholder* variant. Three more corpus instances.
- **67 H1 elements on one page** (Juan) — first corpus instance of H1 overuse. Worst document-outline pollution in the corpus.
- **Project images from `raw.githubusercontent.com`** (Juan — 9+ images) — fragile image hosting. First corpus instance.
- **`max-[300px]:hidden` nav breakpoint** (Fayed) — likely Tailwind typo. Nav disappears on tiny viewports.
- **Copyright © 2019 stale-dated footer** (Poonam) — first corpus instance of stale-dated copyright. Signals neglect.
- **MUI default blue (`#1976d2`) as unmodified framework color** (Yuji) — framework defaults are not brand colors.
- **`theme-color=#000000` meta but body is white** (Yuji) — inconsistent meta signal.
- **32 keyframes, all library defaults** (Yuji) — zero custom animation. Pure framework-default bloat.
- **8 nav links is too many** (Dinesh — 7 anchor + CTA = 8) — exceeds B3 codified "5±2" rule.
- **Hybrid metaphor (terminal + cog + handwriting)** (Fayed) — three metaphors at once. Less committed than single-metaphor portfolios.
- **novypro.com third-party dashboard links** (Dinesh) — link-rot risk on third-party dashboard-hosting service.

### Adoptability recommendations for the premium portfolio being built

- **Adopt (strongly)**: Juan Cisneros's **time-as-H1 hero with live updating** — most original hero in the corpus. The H1 is *live data* (current time), not static identity. Adoptable principle: hero text = live data. Pair with a static name H1 below the time.
- **Adopt (strongly)**: Juan Cisneros's **dock-as-primary-nav with no scroll** for portfolios with ≤6 sections. Different from horizontal tab strip. Most-committed navigation metaphor in the corpus. Adoptable only if the metaphor is fully committed (otherwise falls into "hybrid metaphor" anti-pattern).
- **Adopt (strongly)**: Juan Cisneros's **app-icon-to-section metaphor mapping** (Finder→Experience, Books→Education, AppStore→Published Apps, Xcode→Projects, Reminders→Certificates, Trash→reset). Each icon is semantically repurposed. Adoptable principle: metaphor-consistent section naming.
- **Adopt (strongly)**: Dinesh Barri's **dual-accent palette: cyan + amber on near-black** (`#0acce6` cyan + `#f59f0a` amber on `#070a13`). Avoids green/cyan terminal cliché. Cyan for primary actions, amber for status/highlights. Adoptable dual-accent pattern.
- **Adopt (strongly)**: Dinesh Barri's **Codeforces Master rank-title in hero** (not just a profile link). Stronger credibility signal than a link. Adoptable for any portfolio claiming algorithms credibility.
- **Adopt (strongly)**: Dinesh Barri's **AI Agent / n8n / RAG as named expertise** — 2025-2026 applied-AI framing. Different from generic "AI/ML" (which implies model training). Signals applied AI (workflow automation, RAG assistants).
- **Adopt**: Poonam Chauhan's **app-store-link pairs (Play + Apple) on project cards** for mobile-app projects. Strong credibility signal.
- **Adopt**: Poonam Chauhan's **5-role experience timeline with internal-role-progression** — SMTS→MTS / Backend Dev→Automation Tester within same company. Reinforces B12 codified experience-timeline with internal-progression signal.
- **Adopt**: Poonam Chauhan's **location-tagged company names in H3** ("Salesforce, Bangalore" / "Reliance Jio, Mumbai"). CV/register-level location signal.
- **Adopt**: Fayed's **`Guest@browser ~ % ./<name>.sh` guest-user prompt** — inverts standard CLI prompt. Visitor is "Guest", owner is invoked as `./<name>.sh`. Reinforces B1 Vinit `npx <name>` CLI companion pattern with a `./<name>.sh` variant.
- **Adopt**: Fayed's **`Last login:` timestamp in hero** — mimics macOS terminal "Last login" message. Live timestamp = "you arrived at this moment".
- **Adopt**: Fayed's **Virgil handwriting font** for personality-driven portfolios (not corporate register). First corpus instance. Adoptable as the *personality* font in a two-font system (handwriting for headlines, monospace for code, sans-serif for body).
- **Adopt**: Fayed's **31 individually-numbered keyframes (`movea0`–`movea30`)** for staggered letter/particle animations. Most granular keyframe naming in the corpus.
- **Adopt**: Yuji Sato's **avatar in nav (top-left, small)** for personal-brand reinforcement on every scroll position. Different from B3 hero-avatar (one-time visibility).
- **Adopt**: Yuji Sato's **three-expertise-card structure with GenAI & LLM as a named card** for 2025-2026 generalist engineers. Tech-stack pill list per card.
- **Adopt**: Yuji Sato's **project-thumbnail-as-link-wrapper** (full card thumbnail is the link). Different from "View Project" text-link pattern.
- **Adopt**: Juan Cisneros's **active-app label bubble in dock** ("Finder Logo Experience" when window is open) — accessibility-friendly affordance.
- **Adopt**: Juan Cisneros's **CEFR-level proficiency labels for spoken languages** (Spanish Native / Italian C1 / English C1) in skills section. First corpus instance.
- **Adopt**: Juan Cisneros's **Welcome modal with WhatsApp + Email + Phone + CV + Restart actions** for multi-channel contact CTA. First corpus instance of WhatsApp + tel: link in a portfolio.
- **Consider**: Dinesh's **Sonner toast library** for form-submit feedback. Modern React toast lib.
- **Consider**: Yuji's **Monokai-editor-dark-color (`#272822`) as text color** — subtle dev-coded signal.
- **Consider**: Fayed's **cog background images** for mechanical/steampunk register (not corporate).
- **Avoid**: Poonam's **bare "My Portfolio" title** — pick `{Name} | {Role}` or `{Name} — {Tagline}`.
- **Avoid**: Poonam's **Copyright © 2019 stale-dated footer** — keep copyright year current (or remove the year entirely).
- **Avoid**: Juan's **67 H1 elements** — even in a metaphor-driven portfolio, respect HTML heading semantics. Use H1 once per section/window, H2 for subsections.
- **Avoid**: Juan's **project images from `raw.githubusercontent.com`** — host images locally. Fragile image hosting.
- **Avoid**: Fayed's **`max-[300px]:hidden` nav breakpoint typo** — verify Tailwind breakpoints.
- **Avoid**: Yuji's **MUI default blue as unmodified framework color** — pick a brand color.
- **Avoid**: Yuji's **`theme-color=#000000` meta but body is white** — verify meta consistency.
- **Avoid**: Dinesh's **8 nav links** — keep to 5±2.
- **Avoid**: Fayed's **hybrid metaphor (terminal + cog + handwriting)** — commit to one metaphor.

### Strongest portfolio in batch 15

**Juan Cisneros (portfoliojuanfranciscocisneros.web.app)** — 5/5 originality. The most original portfolio in the corpus alongside B13 Atal's terminal. Four original moves in one portfolio: (1) time-as-H1 hero with live updating, (2) dock-as-primary-nav with no scroll, (3) app-icon-to-section metaphor mapping, (4) non-scrolling desktop-metaphor architecture. The macOS desktop simulation is fully committed — lock-screen hero → desktop with dock → app windows as sections → traffic-light close/minimize/maximize controls. The weakest aspect is semantic structure (67 H1 elements) — but the metaphor is the strongest in the corpus. Reference implementation for: time-as-data hero, dock-as-nav, metaphor-consistent section mapping, no-page-scroll architecture, multi-channel welcome modal, CEFR-level spoken-language proficiency, and app-icon-to-section metaphor.

### Weakest portfolio in batch 15

**Poonam Chauhan (poo17nam.github.io/profile)** — 2/5 originality. A 2019 Bootstrap resume site with bare "My Portfolio" title, zero meta tags, Copyright © 2019 stale-dated footer, and zero custom animation. The credibility comes from the resume content (Salesforce + Telstra + Reliance Jio + Jio News/Jio Talks Play Store apps), not the design. Cautionary artifact — anti-pattern reference for: bare title, zero meta tags, stale-dated copyright. The shipped-app credibility (Play + Apple Store link pairs) is the only adoptable pattern.

### Honorable mention

**Dinesh Barri (dineshbarri.dev)** — 3/5 originality. The strongest *modern data-science / applied-AI* portfolio in the corpus. Reference implementation for: dual-accent cyan+amber on near-black palette (avoids green/cyan terminal cliché), Codeforces Master rank-title in hero, AI Agent / n8n / RAG as named expertise, Sonner toast library, `{ DB }` monogram brand mark, and oklch Tailwind v4 colors. The design itself is Next.js/Tailwind template-grade (section-stripe rhythm is the most-codified 2024-2026 pattern), but the *content positioning* (Codeforces Master + applied AI Agent + RAG) is the most 2025-2026 relevant in the corpus.

### Notable failure

None this batch — all 5 portfolios reachable. No domain-expired parking pages, no DNS failures, no 404s. First batch since batch 1 with zero unreachable portfolios.

### Open tensions update summary

- **Sound**: ✅ Resolved in batch 14. No new instances.
- **Scroll-driven section transitions**: STILL 0 in 75. **Non-scroll alternative appeared** (Juan's macOS desktop sim) — but not a scroll-driven implementation. Watch continues.
- **Designed loading state (fully wired)**: STILL 0 fully-wired in 75. **Architectural-loading-state appeared** (Juan's lock-screen-as-gateway hero) — but it's the hero, not a preloader. Watch continues.
- **Hero motion that tells user where to go next**: PARTIALLY resolved — Juan's dock-as-nav is the strongest signal yet (stronger than B13 Atal's slash-route tab strip).
- **Haptic-style mobile feedback**: STILL 0 in 75. Watch continues.

---

## Screenshots saved

`/home/z/my-project/research/screenshots/batch_15/`:
- 71_poonam_{hero,mid1,mid2,bottom}.png (4)
- 72_dinesh_{hero,mid1,mid2,mid3,bottom}.png (5)
- 73_juan_{hero,after_click,unlocked,welcome,finder,books,appstore,appstore_after,reminders,xcode,trash}.png (11)
- 74_fayed_{hero,mid1,mid2,mid3,bottom}.png (5)
- 75_yuji_{hero,mid1,mid2,bottom}.png (4)

Total: 29 screenshots.
