# Batch 05 — Research Round 2, Batch 5

**Task ID**: R2-B5
**Portfolios analyzed** (5):
21. Artur Bień — https://expensive.toys
22. Luca Félix — https://luca-felix.com
23. Vinay Katikireddy — https://vinaykatikireddy.is-a.dev
24. Blanc John Clayton — https://www.johnclaytonblanc.com
25. Caiovisuals — https://www.caiovisuals.com

**Method**: agent-browser (Chromium 1440×900 desktop) for reachable sites; `curl -sIL` + GitHub API for the unreachable site. DOM extraction via `agent-browser eval` covered body/H1 computed styles, heading inventory (H1–H6), canvas/img/svg/iframe/audio/video counts, keyframe names, section ordering, social links, font loading status, CSS variables, OG tags, and (best-effort) performance entries. Cross-checked Vinay's 404 with both `curl` on the root and `vinaykatikireddy.github.io` (the is-a.dev CNAME target) — both return GitHub Pages "Site not found".

**Honesty note**: All 5 portfolios visited live. Screenshots saved to `/home/z/my-project/research/screenshots/batch_05/` (14 PNGs). Per prior batches, screenshots cannot be visually inspected by the agent (Read tool rejects PNGs) — all visual judgments below rely on DOM extraction, computed styles, and inline HTML inspection.

---

## 21. Artur Bień — https://expensive.toys

- **Reachable**: yes (Vercel, HTTP 200, 45 KB HTML)
- **First impression**: A deliberately retro Windows-95 desktop-quiet homepage — body in actual MS Sans Serif on the classic Windows gray `rgb(207,207,207)`, an interactive "Release balloons" button on the hero, and only two routes: Blog + Toys. The brand statement is "expensive.toys", the blog is the product. Restraint as commitment.
- **Visual hierarchy**: H1 dominates the only viewport; CTA + playful button secondary; footer is a thin gray strip. No section to scroll into on `/` — body height fits one screen.
- **Layout composition**: Center-stack hero (logo top-left, nav top-right, name + tagline + 2 actions centered, footer pinned bottom).
- **Typography** (family feel, scale, weight):
  - Body: **`ms_sans_serif`** (the actual classic MS Sans Serif bitmap font, loaded via @font-face) — bold variant loaded too.
  - H1: **Arial bold 40px** `rgb(10,10,10)` (system Arial, not Inter/Geist).
  - Body color `rgb(0,0,0)`.
- **Color palette**: body bg `rgb(207, 207, 207)` (classic Win95 dialog gray); H1 `rgb(10,10,10)` near-black; 3 social icons in footer. Single accent (none observed) — the *palette* IS the accent.
- **Spacing**: balanced / airy. Hero has generous whitespace; no density anywhere.
- **Hero section**: H1 = "Hi, I'm Artur Bień.\nI build quality UIs for fun." Two CTAs: "Read my blog" → `/blog`, "Release balloons" → triggers SVG balloons. Single screen, no scroll.
- **Navigation**: top-left wordmark "expensive.toys" + top-right 2-link nav (`Blog`, `Toys`). Not sticky.
- **Section ordering** (home): `[logo+nav] → [H1 + tagline + "Read my blog" + "Release balloons"] → [footer: brand + Twitter/GitHub/LinkedIn/RSS]`.
- **Scroll experience**: N/A — single-screen homepage; nothing below the fold.
- **Animations & motion**: 0 CSS keyframes in stylesheets. "Release balloons" click injects SVG balloon elements (1→14 SVGs after click) — animated via inline JS/CSS transitions. Subtle, purposeful, single interactive moment.
- **Hover interactions**: Standard link hovers; "Release balloons" button hover (subtle).
- **Background effects**: Solid Win95 gray, no gradient/grain/particles. Pure flat.
- **3D elements**: no.
- **Responsiveness perception**: Not explicitly tested on mobile, but body font + flat layout suggests graceful degradation.
- **Performance perception**: Very fast — 45 KB HTML, 0 canvas, 0 iframes, only ms_sans_serif font (small). Total resources << 20.
- **Emotional feeling**: **Playful + retro + sincere**. The Windows 95 aesthetic reads as deliberate (the dev writes about CSS craft), not kitsch.
- **Originality**: **5/5** — Only portfolio in the 25-portfolio corpus to commit fully to a Windows 95 aesthetic with the actual MS Sans Serif bitmap font; the blog articles each contain an interactive "Generator" panel.
- **What works**:
  - Hero-only homepage with content subpages — confirms B1/B2/B3/B4 pattern; the home is brand statement, depth lives at `/blog/<slug>`.
  - Each blog article is a real case study: H1 title, date, ~5,000-char body, 5 code blocks, H2 sections "How to use / How it works / Generator", and an **embedded interactive Generator** (e.g., Ambilight Effect Generator lets readers tweak SVG filter parameters live). This is the deepest code-as-interface pattern observed so far — *deeper than EMF's typography panel* — because the article IS the live exhibit.
  - "Release balloons" is the cheapest "site is alive" interaction in the corpus — single button, no dependencies.
- **What does NOT work**:
  - Tagline "I build quality UIs for fun" — the word "quality" is duplicated 3× in nested spans in the DOM (likely an animation stutter/reveal effect) but reads as a bug if you turn off CSS.
  - 0 H2 / 0 H3 on the homepage — semantic hierarchy is H1-only; fine for hero-only but breaks if more content were added.
  - "Arial" for H1 is the weakest typography choice in the batch (system default); body's MS Sans Serif carries the brand alone.
- **Notable patterns to consider**:
  - **Domain-native metaphor as content architecture (extension)**: "expensive.toys" reframes the portfolio as a toy box — `/blog` for serious CSS craft, `/toys` for experimental UI components. Confirms Triet/Whilmar/Zyon pattern.
  - **Code-as-interface deeper than EMF**: Each article embeds an interactive generator. The reader manipulates real parameters of the technique being explained. *Resolve open tension "code-as-interface deeper"* — for content-driven portfolios, embed the live demo inside the article.
  - **Windows 95 / OS-native aesthetic** as commitment — first in corpus, expands the "domain-native metaphor" pattern from "shell/architecture/Steam" to "OS desktop chrome".
  - Article page structure: H1 title + date + body + H2s + code blocks + interactive generator. No breadcrumb, no ToC, no related articles — Ghulam (B3) case study template remains the most complete.

---

## 22. Luca Félix — https://luca-felix.com

- **Reachable**: yes (Vercel/Next.js, HTTP 200, i18n en/de/pt with `set-cookie: NEXT_LOCALE=en`)
- **First impression**: A warm, light, almost-white editorial portfolio with OKLCH color tokens throughout, a 20px H1 used as a name wordmark in the header, multi-page hybrid (`/`, `/about`, `/contact`, `/projects/<slug>`), proper SEO meta, and a deep case study template. Reads as a senior product engineer's portfolio.
- **Visual hierarchy**: Header (name + role + GitHub) → H2 "Welcome to my portfolio" → intro paragraph with semantic emphasis → H2 "Projects" → 4 project cards. Compact (body height 1,083 px).
- **Layout composition**: Single column, max-width container, header sticky-ish (only 1 image — small rounded avatar at 40 px). Generous line-height; OKLCH neutrals.
- **Typography**:
  - Body: `fontSans` (custom — likely a self-hosted Inter-like sans).
  - H1 (header wordmark "Luca Félix"): **20px / 700 / `oklch(0.13 0.028 261.692)`** (near-navy). Letter-spacing `-0.5px`, line-height `32px`.
  - H2s ("Welcome to my portfolio", "Projects") and H3s (project names: odo, Power Flow Card Plus, survy, wattguard) all rendered in `fontSans`.
- **Color palette**: body bg `oklch(0.99 0.0013 106.42)` (warm-tinted near-white, hue 106° ≈ yellow-green — slight warmth, not pure white); body color `oklch(0.24 0.0076 95.37)` (warm dark gray); H1 navy `oklch(0.13 0.028 261.692)`. **No pure black/white.** Reinforces B2/B3 tinted-neutral rule.
- **Spacing**: balanced / slightly airy. Body 16 px, comfortable margins.
- **Hero section**: H2 "Welcome to my portfolio" + multi-language greeting "Hello, hola, bonjour, olá & hallo!" + sentence "I'm a frontend engineer who thinks like a designer. I care about how things work just as much as how they look." (with `<strong>` on "how things work" and "how they look"). CTA: implicit scroll to Projects.
- **Navigation**: Top header — name + role + small avatar + GitHub link. Bottom anchor nav (3 routes: `/`, `/about`, `/contact`) renders with empty link text (icon-only nav, hidden by media query). "Skip to content" link present.
- **Section ordering** (home): `[header: avatar | name+role | github] → [H2 "Welcome to my portfolio"] → [greeting + intro paragraph] → [currently @ epilot context line] → [H2 "Projects"] → [4 project cards: name + 1-sentence description] → [footer not present at top — minimal]`.
- **Scroll experience**: Smooth (native); 3 keyframes (`enter`, `exit`, `spinner`) suggest **Next.js route transitions** with an `enter`/`exit` motion and a loading spinner — designed route transitions (extends EMF B4 / Ajvad B3 view-transition lineage).
- **Animations & motion**: 3 keyframes only — `enter`, `exit`, `spinner`. All functional, none decorative. Restraint.
- **Hover interactions**: Project cards link to `/projects/<slug>`; subtle hover states.
- **Background effects**: None — flat warm near-white.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind utility classes (flex-wrap, gap-x-4, sm:/md: breakpoints) suggest responsive care. "Skip to content" link is an a11y signal.
- **Performance perception**: Light. 1 image (avatar), 5 SVGs (icons), 0 canvas/iframe. i18n adds a redirect cost but pre-rendered (`x-nextjs-prerender: 1`).
- **Emotional feeling**: **Calm + professional + warm**. Not loud. Reads as "I think like a designer" via the design itself.
- **Originality**: **4/5** — Loses 1 point because the visual surface is conservative (warm light OKLCH + sans), but the *content architecture* and *case study depth* are top-tier.
- **What works**:
  - **Case study template depth is the best in the corpus**: `/projects/odo` includes H1 project name, subhead with context ("Bachelor project at the University of Design Schwäbisch Gmünd"), tech pills (Survy, Figma, Swift, TypeScript), 7 H2 sections (Concept / Route Profiles / Map design / Interface / Details screen / Preview screen / Impact), H3 subsections (Navbar, Header under Interface), **embedded "Talk about odo" contact form on the project page itself**, team + advisor credits at the bottom, "View Documentation" external link, and tags ("Cycling • Routes • Design"). Resolves the open tension "premium case study = ?".
  - **Third-person About page** — "Luca Félix is a digital product designer and developer born in Lisbon, Portugal 🇵🇹. He recently completed…" — long narrative paragraphs with specific employer names (Robert Bosch GmbH, epilot), specific stats ("70+ full time software engineers"), specific degree ("Hochschule für Gestaltung in Schwäbisch Gmünd"), and personality ("making electronics release their magic smoke"). New pattern — first third-person About in the corpus. Reads more like an artist bio than a CV.
  - **Contact page interaction design**: H1 "Let's work together." + H2 "Send me a message" + "Replies in 1-2 days" expectation-setting + honeypot "Don't fill this out if you're human" (input name="website") + "Slide to send" anti-spam slider interaction + "Based in Lisbon, Portugal · Download CV (PDF)" footer. Each detail adds information.
- **What does NOT work**:
  - `/about` page has 0 H1 (only H2 "About") — semantic HTML anti-pattern. Same on `/` (H1 is just "Luca Félix" wordmark in the header at 20 px, not a hero H1).
  - Nav link text appears empty in DOM (icon-only) — could be hidden by media query but visible to screen readers without `aria-label`.
  - Only 1 social link visible on home (GitHub); LinkedIn + email surface only on `/contact`. Reduces discoverability.
- **Notable patterns to consider**:
  - **OKLCH color tokens throughout** — extends Ajvad (B3) pattern. Body bg `oklch(0.99 0.0013 106.42)` proves a near-white with hue 106° is warmer than `oklch(0.99 0 0)` (pure white). A near-white with chroma 0.0013 reads as warm, not gray.
  - **Multi-page case study template** — best-in-corpus depth. Copy the template structure: H1 name → context subhead → tech pills → multiple H2 sections with H3 subsections → embedded project-specific contact form → credits → tags → documentation link.
  - **"Slide to send" anti-spam** — first slider-style form-submit interaction in corpus. Replaces invisible captcha with a delightful interaction.
  - **"Replies in 1-2 days" microcopy** — sets expectations, signals professionalism.
  - **Third-person About narrative** — alternative to the first-person voice used by every other portfolio. Works because the tone is specific and self-aware.
  - **Multi-language i18n (en/de/pt)** — extends EMF (B4) EN/ES pattern. Three languages, locale stored in `NEXT_LOCALE` cookie.
  - **"Skip to content" link** — first explicit accessibility affordance in the corpus.

---

## 23. Vinay Katikireddy — https://vinaykatikireddy.is-a.dev

- **Reachable**: **NO — HTTP 404 "Site not found · GitHub Pages"** at both root and `/index.html`. Subdomain is registered in the is-a.dev registry (CNAME → `vinaykatikireddy.github.io`) but the target GitHub Pages site does not exist; `https://vinaykatikireddy.github.io` also returns 404.
- **First impression**: Complete deployment failure. The portfolio is referenced (GitHub bio links to `vinaykatikireddy.is-a.dev`) but no site is deployed. The is-a.dev registration file (`/domains/vinaykatikireddy.json`) and GitHub bio both still point at the broken URL.
- **Visual hierarchy**: N/A — page is GitHub's default 404 template.
- **Layout composition**: N/A.
- **Typography**: GitHub Pages 404 page — Helvetica Neue / Arial, 60px H1 ("Site not found").
- **Color palette**: GitHub 404 page — `#f1f1f1` background, `#4183c4` links.
- **Spacing**: N/A.
- **Hero section**: N/A.
- **Navigation**: N/A.
- **Section ordering**: N/A.
- **Scroll experience**: N/A.
- **Animations & motion**: N/A.
- **Hover interactions**: N/A.
- **Background effects**: N/A.
- **3D elements**: N/A.
- **Responsiveness perception**: N/A.
- **Performance perception**: N/A.
- **Emotional feeling**: **Disappointing** — the developer's GitHub profile README claims a full bio ("Computer Science undergraduate focused on cybersecurity, AI Security and Linux-based development") but the linked portfolio is broken. Reads as abandoned or never deployed.
- **Originality**: N/A.
- **What works**: Nothing — the portfolio does not load.
- **What does NOT work**:
  - **Hard deployment failure**: 404 from GitHub Pages. Worst-possible portfolio outcome.
  - **Stale link**: is-a.dev registration + GitHub bio still reference the broken URL — anti-pattern: never update references after the site goes down (or never deploy at all).
  - **No fallback / no "site under construction" / no redirect to LinkedIn** — just GitHub's default 404 template.
- **Notable patterns to consider**:
  - **Anti-pattern codified**: "Deployed portfolio that doesn't deploy." Distinct from B1's "template default title" or B4's "broken GitHub API integration" — this is the *entire site* being unreachable. Adds to the corpus's anti-pattern catalogue: broken GitHub widgets (B1), broken resume.pdf (B2), empty "Coming Soon" subpages (B3), broken GitHub API integration (B4), and now *broken entire site* (B5).
  - This is also a reminder that the is-a.dev subdomain registry does not verify the CNAME target is live — a free subdomain pointing at nothing is worse than no subdomain at all.

---

## 24. John Clayton Blanc — https://www.johnclaytonblanc.com

- **Reachable**: yes (Vercel, HTTP 200, but **HTML shell is only 563 bytes** — Vite/React SPA, all content client-rendered).
- **First impression**: A dark-slate Tailwind portfolio (`#0f172a` body bg) with letter-by-letter framer-motion hero animation, period-punctuated section titles ("About.", "Projects.", "Blog."), a sticky pill-shaped frosted-glass mobile-style nav that drops down on scroll, and a contact form. Visually competent, semantically broken.
- **Visual hierarchy**: Hero (animated letter-by-letter "Hi, I'm Clayton. I'm a Software Engineer") + subhead + "GET IN TOUCH" CTA → 5 sections (Home/About/Projects/Blog/Contact) → footer repeats hero.
- **Layout composition**: Single-page scroll. Hero full-bleed dark slate with `bg-grid-small-white/[0.2]` grid overlay. Sections below are max-w-4xl centered. Sticky pill nav appears on scroll.
- **Typography**:
  - Body: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"` — **system font stack only** (no custom font loaded). Anti-pattern (B1 "OS-default fonts").
  - Hero "Hi, I'm Clayton.": div with `text-4xl font-extrabold` (mobile) / `md:text-5xl` (desktop) — large but a `<div>`, not an `<h1>`.
  - Second hero line "I'm a Software Engineer": `<h4>` with `text-2xl md:text-3xl font-bold` — wrong heading level for a hero subtitle.
- **Color palette**: body bg `rgb(15, 23, 42)` (Tailwind `--primary: #0f172a` slate-900); `--secondary: #6366f1` (indigo-500) for accent dots; `--primary-text: #f1f5f9` (slate-100) for text; `--secondary-text: #808ea3` for muted text; `--third: #21293b` for cards. Tailwind slate/indigo system.
- **Spacing**: balanced. Section padding via `mt-5 max-w-4xl mx-auto md:px-8`.
- **Hero section**: Animated letter-by-letter reveal of "Hi, I'm Clayton." (16 spans) and "I'm a Software Engineer" (15 spans) — 56 letter spans total in hero. Framer-motion driven (each span has inline `style="opacity: 1; transform: none;"` after animation completes). Subhead: "I build backend systems, cloud infrastructure, and full-stack applications, with a focus on reliability, performance, and clean architecture." CTA: "GET IN TOUCH" button.
- **Navigation**: Sticky pill-shaped frosted-glass nav (`bg-white shadow-... z-[5000] pr-2 pl-8 py-2 rounded-full`) that drops down on scroll. Mobile menu button (hamburger). Nav links: Home, About, Projects, Blog, Contact. Logo "JC" + colored dot.
- **Section ordering**: `[sticky header nav] → [hero with grid bg + animated letter H1] → [About: "Skills & Journey" + bio + Programming & Tools pills + Certificates] → [Projects: "Most recent works" + 6 project cards (SkyCast, ORA-API, ChatGenius, History Tracer, InstaWall, PenX)] → [Blog: "Tech Trends & Reflections" + blog cards with "READ MORE" links] → [Contact: "Connect with Me" + Email/LinkedIn/Medium + form] → [footer: repeats hero text]`.
- **Scroll experience**: Smooth. Framer-motion triggers entrance animations on scroll (142 elements with `transform` inline styles, 77 with `opacity` — every section has motion). Section reveals are fade-in + transform.
- **Animations & motion**: 0 CSS keyframes (all motion via framer-motion inline styles/transitions). Hero letter stagger reveal is the signature move. Section titles fade-in on scroll. Project cards scale on hover (`hover:-translate-x-1`).
- **Hover interactions**: Nav links (`hover:transform-li`), project cards (`hover:-translate-x-1`), buttons with cubic-bezier transitions.
- **Background effects**: `bg-grid-small-white/[0.2]` — subtle white grid overlay on slate-900 hero bg. No particles, no canvas, no shader.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive classes throughout (`sm:`, `md:`, `max-[1024px]:`, `max-[1280px]:`, `max-[640px]:`). Mobile menu button present. Likely responsive.
- **Performance perception**: Vite SPA — 563-byte HTML shell + JS bundle. 12 images, 20 SVGs (icons). 0 canvas, 0 iframes, 0 audio/video. Framer-motion adds JS weight but page renders quickly. No console errors observed.
- **Emotional feeling**: **Competent + slightly generic**. The Tailwind slate/indigo system is the 2024–2026 default; nothing in the visual surface distinguishes it from a thousand other Vercel portfolio templates.
- **Originality**: **2/5** — Loses points for: system font stack, Tailwind default palette, generic dark slate + indigo. Gains 1 point for: letter-by-letter hero animation (signature move), pill-shaped sticky nav, period-punctuated section titles (Cade B3 pattern), OG tags set properly.
- **What works**:
  - **Letter-by-letter hero stagger reveal** — 56 spans, each animating opacity/transform sequentially. First signature hero animation in the corpus (extends the open tension "hero motion that orients" — *decorative* hero motion finally appears, though still not orienting).
  - **Sticky pill-shaped frosted-glass nav** — `bg-white shadow-[...] z-[5000] rounded-full` — most refined sticky header in the corpus after EMF's typography panel. Drops down on scroll, hides at top.
  - **Period-punctuated section titles** — "About.", "Projects.", "Blog." — confirms Cade (B3) pattern.
  - **Proper OG tags** — `og:title`, `og:description`, `og:image` (GitHub avatar), `og:url`, `og:type=website`, `og:site_name`. First portfolio in the corpus with complete OG card metadata.
  - **Skills pills**: Java, NodeJS, Python, PostgreSQL, MySQL, Redis, AWS, Docker, Kubernetes — clean text pills, not 64 PNG icons (anti-pattern B3 Gunjan avoided).
  - **Certificates section**: CompTIA Sec+, AWS Cloud Practitioner, Google IT Support — credential signaling done cleanly (no Zyon-style gamification needed).
- **What does NOT work**:
  - **0 H1, 0 H2 on the entire page** — semantic HTML anti-pattern, worse than Gunjan B3's 4 H1s and Barthélémy B4's 0 headings. Only 3 H3s ("Email", "LinkedIn", "Medium") used for contact labels. Section titles ("About.", "Projects.", "Blog.", "Contact.") are styled `<div>`s, not headings. Screen readers cannot navigate the page.
  - **System font stack only** — body font is `ui-sans-serif, system-ui, sans-serif` with no custom font loaded. Anti-pattern B1 "OS-default fonts".
  - **Hero H1 is a `<div>`, hero subtitle is `<h4>`** — wrong semantic levels. The hero subtitle being an `<h4>` while there are no H1/H2/H3 above it on the page breaks hierarchy.
  - **"Blog" section's cards show only "READ MORE" in `innerText`** — blog post titles are likely rendered as background images or aria-hidden spans. Either way, titles are not semantically present.
  - **Footer duplicates the hero** — same letter-by-letter "Hi, I'm Clayton. I'm a Software Engineer" repeats in the footer. Wastes 56 spans of DOM.
  - **Tailwind slate-900 + indigo-500 default palette** — the visual surface is indistinguishable from shadcn/ui defaults.
- **Notable patterns to consider**:
  - **Letter-by-letter hero animation** — first *signature* hero motion in the corpus. Steal the principle: every letter of the hero phrase animates in sequence on load. Does NOT orient the user (still a decorative entrance), but it's the closest to "hero motion that orients" we've seen.
  - **Sticky pill-shaped frosted-glass nav** — `bg-white shadow-[...] rounded-full z-[5000]` — refines the B2/B3 "frosted-glass sticky header" pattern into a smaller, pill-shaped, mobile-style nav. Better than full-width frosted header.
  - **Period-punctuated section titles confirmed** — third appearance (Cade B3, here B5).
  - **Complete OG card metadata** — first in corpus; every premium portfolio should set all 6 OG tags.

---

## 25. Caiovisuals — https://www.caiovisuals.com

- **Reachable**: yes (Vercel/Next.js, HTTP 200, 105 KB HTML — pre-rendered)
- **First impression**: A dark, dense, image-heavy Brazilian-Portuguese design portfolio with 27 cases, category filters, a Photoshop-style "untitled - unsaved" header bar, 3-font system (Lexend + Gloock + Azeret Mono), and a "Fim!" (The End!) footer with last-modified date. Reads as a working designer's portfolio, not a developer's.
- **Visual hierarchy**: Sticky header (logo + nav + social) → hero (name + role + tagline) → Cases section (filter buttons + 27 project cards in a grid) → Bio section (photo + narrative + Outros Interesses + Softwares e Tecnologias) → Propostas (services) → footer.
- **Layout composition**: Center-stack hero, then full-width cases grid (3-up on desktop), then 2-column bio, then 1-column proposals list. Body height 4,848 px — long scroll.
- **Typography**:
  - Body: **Lexend** (multiple weights 100–900, only 400/500/600/700/800/900 loaded).
  - Secondary: **Gloock** (weight 400 only, loaded) — likely for "Fim!" or display.
  - Tertiary: **Azeret Mono** (weight 900 only, loaded) — likely for monospace accents.
  - H1 (6 total — multiple-H1 anti-pattern): "caiothevisual" (22px/700 wordmark), hero tagline "Eu crio interfaces, produtos, marcas e histórias com design." (75px/600), "OLÁ,TUDOBEM?" (40px/750), "OUTROSINTERESSES" (30px/700), "SOFTWARESETECNOLOGIAS" (30px/700), "Fim!" (30px/700).
- **Color palette**: CSS variables — `--color-background: #151515` (near-black, slightly tinted toward warm), `--color-foreground: #383838`, `--color-middleground: #202020`, `--color-text: white`. **Tinted-dark, not pure black.** Reinforces B3/B4 tinted-dark rule. No accent color observed beyond white-on-dark.
- **Spacing**: dense. Cards packed in a 3-up grid with `p-[30px]` section padding. Lots of content per scroll.
- **Hero section**: Logo "caiothevisual" + role "designer | desenvolvedor front-end | ux/ui" + tagline "Eu crio interfaces, produtos, marcas e histórias com design." (H1, 75px). Plus a Photoshop-style title bar showing "sem-título... não salvo" ("untitled... not saved") — a design-software metaphor.
- **Navigation**: Sticky header (`position: fixed; top: 0; bg-[var(--color-background)]`) with logo, 3 anchor links (Cases / Bio / Propostas), and 4 social icons (Instagram, Behance, GitHub, LinkedIn).
- **Section ordering**: `[sticky header] → [hero with title-bar metaphor] → [section#works: "Cases" + "MEUS TRABALHOS" + filter buttons (TUDO / WEB / SOFTWARE / IDENTIDADE VISUAL / DIREÇÃO CRIATIVA) + "27" count + 27 project cards] → [section#info: "Bio" + "QUEM SOU EU?" + photo + narrative + "OUTROSINTERESSES" (7 interests) + "SOFTWARESETECNOLOGIAS" (9 tools)] → [section#proposal: "Propostas" + "MEUS SERVIÇOS" + 4 services] → [footer: "Fim!" + "Última alteração em 11 de Fevereiro de 2026"]`.
- **Scroll experience**: Smooth. 3 keyframes (`fadeIn`, `fadeInUp`, `pulse`) drive scroll-triggered fade-ins. Cards stagger in.
- **Animations & motion**: 3 CSS keyframes — `fadeIn`, `fadeInUp`, `pulse`. All functional (entrance + status). Restraint. No canvas/WebGL.
- **Hover interactions**: Project cards have `cursor-pointer bg-[var(--color-middleground)] rounded-lg shadow-theme hover:...` (hover state inspected but specific transform not captured).
- **Background effects**: Solid `#151515` background; cards on `#202020` middleground. Layered dark-on-dark. No gradient/grain/particles.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive classes (`max-[1024px]:`, `max-[1280px]:`, `max-[640px]:`). Likely responsive. Mobile menu button present.
- **Performance perception**: 95 resources, 27 PNG thumbnails, 46 next/image requests, 14 JS chunks, 3 Google Fonts requests, Google Analytics + Meta Pixel. Heavier than the rest of the batch — but justified by 27 image-heavy case cards.
- **Emotional feeling**: **Serious + dense + designerly**. Portuguese language adds cultural specificity. "Fim!" (The End!) at the bottom is warm.
- **Originality**: **3/5** — Loses points for 6 H1s and the multiple-H1 anti-pattern. Gains points for: Photoshop-style "untitled - not saved" title bar metaphor, "Fim!" footer, "Última alteração em" last-modified date, 3-font system, 27-case filterable grid.
- **What works**:
  - **Photoshop / design-software title-bar metaphor** — "sem-título... não salvo" ("untitled - not saved") as a hero header element. First design-software metaphor in the corpus (extends Triet/Whilmar/Zyon/Artur pattern — domain-native metaphor now includes design software chrome).
  - **"Fim!" (The End!) footer** — single-word period-punctuated close. Warm, definitive.
  - **"Última alteração em 11 de Fevereiro de 2026"** — last-modified date in footer = "site is alive" signal (extends Ajvad B3 live date stamp, EMF B4 live local time). Cheaper than a live-updating clock — just a static date the dev updates with each deploy.
  - **3-font system (Lexend + Gloock + Azeret Mono)** — first 3-font system in corpus where each font has a distinct role (body / display / mono). Extends B1/B2/B3 two-font pattern.
  - **Filterable project grid with category count** — "27" displayed next to filter buttons. First portfolio in corpus to show total project count.
  - **4-category project taxonomy** — TUDO (All) / WEB-SOFTWARE / IDENTIDADE VISUAL / DIREÇÃO CRIATIVA — designer's category system, not developer's.
  - **"Outros Interesses" (other interests)** — 7 interests listed (Música, Design de Jogos, Carros, Ilustração, Cinema, Produções de Vídeos, Cibersegurança). Extends Zyon B4 "Currently playing" pattern.
- **What does NOT work**:
  - **6 H1s on one page** — multiple-H1 anti-pattern, second-worst in corpus after Fikri B4's 9 H1s. "OUTROSINTERESSES" and "SOFTWARESETECNOLOGIAS" being H1s (just because they're 30px bold) is the clearest misuse.
  - **Concatenated text "OUTROSINTERESSES" / "SOFTWARESETECNOLOGIAS" / "OLÁ,TUDOBEM?"** — words smushed together without spaces, likely a styling artifact where spaces were removed for visual effect. Reads as a typo.
  - **52 images** — heaviest image load in batch. Not necessarily wrong (designer portfolio), but no `loading="lazy"` was observed in the inspected sample.
  - **Meta Pixel + Google Analytics tracking** — Facebook pixel (`signals/config/1881207946002901`) + gtag. Adds third-party requests; not an anti-pattern per se but worth flagging for the premium-portfolio brief.
  - **0 H3 subsections under H2 "Bio"** — bio narrative is in a single H2-as-paragraph. Hierarchy leak.
- **Notable patterns to consider**:
  - **Design-software title-bar metaphor** — "untitled - not saved" header element. Steal the principle: a single UI chrome element from the dev/designer's working tool, used as a hero accent.
  - **Static last-modified date in footer** — `Última alteração em 11 de Fevereiro de 2026`. Cheaper than a live clock; conveys the same "site is alive" signal with no JS.
  - **3-font system with distinct roles** — Lexend (body/workhorse) + Gloock (display) + Azeret Mono (accent). Refines the B1 two-font developer-coded pattern.
  - **Single-word period-punctuated footer** — "Fim!" (The End!) — extends Cade B3 period-punctuation to the footer close.
  - **Filterable project grid + total count** — most useful project-listing UX in the corpus for a designer with many cases.
  - **Portuguese-language portfolio** — first non-English portfolio in the corpus (extends EMF B4 i18n pattern; Caiovisuals is monolingual PT-BR but the language itself is a cultural signal).

---

## Batch 5 Synthesis

### Patterns that REINFORCE round 1 findings

1. **Commitment-over-kitchen-sink** — Artur Bień commits to Windows 95 + MS Sans Serif + zero CSS keyframes + interactive SVG balloons; Luca Félix commits to warm OKLCH + 3 functional keyframes + deep case studies; Caiovisuals commits to dark + Lexend + 27-case filterable grid + design-software metaphor. All three feel senior because each commits to a register. John Clayton is the *exception that proves the rule* — Tailwind defaults + system font + framer-motion-everywhere = generic, not senior.
2. **Tinted-neutral background, never pure** — Luca `oklch(0.99 0.0013 106.42)` (warm near-white, chroma 0.0013); John Clayton `#0f172a` (slate-900 tinted-dark); Caiovisuals `#151515` (warm-tinted near-black); Artur `rgb(207,207,207)` (Win95 gray). Zero pure white, zero pure black in batch 5. The B4 escape-hatch "pure white with ultralight display type" was NOT used by any portfolio in this batch.
3. **Hero-only home + content subpages** — Artur Bień is the cleanest example yet: home is single-screen (1 H1, 2 CTAs, no scroll); `/blog` and `/toys` hold all depth. Extends Jeremiah (B1) / Nico (B2) / Ajvad (B3) / EMF (B4).
4. **Multi-page hybrid with view transitions / route animations** — Luca Félix's `enter`/`exit`/`spinner` keyframes confirm Next.js route-transition motion (extends EMF B4 Vue view transitions, Ajvad B3 Astro view transitions). The pattern is now language-agnostic.
5. **Footer as design surface / "site is alive" signal** — Caiovisuals "Última alteração em 11 de Fevereiro de 2026" (static last-modified date) is the cheapest implementation yet — extends Ajvad B3 live date stamp and EMF B4 live local time. Artur's "Release balloons" button is the cheapest "site is alive" *interaction*.
6. **Numbered / counted projects** — Caiovisuals "27" displayed next to filter buttons. Extends B2/B3 numbered projects pattern; the count itself is the signal.
7. **Domain-native conceptual metaphor** — Artur (Windows 95 desktop), Caiovisuals (Photoshop "untitled - not saved" title bar), extend the pattern to *OS / design software chrome* as a metaphor source.
8. **Period-punctuated section titles** — John Clayton "About.", "Projects.", "Blog."; Caiovisuals "Fim!" — confirms Cade (B3) pattern across 3 portfolios now.
9. **Two-font developer-coded feel** — Caiovisuals (3-font system: Lexend + Gloock + Azeret Mono) extends the B1 sans+mono pattern to a 3-font system with distinct roles (body / display / accent).
10. **Multiple-H1 anti-pattern** — Caiovisuals (6 H1s) confirms the anti-pattern recurs. Vinay's 404 makes his case moot.
11. **System-default font anti-pattern** — John Clayton uses `ui-sans-serif, system-ui, sans-serif` with no custom font loaded. Confirms B1 anti-pattern.

### Patterns that CONTRADICT or REFINE earlier findings

1. **Hero motion — finally a signature move (but still not orienting).** John Clayton's letter-by-letter stagger reveal of the hero phrase (56 spans animating sequentially) is the first *signature* hero animation in the corpus. Refines the open tension "hero motion that orients": it's still decorative (entrance only), not orienting (doesn't tell the user where they are or what to do next). *Status: signature hero motion APPEARS; orienting hero motion still unsolved.*
2. **About section — THIRD PERSON narrative appears.** Luca Félix's `/about` is written entirely in third person ("Luca Félix is a digital product designer and developer born in Lisbon, Portugal... He recently completed... He is passionate about..."). Refines the B1–B4 first-person default. Third-person reads more like an artist bio; works when tone is specific and self-aware (Luca's "making electronics release their magic smoke" is the proof).
3. **Premium case study template — DEFINITIVELY ANSWERED.** Luca Félix's `/projects/odo` is the most complete case study in the corpus: H1 project name → context subhead (degree program / institution) → tech pills → multiple H2 sections (Concept / Route Profiles / Map design / Interface / Details screen / Preview screen / Impact) → H3 subsections under H2 (Navbar / Header under Interface) → **embedded project-specific contact form ("Talk about odo")** → team + advisor credits → external "View Documentation" link → tag list. Combined with Ghulam (B3) template (breadcrumb + date + min-read + ToC + related), the corpus now has a complete premium case study spec.
4. **Code-as-interface — DEEPER than EMF.** Artur Bień's blog articles each embed an interactive Generator (e.g., "Ambilight Effect Generator") where readers tweak SVG filter parameters and see live results. This is deeper than EMF's typography panel (B4) because the article IS the live exhibit — the reader manipulates real parameters of the technique being explained. Resolves the open tension "code-as-interface deeper" for *content-driven* portfolios: embed the live demo inside the article, not as a separate panel.
5. **Light vs dark default — REFINED.** Batch 5 has 1 light (Luca warm OKLCH) + 3 dark (John Clayton slate-900, Caiovisuals #151515, Artur Win95-gray-as-light-equivalent). Vinay N/A. The darks are all *tinted* (slate / warm-near-black / Win95-gray), never pure black. The light is *warm-tinted near-white* (OKLCH hue 106°, chroma 0.0013), never pure white. Confirms B3/B4 rule.
6. **Custom cursor — STILL ABSENT (false positives everywhere).** John Clayton has 10 `[class*=cursor]` matches — all `cursor-pointer` Tailwind utility. Caiovisuals has 40 matches — all `cursor-pointer` Tailwind utility. No real custom cursor in batch 5. Status after 25 portfolios: **custom cursor that adds UX remains unsolved.**
7. **Scroll-driven section transitions — STILL ABSENT.** John Clayton uses framer-motion for fade-in + transform reveals on scroll (142 transform-style elements, 77 opacity-style elements). These are scroll-triggered *fade-ins*, not scroll-driven *section transitions*. Caiovisuals uses `fadeIn`/`fadeInUp` keyframes — also fade-ins. Status: still unsolved.
8. **Sound — STILL ABSENT.** Zero `<audio>` elements in batch 5. Status: still unsolved after 25 portfolios.
9. **Real 3D scene — STILL ABSENT.** Zero `<canvas>`, zero Three.js, zero Spline, zero `<model-viewer>` in batch 5. Whilmar B3's WebGL2 particle field remains the lone 3D-adjacent element in the corpus. Status: still unsolved.
10. **Pure white escape hatch — UNUSED.** EMF (B4) demonstrated pure white with ultralight display type. Batch 5 has zero pure-white portfolios. The escape hatch exists but no portfolio in batches 1–5 (other than EMF) takes it.

### NEW patterns unique to batch 5

1. **Windows 95 / OS-native aesthetic** (Artur Bień) — first corpus appearance of the actual MS Sans Serif bitmap font on Win95 dialog gray. Expands "domain-native metaphor" from "shell / architecture / Steam" (B1–B4) to "OS desktop chrome". The commitment is total: body in MS Sans Serif, H1 in Arial bold, bg in `rgb(207,207,207)`.
2. **Embedded interactive Generator inside article** (Artur Bień) — first code-as-interface pattern that lives *inside* a piece of content (the article) rather than as a separate panel (EMF B4). The reader manipulates real parameters of the technique being explained.
3. **"Release balloons" interactive button on hero** (Artur Bień) — cheapest "site is alive" interaction in the corpus (1 button, 0 dependencies, creates SVG balloons on click). Alternative to live date/time stamp.
4. **Third-person About narrative** (Luca Félix) — first non-first-person About in the corpus. Reads like an artist bio. Works when tone is specific (real employer names, real stats, real degree program).
5. **"Slide to send" anti-spam form interaction** (Luca Félix) — first slider-style form-submit interaction. Replaces invisible captcha with a delightful interaction.
6. **"Replies in 1-2 days" expectation-setting microcopy** (Luca Félix) — first explicit reply-time commitment in the corpus.
7. **Honeypot field with friendly microcopy** (Luca Félix) — input name="website" with label "Don't fill this out if you're human". First friendly honeypot in the corpus.
8. **Embedded project-specific contact form on case study** (Luca Félix) — "Talk about odo" form embedded at the bottom of the project page. Reduces friction from "read case study → go to contact → fill form" to "read case study → fill form right here".
9. **Sticky pill-shaped frosted-glass nav** (John Clayton) — `bg-white shadow-[...] z-[5000] rounded-full` — refines the B2/B3 frosted-glass sticky header into a smaller, pill-shaped, mobile-style nav that drops down on scroll. Better than full-width frosted header.
10. **Letter-by-letter stagger hero animation** (John Clayton) — 56 spans, each animating opacity/transform sequentially on load. First signature hero animation in the corpus. Steal the principle: hero phrase animates letter-by-letter, not word-by-word or as a single block.
11. **Complete OG card metadata** (John Clayton) — `og:title` + `og:description` + `og:image` + `og:url` + `og:type` + `og:site_name`. First portfolio in corpus with all 6 OG tags. Premium-portfolio table-stakes.
12. **Photoshop / design-software title-bar metaphor** (Caiovisuals) — "sem-título... não salvo" ("untitled - not saved") as hero header element. First design-software chrome metaphor in corpus.
13. **Static last-modified date in footer** (Caiovisuals) — "Última alteração em 11 de Fevereiro de 2026". Cheaper than a live clock; same "site is alive" signal with no JS.
14. **3-font system with distinct roles** (Caiovisuals) — Lexend (body) + Gloock (display) + Azeret Mono (accent). Refines B1 two-font developer-coded pattern to 3 fonts when the third has a distinct purpose.
15. **Filterable project grid + total count** (Caiovisuals) — 4-category filter (TUDO / WEB-SOFTWARE / IDENTIDADE VISUAL / DIREÇÃO CRIATIVA) + "27" total displayed. Best project-listing UX in corpus for high-volume portfolios.
16. **Single-word period-punctuated footer close** (Caiovisuals) — "Fim!" (The End!). Extends Cade B3 period-punctuation to the footer.
17. **Non-English portfolio** (Caiovisuals, monolingual PT-BR) — first non-English portfolio in corpus (extends EMF B4 i18n; Caiovisuals is monolingual but the language itself is a cultural signal).
18. **Anti-pattern: deployed portfolio that doesn't deploy** (Vinay Katikireddy) — is-a.dev subdomain configured, CNAME points at `vinaykatikireddy.github.io`, but GitHub Pages site doesn't exist. Complete deployment failure. New anti-pattern category.

### Updated answers to the open tensions

| Tension | Status after batch 5 |
|---|---|
| **Hero motion that orients** | Still unsolved. John Clayton's letter-by-letter stagger is the first *signature* hero motion (decorative entrance), but does not *orient* the user. No portfolio in 25 has a hero motion that helps the user understand where they are and what to do next. **Carry to batch 6.** |
| **Custom cursor that adds UX** | Still unsolved after 25 portfolios. Batch 5 had two false positives (John Clayton 10 matches, Caiovisuals 40 matches — all `cursor-pointer` Tailwind utility class). No real custom cursor observed. **Carry to batch 6.** |
| **Scroll-driven section transitions** | Still unsolved. John Clayton's framer-motion fade-ins (142 transform-style elements) are scroll-triggered *reveals*, not scroll-driven *section transitions*. Caiovisuals's `fadeIn`/`fadeInUp` keyframes are also fade-ins. **Carry to batch 6.** |
| **Sound** | Still unsolved after 25 portfolios. Zero `<audio>` elements in batch 5. **Carry to batch 6.** |
| **Real 3D scene (not just particles)** | Still unsolved after 25 portfolios. Zero `<canvas>`, Three.js, Spline, or `<model-viewer>` in batch 5. Whilmar B3's WebGL2 particle field remains the lone 3D-adjacent element. **Carry to batch 6.** |
| **Code-as-interface, deeper** | **DEEPER RESOLVED by Artur Bień.** Each blog article embeds an interactive Generator where readers tweak real parameters of the technique being explained. Goes beyond EMF B4's typography panel. Principle: *embed the live demo inside the content*, not as a separate panel. Resolves the tension for content-driven portfolios. For non-content-driven portfolios, EMF's panel pattern remains the model. |
| **Light vs dark default** | Refined — tinted-light (Luca warm OKLCH 0.99/0.0013/106°) and tinted-dark (John Clayton #0f172a slate-900; Caiovisuals #151515 warm-near-black) both viable. Artur's Win95 gray `rgb(207,207,207)` is a third option (warm-cool neutral gray). Pure white escape hatch (EMF B4) unused in batch 5. **Verdict: tinted-light or tinted-dark; pure only with ultralight display type.** |
| **Premium case study template** | **DEFINITIVELY ANSWERED by Luca Félix.** H1 project name → context subhead (degree program / institution / client) → tech pills → multiple H2 sections with H3 subsections → embedded project-specific contact form → team + advisor credits → external documentation link → tag list. Combine with Ghulam B3 (breadcrumb + date + min-read + ToC + related articles) for the complete spec. |
| **About section: narrative vs CV vs both** | **NEW ANSWER: third-person narrative** (Luca Félix) joins first-person narrative (most of corpus) and CV-style (Ghulam B3) as a valid pattern. Third-person works when tone is specific and self-aware. |
| **Page/route transitions** | Confirmed — Luca Félix's `enter`/`exit`/`spinner` keyframes confirm Next.js route-transition motion; extends EMF B4 (Vue) and Ajvad B3 (Astro) view-transition lineage to React/Next.js. |
| **Commitment vs kitchen-sink** | Confirmed for batch 5. Artur (Win95 + 0 keyframes + interactive SVG), Luca (warm OKLCH + 3 functional keyframes + deep case studies), Caiovisuals (dark + 3-font + 27-case grid + design-software metaphor) all commit. John Clayton (Tailwind defaults + system font + framer-motion-everywhere) does not — and reads as generic. |
| **Microcopy that works** | New examples: Luca "Replies in 1-2 days" (expectation-setting), "Don't fill this out if you're human" (friendly honeypot), "Slide to send" (anti-spam interaction). Caiovisuals "Fim!" (period-punctuated close). Artur "I build quality UIs for fun" (concise, but the "quality quality quality" stutter in DOM is a bug). |

### Carried-forward open tensions for batch 6

- Custom cursor that adds UX (0 in 25)
- Scroll-driven section transitions (0 in 25)
- Sound (0 in 25)
- Real 3D scene (0 in 25 — Whilmar B3's particle field is the only 3D-adjacent element)
- Hero motion that orients (0 in 25 — John Clayton B5's letter-stagger is decorative)

### Strongest portfolio in batch 5

**Artur Bień — expensive.toys.** Windows 95 aesthetic committed to fully (MS Sans Serif + Win95 gray + Arial bold H1), hero-only home with 2 routes (Blog + Toys), zero CSS keyframes, "Release balloons" interactive button as cheapest "site is alive" signal, and blog articles that each embed an interactive Generator (deeper code-as-interface than EMF B4). The article IS the exhibit. Most original portfolio in batch 5.

Runner-up: **Luca Félix — luca-felix.com.** Warm OKLCH tinted-light, multi-page hybrid with route-transition motion, third-person About narrative, "Slide to send" anti-spam, honeypot with friendly microcopy, "Replies in 1-2 days" expectation-setting, and the most complete case study template in the corpus (`/projects/odo`).

### Weakest portfolio in batch 5

**Vinay Katikireddy — vinaykatikireddy.is-a.dev.** Complete deployment failure (HTTP 404 GitHub Pages site not found at both root and CNAME target). The is-a.dev subdomain is configured and the GitHub bio links to it, but no site is deployed. Worst-possible portfolio outcome.

Runner-up weak: **John Clayton Blanc — johnclaytonblanc.com.** Tailwind slate-900 + indigo-500 defaults + system font stack + 0 H1 + 0 H2 + 56 framer-motion letter spans (signature hero move, but everything else is generic). Semantic HTML anti-pattern (worse than Gunjan B3's 4 H1s because there are *zero* H1/H2 on the entire page). Period-punctuated section titles are rendered as styled divs, not headings.
