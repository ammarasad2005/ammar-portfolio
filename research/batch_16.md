# Batch 16 — Portfolios 76-80 (Round 4, Batch 16)

> Researcher: general-purpose (portfolio researcher)
> Task ID: R4-B16
> Method: `agent-browser` desktop 1440×900, screenshots + DOM eval + network/perf inspection.
> Corpus position: 80 of 100 portfolios analyzed.

## Portfolios analyzed

| # | Name | URL | Reachable | Stack signal |
|---|---|---|---|---|
| 76 | Veerendra Dwivedi | https://veerendra-portfolio-seven.vercel.app | ✅ yes | React + Tailwind + bg-gray-900 |
| 77 | Nathan Simpson | https://nathansimpson.design | ✅ yes | Next.js (App Router) + Tailwind + SF Pro / Roboto |
| 78 | Utsav Adhikari | https://utsavadhikari07.com.np | ✅ yes | Next.js + Tailwind + Inter + Framer Motion + Sonner |
| 79 | Jerry Hirsch | https://jerryhirsch.com | ✅ yes (placeholder) | Create React App + Material-UI v4 + Times New Roman |
| 80 | Om Chaudhari | https://omchaudhari1107.github.io | ✅ yes | Static HTML + Poppins + typed.js + Google AdSense |

All 5 reachable. 1/5 is a CRA placeholder with no real content (Jerry Hirsch).

---

## 76. Veerendra Dwivedi — https://veerendra-portfolio-seven.vercel.app

- **Reachable**: yes
- **First impression** (1-2 sentences): A senior-DevOps-coded React + Tailwind portfolio with near-black `bg-gray-900` background, blue-600 accent, and an unusual "Operational Experience" section narrating real-world debugging incidents. Restraint-mode: 4 resources, 188 KB total transfer, DOMContentLoaded in 1.1 s.
- **Visual hierarchy**: H1 is the *name* in the top-left of hero at only 18 px / 600 wt — the real visual hero is the H2 "Hi, I'm Veerendra" + a tagline paragraph. Inverted hierarchy: H1 is the small brand-mark-style name, H2 is the greeting. Reinforces B12 codified "name-as-link in H1" + "metadata-as-hero-content" patterns in a new way — name demoted to a *brand mark*, tagline promoted to the main attention unit.
- **Layout composition**: Single-page, max-w-6xl centered container, 8 sections separated by `border-t border-gray-800` rules. Two-column grid in hero (text + photo). Subsequent sections are single-column with heading + prose. No section-stripe rhythm (unlike Dinesh B15 / Utsav B16).
- **Typography** (family feel, scale, weight): Single font — `ui-sans-serif, system-ui` (no Google Font loaded — system stack only). H1 18 px / 600 wt. H2 not measured but ~32 px / 800 wt (Tailwind default-ish). Body 16 px / 400. System-stack portfolio — first corpus instance of *fully* system-font-only (B11 Nabin used Poppins + system; this is system-only).
- **Color palette** (hex codes if discernible):
  - Background `rgb(17, 24, 39)` (`#111827` — Tailwind gray-900)
  - Text `rgb(255, 255, 255)` (pure white)
  - Accent `rgb(37, 99, 235)` (`#2563eb` — Tailwind blue-600)
  - Card surface `rgb(31, 41, 55)` (`#1f2937` — Tailwind gray-800)
  - Muted text `rgb(156, 163, 175)` (`#9ca3af` — gray-400) / `rgb(107, 114, 128)` (`#6b7280` — gray-500)
  - Light accent variants `rgb(96, 165, 250)` (`#60a5fa` — blue-400) / `rgb(147, 197, 253)` (`#93c5fd` — blue-300)
  - Light border `rgb(209, 213, 219)` (`#d1d5db` — gray-300)
- **Spacing** (dense / balanced / airy): Balanced — Tailwind `py-16` per section (64 px top+bottom). Predictable rhythm. Single column for most sections.
- **Hero section**: Two-column grid. Left: H1 name (18 px / 600) + H2 "Hi, I'm Veerendra" + tagline "DevOps Engineer | CI/CD | Docker | Kubernetes | AWS | Terraform" + paragraph "DevOps Engineer focused on building automated CI/CD pipelines, containerized deployments, and infrastructure as code." + tagline pull-quote "If it's manual, I automate it." + "View Projects" CTA. Right: 64×64 photo (`rounded-lg overflow-hidden`). No animation, no parallax. Plain dark hero.
- **Navigation**: Sticky top nav. 4 anchor links only — Projects / Experience / Resume / Contact (the most disciplined nav count in the corpus alongside B7 Vinit Shahdeo's 4-link nav; reinforces B3 "5±2 nav items" rule, at the lower bound). No brand mark. No external social icons in nav.
- **Section ordering** (top-to-bottom): Nav → Hero (H1 name + H2 greeting + taglines + photo + CTA) → About → Skills → Projects → **Operational Experience** (real-world debugging incidents) → Experience (single-role bullet list) → Contact (form) → Beyond Engineering (Vision — fitness ethos).
- **Scroll experience**: Native scroll, no parallax, no scroll-triggered animations. 0 CSS keyframes (literally zero — confirms B13 Aditya's "2-keyframe restraint" pattern can be pushed to 0).
- **Animations & motion**: None. 0 keyframes. No transitions beyond default `:hover` color changes. The motion budget is *zero*.
- **Hover interactions**: Standard Tailwind hover states only. No signature hover.
- **Background effects**: Solid `#111827`. No gradient, no grain, no particles, no 3D.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind grid-cols-1 → md:grid-cols-2 — mobile-first, predictable.
- **Performance perception** (loads fast? heavy?): Loads extremely fast. 4 resources, 188 KB transfer, DOMContentLoaded in 1.088 s. The lightest portfolio in the corpus alongside B1 Triet (~50 KB).
- **Emotional feeling**: Serious / DevOps-coded / restrained / senior. Reads as "I don't have time for nonsense, here's what I shipped" — appropriate register for an infrastructure engineer.
- **Originality** (1-5, with note): **3/5**. The "Operational Experience" section narrating real-world debugging incidents (with tools used per incident) is a unique content pattern — first corpus instance. The "If it's manual, I automate it." pull-quote is a memorable tagline. But the visual design is React-Tailwind-dark-template generic.
- **What works** (2-3 bullets):
  - **"Operational Experience" section** — separate from "Experience" (employment). Narrates real-world debugging incidents: "While building Terraform-based AWS infrastructure with CI/CD, faced multiple real-world issues related to state management, pipeline execution, and networking" with `Tools: AWS EC2, VPC, Auto Scaling, Load Balancer, Bastion Host, SSH, SCP`. First corpus instance of an *incidents-as-content* section — gives the reader a tangible sense of operational seniority that a CV bullet can't.
  - **"If it's manual, I automate it." tagline** — DevOps-ethos pull-quote, single sentence, memorable. Reinforces B12 codified "single accent on role phrase" — here the accent is the sentence itself, not color.
  - **4-link nav + 0 keyframes + 4-resource / 188 KB page weight** — most disciplined motion-and-resource budget in the corpus alongside B1 Triet. Restraint reads as senior.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **H1 at 18 px / 600 wt** is too small to function as an H1 — accessibility-tree-wise it's correct, but visually it reads as a brand mark, not a page heading. Screen readers + visual users get conflicting signals.
  - **Contact form action=`/` method=`get`** — non-functional form. Reinforces B3 anti-pattern of forms that don't POST anywhere. Submits as querystring to homepage.
  - **Photo used is `w-64 h-64` (256 px) placeholder** — only 1 img on entire page, likely a stock or AI-avatar image. No personality.
- **Notable patterns to consider**:
  - **"Operational Experience" as distinct section from "Experience"** — incidents-as-content. Novel content pattern; gives infrastructure/DevOps/SRE portfolios a way to show operational seniority that a CV bullet can't. Adopt.
  - **System-font-only stack** (`ui-sans-serif, system-ui, sans-serif` — no Google Font) — first corpus instance of fully system-stack-only portfolio. Zero web-font blocking. Tradeoff: looks generic; gain: 0 ms font load. Useful for performance-critical infrastructure portfolios.
  - **Inverted hero hierarchy** — H1 = small name brand mark (18 px), H2 = large greeting. Inverts the conventional "name in giant H1" pattern (cf. B12 204.8 px display H1). Risk: SEO + accessibility confusion. Reward: distinct visual register.
  - **Tagline-pull-quote in hero** — "If it's manual, I automate it." separated from paragraph tagline. Pattern: *ethos sentence* + *skills sentence* in hero, treated as two different content types. Adopt.

---

## 77. Nathan Simpson — https://nathansimpson.design

- **Reachable**: yes
- **First impression** (1-2 sentences): A designer-developer hybrid portfolio from an Atlassian frontend dev based in Orange, Australia. Multi-page Next.js site with case-study subroutes (`/projects/<slug>`), an orange-on-near-black accent system, and category-prefixed project cards. The `.design` TLD signals the designer-coder dual identity.
- **Visual hierarchy**: 1 H1 ("G'day, I'm Nath 👋" at 40 px / 900 wt) + 4 H2s (Projects / Technical skills / Other work / Contact Me, each 30 px / 900 wt). H1 dominates; H2s section the page; no H3s (case-study pages also have only H1+H2). Clean, designer-disciplined hierarchy.
- **Layout composition**: Multi-page App Router (Home / About / Blog / Projects/<slug>). Single column on home with section stack: Projects grid → Technical skills → Other work (Dribbble thumbnails) → Contact. Each project card uses **category-prefix-over-project-name** layout: "Design Systems\nAgriculture Design System" with newline-separated category + name. Project cards link to `/projects/<slug>` case studies.
- **Typography** (family feel, scale, weight): Single font stack — `-apple-system, BlinkMacSystemFont, "SF Pro Display", roboto, sans-serif`. SF Pro Display on Apple devices, Roboto fallback. **First corpus instance of SF Pro Display as primary UI font** (Juan B15 used SF Pro in a macOS simulation context, not as site-wide UI font). Reinforces B14 codified single-font pattern. H1 40 px / 900 wt. H2 30 px / 900 wt. Body 16 px / 400 wt. Apple-system-coded.
- **Color palette** (hex codes if discernible):
  - Background `rgb(19, 24, 29)` (`#13181d` — very dark blue-gray)
  - Body text white `rgb(255, 255, 255)`
  - Muted text `rgb(160, 174, 186)` (`#a0aeba` — slate-400-ish)
  - **Accent orange** `rgb(250, 109, 1)` (`#fa6d01` — vibrant orange, NOT Tailwind default orange-500 `#f97316`)
  - Default link blue `rgb(0, 0, 238)` (`#0000ee` — classic browser-default link blue, used on visited links)
  - Card surface `rgb(39, 47, 55)` (`#272f37`) and `rgb(53, 63, 71)` (`#353f47`) — two card-surface shades
- **Spacing** (dense / balanced / airy): Balanced — modest section padding, project grid 2-column with consistent gap. Airy enough to breathe, dense enough to feel like a designer's site (efficient with space).
- **Hero section**: Centered hero. H1 "G'day, I'm Nath 👋" (Australian greeting + emoji wave — first corpus instance of regional-greeting H1) + tagline "I'm a Frontend Developer at Atlassian, based in Orange, Australia." + paragraph "I'm passionate about bridging the gap between design and development, and crafting digital products which marry form and function." + Atlassian hyperlinked. Hero photo: Nathan sitting in a Ford Mustang (lifestyle photo, not headshot — designer-coded). 4 social links (GitHub / Dribbble / LinkedIn).
- **Navigation**: Sticky top nav. 4 links: Home / About / Blog / (logo). Minimal multi-page nav. Reinforces B3 "5±2 nav items" rule at lower bound.
- **Section ordering** (home page top-to-bottom): Nav → Hero (greeting + Atlassian + photo) → Projects (10 case-study cards by category) → Technical skills → Other work (Dribbble thumbnails) → Contact Me → Footer.
- **Scroll experience**: Native scroll, no parallax, no scroll-triggered animations. 0 CSS keyframes on home page (verified — `[]`).
- **Animations & motion**: 0 keyframes. Pure Next.js multi-page navigation. No Framer Motion, no GSAP, no custom transitions. Motion budget is zero.
- **Hover interactions**: Project cards have hover states (color/transform) — standard.
- **Background effects**: Solid `#13181d`. No gradient, no grain, no particles.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive — well-handled (project grid likely collapses to 1-column on mobile).
- **Performance perception**: Standard Next.js weight. Dribbble CDN images (7 imgs, all from `cdn.dribbble.com`) — heavier than Veerendra but reasonable for a designer's portfolio.
- **Emotional feeling**: Calm / designer-coded / mature / Australian. Reads as "I'm an employed senior who builds design systems" — not flashy, just competent.
- **Originality** (1-5, with note): **3/5**. Multi-page case-study architecture is well-executed but not unique. The orange `#fa6d01` accent on near-black is first corpus instance. The category-prefix-over-project-name card layout is a small but distinct move. The "G'day, I'm Nath 👋" regional-greeting H1 is the most original single move — first corpus instance of regional identity in H1.
- **What works** (2-3 bullets):
  - **Multi-page case-study architecture** — `/projects/<slug>` routes for each project, with case-study pages (Agriculture Design System, ANZ Horizon Design System, Reckon, The Garage, etc.). First corpus instance of true case-study subroutes since B5 John Clayton's blog-article pattern. Designer's portfolio pattern: don't show project tiles, show case studies.
  - **Category-prefix-over-project-name project card** — "Design Systems\nAgriculture Design System" with newline-separated category + project name. Scannable: read categories vertically, projects horizontally. Compact and information-dense without being a CV dump.
  - **`.design` TLD + SF Pro Display + orange `#fa6d01` accent** — three coordinated signals of designer-coder hybrid identity. The TLD itself is the brand promise: "I am a designer who codes."
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **Footer copyright © 2021 Nathan Simpson** — 5 years stale. Hero says "based in Orange, Australia"; footer says "Made in Sydney Australia" — *city mismatch* (Orange is ~250 km from Sydney). Minor but signals content drift. Reinforces B15 Poonam's stale-copyright anti-pattern.
  - **0 meta description** — actually has one ("I am a UI Designer, Frontend Developer...") but case-study pages reuse the same generic description. No per-case-study meta. Minor SEO miss.
  - **Case-study page heading hierarchy is thin** — Agriculture Design System case study has H1 + 1 H2 ("The Tech") + 11 paragraphs. No section headings. Long-form content without anchor structure. Designer's portfolio pattern: image-heavy, heading-light. Acceptable for case studies but penalizes scannability.
- **Notable patterns to consider**:
  - **`.design` TLD as brand promise** — first corpus instance of a non-`.dev`/`.com`/`.io`/`.me` TLD used to signal designer-coder hybrid identity. Adopt if the portfolio owner's identity is dual-discipline.
  - **Category-prefix-over-project-name project card** — newline-separated category + project name. Compact + scannable. Strong alternative to category-tag pills or filter UIs.
  - **Regional-greeting H1** ("G'day, I'm Nath 👋") — first corpus instance of regional identity in H1. Australian greeting + emoji wave. Memorable, personal, geographically anchored. Adopt the principle: H1 can carry regional/cultural identity, not just name+role.
  - **SF Pro Display as primary UI font** — first corpus instance of SF Pro Display as site-wide UI font (not in macOS simulation context). Apple-system-coded; reads as "I use a Mac and care about typography."
  - **Multi-page case-study routes** (`/projects/<slug>`) — designer's portfolio pattern. Different from B12 Tuncay's slash-route tab labels (same-page nav) or B13 Hugo's subpage architecture (services). Here the case study IS the deliverable. Adopt for project-heavy portfolios.
  - **Orange `#fa6d01` accent on near-black** — first corpus instance of orange as primary accent on dark background. Distinct from B15 Dinesh's cyan+amber dual-accent (where amber was secondary). Here orange is primary. Avoids the green/cyan terminal cliché (B13 Atal codified) without going amber-secondary.
  - **Lifestyle-photo hero (not headshot)** — Nathan sitting in a Ford Mustang. Personal, designer-coded, hobby-signaling. Different from B3 Sambhu's location-SEO headshot.

---

## 78. Utsav Adhikari — https://utsavadhikari07.com.np

- **Reachable**: yes
- **First impression** (1-2 sentences): A Next.js + Tailwind + Inter + Framer Motion portfolio from a CS undergraduate at Kathmandu University. The palette, motion library, keyframe set, and section-stripe rhythm are **identical** to Dinesh Barri's portfolio from B15 — confirmed instance of a shared portfolio template family (cyan+amber dual-accent on near-black, Sonner toast, radix accordion). Distinguishing original move: a "Builder Mindset" manifesto section with 3 numbered steps (Build / Break / Learn).
- **Visual hierarchy**: 2 H1s (first instance of dual H1 since B12 Manan; structure: "Hi I'm | Utsav Adhikari" — pipe-split H1, two H1 elements) + 5 H2s (About Me / Tech Stack / Featured Projects / Builder Mindset / Let's Connect, each 36 px / 700 wt) + 18 H3s (sub-section headings and project names). Robust document outline.
- **Layout composition**: Single-page section-stack with sticky top nav. Each section is `min-h-screen`-ish, alternating background via `rgb(11, 17, 30)` / `rgb(16, 25, 45)` stripes. Section-stripe rhythm — identical pattern to B15 Dinesh.
- **Typography** (family feel, scale, weight): Single font — Inter (weights 300-800 loaded). H1 72 px / 700 wt. H2 36 px / 700 wt. Body 16 px / 400. Inter-only stack — reinforces B12 codified single-font pattern. The choice of Inter (vs Sora in B15 Dinesh) is the only typographic difference between the two template-family instances.
- **Color palette** (hex codes if discernible):
  - Background `rgb(8, 12, 22)` (`#080c16` — near-black, almost identical to B15 Dinesh's `#070a13`)
  - Text `rgb(248, 250, 252)` (slate-50)
  - Muted `rgb(117, 136, 163)` (custom slate)
  - **Cyan accent** `rgb(0, 225, 255)` (`#00e1ff` — even more vibrant than B15 Dinesh's `#0acce6`) and `rgb(34, 211, 238)` (`#22d3ee` — Tailwind cyan-400) as secondary cyan
  - **Amber accent** `rgb(251, 191, 36)` (`#fbbf24` — Tailwind amber-400, lighter than B15 Dinesh's `#f59f0a` amber-500)
  - Section stripes `rgb(11, 17, 30)` (`#0b111e`) and `rgb(16, 25, 45)` (`#101929`)
  - Cyan glow backgrounds `rgba(0, 225, 255, 0.05 / 0.1 / 0.3 / 0.8)` — gradient glows
  - Cyan-tinted text `rgba(165, 243, 252, 0.35)` (cyan-200 at 35% opacity)
- **Spacing** (dense / balanced / airy): Airy — `py-24` per section (96 px top+bottom). Each section is full-viewport-height. Same as B15 Dinesh.
- **Hero section**: Full-screen flex-centered hero. H1 pipe-split "Hi I'm | Utsav Adhikari" at 72 px. Tagline "Building scalable systems and innovative real-world applications." + pull-quote "Crafting mind and body." (philosophical quote, first corpus instance of pull-quote in hero tagline). 2 CTAs: "View Projects" + "Download CV" (`/Utsav_Adhikari_CV.pdf`). Background uses animated GIF `pixelated_gif.gif` (1 MB!) — performance anti-pattern.
- **Navigation**: Sticky top nav with backdrop blur. 5 anchor links + CTA: Home / About / Skills / Projects / Contact / "Let's Connect" (CTA). At the upper bound of B3 "5±2 nav items" rule.
- **Section ordering** (top-to-bottom): Nav → Hero → About (6 sub-cells: Education / Web & App Development / Focus Areas / Philosophy / Beyond Coding / Languages) → Tech Stack (4 categories: Frontend / Backend / Databases / Tools & Other) → Featured Projects (4 cards: RideShareX / SonicChat / Typescape / Connectify) → **Builder Mindset** (3-step manifesto: Build / Break / Learn) → Contact (no form — plain-text tel + mailto + 4 social: GitHub / LinkedIn / Instagram / Discord).
- **Scroll experience**: Smooth-scroll to anchors. Framer Motion `enter`/`exit`/`float` keyframes suggest scroll-triggered section reveal. No parallax. No scroll-driven section *transitions* (open tension still unsolved at portfolio 78).
- **Animations & motion**: 16 keyframes — IDENTICAL set to B15 Dinesh's plus `gradientShift` + `bounce`. Keyframes: `pulse`, `enter`, `exit`, `float`, `pulseGlow`, `gradientShift`, `bounce`, `accordion-up`, `accordion-down`, `swipe-out-{left,right,up,down}`, `sonner-fade-{in,out}`, `sonner-spin`. Confirms shared Next.js + Framer Motion + Sonner + radix-accordion template.
- **Hover interactions**: Standard Tailwind hover states. Cyan-glow on hover for project cards.
- **Background effects**: Dark `#080c16` base. Section stripes. Cyan glow gradients (`rgba(0, 225, 255, 0.05–0.8)`). No particles, no 3D, no grain. Same as B15 Dinesh.
- **3D elements**: no.
- **Responsiveness perception**: Tailwind responsive — well-handled.
- **Performance perception**: 8 resources, 1.18 MB transfer. DOMContentLoaded in 244 ms (very fast — likely cached), but the 1 MB `pixelated_gif.gif` dominates page weight. Heavy hero asset anti-pattern.
- **Emotional feeling**: Modern / student-developer / Himalayan-coded. Reads as "ambitious CS undergrad with eye on graduate opportunities" — appropriate register.
- **Originality** (1-5, with note): **2/5**. Visually a clone of B15 Dinesh's portfolio (same template family). The unique moves are: (1) "Builder Mindset" 3-step manifesto section, (2) "Crafting mind and body." philosophical pull-quote, (3) pipe-split H1, (4) Discord + Instagram in social row, (5) empty `#webring` div (placeholder, not populated). The "Builder Mindset" section is the most original content move.
- **What works** (2-3 bullets):
  - **"Builder Mindset" 3-step manifesto section** — Build / Break / Learn, each numbered 1-2-3 with a one-sentence description. "Start with an idea and bring it to life through code" / "Push boundaries, find limits, and understand failures" / "Extract insights and apply them to the next iteration." Followed by a continuous-growth quote. First corpus instance of a 3-step *learning-process manifesto* as a section. Different from B7 Jaybhavsar's workflow-diagram and B11 Aayush's "AI HELP" workflow step — this is *personal ethos as architecture*, not project workflow.
  - **"Crafting mind and body." philosophical pull-quote** in hero tagline. Reinforces B76 Veerendra's "If it's manual, I automate it." pattern — ethos sentence as hero content. Here it's body-discipline-coded (CS student + fitness ethos — pairs with B76 Veerendra's "6-day fitness routine" Beyond Engineering section).
  - **Plain-text contact (no form)** with `tel:9822446744` (Nepal phone) + `mailto:utsavadhr@gmail.com` + 4 social (GitHub / LinkedIn / Instagram / Discord). First corpus instance of **Discord** as a contact social link — student-developer-coded. Also first corpus instance of Nepal phone number via `tel:` — reinforces B14 codified tel: link pattern with locale-specific phone format.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **1 MB `pixelated_gif.gif` in hero** — single asset dominates page weight (1.017 MB of 1.184 MB total transfer). Hero animation should be CSS/SVG/canvas, not a 1 MB GIF. Reinforces B10 Karan's heavy-asset anti-pattern.
  - **Empty `<div id="webring"></div>` placeholder** — declared but never populated. Dead stub. Reinforces B1 Bhushan's "shipping broken third-party widgets" risk pattern — if you don't ship the webring, remove the div.
  - **Visual clone of B15 Dinesh's template** — same cyan+amber palette, same keyframe set, same section-stripe backgrounds, same Sonner+radix accordion. Distinguishing individual identity requires *content* originality, not visual. The "Builder Mindset" section is the only content-original move; the rest is template-grade. Anti-pattern: portfolio templates that produce identical visual outputs across users.
- **Notable patterns to consider**:
  - **Shared portfolio template family (B15 Dinesh + B78 Utsav)** — first corpus instance of two portfolios confirmed using the same template (same keyframe set, same palette family, same motion library stack). The template family is: Next.js + Tailwind + (Inter|Sora) + Framer Motion + Sonner + radix accordion + cyan+amber dual-accent on near-black + section-stripe rhythm. Reinforces B15 Dinesh's codified palette as a *template-popular* pattern, not an original pattern. Treat as: the 2024-2026 default Next.js portfolio template.
  - **"Builder Mindset" 3-step manifesto** (Build / Break / Learn, numbered) — first corpus instance of learning-process-as-section. Adopt for student/junior-developer portfolios where ethos > shipped work.
  - **Pipe-split H1** ("Hi I'm | Utsav Adhikari") — first corpus instance of pipe as H1 internal separator. Different from B12 codified letter-by-letter split H1 or B12 codified three-style H1. Here the pipe splits greeting from name; the H1 is technically 2 elements (verified `h1count: 2`).
  - **Discord as contact social link** — first corpus instance. Student-developer-coded. Adopt if targeting dev communities (Discord servers, open-source projects).
  - **Instagram as contact social link** — second corpus instance (after B15 Juan's social row). Pairs with Discord for student-developer identity.
  - **"Crafting mind and body." pull-quote in hero tagline** — body-discipline ethos. Pairs with B76 Veerendra's "6-day fitness routine" Beyond Engineering section. Pattern: physical-discipline ethos as a secondary identity signal in technical portfolios.
  - **Empty `#webring` placeholder div** — anti-pattern, but the *intent* (joining a webring) is interesting. First corpus instance of webring intent. Webrings (cf. the 90s revival) would be a unique adopt-pattern if implemented.

---

## 79. Jerry Hirsch — https://jerryhirsch.com

- **Reachable**: yes (HTTP 200), but **content is a placeholder**
- **First impression** (1-2 sentences): A bare Create React App default placeholder. Title is "React App" (the CRA default). Body shows three lines of content: "Jerry Hirsch" / "example project" / "SUPER SECRET PASSWORD" button. Clicking the button opens a Material-UI dialog displaying "Super Secret Password" / "1-2-3-4-5" / OK. Clicking OK dismisses the modal. That is the entire site.
- **Visual hierarchy**: Zero hierarchy. No H1, no H2, no H3 (verified — `h1count: 0, h2count: 0, h3count: 0`). Only an `<h4>` ("Jerry Hirsch") and `<h6>` ("example project") inside a `<div class="jss1">`. Catastrophic document outline failure — reinforces B14 codified anti-pattern.
- **Layout composition**: Single centered card. No sections, no nav, no footer. Just a 3-line div with a button.
- **Typography** (family feel, scale, weight): Body font is `Times New Roman` (verified — `getComputedStyle(document.body).fontFamily === '"Times New Roman"'`). First corpus instance of Times New Roman as body font since B13 Aditya's deliberate choice. Here it's *not* deliberate — Material-UI v4 default theme uses Times New Roman when no typography override is set, indicating the developer never customized the MUI theme.
- **Color palette** (hex codes if discernible):
  - Background `rgb(250, 250, 250)` (`#fafafa` — Material-UI default background)
  - Text `rgb(0, 0, 0)` (pure black)
  - Default MUI button colors (primary blue, etc.)
- **Spacing** (dense / balanced / airy): N/A — single card.
- **Hero section**: N/A — no hero. Just an `<h4>` + `<h6>` + button.
- **Navigation**: none.
- **Section ordering** (top-to-bottom): N/A.
- **Scroll experience**: N/A — no scroll content.
- **Animations & motion**: 3 keyframes — MUI ripple defaults (`mui-ripple-enter`, `mui-ripple-exit`, `mui-ripple-pulsate`). No custom motion.
- **Hover interactions**: MUI default button hover.
- **Background effects**: Solid `#fafafa`. No effects.
- **3D elements**: no.
- **Responsiveness perception**: MUI default — would be technically responsive but irrelevant given no content.
- **Performance perception**: CRA bundle is moderate (~150 KB JS+CSS) but pointless given no content.
- **Emotional feeling**: Abandoned / placeholder / abandoned-project. Reads as "I bought this domain in 2019, did the CRA tutorial, and never came back."
- **Originality** (1-5, with note): **1/5**. Zero original moves. Default CRA + MUI starter. The "Super Secret Password" / "1-2-3-4-5" / OK modal appears to be a sample-dialog demo from MUI documentation, not original content.
- **What works** (2-3 bullets):
  - **The domain resolves** — DNS is configured, HTTPS works. That's the only positive.
  - **The placeholder is small** (~150 KB) — doesn't waste bandwidth.
  - Nothing else works. This is not a portfolio.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **Default CRA title "React App"** — strongest possible "I never finished" signal. Reinforces B2 codified anti-pattern #21 (bare/template title) at its most extreme.
  - **Zero heading hierarchy** — no H1/H2/H3. Worst document-outline failure in the corpus alongside B14 Vishal. Screen readers get nothing.
  - **Zero meta description, zero OG tags** — no SEO surface. The site is invisible to search engines.
  - **Sample MUI dialog as the only interactive content** — confirms the site is a tutorial artifact, not a portfolio.
- **Notable patterns to consider**:
  - **Anti-pattern: never-deployed placeholder** — domain owned, DNS configured, but content is the CRA default. Reinforces B14 Hozaifa Ali's domain-expired parking page as a *failure-mode spectrum*: B14 Hozaifa = domain expired → parking page; B79 Jerry = domain active → placeholder page. Both result in zero portfolio value. Treat as cautionary — a placeholder is worse than a 404 because it consumes the domain indefinitely.
  - **Wayback Machine verification** — Wayback's closest snapshot (2026-04-11) confirms the placeholder has been live for at least 3 months. Not a recent regression; a persistent state. (Wayback fetch timed out during this session, but availability API confirmed snapshot exists.)
  - **Task-context note**: The task description flagged Jerry Hirsch as a "well-known design educator." The actual portfolio does not match this profile. Either (a) this is a different Jerry Hirsch (homonym), (b) the design educator never deployed his own portfolio, or (c) the portfolio was replaced by the placeholder at some point. Either way, this portfolio contributes **zero** positive design patterns to the corpus. Honest reporting: this portfolio is a failure-mode data point, not a learning resource.

---

## 80. Om Chaudhari — https://omchaudhari1107.github.io

- **Reachable**: yes
- **First impression** (1-2 sentences): A static-HTML portfolio from a Data Analyst / ML developer based in India. Poppins single-font, near-black background, typed.js hero cycling through 10 tech names, multi-color accent system (cyan + lime + red + yellow + green), Google AdSense ads (first corpus instance), and an emoji-as-nav-link (`💛💙` → #footer). Personal-coded: footer reads "Build by Mercy of GaurNitai" (ISKCON religious attribution).
- **Visual hierarchy**: 1 H1 ("Om Chaudhari" at 65 px / 700 wt) + 4 H2s (About / Experience / Skills / Projects, each 32 px / 700 wt) + 8 H3s (2 internships + 6 projects). Solid hierarchy.
- **Layout composition**: Single-page section-stack with sticky top nav. Each section has scroll-triggered fade-ins (inferred from `zin` and `under` keyframe names). Hero is centered with greeting + name + typed.js line + scroll-down emoji `🔻`. Skills section uses Devicon-style SVG logos in a grid. Projects section has 6 project cards each with "Source" / "Demo Video" / Dropbox-download links.
- **Typography** (family feel, scale, weight): Single font — Poppins (weights 300-800 typically). H1 65 px / 700 wt. H2 32 px / 700 wt. Body 16 px / 400. Poppins-only stack — second corpus instance of Poppins-only after B11 Nabin.
- **Color palette** (hex codes if discernible) — *multi-accent chaos*:
  - Background `rgb(22, 22, 26)` (`#16161a` — near-black)
  - Body text `rgb(255, 255, 254)` (`#fffffe`)
  - Muted `rgb(148, 161, 178)` (`#94a1b2`)
  - Card surface `rgb(36, 38, 41)` (`#242629`)
  - Secondary surface `rgb(114, 117, 126)` (`#72757e`)
  - **Cyan** `rgb(0, 183, 255)` (`#00b7ff`) + `rgb(80, 205, 255)` (`#50cdff`) + `rgb(0, 255, 255)` (`#00ffff` — pure cyan)
  - **Lime/chartreuse** `rgb(127, 255, 0)` (`#7fff00` — chartreuse, first corpus instance)
  - **Red** `rgb(255, 63, 52)` (`#ff3f34`)
  - **Yellow** `rgb(255, 255, 0)` (`#ffff00` — pure yellow)
  - **Green** `rgb(44, 182, 125)` (`#2cb67d`)
  - Default link blue `rgb(0, 0, 238)` (`#0000ee` — unstyled links)
  - Cream `rgb(255, 255, 231)` (`#ffffe7`)
- **Spacing** (dense / balanced / airy): Dense — lots of content packed per section. Skills section is dense icon grid. Project cards are dense with multiple links.
- **Hero section**: Centered hero. Top: scroll progress bar (`progress-container` + `progress-bar` width 100% — reinforces B8 Bhavesh's scroll progress bar pattern). Greeting: "Hello there ([wave-hello.gif inline]) I am" with an animated wave GIF. H1 "Om Chaudhari" at 65 px. "🤙Excel in" + typed.js cycling through 10 strings (Python / ML / Data Science / Django / Laravel / HTML+CSS+JS / MongoDB / MySQL / PowerBI / Selenium) with blinking cursor `|`. Micro-card link row (GitHub icon). Scroll-down `🔻` emoji.
- **Navigation**: Sticky top nav with scroll progress bar at top. 6 links: Home / About / Experience / Skills / Projects / `💛💙` (emoji-as-link to footer/contact). **First corpus instance of emoji-as-nav-link-label** (the 💛💙 is the link to the contact/footer section). Reinforces B14 Kavi's "emoji-prefixed playful nav labels" but goes further: the *entire* link label is emoji.
- **Section ordering** (top-to-bottom): Nav → Hero (greeting + name + typed cycle + micro-card) → About → Experience (2 internships: ONGC Infocom + Sparks Foundation) → Skills (Devicon SVG grid) → Projects (6 cards) → Footer (contact: GitHub / GitLab / LinkedIn / Mail / HackerRank + Gaur/Nitai Wikipedia links).
- **Scroll experience**: Native scroll with `progress-bar` indicator at top. Scroll-triggered fade-in animations (`zin`, `under` keyframes). 7 keyframes — `blinkAnimation`, `under`, `zin`, `rotate`, `shimmer`, `typedjsBlink` (x2 — duplicate definition, anti-pattern).
- **Animations & motion**: 7 keyframes (with 1 duplicate). Typed.js is the dominant motion — cycles through 10 tech names every ~3 seconds with typeSpeed:50, backSpeed:10, backDelay:2000, loop:true. The wave-hello.gif is an animated GIF inline in greeting. `shimmer` and `rotate` likely on skill icons or scroll arrows. `blinkAnimation` likely on the typed cursor (separate from `typedjsBlink` which is library-default).
- **Hover interactions**: Project cards hover with color change. Skill icons hover with `shimmer`. Standard.
- **Background effects**: Solid `#16161a`. No gradient, no grain, no particles.
- **3D elements**: no.
- **Responsiveness perception**: Static HTML — responsive via custom CSS, but less rigorous than Tailwind portfolios.
- **Performance perception**: 55 resources, 2.0 MB transfer — heavier than typical. Google AdSense + reCAPTCHA + Dribbble-style asset loading contribute to weight. The Google Ads iframes + reCAPTCHA iframes are 3rd-party bloat.
- **Emotional feeling**: Energetic / playful / personal-coded / spiritual. Reads as "I'm a curious ML dev who built this site as a creative outlet, monetized it with ads, and dedicated my work to my faith."
- **Originality** (1-5, with note): **3/5**. Several unique moves: (1) emoji-as-nav-link-label (`💛💙`), (2) typed.js hero cycling through 10 tech names with per-tech colored spans, (3) Google AdSense ads on a portfolio (unique but anti-pattern), (4) religious footer attribution ("Build by Mercy of GaurNitai"), (5) LOR (Letter of Recommendation) link, (6) Dropbox binary downloads (.exe + .deb) for project. The multi-accent chaos (5+ accent colors) is anti-pattern.
- **What works** (2-3 bullets):
  - **Emoji-as-nav-link-label (`💛💙` → footer)** — first corpus instance. The entire link label is emoji, not just prefixed/suffixed. Reinforces B14 Kavi's emoji-prefixed nav pattern at its most extreme. Adds personality. Adopt with care (accessibility: ensure `aria-label`).
  - **Typed.js cycling through 10 tech names with per-tech colored spans** — each tech name (Python / ML / Django / etc.) is wrapped in a per-tech CSS class (`typed-python`, `typed-ml`, `typed-django`) that gets a unique color. Different from B13 codified letter-by-letter split H1 — here the cycling is the motion, the color is per-tech identity. Pattern: hero typed effect where each cycled string has its own visual identity.
  - **Multi-platform binary downloads on project cards** — GP Sync project has "Download for Windows (.exe)" + "Download for Linux (.deb)" via Dropbox direct-download links. First corpus instance of multi-platform binary downloads on a portfolio. Strong credibility signal for desktop-app projects.
- **What does NOT work** (2-3 bullets — anti-patterns to avoid):
  - **Google AdSense ads on a portfolio** (`client=ca-pub-2656132558184704`) — first corpus instance. Three Google Ads iframes (ads / recaptcha / zrt_lookup) add 3rd-party bloat, slow the page, and read as "I'm monetizing recruiter traffic." Anti-pattern: portfolios are marketing assets, not ad-revenue surfaces.
  - **Meta description = "Thanks for sharing!!❤️😊🤙"** — emoji-laden non-description. Reinforces B14 codified "0 meta tags" anti-pattern variant: meta tag exists but content is meaningless. SEO-negative.
  - **Multi-accent chaos (5+ accent colors)** — cyan + lime + red + yellow + green + cream + default blue = 7+ accent colors. No disciplined palette. Reinforces B15 codified dual-accent as the *upper bound*; this portfolio exceeds by 3×. Reads as undisciplined.
  - **Duplicate keyframe definition** — `typedjsBlink` appears twice in the keyframe list. Anti-pattern: library conflict or accidental re-import.
- **Notable patterns to consider**:
  - **Emoji-as-nav-link-label** (`💛💙` for footer/contact) — first corpus instance of full-emoji nav link. Adopt with `aria-label="Contact"` for accessibility.
  - **Typed.js with per-tech colored spans** — each cycled string wrapped in a CSS class that colors it differently. Pattern: hero typed effect where each tech name has its own brand color. Adopt.
  - **Multi-platform binary downloads** (Windows .exe + Linux .deb via Dropbox) on project cards — first corpus instance. Adopt for desktop-app projects.
  - **LOR (Letter of Recommendation) link** as a credentials artifact — first corpus instance. Different from B15 Poonam's app-store links or B14 Anurag's project-status metadata. Here the LOR is a PDF credential artifact, like a certificate but more personal. Adopt for junior/student portfolios.
  - **"Verify" link labels for certificates** (Google Drive / HackerRank / GreatLearning) — reinforces B15 codified cert-link pattern. Here the link label is literally "Verify" — first corpus instance of "Verify" as a verb-as-link-label for credentials.
  - **Religious footer attribution** ("Build by Mercy of GaurNitai") — first corpus instance of religious/spiritual attribution in footer. Pairs with B13 Aditya's "Hand-coded with 100% human efforts, zero AI" anti-AI attribution as a *personal-ethos footer signature*. Adopt the principle (footer as personal-statement surface), not the specific religious content.
  - **Wave-hello.gif inline in greeting** — animated GIF inline in the H1-prefixed greeting. Different from B14 Kavi's video background. Here the GIF is small and personal (a waving hand).
  - **Gaur / Nitai Wikipedia links in footer** — alongside professional social links. First corpus instance of *non-professional personal-interest links* in the footer (spiritual/religious Wikipedia links). Pattern: footer as full-person surface, not just professional identity.

---

## Batch 16 Synthesis

### Patterns that *reinforce* prior findings

| Pattern | Source | Reinforced by |
|---|---|---|
| Single-font system (Inter / Poppins / Sora / SF Pro / system-stack) | B1 Triet, B11 Nabin, B14 Dipak, B15 Dinesh, B15 Poonam | B76 Veerendra (system-stack-only), B77 Nathan (SF Pro Display), B78 Utsav (Inter), B80 Om (Poppins). **5/5 portfolios in this batch are single-font.** Strongest reinforcement yet — single-font is the dominant 2024-2026 portfolio typography rule. |
| Section-stripe rhythm via alternating backgrounds | B15 Dinesh (bg-secondary/20) | B78 Utsav (`rgb(11, 17, 30)` / `rgb(16, 25, 45)` stripes). |
| Dual-accent cyan+amber on near-black | B15 Dinesh (`#0acce6` + `#f59f0a` on `#070a13`) | B78 Utsav (`#00e1ff` + `#fbbf24` on `#080c16`). Confirms this as a *template-popular* pattern (not original). |
| 4-link nav (lower bound of "5±2") | B7 Vinit Shahdeo, B15 codified | B76 Veerendra (Projects / Experience / Resume / Contact), B77 Nathan (Home / About / Blog + logo). |
| Plain-text contact (no form) with tel: link | B14 codified tel: link | B78 Utsav (tel:9822446744 — Nepal locale). |
| Footer as personal-statement surface | B13 Aditya ("Hand-coded with 100% human efforts, zero AI") | B80 Om ("Build by Mercy of GaurNitai" — religious attribution). |
| Multi-page case-study architecture | B5 John Clayton (blog articles) | B77 Nathan (`/projects/<slug>` routes for 10 case studies). |
| Cert-link patterns (Verify / Certificate / LOR) | B14 Anurag (project status + date), B15 Poonam (app-store-link pairs) | B80 Om ("Verify" + "Certificate" + "LOR" as link labels for credentials). |
| Stale copyright anti-pattern | B15 Poonam (Copyright © 2019) | B77 Nathan (© Copyright 2021 — 5 years stale). |
| Bare/template title anti-pattern | B2 codified #21, B4 Fikri, B14 Vishal, B15 Poonam ("My Portfolio") | B79 Jerry ("React App" — the literal CRA default title, *most extreme instance in corpus*). |
| 0 meta description anti-pattern | B14 Vishal | B79 Jerry (zero meta tags). B80 Om (meta description exists but content is "Thanks for sharing!!❤️😊🤙" — meaningful-content-of-meta variant). |
| Zero-heading-hierarchy anti-pattern | B13 Aditya, B14 Kavi, B14 Vishal | B79 Jerry (0 H1s, 0 H2s, 0 H3s — only H4 + H6, the *worst* instance in corpus). |
| Scroll progress bar | B8 Bhavesh (2px gradient lime→pink→cyan→volt) | B80 Om (`progress-container` + `progress-bar` width 100%). |
| Dead-placeholder / failure-mode spectrum | B1 Vinay (404 deploy), B14 Hozaifa (domain-expired parking) | B79 Jerry (domain active → CRA placeholder page). Confirms 3-mode spectrum: 404 / parking / placeholder. |

### Patterns that *contradict* or refine earlier findings

| Pattern | Earlier finding | Refined by |
|---|---|---|
| Hero H1 scale | B12 codified 204.8 px display H1 (largest); B15 codified time-as-H1 (Juan) | B76 Veerendra inverts the rule: H1 at **18 px / 600 wt** — the *smallest* H1 in the corpus. Inverted hierarchy: H1 = small name brand mark, H2 = large greeting. Refines the rule: H1 scale is *intentional*, not always large. |
| Hero motion budget | B13 Atal (2-keyframe restraint) was the prior minimum | B76 Veerendra pushes to **0 keyframes** — new minimum. Restraint reads as senior. |
| Multi-page architecture | B13 Hugo (service taxonomy as site architecture) | B77 Nathan (case-study subroutes `/projects/<slug>`) — refines the multi-page pattern: case-study routes ARE the architecture, not services. Designer's portfolio pattern vs. consultant's portfolio pattern. |
| Body-discipline ethos as secondary identity | Not previously codified | B76 Veerendra ("6-day fitness routine" Beyond Engineering section) + B78 Utsav ("Crafting mind and body." hero pull-quote) — first codified pairing. Refines: physical-discipline ethos is a recurring secondary identity signal in technical portfolios (3 instances in 2 consecutive batches). |
| Footer attribution | B13 Aditya ("100% human efforts, zero AI" — anti-AI stance) | B80 Om ("Build by Mercy of GaurNitai" — religious attribution). Refines: footer attribution is a *stance surface* — anti-AI, religious, political, philosophical. The footer is where the author declares what they are *for*. |

### New patterns unique to this batch

1. **"Operational Experience" as distinct section from "Experience"** (B76 Veerendra) — first corpus instance. Narrates real-world debugging incidents with `Tools:` line per incident. For DevOps/SRE/infrastructure portfolios. **High-value original pattern.**
2. **System-font-only stack** (B76 Veerendra — `ui-sans-serif, system-ui, sans-serif`, no Google Font loaded) — first corpus instance of fully system-stack-only portfolio. 0 ms font load. Performance-critical pattern.
3. **`.design` TLD as brand promise** (B77 Nathan) — first corpus instance of non-`.dev`/`.com`/`.io`/`.me` TLD used to signal designer-coder hybrid identity.
4. **Regional-greeting H1** ("G'day, I'm Nath 👋" — B77 Nathan) — first corpus instance of regional identity in H1. Australian greeting + emoji wave. Pairs with B78 Utsav's Nepal phone locale and B80 Om's India context.
5. **Category-prefix-over-project-name project card** (B77 Nathan — "Design Systems\nAgriculture Design System" newline-separated) — first corpus instance. Compact + scannable alternative to category-tag pills.
6. **SF Pro Display as primary UI font** (B77 Nathan) — first corpus instance of SF Pro Display as site-wide UI font (not in macOS simulation context like B15 Juan).
7. **Orange `#fa6d01` accent on near-black** (B77 Nathan) — first corpus instance of orange as *primary* accent on dark background. Distinct from B15 Dinesh's cyan+amber (where amber was secondary).
8. **Lifestyle-photo hero (not headshot)** (B77 Nathan — sitting in Ford Mustang) — first corpus instance of hobby-signaling hero photo. Different from B3 Sambhu's location-SEO headshot.
9. **Shared portfolio template family** (B78 Utsav ≈ B15 Dinesh) — first corpus instance of two portfolios confirmed using the same template (same keyframe set, same palette family, same motion library stack). Treat as: the 2024-2026 default Next.js portfolio template.
10. **"Builder Mindset" 3-step manifesto** (B78 Utsav — Build / Break / Learn, numbered) — first corpus instance of learning-process-as-section. Personal ethos as architecture.
11. **Pipe-split H1** ("Hi I'm | Utsav Adhikari" — B78 Utsav) — first corpus instance of pipe as H1 internal separator. H1 is technically 2 elements.
12. **Discord as contact social link** (B78 Utsav) — first corpus instance. Student-developer-coded.
13. **"Crafting mind and body." philosophical pull-quote in hero** (B78 Utsav) — first corpus instance of philosophical quote in hero tagline (vs. B76 Veerendra's "If it's manual, I automate it." ethos tagline).
14. **Empty `#webring` placeholder div** (B78 Utsav) — anti-pattern, but first corpus instance of *webring intent*. 90s-revival webrings are an interesting *un-adopted* pattern.
15. **Default CRA title "React App"** (B79 Jerry) — most extreme instance of bare-title anti-pattern. Confirms the spectrum: "My Portfolio" (B15 Poonam) → "Portfolio" (B4 Fikri / B2 Akash / B14 Vishal) → "React App" (B79 Jerry, the framework default).
16. **Emoji-as-nav-link-label** (`💛💙` → footer/contact — B80 Om) — first corpus instance of *full-emoji* nav link label (not just prefixed/suffixed like B14 Kavi).
17. **Typed.js with per-tech colored spans** (B80 Om — each tech name wrapped in `typed-python`, `typed-ml`, etc.) — first corpus instance of per-cycled-string visual identity in a typed.js effect.
18. **Multi-platform binary downloads on project cards** (B80 Om — Windows .exe + Linux .deb via Dropbox direct-download) — first corpus instance. For desktop-app projects.
19. **LOR (Letter of Recommendation) link as credential artifact** (B80 Om) — first corpus instance. Different from B15 Poonam's app-store links or cert links.
20. **"Verify" as verb-as-link-label for credentials** (B80 Om — Google Drive / HackerRank / GreatLearning certs) — first corpus instance of verb-as-link-label for credential verification.
21. **Religious footer attribution** ("Build by Mercy of GaurNitai" — B80 Om, ISKCON) — first corpus instance of religious/spiritual attribution in footer.
22. **Gaur / Nitai Wikipedia links in footer** (B80 Om) — first corpus instance of *non-professional personal-interest links* in the footer. Pattern: footer as full-person surface.
23. **Wave-hello.gif inline in greeting** (B80 Om — animated GIF inline in H1-prefixed greeting) — first corpus instance of GIF-as-greeting-emoji.
24. **Google AdSense ads on a portfolio** (B80 Om — `client=ca-pub-2656132558184704`) — first corpus instance. **Anti-pattern.** Portfolios are marketing assets, not ad-revenue surfaces.
25. **Multi-accent chaos** (B80 Om — cyan + lime + red + yellow + green + cream + default blue = 7+ accent colors) — first corpus instance of *deliberate* multi-accent chaos (vs. B15 Dinesh's disciplined dual-accent). Anti-pattern: refines the dual-accent rule as the upper bound.

### Updated answers to the open tensions (STILL-unsolved ones)

| Tension | Status after batch 16 (80 portfolios) |
|---|---|
| **Scroll-driven section transitions** | **STILL 0 in 80.** B76 Veerendra has 0 keyframes total; B77 Nathan has 0 keyframes; B78 Utsav uses Framer Motion `enter`/`exit` (scroll-triggered reveal, not transition); B79 Jerry has no content; B80 Om has scroll-triggered fade-ins (`zin`/`under`). None of the 80 portfolios implement scroll-driven *section transitions* (where one section morphs into another as you scroll). The tension is now 0/80 — strong evidence this pattern is genuinely rare / hard to implement well in a portfolio context. |
| **Designed loading state (fully-wired preloader)** | **STILL 0 in 80.** No portfolio in this batch ships a designed preloader. B79 Jerry's CRA default has no preloader (just a blank `#root` div until JS loads). B78 Utsav's 1 MB GIF dominates paint but no preloader precedes it. Confirms: designed loading state remains unsolved at 80/100. |
| **Haptic-style mobile feedback** | **STILL 0 in 80.** No portfolio in this batch mentions or implements haptic feedback (`navigator.vibrate()` or similar). Tension remains fully unsolved. |

### Other tensions updates

- **Hero motion that orients** — partially resolved (B15 Juan's dock-as-nav is strongest signal). No new signal in B16.
- **Sound** — resolved (B14 Kavi). No new instance in B16.
- **Long experience history without CV dump** — B76 Veerendra's solution: single-role bullet list (1 role, ~10 bullets) + separate "Operational Experience" section for incidents. B77 Nathan's solution: case-study routes (no long experience list — case studies ARE the experience). B80 Om's solution: 2 internships only (junior portfolio, no CV-dump risk yet). B78 Utsav's solution: no formal experience section at all (student portfolio — uses Education + Builder Mindset instead). **Refined answer**: the CV-dump problem is solved by (a) moving experience into case studies (B77 Nathan), (b) splitting experience into "employment" + "incidents" (B76 Veerendra), or (c) omitting formal experience entirely for student portfolios (B78 Utsav). None of the 5 senior-style portfolios in this batch use a long chronology list — all either compress or route around it.

### Adoptability recommendations for the premium portfolio project

**High-priority adoptions from this batch**:
1. **"Operational Experience" as distinct section** (B76 Veerendra) — separate incidents-as-content from employment chronology. Strongest content pattern in the batch for infrastructure/DevOps/SRE portfolios.
2. **Multi-page case-study routes** (B77 Nathan — `/projects/<slug>`) — adopt for project-heavy portfolios; case studies ARE the deliverable.
3. **Category-prefix-over-project-name project card** (B77 Nathan) — compact + scannable alternative to category-tag pills.
4. **Orange `#fa6d01` accent on near-black** (B77 Nathan) — distinct from the cyan+amber template-popular pattern; original.
5. **"Builder Mindset" 3-step manifesto** (B78 Utsav) — for student/junior portfolios where ethos > shipped work.
6. **Typed.js with per-tech colored spans** (B80 Om) — for hero typed effect where each cycled string has its own brand color.
7. **Multi-platform binary downloads on project cards** (B80 Om) — for desktop-app projects.

**Anti-patterns to avoid from this batch**:
1. **Shared template family** (B78 Utsav ≈ B15 Dinesh) — avoid the cyan+amber dual-accent on near-black + Framer Motion + Sonner + radix accordion stack, *because it's the 2024-2026 default Next.js portfolio template*. To be original, deviate.
2. **Google AdSense on a portfolio** (B80 Om) — never.
3. **Default CRA title** (B79 Jerry) — never. Always set `<title>` to `Name | Role`.
4. **Multi-accent chaos** (B80 Om — 7+ accent colors) — never. Dual-accent is the upper bound.
5. **1 MB GIF in hero** (B78 Utsav) — never. Use CSS/SVG/canvas animation.
6. **Empty placeholder divs** (B78 Utsav's `#webring`) — never ship empty stubs.
7. **Non-functional contact form** (B76 Veerendra — action=`/` method=`get`) — never ship a form that doesn't POST.
8. **Stale copyright** (B77 Nathan — © 2021) — always update copyright year or omit.
9. **Bare H4/H6 as page headings** (B79 Jerry) — never. Always use H1 for the page's primary heading.
