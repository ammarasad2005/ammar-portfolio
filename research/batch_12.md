# Batch 12 — Portfolios 56–60

> Research Round 3, Batch 12 of 20. Five portfolios analyzed.
> Carried-forward open tensions to watch for (after 55 portfolios): scroll-driven section transitions (0 in 55); sound (0 in 55); loading state fully wired up (0 in 55); hero motion that *itself* tells user where to go next (partial); haptic-style mobile feedback (still 0).
> Special watch for this batch: Techfolios is itself a portfolio template/framework (note template-design decisions); Tuncay Ölmez uses a Turkish .tr domain (note locale-specific design choices).

---

## 56. Pan Wei Lian — https://williamson922.github.io

- **Reachable**: yes (HTTP/2 200; GitHub Pages; last-modified Aug 6, 2022 — a stale site)
- **First impression**: A left-sidebar nav portfolio with a green eco-feel accent and an emerald sidebar. Reads as a *forked template* that was never filled in — every project card and bio paragraph is still `Lorem ipsum`. The author forked Mayank Arora's template (the alt text still reads "A picture of Mayank Arora", the GitHub icon aria-label still reads "Link to Mayank's Github page"). Cautionary artifact.
- **Visual hierarchy**: H1 "William Pan" (Poppins 40px / 400) is the only display moment. 4 H2s for section titles (ABOUT ME / SKILLS / PROJECTS / CONTACT), 8 H3s — but every H3 is the literal string "Lorem ipsum". No eyebrow→H2 pattern in section headers; instead uses small caption ("SOME INFO", "CHECK OUT MY") above each H2.
- **Layout composition**: Two-pane layout — fixed left sidebar nav (logo "WLP" + vertical icon-nav HOME/ABOUT/SKILLS/WORKS/CONTACT + "Scroll Down" arrow) + right scrollable content. Hero is two-column: left = headshot image, right = "HI THERE! I'M" greeting + H1 + bio + Resumé link + social icons. Below: vertically stacked sections.
- **Typography**: Single-font system — **Poppins** (Google Fonts, weights 300/500/400-italic). No mono, no display, no accent face. H1 40px, H2 25.6px, body 20px. Generic web-design feel — no developer-coded register.
- **Color palette**: Body bg `rgba(0,0,0,0)` (transparent — relies on html bg). Emerald-green sidebar `rgb(6, 173, 61)`, accent link color `rgb(0, 153, 51)`. Body text `rgb(51, 51, 51)`. Eyebrow span color `rgb(51, 51, 51)` (same as body — no accent differentiation on the eyebrow). Eco/green feel is distinctive but the application is undisciplined.
- **Spacing**: Balanced. Generous vertical rhythm between sections.
- **Hero section**: Image-left + text-right two-column hero. "HI THERE! I'M" eyebrow → "William Pan" H1 (note `<span>William</span> Pan` split — likely a name-color split that wasn't styled) → 4-line bio (Lorem ipsum) → Resumé link + Github icon.
- **Navigation**: Fixed left sidebar with vertical icon-nav (lineicons). Logo "WLP" at top, "Scroll Down" arrow at bottom. 5 items: HOME/ABOUT/SKILLS/WORKS/CONTACT. Anchor links to in-page sections.
- **Section ordering**: Hero (about-image + bio) → ABOUT ME (single paragraph, Lorem ipsum) → SKILLS (HTML/CSS/SASS/Javascript/JQuery/React/REST API/Git/Firebase/VS Code/Windows/M365/DNS/Networks — 14 simple text items) → PROJECTS (5 project cards, all "Lorem ipsum") → CONTACT (Get in Touch + Contact Form).
- **Scroll experience**: Plain native scroll. **0 keyframes.** Zero CSS animation. Zero JS animation. Dead-still portfolio.
- **Animations & motion**: None. Zero keyframes is rare — only Triet B1 (1 keyframe) and Malik B11 (2 keyframes) come close to this restraint, but those were intentional; here it reads as a template that was never customized.
- **Hover interactions**: Standard browser default on links. No custom hover.
- **Background effects**: Plain. No gradient, no grain, no particles.
- **3D elements**: no.
- **Responsiveness perception**: Standard responsive (template's CSS). Not personally inspected for bespoke mobile interactions.
- **Performance perception**: Lightweight (only 1 inline jQuery + GA + LineIcons CDN). Very fast. But the visual payoff is zero.
- **Emotional feeling**: Abandoned / incomplete / green-eco template feel.
- **Originality**: 1/5 — a template fork that was never filled in. The only original choices are the emerald-green palette and the WLP monogram.
- **What works**:
  - **Fixed left vertical icon-nav with logo at top + "Scroll Down" arrow at bottom** — the sidebar-with-icon-nav pattern is corpus-relevant (refines B1 codified "minimal nav"). The "Scroll Down" affordance at the bottom of the sidebar is a small but real orientation cue.
  - **Eyebrow-then-H2 section pattern** ("SOME INFO" → "ABOUT ME", "CHECK OUT MY" → "SKILLS") — reinforces corpus-codified eyebrow pattern.
  - Name-color split in H1 (`<span>William</span> Pan`) — would have been a name-as-link or first-name-accent pattern if styled.
- **What does NOT work**:
  - **Entire content is Lorem ipsum** — every bio, every project description, every project name is the placeholder string. This is a portfolio that was never finished. (Anti-pattern: shipping a template without filling it in.)
  - **Forked template with previous owner's identity still in markup** — `alt="A picture of Mayank Arora"` and `aria-label="Link to Mayank's Github page"` are still in the HTML. Sloppy fork hygiene. (Anti-pattern: don't ship forked templates without scrubbing the original author's name from alt text / aria labels.)
  - **Zero animation / zero keyframes combined with emerald-green palette** — the result reads as an unfinished early-2010s template, not a 2022 portfolio.
  - **Stale: last updated Aug 2022** — over 3 years old.
- **Notable patterns to consider**:
  - **ANTI-PATTERN: Forked template with original author's identity in markup** — first corpus instance of explicit fork-hygiene failure (alt text + aria labels still name the original author). Cautionary: when forking, scrub the original author's name from alt text, aria-labels, comments, and metadata.
  - **ANTI-PATTERN: Shipping a template without filling in content** — first corpus instance of an entire portfolio left in placeholder state. (Cautionary.)
  - Pattern reinforcement: fixed left vertical icon-nav (refines B1 codified nav patterns), eyebrow-then-H2 section pattern, green eco accent (extends B3 codified single-accent pattern).

---

## 57. Techfolios — https://techfolios.github.io

- **Reachable**: yes (HTTP/2 200; GitHub Pages; landing page last-modified Feb 2024; template sub-site last-modified similar)
- **First impression**: TechFolios is *not itself a portfolio* — it's a Docusaurus-built documentation/landing page for an open-source portfolio *template framework* developed by the Collaborative Software Development Laboratory at University of Hawaii. The actual portfolio example lives at `/template/` (the fictional "Molly Maluhia" student). The landing page reads as a 2018-era academic-software project page with a hero, three feature blurbs, and a docs/gallery/blog nav.
- **Visual hierarchy**: H1 "TechFolios" (system-ui 48px / 700) on hero. 0 H2s on landing (Docusaurus convention). 3 H3s for feature blurbs. The template portfolio itself uses 3 H1s (!) on a single page (Molly Maluhia / Projects / Essays) — Docusaurus-generated.
- **Layout composition**: Docusaurus default — fixed top navbar (logo + Documentation/Gallery/News/Help/GitHub) + hero (logo + tagline + CTA) + features grid (3 cards) + footer (academic attribution). The template portfolio (`/template/`) uses Bootstrap + Jekyll: top navbar (Projects / Essays / Resume) + headshot-left + summary-right hero + projects grid + essays list + footer ("Made with Techfolios").
- **Typography**: Landing page uses **system-ui** (Docusaurus default Infima). Template portfolio uses **Open Sans** (Bootstrap + Jekyll default). H1 48px landing, 56px template / weight 300. Generic documentation-style typography on both.
- **Color palette**: Landing body bg transparent, htmlBg transparent (uses Docusaurus Infima defaults — light gray-white). Template portfolio bodyBg `rgb(255, 255, 255)` (pure white). No custom accent on either — both use Bootstrap/Docusaurus defaults.
- **Spacing**: Balanced. Standard documentation rhythm.
- **Hero section**: Landing hero — "TechFolios" wordmark + tagline "Easily create technical portfolios using GitHub Pages, Jekyll, Bootstrap, and JSON Resume." + CTA buttons (implicit). Template hero — headshot image left + "Molly Maluhia / Student" name + bio paragraph + Interests + Network icons.
- **Navigation**: Landing nav (top fixed): Documentation / Gallery / News / Help / GitHub. Template nav (top): Projects / Essays / Resume. Standard horizontal top-nav in both.
- **Section ordering**: Landing: Hero → 3 feature cards (Create modern sites / JSON Resume / Content first style later) → footer. Template: Hero (headshot + bio) → Projects (4 cards) → Essays (3 cards) → footer.
- **Scroll experience**: Plain native scroll on both. Landing has 0 keyframes (Docusaurus's CSS doesn't define custom keyframes). Template has 10 keyframes — but **all 10 are Bootstrap defaults** (`progress-bar-stripes`, `spinner-border`, `spinner-grow`, `placeholder-glow`, `placeholder-wave`). No custom motion.
- **Animations & motion**: None custom. Bootstrap defaults only.
- **Hover interactions**: Standard link/button hovers. No signature.
- **Background effects**: Plain white. No gradient, no grain.
- **3D elements**: no.
- **Responsiveness perception**: Bootstrap responsive grid on the template. Standard.
- **Performance perception**: Both pages are lightweight static HTML. Very fast.
- **Emotional feeling**: Academic / utilitarian / documentation / 2018-vintage.
- **Originality**: 1/5 for the landing page (default Docusaurus); 1/5 for the template (default Bootstrap+Jekyll). The *concept* of an academic-lab-built portfolio framework with JSON-Resume content-first philosophy is interesting, but the visual execution is zero-effort.
- **What works**:
  - **JSON Resume as the content layer** — first corpus instance of an explicit JSON-Resume-driven portfolio architecture. Content-first / style-later philosophy is academically sound: author writes bio in JSON Resume format, theme is swappable. (Concept-level pattern only — execution is dated.)
  - **"Content first, style later"** as an explicit design philosophy — first corpus instance of an articulated content/style separation in a portfolio framework. Worth considering as a principle even if the visual execution is dated.
  - **Multi-theme system** (skyblue.css theme variant mentioned in Gallery) — first corpus instance of an explicit theme-switching framework. (Concept-level only.)
  - **Gallery of example sites with explicit customization notes** — each Gallery entry lists *exactly what the author customized* vs the default template. (Refines B7 Karan's "Behind the curtains" placement pattern to a *framework-level* convention.)
- **What does NOT work**:
  - **Default Docusaurus landing** — looks like every other open-source project docs page from 2018-2022. Zero visual distinction.
  - **Default Bootstrap + Jekyll template** — looks like every academic portfolio from 2015-2018. The Molly Maluhia template is not just minimal, it's *undifferentiated*.
  - **3 H1s on a single page** (Molly Maluhia / Projects / Essays) — accessibility anti-pattern. One H1 per page is the rule.
  - **No custom CSS keyframes on the template** — the only animations are Bootstrap's built-in spinner/placeholder/progress-bar utilities, none of which are visible on the page.
- **Notable patterns to consider**:
  - **NEW (concept): JSON Resume as the content layer** — first corpus instance of an explicit JSON-Resume-driven portfolio architecture. Content-first / style-later philosophy. Worth considering as a *backend* pattern even if the visual execution is dated.
  - **NEW (concept): Theme-switching framework** — first corpus instance of an explicit theme-switching portfolio framework (skyblue.css variant). Concept-level only.
  - **NEW (concept): Gallery with per-site customization notes** — first corpus instance of a portfolio framework's gallery that lists *exactly what each author customized* vs the default. Refines B7 Karan's "Behind the curtains" pattern to framework-level.
  - **ANTI-PATTERN: 3 H1s on a single page** — Docusaurus-generated accessibility failure (Molly Maluhia / Projects / Essays all H1). Each page should have exactly one H1.
  - Pattern anti-reinforcement: Bootstrap + Jekyll defaults are exactly the "default web" feel that the corpus has been moving *away* from. TechFolios is a useful baseline for "what a 2018 portfolio looked like" — instructive as contrast, not inspiration.

---

## 58. Paal Stakvik — https://paalss.vercel.app

- **Reachable**: yes (HTTP/2 200; Vercel; Next.js multi-page)
- **First impression**: A Norwegian web developer's portfolio with a multi-page architecture (Home / Websites / Graphics / Art), each top-level category having its own sub-routes per project. Built with Next.js + UIKit (the `uk-fade`, `uk-scale-kenburns`, `uk-spinner-rotate` keyframe prefixes are UIKit signatures). Heavy on images (46 imgs, 19 svgs) because Paal is also a graphic designer — book covers, logos, banners. Image-first portfolio.
- **Visual hierarchy**: H1 "Pål Stakvik" (Raleway 48px / 900 — heaviest weight available). 5 H2s for category headers (Competence / Websites / Graphics / Other / React certificate), 17 H3s for project names. Heavy-weight H1 + thin-weight body is a strong contrast move (Raleway 900 is *thick*).
- **Layout composition**: Top fixed nav (Home / Websites / Graphics / Art + language + theme toggle) + sidebar project sub-nav (each project under Websites/Graphics listed as a sub-link in a left vertical list). Project list shows as cards with tech tags. Each project subpage is long-form: H1 project name → "Visit site" CTA → Tools list (with each tool given a short description) → "My contribution" → "This is what I've learned".
- **Typography**: Single-font system — **Raleway** (Google Fonts). H1 48px / 900 (heavy). Body default. No mono, no display. Raleway is a geometric sans with a slight elegance — fits the designer-developer hybrid identity.
- **Color palette**: BodyBg `rgb(255, 255, 255)` (pure white). Text `rgba(0, 0, 0, 0.85)`. No accent color observed in computed styles — but the language toggle uses 🌜/🌞 emoji as dark-mode toggle button content. Minimal palette — the colors come from the 46 project images, not from the UI chrome.
- **Spacing**: Balanced. Generous vertical rhythm between project cards.
- **Hero section**: Home page hero is short — "Pål Stakvik" H1 + "Educated web developer" role line. Below: nav (Home / Websites [with sub-links] / Graphics [with sub-links] / Art) + "Competence" section with skills + "Websites" project grid.
- **Navigation**: Top fixed nav with 4 top-level items + 🌜/🌞 dark-mode toggle + "Norsk" language toggle. Each top-level item has a sidebar submenu listing all projects under that category. *Sidebar submenu appears in left column on project pages* — multi-page with persistent left sub-nav.
- **Section ordering**: Home → Competence (skills) → Websites (10 projects with tech-stack count badges) → Graphics (4 projects) → Other → React certificate → contact info (Github / LinkedIn / Instagram / Scratch / email / "Resident in Oslo"). Project subpages: H1 → CTA → Tools → Contribution → Learnings.
- **Scroll experience**: Plain native scroll. 56 keyframes total — but **all 56 are library defaults** (FontAwesome animations: `fa-beat`, `fa-bounce`, `fa-fade`, `fa-flip`, `fa-shake`, `fa-spin`; UIKit animations: `uk-fade`, `uk-scale-kenburns`, `uk-stroke`, `uk-shake`; one custom `Barchart_anim-lightspeed-in`). No custom motion design — relies entirely on UIKit's `uk-fade` scroll-reveal utility.
- **Animations & motion**: Library-driven only. UIKit's `uk-fade-*` family provides scroll-reveal fade-up animations. No signature custom motion. The 1 custom keyframe (`Barchart_anim-lightspeed-in`) is for a bar-chart component.
- **Hover interactions**: Standard link/card hovers via UIKit. No signature hover.
- **Background effects**: Plain white. No gradient, no grain, no particles. Color comes from project images.
- **3D elements**: no.
- **Responsiveness perception**: UIKit responsive grid. Standard.
- **Performance perception**: Heavy on images (46 imgs) — would benefit from lazy-loading + modern formats. Otherwise lightweight Next.js app.
- **Emotional feeling**: Calm / Scandinavian / craftsperson / dual-discipline (dev + designer) / understated.
- **Originality**: 3/5 — high for the multi-page case-study architecture (project subpage with Tools → Contribution → Learnings structure is rare), low for the visual design (default UIKit + Raleway).
- **What works**:
  - **Multi-page architecture with persistent left sub-nav per category** — first corpus instance of a *persistent left sub-nav* listing every project under the current category. Each project subpage keeps the same left sub-nav, so the visitor can jump between projects without going back. Strong navigation pattern for portfolio sites with >10 projects.
  - **Project case study structure: Tool descriptions → Contribution → Learnings** — first corpus instance of an explicit *Tool-with-description* block (each tool gets a 1-line plain-language description, e.g., "PHTML: A HTML templating language (HTML where you can use variables and expressions). Not so different to Twig and Handlebars."). Refines B3 codified project-case-study pattern with a tool-explainer sub-section.
  - **Three-tier proficiency skills: "Basics" / "Masters well" / "Very good at"** — first corpus instance of a *three-tier categorical proficiency* skill list (not percentages, but ordinal categories). Refines B3 codified "prose categorization" pattern with explicit tier labels. Notable for cross-referencing with B1 anti-pattern (self-rated percentages) — this categorical approach avoids the percentage anti-pattern while still communicating proficiency.
  - **Tech-stack count badges on project filters** ("React (5) / Next (1) / JavaScript (7) / TypeScript (2) / CSS (10)") — first corpus instance of *frequency-count filter chips*. Communicates which tech the author uses most without self-rating.
  - **Dark-mode toggle via emoji** (🌜/🌞) — first corpus instance of emoji-as-theme-toggle-button-content. (Minor but distinctive.)
  - **Bilingual Norwegian/English toggle** — first corpus instance of a Norwegian-English language toggle. Extends B11 / Tuncay B12 bilingual pattern to Northern Europe.
- **What does NOT work**:
  - **56 keyframes, all library defaults** — zero custom motion design. UIKit's `uk-fade` is doing all the lifting. Reads as "default UIKit portfolio".
  - **46 imgs but no lazy-loading inspection** — likely a heavy initial load.
  - **Single-font Raleway without mono** — reads as default Google Fonts portfolio. A second mono font for tool tags / code references would add developer-coded register.
  - **"Scratch" as a social link** — Scratch (MIT's children's programming platform) listed alongside Github/LinkedIn/Instagram. Honesty about Scratch background is charming for an educator identity but odd for a professional web developer's primary portfolio.
- **Notable patterns to consider**:
  - **NEW: Multi-page architecture with persistent left sub-nav per category** — first corpus instance. Strong navigation pattern for portfolios with >10 projects.
  - **NEW: Project case study with Tool-with-description block** — first corpus instance of a tool-explainer sub-section in a project case study. Each tool gets a 1-line plain-language description. Refines B3 codified project-case-study pattern.
  - **NEW: Three-tier categorical proficiency skills** ("Basics" / "Masters well" / "Very good at") — first corpus instance of categorical (not percentage) proficiency. Avoids B1 anti-pattern while communicating proficiency.
  - **NEW: Tech-stack frequency-count filter chips** ("React (5) / Next (1) / CSS (10)") — first corpus instance. Communicates usage frequency without self-rating.
  - **NEW: Emoji-as-theme-toggle** (🌜/🌞) — first corpus instance. Minor but distinctive.
  - Pattern reinforcement: bilingual toggle (extends Tuncay B12 + Aayush B11 implicit EN), single-font Google Fonts (extends B1 codified patterns), image-heavy portfolio (extends B5 codified patterns).
  - Pattern anti-reinforcement: zero custom keyframes (only library defaults) — extends B1 codified "restraint" pattern but here the restraint is *unintentional* (just using UIKit defaults).

---

## 59. Tuncay Ölmez — https://setrathex.com.tr

- **Reachable**: yes (HTTP/1.1 200; nginx/Ubuntu; Next.js multi-page — Vary: RSC, Next-Router-State-Tree)
- **First impression**: **The strongest portfolio in batch 12 and one of the strongest in the entire corpus so far.** A Turkish computer-programming student's portfolio on a .tr country-code domain, with bilingual TR/EN toggle, Ctrl+K "Hızlı Menü" (Quick Menu) shortcut, dark slate-900 background, Geist Sans + Geist Mono two-font developer-coded feel, cyan accent, only 1 CSS keyframe (`shooting-star`), 0 images, 45 SVGs, and a fully-structured project case study format with Status / Role / Tech tags / Progress+ items / Next step / External links. Every project shows working / in-development / planned parts separately. Reads as a senior-engineer-grade portfolio from a *first-year student* — exceptional.
- **Visual hierarchy**: H1 "Tuncay Ölmez" (Geist Sans 72px / 600) is the only display moment. 8 H2s for section titles (all in Turkish: Şu an odaklandığım işler / Öne Çıkan Projeler / Hakkımda / Çalışma Yöntemi / Teknik Yazılar ve Retrospektifler / Teknik Alanlar / Eğitim ve Gelişim / İletişim), 29 H3s for project/essay/skill titles. Eyebrow → H2 pattern is consistent: every section has a small slash-route eyebrow (`/Projeler`, `/Hakkımda`, `/Yöntem`, `/Beceriler`, `/Eğitim`, `/iletişim`) above the H2.
- **Layout composition**: Sticky top nav (TR/EN toggle + setrathex wordmark + Projeler/Hakkımda/Yöntem/Yazılar/Beceriler/İletişim) + persistent left side nav (Hızlı Menü + Ctrl K shortcut list + nav items + Sayfa İçi / Aksiyonlar sections) + main content area with 8 vertically stacked sections. Hero is full-viewport with availability badge + slash-route eyebrow + name + role + bio + 3-cell stats grid + 4 CTAs.
- **Typography**: Two-font system — **Geist Sans** (H1, body) + **Geist Mono** (eyebrows, stats labels, tool tags). Vercel's font pairing. This is the *exact* two-font developer-coded feel codified in B1. H1 72px / 600. Body default. The mono is used purposefully for technical labels (Setrathex / Kısa Özet, /Projeler, etc.) — disciplined application.
- **Color palette**: BodyBg `rgb(15, 23, 42)` (Tailwind slate-900 — tinted-neutral dark, not pure black). Text near-white. Accents: `rgb(165, 243, 252)` (cyan-300), `rgb(236, 254, 255)` (cyan-50), `rgb(148, 163, 184)` (slate-400), `rgb(203, 213, 225)` (slate-300). **Cyan-on-tinted-slate dark palette** — refines B10 Karan's `rgb(10,10,10)` near-black-warm pattern with Tailwind's perceptually-tinted slate scale.
- **Spacing**: Balanced. Generous vertical rhythm. Dense stats grid in hero (3 cells: 5 Proje / 4 Teknik Yazı / 3.13 GANO/4.00).
- **Hero section**: "🇹🇷 TR / 🇬🇧 EN" toggle (top nav) → "Staj ve proje iş birliklerine açık" (Turkish availability badge: "Open to internships and project collaborations") → "/Setrathex / Kısa Özet" slash-route eyebrow → "Tuncay Ölmez" H1 → "Bilgisayar Programcılığı Öğrencisi" (Computer Programming Student) role → bio paragraph → 3-cell stats grid (5 Proje / 4 Teknik Yazı / 3.13 GANO/4.00) → 4 CTAs (Projeler / GitHub / CV İndir / İletişim).
- **Navigation**: Sticky top nav (TR/EN + wordmark + 6 items) + persistent left side nav (Hızlı Menü + Ctrl K shortcut hint + Sayfa İçi [Projeler, Hakkımda] + Aksiyonlar [E-posta Gönder, Özgeçmiş (TR) İndir, Resume (EN) Download]). **Ctrl+K is a keyboard shortcut that scrolls/focuses the Hızlı Menü side-nav section** — not a modal command palette, but an in-page anchor shortcut that surfaces the Quick Menu. Simple, accessible implementation.
- **Section ordering**: Hero (with stats + CTAs) → Odak Alanları / Şu an odaklandığım işler (Focus Areas / What I'm focusing on now — 3 active workstreams with current status + explicit goal) → Öne Çıkan Projeler (Featured Projects — 2 case studies with full structure) → Diğer Projeler (Other Projects — 2 research/learning projects with same structure) → Hakkımda (About) → Çalışma Yöntemi (Working Method — 4-step numbered workflow: 01 Araştırma → 02 PRD → 03 Yol Haritası → 04 Uygulama & Test) → Teknik Yazılar ve Retrospektifler (Technical Writings & Retrospectives — 4 dev.to essays with date + read link) → Teknik Alanlar (Technical Areas — skills in 3 categories: Aktif kullandıklarım / Projelerde temas ettiklerim / Geliştirdiğim temeller) → Eğitim ve Gelişim (Education & Development — university + security awareness + certificates) → İletişim (Contact — plain text with email/GitHub/LinkedIn/TryHackMe + Samsun, Türkiye location + availability badge).
- **Scroll experience**: Plain native scroll. Only 1 keyframe (`shooting-star`) — most restrained motion budget in the entire corpus alongside Triet B1. The shooting-star animation is a subtle background SVG decoration (45 SVGs include the star/meteor decoration). **No scroll-driven section transitions** — open tension still unsolved.
- **Animations & motion**: 1 keyframe only (`shooting-star`). Most disciplined motion budget in the corpus alongside Triet B1 (1 keyframe) — but here the discipline is *intentional* and aligned with the senior-engineer register.
- **Hover interactions**: Standard link hovers. Cyan accent on hover for nav items.
- **Background effects**: Dark slate-900 with subtle shooting-star SVG animation (1 keyframe). No particles, no grain, no gradient mesh. Restrained.
- **3D elements**: no.
- **Responsiveness perception**: Standard responsive. Mobile nav not directly inspected.
- **Performance perception**: Very fast — 0 imgs, 45 SVGs (vector-only), 1 keyframe, ~10 Next.js chunks. ~50ms DOMContentLoaded equivalent. The shooting-star is the only animation.
- **Emotional feeling**: Senior / disciplined / technical / Turkish-student-with-senior-register / honest / retrospective / 2026-contemporary.
- **Originality**: 5/5 — highest in batch 12 and one of the highest in the corpus. Earns 5/5 for: (1) bilingual TR/EN on .tr domain with locale-specific Turkish academic terms (GANO instead of GPA, "Bilgisayar Programcılığı" instead of "Computer Programming"); (2) Ctrl+K "Hızlı Menü" keyboard shortcut for in-page nav; (3) project case study structure with Status / Role / Progress+ items / Next step — first corpus instance of an explicit *working/in-development/planned* tri-state status per project; (4) 4-step numbered workflow diagram in Turkish (01 Araştırma → 02 PRD → 03 Yol Haritası → 04 Uygulama & Test); (5) 3-category skill prose with Turkish tier labels; (6) TryHackMe profile link (first corpus instance — cybersecurity learning platform); (7) explicit security-awareness section with ethical-hacker certificates; (8) retrospectives as a section (first corpus instance — 4 dev.to essays framed as "Teknik Yazılar ve Retrospektifler" / "Technical Writings and Retrospectives", not just "Blog").
- **What works**:
  - **Bilingual TR/EN on .tr domain with locale-specific Turkish academic terms** — GANO (Genel Akademik Not Ortalaması, Turkish GPA equivalent) instead of GPA; "Bilgisayar Programcılığı Öğrencisi" (Computer Programming Student) as the role line in TR, "Computer Programming Student" in EN. Locale-specific design choice #1: **use locale-specific academic terminology, don't translate literally**. Locale-specific design choice #2: bilingual toggle uses flag-emoji-prefixed labels (🇹🇷 TR / 🇬🇧 EN). Locale-specific design choice #3: TR/EN toggle is a URL parameter (`?lang=en`) not a separate route — client-side language switching. First corpus instance of a Turkish-English bilingual portfolio. **Resolves the "locale-specific design" watch-item for this batch.**
  - **Ctrl+K "Hızlı Menü" keyboard shortcut** — first corpus instance of an explicit Ctrl+K keyboard shortcut in nav. Implementation is simple: pressing Ctrl+K scrolls/focuses the side-nav's Hızlı Menü section, which lists Sayfa İçi (On-page) anchor links + Aksiyonlar (Actions: email, download TR resume, download EN resume). Not a modal command palette — just an in-page keyboard-revealed shortcut list. Simpler than Vercel/Linear-style command palette, more accessible (no modal focus trap), and lighter to implement.
  - **Project case study with tri-state status** — each project shows "Durum" (Status) as a string combining: published version (e.g., "v0.2.1 npm'de yayında"), current activity (e.g., "v0.3 kalite çalışması"), and next step (e.g., "Sıradaki adım: v0.3 benchmark fixture suite · XSS/auth/middleware signal iyileştirmesi · kullanıcı geri bildirimi"). First corpus instance of an explicit *working / in-development / planned* tri-state status per project. Communicates project liveness without timestamps.
  - **4-step numbered workflow diagram in Turkish** (01 Araştırma / Research → 02 PRD → 03 Yol Haritası / Roadmap → 04 Uygulama & Test / Implementation & Test) — first corpus instance of a workflow diagram in a non-English language. Refines Aayush B11's "IDEA → PLAN → AI HELP → CODE → REVIEW → TEST → LEARN" pattern with: (a) numbers (01-04 instead of arrows), (b) Turkish labels (c) sub-bullets per step (e.g., "Riskler · Varsayımlar · Öğrenilecek Konular" under Research).
  - **Retrospectives as a section** — first corpus instance of an explicit "Retrospektif" (Retrospective) framing for essays. Pagonic Retrospektifi (a Python ZIP parser project retrospective) is its own essay category. The retrospective framing signals engineering maturity beyond "I built X" — "I built X, then learned Y, then decided Z". First corpus instance of postmortem-style writing in a portfolio.
  - **Three-category skill prose in Turkish** — "Aktif kullandıklarım" (Active users) / "Projelerde temas ettiklerim" (Touched in projects) / "Geliştirdiğim temeller" (Foundations I'm developing) — refines B3 codified prose categorization with locale-specific tier labels. Each category lists tech with a 1-line use-case annotation (e.g., "Python — otomasyon / backend", "SQLite — loglama ve basit veri saklama"). First corpus instance of *tech-with-use-case* annotation in a skills list.
  - **TryHackMe profile link** — first corpus instance of a TryHackMe (cybersecurity learning platform) profile link in a portfolio. Paired with the explicit "Güvenlik farkındalığı" (Security awareness) section + Etik Hacker (Ethical Hacker) Udemy certificates. Establishes a security-awareness identity angle alongside the developer identity. First corpus instance of explicit security-awareness-as-credential.
  - **Slash-route eyebrows** (`/Projeler`, `/Hakkımda`, `/Yöntem`, `/Beceriler`, `/Eğitim`, `/iletişim`) — first corpus instance of slash-route-prefixed section eyebrows. Extends Ganesh B8's Unix-command eyebrows (`$ man`, `$ history`) with file-path-style slash routes. Reads as `/<route>` — implies each section is a route in a CLI. Strong developer-coded register.
  - **AI tools listed explicitly** ("Claude Code, Cursor, Codex CLI, GitHub Copilot — araştırma, kod üretimi, inceleme ve dokümantasyon desteği için kullanıyorum") — first corpus instance of an explicit AI-tools-used list in a portfolio. Refines Aayush B11's "AI HELP" workflow step with a full tool inventory + use-case annotation.
  - **Hero stats grid with locale-specific academic term** ("5 Proje / 4 Teknik Yazı / 3.13 GANO / 4.00") — first corpus instance of locale-specific GPA equivalent in a stats grid. GANO is the Turkish university grade-point-average acronym. Reinforces B6 Juan's hero stats block pattern with locale-specific terminology.
  - **Samsun, Türkiye location + .tr domain** — first corpus instance of a portfolio on a country-code TLD matching the author's location. (Most portfolios use .com/.me/.dev/.vercel.app — Tuncay uses .tr to match his Turkish location and Turkish-default language.)
  - **Plain-text senior-consultant contact section** — Mail/GitHub/LinkedIn/TryHackMe/Konum with no embedded form. Refines B6 Milan's plain-text contact pattern. Cleanest contact section in the batch.
  - **1-keyframe restraint** — most disciplined motion budget in the corpus alongside Triet B1. Combined with the cyan-on-slate-900 palette + Geist Sans+Mono two-font system + slash-route eyebrows, the restraint reads as intentional senior register.
- **What does NOT work**:
  - **0 imgs, 45 SVGs** — vector-only is austere; the project case studies would benefit from at least 1 screenshot or hero illustration per project to break up the dense text. Currently the case-study pages are text walls.
  - **`?lang=en` URL parameter for language switching** — works but is not SEO-optimal (search engines prefer separate routes like `/en/` and `/tr/` for truly bilingual sites). Minor.
  - **Ctrl+K is not a modal command palette** — visitors expecting Vercel/Linear-style ⌘K modal will be slightly underwhelmed by the simpler scroll-to-side-nav implementation. Honest trade-off (lighter, more accessible) but expectations may mismatch.
  - **The site has 8 H2s on a single page** — long single-page with many sections. Each H2 is well-anchored but the page is *very* long. Could be split into sub-routes (`/projeler`, `/hakkimda`, etc.) — though the slash-route eyebrows already imply route-ability, which creates a small mismatch (the eyebrows *look* like routes but anchor-scroll instead).
- **Notable patterns to consider**:
  - **NEW: Bilingual TR/EN with locale-specific academic terminology** (GANO instead of GPA, "Bilgisayar Programcılığı" instead of "Computer Programming") — first corpus instance. Resolves the "locale-specific design" watch-item for this batch.
  - **NEW: Ctrl+K "Hızlı Menü" keyboard shortcut for in-page nav** — first corpus instance of Ctrl+K in portfolio nav. Implementation is simple (scrolls to side-nav section), not a modal. Honest, accessible, light.
  - **NEW: Project tri-state status** (working / in-development / planned) per project — first corpus instance. Communicates project liveness without timestamps.
  - **NEW: Slash-route eyebrows** (`/Projeler`, `/Hakkımda`) — first corpus instance of file-path-style section eyebrows. Extends Ganesh B8's Unix-command eyebrows.
  - **NEW: Retrospectives as a section** ("Teknik Yazılar ve Retrospektifler") — first corpus instance of postmortem-style writing in a portfolio.
  - **NEW: Tech-with-use-case annotation in skills** ("Python — otomasyon / backend") — first corpus instance of 1-line use-case per tech in a skills list. Refines B3 codified prose categorization.
  - **NEW: Explicit AI tools inventory** ("Claude Code, Cursor, Codex CLI, GitHub Copilot — araştırma, kod üretimi, inceleme ve dokümantasyon desteği") — first corpus instance of a full AI-tools-used list. Refines Aayush B11's "AI HELP" workflow step.
  - **NEW: TryHackMe profile link + explicit security-awareness section** — first corpus instance of cybersecurity-learning-platform credential + explicit security-awareness section.
  - **NEW: Numbered workflow diagram in non-English** (01-04 Turkish labels) — first corpus instance of a workflow diagram in a non-English language.
  - **NEW: Locale-specific GPA equivalent in stats grid** (GANO/4.00) — first corpus instance. Reinforces B6 Juan's hero stats block pattern with locale-specific terminology.
  - **NEW: Country-code TLD matching author location** (.tr for Samsun, Türkiye) — first corpus instance of ccTLD-location matching.
  - Pattern reinforcement: two-font developer-coded feel (Geist Sans + Geist Mono — extends B1 codified pattern), tinted-neutral dark bg (slate-900 — extends B10 Karan), 1-keyframe restraint (extends Triet B1), plain-text senior-consultant contact (extends B6 Milan), 4-step numbered workflow (extends Aayush B11), hero stats grid (extends B6 Juan), eyebrow-then-H2 (extends B1 codified).
  - **Open tensions update**: scroll-driven section transitions — STILL 0 in 56. Sound — STILL 0 in 56. Loading state — STILL 0 in 56. Hero motion that tells user where to go next — **partially resolved by Ctrl+K shortcut**: the "Ctrl K" hint in the side-nav is the first corpus instance of an *explicit keyboard affordance* pointing the user to a Quick Menu of actions. Not hero motion per se, but a hero-adjacent persistent UI affordance that tells the user "you can navigate via keyboard here".

---

## 60. Manan Narwal — https://manannarwal.vercel.app

- **Reachable**: yes (HTTP/2 200; Vercel; Next.js multi-page with sub-routes: /about /experience /projects /contact)
- **First impression**: A BCA-graduate portfolio from New Delhi, India with a particle.js WebGL hero canvas background, OKLCH color space, 96px display H1, multi-page architecture (separate routes per section), emoji-categorized skills, and a Next.js + TypeScript + Tailwind stack. Reads as a competent mid-tier portfolio with a particle-bg cliché but disciplined execution elsewhere.
- **Visual hierarchy**: H1 "Manan Narwal" (ui-sans-serif 96px / 700) — large display H1. 2 H2s on home (Featured Projects / Technical Skills), 7 H3s for project names + skill categories. Each subpage has its own H1 (About Me on /about, etc.) — correctly one H1 per page (avoids Aayush B11 anti-pattern).
- **Layout composition**: Sticky top nav (Home / About / Experience / Projects / Contact) + full-viewport hero with particle.js WebGL canvas background + name + role + 2 CTAs + scroll → Featured Projects (2-card grid) → Technical Skills (3 emoji-categorized cards) → footer (4-column: brand+description / Quick Links / Connect / Resume+GitHub+LinkedIn+Email buttons).
- **Typography**: Single-font system — **ui-sans-serif** (likely Tailwind default sans, which is ui-sans-serif fallback to system). H1 96px / 700. No mono, no display. Generic modern Tailwind feel.
- **Color palette**: BodyBg `oklch(1 0 0)` (pure white using **OKLCH color space** — extends Nabin Khair B11's `lab()` finding with OKLCH). Accents: `oklch(0.71 0.11 180)` (teal/cyan accent — lightness 0.71, chroma 0.11, hue 180), `oklch(0.5 0.03 260)` (muted indigo), `oklch(0.2 0.02 260)` (dark text). **Three-color OKLCH palette** — perceptually uniform across lightness/chroma. First corpus instance of OKLCH (extends Nabin's `lab()` finding to OKLCH, the newer perceptual color space).
- **Spacing**: Balanced. Standard Tailwind rhythm.
- **Hero section**: Full-viewport particle.js WebGL canvas background + "Hello, I'm" eyebrow → "Manan Narwal" 96px H1 → "Data Visualization Engineer at Highspring India" role line (with company name embedded — first corpus instance of company-name in role line) → "Cloud Computing Enthusiast|" (with trailing pipe — minor oddity) → 2 CTAs (View Projects / Contact Me).
- **Navigation**: Sticky top nav with 5 items (Home / About / Experience / Projects / Contact). Each is a Next.js sub-route. Theme toggle exists (light default).
- **Section ordering**: Home: Hero → Featured Projects → Technical Skills → Footer. About (subpage): About Me → Bachelor's in Computer Applications → Technical Skills (repeated) → Achievements (3 cards: Smart India Hackathon Runner-Up / Smart Dust Collector internship / [third]). Experience / Projects / Contact subpages not directly inspected but exist.
- **Scroll experience**: Plain native scroll. 4 keyframes (`spin`, `pulse`, `enter`, `exit` — Tailwind defaults + framer-motion fade). Particle.js provides ambient background animation (canvas WebGL). No scroll-triggered section transitions.
- **Animations & motion**: 4 keyframes (Tailwind defaults + framer-motion enter/exit). Particle.js ambient background canvas animation. No signature custom motion. **Particle.js hero background is a 2018-era cliché** — flagged in earlier batches as anti-pattern; Manan uses it anyway.
- **Hover interactions**: Standard Tailwind hover states on cards/buttons. No signature hover.
- **Background effects**: **Particle.js WebGL canvas** (1440x900, full-viewport, opacity 1, position static). Confirmed via JS inspection (`Particle.js` string in app/page chunk) + WebGL2 context. Particles in white-on-white (low contrast). Subtle but cliché.
- **3D elements**: no (WebGL2 used by particle.js for 2D particles, not 3D meshes).
- **Responsiveness perception**: Standard Tailwind responsive grid.
- **Performance perception**: 33 total resources, ~50ms DOMContentLoaded. Fast. Particle.js adds ambient CPU/GPU load but is bounded.
- **Emotional feeling**: Generic modern / 2024-2026 Indian-tech-student / competent / particle-bg-cliché / cloud-enthusiast.
- **Originality**: 2/5 — competent execution of stock patterns. Particle.js hero + Tailwind + multi-page + emoji-categorized skills are all stock 2024-2026 portfolio clichés. Earns 2/5 for OKLCH color space and company-name-in-role-line.
- **What works**:
  - **OKLCH color space** (3-color palette: teal accent / muted indigo / dark text) — first corpus instance of OKLCH. Extends Nabin Khair B11's `lab()` finding. OKLCH is the newer (2023+) perceptual color space, with cleaner lightness/chroma/hue semantics than HSL. Adoptable.
  - **Company-name in role line** ("Data Visualization Engineer at Highspring India") — first corpus instance of explicit company-name embedded in the hero role line (rather than as a separate "Currently at X" badge). Communicates current employment status without a separate badge component.
  - **Multi-page Next.js with separate H1 per subpage** — correctly implements one H1 per page (avoids Aayush B11's accessibility anti-pattern of a single shared H1 across multi-page site).
  - **Footer with stack attribution** ("Built with 💜 using Next.js, TypeScript, and Tailwind CSS") — extends corpus-codified transparent-stack-attribution pattern. 💜 purple heart is a minor personality flourish.
  - **"© 2026 Manan Narwal. All rights reserved."** — current year (2026) in copyright footer. First corpus instance of a 2026-dated copyright.
  - **Three emoji-categorized skill cards** (💻 Programming Languages / 🎨 Frontend Development / ⚙️ Backend & Databases) — reinforces Shubhanshu B10's emoji-categorized text-list pattern. Each category has 5-7 tech items as text tags. (Corpus pattern reinforcement, not new.)
- **What does NOT work**:
  - **Particle.js hero background** — 2018-era cliché, already flagged as anti-pattern in earlier batches. The particles are low-contrast white-on-white and add CPU/GPU load for unclear payoff. (Anti-pattern: avoid particle.js hero backgrounds — they were novel in 2018, dated in 2026.)
  - **"Cloud Computing Enthusiast|"** — trailing pipe character at the end of the role line. Looks like a separator that lost its pair. Minor copy bug.
  - **Single-font ui-sans-serif without mono** — reads as default Tailwind. A second mono font for tech tags / role line would add developer-coded register.
  - **"Cloud Computing Enthusiast"** is a weak secondary identity claim — the hero says "Data Visualization Engineer at Highspring India" (current role) *and* "Cloud Computing Enthusiast" (aspiration) — two identity claims in the hero is one too many. Pick one.
  - **Custom cursor preload but no visible custom cursor** — the HTML preloads `cursor_icon/icons8-select-cursor-24.png` but the CSS inspection found no `cursor: url(...)` rule on any element. Dead asset. (Anti-pattern: preloading an asset that isn't used.)
- **Notable patterns to consider**:
  - **NEW: OKLCH color space for portfolio palette** (3-color perceptual-uniform palette) — first corpus instance of OKLCH. Extends Nabin Khair B11's `lab()` finding to the newer perceptual color space. Adoptable.
  - **NEW: Company-name embedded in hero role line** ("Data Visualization Engineer at Highspring India") — first corpus instance. Communicates current employment status without a separate badge component.
  - **NEW: 2026-dated copyright in footer** — first corpus instance of a 2026-dated copyright.
  - **ANTI-PATTERN: Particle.js hero background** — 2018-era cliché. Already flagged in earlier batches; this portfolio is the textbook example of why to avoid it.
  - **ANTI-PATTERN: Dead cursor-icon preload** — preloads `icons8-select-cursor-24.png` but no element uses it. Dead asset. (Cautionary: clean up unused preloads.)
  - Pattern reinforcement: emoji-categorized text-list skills (extends Shubhanshu B10), multi-page Next.js with sub-routes (extends B1 codified patterns), transparent stack attribution in footer (extends corpus-codified), display-size H1 96px (extends Karan B10's 204.8px display-type pattern, smaller).

---

## Batch 12 Synthesis

### Patterns that *reinforce* prior findings

- **Two-font developer-coded feel (Geist Sans + Geist Mono)** — Tuncay Ölmez uses Vercel's exact pairing. Reinforces B1 codified pattern. Most disciplined application in the corpus alongside Triet B1.
- **Tinted-neutral dark background** — Tuncay uses `rgb(15, 23, 42)` (Tailwind slate-900, perceptually tinted toward blue). Reinforces B10 Karan's `rgb(10,10,10)` near-black-warm pattern. Adds a Tailwind-specific variant.
- **1-keyframe motion restraint** — Tuncay uses only `shooting-star`. Reinforces Triet B1 (1 keyframe) and Malik B11 (2 keyframes). Here the restraint is *intentional* and aligned with senior register (vs Malik's unintentional restraint).
- **Plain-text senior-consultant contact** — Tuncay's contact section is plain Mail/GitHub/LinkedIn/TryHackMe/Konum with no embedded form. Reinforces B6 Milan.
- **Hero stats grid** — Tuncay's "5 Proje / 4 Teknik Yazı / 3.13 GANO/4.00". Reinforces B6 Juan.
- **Numbered workflow diagram** — Tuncay's "01 Araştırma → 02 PRD → 03 Yol Haritası → 04 Uygulama & Test". Reinforces Aayush B11's "IDEA → PLAN → AI HELP → CODE → REVIEW → TEST → LEARN" pattern, with numbers + sub-bullets per step.
- **AI tools used explicitly** — Tuncay's "Claude Code, Cursor, Codex CLI, GitHub Copilot — araştırma, kod üretimi, inceleme ve dokümantasyon desteği için kullanıyorum". Refines Aayush B11's "AI HELP" workflow step with a full tool inventory + use-case annotation. First corpus instance of an explicit AI-tools-used list.
- **Multi-page hybrid with sub-routes** — Paal Stakvik (Home / Websites/[project] / Graphics/[project] / Art) and Manan Narwal (Home / About / Experience / Projects / Contact) both use Next.js multi-page with sub-routes. Reinforces B1 codified pattern.
- **Emoji-categorized text-list skills** — Manan Narwal's 💻 Programming Languages / 🎨 Frontend Development / ⚙️ Backend & Databases. Reinforces Shubhanshu B10.
- **Display-size H1** — Manan's 96px H1. Reinforces Karan B10's 204.8px display-type pattern (smaller variant).
- **Transparent stack attribution in footer** — Manan's "Built with 💜 using Next.js, TypeScript, and Tailwind CSS". Reinforces corpus-codified pattern.
- **CSS modern color space** — Manan uses OKLCH (extends Nabin Khair B11's `lab()` finding to the newer OKLCH color space).
- **Eyebrow-then-H2 section pattern** — Pan Wei Lian ("SOME INFO" → "ABOUT ME") and Tuncay ("/Projeler" → "Öne Çıkan Projeler"). Reinforces B1 codified pattern. Tuncay's slash-route variant extends Ganesh B8's Unix-command eyebrows with file-path-style routes.

### Patterns that *contradict* or refine earlier findings

- **Categorical proficiency (not percentage) skill tiers** — Paal Stakvik's "Basics / Masters well / Very good at" three-tier system. **Refines** B1 anti-pattern (self-rated percentages) and B3 codified (prose categorization): categorical tier labels avoid the percentage anti-pattern while still communicating proficiency. Notable cross-reference: this is *between* B3's prose categorization (no proficiency signal) and B1's anti-pattern (numeric percentage) — a third option.
- **Theme toggle via emoji (🌜/🌞)** — Paal Stakvik. **Refines** the corpus-codified "theme toggle in nav" pattern: emoji-as-button-content is more personality-forward than a sun/moon SVG icon. Minor but distinctive.
- **Sidebar nav can be persistent across sub-routes** — Paal Stakvik's left sub-nav stays visible on every project subpage. **Refines** B1 codified "minimal nav" pattern: for portfolios with >10 projects, a persistent left sub-nav listing every project is a stronger pattern than anchor-scroll nav.
- **Particle.js hero is now explicitly an anti-pattern** — Manan Narwal's portfolio is the textbook example. Confirms earlier-batches' implicit avoidance of particle.js heroes. The particle.js era is over.

### New patterns unique to this batch

- **Bilingual TR/EN with locale-specific academic terminology** (Tuncay) — GANO instead of GPA, "Bilgisayar Programcılığı" instead of "Computer Programming". First corpus instance of a Turkish-English bilingual portfolio. **Resolves the "locale-specific design" watch-item for this batch.**
- **Ctrl+K "Hızlı Menü" keyboard shortcut for in-page nav** (Tuncay) — first corpus instance of Ctrl+K in portfolio nav. Simple implementation (scrolls to side-nav section, not a modal). Honest, accessible, light.
- **Project tri-state status** (working / in-development / planned) per project (Tuncay) — first corpus instance. Communicates project liveness without timestamps.
- **Slash-route eyebrows** (`/Projeler`, `/Hakkımda`) (Tuncay) — first corpus instance of file-path-style section eyebrows. Extends Ganesh B8's Unix-command eyebrows with route-style prefix.
- **Retrospectives as a section** ("Teknik Yazılar ve Retrospektifler") (Tuncay) — first corpus instance of postmortem-style writing in a portfolio.
- **Tech-with-use-case annotation in skills** ("Python — otomasyon / backend") (Tuncay) — first corpus instance of 1-line use-case per tech in a skills list.
- **TryHackMe profile link + explicit security-awareness section** (Tuncay) — first corpus instance of cybersecurity-learning-platform credential + explicit security-awareness section.
- **Country-code TLD matching author location** (.tr for Samsun, Türkiye) (Tuncay) — first corpus instance of ccTLD-location matching.
- **Project case study with Tool-with-description block** (Paal) — first corpus instance of a tool-explainer sub-section in a project case study. Each tool gets a 1-line plain-language description.
- **Tech-stack frequency-count filter chips** ("React (5) / Next (1) / CSS (10)") (Paal) — first corpus instance. Communicates usage frequency without self-rating.
- **OKLCH color space for portfolio palette** (Manan) — first corpus instance of OKLCH. Extends Nabin Khair B11's `lab()` finding to the newer perceptual color space.
- **Company-name embedded in hero role line** ("Data Visualization Engineer at Highspring India") (Manan) — first corpus instance. Communicates current employment status without a separate badge component.
- **JSON Resume as the content layer** (TechFolios — concept-level only) — first corpus instance of an explicit JSON-Resume-driven portfolio architecture. Content-first / style-later philosophy. Worth considering as a *backend* pattern even if the visual execution is dated.

### Updated answers to open tensions

| Tension | Status after batch 12 (60 portfolios) |
|---|---|
| Scroll-driven section transitions | **STILL unsolved. 0 in 60.** None of the 5 portfolios in batch 12 implement real section morphing on scroll. Tuncay uses native scroll with anchor jumps. Paal uses Next.js page transitions (route-level, not section-level). Manan uses Next.js page transitions + particle.js (ambient only, not scroll-driven). Watch continues. |
| Sound | **STILL unsolved. 0 in 60.** No portfolio in batch 12 has any audio (0 audio elements across all 5 sites). Watch continues. |
| Designed loading state (fully wired) | **STILL unsolved. 0 fully-wired in 60.** No portfolio in batch 12 has a fully-wired preloader. TechFolios has Bootstrap's default `spinner-border` / `placeholder-glow` utilities but these are not wired to actual loading state. Watch continues. |
| Hero motion that tells user where to go next | **Partially resolved — refined by Tuncay.** Tuncay's Ctrl+K "Hızlı Menü" keyboard shortcut is the first corpus instance of an *explicit keyboard affordance* in the hero-adjacent UI pointing the user to a Quick Menu of actions (page anchors + email + download TR/EN resume). Not hero motion per se, but a hero-adjacent persistent UI affordance that tells the user "you can navigate via keyboard here". Refines the partial resolution from B5/B11. Strongest signal yet. |

### Anti-patterns flagged this batch

- **Forked template with original author's identity in markup** (Pan Wei Lian — `alt="A picture of Mayank Arora"`, `aria-label="Link to Mayank's Github page"` still in HTML). First corpus instance of explicit fork-hygiene failure.
- **Shipping a template without filling in content** (Pan Wei Lian — entire portfolio is Lorem ipsum). First corpus instance.
- **Particle.js hero background** (Manan Narwal) — 2018-era cliché, already flagged in earlier batches. Textbook example of why to avoid.
- **Dead cursor-icon preload** (Manan Narwal — preloads `icons8-select-cursor-24.png` but no element uses it). Dead asset. Cautionary: clean up unused preloads.
- **3 H1s on a single page** (TechFolios template — Docusaurus-generated Molly Maluhia / Projects / Essays all H1). Accessibility anti-pattern.
- **"Cloud Computing Enthusiast|"** trailing pipe (Manan) — minor copy bug.

### Adoptability recommendations for the premium portfolio being built

- **Adopt**: Tuncay's bilingual toggle with locale-specific terminology (if applicable to the builder's locale).
- **Adopt**: Tuncay's Ctrl+K "Quick Menu" shortcut (simple scroll-to-side-nav implementation, not a modal — lighter and more accessible than Vercel/Linear-style command palette).
- **Adopt**: Tuncay's project tri-state status (working / in-development / planned) per project.
- **Adopt**: Tuncay's slash-route eyebrows (`/Projects`, `/About`) — file-path-style section eyebrows.
- **Adopt**: Tuncay's retrospective-framed essays (postmortem-style writing, not just "blog posts").
- **Adopt**: Tuncay's tech-with-use-case annotation in skills list ("Python — automation / backend").
- **Adopt**: Tuncay's explicit AI-tools-used inventory.
- **Adopt**: Paal's persistent left sub-nav pattern (if building a portfolio with >10 projects).
- **Adopt**: Paal's project case study Tool-with-description block.
- **Adopt**: Paal's three-tier categorical proficiency skills (Basics / Masters well / Very good at) — avoids percentage anti-pattern.
- **Adopt**: Manan's OKLCH color space for the palette.
- **Adopt**: Manan's company-name embedded in hero role line (if currently employed).
- **Consider**: TechFolios's JSON-Resume-as-content-layer philosophy (backend pattern, even if the visual execution is dated).
- **Avoid**: Pan Wei Lian's forked-template-without-content anti-pattern.
- **Avoid**: Manan's particle.js hero background (2018-era cliché).
- **Avoid**: Manan's dead cursor-icon preload.
- **Avoid**: TechFolios's 3-H1-per-page Docusaurus default.

### Strongest portfolio in batch 12

**Tuncay Ölmez (setrathex.com.tr)** — 5/5 originality. The strongest portfolio in batch 12 and one of the strongest in the entire corpus so far. A first-year Turkish computer-programming student delivering senior-engineer-grade discipline: bilingual TR/EN, Ctrl+K shortcut, project tri-state status, slash-route eyebrows, retrospective-framed essays, tech-with-use-case skills, AI-tools inventory, 1-keyframe restraint, cyan-on-slate-900 palette, Geist Sans+Mono two-font system. The locale-specific design choices (GANO, Bilgisayar Programcılığı, .tr domain, Samsun location) integrate cleanly into the senior register rather than feeling decorative. Reference implementation for bilingual + keyboard-shortcut + retrospective-framed + tri-state-status portfolios.

### Weakest portfolio in batch 12

**Pan Wei Lian (williamson922.github.io)** — 1/5 originality. A forked Mayank Arora template left in Lorem ipsum state since Aug 2022. Cautionary artifact — anti-pattern reference for fork hygiene and template-without-content.
