# Batch 03 — Portfolio Research (R1-B3)

> **Scope**: Portfolios 11–15 of 100. Carries forward patterns from batches 1–2:
> Domain-native metaphor (Triet); two-font developer-coded feel (Antônio); metadata-as-hero-content; hero-only home + linked subpages (Nico); warm-tinted light > pure white > dark; numbered projects `01 02 03`; frosted-glass sticky header; single accent on role phrase only.
> **Anti-patterns confirmed in batches 1–2**: default `document.title`; dumping every GitHub repo into Works; OS-default H1 fonts; broken 3rd-party widgets without fallback; Google AdSense on a portfolio; 9+ social links; replacing H1 with `<p>`; template placeholders.
> **Open tensions to revisit**: restraint vs richness; light vs dark; single-page vs hybrid; 3D still absent across 10 portfolios; code-as-interface still unsolved.

Method:
- All 5 URLs verified via `curl -sIL` → all HTTP 200.
- Each opened in `agent-browser` at 1440×900; hero + 2–4 mid-scroll screenshots taken (18 PNGs total in `screenshots/batch_03/`).
- `agent-browser eval` extracted computed body/H1 styles, canvas/iframe/img/svg/keyframe counts, heading inventory, nav + section ordering, footer text, and meta tags.
- Network panel inspected for 4xx/5xx; suspicious 404s cross-checked with `curl -sL` GET to disambiguate true breakage from Next.js RSC prefetch noise.

---

## Portfolio 11 — Whilmar Bitoco (whilmarbitoco.vercel.app)

- **Reachable**: yes (HTTP 200, Vercel / Next.js prerendered)
- **First impression**: Dark, "engineer at work" feeling — fixed nav with `//` mono-eyebrows, an emerald accent, a WebGL line-particle field floating behind a word-staggered hero. Reads as a senior full-stack engineer who has shipped a v2.
- **Visual hierarchy**: H1 (76px Poppins 900) "WHILMARBITOCO" dominates → H2 role line with rotating phrases → metadata eyebrow strip above. Tight type-rhythm; one accent color (`#10b981` emerald, declared in `theme-color`).
- **Layout composition**: Long single-page scroll, 12 sections separated by alternating `bg-[#111112]` "story-section" interludes. Center-aligned hero, alternating left/right content blocks thereafter.
- **Typography**: Single family — **Poppins** for everything. H1 at 76px / weight 900 / lh 74.48px (tight); H2 weight 600; body weight 400. No serif, no mono font. The `//` and `REF:` eyebrows are styled with monospaced letter-spacing on Poppins, not a true mono.
- **Color palette**: `#0D0D0E` body bg (near-black with a hint of warmth), white text, emerald accent `#10b981`. Section interludes at `#111112`.
- **Spacing**: Balanced — generous section padding (`section-shell`), tight hero, condensed metadata rows.
- **Hero section**: Full-viewport with WebGL2 canvas behind (class `floating-lines-container` — connected line-segment particle field). Content: `REF: 00-WH-26 | ARCHITECTURAL SCALE: 1:1 | AVAILABLE FOR NEW PROJECTS` (eyebrow row) → H1 word-staggered reveal (each `.word-inner` translated up from a clip-mask) → role H2 with pipe-separated rotating phrases → 1-paragraph bio → "VIEW MY PROJECTS" CTA → "SCROLL TO EXPLORE" hint.
- **Navigation**: Fixed top, frosted-glass effect implied (z-10 stacking). Brand `W BITOCO` left; nav links prefixed with `//` mono-eyebrow treatment (HOME / ABOUT / EXPERIENCE / SKILLS / PROJECTS / BLOG / CONTACT); `DOWNLOAD CV` CTA on the right.
- **Section ordering** (top→bottom): Hero / What I Can Do / How I Work (story-section) / About / Experience / Skills / Core Tech Stack (story-section) / Featured Projects / Latest Posts / Testimonials / Get in Touch / Footer.
- **Scroll experience**: Smooth; section-aware scroll reveals via staggered word/letter animations. The "story-section" interludes act as visual breathers between dense content blocks.
- **Animations & motion**: 3 keyframes total. Hero H1 has a per-word mask reveal (transform translateY with overflow:hidden parent). The WebGL line field drifts subtly. Purposeful — not a marquee in sight.
- **Hover interactions**: Nav links with `//` eyebrow reveal on hover; project cards lift; CTA buttons fill on hover. Restrained.
- **Background effects**: WebGL2 line particle network on hero only. Section interludes use plain `#111112` bg. No grain, no gradient blobs, no parallax.
- **3D elements**: **Yes — first in the corpus.** Single WebGL2 canvas (`WebGL2RenderingContext`) behind hero, full-viewport, with a "floating lines" particle/segment network. Subtle, slow-moving, low-density. Tasteful, not gimmicky — the field adds depth without competing with type.
- **Responsiveness perception**: Strong — section-shell + max-w containers, mobile nav would presumably collapse. (Not tested at mobile breakpoint.)
- **Performance perception**: Heavy by batch-1/2 standards — Next.js + 6 font woff2 files + 1 WebGL shader + 111 SVG icons + Vercel Insights analytics POSTing events. But initial paint felt fast (Next.js prerendered, x-nextjs-prerender: 1).
- **Emotional feeling**: Serious, "systems engineer at a workstation," architectural. Calm but technical.
- **Originality**: 4/5 — Comprehensive system-engineer metaphor carried consistently (REF/ARCHITECTURAL SCALE in hero, SYSTEM_DETAILS/INITIALIZE_COMMUNICATION in contact, V2.0.26_STABLE in footer). Loses a point because 12 sections starts to feel like "every feature" syndrome.
- **What works**:
  - **Domain-native conceptual metaphor that scales**: hero uses `REF: 00-WH-26 | ARCHITECTURAL SCALE: 1:1` and contact uses `EMAIL_ADDRESS / NETWORK_PHONE / PHYSICAL_NODE / INITIALIZE_TRANSMISSION` — same metaphor family as Triet's Unix shell, but adapted to "architectural engineering" rather than DevOps shell. Proves the pattern generalizes beyond shell.
  - **Footer treated as a real design surface**: brand description, location (PHILIPPINES), version stamp (`V2.0.26_STABLE`), NAVIGATE column with `//` eyebrows, CONNECT column, copyright, and tags ("PRECISION ENGINEERING | SECURITY VERIFIED"). Most-footered portfolio in the corpus so far.
  - **WebGL particle line field, not three.js**: proves that a single WebGL2 canvas drawing a low-density connected-segment field can add depth without the three.js bundle. ~one canvas, three keyframes, and it works.
- **What does NOT work**:
  - **12 sections is too many** — Hero / What I Can Do / How I Work / About / Experience / Skills / Core Tech Stack / Featured Projects / Latest Posts / Testimonials / Get in Touch / Footer dilutes attention. "How I Work" and "What I Can Do" overlap; "Skills" and "Core Tech Stack" overlap.
  - **H1 reads as one word "WHILMARBITOCO"** — visually striking but awkward to read. A space (`WHILMAR BITOCO`) would scan faster without losing impact.
  - **Single font family (Poppins) trying to do everything** — `//` and `REF:` eyebrows would land harder in a true mono (Geist Mono / JetBrains Mono). Poppins-with-letter-spacing is a compromise.
- **Notable patterns to consider**:
  - **Footer-as-design-surface**: brand + description + location + version stamp + nav columns + tags. Treat the footer as a real layout surface, not an afterthought.
  - **WebGL particle field, low-density, single canvas**: a viable 3D-adjacent move that doesn't ship three.js. The "floating lines" class is the cheapest "premium depth" I've seen in the corpus.
  - **Architectural-engineering metaphor family** as an alternative to Triet's shell — `REF:` / `SCALE: 1:1` / `INITIALIZE_TRANSMISSION` are domain-flavored without being costume-y.
  - **Word-staggered hero H1 reveal** — each word in an `overflow:hidden` mask, transformed up on load. Premium feel, single keyframe.

---

## Portfolio 12 — Gunjan Ghate (techggdev.vercel.app)

- **Reachable**: yes (HTTP 200, Vercel / Next.js; redirects http→https)
- **First impression**: Busy and colorful — pure white background, big blue gradient-clip-text "GUNJANGHATE." wordmark at top in a comic-display font, then a left/right split hero, then a long scrolling page of marquees, glowing cards, and 7 canvas backgrounds.
- **Visual hierarchy**: Competing focal points. The first H1 is small (36px) but in a loud display font; the role H1 ("Hi! there, I'm Gunjan Ghate") is much larger and in a different style. No single dominant typographic moment.
- **Layout composition**: Side-by-side hero (text left, visual right) → alternating wide sections → 4 main content sections (About / Tech Stack / Experience / Projects) → big footer block with feedback form + nav.
- **Typography**: System-ui / sans-serif for body (Tailwind default). H1 in **Bangers** (free Google comic-display font) at 36px / weight 400 / lh 40px — the smallest H1 in the corpus. Body weight 400. Tech-stack tags use small sans.
- **Color palette**: Pure white (`lab(100 0 0)`), near-black text (`lab(2.75381 0 0)`), blue-400→blue-700 gradient on the "G" letters of GUNJANGHATE, red-300→red-500 gradient on "Gun" in the role H1. Mixed accent strategy — blue and red both used as gradient-clip-text accents on hero.
- **Spacing**: Dense. Sections are tightly packed; tech stack uses tight icon grids.
- **Hero section**: Top of page shows the small Bangers "GUNJANGHATE." wordmark (likely the persistent site header). Then the actual hero is a left/right split: left = "Hi! there, I'm Gunjan Ghate" H1 + role line + bio paragraph; right = a large canvas-rendered visual (likely an animated portrait or graphic). A Canvas2D background sits behind.
- **Navigation**: No traditional top nav (position: static). Nav lives in the footer: General / Home / About / Skills / Experience / Projects / Feedback. Social links (GitHub, LinkedIn, X, LeetCode) sit at the very top.
- **Section ordering**: Wordmark / Social row / Hero (left-right split) / MoreAbout me (~ Who's Behind the Terminal?) / My Tech Stack (~ That I have worked with) / My Experience (~ Things that shaped me) / My Projects (~ Those Late Night Grinds) / Feedback (~ Drop a Thought, Spark a Change) / Footer.
- **Scroll experience**: Long scroll (~9840px tall). 7 separate Canvas2D backgrounds (some as tall as 3834px — they cover entire sections). Two marquees (likely tech-stack icon scrolls). Scroll feels busy.
- **Animations & motion**: 8 keyframes. Marquees scroll. Cards likely have hover glow. Heavy on decorative motion.
- **Hover interactions**: Tech-stack icons with hover lift / glow; project cards with hover transforms; gradient-clip-text on hero "G" letters is static (no hover).
- **Background effects**: **7 Canvas2D backgrounds** — not WebGL, but plain 2D canvas contexts attached to section-sized wrappers. Likely particle fields, gradient meshes, or grid patterns per section. Heaviest background strategy in the corpus.
- **3D elements**: No WebGL — all 7 canvases are Canvas2D. No three.js. No Spline. No CSS 3D.
- **Responsiveness perception**: Tailwind responsive utilities everywhere (`md:flex-row`, `md:px-18`). Likely good.
- **Performance perception**: Heavy. 64 images (mostly tech-stack PNGs at `/static/media/<tech>.<hash>.png` — each its own HTTP request). 7 canvas elements animating simultaneously. 8 keyframes. System font saves weight but the icon PNGs add up.
- **Emotional feeling**: Energetic, playful, student-portfolio energy. Less "senior" than Whilmar.
- **Originality**: 3/5 — The Bangers wordmark is a bold (if risky) choice; the multiple-canvas background strategy is unusual; the `~` eyebrow after every section title is a signature move. Loses points for multiple H1s and competing focal points.
- **What works**:
  - **`~` character as eyebrow punctuation** — every H2 has a `~ Who's Behind the Terminal?`-style subtitle. Cheaper than `//` mono-eyebrow and gives a casual, terminal-flavored tone without committing to a mono font.
  - **Personal domain as title** — `gg.dev` as `document.title` is short, memorable, ownable. Less SEO-friendly than a full name+role title but more brand-forward.
  - **Tailwind `bg-clip-text` gradient on initials** — blue-400→blue-700 on the G letters of GUNJANGHATE gives the wordmark a unique signature without an image asset.
- **What does NOT work**:
  - **Multiple H1s (4 total)**: "GUNJANGHATE." (twice), "Hi! gg here,", "Hi! there, I'm Gunjan Ghate" — semantic H1 is supposed to be the page's single most important heading. SEO and accessibility both penalize this.
  - **7 simultaneous Canvas2D backgrounds** — each canvas covers a full section (one is 3834px tall). Performance and battery cost is real. Visually, they compete with each other and with the gradient-clip-text.
  - **Bangers display font for H1 at only 36px** — display fonts need size to land; at 36px Bangers reads more "blog title" than "portfolio hero." Either go bigger or pick a different display face.
  - **Network log shows 404 for `Gunjan Ghate - Resume.pdf?_rsc=1r34m`** (Next.js RSC prefetch variant). Direct `curl -sL` returns 200 with the PDF — so the file exists, but the Next.js `<Link>` RSC prefetch 404s. Functionally OK, but logs an error in the console on every page load.
- **Notable patterns to consider**:
  - **`~` eyebrow** as a lighter-weight alternative to `//` mono-eyebrow (works without a mono font).
  - **`bg-clip-text` gradient on initials only** — gives the wordmark a signature without image assets.
  - **Footer-resident navigation** instead of top nav — interesting for hero-led pages but loses wayfinding on long scrolls.

---

## Portfolio 13 — Ajvad Laseen (ajvadlaseen.com)

- **Reachable**: yes (HTTP 200, Cloudflare; built with **Astro v5.17.2**)
- **First impression**: Quietly confident — pure white OKLCH background, Space Grotesk display + Inter body, hero is just "Hi, I'm Ajvad / A Software Developer based in U.A.E" with 4 inline icon links (GitHub / LinkedIn / email / resume.pdf). Live date stamp at top-left.
- **Visual hierarchy**: One H1 on home ("Hi, I'm Ajvad" at 48px Space Grotesk 700). One inline nav row (About / Experience / Skills / Projects). One full-viewport subtle Canvas2D background. Single dominant typographic moment.
- **Layout composition**: Single narrow column (`max-w-3xl`) centered. Home page = About (a few paragraphs). Subpages for Experience / Skills / Projects.
- **Typography**: **Two-font system** — `Space Grotesk` for H1/H2 (display), `Inter` for body. H1: 48px / weight 700 / lh 48px (tight). Body weight default. No mono font.
- **Color palette**: Pure white `oklch(1 0 0)` bg, pure black `oklch(0 0 0)` text. OKLCH (second portfolio in the corpus after Hassan batch 2). No accent color observed — links inherit text color.
- **Spacing**: Airy. Single column with generous line-height. Lots of vertical whitespace between blocks.
- **Hero section**: Single screen. Top-left live date stamp ("Fri Jul 03 2026, 12:01" — JS-rendered, updates each minute). Top-right "Toggle theme" button. Center-left: H1 "Hi, I'm Ajvad" + H2 "A Software Developer / based in U.A.E". Below: 4 inline icon links (GitHub, LinkedIn, mailto, resume.pdf). Below that: nav row (About / Experience / Skills / Projects). Below that: H1 "Hey 👋" + About paragraph.
- **Navigation**: Inline text nav under the hero (no fixed header, no `nav` element). Each link goes to a separate Astro route. Astro view transitions enabled — page changes animate without full reload.
- **Section ordering** (homepage): Date stamp / theme toggle / Hero / Inline nav / About ("Hey 👋") / Footer ("© 2026 Ajvad Laseen. All rights reserved.").
- **Scroll experience**: Minimal — homepage barely scrolls. Subpages have their own scroll. View transitions give a spa-like feel between routes.
- **Animations & motion**: 11 keyframes (moderate). Astro view transitions on route changes. Canvas background animation (subtle — sampled center pixel was transparent, suggesting low-density animated effect like a sparse grid or floating dots).
- **Hover interactions**: Minimal — icon-link color shifts, theme toggle.
- **Background effects**: Single full-viewport Canvas2D, `pointer-events:none absolute inset-0`. Subtle enough that the center pixel samples transparent. Likely a low-density particle or grid animation.
- **3D elements**: No. Canvas2D only.
- **Responsiveness perception**: `max-w-3xl` + `px-8` + `md:flex-row` — narrow single-column on mobile, slight reflow on desktop. Probably excellent.
- **Performance perception**: Excellent. Astro static-rendered, 4 images (3 SVG tech icons + 1 webp portrait), 1 small canvas, single CSS bundle. Pages load instantly.
- **Emotional feeling**: Calm, restrained, "I trust my work speaks." Closest in spirit to Nico (batch 2) but with a more conventional content layout.
- **Originality**: 3.5/5 — Clean Astro multi-page architecture with view transitions; live date stamp as the only "motion" in hero. Loses points for the empty Projects page (see below).
- **What works**:
  - **Live date stamp at top-left** ("Fri Jul 03 2026, 12:01") — first live timestamp in the corpus. Reads as "this site is alive." Tiny touch, big premium signal.
  - **Astro view transitions** — multi-page architecture that feels like a SPA. Page-to-page navigation animates without a hard reload. Validates multi-page hybrid over single-page scroll.
  - **OKLCH color values** — pure white as `oklch(1 0 0)`, not `#fff` or `rgb(255,255,255)`. Same dev-coded signal as Hassan batch 2.
  - **Resume.pdf returns 200** (103 KB) — only the second working resume download in the corpus after Phat (batch 2).
- **What does NOT work**:
  - **`/projects` subpage renders only "Coming Soon..."** — the route exists, the page has a proper title ("Projects | Ajvad Laseen"), but the only content is "Coming Soon..." This is the soft anti-pattern: an empty subpage is worse than no link, because it signals "I started this and didn't finish." Either hide the nav link until the page is ready, or ship real content.
  - **Theme toggle button visible but light-only palette** — clicking "Toggle theme" with no apparent dark palette in CSS is confusing. (Did not test click; palette observed is light-only.)
  - **No fixed nav** — on long subpages (Experience is long), the only way back to navigation is to scroll to the top. Inline nav under hero only works on the homepage.
- **Notable patterns to consider**:
  - **Live date stamp in hero corner** — the cheapest possible "this site is alive" signal. One `<time>` element with `setInterval`. Premium feel for ~10 lines of JS.
  - **Astro view transitions** as the multi-page architecture of choice — gives SPA feel with static-rendered performance.
  - **`max-w-3xl` single-column** — long-form essay feel. Different from Nico's hero-only home; trades impact for readability.

---

## Portfolio 14 — Ghulam Mujtaba (ghulammujtaba.com)

- **Reachable**: yes (HTTP 200, Vercel / Next.js; root redirects to `/portfolio`)
- **First impression**: Professional product-designer vibe. Light theme, Open Sans body, large hero portrait + wordmark, lots of categories (Languages / Skills / Certifications / Projects / Insights / Contact), Framer Motion reveals, Plexus particle canvas in the contact section.
- **Visual hierarchy**: Two-tier hero — H1 is the SEO title ("Ghulam Mujtaba | Full Stack Developer, Data Scientist, AI Specialist" at 32px / weight 700, visually secondary), H2 "Hello, I'm GHULAM MUJTABA" is the visual hero. Monogram logo top-left, portrait right, two CTAs ("Let's Build Together" / "View My Work").
- **Layout composition**: Classic agency-style. Hero with portrait + wordmark → About → Languages → Skills (categorized) → Certifications → Projects preview → Insights preview → Contact (form on Plexus canvas) → Footer. Multi-page nav: Home / About / Projects / Insights / Resume / Contact.
- **Typography**: **Open Sans** body (with Poppins / Manrope / Inter loaded as alternates via one Google Fonts request). H1 at 32px / weight 700 (small but SEO-titled). H2 hero at much larger size (visible wordmark). No mono font. Wordmark is an SVG (`ghulam-mujtaba-wordmark-on-light.svg`).
- **Color palette**: Pure white (`rgb(255, 255, 255)` html bg), black text. Accent not strongly present in CSS variables observed — links/CTAs use a brand color (not extracted). Light theme throughout.
- **Spacing**: Balanced. Hero has generous breathing room; skill badges are tightly gridded; case-study articles have wide reading columns.
- **Hero section**: Left side: "Hello, I'm" eyebrow → "GHULAM MUJTABA" wordmark H2 → "Founder of Megicode. I build AI-powered products end-to-end — from the model to the app shipping it." → "Let's Build Together" + "View My Work" CTAs. Right side: professional portrait (603×600 PNG).
- **Navigation**: Top nav (position: static, not sticky). Brand: GM monogram (left) + Ghulam Mujtaba wordmark. Links: Home / About / Projects / Insights / Resume / Contact. No backdrop-blur.
- **Section ordering**: Hero / About / Languages / Skills / Certifications / Projects (preview) / Insights (preview) / Contact (with Plexus canvas) / Footer.
- **Scroll experience**: Framer Motion scroll-reveals on most content blocks (26 elements with framer styles). 86 keyframes total — animation-heavy. Sections fade/slide in as they enter viewport. Smooth but busy.
- **Animations & motion**: **86 keyframes** — the most in the corpus. Framer Motion appears to be the driver. Scroll-tied reveals on every section. The Plexus particle network animates continuously in the contact section.
- **Hover interactions**: Project cards lift; "Live Preview" buttons shift; skill badges pulse subtly.
- **Background effects**: One Canvas2D `PlexusCanvas` (connected-node particle network) specifically in the Contact section as a `ContactUsLight__contactFormBackground`. Classic "plexus" animation. White-on-light with low opacity.
- **3D elements**: No WebGL. Canvas2D Plexus particles only (not 3D, but visually 3D-adjacent).
- **Responsiveness perception**: Strong — module-suffixed CSS classes (`welcomeLight-module__BVzhla__container`) suggest a themed CSS-modules setup with light/dark variants. `min-w-screen` and `flex-col md:flex-row` patterns throughout.
- **Performance perception**: Heavy. 58 images (project screenshots + skill icons + portrait + wordmark + monogram). 86 keyframes. Framer Motion JS bundle. Google Fonts (4 families in one request). Cloudinary for media. GA + Google Tag Manager. CSP is strict and well-configured (good signal).
- **Emotional feeling**: Professional, ambitious, "agency founder." Less personal than Ajvad; more productized.
- **Originality**: 4/5 — The case-study architecture on `/insights/<slug>` is the strongest long-form content design in the corpus. The "Insights" naming (instead of "Blog") is on-brand for an AI founder.
- **What works**:
  - **Case study architecture on `/insights/<slug>`** — breadcrumb (Home › Insights › Title), H1 = title, "Updated: 30/06/2026" date, "7 min read" estimate, category ("Projects & Career"), tag chips (#MegiLance, AI Product Engineering, ...), Share button, **Table of Contents with 9 numbered sections**, "Related Articles" footer. This is the case-study template to emulate.
  - **"Insights" instead of "Blog"** — on-brand for an AI founder; signals "I think, then I ship." Better than the generic "Blog" link.
  - **Project preview cross-links to Insights case study** — each featured project card has both "Live Preview" (deployed site) and "Read Article" (case study). Two depths of exploration per project.
  - **Plexus canvas scoped to Contact only** — not site-wide. The particle network is a deliberate "you've arrived at the contact surface" signal.
  - **CSP is properly configured** — strict `default-src 'self'`, `frame-ancestors 'none'`, `object-src 'none'`, `base-uri 'self'`. Signals mature deployment hygiene.
- **What does NOT work**:
  - **86 keyframes** — by far the most in the corpus (next-highest is 11). Almost every element has an entrance animation. After the first 2-3 reveals, the motion stops adding information and starts adding latency.
  - **SEO title used as H1** — H1 is "Ghulam Mujtaba | Full Stack Developer, Data Scientist, AI Specialist" (the SEO title), while the visual hero is an H2 ("Hello, I'm GHULAM MUJTABA"). Inverts semantic hierarchy: screen readers announce the H1 first, which reads like a page title rather than a greeting.
  - **Network log shows 404s for two project preview images** (`/_next/image?url=%2Fapi%2Fmedia%2Ffile%2F<id>&w=640&q=75`). Direct `curl -sL` GET returns 200 for both — likely transient (Cloudinary cold-start or Next.js image-optimizer warmup). Worth fixing because the network panel visibly shows red on first paint.
- **Notable patterns to consider**:
  - **Case study template** (breadcrumb + date + min-read + category + tags + share + ToC + related articles) — emulatable as a single Astro/MDX layout.
  - **"Insights" naming** for the long-form content surface — better than "Blog."
  - **Project-card dual links** (Live Preview + Read Article) — gives visitors a depth choice.
  - **Plexus canvas scoped to one section** — particle network as a section-specific atmosphere, not a site-wide gimmick.
  - **Strict CSP** as a deployment signal — premium portfolios care about CSP.

---

## Portfolio 15 — Cade Kynaston (cade.codes)

- **Reachable**: yes (HTTP 200, Netlify; built with **Gatsby 2.32.3** — 2019/2020 era)
- **First impression**: Old-school minimalism. Dark navy blue background, Raleway + Roboto, period-punctuated section titles ("Projects." "Experience." "Let's connect."), 5 hand-curated projects, footer says "Cade Kynaston 2020. Made using Gatsby. View the code on GitHub." Reads as a developer who shipped once and walked away.
- **Visual hierarchy**: One H1 (70px Raleway 600 "Cade Kynaston.") dominates. H2 section titles are smaller. H3 for project names. Email visible at top.
- **Layout composition**: Single-page anchor-scroll. Hero (centered text, no portrait, no canvas) → Projects → Experience → Contact (form). Footer at the very bottom with one line of credit.
- **Typography**: **Two-font system** — Raleway for H1 (display sans, geometric), Roboto for body. H1: 70px / weight 600 / lh 72px. Period after every section title is the signature typographic move.
- **Color palette**: Dark navy `#1E2749` html bg (declared as `theme-color`), body transparent, H1 color `rgb(250, 250, 255)` (slightly-blue white), body text near-white. No accent color observed.
- **Spacing**: Airy. Generous vertical rhythm. Hero centered with lots of empty space.
- **Hero section**: Centered text. "Hi, I'm" eyebrow → "Cade Kynaston." H1 → "I'm a Software Engineer at Clearlink." H3 → "I'm currently focused on expanding my experience designing and developing high performing websites." paragraph. No canvas, no image, no animation. Email visible above the eyebrow.
- **Navigation**: Anchor links in the top header (#projects, #experience, #contact) + resume.pdf + 6 social icons (GitHub, LinkedIn, Twitter, Instagram, CodePen, CodeWars). Position: relative (not sticky).
- **Section ordering**: Hero / Projects. / Experience. / Let's connect. / Footer.
- **Scroll experience**: Plain HTML scroll. No smooth-scroll library, no parallax, no scroll-triggered animations. 1 keyframe (extreme restraint — matches Triet batch 1).
- **Animations & motion**: 1 keyframe (lowest in the corpus alongside Triet). No observed `animationName` on any visible element — the keyframe may be unused or on a pseudo-element. Zero motion on the hero.
- **Hover interactions**: Link color shift on hover. Project cards have "Visit Site ›" and "View Code ›" links with arrow glyph. Restrained.
- **Background effects**: Plain dark navy `#1E2749`. No gradient, no grain, no particles.
- **3D elements**: No. Zero canvas, zero iframe.
- **Responsiveness perception**: Gatsby 2-era responsive utilities. Likely functional but not modern (no container queries, no clamp() typography observed).
- **Performance perception**: Excellent. 1 keyframe, 15 images (project screenshots + social SVGs), 0 canvas, 0 third-party JS. Page loads instantly. Total document HTML ~146 KB.
- **Emotional feeling**: Calm, mature, "I shipped this once and it still works." Restraint as a virtue.
- **Originality**: 3/5 — Restraint matches Triet (batch 1). Period-after-titles is the signature. Loses points for being a 2020 portfolio that hasn't been updated (footer date stamps it).
- **What works**:
  - **Period-punctuated section titles** — "Projects." "Experience." "Let's connect." — a tiny typographic move that gives the page a voice. Reads as declarative ("here is the section, period, next.").
  - **"View Code ›" alongside "Visit Site ›" on every project** — open-source ethos. The portfolio itself is open-source (footer: "View the code on GitHub"). Strongest open-source signal in the corpus.
  - **1 keyframe, 0 canvas, 0 iframe** — proves restraint still works in 2026. The page feels senior because it doesn't try to impress with motion.
  - **Dark navy `#1E2749` instead of pure black** — a warmer dark than `#000` or `#0D0D0E`. Distinctive without being saturated (Jeremiah's cobalt was saturated; this is muted).
- **What does NOT work**:
  - **6 social links + resume.pdf + 3 anchor links = 10 nav items** — close to the "9+ social links" anti-pattern from batch 2. CodePen and CodeWars are noise for a software engineer at Clearlink; GitHub + LinkedIn + email would suffice.
  - **Built with Gatsby 2.32.3** (2019) — the framework version is exposed in the meta tag (`generator=Gatsby 2.32.3`). Shows the portfolio hasn't been maintained since 2020. Not a fatal flaw, but a recruiter who notices will read it as "doesn't maintain side projects."
  - **No anchor-scroll smoothing** — clicking #projects jumps hard. Minor, but jarring after the smooth-scroll norms of 2026.
- **Notable patterns to consider**:
  - **Period-punctuated section titles** — "Projects." / "Experience." / "Let's connect." — a 1-byte signature move.
  - **Dark navy `#1E2749` as a warm dark** — alternative to pure black for dark themes. Distinctive without being loud.
  - **Open-source portfolio link in footer** — "View the code on GitHub" as a credibility signal.
  - **1-keyframe restraint** confirmed as senior-feeling (matches Triet batch 1).

---

## Batch 3 Synthesis

### Patterns that reinforce batches 1–2

1. **Domain-native conceptual metaphor generalizes** — Whilmar carries Triet's batch-1 Unix-shell pattern forward but adapts it to "architectural engineering" (`REF: 00-WH-26`, `ARCHITECTURAL SCALE: 1:1`, `INITIALIZE_TRANSMISSION`, `V2.0.26_STABLE`). Proves the metaphor pattern is portable beyond DevOps.
2. **Mono-eyebrow labels recur** — Whilmar uses `// HOME`, `// ABOUT`, `// NAVIGATE`, `// CONNECT` exactly like Antônio batch 1. Gunjan uses a `~`-prefixed variant (`~ Who's Behind the Terminal?`) that achieves the same eyebrow effect without a mono font.
3. **Multi-page hybrid validated, again** — Ajvad (Astro) and Ghulam (Next.js) both ship multi-page architectures with subpages for content categories. Ajvad's Astro view transitions are the cleanest implementation yet.
4. **Restraint reads as senior, again** — Cade's 1-keyframe Gatsby 2 portfolio from 2020 still feels senior in 2026. Matches Triet batch 1.
5. **Title hygiene varies** — Cade ("Cade Kynaston - Software Developer"), Ajvad ("Ajvad Laseen - Software Developer"), Whilmar (long role-listed title), Ghulam ("Ghulam Mujtaba | Founder, Megicode & CampusAxis · Full Stack + AI") all set proper titles. Gunjan ships the shortest ("gg.dev") — brand-forward, less SEO-friendly.
6. **Open-source resume.pdf download is still flaky** — Gunjan's RSC-prefetch returns 404 in the network log even though the file itself loads on direct GET. Confirms "broken-feature anti-pattern" recurrence from batches 1–2.
7. **Theme-color metas recur** — Whilmar `#10b981`, Cade `#1E2749`. Mobile browser chrome tints are now table-stakes.

### Patterns that contradict or refine earlier findings

1. **Dark vs light, refined** — Batch 2 concluded "warm light > pure white > dark." Batch 3 splits 2 light (Ajvad, Ghulam), 2 dark (Whilmar, Cade), 1 light with dark accent (Gunjan white with multi-canvas). Crucially, the two darks use **tinted** darks (`#0D0D0E`, `#1E2749`), not pure black. **Refinement: tinted-dark (navy, near-black-warm) is competitive with warm-light. Pure black or pure white is what to avoid.**
2. **Hero H1 size, refined** — Batch 2 saw Nico's 104px as confident. Batch 3 shows the opposite end: Gunjan's H1 is 36px (Bangers display), Cade's is 70px, Whilmar's is 76px, Ajvad's is 48px, Ghulam's is 32px (because it's the SEO title). **Refinement: 48–76px is the confident range; <40px reads as a wordmark/header rather than a hero.**
3. **Number of sections, refined** — Batch 1 praised Antônio's 7-section portfolio as "comprehensive but professional." Whilmar ships 12 sections and it tips into "every feature" syndrome. **Refinement: 5–7 sections is the sweet spot. 10+ dilutes attention.**
4. **`document.title` style, refined** — Gunjan's "gg.dev" is brand-forward but SEO-weak. Cade/Ajvad's "Name - Role" is the safe default. Whilmar/Ghulam's longer role-listed titles are SEO-strong but read like CVs in the tab. **Refinement: "Name — Role" (one role, em-dash) is the sweet spot.**
5. **Number of social links, refined** — Batch 2 said "9+ is anti-pattern." Cade ships 6 (GitHub, LinkedIn, Twitter, Instagram, CodePen, CodeWars) — and CodePen/CodeWars are noise for a software engineer. **Refinement: 3–4 social links max. GitHub + LinkedIn + email + (X or personal blog). Drop CodePen/CodeWars/LeetCode unless they're a primary identity.**

### New patterns unique to this batch

1. **WebGL particle line field, low-density, single canvas** (Whilmar) — the first non-trivial 3D-adjacent element in the corpus. **Not three.js** — a single WebGL2 canvas drawing a connected-segment particle field. ~premium depth without the three.js bundle cost.
2. **Live date stamp in hero corner** (Ajvad) — "Fri Jul 03 2026, 12:01" rendered via JS, updates each minute. Cheapest possible "this site is alive" signal. ~10 lines of JS.
3. **Astro view transitions for multi-page hybrid** (Ajvad) — Astro v5.17.2 with `astro-view-transitions-enabled=true`. SPA-feel navigation between static-rendered pages. Validates multi-page hybrid over single-page scroll, with better DX than Nico's hand-rolled vanilla approach.
4. **Plexus particle canvas scoped to one section** (Ghulam) — the contact section has a Canvas2D connected-node particle network as `ContactUsLight__contactFormBackground`. The particle field is a deliberate "you've arrived at the contact surface" signal, not a site-wide background.
5. **Footer-as-design-surface** (Whilmar) — brand + description + location + version stamp + nav columns + tag chips. Most-footered portfolio in the corpus. Whilmar's footer is the new template for footer design.
6. **Case study article template** (Ghulam, `/insights/<slug>`) — breadcrumb + date + min-read + category + tag chips + share button + numbered Table of Contents + "Related Articles." The strongest long-form content design in the corpus. "Insights" naming (instead of "Blog") is on-brand for an AI founder.
7. **Project-card dual links: "Live Preview" + "Read Article"** (Ghulam) — gives visitors a depth choice (deployed site vs. case study).
8. **Period-punctuated section titles** (Cade) — "Projects." "Experience." "Let's connect." A 1-byte signature move that gives the page a declarative voice.
9. **Open-source portfolio link in footer** (Cade) — "View the code on GitHub" as a credibility signal.
10. **OKLCH color values as dev signal** (Ajvad) — `oklch(1 0 0)` for white instead of `#fff`. Reinforces Hassan batch 2's oklch observation.
11. **SEO-title-as-H1 anti-pattern** (Ghulam) — H1 is "Ghulam Mujtaba | Full Stack Developer, Data Scientist, AI Specialist" (the SEO title), visual hero is an H2. Inverts semantic hierarchy for screen readers.
12. **`~` eyebrow as lighter `//` alternative** (Gunjan) — `~ Who's Behind the Terminal?` achieves mono-eyebrow tone without committing to a mono font.
13. **Multiple H1s anti-pattern** (Gunjan) — 4 H1 tags on one page. Confirms Jayed batch 2's broken semantic HTML pattern is broader.
14. **`bg-clip-text` gradient on initials only** (Gunjan) — blue-400→blue-700 gradient on just the "G" letters of GUNJANGHATE gives the wordmark a signature without an image asset.

### Updated answers to the open tensions

1. **Restraint vs richness** — Both can read as senior if executed with conviction. Cade (1 keyframe, 2020 Gatsby) and Whilmar (3 keyframes, 2026 Next.js + WebGL) both feel senior because each commits to a coherent register. **Ghulam's 86 keyframes breaks the rule: richness without commitment reads as "tries hard."** The tension is not restraint-vs-richness but **commitment-vs-kitchen-sink.**
2. **Light vs dark** — Refined: **tinted-dark (navy `#1E2749`, near-black-warm `#0D0D0E`) is competitive with warm-light (peach/cream)**. Pure black and pure white both read as flat. The rule is "tint, never pure."
3. **Single-page vs hybrid** — **Hybrid wins, with Astro view transitions as the implementation of choice.** Ajvad validates Astro multi-page; Ghulam validates Next.js multi-page with case-study subpages. Single-page scroll (Cade, Gunjan, Whilmar) works for short content but Whilmar's 12-section single page proves the model breaks past 7 sections.
4. **3D** — **First non-trivial 3D-adjacent element observed**: Whilmar's WebGL2 particle line field, single canvas, low-density. **Verdict: tasteful when scoped to one surface (hero or contact), gimmicky when site-wide.** Three.js is still absent across 15 portfolios; a single WebGL2 canvas drawing particles is the cheap-premium move.
5. **Code-as-interface** — **Still unsolved.** Whilmar's `INITIALIZE_COMMUNICATION` / `EMAIL_ADDRESS` / `NETWORK_PHONE` is the closest yet to "code as interface" but it's still cosmetic (the actual interface is a contact form). No portfolio in the corpus has shipped a live playground, syntax-highlighted terminal, or runnable code surface. Carry to batch 4.

### New patterns to add to `personal_portfolio.md` pattern library

- **Footer-as-design-surface** (Whilmar) — adopt.
- **Case study article template** (Ghulam) — adopt for case-study subpages.
- **Live date stamp in hero corner** (Ajvad) — adopt.
- **WebGL2 single-canvas particle field** (Whilmar) — adopt, scoped to one surface only.
- **Astro view transitions** (Ajvad) — adopt as multi-page architecture.
- **Period-punctuated section titles** (Cade) — adopt as optional signature.
- **`~` eyebrow as lighter `//` alternative** (Gunjan) — adopt for sections that don't need full mono-eyebrow weight.

### New anti-patterns to add

- **Multiple H1s on a single page** (Gunjan, 4 H1s) — anti-pattern.
- **SEO-title-as-H1** (Ghulam) — anti-pattern, inverts semantic hierarchy.
- **Empty "Coming Soon..." subpage** (Ajvad's `/projects`) — anti-pattern, worse than no link.
- **86+ keyframes** (Ghulam) — anti-pattern, richness without commitment.
- **12+ sections on a single-page scroll** (Whilmar) — anti-pattern, dilutes attention.
- **Gatsby 2 / unmaintained framework version in meta tags** (Cade) — anti-pattern, signals neglect.

### Screenshots produced

`/home/z/my-project/research/screenshots/batch_03/`:
- `p11_whilmar_hero.png`, `p11_whilmar_mid1.png`, `p11_whilmar_mid2.png`, `p11_whilmar_mid3.png`, `p11_whilmar_mid4.png`
- `p12_gunjan_hero.png`, `p12_gunjan_mid1.png`, `p12_gunjan_mid2.png`, `p12_gunjan_mid3.png`, `p12_gunjan_mid4.png`
- `p13_ajvad_hero.png`, `p13_ajvad_mid1.png`, `p13_ajvad_mid2.png`, `p13_ajvad_projects.png`, `p13_ajvad_projects_scroll.png`
- `p14_ghulam_hero.png`, `p14_ghulam_mid1.png`, `p14_ghulam_mid2.png`, `p14_ghulam_mid3.png`, `p14_ghulam_case.png`
- `p15_cade_hero.png`, `p15_cade_mid1.png`, `p15_cade_mid2.png`
