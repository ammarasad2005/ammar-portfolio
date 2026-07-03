# Batch 09 — Portfolios 41–45

> Research Round 3, Batch 9 of 20. Five portfolios analyzed.
> Carried-forward open tensions to watch for: scroll-driven section transitions (0/40); sound (0/40); real 3D geometric scene (0/40); hero motion that tells user where to go next (partial).

---

## 41. Abhishek Sah — https://www.abhisheksah.dev

- **Reachable**: yes (HTTP 200; Cloudflare-served static Next.js site)
- **First impression**: Severely minimal serif-on-white site. The visible "name" is an H3; the only H1 is the word "Experience." Reads as a senior engineer's personal notepad.
- **Visual hierarchy**: Inverted — the H1 ("Experience") is the section heading, while the actual name ("Hi! My Name is Abhishek") and tagline ("Engineer. Builder. Problem solver.") are demoted to H3 and H4. The hero is visually small; experience bullets dominate.
- **Layout composition**: Single column, narrow content column on the right (`margin-left:100px`) with a faint vertical hairline (`opacity:0.2`) running down the left margin. Sparse.
- **Typography**: Times New Roman serif everywhere (OS-default). H1 32px/700. H3 18.72px/700. No display font, no mono. Pure default-serif = anti-pattern (matches B1 anti-pattern #3 "OS-default fonts").
- **Color palette**: Pure white (browser default — `body` and `html` backgrounds are both `rgba(0,0,0,0)`). Text `rgb(0,0,0)`. Links use the literal default browser blue `rgb(0, 0, 238)` — anti-pattern (90s web look).
- **Spacing**: Airy. Generous vertical rhythm, narrow column.
- **Hero section**: Top-left date/time/location chip "Tue 12:34, 📍 India" (live), then small "Hi! My Name is Abhishek" H3, then a one-paragraph intro that links "Engineer. Builder. Problem solver." to `/projects`. No imagery.
- **Navigation**: Two top-bar links: "Home" + "Resume" (PDF direct link). Mobile: hidden-nav pattern with skip-nav.
- **Section ordering**: Date/location chip → Name H3 → Bio paragraph (links to /projects) → "Experience" H1 → 6 bullet-point H3s of accomplishments → credits line.
- **Scroll experience**: Static. No scroll-triggered animations, no parallax.
- **Animations & motion**: 0 CSS keyframes. No motion library. The only dynamic thing is the live clock.
- **Hover interactions**: Default link underline. Nothing custom.
- **Background effects**: Plain white. One hairline gradient divider.
- **3D elements**: none.
- **Responsiveness perception**: Notable CSS — `@media (max-width: 1000px)` collapses the left-rail hairline and reduces left margin. Standard responsive collapse.
- **Performance perception**: Excellent. 1 script, 0 canvas, 0 img, 0 iframe, 4 svg (likely favicon set). Lightning-fast static page. Closest to Bhavesh B8 (3 scripts) for script-minimal sites.
- **Emotional feeling**: Calm, almost academic — like a personal notepad. Quietly confident but undermined by default-serif typography.
- **Originality**: 2/5. The date+day-of-week+emoji-location chip is a nice refinement of the Ajvad/EMF live-date pattern, but the rest is generic.
- **What works**:
  - Live date/time stamp with day-of-week + emoji location pin "Tue 12:34, 📍 India" — extends Ajvad/EMF pattern with day-of-week + emoji. Cheap "site is alive" signal.
  - 1 script, 0 images — performance ceiling.
  - Direct PDF resume link in nav (no separate /resume subpage to maintain).
- **What does NOT work**:
  - H1 = "Experience" (the section heading) while the visible name "Hi! My Name is Abhishek" is an H3. Inverted document outline — SEO + AT breakage. Variant of B3 anti-pattern #12/#13.
  - Times New Roman OS-default serif H1 (anti-pattern #3 from B1).
  - Default browser link blue `rgb(0,0,238)` everywhere — reads as 90s web.
  - **404 page is broken** — `/404.html` 301-redirects to `/404`, which 301-redirects back to `/404.html`. Infinite redirect loop. Catastrophic for anyone landing on a wrong URL.
  - 9 H3s hold paragraph-length body content (no H2s anywhere). H3 used as paragraph replacement — destroys hierarchy.
- **Notable patterns to consider**:
  - **Live date/time + day-of-week + emoji location pin** as a single chip (refines B1 Ajvad live-date and B5 EMF live-time-with-timezone patterns).
  - **Direct PDF resume link** in nav (instead of `/resume` subpage).
  - **Vertical hairline rail** at `opacity:0.2` running down the left margin as a quiet structural element (single decorative div `width:1px;background-color:white;border-radius:20px;opacity:0.2`). Subtle.
  - **ANTI-PATTERN**: Inverted H1 (section name as H1, name as H3) — avoid.

---

## 42. Saroj Pradhan — https://www.sarojpradhan.com.np

- **Reachable**: yes (HTTP 200, redirects from `pradhansaroj.com.np` → `www.sarojpradhan.com.np`). Next.js on Vercel behind Cloudflare.
- **First impression**: Dark Tailwind portfolio with a giant 96px Poppins name and a niche focus — every project is an HR/recruitment app for the Nepal market.
- **Visual hierarchy**: Strong. H1 ("Saroj Pradhan / Software Engineer") dominates at 96px/800 weight. Section H2s at standard sizes. The "Srz" logo uses a separate display font (Righteous) for differentiation.
- **Layout composition**: Standard top-nav + section-stack. Hero with photo on one side (large WebP), name + role on the other. About / Services / Tech Stack / Featured Projects / Latest Blogs all stack vertically.
- **Typography**: Two-font system — **Poppins** (body/H1, 96px/800) + **Righteous** (logo "Srz" + accent display). Two-font developer-coded feel confirmed.
- **Color palette**: Dark `rgb(2, 6, 23)` (Tailwind slate-950) body; `rgb(15, 23, 42)` (slate-800) cards; `rgba(98, 68, 197, 0.1)` violet accent for icon backplates; muted text `rgb(148, 163, 184)` (slate-300) / `rgb(100, 116, 139)` (slate-400).
- **Spacing**: Balanced. Generous card padding (`p-8`), `gap-3` rows. Tailwind rhythm.
- **Hero section**: Photo (responsive WebP, multiple srcsets) + name + role + tagline + dual CTA. Standard.
- **Navigation**: 5 links — Srz (logo) / HOME / WORKS / BLOGS / CONTACT. All caps. No theme toggle.
- **Section ordering**: Hero → About Me → Services → Tech Stack → Featured Projects → Latest Blogs. (No contact section visible — CONTACT link may scroll to footer, but there's no footer.)
- **Scroll experience**: 2 keyframes only — `pulse` + `spin`. Minimal animation. No scroll-triggered library.
- **Animations & motion**: Restrained. Likely Tailwind `animate-pulse` on a status dot + `animate-spin` on a loader or icon.
- **Hover interactions**: Notable for their absence — no hover state changes detected in style inventory.
- **Background effects**: Solid dark with no gradients, no particles, no grain.
- **3D elements**: none.
- **Responsiveness perception**: Standard Tailwind responsive. `md:block hidden` patterns indicate desktop-first with mobile fallback.
- **Performance perception**: Heavy Next.js runtime — 40 scripts loaded. Despite dark minimalist appearance, the script count is high. No images of massive size (24 imgs, mostly project thumbnails).
- **Emotional feeling**: Professional, corporate-freelancer. Dark theme reads as serious.
- **Originality**: 2/5. Standard dark Tailwind portfolio. The HR/recruitment niche focus (all 6 projects in the same domain — Kumari Job, Pasa HRMS) is a content differentiator, not a design one.
- **What works**:
  - **Niche domain focus** — all 6 featured projects (Recruitment Management System, Training Management System, HRMS, Jobseeker App, Kumari Job Portal, Pasa HRMS) are in the HR/recruitment vertical. Reads as "I am the HR-tech person for Nepal." Strong positioning signal.
  - Two-font system (Poppins + Righteous) — logo gets differentiation.
  - Custom 404 page exists ("404 / This page could not be found.") — basic but real.
- **What does NOT work**:
  - **Title keyword-stuffed**: "Saroj Pradhan | Freelancer, Software Engineer, Web Developer" — "Freelancer" + "Software Engineer" + "Web Developer" reads as SEO stuffing, not a single confident role.
  - **No footer at all** — CONTACT nav link has nowhere to anchor. Loses footer-as-design-surface opportunity entirely.
  - **40 scripts** on a simple dark portfolio — heavy Next.js runtime for what is essentially a static page.
  - **Generic Tailwind dark slate palette** — `rgb(2, 6, 23)` + slate-800 cards + violet accent is the default Tailwind dark theme. No tinted-neutral commitment.
- **Notable patterns to consider**:
  - **Niche-domain project curation** — every project in the same vertical (HR tech). Confirms B1 anti-pattern #2 inversion: instead of dumping every repo, dump 6 projects all in ONE domain. Reads as specialist.
  - **Two-font system with display-font logo** — Poppins body + Righteous logo accent. Extends B4/B5 two-font pattern.
  - **ANTI-PATTERN**: Keyword-stuffed title with 3+ role words. Pick one role.
  - **ANTI-PATTERN**: No footer at all. Wastes footer-as-design-surface.

---

## 43. Dhruv Sathe — https://dhruv-alpha.vercel.app

- **Reachable**: yes (HTTP 200; Vite + React on Vercel).
- **First impression**: Maximalist dark portfolio with multi-color gradient blobs, dual Canvas2D backgrounds, dual-element custom cursor, and a footer "performance dashboard" (Performance: 98 / Security: A+ / Uptime: 99.9%). Visually busy but conceptually ambitious.
- **Visual hierarchy**: Confused — 0 H1s, 2 H2s (one empty), 28 H3s. FAQ questions are H3s, project names are H3s, section labels are H3s, contact labels are H3s. No clear primary heading.
- **Layout composition**: Multi-color gradient blob field as background → scroll-pinned hero → skills grid (DEVELOPMENT/DESIGN/TOOLS columns) → projects gallery (cards with hover overlays) → digital products section → certifications → FAQ accordion → contact → footer with perf dashboard.
- **Typography**: Two-font system — **Manrope** (body) + **GilroyRegular** (display). Gilroy is a paid geometric sans — first corpus instance. Differentiated but not as much as a serif/sans pairing.
- **Color palette**: Dark base (transparent — relies on canvas). Multi-color blobs: blue-400 `rgb(96,165,250)`, blue-500 `rgb(59,130,246)`, blue-800 `rgb(30,64,175)`, sky-500 `rgb(14,165,233)`, indigo-500 `rgb(99,102,241)`, violet-500 `rgb(139,92,246)`, emerald-500 `rgb(16,185,129)`. 7-color blob palette — kitchen-sink accent.
- **Spacing**: Balanced. Generous section padding, card-based layout.
- **Hero section**: Large blob-field background → name + role + tagline + dual CTA. Plus an embedded Tally.so form for "Let's collaborate."
- **Navigation**: 7 links — dhruv.dev (logo) / Home / About / Projects / Products / FAQ / Let's talk.
- **Section ordering**: Hero → Skills & Expertise (3 cols: Development/Design/Tools) → Featured Projects (6: BlakPro, Portfolio Website Template, RestOS, Food Data Browser, Carbon Credits Dash, Synergy Institute) → Discover My Digital Products → Find Hacktimus Finalist + Kaggle Gen AI + MERN cert → FAQ (5 questions) → Contact (Email/Location) → Footer.
- **Scroll experience**: 2 layered Canvas2D backgrounds (one at `opacity-70`, one at `opacity-40`). Animate.css-style keyframes (bounce/flash/rubberBand/headShake/tada) — looks decorative, not purposeful. Plus some animation-library-generated keyframes (`go2264125279`, etc.).
- **Animations & motion**: Excessive — 18+ keyframes total. animate.css-style motion library is wired up. Most motion is decorative.
- **Hover interactions**: Project card hover overlays (`rgba(0,0,0,0.8)` opacity transitions). Custom cursor grows/changes on hover (dot + ring both transition).
- **Background effects**: Multi-color gradient blob field — 14+ absolutely-positioned divs with `blur-2xl`/`blur-3xl` and `mix-blend-mode`. Plus 2 Canvas2D layers stacked behind.
- **3D elements**: none (despite Canvas2D x2). Still 0 real 3D in 41 portfolios.
- **Responsiveness perception**: Standard Tailwind responsive (`md:`, `lg:` patterns). Offcanvas-style mobile menu likely.
- **Performance perception**: Heavy. 2 Canvas2D running continuously, 18+ keyframes, multi-color blobs blurring. Despite being a Vite app (lighter than Next.js), the visual load is high.
- **Emotional feeling**: Energetic, futuristic — but the kitchen-sink accent palette (7 colors) reads as "I couldn't pick one" rather than intentional.
- **Originality**: 3/5. The footer perf dashboard is genuinely novel. The dual-canvas background is novel (if not particularly well-executed). The rest is template-y.
- **What works**:
  - **Footer performance dashboard**: "Performance: 98 / Security: A+ / Uptime: 99.9%" — first corpus instance of synthetic SLA metrics in footer. Reads as "this developer treats their portfolio as production infrastructure." Extends footer-as-design-surface pattern.
  - **"System status" link** in footer nav — first corpus instance of a status-page link in a portfolio footer. Same infrastructure-as-portfolio signal.
  - **Dual-element custom cursor** (`.cursor-dot` 8px + `.cursor-ring` 32px) — second corpus instance after Bhavesh B8. Less refined than Bhavesh's (no `mix-blend-mode: difference`), but the principle is confirmed repeatable.
  - **Digital products section** separate from projects — separates "things I built for clients" from "things I sell/distribute." First corpus instance of this content split.
  - **Certifications + Hackathon achievements** as a section — Kaggle Gen AI Intensive + Hacktimus Finalist + MERN cert. First corpus instance of "achievements" as a portfolio section.
- **What does NOT work**:
  - **0 H1s on the entire page** — anti-pattern #13 from B3. Repeats Fikri Rozan / Barthélémy / Zyon failure mode.
  - **404 page is broken** — HTTP 200 with empty `<body>`. SPA catches the route but renders nothing. Catastrophic — anyone landing on a wrong URL sees a blank page.
  - **7-color blob palette** — instead of committing to one or two accents, uses blue/blue/blue/sky/indigo/violet/emerald. Kitchen-sink accentuation. Anti-pattern (commits to no commitment).
  - **Cursor uses solid black** (`.cursor-dot { background: rgb(0,0,0); mix-blend-mode: normal }`) on a dark background — cursor invisible on dark blob areas. Bhavesh B8's `mix-blend-mode: difference` is strictly better.
  - **Title "Dhruv's Portfolio"** — uses the word "Portfolio" (B8 anti-pattern: drop the word "Portfolio," URL context already implies it).
  - **animate.css-style decorative motion library** wired up — 18+ keyframes mostly for show.
- **Notable patterns to consider**:
  - **Footer performance dashboard** (Performance / Security / Uptime as synthetic SLA metrics) — NEW. Extends footer-as-design-surface from "site is alive" (live clock) to "site is production." Adopt as a quiet footer signal.
  - **"System status" link** in footer — NEW. Treats the portfolio as infrastructure. Adopt.
  - **Dual-element custom cursor (variant 2)** — confirms Bhavesh B8 pattern. Variant: dot+ring without blend-mode (less accessible on varied backgrounds). Adopt Bhavesh variant (with `mix-blend-mode: difference`) over Dhruv variant.
  - **Digital products section** separate from projects — splits client work from distributed products. NEW content pattern.
  - **Certifications + Hackathon section** — first corpus instance of explicit achievements section. NEW.
  - **ANTI-PATTERN**: 0 H1s + 404 renders empty body. Both are catastrophic for SEO/UX.
  - **ANTI-PATTERN**: 7-color blob palette (kitchen-sink accent).

---

## 44. Daniyal Javadia — https://daniyal-works-portfolio.vercel.app

- **Reachable**: yes (HTTP 200; Vite + React on Vercel, Bootstrap 5 template).
- **First impression**: Bootstrap-template dark portfolio with a JSX-tag-style logo (`<Daniyal Javadia/>`), gradient-text H1, tabbed About, certificate modals, and a theme toggle. Reads as a polished template instance — competent but not original.
- **Visual hierarchy**: Proper. 1 H1 ("Daniyal Javadia" gradient-text 40px/500), 8 H2s for sections, 1 H3. Heading outline is correct (unusual in this batch).
- **Layout composition**: Bootstrap grid — top fixed navbar → hero with name + role + dual CTA + social icons → "Things I Love" section → About (tabbed: Skills/Education/Experience) → Skills (categorized) → Tools (icon grid) → Certificates (cards + modals) → Projects (gallery with hover overlays) → "Featured Projects Crafted with Passion" → Project Showcase (carousel) → Get In Touch → minimal footer.
- **Typography**: Three-font system — **Rubik** (body, 400/500/700) + **Agustina** (script display) + **Dancing Script** (cursive). Plus Font Awesome 7 + Bootstrap Icons for iconography. Script + cursive fonts are an unusual choice for a developer portfolio.
- **Color palette**: Body bg `rgb(33, 37, 41)` (Bootstrap `--bs-dark` / `#212529`) + card bg `rgb(18, 18, 18)` + overlay `rgba(0,0,0,0.8)`. H1 uses `linear-gradient(90deg, rgb(230,65,87), rgb(65,93,230))` with `-webkit-background-clip: text` (red→blue gradient text). Text `rgb(222,226,230)` (Bootstrap `gray-200`).
- **Spacing**: Balanced. Standard Bootstrap spacing (`p-4`, `gap-3`).
- **Hero section**: Centered name H1 with red→blue gradient + role tags + dual CTA ("Let's Talk" primary + "Resume" outline) + 4 social icon links.
- **Navigation**: Top fixed navbar with `<Daniyal Javadia/>` logo (JSX-tag style) + 5 links (Home/About/Skills/Projects/Contact) + theme toggle (`#switchTheme`). Offcanvas navbar on mobile (`#offcanvasNavbar`).
- **Section ordering**: Hero → Things I Love → About (tabbed Skills/Education/Experience) → Skills → Tools → Certificates → Projects → Featured Projects → Project Showcase → Get In Touch → footer.
- **Scroll experience**: AOS (Animate On Scroll) library — 25 elements with `data-aos="fade-up"` or `fade-down`. Restrained AOS usage (only 2 animation types).
- **Animations & motion**: 14 keyframes total — most are FontAwesome icon animations (`fa-beat`, `fa-bounce`, `fa-fade`, `fa-flip`, `fa-shake`, `fa-spin`) + Bootstrap bundled (`progress-bar-stripes`, `spinner-border`, `spinner-grow`, `placeholder-glow`, `placeholder-wave`) + Owl Carousel (`fadeOut`) + custom (`fadeOutPreloader`).
- **Hover interactions**: Project card hover overlay (`rgba(0,0,0,0.8)` fade-in). Button hover states.
- **Background effects**: Solid Bootstrap dark. No particles, no gradients (other than the H1 text gradient), no grain.
- **3D elements**: none.
- **Responsiveness perception**: Standard Bootstrap responsive. Offcanvas navbar for mobile.
- **Performance perception**: Heavy. 61 images (certificates + project screenshots + tech-stack logos). jQuery 3.7.1 + Owl Carousel + AOS + Bootstrap + Font Awesome all loaded — even though the site is a Vite + React app. This is a static HTML template ported to React, but the original jQuery libraries are still loaded (and likely unused since React handles behavior). 10 scripts total.
- **Emotional feeling**: Professional, somewhat dated. Bootstrap-template aesthetic. The script fonts (Agustina, Dancing Script) add a handcrafted feel that conflicts with the Bootstrap dark template.
- **Originality**: 2/5. Template instance. JSX-tag-style logo is the only original touch.
- **What works**:
  - **JSX-tag-style logo** `<Daniyal Javadia/>` — clever dev-coded touch. First corpus instance of JSX-tag-style logo. Extends dev-coded typography patterns.
  - **Theme toggle** (`#switchTheme`) — first DESIGNED theme toggle in batch 9. Visible, accessible ID, in the navbar. Pattern matches B5 Juan Benito / B7 Hafeez theme-toggle pattern.
  - **Tabbed About section** (Skills / Education / Experience) — first corpus instance of tabs as a content-compression device in About. Reduces vertical scroll.
  - **Certificate modals** (`#certificateModal1-4`) — clicking a certificate card opens a Bootstrap modal with the full certificate image. First corpus instance of modal-based certificate viewer.
  - **Preloader CSS exists** (`#preloader { position: fixed; z-index: 99; backdrop-filter: blur(20px); animation: fadeOutPreloader 1s linear 1s forwards }`) — first corpus instance of a DESIGNED preloader. The preloader fades out after 1 second with a 1s delay (total 2s visible). Note: dead CSS — the React app doesn't actually render `#preloader` element. Still, the design intent is documented.
  - **JSON-LD Person structured data** — comprehensive (name/url/sameAs/jobTitle/image/description). Confirms B7/B8 pattern.
- **What does NOT work**:
  - **3-font system** (Rubik + Agustina script + Dancing Script) — script + cursive fonts on a developer portfolio read as crafting-shop, not engineer. Plus Font Awesome + Bootstrap Icons = 5 font families total. Kitchen-sink typography.
  - **jQuery + Owl Carousel loaded in a React app** — the static HTML template's JS libraries are still loaded but presumably unused (React handles rendering). 10 scripts, mostly dead weight.
  - **Generic bootcamp-style project names** — Fresh Shop / E-Vaccination Booking / Admin Dashboard / Student Portal / Netflix Clone / Portfolio / Nail Art / Simple Counter. Anti-pattern #2 from B1 (dumping every tutorial project). Netflix Clone especially is a cliché.
  - **Default Vercel 404 page** — not customized. Loses 404-as-design-surface opportunity.
  - **Footer is just copyright text** — "Copyright © Daniyal Javadia. All Rights Reserved 2026." No social, no version stamp, no live clock. Anti-pattern: wastes footer-as-design-surface.
  - **61 images** — heavy image payload (certificates + project screenshots + tech-stack logos as images).
- **Notable patterns to consider**:
  - **JSX-tag-style logo** `<Name/>` — NEW. Dev-coded logo touch. Adopt.
  - **Tabbed About (Skills/Education/Experience)** — NEW. Content-compression device. Adopt for About.
  - **Certificate modals** — NEW. Click certificate card → modal with full image. Adopt for credential display.
  - **Designed preloader** (CSS intent) — first corpus instance of a designed loading state, even though not wired up in this case. Resolves (in principle) the "designed loading experience" question raised in the open tensions to watch.
  - **Designed theme toggle** — confirms recurring pattern (B5/B7 + B9).
  - **ANTI-PATTERN**: 5 font families (3 text + 2 icon). Pick one body + one display.
  - **ANTI-PATTERN**: jQuery + Owl Carousel loaded in React app (dead weight).
  - **ANTI-PATTERN**: Default Vercel 404 page (uncustomized).

---

## 45. Ilham Riski Wibowo — http://ilhamriski.com

- **Reachable**: yes (HTTP 200; redirects `http://` → `https://ilhamriski.com/`. WordPress + Elementor on nginx with PHP 8.2.31).
- **First impression**: WordPress + Elementor portfolio with card-based light layout, gold accent, Bricolage Grotesque display font, and a duplicate-content DOM bug (work experience is rendered twice for desktop+mobile). Visually clean but technically bloated.
- **Visual hierarchy**: Inverted — 0 H1s, 6 H2s (including "Hello, I am Ilham Riski Wibowo" as the name heading). The visible name should be H1 but is H2. Anti-pattern.
- **Layout composition**: Card-based — every major section is a `.card` element on a light-gray background. profile-card / expertise-card / card-projects / lets-talk-together-card / services-card. Cards have `rgb(255,255,255)` bg on `rgb(240, 242, 245)` page bg.
- **Typography**: 4-font system — **Bricolage Grotesque** (modern variable display, first corpus instance) + **Roboto** (body) + **Roboto Slab** (serif accent) + Happy Icons + Font Awesome + Elementskit icons. Many font families — Elementor bundles several.
- **Color palette**: Page bg `rgb(240, 242, 245)` (off-white light gray, NOT pure white) + card bg `rgb(255, 255, 255)` + text `rgb(26, 31, 44)` (almost-black) + accent `rgb(244, 197, 36)` (yellow/gold). Off-white page + white cards = subtle depth.
- **Spacing**: Card-based with internal padding. Each section is its own card.
- **Hero section**: "Hello, I am Ilham Riski Wibowo" H2 + "A passionate Backend Developer with 4 years of experience." + dual CTA (Resume / About).
- **Navigation**: Top nav with 6 links — Home / About / Works / Blog / Contact / Let's Talk. Mobile menu overlay (`.mobile-menu-overlay d-block d-lg-none`) — Bootstrap-style responsive pattern.
- **Section ordering**: Hero → Work Experience timeline (6 jobs: Line Chat Bot, Soegijapranata Catholic University x3, Decodes Media, Yayasan Nasional Karangtri) → My Expert Area (PHP/Laravel/JS/Vue/Python/Figma) → Recent Projects → Let's👋 Work Together → Services I Offered (Web Dev / API Integration / Backend Optimization / Database Management).
- **Scroll experience**: Elementor default — subtle scroll animations. 781 keyframes (Elementor bundled CSS), most unused.
- **Animations & motion**: Excessive CSS surface area (781 keyframes), but most are Elementor's bundled defaults that don't actually run. Net effect: subtle Elementor scroll-fade-in.
- **Hover interactions**: Default Elementor hover transitions on cards/buttons.
- **Background effects**: Off-white page + white cards. No particles, no gradient.
- **3D elements**: none.
- **Responsiveness perception**: Elementor responsive — separate desktop/mobile renderings (which is why work-experience appears twice in DOM). Mobile menu overlay.
- **Performance perception**: Very heavy. **57 scripts** (heaviest in batch 9), 31 imgs, 781 keyframes (heaviest CSS in corpus). WordPress + Elementor + jQuery + Swiper + Happy Icons + Elementskit all loaded. Page loads slowly despite simple visuals.
- **Emotional feeling**: Professional, generic-WordPress. Reads as "I bought a portfolio theme." Backend Developer positioning is clear.
- **Originality**: 1/5. WordPress + Elementor template. The Bricolage Grotesque display font is a nice modern choice but is bundled into the template, not chosen.
- **What works**:
  - **Bricolage Grotesque display font** — modern variable display font. Distinctive choice (though bundled in template). First corpus instance of Bricolage Grotesque.
  - **Card-based section architecture** — each major section is a self-contained `.card` with white bg on light-gray page bg. Subtle depth without heavy shadow.
  - **Custom WordPress 404 page** ("Page Not Found! / Sorry, the page you are looking for could not be found. / Back To Home") — title properly customized ("Page not found – Ilham Riski Wibowo"). Treated as a small design surface.
  - **Off-white `rgb(240, 242, 245)` + white cards** — confirms tinted-light + white-card-surface pattern from B2. Not pure white.
  - **Theme toggle** (`.theme-control-btn`) — second designed theme toggle in batch 9.
- **What does NOT work**:
  - **0 H1s** — name "Hello, I am Ilham Riski Wibowo" is H2. Repeats B3 anti-pattern #13.
  - **Duplicate DOM content** — Work Experience (6 jobs) is rendered TWICE in the DOM (desktop + mobile responsive variants both visible to screen readers). 12 H4s total when there should be 6. Accessibility issue.
  - **57 scripts + 781 keyframes** — heaviest script + CSS payload in batch 9. WordPress + Elementor bloat. Page loads slowly for what is essentially a static business card.
  - **Title "Home - Ilham Riski Wibowo"** — "Home -" prefix is CMS-default cruft. Drop it; just "Ilham Riski Wibowo — Backend Developer".
  - **No footer at all** — CONTACT nav link has nowhere to anchor.
  - **Emoji in heading** "Let's👋 Work Together" — fine for casual sites but undermines the "Backend Developer with 4 years of experience" professionalism in the hero.
  - **4+ font families** — kitchen-sink typography (Bricolage + Roboto + Roboto Slab + Happy Icons + Font Awesome + Elementskit). Elementor's fault, but still anti-pattern.
- **Notable patterns to consider**:
  - **Card-based section architecture on tinted-light bg** — each section a white card on `rgb(240, 242, 245)` page. Confirms tinted-light + white-card pattern from B2.
  - **Bricolage Grotesque display font** — first corpus instance. Variable font, modern. Adopt as display-font candidate.
  - **Custom 404 page (WordPress)** — extends 404-as-design-surface. Custom title + message + back-to-home CTA. Saroj (Next.js) and Ilham (WordPress) both have basic custom 404s in this batch — confirms 404-as-design-surface is reachable in any framework.
  - **Theme toggle** — confirms recurring pattern.
  - **ANTI-PATTERN**: Duplicate DOM content (desktop+mobile both rendered).
  - **ANTI-PATTERN**: WordPress + Elementor bloat (57 scripts, 781 keyframes).
  - **ANTI-PATTERN**: "Home -" CMS-default title prefix.

---

## Batch 9 Synthesis

### Patterns that REINFORCE prior findings

1. **OS-default font anti-pattern** — Abhishek Sah B9 uses Times New Roman serif H1. Confirms B1 anti-pattern #3 (Bhushan Zade Arial H1). OS-default serif reads as default-y as OS-default sans. **Two corpus instances now (Arial + Times New Roman).**
2. **0 H1s on a page anti-pattern** — Dhruv B9 (0 H1s, 28 H3s) and Ilham B9 (0 H1s, 6 H2s including the name) both repeat the B3 Fikri Rozan / Barthélémy / Zyon failure mode. **Now 6 corpus instances of broken H1 hierarchy.** This is the most-recurring structural anti-pattern.
3. **Two-font developer-coded feel** — Saroj B9 (Poppins + Righteous) and Dhruv B9 (Manrope + Gilroy) both ship two-font systems. Confirms B4/B5 pattern as the minimum bar. Abhishek (1 font) and Ilham (4+ font families from Elementor) both fail this in opposite directions.
4. **Tinted-dark for energetic personas** — Saroj B9 (`rgb(2, 6, 23)` slate-950 + violet accent) and Dhruv B9 (multi-color blobs on transparent dark) both commit to dark for the energetic persona. Confirms B3 Whilmar / B7 Dale / B8 Bhavesh pattern.
5. **Tinted-light + white-card-surface** — Ilham B9 (`rgb(240, 242, 245)` page + `rgb(255, 255, 255)` cards) confirms the B2 tinted-light + white-card pattern. Not pure white.
6. **Footer as design surface** — Dhruv B9 ships a **footer performance dashboard** (Performance: 98 / Security: A+ / Uptime: 99.9%) + "System status" link + "Made with ❤️ in Pune, India" + "Back to top". Confirms and extends the B3/B5/B7 footer-as-design-surface pattern from "site is alive" to "site is production infrastructure."
7. **Generic CRUD project names = bootcamp-portfolio** — Daniyal B9 (Fresh Shop / E-Vaccination Booking / Admin Dashboard / Student Portal / Netflix Clone / Nail Art / Simple Counter / Portfolio) all read as bootcamp tutorial projects. Confirms B1 anti-pattern #2 and B8 Amit Kumar Raj pattern. **Netflix Clone is now in the corpus anti-pattern list.**
8. **JSON-LD Person structured data** — Daniyal B9 ships comprehensive Person structured data (name/url/sameAs/jobTitle/image/description). Confirms B7 Vinit / B7 Ohk Soe Htet / B8 Bhavesh pattern as recurring.
9. **Live date/time stamp** — Abhishek B9 ("Tue 12:34, 📍 India") extends the B1 Ajvad / B5 EMF pattern with **day-of-week + emoji location pin** in a single chip. Now 3 corpus instances (Ajvad date-only / EMF time+timezone / Abhishek day+time+emoji-loc).
10. **Custom 404 page exists** — Saroj B9 (basic "404 / This page could not be found.") and Ilham B9 (custom WordPress 404 with title + message + back-to-home CTA) both have basic custom 404s. Confirms 404-as-design-surface is reachable. **Note: Abhishek B9 (infinite redirect loop) and Dhruv B9 (renders empty body) are negative instances — broken 404s are worse than default 404s.**

### Patterns that CONTRADICT or refine earlier findings

1. **Footer performance dashboard** (Dhruv B9) — first corpus instance of synthetic SLA metrics in footer. **Refines** the footer-as-design-surface pattern: the footer can carry not just "site is alive" signals (live clock, version stamp) but **"site is production"** signals (Performance / Security / Uptime grades). Treats the portfolio as a real production deployment. **NEW PATTERN.**
2. **"System status" link** (Dhruv B9) — first corpus instance of a status-page link in a portfolio footer. Refines footer-as-design-surface: portfolio-as-infrastructure. **NEW PATTERN.**
3. **Dual-element custom cursor (variant 2)** (Dhruv B9) — second corpus instance of dual-element cursor (`.cursor-dot` 8px + `.cursor-ring` 32px 1px border). **Refines** Bhavesh B8 pattern: Dhruv's variant uses solid black with no `mix-blend-mode`, while Bhavesh uses `mix-blend-mode: difference`. **Verdict: Bhavesh's `mix-blend-mode: difference` is strictly better** — Dhruv's solid-black cursor is invisible on dark blob areas. The dual-element principle (instant dot + eased ring) is confirmed repeatable; the blend-mode choice is the differentiator.
4. **JSX-tag-style logo** (Daniyal B9 `<Daniyal Javadia/>`) — first corpus instance of JSX-tag-style logo. **Refines** the dev-coded-typography pattern from B7 Vinit's CLI companion and B8 Ganesh's Unix-shell eyebrows. Adds a third dev-coded-typography variant: HTML/JSX-tag-as-logo. **NEW PATTERN.**
5. **Tabbed About section** (Daniyal B9 — Skills/Education/Experience tabs) — first corpus instance of tabs as a content-compression device in About. **Refines** the About-section pattern: instead of one long About scroll, compress Skills/Education/Experience into tabs. **NEW PATTERN.**
6. **Certificate modals** (Daniyal B9 — `#certificateModal1-4` Bootstrap modals) — first corpus instance of modal-based certificate viewer. **Refines** the credentials-display pattern: instead of in-page certificate images, click a card to open a modal with the full certificate. **NEW PATTERN.**
7. **Designed preloader (CSS intent)** (Daniyal B9 — `#preloader` with `fadeOutPreloader` animation, 1s delay, backdrop-blur 20px) — first corpus instance of a **designed loading state**. Even though the React app doesn't actually render `#preloader` (dead CSS), the design intent is documented. **Resolves (in principle)** the "designed loading experience" question raised in the open tensions to watch. The pattern: full-screen fixed overlay → backdrop-blur → fade out after content loads (1-2s delay).
8. **Niche-domain project curation** (Saroj B9 — all 6 projects HR/recruitment vertical for Nepal market) — **refines** the B1 anti-pattern #2 inversion. Instead of dumping every repo (Bhushan B1) OR curating 3 excellent projects (Phat B1), Saroj shows 6 projects all in ONE vertical. Reads as specialist rather than generalist. Third corpus instance of curated-projects pattern (Phat numbered / Luca case-study template / Saroj niche-vertical).
9. **Digital products section separate from projects** (Dhruv B9 — "Discover My Digital Products") — first corpus instance of splitting client work from distributed/sold products. **Refines** the projects-section pattern: not all "things I built" are the same kind of thing. **NEW PATTERN.**
10. **Certifications + Hackathon achievements section** (Dhruv B9 — Hacktimus Finalist + Kaggle Gen AI Intensive + MERN cert) — first corpus instance of explicit "achievements" section separate from projects and experience. **NEW PATTERN.**

### Patterns UNIQUE to this batch

1. **Footer performance dashboard** (Dhruv B9) — synthetic SLA metrics (Performance: 98 / Security: A+ / Uptime: 99.9%) in footer. First corpus instance. Treats portfolio as production infrastructure.
2. **"System status" link** in footer (Dhruv B9) — first corpus instance of a status-page link in a portfolio.
3. **JSX-tag-style logo** (Daniyal B9 `<Daniyal Javadia/>`) — first corpus instance. Dev-coded logo touch.
4. **Tabbed About section** (Daniyal B9 — Skills/Education/Experience) — first corpus instance of tabs as About-section compression.
5. **Certificate modals** (Daniyal B9) — first corpus instance of modal-based credential viewer.
6. **Designed preloader** (Daniyal B9 — CSS only, dead in this case) — first corpus instance of designed loading state.
7. **Digital products section separate from projects** (Dhruv B9) — first corpus instance of this content split.
8. **Certifications + Hackathon achievements section** (Dhruv B9) — first corpus instance of explicit achievements section.
9. **Live date/time + day-of-week + emoji location pin** as a single chip (Abhishek B9 "Tue 12:34, 📍 India") — extends the live-date pattern with day-of-week + emoji location.
10. **Layered Canvas2D backgrounds** (Dhruv B9 — 2 stacked canvases at opacity 70/40, NOT WebGL) — extends B8 Bhavesh single-canvas-2D pattern to dual-canvas-2D. Variant of particle-field pattern, but doubled and without geometric shapes.
11. **Multi-color gradient blob field** (Dhruv B9 — 14+ blurred divs in 7 colors with `mix-blend-mode`) — first corpus instance of a deliberate multi-color blob background. NOTE: 7-color palette is too many (kitchen-sink accent). The principle (soft blurred color blobs as background) is interesting; the execution (7 colors) is not.
12. **Vertical hairline rail** at `opacity:0.2` running down the left margin (Abhishek B9) — subtle structural decoration. First corpus instance of left-margin hairline rail.
13. **Direct PDF resume link** in nav (Abhishek B9 — "Resume" → `/resume.pdf`) — instead of `/resume` subpage. Simpler to maintain.
14. **Bricolage Grotesque display font** (Ilham B9, via Elementor) — first corpus instance. Variable font, modern. Display-font candidate.
15. **Two-theme portfolios with explicit toggle** — Daniyal B9 (`#switchTheme`) and Ilham B9 (`.theme-control-btn`) both ship designed theme toggles. Confirms theme toggle is recurring (B5/B7 + B9) and resolves the "designed theme toggle" question from open tensions.
16. **Card-based section architecture on tinted-light** (Ilham B9 — every section a `.card` on `rgb(240, 242, 245)` page bg) — confirms and extends B2 tinted-light + white-card pattern. First corpus instance where EVERY section is a card (vs. just some sections).

### NEW ANTI-PATTERNS in batch 9

1. **Infinite redirect loop on 404** (Abhishek B9) — `/404.html` 301-redirects to `/404` which 301-redirects back to `/404.html`. Catastrophic — anyone landing on a wrong URL gets a browser error. **Worse than default 404.** Add as variant of "tab title is part of the design" principle: **the 404 is part of the design.**
2. **404 route renders empty body** (Dhruv B9) — SPA catches `/404` route but renders nothing (HTTP 200 with empty body). User sees a blank page. **Worse than default 404.**
3. **H1 = section heading, name = H3** (Abhishek B9) — the only H1 on the page is "Experience" (the section heading), while the visible name "Hi! My Name is Abhishek" is an H3. Inverted document outline. **NEW variant of B3 anti-pattern #12/#13.** Worse than 0 H1s in some ways — gives a false signal to AT/SEO that the page is "about Experience."
4. **Default browser link blue `rgb(0, 0, 238)`** (Abhishek B9) — first corpus instance of literal default browser link color shipped to production. Reads as 90s web. Add to anti-pattern list.
5. **9 H3s used as paragraph containers** (Abhishek B9) — H3s hold paragraph-length body content with no H2s in between. Destroys hierarchy. **NEW variant** — H3 as paragraph replacement.
6. **Keyword-stuffed title with 3+ role words** (Saroj B9 — "Freelancer, Software Engineer, Web Developer") — reads as SEO stuffing, not a single confident role. **NEW variant** of B8 anti-pattern ("Portfolio" word in title).
7. **7-color blob palette** (Dhruv B9 — blue/blue/blue/sky/indigo/violet/emerald) — instead of committing to one or two accents. **NEW** — kitchen-sink accent palette. Commits to no commitment.
8. **5+ font families on one page** (Ilham B9 — Bricolage Grotesque + Roboto + Roboto Slab + Happy Icons + Font Awesome + Elementskit) — Elementor's fault, but still anti-pattern. **NEW** threshold: 5+ font families is the kitchen-sink line (3 was the prior threshold).
9. **Duplicate DOM content (desktop + mobile both rendered)** (Ilham B9 — Work Experience rendered twice in DOM, 12 H4s when there should be 6) — accessibility issue. Screen readers read every job twice. **NEW.**
10. **"Home -" CMS-default title prefix** (Ilham B9 — "Home - Ilham Riski Wibowo") — CMS-default cruft. **NEW variant** of B8 "Portfolio" word in title.
11. **jQuery + Owl Carousel loaded in a React app** (Daniyal B9) — static HTML template's JS libraries still loaded in the React port, presumably unused. Dead weight. **NEW.**
12. **Emoji in section heading** (Ilham B9 "Let's👋 Work Together") — undermines professionalism on a "4 years of experience" Backend Developer portfolio. **Borderline** — fine for casual sites, anti-pattern for senior positioning.

### Updated answers to the open tensions

| Tension | Status after batch 9 |
|---|---|
| **Scroll-driven section transitions** | **Still unsolved after 45 portfolios.** 0 instances. Dhruv B9 has 2 layered Canvas2D backgrounds + animate.css-style motion library + AOS — but no scroll-driven section morphing. |
| **Sound** | **Still unsolved after 45 portfolios.** 0 original sound designs. No portfolio in batch 9 has any sound design. |
| **Real 3D scene (geometric 3D, not just shaders)** | **Still unsolved after 45 portfolios.** Dhruv B9 has 2 Canvas2D (not WebGL) backgrounds — extends B8 Bhavesh Canvas2D pattern to dual-canvas-2D, but still 2D, not 3D. 5 canvas/WebGL particle-field instances now (B3 Whilmar / B7 Ohk Soe Htet / B7 Dale / B8 Bhavesh / B9 Dhruv). Geometric 3D still 0. |
| **Hero motion that orients where to go next** | **Partially refined by Dhruv B9** — Dhruv's "Back to top" button in footer + clear 7-link nav (Home/About/Projects/Products/FAQ/Let's talk) provides wayfinding, but no motion cue in the hero tells the user where to scroll next. Still unsolved. Bhavesh B8 scroll progress bar + Dale B7 fluid sim remain the only partial resolutions. |
| **Page transitions** | No new resolution in batch 9. All 5 portfolios are single-page (no route transitions). |
| **Mobile experience / gesture / haptic-style feedback** | No new resolution in batch 9. Daniyal B9 has Bootstrap offcanvas navbar (`#offcanvasNavbar`), Ilham B9 has mobile menu overlay (`.mobile-menu-overlay d-block d-lg-none`). Standard responsive patterns. No gesture/haptic-style feedback. |
| **Error/404 page as design surface** | **PARTIALLY RESOLVED in batch 9.** Ilham B9 ships a custom WordPress 404 ("Page Not Found! / Sorry, the page you are looking for could not be found. / Back To Home" + properly customized title "Page not found – Ilham Riski Wibowo"). Saroj B9 ships a basic custom 404 ("404 / This page could not be found."). Both confirm 404-as-design-surface is reachable. **Negative instances:** Abhishek B9 (infinite redirect loop on /404.html ↔ /404) and Dhruv B9 (SPA /404 route renders empty body) are catastrophic — broken 404s are worse than default 404s. **Verdict:** A basic custom 404 with title + message + back-to-home CTA is the minimum bar. |
| **Loading state** | **PARTIALLY RESOLVED in batch 9 (in principle).** Daniyal B9 ships designed preloader CSS (`#preloader { position: fixed; z-index: 99; backdrop-filter: blur(20px); animation: fadeOutPreloader 1s linear 1s forwards }`) — first corpus instance of a designed loading state. **Caveat:** dead CSS in this case (React app doesn't actually render `#preloader`). But the design intent is documented: full-screen fixed overlay → backdrop-blur → fade out after content loads (1-2s delay). Adopt the pattern, wire it up properly. |
| **Theme toggle** | **RESOLVED in batch 9.** Daniyal B9 (`#switchTheme` in navbar) and Ilham B9 (`.theme-control-btn`) both ship designed theme toggles. Confirms B5 Juan Benito / B7 Hafeez / B8 patterns as recurring. The pattern: visible toggle button in nav, accessible ID/className, persists across reload (likely via localStorage). |
| **Custom cursor that adds UX** | **CONFIRMED in batch 9.** Dhruv B9 ships second corpus instance of dual-element cursor (`.cursor-dot` 8px + `.cursor-ring` 32px). Variant: solid black, no blend-mode (Bhavesh B8 used `mix-blend-mode: difference`). **Verdict:** Bhavesh's blend-mode variant is strictly better for varied backgrounds. Dual-element principle confirmed repeatable. |
| **Light vs dark default** | **Batch 9 adds:** Abhishek (pure white + serif — fourth pure-white escape-hatch variant after EMF B4 ultralight-sans / Milan B6 heavy-serif / Ganesh B8 serif-body); Saroj (tinted-dark slate-950 + violet — energetic/freelancer persona); Dhruv (transparent dark + multi-color blobs — maximalist-energetic); Daniyal (Bootstrap dark `#212529` + 3-font — template default); Ilham (tinted-light `rgb(240, 242, 245)` + white cards + gold accent — confirms B2 tinted-light + white-card pattern for senior-consultant persona). Confirms: tinted-dark for energetic; pure-white or tinted-light for senior-consultant. |
| **About section** | **NEW VARIANT in batch 9.** Daniyal B9 ships **tabbed About** (Skills/Education/Experience tabs as content-compression). Sixth variant after hero-only-no-About / single-page-rich / multi-page-decomposed / third-person-About / single-page-About-as-hero. |
| **Skills section** | No new variant in batch 9. Daniyal B9 uses categorized grid (Skills/Tools as separate sections). Ilham B9 uses icon-grid (PHP/Laravel/JS/Vue/Python/Figma). Confirms existing variants. |
| **Contact section** | No new variant in batch 9. Abhishek B9 uses minimal mailto ("Write To Me"). Saroj B9 has no contact section (no footer either). Dhruv B9 uses email + location + Tally.so embedded form. Daniyal B9 uses "Get In Touch" section with social icons. Ilham B9 uses "Let's👋 Work Together" card with services offered. |
| **Project filtering / categorization** | No new resolution in batch 9. |
| **Commitment vs kitchen-sink** | Confirmed for batch 9. Abhishek B9 (serif + pure white + 1 script + 0 images) commits to the minimal-text-notepad register — reads as confident (despite typography anti-patterns). Saroj B9 (Tailwind dark + 2 fonts + niche-vertical projects) commits to the freelancer-specialist register. Dhruv B9 (7-color blobs + 2 Canvas2D + dual cursor + animate.css + footer perf dashboard + 28 H3s) does NOT commit — kitchen-sink middle. Daniyal B9 (Bootstrap template + 3 fonts + jQuery in React + 8 generic projects) does NOT commit — template-y middle. Ilham B9 (WordPress + Elementor + 4 fonts + duplicate DOM) does NOT commit — CMS-template middle. |

### Carried-forward open tensions for batch 10

- **Scroll-driven section transitions** (0 in 45 — still completely unsolved)
- **Sound** (0 in 45 original sound designs — likely intentionally rare)
- **Real 3D scene** (geometric 3D, not just shaders) (0 in 45 — 5 canvas/WebGL particle-field instances now, all 2D or shader-based)
- **Hero motion that tells user where to go next** (Bhavesh B8 scroll progress bar tells position; Dale B7 fluid sim reflects input; Dhruv B9 footer "Back to top" + clear nav provides wayfinding — but no hero motion cue tells the user where to scroll next)
- **Loading state (fully wired up)** — Daniyal B9 ships designed preloader CSS but doesn't render it. Need a corpus instance where the preloader actually runs. Carry to batch 10.
- **Mobile-specific interactions (gesture, haptic-style feedback)** — 0 in 45. Standard responsive collapse only. Carry to batch 10.

### Strongest portfolio in batch 9

**Dhruv Sathe — dhruv-alpha.vercel.app.** Vite + React on Vercel. Despite 0 H1s and a broken 404, Dhruv ships the most original moves in the batch: (1) **footer performance dashboard** (Performance: 98 / Security: A+ / Uptime: 99.9%) — first corpus instance, treats the portfolio as production infrastructure; (2) **"System status" link** in footer nav — first corpus instance; (3) **dual-element custom cursor** (`.cursor-dot` 8px + `.cursor-ring` 32px 1px border) — second corpus instance after Bhavesh B8 (variant without `mix-blend-mode`); (4) **layered Canvas2D backgrounds** (2 stacked canvases at opacity 70/40, parent `absolute inset-0 z-0`) — extends Bhavesh B8 single-canvas-2D pattern to dual-canvas; (5) **multi-color gradient blob field** (14+ blurred divs in 7 colors with `mix-blend-mode`) — first corpus instance of deliberate multi-color blob bg (execution is kitchen-sink, but the principle of soft blurred color blobs is interesting); (6) **digital products section separate from projects** — first corpus instance of this content split; (7) **certifications + hackathon achievements section** — first corpus instance of explicit achievements section. Plus: Manrope + Gilroy two-font system, Tally.so embedded form, "Back to top" footer button, "Made with ❤️ in Pune, India" location stamp. Loses major points for 0 H1s, broken 404 (renders empty body), 7-color kitchen-sink accent palette, and animate.css-style decorative motion library.

Runner-up: **Daniyal Javadia — daniyal-works-portfolio.vercel.app.** Vite + React + Bootstrap 5 template on Vercel. Template-instance overall but ships several first-corpus patterns: (1) **JSX-tag-style logo** `<Daniyal Javadia/>` — first corpus instance, dev-coded logo touch; (2) **designed preloader CSS** (`#preloader { position: fixed; z-index: 99; backdrop-filter: blur(20px); animation: fadeOutPreloader 1s linear 1s forwards }`) — first corpus instance of designed loading state (dead CSS in this case, but design intent documented); (3) **tabbed About section** (Skills/Education/Experience) — first corpus instance of tabs as About-section compression; (4) **certificate modals** (`#certificateModal1-4` Bootstrap modals) — first corpus instance of modal-based credential viewer; (5) **designed theme toggle** (`#switchTheme` in navbar) — confirms B5/B7/B8 pattern. Plus: red→blue gradient-text H1 (`linear-gradient(90deg, rgb(230,65,87), rgb(65,93,230))` with `-webkit-background-clip: text`), JSON-LD Person structured data, proper heading hierarchy (1 H1 + 8 H2s + 1 H3 — only portfolio in batch 9 with correct outline). Loses major points for 5 font families (Rubik + Agustina script + Dancing Script + Font Awesome + Bootstrap Icons), jQuery + Owl Carousel dead-weight JS in a React app, 8 generic bootcamp-style project names (Fresh Shop / Netflix Clone / Admin Dashboard / etc.), default Vercel 404, and copyright-only footer.

### Weakest portfolio in batch 9

**Ilham Riski Wibowo — ilhamriski.com.** WordPress + Elementor on nginx/PHP. Heaviest payload in batch 9 (57 scripts, 781 keyframes, 31 imgs). 0 H1s (name "Hello, I am Ilham Riski Wibowo" is H2). Duplicate DOM content — Work Experience (6 jobs) rendered twice in DOM (12 H4s when there should be 6), accessibility issue for screen readers. Title "Home - Ilham Riski Wibowo" — "Home -" CMS-default prefix. 4+ font families from Elementor (Bricolage Grotesque + Roboto + Roboto Slab + Happy Icons + Font Awesome + Elementskit). No footer at all. The only positive: Bricolage Grotesque is a nice modern display font (bundled in template, not chosen), and the custom WordPress 404 ("Page Not Found! / Sorry, the page you are looking for could not be found. / Back To Home" with properly customized title) confirms 404-as-design-surface is reachable in WordPress. Lowest originality in batch 9 (1/5) — WordPress + Elementor template, no signature design choice.

Runner-up weak: **Abhishek Sah — abhisheksah.dev.** Static Next.js (1 script, very lightweight) but visually and structurally broken. Times New Roman serif H1 (OS-default — anti-pattern #3 from B1). Default browser link blue `rgb(0, 0, 238)` everywhere (90s web look). H1 = "Experience" (section heading) while visible name "Hi! My Name is Abhishek" is H3 — inverted document outline. 9 H3s used as paragraph containers (no H2s in between). 0 H2s. **404 page is broken** — infinite redirect loop `/404.html` ↔ `/404`. No footer at all. The only positives: live date/time + day-of-week + emoji location pin chip ("Tue 12:34, 📍 India") is a nice refinement of the live-date pattern, and the performance is excellent (1 script, 0 images).

---

## Batch 9 Screenshot Inventory

Saved to `/home/z/my-project/research/screenshots/batch_09/`:
- `41_abhishek_hero.png` / `41_abhishek_scroll1.png` / `41_abhishek_scroll2.png` / `41_abhishek_scroll3.png` / `41_abhishek_404.png` (5 screenshots)
- `42_saroj_hero.png` / `42_saroj_scroll1.png` / `42_saroj_scroll2.png` / `42_saroj_scroll3.png` / `42_saroj_scroll4.png` / `42_saroj_404.png` (6 screenshots)
- `43_dhruv_hero.png` / `43_dhruv_scroll1.png` / `43_dhruv_scroll2.png` / `43_dhruv_scroll3.png` / `43_dhruv_scroll4.png` / `43_dhruv_scroll5.png` / `43_dhruv_404.png` (7 screenshots)
- `44_daniyal_hero.png` / `44_daniyal_scroll1.png` / `44_daniyal_scroll2.png` / `44_daniyal_scroll3.png` / `44_daniyal_scroll4.png` / `44_daniyal_scroll5.png` / `44_daniyal_404.png` (7 screenshots)
- `45_ilham_hero.png` / `45_ilham_scroll1.png` / `45_ilham_scroll2.png` / `45_ilham_scroll3.png` / `45_ilham_scroll4.png` / `45_ilham_404.png` (6 screenshots)

Total: 31 screenshots.
