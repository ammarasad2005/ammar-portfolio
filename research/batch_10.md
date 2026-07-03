# Batch 10 — Portfolios 46–50

> Research Round 3, Batch 10 of 20. Five portfolios analyzed.
> Carried-forward open tensions to watch for: scroll-driven section transitions (0 in 45); sound (0 in 45); real 3D geometric scene (0 in 45 — only WebGL particles/fluid so far); hero motion that tells user where to go next (partial); mobile-specific gesture/haptic interactions (0 in 45); loading state fully wired up (B9 designed preloader CSS but didn't render it).
> Special watch for this batch: Vivek Patel Ubuntu (famous Ubuntu desktop clone — how far can OS metaphor go?); Vedas Dixit (desktop in URL — another desktop metaphor?).

---

## 46. Mehdi Ali — https://exoo25.github.io

- **Reachable**: yes (HTTP 200; GitHub Pages static)
- **First impression**: A junior-tier dark personal site with Ubuntu (typeface) branding and an unfinished feel. Typos in H2 ("Analaytics", "freelauncer") and a default GitHub Pages 404 confirm a beginner portfolio.
- **Visual hierarchy**: One small H1 ("Mehdi", 40px/700) at the top, then 6 H2 section headings, then 8 H3s for project names. Hierarchy is conventional but flat — every section title is the same size/weight.
- **Layout composition**: Single page, max-width container, top nav (Projects / About Me / Contact) sticky in header. Each section is full-width, vertically stacked. Project cards are 2x4 grid.
- **Typography**: Ubuntu (Google) sans-serif throughout + Quicksand for some accent text + Font Awesome icons + "Times New Roman" leaking through (anti-pattern — incomplete font fallback chain). H1 40px/700, body 16px. No display font, no mono. Single-font system at junior execution.
- **Color palette**: Body bg `rgb(31,31,31)` (warm near-black), text `rgb(255,255,255)` (pure white). Accent appears to be a gradient (the `gradient-animation` keyframe cycles colors through the hero). No tint discipline — pure white-on-near-black.
- **Spacing**: Dense. Narrow gutters, tight vertical rhythm.
- **Hero section**: Centered name "Mehdi" with a gradient text fill (animated via `gradient-animation` keyframe). Nav below. No imagery. No live data.
- **Navigation**: Sticky header `<nav>` with 3 anchor links (Projects, About Me, Contact). No mobile drawer observed.
- **Section ordering**: `header` → `nav` → `section#about` → `section#stats` → `section#Analaytics` (typo) → `section#projects` → `section#freel` (truncated "freelancer") → `section#contact` → `footer`.
- **Scroll experience**: Plain native scroll. `fadeIn` / `slideIn` keyframes suggest scroll-triggered reveals (likely via IntersectionObserver or simple on-load animations).
- **Animations & motion**: 4 keyframes total — `gradient-animation` (hero text), `fadeIn`, `slideIn`, `fillBar` (likely for skill bars). Purposeful count, but the skill-bar fill pattern is an anti-pattern (self-rated percentages were called out in B6 anti-pattern #22).
- **Hover interactions**: Standard anchor + button hovers. Nothing notable.
- **Background effects**: Plain dark. No particles, no grain, no gradient.
- **3D elements**: no.
- **Responsiveness perception**: Standard responsive grid. No bespoke mobile interactions.
- **Performance perception**: Loads fast (0 external scripts; only Font Awesome CSS). Very lightweight.
- **Emotional feeling**: Junior / unfinished / template-y.
- **Originality**: 1/5 — generic dark developer portfolio with typos and GitHub Pages default 404. No signature design choice.
- **What works**:
  - Extremely lightweight (0 scripts, 1 CDN CSS) — fast load.
  - Honest 4-keyframe budget; motion is restrained.
  - Project names are real (Py-Hurts-My-Arms, Image Generator, PDF Protector App, TOTP Generator, Pomocut, Sentence-Press, Coinflipper, HtmlProg) — actual built things, not template placeholders.
- **What does NOT work**:
  - H2 typos: "Github Analaytics" and "I am a new freelauncer" — unprofessional.
  - Default GitHub Pages 404 — no designed 404 page.
  - Title "Mehdi's Portfolio" with the literal word "Portfolio" — anti-pattern #33 from B8.
  - "Times New Roman" leaking through the font stack — incomplete typography system.
- **Notable patterns to consider**:
  - **Anti-pattern reinforcement**: Title says "Portfolio" (B8 anti-pattern #33); GitHub Pages default 404 (anti-pattern from B1).
  - **"I am a new freelancer"** honesty in H2 is disarming but reads junior. (Compare to Vinit B7's senior-consultant register, which inverts this.)

---

## 47. Vivek Patel — https://vivek9patel.github.io

- **Reachable**: yes (HTTP 200; GitHub Pages, Next.js static export)
- **First impression**: A genuine Ubuntu desktop replica in the browser. Lock screen → click to unlock → full desktop with Yaru theme, top status bar with Activities + live clock, left dock with app icons, right-click context menus. The metaphor is total.
- **Visual hierarchy**: ZERO semantic headings (0 H1, 0 H2, 0 H3). Everything is rendered as `<div>`s with Tailwind classes. The visible hierarchy is the desktop UI chrome itself (top bar → dock → windows → wallpaper).
- **Layout composition**: Full-viewport desktop. Top status bar (Activities | live time), left-side dock with app icons (Chrome, About Vivek, Trash, Contact Me, GitHub, Ask Tars), right-click anywhere opens a desktop context menu (New Folder, Paste, Show Desktop in Files, Open in Terminal, Change Background, Display Settings, Settings, Enter Full Screen), right-click on dock icon opens a portfolio-context menu (🌟 Star this Project, ❗ Report bugs, 🙋‍♂️ Follow on Linkedin, 🤝 Follow on Github, 📥 Contact Me, 🧹 Reset Ubuntu). Windows open for each app.
- **Typography**: Ubuntu (the typeface) sans-serif throughout. Body 16px. No display font, no mono. Same font as Mehdi's portfolio (46) but used here with full OS-chrome commitment, which makes it read as deliberate rather than default.
- **Color palette**: Ubuntu Yaru dark — `bg-ub-grey` (Ubuntu's grey), `text-ubuntupurple` (`#77216F`-ish), Ubuntu orange accent (`#E95420`-ish). Wallpaper is `./images/wallpapers/wall-2.webp`. Top bar dark grey. Dock translucent dark.
- **Spacing**: OS-tight — the chrome uses real Ubuntu spacing (24px top bar, 48px dock width, etc.). Airy inside windows.
- **Hero section**: There is no hero — the entry point is the lock screen with blurred wallpaper bg, large white clock "1:37 PM" + date "Fri Jul 3" + "Click or Press a key to unlock" prompt. After unlock, the "hero" is the desktop itself.
- **Navigation**: Dock icons are the nav. Click an app → window opens. The dock is the IA.
- **Section ordering**: Lock screen → boot screen (Ubuntu logo + spinner) → desktop (Activities bar + dock + windows). Apps: Google Chrome, About Vivek, Trash, Contact Me, GitHub, Ask Tars.
- **Scroll experience**: No scroll — the desktop fits the viewport. Windows inside apps may scroll.
- **Animations & motion**: 5 keyframes total, all purposeful: `pulse`, `spin` (boot spinner), `transformDownShow` (window open), `closeWindow` (window close), `scaleAppImage` (dock icon hover). Restrained for such an ambitious UI.
- **Hover interactions**: Dock icons scale on hover (`scaleAppImage`). Right-click reveals context menus. Cursor changes (cursor-pointer on dock items, default on desktop).
- **Background effects**: Wallpaper `wall-2.webp` (Ubuntu stock-style), blurred behind the lock screen.
- **3D elements**: no (visual 3D illusion via CSS transforms on windows, but no real 3D).
- **Responsiveness perception**: Designed for desktop. On mobile, the dock and top bar collapse — but the metaphor degrades (a desktop OS on a phone screen feels wrong).
- **Performance perception**: 37 imgs (all SVG icons from Yaru theme, very small), 0 canvas, 0 iframe. Next.js static export → fast. 5 keyframes only.
- **Emotional feeling**: Playful / committed / show-off-y in the best way.
- **Originality**: 5/5 for concept (full Ubuntu desktop clone), 4/5 for execution (semantic HTML missing, accessibility fail). Most conceptually original portfolio in batch 10.
- **What works**:
  - **Total metaphor commitment** — the entire OS chrome is replicated: lock screen, boot screen, status bar, dock, windows, context menus, "Reset Ubuntu" reset button. This is what "commitment over kitchen-sink" looks like taken to the extreme.
  - Right-click context menus are the most original interaction in the corpus — first corpus instance of right-click-as-portfolio-nav.
  - "🧹 Reset Ubuntu" in the dock-icon context menu — a self-aware wink acknowledging the metaphor is a costume.
  - Restrained keyframe count (5) for such an ambitious UI — motion is scoped to OS-meaningful events (window open/close, dock hover, boot spin).
- **What does NOT work**:
  - **ZERO semantic HTML** — 0 H1/H2/H3. Entire content is divs. Catastrophic accessibility (screen readers get nothing).
  - **No `<main>`, no `<nav>`, no `<section>`** — only `<div id="__next">`. Anti-pattern (semantic invisibility).
  - Default Next.js 404 page ("404: This page could not be found"). No designed 404.
  - The desktop metaphor is genuinely costume on mobile — there's no graceful degradation to a phone-friendly layout.
  - "Ask Tars" dock app — opaque name (TARS = the robot from Interstellar? an AI chatbot?). Label doesn't communicate what it does.
- **Notable patterns to consider**:
  - **NEW: Full current-OS-desktop metaphor** — extension of Artur Bień's Windows 95 (B5) to a *current* OS (Ubuntu Yaru). Where Artur's Win95 reads as retro-nostalgia, Vivek's Ubuntu reads as "I daily-drive Linux and want you to know it." The metaphor is a credibility signal for a specific identity.
  - **NEW: Right-click context menus as nav** — first corpus instance. Reveals that right-click is a viable interaction surface for portfolio navigation (with the caveat that it's invisible to mobile users and many users don't right-click).
  - **NEW: Lock screen as entry transition** — first corpus instance of a "click to enter" gate before the portfolio loads. (B4 Barthélémy's pull-over keyframe is the closest prior art; Vivek's lock screen is more literal.)
  - **NEW: "Reset OS" self-aware reset button** — first corpus instance. A button that acknowledges the metaphor is a UI overlay and lets the user reset state. Self-aware humor.
  - **NEW: App-as-content-unit** — each portfolio section (About, Contact, GitHub) is an "app" you launch from the dock. The dock IS the IA. Extends Vinit's /now + /practices + /books subpage architecture to "each subpage is an app."
  - **Pattern reinforcement**: Domain-native conceptual metaphor (B1 codified pattern) — but at maximum strength. Triet's Unix shell was metaphor-as-decoration; Vivek's Ubuntu is metaphor-as-entire-UI.

---

## 48. Karan Chhunchha — https://www.karanchhunchha.in

- **Reachable**: yes (HTTP 200; redirects to www; Next.js on Vercel; heavy bundle)
- **First impression**: A premium "Creative Engineer" portfolio with massive typography (204.8px/900 "KARAN" display H1), dark `rgb(5,5,5)` background, three-font system (Outfit + IBM Plex Mono + clashDisplay), 3 canvases (one 2D noise bg + two real Three.js r184 geometric scenes). Designed 404 page. Live GitHub push activity in footer. Visitor "signature" guestbook. Most original portfolio in batch 10 and one of the strongest in the corpus.
- **Visual hierarchy**: Hero: 204.8px display H1 "KARAN" (font-weight 900) dominates. Below: section headings 7 H2s ("Curated Work", "LET'S BUILD SOMETHING", "Thinking beyond the interface.", "The Magic Behind", "Decoding logic && the lyrics", "Let's create something real."), 6 H3s for project names. Hierarchy is dramatic — display H1 vs. smaller section H2s.
- **Layout composition**: Sticky header (Home/About/Work/Blogs + "Book a Call" CTA). Hero is full-viewport (h-100dvh) with 3D noise canvas behind. Then `main#systems-grid` (max-w-1400px mx-auto). Then skills section (with interactive 3D canvas). Then "behind-curtains" section. Then footer (bg `#050505`).
- **Typography**: THREE-font system: Outfit (Google) primary sans + IBM Plex Mono for eyebrows/labels + clashDisplay (custom) for display. H1 204.8px/900 (Outfit). Body ~16px. This is a developer-coded feel escalated to creative-engineer register.
- **Color palette**: Bg `rgb(10,10,10)` body, `rgb(5,5,5)` html, footer `rgb(5,5,5)` (near-pure-black warm). Text `rgb(237,237,237)` (warm off-white). Two-bg-color system (10/5) creates section separation without dividers.
- **Spacing**: Balanced. `py-section` (custom Tailwind scale). Generous vertical rhythm.
- **Hero section**: Full-viewport `h-[100dvh]` section with overflow-hidden. 2D noise canvas (`opacity-40`, `pointer-events-none`) behind. "KARAN" display H1 centered. Tagline "Creative Engineer" beneath. This is a brand-statement hero.
- **Navigation**: Sticky top header (`header.fixed.top-0.left-0.right-0.z-50`) with nav (Home/About/Work/Blogs + More). "Book a Call" CTA on right. Logo "KC" on left.
- **Section ordering**: `header` (fixed) → `nav` → `main` (hero h-100dvh) → `main#systems-grid` (curated work) → `section#skills` (with Three.js 3D) → `section#behind-curtains` → `section.bg-[#050505]` (footer-adjacent) → `footer`.
- **Scroll experience**: Long-scroll single page (5523px tall). 21 keyframes — many purposeful: `marquee`, `gradient-x`, `morph-polygon`, `ui-letter-anim`, `ui-flicker`, `ui-appear`, `ui-opacity-swap`, `ui-focused-letter`, `iconiq-infinite-ribbon` (+reverse), `noise-shift`, `shimmer-sweep`, `float`, `blink-css`, plus Tailwind defaults (`bounce`, `ping`, `pulse`, `spin`). The `ui-*` family suggests a custom UI animation library scoped to letter/element transitions.
- **Animations & motion**: 21 keyframes is high but **thematically unified** under a "creative engineer" register — `morph-polygon` for the 3D scenes, `iconiq-infinite-ribbon` (marquee-like), `ui-letter-anim` / `ui-flicker` / `ui-appear` / `ui-opacity-swap` / `ui-focused-letter` form a coherent letter-animation system. This extends Zyon's B4 finding that 33 keyframes can be justified if thematically unified.
- **Hover interactions**: Standard. Project cards likely have reveal-on-hover. Dock-icon-like top nav.
- **Background effects**: 2D canvas noise at `opacity-40` in hero (the `noise-shift` keyframe likely animates the noise). Plus 2 WebGL Three.js scenes in the body sections.
- **3D elements**: **YES — REAL Three.js geometric 3D scenes (2 of them)**. Both canvases tagged `data-engine="three.js r184"`. Canvas 1 (229x308px) in the systems-grid / projects section. Canvas 2 (495x675px) in the skills section. Both have `cursor: grab` (draggable to rotate) and `pointer-events: auto`. **This is the FIRST corpus instance of real Three.js geometric 3D in a portfolio.** Resolves the open tension.
- **Responsiveness perception**: Mobile menu (hamburger), responsive grid. The 3D canvases resize (different dimensions observed between reloads). Tailwind responsive utilities throughout.
- **Performance perception**: Heavy. 13+ Next.js chunks (turbopack-1hisq9jun_913.js visible). 21 keyframes. 3 canvases. Screenshots frequently timed out (`CDP command timed out: Page.captureScreenshot`) — the 3D scenes + noise canvas are computationally expensive. Despite this, the site is responsive in feel because the heavy work is GPU-bound.
- **Emotional feeling**: Premium / futuristic / confident / "creative engineer" register.
- **Originality**: 5/5 — three-font system, display H1 at 204.8px, Three.js geometric scenes, live GitHub activity footer, visitor signature guestbook, designed 404. Most original portfolio in batch 10 and the strongest single-portfolio find in round 3 so far.
- **What works**:
  - **Real Three.js geometric 3D scenes** (2 canvases, both interactive with `cursor:grab`) — resolves the "real 3D scene" open tension after 47 portfolios.
  - **Display H1 at 204.8px/900** — extreme display typography that reads as confidence (extends EMF's B4 finding that pure-white + ultralight type works; Karan inverts to pure-black + ultrabold).
  - **Three-font system (Outfit + IBM Plex Mono + clashDisplay)** — extends the two-font developer-coded pattern (B1 codified) with a third display face. Clash Display (a custom/indie font) signals taste.
  - **Designed 404 page** with footer preserved (404 / Page not found / "The page you are looking for doesn't exist or has been moved." / "Back to Home" + the "BEHIND THE CURTAINS / Decoding logic && the lyrics / Karan's GitHub / LATEST PUSH 4H AGO / Made a code push to repository / Repo: Private work|Hash: private / VISITORS / Leave your signature" footer). Title preserved as "Karan Chhunchha — Creative Engineer" (no "404" prefix in title — anti-pattern avoidance).
  - **Live GitHub push activity in footer** — "LATEST PUSH 4H AGO / Made a code push to repository / Repo: Private work | Hash: private" — the dev is actively coding, but repo + hash are anonymized as "Private work" / "private" so no real repo is leaked. First corpus instance.
  - **"Leave your signature" visitor guestbook** in footer — first corpus instance of a visitor guestbook/signature feature.
  - **"Decoding logic && the lyrics"** as a footer section title — section name as poetic/programmatic hybrid. `&&` (logical AND) used as a typography flourish.
  - **Section name "behind-curtains"** with "The Magic Behind" H2 — theatrical metaphor for "about me / how I work."
- **What does NOT work**:
  - **2 H1s on the homepage** — "KARAN" (display, hero) and "Karan Chhunchha" (likely in footer or contact). Multiple H1s is generally an anti-pattern, but here it may be intentional (display vs. document-outline H1).
  - Heavy bundle (13+ JS chunks) — slow initial paint on slow connections.
  - Screenshot timeouts during browser automation — the 3D scenes make the page expensive to capture.
  - `morph-polygon` and `iconiq-infinite-ribbon` (×2 + reverse ×2 = 4 ribbon keyframes) — slight redundancy.
- **Notable patterns to consider**:
  - **NEW: Real Three.js geometric 3D scene** — first corpus instance. Both canvases are interactive (`cursor: grab`). 3D is no longer shader-only.
  - **NEW: Live GitHub push activity in footer** — first corpus instance of a live GitHub activity feed ("LATEST PUSH 4H AGO") as ambient credibility signal. Anonymized repo/hash ("Private work" / "private") shows you can do this without leaking real repo info.
  - **NEW: Visitor "signature" guestbook** — first corpus instance of a guestbook feature. Treats the portfolio as a place visitors leave a trace.
  - **NEW: "Behind the curtains" as About section name** — theatrical metaphor for the "how I work" / "about me" section. First corpus instance.
  - **NEW: Three-font system** (display + workhorse sans + mono) — extends B1's two-font pattern. The third (display) font is a creative-engineer register signal.
  - **NEW: Display H1 at 200+ px / weight 900** — extends B4's finding that pure-white + ultralight (200-300) display type at 109px works; Karan inverts to pure-black + ultrabold (900) at 204.8px. Both extremes work; the middle (48-76px / 400-700) is the cliché zone.
  - **NEW: `&&` as typographic flourish in section title** ("Decoding logic && the lyrics") — code-syntax as decorative punctuation. First corpus instance.
  - **Pattern reinforcement**: Footer-as-design-surface (B1 codified pattern) at maximum richness — version stamps (Whilmar), live time (EMF/Ajvad), GitHub activity (Karan), visitor signatures (Karan), "behind the curtains" poetry section (Karan).
  - **Pattern reinforcement**: Designed 404 page (Luca, Vinit, Karan) — extends to "404 with footer preserved" pattern. The 404 is not a dead-end; it inherits the site's ambient credibility signals.

---

## 49. Vedas Dixit — https://vedas-desktop.vercel.app → https://vedasdixit.com

- **Reachable**: yes (HTTP 200; redirects to vedasdixit.com; Next.js on Vercel)
- **First impression**: A warm peach/cream tinted-light site with a desktop-OS metaphor that's lighter than Vivek's full Ubuntu clone — instead of replicating an OS, Vedas builds a single floating "widget window" (bottom-left) with three tabs (Clock / Music / Typing) running a live system log. Hero is letter-by-letter animated "Hi I'm Vedas." Designed terminal-aesthetic 404 page. Most original single-page interaction model in batch 10.
- **Visual hierarchy**: 1 H1 (the hero "Hi I'm Vedas" split into 9 letter elements for staggered animation), 0 H2 in hero, then 5 H2s + 8 H3s in the long-scroll content below (WHAT I WANNA DO, EDUCATION, OTHER INTERESTS, WORK, OPEN SOURCE, BEYOND BOREDOM). The hero is visually small (48px/300 ultralight) — inversely to Karan's 204.8px/900.
- **Layout composition**: Single-page long-scroll. Top-left: "Let's build" logo. Top-right: nav (Home, About, Work, Resume, Faq, Contact). Center: hero. Bottom-left: floating widget window (Clock/Music/Typing tabs). Bottom-right: bottom social dock.
- **Typography**: TWO-font system — system-ui sans (NO custom font loaded) + ui-monospace. H1 48px/300 (ultralight). Body ~16px. The use of pure system fonts (no Google Fonts) is a deliberate lightness — extends B1's pure-white escape hatch to pure-system-font escape hatch.
- **Color palette**: Bg `rgb(255,223,200)` (warm peach/cream tinted-light — a tinted-light we haven't seen before, more orange than Nico B2's peach `rgb(254,215,170)`). Text `rgb(68,64,60)` (warm dark brown). Accent colors visible in the widget: `rgb(133,77,14)` (dark brown for window header bg), `rgb(22,101,52)` (dark green for borders), `rgb(136,19,55)` (dark red/maroon for the `$` prompt). Five-color palette, all warm and earthy.
- **Spacing**: Airy. Hero is centered with negative space. Widget window is 400x260px fixed bottom-left.
- **Hero section**: Top: "Let's build" logo (top-left). Center: "Hi I'm Vedas" with each letter in a separate element (for staggered animation), "software engineer" subtitle. Nav dock (Home/About/Work/Resume/Faq/Contact) below.
- **Navigation**: Top-right nav (Home, About, Work, Resume, Faq, Contact) — anchor links to long-scroll sections. Plus the floating widget window has its own tab nav (Clock/Music/Typing).
- **Section ordering**: Single-page long-scroll with anchor nav: Hero (Home) → About (VEDAS DIXIT / Software Engineer / Frontend Engineer / Udaipur, Rajasthan, India + bio + WHAT I WANNA DO + EDUCATION + OTHER INTERESTS) → WORK (CYBER PANDA CONSULTING, Alloc-8, AI-Powered Financial Insights Platform, Designer Portfolio Website, Timepass) → OPEN SOURCE (LocalAgent, Mesh-fetcher) → BEYOND BOREDOM (Open Source Contributions, Dribbble-to-Code, Wildlife Photography, Tokyo, Japan) → "Wanna check out more of my work?" CTA. Floating widget window persists across all sections.
- **Scroll experience**: Smooth scroll, anchor-based nav. The floating widget stays fixed (bottom-left) across all scrolling. The hero letter animation runs on load (typewriter + bounce + burst + float + moneyFloat×3 + brightFlash×2 + barBlink×2).
- **Animations & motion**: 22 keyframes — high count but many are duplicates (fadeIn ×2, float ×2, moneyFloat×3 variants ×2 = 6 money keyframes, brightFlash×2, barBlink×2). Unique signatures: `typewriter` (hero letter animation), `burst` (probably confetti or particle burst), `moneyFloatLeft/Center/Right` (money/finance themed floating elements — possibly relevant to the "AI-Powered Financial Insights Platform" project), `brightFlash` (camera flash — wildlife photography tie-in?), `barBlink` (typing cursor bar), `bottomSocialDoc_bounce` (bottom social dock bounce).
- **Hover interactions**: Standard. Nav buttons have `hover:scale-*` (Tailwind). Widget window has `hover:opacity-100` from `opacity-90`.
- **Background effects**: Plain warm peach. No particles, no grain, no gradient. (Note: the warm peach IS the entire mood — no additional bg needed.)
- **3D elements**: no.
- **Responsiveness perception**: Mobile-aware. The widget window has `hidden md:block` on the Typing tab (third tab hidden on mobile). Nav dock is responsive. `bottom-8 left-8` widget positioning preserves the metaphor on mobile.
- **Performance perception**: 13 scripts (Next.js bundle), 2 CSS, 42 imgs, 1 svg. Reasonable for a Next.js site. No screenshots timed out.
- **Emotional feeling**: Warm / playful / "creative technologist" register.
- **Originality**: 5/5 — letter-by-letter hero, floating multi-tab widget with live system log, warm peach + earthy palette, designed terminal 404, finance-themed motion (`moneyFloat`), wildlife-photography-themed motion (`brightFlash`). Most cohesive original palette in batch 10.
- **What works**:
  - **Letter-by-letter split H1** — "Hi I'm Vedas" rendered as `<h1>h\ni\n!\nI\n'\nm\nV\ne\nd\na\ns</h1>` (each letter as a separate text node) for staggered animation. First corpus instance of letter-by-letter split H1 (different from gradient-text H1 in B5 Daniyal).
  - **Floating multi-tab widget window** (Clock / Music / Typing) at `fixed bottom-8 left-8 w-[400px] h-[260px]` with `opacity-90 hover:opacity-100` — first corpus instance of a persistent widget-as-ambient-decoration. The widget stays put across all sections.
  - **Live system-log widget content** — `$ [system]: logged in as user from Tokyo, Japan` + `$ [system]: current time is 13:44` (live, updated between page inspections — 13:44 → 13:45) + `$ ⠼ [●●●●●●●●●○] | θ=5.655rad | 324° | 0b110110 | 0x36 | 5.40e+4ms` (braille spinner + braille progress bar + angle in radians + degrees + binary + hex + time in ms). This is the most original single piece of UI in batch 10 — a "live system" widget as ambient credibility signal. The braille spinner + multi-format numeric display (radians / degrees / binary / hex / ms) is genuinely novel.
  - **Designed terminal-aesthetic 404** — `404_NOT_FOUND / > LOCATION: Unknown / > STATUS: Resource Not Found / > ERROR: Page does not exist in current directory / > Scanning alternative paths... / > Suggestion: Return to home directory / > Awaiting user input... / > CD /home`. First corpus instance of a narrative 404 (the 404 tells a story: scanning → suggestion → awaiting input → suggested command). Extends B5/9 designed 404 pattern with a *narrative* variant.
  - **Warm peach `rgb(255,223,200)` + earthy 5-color palette** — a tinted-light we haven't seen in the corpus (B2 Nico was peach `rgb(254,215,170)`; Vedas is warmer/more orange). The accent colors are all earthy browns/greens/maroons — a coherent autumnal palette.
  - **Pure system fonts (no Google Fonts)** — first corpus instance of deliberate system-font-only typography. Extends B4's pure-white escape hatch to pure-system-font escape hatch. Both are about *removing* a layer (color → white; font → system) as a confidence statement.
  - **"Tokyo, Japan" as a content card under BEYOND BOREDOM** — first corpus instance of a city as a content card (vs. B6 Juan's location metadata). Vedas treats places as content, not metadata.
  - **Project list includes "Alloc-8 — Nursing Placement Management System"** — a real domain-specific project (Healthcare SaaS for nursing placements). Specificity > generality (inverse of B9 Daniyal's "Fresh Shop / Netflix Clone" generic bootcamp projects).
- **What does NOT work**:
  - **All content rendered as `<div>`s** — 0 H2 in hero, only 1 H1 (the hero), then 5 H2s + 8 H3s in the long-scroll below. The hero lacks an H2 subtitle.
  - The widget window's `opacity-90` non-hover state may be too transparent — content inside can be hard to read against the warm peach bg behind it.
  - **`moneyFloat` ×6 keyframes** (3 directions ×2 each) suggests redundant CSS. Plus 22 keyframes total is on the higher end.
  - **Tab labels (About, Work, Resume, Faq, Contact) don't switch panels in the traditional sense** — they appear to scroll to long-scroll sections rather than swap content. The interaction model is ambiguous: are they tabs (show/hide) or anchor links (scroll)? My clicking "Work" did not hide "About" content.
- **Notable patterns to consider**:
  - **NEW: Letter-by-letter split H1** — first corpus instance. Staggered per-letter animation. Different from gradient-text H1.
  - **NEW: Floating multi-tab widget window** — first corpus instance. A persistent fixed-position widget with internal tabs (Clock/Music/Typing). The widget-as-ambient-decoration pattern.
  - **NEW: Live system-log widget content with multi-format numerics** — first corpus instance. The `⠼ [●●●●●●●●●○] | θ=5.655rad | 324° | 0b110110 | 0x36 | 5.40e+4ms` line is the single most original piece of UI in batch 10. Braille spinner + braille progress + 5 numeric formats in one line.
  - **NEW: Narrative 404 page** — first corpus instance. The 404 tells a story (scanning → suggestion → awaiting input → suggested command).
  - **NEW: Pure system fonts (no Google Fonts)** — first corpus instance of system-font-only typography as a deliberate choice.
  - **NEW: Warm peach tinted-light (`rgb(255,223,200)`)** — distinct from B2 Nico's peach (`rgb(254,215,170)`). Vedas is warmer/more orange.
  - **NEW: City as content card** — "Tokyo, Japan" under BEYOND BOREDOM. First corpus instance of place-as-content (vs. location-as-metadata).
  - **NEW: Tab labels that are actually anchor links** — ambiguous but interesting. The nav labels (About/Work/Resume/Faq/Contact) read as tabs (because they're in a row at the bottom of the hero) but function as anchor links (long-scroll).
  - **Pattern reinforcement**: Designed 404 page (Luca, Vinit, Karan, Vedas) — now 4 corpus instances. The terminal-aesthetic variant is unique.
  - **Pattern reinforcement**: Tinted-light background (B2 codified pattern) — Vedas's warm peach is the warmest tinted-light in the corpus.
  - **Pattern reinforcement**: Two-font developer-coded feel (B1 codified) — but Vedas uses pure system fonts (system-ui + ui-monospace) instead of Google Fonts. The "two-font" rule generalizes to "two-font families" (sans + mono), not specific font files.

---

## 50. Sri Anjaneyam — https://srianjaneyam.me

- **Reachable**: partial — Cloudflare bot challenge blocked agent-browser automation (screenshot of Cloudflare "Just a moment..." page only). Site is reachable via curl with browser UA; full HTML/CSS/JS inspection completed from the curl'd source.
- **First impression**: A self-deprecating "anti-portfolio" placeholder. The portfolio IS the absence of a portfolio — a potted Monstera plant SVG with peeking eyes that follows your cursor, gets progressively angrier when you click it (3-tier escalation: eyebrows rotate, eyes squish, plant desaturates/red-shifts, jiggle intensifies, speech-bubble messages escalate from "I'm a plant. Please stop." to "…I've contacted a lawyer."). The H1 reads "Currently undergoing a minor identity crisis." A button cycles through 8 ironic status messages. The resume is the only "real" content linked.
- **Visual hierarchy**: Single H1 ("Currently undergoing a minor identity crisis."), one paragraph of body text, one button, one status-update div, one resume link. Visually centered, max-width 580px container.
- **Layout composition**: Full-viewport centered single column. Top: potted Monstera SVG (250x250px) with peeking eyes that follow the cursor. Middle: H1 + paragraph. Bottom: button + status text + resume link. Watermark "srianjaneyam.me" fixed bottom-right.
- **Typography**: TWO-font system: Playfair Display (serif, 500/700/italic-500) for H1 (2.8rem/700) + Plus Jakarta Sans (sans, 300/400/500) for body (1.1rem/400). First corpus instance of Playfair Display + Plus Jakarta Sans pairing. Serif H1 on tinted-light bg = Milan B6 register (Lora 900), but Vedas's is more literary (the H1 is a full sentence, not just a name).
- **Color palette**: 6 CSS custom properties: `--bg-color: #f4f1ec` (warm cream tinted-light, slightly warmer than Vedas's peach), `--text-dark: #2b2b2b` (warm dark grey), `--text-light: #6b6b6b` (warm medium grey), `--accent: #d97757` (terracotta orange — close to Ganesh B8's bright orange but more muted/earthy), `--accent-hover: #bf6548` (darker terracotta), `--plant-green: #5c7a61` (sage green), `--plant-dark: #3e5442` (dark green). Plus `#81b29a` (lighter sage) and `#e0c2a2` (pot tan) in the SVG. Eight-color palette, all warm and earthy — coherent autumnal register like Vedas.
- **Spacing**: Airy. 2rem body padding with `env(safe-area-inset-*)` for notched devices. Generous vertical rhythm.
- **Hero section**: This IS the hero AND the entire page. Potted Monstera plant SVG (with peeking eyes + eyebrows) + H1 + paragraph + button + status-update div + resume link.
- **Navigation**: None. Only link is to `/resume/`.
- **Section ordering**: N/A — single-screen page.
- **Scroll experience**: No scroll. Page is single-viewport.
- **Animations & motion**: 7 keyframes total — `floatUp` (container entrance), `breathe` (plant breathing 6s loop), `leafFloat` (falling leaves), `jiggle1` / `jiggle2` / `jiggle3` (escalating jiggles on plant click). Plus a lerp-based cursor-glow animation (no keyframe, requestAnimationFrame) and lerp-based eye-follow (no keyframe, mousemove listener). Restrained count, thematically unified under "the plant is alive."
- **Hover interactions**: Button hover (bg fill + translateY(-2px)). Plant cursor changes to pointer. Speech bubble appears on plant click (3 escalating anger levels). Eyes follow cursor (parallax).
- **Background effects**: Cream bg + subtle paper texture (SVG fractalNoise @ opacity 0.04 inline data URI — first corpus instance of inline SVG noise texture, second corpus instance of paper texture after Juan B6). Plus cursor-glow (600x600 radial gradient circle, terracotta-tinted, lerp 0.07 follow).
- **3D elements**: no.
- **Responsiveness perception**: Mobile-aware. `@media (max-width: 600px)` and `@media (max-width: 390px)` breakpoints reduce illustration size (250 → 190 → 160px), H1 size (2.8rem → 2rem → 1.75rem), and reposition watermark (bottom-right → bottom-center). Most importantly: `@media (hover: none), (pointer: coarse) { #cursor-glow { display: none; } }` — the cursor glow is hidden on touch devices. AND: `touchmove` listener with `{passive: true}` for eye-follow on mobile — the eyes follow the finger.
- **Performance perception**: Excellent. Single HTML file, 0 external scripts (only Cloudflare's challenge-platform injected at the end), 0 external CSS files (all inline `<style>`). Only external resource is Google Fonts. Loads instantly.
- **Emotional feeling**: Whimsical / self-deprecating / literary / "I'm taking a break from being a portfolio."
- **Originality**: 5/5 — the most conceptually original portfolio in batch 10. The portfolio IS the absence of a portfolio. Self-aware humor + interactive character + literary copy + earthy palette. Sri and Karan together represent the two extremes of the corpus: Karan is maximal originality within the "show your work" convention; Sri is maximal originality by *rejecting* the convention.
- **What works**:
  - **Anti-portfolio placeholder concept** — first corpus instance. The portfolio IS the absence of a portfolio. "I took my portfolio down to update it, which unfortunately meant I had to write a new 'About Me' section. This naturally led to staring blankly at a blinking cursor, questioning my life choices, and wondering if calling myself a 'passionate problem solver' makes me sound like a robot." The honesty is disarming.
  - **Click-driven character state escalation** — 3 anger levels with escalating eyebrows (18° → 28° → 38° rotation), eye squish (scaleY 0.75 → 0.55 → 0.35), plant desaturation/hue-rotate (filter drop-shadow + saturate 1.3 → 1.6 → 2.0 + hue-rotate 0 → -8deg → -15deg), jiggle (4° → 7° → 10° rotation + scale 1.04 → 1.07 → 1.09). Anger decays after 3 + level×0.6 seconds. First corpus instance of click-driven character state.
  - **Escalating speech-bubble messages** — Level 1: "I'm a plant. Please stop." / "Excuse me. I'm photosynthesizing." / "That tickled. Mildly." Level 2: "I said STOP." / "Do you click everything you see?!" / "I am actively losing leaves." Level 3: "I WILL shed a leaf. I swear." / "FINE. I'm going DORMANT." / "…I've contacted a lawyer." The copy is the highlight — sharp, characterful, escalating.
  - **Ironic status-message cycle on button click** — 8 statuses that progress from "Deleting a perfectly good paragraph" → "Wondering if 'enthusiastic' sounds too desperate" → "Googling synonyms for 'creative'" → "Adjusting the padding on a button by 1 pixel" → "Considering giving up and opening a bakery instead" → "Hydrating. (Procrastinating)." → "Please stop clicking, you are rushing my delicate artistic process." → "Okay, I'm hiding further behind the plant now." Then the button text changes to "Leave me be" and the eyes shrink to scale(0.6). First corpus instance of an interactive copy cycle that ends with the button text itself changing.
  - **Cursor-following eyes with touch fallback** — eyes follow the cursor via parallax (`moveX = (clientX - centerX) * 0.03`). Touch fallback: `document.addEventListener('touchmove', ..., { passive: true })` so eyes follow the finger on mobile. **First corpus instance of explicit mobile touch-aware cursor-effect fallback.** Partially resolves the "mobile-specific gesture/haptic interactions" open tension.
  - **Floating leaves particle system** — leaves spawn every 2.2s with random drift (dx ±80px) + upward lift (dy -70 to -180px) + random rotation (r0 to r0 ± 100-300deg) over 9-17s. Two leaf colors (`#5c7a61` sage + `#81b29a` lighter sage). SVG leaf shape. Different from B3/B8 particle fields — these are content-themed (leaves for a plant), not abstract dots.
  - **Cursor glow with `@media (hover: none)` disable** — 600x600px radial gradient circle in terracotta `rgba(217,119,87,0.10)`, lerp 0.07 follow. The `@media (hover: none), (pointer: coarse) { #cursor-glow { display: none; } }` is the *correct* implementation — cursor effects should be desktop-only. First corpus instance of explicit `pointer: coarse` media query to disable a cursor effect on touch.
  - **Paper texture noise overlay** (SVG fractalNoise @ 0.04 opacity inline data URI) — second corpus instance of paper texture after Juan B6. Sri's is inline data URI (no external request).
  - **Watermark `srianjaneyam.me`** — fixed bottom-right, opacity 0.5, `pointer-events: none`, `user-select: none`. On mobile, moves to bottom-center. First corpus instance of a self-referential watermark.
  - **Single self-contained HTML file** — 0 external scripts (besides Cloudflare), 0 external CSS files, only Google Fonts. The lightest possible site for the richest possible interaction.
  - **3-tier jiggle keyframes** (`jiggle1` 0.55s ease-in-out, `jiggle2` 0.55s, `jiggle3` 0.70s) — escalating rotation (4° → 7° → 10°) and scale (1.04 → 1.07 → 1.09). The duration extends at level 3 (0.55s → 0.70s) — the most furious jiggle also takes longest to settle.
- **What does NOT work**:
  - **Cloudflare blocks bot automation** — screenshots blocked. This is a cost of using Cloudflare; the trade-off is bot protection vs. scrapability.
  - **No real portfolio content** — the "anti-portfolio" is conceptually brilliant but functionally empty. The resume is the only substantive artifact.
  - **H1 is the entire sentence "Currently undergoing a minor identity crisis."** — long H1 (58 characters). Works here as literary register but is an anti-pattern in most contexts.
  - **The plant metaphor has no second life** — once you've clicked through to fury and the cycle loops, there's nothing else to do. The interaction is one-shot.
- **Notable patterns to consider**:
  - **NEW: Anti-portfolio placeholder** — first corpus instance. The portfolio IS the absence of a portfolio. "Currently undergoing a minor identity crisis." + self-deprecating copy + "I'll be back online once I figure out how to summarize my entire existence without sounding entirely unhinged." Most original concept in batch 10.
  - **NEW: Click-driven character state escalation** (3 tiers) — first corpus instance. Could be adapted for any mascot/illustration: click → escalate → decay.
  - **NEW: Cursor-following eyes with `touchmove` + `passive: true` mobile fallback** — first corpus instance. Partially resolves the "mobile-specific gesture/haptic interactions" open tension (no haptic, but explicit mobile touch-aware interaction).
  - **NEW: `@media (hover: none), (pointer: coarse) { display: none }` for cursor effects** — first corpus instance of correct desktop-only cursor-effect gating. Resolves a latent tension (Bhavesh B8 had `@media(hover:none)` fallback for custom cursor — Sri extends to cursor glow).
  - **NEW: Escalating button text change** ("Check on my progress" → "Leave me be") — first corpus instance of button text changing as the interaction escalates.
  - **NEW: Floating leaves particle system** (content-themed particles) — first corpus instance of content-themed particles (leaves for a plant) vs. abstract dots (B3/B8).
  - **NEW: Inline SVG noise paper texture** (no external request) — extends Juan B6 paper texture pattern to inline data URI.
  - **NEW: Self-referential watermark** (`srianjaneyam.me` bottom-right) — first corpus instance.
  - **NEW: 8-message ironic status cycle** — first corpus instance of multi-step copy cycle on a button. Different from a single loading message.
  - **NEW: Single self-contained HTML file** — first corpus instance of a single-HTML-file portfolio with 0 external scripts (besides Cloudflare). The lightest possible site.
  - **Pattern reinforcement**: Two-font system (B1 codified) — Playfair Display + Plus Jakarta Sans, third serif-on-tinted-light instance (after Milan B6 Lora + Ganesh B8 Playfair). Serif H1 on warm cream tinted-light is a stable variant.
  - **Pattern reinforcement**: Tinted-light background (B2 codified pattern) — Sri's `#f4f1ec` warm cream is the most neutral-warm tinted-light yet (Vedas's peach is more orange; Nico's peach is more yellow; Sri's cream is more parchment).

---

## Batch 10 Synthesis

### Patterns that reinforce prior findings

- **Commitment over kitchen-sink (B1 codified)** — strongly reinforced. **Vivek Patel (47)** commits to the Ubuntu desktop metaphor so fully that the entire site IS the OS chrome (lock screen, boot, dock, status bar, right-click context menus, "Reset Ubuntu"). **Karan (48)** commits to the "creative engineer" register with 204.8px display H1 + Three.js geometric scenes + live GitHub activity footer + visitor signature guestbook + three-font system. **Sri (50)** commits to the anti-portfolio register so fully that the portfolio IS the absence of a portfolio. Three of five portfolios in batch 10 are commitment-maximalist. **Mehdi (46)** does NOT commit (typos, GitHub Pages default 404, generic dark template) and reads as junior. **Vedas (49)** commits to a lighter widget-window metaphor and to a warm peach palette. The pattern is now ironclad across 50 portfolios: commitment reads as senior; kitchen-sink reads as junior.
- **Tinted-neutral background, never pure (B1 codified)** — reinforced. Three tinted-light instances in batch 10: Vedas `rgb(255,223,200)` warm peach, Sri `#f4f1ec` warm cream, (Mehdi's near-black `rgb(31,31,31)` is warm-tinted dark). Two near-pure-black darks: Karan `rgb(5,5,5)` (extends B4 EMF pure-white escape hatch to near-pure-black + ultrabold display).
- **Domain-native conceptual metaphor (B1 codified)** — reinforced at maximum intensity. **Vivek's Ubuntu desktop** is the strongest metaphor commitment in the corpus (stronger than Triet B1 Unix shell, Whilmar B3 architectural-engineering, Zyon B4 Steam). The metaphor shapes not just labels but the entire UI. The trade-off: zero semantic HTML.
- **Two-font developer-coded feel (B1 codified)** — refined. Three variants in batch 10:
  - Google Fonts two-font (Mehdi Ubuntu only / Karan Outfit+IBM Plex Mono+clashDisplay three-font / Vedas system-ui+ui-monospace system-only / Sri Playfair Display+Plus Jakarta Sans)
  - System-font-only (Vedas — first corpus instance of pure system fonts as a deliberate choice)
  - Three-font system (Karan — first corpus instance of three-font system; display + workhorse + mono)
  - **Refinement**: The "two-font" rule generalizes to "two-font *families*" (sans + mono), not specific font files. System fonts count. Three-font systems work if the third is a display face with a distinct semantic role.
- **Hero-only home + content subpages (B1 codified)** — partially reinforced. Vedas is single-page long-scroll with anchor nav (not multi-page hybrid). Vivek is single-viewport desktop (not multi-page). Karan is single-page long-scroll. Sri is single-viewport. **Batch 10 has zero multi-page portfolios.** The multi-page hybrid pattern (B1 Nico, B5 Luca, B7 Vinit) is not represented here.
- **Footer as design surface (B1 codified)** — reinforced at maximum richness. **Karan** ships the most original footer in the corpus: "BEHIND THE CURTAINS / Decoding logic && the lyrics / Karan's GitHub / LATEST PUSH 4H AGO / Made a code push to repository / Repo: Private work | Hash: private / VISITORS / Leave your signature." Combines live GitHub activity + visitor guestbook + poetic section name. This is the new high-water mark for footer-as-design-surface.
- **Single accent applied only to the role phrase (B1 codified)** — refined. Vedas applies the dark-red accent `rgb(136,19,55)` *only* to the `$` prompt character in the widget log. Concentrates attention without colorizing the hero.
- **Designed 404 page** — reinforced. Two more instances: **Karan** (404 with footer preserved — title "Karan Chhunchha — Creative Engineer" maintained, footer with live GitHub activity inherited), **Vedas** (terminal-aesthetic narrative 404 — "404_NOT_FOUND / > LOCATION: Unknown / > STATUS: Resource Not Found / > ERROR: Page does not exist in current directory / > Scanning alternative paths... / > Suggestion: Return to home directory / > Awaiting user input... / > CD /home"). Mehdi and Vivek both ship default 404s (GitHub Pages and Next.js defaults). 2/5 with designed 404 in batch 10.
- **Pure-system-font / pure-color escape hatch (B4 refined)** — Vedas extends B4's pure-white + ultralight escape hatch to pure-system-font (system-ui + ui-monospace) on warm peach. Both are about *removing* a layer (color → white; font → system) as a confidence statement. **Refinement**: The escape hatch generalizes — pure-X works when paired with one bold typographic choice (B4 EMF: 109px/200 ultralight; Vedas: 48px/300 ultralight with letter-by-letter split).

### Patterns that contradict or refine earlier findings

- **3D: tasteful when scoped to one surface (B3 refined)** — Karan contradicts the "scoped to one surface" principle: he has THREE canvases (one 2D noise bg + two Three.js geometric scenes in different sections). The 3D is *not* scoped to one surface, yet it doesn't read as kitchen-sink because: (a) each canvas has a clear semantic role (noise bg for atmosphere, two project-preview 3D scenes), (b) all three are GPU-bound so they don't jank, (c) the three-font system and display H1 hold the design language together. **Refinement**: Multiple 3D surfaces can work if each has a distinct semantic role and the rest of the design language is committed enough to absorb them.
- **Self-rated skill percentages (B6 anti-pattern #22)** — Mehdi has a `fillBar` keyframe suggesting skill bars. Reinforces anti-pattern.
- **OS/desktop metaphor (B5 Artur Windows 95 refined)** — Three desktop-metaphor variants now in the corpus: Artur B5 (Windows 95 retro), Vivek B10 (Ubuntu current OS, full chrome), Vedas B10 (lightweight widget-window only, not full OS). **Refinement**: The desktop metaphor has a spectrum from "full OS chrome" (Vivek) → "single widget window" (Vedas) → "retro OS as aesthetic" (Artur). The middle of the spectrum (single widget) is the most adoptable — you get the desktop-OS signal without the semantic-HTML cost or mobile-degradation cost.
- **Custom cursor with `@media (hover: none)` fallback (B8 Bhavesh refined)** — Sri extends the `@media (hover: none)` fallback from custom cursor to *any* cursor-following effect (cursor glow + cursor-following eyes). Plus Sri adds `touchmove` with `{passive: true}` to bring eye-following to mobile. **Refinement**: The `@media (hover: none), (pointer: coarse)` pattern is the universal gate for cursor-following effects, and `touchmove` with `passive: true` is the universal mobile bridge for the same effects.
- **Multi-page hybrid with view transitions (B1, B4, B5 codified)** — Batch 10 has ZERO multi-page portfolios. **Refinement**: Multi-page is *not* the only senior architecture. Single-page long-scroll with anchor nav (Vedas, Karan) and single-viewport (Vivek, Sri) are also senior architectures when the commitment is high enough.

### New patterns unique to this batch

| # | Pattern | Source | Note |
|---|---|---|---|
| 36 | **Full current-OS-desktop metaphor** (lock screen → boot → desktop with dock, status bar, right-click context menus) | Vivek Patel | Extension of B5 Artur's retro-OS to a current OS (Ubuntu Yaru). Strongest metaphor commitment in corpus. Cost: zero semantic HTML. |
| 37 | **Right-click context menus as portfolio nav** | Vivek Patel | First corpus instance. Right-click anywhere → desktop context menu; right-click on dock icon → portfolio-context menu (Star Project / Report bugs / Follow Linkedin / Follow Github / Contact Me / Reset Ubuntu). |
| 38 | **Lock screen as entry transition** | Vivek Patel | First corpus instance of a "click to enter" gate. Different from B4 Barthélémy's pull-over keyframe (element transition) — Vivek's is a full-screen gate. |
| 39 | **"Reset OS" self-aware reset button** | Vivek Patel | A button that acknowledges the metaphor is a UI overlay and lets the user reset state. Self-aware humor. |
| 40 | **App-as-content-unit (dock IS the IA)** | Vivek Patel | Each portfolio section is an "app" you launch from the dock. Extends Vinit's /now + /practices + /books subpage architecture to "each subpage is an app." |
| 41 | **Real Three.js geometric 3D scene** | Karan Chhunchha | First corpus instance. Two `data-engine="three.js r184"` canvases, both interactive (`cursor: grab`). Resolves the "real 3D scene" open tension. |
| 42 | **Live GitHub push activity in footer** ("LATEST PUSH 4H AGO / Made a code push to repository / Repo: Private work \| Hash: private") | Karan Chhunchha | First corpus instance. Anonymized repo/hash ("Private work" / "private") shows you can do this without leaking real repo info. |
| 43 | **Visitor "signature" guestbook** | Karan Chhunchha | First corpus instance of a guestbook/signature feature. Treats the portfolio as a place visitors leave a trace. |
| 44 | **"Behind the curtains" as About section name** | Karan Chhunchha | Theatrical metaphor for the "how I work" section. First corpus instance of a poetic About-section name. |
| 45 | **Three-font system** (display + workhorse sans + mono) | Karan Chhunchha | Extends B1's two-font pattern. Third font is a display face with a distinct semantic role (clashDisplay for the "KARAN" hero). |
| 46 | **Display H1 at 200+ px / weight 900** | Karan Chhunchha | Extends B4's finding that pure-white + ultralight (200-300) display type at 109px works. Karan inverts to near-pure-black + ultrabold (900) at 204.8px. Both extremes work; the middle (48-76px / 400-700) is the cliché zone. |
| 47 | **`&&` as typographic flourish in section title** ("Decoding logic && the lyrics") | Karan Chhunchha | Code-syntax as decorative punctuation. First corpus instance. |
| 48 | **Letter-by-letter split H1** (each letter as a separate text node for staggered animation) | Vedas Dixit | First corpus instance. Different from gradient-text H1 (B5 Daniyal). |
| 49 | **Floating multi-tab widget window** (persistent `position: fixed` widget with internal tabs) | Vedas Dixit | First corpus instance. Widget-as-ambient-decoration. |
| 50 | **Live system-log widget with multi-format numerics** (`⠼ [●●●●●●●●●○] \| θ=5.655rad \| 324° \| 0b110110 \| 0x36 \| 5.40e+4ms`) | Vedas Dixit | Most original single piece of UI in batch 10. Braille spinner + braille progress + 5 numeric formats (radians / degrees / binary / hex / ms) in one line. |
| 51 | **Narrative 404 page** (404 tells a story: scanning → suggestion → awaiting input → suggested command) | Vedas Dixit | First corpus instance. Extends designed 404 pattern to narrative variant. |
| 52 | **Pure system fonts (no Google Fonts)** as a deliberate choice | Vedas Dixit | First corpus instance. Extends B4's pure-white escape hatch to pure-system-font escape hatch. |
| 53 | **Warm peach tinted-light (`rgb(255,223,200)`)** | Vedas Dixit | Distinct from B2 Nico's peach (`rgb(254,215,170)`). Vedas is warmer/more orange. |
| 54 | **City as content card** ("Tokyo, Japan" under BEYOND BOREDOM) | Vedas Dixit | First corpus instance of place-as-content (vs. B6 Juan's location-as-metadata). |
| 55 | **Anti-portfolio placeholder** (the portfolio IS the absence of a portfolio) | Sri Anjaneyam | First corpus instance. "Currently undergoing a minor identity crisis." + self-deprecating copy. Most conceptually original in batch 10. |
| 56 | **Click-driven character state escalation** (3 tiers with escalating visual + copy + decay timer) | Sri Anjaneyam | First corpus instance. Could be adapted for any mascot/illustration. |
| 57 | **Cursor-following eyes with `touchmove` + `passive: true` mobile fallback** | Sri Anjaneyam | First corpus instance. Eyes follow finger on mobile via passive touch listener. |
| 58 | **`@media (hover: none), (pointer: coarse) { display: none }` for cursor effects** | Sri Anjaneyam | First corpus instance of correct desktop-only cursor-effect gating via `pointer: coarse` media query. |
| 59 | **Escalating button text change** ("Check on my progress" → "Leave me be") | Sri Anjaneyam | First corpus instance of button text changing as interaction escalates. |
| 60 | **Floating leaves particle system** (content-themed particles) | Sri Anjaneyam | First corpus instance of content-themed particles (leaves for a plant) vs. abstract dots (B3/B8). |
| 61 | **Inline SVG noise paper texture** (no external request, data URI) | Sri Anjaneyam | Second corpus instance of paper texture after Juan B6; first as inline data URI. |
| 62 | **Self-referential watermark** (`srianjaneyam.me` bottom-right) | Sri Anjaneyam | First corpus instance. |
| 63 | **8-message ironic status cycle** on a button | Sri Anjaneyam | First corpus instance of multi-step copy cycle on a button. |
| 64 | **Single self-contained HTML file with 0 external scripts** | Sri Anjaneyam | First corpus instance. Lightest possible site for the richest possible interaction. |
| 65 | **Speech bubble with escalating messages** (3 tiers of copy) | Sri Anjaneyam | First corpus instance of speech-bubble copy tied to character state. |

### Updated answers to the open tensions

| Tension | Status after batch 10 (50 portfolios) |
|---|---|
| **Scroll-driven section transitions** | **STILL UNSOLVED — 0 in 50.** Batch 10 has zero instances. None of Mehdi/Vivek/Karan/Vedas/Sri implement real section morphing on scroll. Karan's 21 keyframes include `morph-polygon` but it's a 3D scene morph, not a section transition. **Carry to batch 11.** |
| **Sound** | **STILL UNSOLVED — 0 in 50.** No audio in any of batch 10. Likely intentionally rare; may require deliberate seeking. **Carry to batch 11.** |
| **Real 3D geometric scene** (Three.js / Spline / model viewer) | **RESOLVED.** Karan Chhunchha ships two `data-engine="three.js r184"` WebGL canvases, both interactive (`cursor: grab`). First corpus instance of true Three.js geometric 3D in a portfolio. Prior instances (Whilmar B3, Dale B7, Bhavesh B8) were all 2D Canvas or WebGL particle/shader effects, not geometric scenes. |
| **Hero motion that tells user where to go next** | **Partially resolved.** Vedas's bottom-nav dock (Home/About/Work/Resume/Faq/Contact) + floating widget window together orient the user; the hero letter animation tells you "I'm Vedas, software engineer" and the nav dock tells you what to do next (scroll to a section). Karan's "AI / BUILD / LAB / ART" top-nav labels also orient. Still missing: hero motion *itself* (not nav chrome) that tells the user where to scroll. **Refinement**: Hero motion + persistent nav together can orient, even if hero motion alone cannot. **Carry to batch 11.** |
| **Mobile-specific gesture/haptic interactions** | **Partially resolved.** Sri Anjaneyam ships `touchmove` with `{passive: true}` for eye-following on mobile (first corpus instance of explicit mobile touch-aware cursor-effect fallback) and `@media (hover: none), (pointer: coarse) { display: none }` for the cursor glow (first corpus instance of correct desktop-only cursor-effect gating). Still no haptic feedback. **Refinement**: Mobile-specific interaction can mean *gating desktop effects off* on touch + *bridging desktop effects* via `touchmove` — not necessarily new mobile-only gestures. **Carry to batch 11 for haptic-style feedback.** |
| **Loading state (fully wired up)** | **STILL UNSOLVED — 0 in 50.** Daniyal B9 designed preloader CSS but didn't render it. Batch 10 has no designed loading state. Vivek's lock screen is the closest (functions as a "click to enter" gate, not a loading state per se). **Carry to batch 11.** |

### Carried-forward open tensions for batch 11

- **Scroll-driven section transitions** (0 in 50 — still completely unsolved)
- **Sound** (0 in 50 — likely intentionally rare)
- **Loading state (fully wired up)** (0 in 50 — Daniyal B9 designed but didn't render)
- **Hero motion that itself (not nav chrome) tells user where to go next** (still partial)
- **Haptic-style mobile feedback** (Sri resolved touch-aware interaction; haptic still 0)

### Strongest portfolio in batch 10

**Karan Chhunchha — karanchhunchha.in.** Next.js on Vercel. Most original portfolio in batch 10 and one of the strongest in the corpus. Eight corpus-first patterns: (1) **Real Three.js geometric 3D scenes** (2 canvases, both interactive, `data-engine="three.js r184"`) — resolves the "real 3D scene" open tension after 47 portfolios; (2) **Live GitHub push activity in footer** ("LATEST PUSH 4H AGO / Repo: Private work | Hash: private") — first corpus instance, anonymized so no real repo leaked; (3) **Visitor "signature" guestbook** — first corpus instance; (4) **Three-font system** (Outfit + IBM Plex Mono + clashDisplay) — extends B1 two-font pattern with a display face; (5) **Display H1 at 204.8px / weight 900** — extends B4 EMF pure-white-ultralight escape hatch to near-pure-black-ultrabold; (6) **"Behind the curtains" as About section name** — first corpus instance of poetic About-section name; (7) **`&&` as typographic flourish** in section title ("Decoding logic && the lyrics"); (8) **Designed 404 with footer preserved** — extends designed 404 pattern. Plus: 21 thematically-unified keyframes (extends B4 Zyon finding that high keyframe counts can be justified if unified), dark `rgb(5,5,5)` near-pure-black warm, two-bg-color system (10/5), `morph-polygon` 3D scene animation, `iconiq-infinite-ribbon` marquee, `ui-letter-anim` / `ui-flicker` / `ui-appear` / `ui-opacity-swap` / `ui-focused-letter` letter-animation family. Loses minor points for 2 H1s, screenshot timeouts (3D scenes are computationally heavy), and slight keyframe redundancy (4 `iconiq-infinite-ribbon` variants).

**Runner-up: Sri Anjaneyam — srianjaneyam.me.** Single self-contained HTML file. Most *conceptually* original portfolio in batch 10. The portfolio IS the absence of a portfolio. Ten corpus-first patterns: (1) **Anti-portfolio placeholder**; (2) **Click-driven character state escalation** (3 tiers); (3) **Cursor-following eyes with `touchmove` + `passive: true` mobile fallback**; (4) **`@media (pointer: coarse)` cursor-effect gating**; (5) **Escalating button text change**; (6) **Floating leaves particle system** (content-themed); (7) **Inline SVG noise paper texture** (data URI); (8) **Self-referential watermark**; (9) **8-message ironic status cycle**; (10) **Speech bubble with escalating copy**. Plus: Playfair Display + Plus Jakarta Sans two-font system on warm cream `#f4f1ec`, 6-CSS-variable earthy palette (terracotta accent + sage greens + warm browns), 3-tier jiggle keyframes with escalating duration (0.55s → 0.55s → 0.70s), cursor glow with lerp 0.07 follow, plant SVG with `breathe` 6s loop. Cloudflare-blocked for screenshots but full HTML/CSS/JS inspection completed from curl'd source. The single lightest site (0 external scripts) for the richest interaction.

**Third: Vedas Dixit — vedasdixit.com.** Next.js on Vercel. Seven corpus-first patterns: (1) **Letter-by-letter split H1**; (2) **Floating multi-tab widget window** (Clock/Music/Typing); (3) **Live system-log widget with multi-format numerics** (braille spinner + 5 numeric formats in one line — the single most original piece of UI in batch 10); (4) **Narrative 404 page** (terminal aesthetic, tells a story); (5) **Pure system fonts** (no Google Fonts, deliberate); (6) **Warm peach tinted-light `rgb(255,223,200)`** (warmest tinted-light in corpus); (7) **City as content card** ("Tokyo, Japan" under BEYOND BOREDOM). Plus: 22 keyframes (high but with redundancy — moneyFloat×6, brightFlash×2, barBlink×2), earthy 5-color palette (peach + dark brown + dark green + dark red), 48px/300 ultralight H1 (extends B4 ultralight escape hatch to tinted-light bg), designed 404 with `> CD /home` suggested command. Loses minor points for redundant keyframes and ambiguous tab-vs-anchor-link nav model.

### Weakest portfolio in batch 10

**Mehdi Ali — exoo25.github.io.** GitHub Pages static. Junior-tier dark portfolio with no signature design choice. H2 typos ("Github Analaytics", "I am a new freelauncer"). Default GitHub Pages 404. Title "Mehdi's Portfolio" with literal "Portfolio" word (B8 anti-pattern #33). "Times New Roman" leaking through the font fallback chain. 4 keyframes (purposeful count but `fillBar` suggests skill bars — B6 anti-pattern #22). Only positive: project names are real built things (Py-Hurts-My-Arms, PDF Protector App, TOTP Generator, etc.), 0 external scripts (fast load), and 4-keyframe restraint. Lowest originality in batch 10 (1/5) — generic dark developer template.

---

## Batch 10 Screenshot Inventory

Saved to `/home/z/my-project/research/screenshots/batch_10/`:
- `46_mehdi_hero.png` / `46_mehdi_scroll1.png` / `46_mehdi_scroll2.png` / `46_mehdi_scroll3.png` (4 screenshots)
- `47_vivek_lockscreen.png` / `47_vivek_desktop.png` (2 screenshots — note: lockscreen auto-dismisses on load, both screenshots capture the desktop view)
- `48_karan_hero.png` / `48_karan_scroll1.png` / `48_karan_scroll2.png` / `48_karan_scroll3.png` / `48_karan_skills3d.png` (5 screenshots — note: 3D scenes caused occasional `Page.captureScreenshot` timeouts)
- `49_vedas_hero.png` / `49_vedas_full.png` / `49_vedas_about.png` / `49_vedas_work.png` (4 screenshots)
- `50_sri_cloudflare.png` (1 screenshot — Cloudflare bot challenge blocked the actual site; full HTML/CSS/JS inspection completed from curl'd source)

Total: 16 screenshots. Site 50 (Sri Anjaneyam) was Cloudflare-blocked for browser automation; analysis based on full HTML/CSS/JS inspection of the curl'd source (`/tmp/sri.html`, 664 lines), which provided complete information about every CSS variable, keyframe, animation, interaction, and copy string.
