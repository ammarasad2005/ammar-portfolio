# Personal Portfolio — Design Specification

> **Document**: Synthesis of 100-portfolio research → unified design language → front-end engineering spec
> **Source**: `personal_portfolio.md` (living document maintained across 20 batches of research)
> **Status**: Authoritative spec for Phase 8 (Engineering)

---

## Part I — Final Synthesis (Phase 6)

### 1.1 The 100-Portfolio Verdict

After analyzing 100 developer portfolios across 20 batches, the corpus converged on a clear set of signals. The strongest portfolios (Karan Chhunchha, Vinit Shahdeo, Luca Félix, Artur Bień, Md Sarfaraz Alam, Bhavesh Gudlani, Milan Milanovic, Ganesh Angadi, Dale Larroder, Tufail Ahmed Khan, Juan Cisneros, Mihir Chauhan, crashunix, Emmanuel Alabi, Younes Megaache, Atal Sairam, Nabin Khair, Aayush Raj) all share a single property: **commitment to a register**. They pick one conceptual frame and let it shape every label, every metadata field, every section name, every transition. The weakest portfolios (Bhushan Zade, Jayed Rafi, Akash, Fikri, Auroob, Barthélémy, Abhijeet, Amit, Hungry Bear Studio, Jerry Hirsch, Poonam, Sharuk, Hozaifa, Rituparna, Mitul) all fail by *not committing* — they ship defaults, templates, placeholders, or kitchen-sink collections of unrelated effects.

### 1.2 Final Resolutions on Open Tensions

| Tension | Final verdict | Reasoning |
|---|---|---|
| Hero motion that orients | **Adopt**: a state-switched section model where the active section is always visible in a sticky nav, plus a scroll progress bar. | Strongest signals: Atal's slash-route tabs, Juan's dock-as-nav, Bhavesh's progress bar. |
| Custom cursor that adds UX | **Adopt**: dual-element cursor (instant dot + eased ring) with hover state growth. Honor `prefers-reduced-motion` and `@media (hover: none)`. | Bhavesh's implementation is the reference. |
| Scroll-driven section transitions | **Reject**. | 0/100 instances. Conflicts with deep-linking, accessibility, and multi-page hybrid. Use state-switched views instead. |
| Sound | **Adopt minimally**: event-driven click/typing sounds as affordance feedback, off by default with a clear toggle. | Kavi's pattern is the reference. Ambient music is rejected. |
| Designed loading state | **Adopt**: a brief branded loader on first paint, plus Astro-style view transitions. | Emmanuel's pattern is the reference. |
| Haptic-style mobile feedback | **Reject**. | 0/100 instances. Android-only, perceived as gimmicky. Invest in visual + audio feedback. |
| Real 3D scene | **Adopt scoped**: a single Three.js scene as hero signature, paused when offscreen, with `prefers-reduced-motion` static fallback. | Karan's Three.js scene + Dale's fluid + Whilmar's particles all succeed because they are scoped to one surface. |
| Code-as-interface, deeper | **Adopt**: a small set of "the demo is the content" moments — a typing-speed meter in the hero, a live system log widget, and a command palette. | Vinit's CLI, Artur's embedded generators, Vedas's floating widget, Md Sarfaraz's command palette. |
| Light vs dark | **Adopt both, tinted**: warm-tinted light + warm-tinted dark, with a designed toggle and system-preference default. | Pure black/white only with ultralight (200-300 weight) display type at 200px+. |
| Single-page vs multi-page | **Adopt single-page with section "routes"**: anchor-based sections that act like routes, with scroll-spy and a command palette. | Project constraint: only `/` route is user-visible. Nico/EMF's hybrid model adapted to single-page. |

### 1.3 The Unified Design Language: "Terminal Atelier"

The synthesis resolves into a single design language I'm calling **Terminal Atelier** — a deliberate oxymoron:

- **"Terminal"** inherits the developer-coded discipline of Triet, Ganesh, Atal, Mihir, Younes, Shubhanshu, crashunix: monospace metadata eyebrows, KEY/VALUE hero datasheets, CI/CD-flavored career framing, command-palette navigation, slash-route section identifiers, `$` shell prompts as section openers.
- **"Atelier"** inherits the editorial discipline of EMF, Luca, Milan, Nico, Nabin: warm tinted-light palette as a peer to dark, premium serif/sans pairing, generous whitespace, case-study depth, typography as the primary interface.

The two halves are bound together by a single conceptual commitment: **the portfolio is a piece of software that presents itself as software**. Not a document. Not a marketing page. A software artifact with a version stamp, a system status, a build hash, a live time, a command palette, and a CLI companion. The visitor is treated as a user operating a small, polished product — not a recruiter reading a CV.

### 1.4 The Five Pillars

1. **Type is the interface.** A two-font system (Geist Sans body + Geist Mono labels) with a third display weight reserved for the hero. Type carries the design — chrome stays minimal.
2. **The hero is a datasheet, not a slogan.** A 6-row KEY/VALUE datasheet replaces "Hi, I'm X. A passionate Y." The hero carries live metadata (location, status, focus, availability, local time, build hash) — like a process status panel.
3. **The cursor is dual-element.** Instant dot for precision, eased ring for weight. Hover state growth signals interactivity. Off on touch devices.
4. **The footer is a system status panel.** Live local time, timezone, build version, system status link, last commit. The portfolio signals it is alive.
5. **The command palette is the nav.** `⌘K` opens a command palette with pages, projects, actions, and links. The sticky nav is minimal (3-4 items + theme toggle). Keyboard-first navigation is a developer-culture signal.

### 1.5 What We Are NOT Doing

- No particle.js hero (cliché — flagged in batches 12, 15, 17, 20).
- No self-rated skill percentages (anti-pattern — flagged in batches 6, 14, 17).
- No logo soup (anti-pattern — flagged in batches 3, 6, 8, 11, 17).
- No default `document.title` (anti-pattern — flagged in batches 1, 2, 6, 8, 9, 14, 15, 16).
- No broken third-party widgets (anti-pattern — flagged in batches 1, 8, 11, 17).
- No pure black or pure white backgrounds (unless ultralight display type ≥ 200px).
- No bot-blocking Cloudflare on a portfolio (Talha Kılıç anti-pattern).
- No ambient sound (rejected — event-driven sound only, off by default).
- No scroll-driven section transitions (rejected after 0/100 instances).
- No 3D site-wide (scoped to hero only).

---

## Part II — Front-End Design Specification (Phase 7)

### 2.1 Information Architecture

Single-page portfolio with anchor-based section "routes." The URL hash changes as the user scrolls (`/#about`, `/#work`, etc.) so deep-linking works.

**Section ordering** (top-to-bottom):
1. **Hero** — datasheet + name + role + status
2. **About** — narrative paragraph + 4-cell metadata grid
3. **Stack** — categorized prose skills (no logo soup, no percentages)
4. **Work** — 3-4 featured projects with case-study modal links
5. **Experience** — two-tier (Now + Earlier) with CI/CD-style status
6. **Writing** — 3 recent essays with min-read + date
7. **Contact** — 3-question contact form + plain-text fallback
8. **Footer** — system status panel

### 2.2 Page Hierarchy & Semantic Structure

```
<body>
  <a href="#main" class="skip-link">Skip to content</a>
  <header role="banner">  <!-- sticky nav -->
    <nav aria-label="Primary">...</nav>
  </header>
  <main id="main">
    <section id="hero" aria-labelledby="hero-heading">...</section>
    <section id="about" aria-labelledby="about-heading">...</section>
    <section id="stack" aria-labelledby="stack-heading">...</section>
    <section id="work" aria-labelledby="work-heading">...</section>
    <section id="experience" aria-labelledby="experience-heading">...</section>
    <section id="writing" aria-labelledby="writing-heading">...</section>
    <section id="contact" aria-labelledby="contact-heading">...</section>
  </main>
  <footer role="contentinfo">...</footer>
  <!-- Command palette dialog -->
  <dialog id="cmdk">...</dialog>
</body>
```

Each section has exactly one `<h2>` (the visible section title is an `<h2>`; the `<h1>` lives in the hero). One `<h1>` per page. No exceptions.

### 2.3 Design Tokens

#### 2.3.1 Color System (OKLCH-based, both themes)

The palette is a tinted-warm neutral system. Two themes (dark default, light peer). All colors in `oklch()` for perceptual uniformity.

**Dark theme (default)**:
| Token | Value | Use |
|---|---|---|
| `--bg` | `oklch(0.18 0.008 80)` | Page background (warm near-black) |
| `--bg-elevated` | `oklch(0.21 0.008 80)` | Cards, nav, footer |
| `--bg-subtle` | `oklch(0.20 0.008 80)` | Hover states |
| `--border` | `oklch(0.28 0.008 80 / 0.6)` | Hairline borders |
| `--fg` | `oklch(0.96 0.005 80)` | Primary text |
| `--fg-muted` | `oklch(0.72 0.008 80)` | Secondary text |
| `--fg-subtle` | `oklch(0.55 0.008 80)` | Tertiary text, metadata keys |
| `--accent` | `oklch(0.78 0.18 50)` | Primary accent (warm amber) — CTAs, active states, role phrase |
| `--accent-2` | `oklch(0.72 0.16 200)` | Secondary accent (cool cyan) — links, status indicators |
| `--success` | `oklch(0.72 0.18 145)` | "Available" status, success states |
| `--warning` | `oklch(0.78 0.16 75)` | Warning states |

**Light theme**:
| Token | Value | Use |
|---|---|---|
| `--bg` | `oklch(0.98 0.006 80)` | Page background (warm cream) |
| `--bg-elevated` | `oklch(1.00 0.000 0)` | Cards, nav, footer (pure white only when elevated) |
| `--bg-subtle` | `oklch(0.96 0.006 80)` | Hover states |
| `--border` | `oklch(0.88 0.008 80 / 0.7)` | Hairline borders |
| `--fg` | `oklch(0.20 0.008 80)` | Primary text |
| `--fg-muted` | `oklch(0.42 0.008 80)` | Secondary text |
| `--fg-subtle` | `oklch(0.55 0.008 80)` | Tertiary text, metadata keys |
| `--accent` | `oklch(0.62 0.18 50)` | Primary accent (warm amber) |
| `--accent-2` | `oklch(0.55 0.16 200)` | Secondary accent (cool cyan) |
| `--success` | `oklch(0.55 0.18 145)` | "Available" status |
| `--warning` | `oklch(0.62 0.16 75)` | Warning states |

Both themes maintain **WCAG AA contrast** (4.5:1 for body text, 3:1 for large text and UI).

#### 2.3.2 Typography Scale

Three-font system:
- **Geist Sans** — body, headings, UI
- **Geist Mono** — eyebrows, metadata keys, code, status indicators, command palette
- **Instrument Serif** — hero display name only (single-use, for editorial weight)

Type scale (modular, 1.200 ratio — Minor Third):
| Token | Size | Weight | Line height | Use |
|---|---|---|---|---|
| `--text-display` | `clamp(3.5rem, 8vw, 7rem)` | 400 (Instrument Serif) | 1.0 | Hero name |
| `--text-h1` | `clamp(2.5rem, 5vw, 3.5rem)` | 600 (Geist Sans) | 1.1 | (only one per page — hero name is the H1) |
| `--text-h2` | `clamp(1.75rem, 3vw, 2.25rem)` | 600 (Geist Sans) | 1.2 | Section titles |
| `--text-h3` | `clamp(1.25rem, 2vw, 1.5rem)` | 600 (Geist Sans) | 1.3 | Subsection titles, project titles |
| `--text-body-lg` | `1.25rem` | 400 (Geist Sans) | 1.6 | Lead paragraphs |
| `--text-body` | `1rem` | 400 (Geist Sans) | 1.6 | Body text |
| `--text-body-sm` | `0.875rem` | 400 (Geist Sans) | 1.5 | Secondary text |
| `--text-mono` | `0.8125rem` | 500 (Geist Mono) | 1.4 | Eyebrows, metadata keys, status |
| `--text-mono-sm` | `0.75rem` | 500 (Geist Mono) | 1.4 | Footer system status, build info |

#### 2.3.3 Spacing System

8px base unit. Modular scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.

| Token | Value | Use |
|---|---|---|
| `--space-1` | `4px` | Tight gaps (icon + label) |
| `--space-2` | `8px` | Default inline gaps |
| `--space-3` | `12px` | Small vertical rhythm |
| `--space-4` | `16px` | Default vertical rhythm |
| `--space-6` | `24px` | Section internal padding |
| `--space-8` | `32px` | Card padding |
| `--space-12` | `48px` | Section vertical padding (mobile) |
| `--space-16` | `64px` | Section vertical padding (desktop) |
| `--space-24` | `96px` | Section vertical padding (large desktop) |
| `--space-32` | `128px` | Hero top padding |

#### 2.3.4 Grid System

- **Container**: `max-width: 1200px`, `padding-inline: 24px` (mobile), `padding-inline: 48px` (desktop)
- **Grid**: 12-column at desktop, 4-column at mobile
- **Hero datasheet**: 2-column grid (key | value), `grid-template-columns: max-content 1fr`, `gap: 12px 32px`
- **Work cards**: `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`, `gap: 24px`
- **About metadata grid**: 2x2 on mobile, 4x1 on desktop, `gap: 24px`

#### 2.3.5 Motion

Motion uses **Framer Motion**. Three motion tiers:

1. **Micro** (hover, focus): `duration: 0.15s, ease: "easeOut"`. Examples: button hover lift (translateY -1px), card border color shift.
2. **Section** (scroll reveal): `duration: 0.4s, ease: [0.22, 1, 0.36, 1]` (custom ease-out-quart). Stagger children by `0.05s`. Trigger when 20% in view, once.
3. **Feature** (hero entry, command palette open): `duration: 0.6s, ease: [0.22, 1, 0.36, 1]`. Hero datasheet rows stagger by `0.08s`.

**Reduced motion**: All animations honor `prefers-reduced-motion: reduce` — they either become instant or fade-only with no transform.

**Scroll progress bar**: A 2px gradient bar at the top of the page, `transform: scaleX(var(--scroll-progress))`, `transform-origin: left`. Color: gradient from `--accent` to `--accent-2`.

#### 2.3.6 Cursor

Dual-element custom cursor (desktop only):
- **Dot**: 6px circle, `background: var(--accent)`, `mix-blend-mode: difference`, instant follow via `transform` on `mousemove` (no smoothing).
- **Ring**: 32px circle, `border: 1px solid var(--fg-muted)`, eased follow via lerp (factor 0.15) on `requestAnimationFrame`.
- **Hover state**: Ring grows to 56px, border color becomes `--accent`.
- **Disabled**: On `@media (hover: none)` and `prefers-reduced-motion: reduce`, both elements hidden and system cursor restored.

#### 2.3.7 Sound

Event-driven sound, off by default:
- **Click sound**: 0.1s sine wave at 800Hz, triggered on button/link clicks (only when sound enabled).
- **Typing sound**: 0.05s triangle wave at 600Hz, triggered on command palette input (only when sound enabled).
- **Toggle**: A small speaker icon in the footer toggles sound on/off. State persisted in `localStorage`.
- **Muted by default** — never play sound without user opt-in.

### 2.4 Component Specifications

#### 2.4.1 Hero (Datasheet)

```
SECTION #hero
├── Eyebrow: "// PORTFOLIO_v3.2.1" (mono, --text-mono, --fg-subtle)
├── Name: "Alex Rivera" (Instrument Serif, --text-display, --fg)
│   └── Visible name. (The H1 also has a sr-only prefix: "Alex Rivera — Full Stack Developer based in San Francisco.")
├── Role line: "Full Stack Engineer" with accent on "Engineer" (Geist Sans, --text-h3, --fg-muted; accent word in --accent)
├── Datasheet (2-column grid, 6 rows):
│   ├── status:    [●] available for new work   (--success dot)
│   ├── location:  San Francisco, CA · UTC−7
│   ├── focus:     Distributed systems · DX tooling · DevX
│   ├── stack:     TypeScript · Go · Postgres · React · Next.js
│   ├── local_time: (live, updates every second)
│   └── build:     v3.2.1 · abc1234 · 2026-07-03
├── CTA row: [View Work ⌘W]  [Get in touch ⌘C]  (keyboard hotkey labels on the right)
└── 3D scene: A subtle Three.js particle field behind the hero (low-density, warm-tinted points). Paused when offscreen. Static fallback on reduced-motion.
```

#### 2.4.2 Sticky Nav

```
<header>
  └── <nav>
      ├── Left: Logo mark (monospace "AR." in a 32px square with --border)
      ├── Center: 4 nav links (About · Work · Writing · Contact) — current section highlighted with --accent underline
      ├── Right: [⌘K] command palette trigger + theme toggle (sun/moon icon)
      └── Backdrop: --bg-elevated with backdrop-blur(12px) and 1px --border bottom
```

- Sticky, appears after scrolling 100px down (slides up when scrolling down, slides down when scrolling up — hide-on-scroll-down pattern).
- Mobile: collapses to logo + ⌘K + theme toggle. Nav links move into the command palette.

#### 2.4.3 Command Palette (⌘K)

```
<dialog id="cmdk">
  ├── Input (mono font, placeholder: "Type a command or search…")
  ├── Group: PAGES
  │   ├── ↑ About             (jump to #about)
  │   ├── ↑ Work              (jump to #work)
  │   ├── ↑ Writing           (jump to #writing)
  │   └── ↑ Contact           (jump to #contact)
  ├── Group: PROJECTS
  │   ├── ↑ Project Alpha     (open case study modal)
  │   ├── ↑ Project Beta      (open case study modal)
  │   └── ↑ Project Gamma     (open case study modal)
  ├── Group: ACTIONS
  │   ├── ↑ Toggle theme      (T)
  │   ├── ↑ Toggle sound      (S)
  │   ├── ↑ Copy email        (C)
  │   └── ↑ Download résumé   (R)
  └── Group: LINKS
      ├── ↑ GitHub
      ├── ↑ LinkedIn
      └── ↑ RSS
```

- Opens with `⌘K` (Mac) / `Ctrl+K` (Win/Linux) and `/`.
- Closes with `Esc`.
- Arrow keys navigate, `Enter` activates.
- Input is fuzzy-matched against items.

#### 2.4.4 About Section

```
SECTION #about
├── Eyebrow: "$ man about" (mono, --fg-subtle)
├── H2: "About" (with sr-only prefix "// About Alex Rivera")
├── Lead paragraph (3-4 sentences, narrative, third-person option)
├── Body paragraphs (2 paragraphs, each 4-5 sentences — see Content Depth Standards)
└── 4-cell metadata grid:
    ├── BASED IN: San Francisco, CA
    ├── ROLE:     Full Stack Engineer
    ├── EDUCATION:B.S. Computer Science
    └── LANGUAGES:TypeScript · Go · English · Spanish
```

#### 2.4.5 Stack Section

**Categorized prose, NOT logo soup, NOT self-rated percentages.**

```
SECTION #stack
├── Eyebrow: "$ ls stack/" (mono)
├── H2: "Stack"
└── 3-4 category cards:
    ├── FRONTEND
    │   "TypeScript, React, Next.js, Tailwind. I treat the frontend as a product surface — accessibility, performance budgets, and motion design are first-class concerns, not afterthoughts."
    ├── BACKEND
    │   "Go for services that need predictable latency, Node for everything else. Postgres as the default datastore; Redis for hot paths. I prefer boring, well-tested tools over novel ones."
    ├── INFRASTRUCTURE
    │   "Terraform-managed AWS, Docker for local parity, GitHub Actions for CI. I've shipped to production from a tablet on a train — infrastructure should be that boring."
    └── DX & TOOLING
        "I build internal CLIs and design systems. A good DX tool pays for itself in a week. Recent work includes a typed schema generator and a Next.js preview-deploy bot."
```

#### 2.4.6 Work Section

**3-4 featured projects. Each project is a card that opens a case study modal.**

```
SECTION #work
├── Eyebrow: "$ ls work/ --details"
├── H2: "Work"
└── Project cards (grid):
    Each card:
    ├── Index: "01" (mono, --fg-subtle, large)
    ├── Project name (h3)
    ├── One-line tagline
    ├── Year + role (mono, --fg-muted)
    ├── Tech stack pills (max 4)
    ├── "Read case study →" link
    └── Hover: border shifts to --accent, slight translateY(-2px), index number becomes --accent
```

**Case study modal** (opens via command palette or card click):
```
DIALOG
├── Breadcrumb: Work / Project Name
├── Date + min-read + role (mono row)
├── H2: Project Name
├── Context subhead (1 paragraph, 3-4 sentences)
├── Tech pills
├── Section 1: Overview (2-3 paragraphs)
├── Section 2: The Challenge (2-3 paragraphs)
├── Section 3: The Approach (2-3 paragraphs)
├── Section 4: The Outcome (with metrics, 2 paragraphs)
├── Section 5: Reflections (1-2 paragraphs)
├── Tags (bottom)
└── Next case study link
```

#### 2.4.7 Experience Section

**Two-tier: Now + Earlier. CI/CD-style status framing.**

```
SECTION #experience
├── Eyebrow: "$ cat experience/career.log"
├── H2: "Experience"
├── NOW (h3)
│   └── Current role:
│       ├── Role · Company · Dates
│       ├── STATUS: RUNNING
│       ├── 2-3 sentence description
│       └── 3-4 bullet points (impact, with metrics)
└── EARLIER (h3)
    └── 3-4 previous roles (each):
        ├── Role · Company · Dates
        ├── STATUS: COMPLETE
        ├── 1-2 sentence description
        └── 2-3 bullet points
```

#### 2.4.8 Writing Section

**3 recent essays.**

```
SECTION #writing
├── Eyebrow: "$ cat writing/"
├── H2: "Writing"
└── 3 essay cards:
    Each:
    ├── Date (mono)
    ├── Title (h3)
    ├── 1-sentence excerpt
    ├── Min-read
    └── Tags
```

#### 2.4.9 Contact Section

**3-question contact form (crashunix pattern) + plain-text fallback.**

```
SECTION #contact
├── Eyebrow: "$ ping contact"
├── H2: "Get in touch"
├── Lead: "I read every message. Tell me who you are and what you're building."
├── Form (3 questions):
│   ├── Q1: "WHO ARE YOU?"        (name input)
│   ├── Q2: "WHERE DO I REPLY?"   (email input)
│   └── Q3: "THE CHALLENGE?"      (textarea)
│   └── Submit: "Send message" (with sound on click if enabled)
├── Plain-text fallback (Milan pattern):
│   "Prefer email? Write to hello@alexrivera.dev"
│   "Based in San Francisco · Open to remote"
└── Social row (max 4): GitHub · LinkedIn · X · RSS
```

#### 2.4.10 Footer (System Status Panel)

```
<footer>
  ┌─────────────────────────────────────────────────────┐
  │ // SYSTEM STATUS                                    │
  │                                                     │
  │ build:    v3.2.1 · abc1234                          │
  │ deployed: 2026-07-03 14:32 UTC                      │
  │ local:    07:32 PST · San Francisco                 │
  │ status:   [●] operational                           │
  │                                                     │
  │ [speaker icon] sound: off      [theme icon] dark    │
  │                                                     │
  │ © 2026 Alex Rivera · Built with Next.js             │
  │ "Hand-coded with intention."                        │
  └─────────────────────────────────────────────────────┘
```

### 2.5 Interaction Rules

1. **Hover**: All interactive elements have a 150ms hover transition (border color, background, or transform).
2. **Focus**: All interactive elements have a visible focus ring (`2px solid var(--accent)`, `2px offset`).
3. **Active**: Buttons depress on active (`translateY(1px)`).
4. **Scroll-spy**: As the user scrolls, the active section is reflected in the nav (underline + accent color).
5. **Section anchor URLs**: Scrolling updates `window.location.hash` without jumping. Direct-hash visits scroll smoothly to the section.
6. **Command palette**: `⌘K` opens, `Esc` closes, arrow keys navigate, `Enter` activates, `/` focuses input.
7. **Keyboard shortcuts**: `T` (toggle theme), `S` (toggle sound), `C` (copy email), `R` (download résumé). Only active when not typing in an input.
8. **Theme toggle**: Smooth color transition (250ms) between dark and light. Persisted in `localStorage`. System preference is the default.
9. **Sound toggle**: Speaker icon in footer. Click to toggle. State persisted in `localStorage`. Off by default.
10. **Reduced motion**: All animations honor `prefers-reduced-motion: reduce`. The 3D scene falls back to a static SVG.

### 2.6 Responsive Behavior

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | `< 640px` | Single column. Nav collapses to logo + ⌘K + theme. Hero datasheet becomes 1-column (key on top, value below). Custom cursor disabled. 3D scene replaced with static gradient. |
| Tablet | `640-1024px` | Two-column where appropriate. Nav shows 4 links + ⌘K + theme. Hero datasheet stays 2-column. |
| Desktop | `1024-1440px` | Full layout. Sticky nav. Custom cursor enabled. 3D scene enabled. |
| Large desktop | `> 1440px` | Container max-width caps at 1200px. Type scale increases slightly via clamp(). |

Touch targets: minimum 44×44px. Tap states mirror hover states where applicable.

### 2.7 Accessibility

- **Semantic HTML**: `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<dialog>`.
- **Headings**: Exactly one `<h1>` (hero). Each section has exactly one `<h2>`. Subsections use `<h3>`.
- **ARIA**: `aria-labelledby` on each section pointing to its heading. `aria-label` on icon-only buttons. `aria-live="polite"` on the local time display. `role="dialog"` and `aria-modal="true"` on the command palette.
- **Keyboard**: All interactive elements reachable via Tab. Command palette fully keyboard-navigable. Focus trap inside the command palette.
- **Color contrast**: WCAG AA (4.5:1 body, 3:1 large text and UI) in both themes.
- **Reduced motion**: All animations honor `prefers-reduced-motion: reduce`.
- **Screen readers**: `sr-only` H1 prefix provides context ("Alex Rivera — Full Stack Developer based in San Francisco"). Metadata keys/values use `<dl><dt><dd>`.
- **Skip link**: "Skip to content" link at the top of the page, visible on focus.
- **Image alt**: All images have descriptive alt text. Decorative 3D canvas is `aria-hidden="true"`.
- **Focus management**: When the command palette opens, focus moves to the input. When it closes, focus returns to the trigger.

### 2.8 Performance

- **Fonts**: Self-hosted Geist Sans, Geist Mono, Instrument Serif. Use `font-display: swap`. Preload critical fonts.
- **3D scene**: Lazy-loaded via `next/dynamic` with `ssr: false`. Paused via `IntersectionObserver` when offscreen.
- **Images**: Next.js Image component with AVIF/WebP. Lazy-loaded. Blur-up placeholder.
- **JS**: Minimize client JS. Server components where possible. Client components only for interactive elements.
- **CSS**: Tailwind 4 with purged classes. Critical CSS inlined.
- **Bundle**: Target < 200KB JS gzipped on initial load.
- **LCP**: Hero text (no images). Target < 1.5s LCP on desktop.
- **CLS**: 0. All elements have reserved space.

### 2.9 Iconography

- **Lucide React** icons throughout (already in the project).
- **Usage**: Theme toggle (sun/moon), command palette (command), social links (github, linkedin, twitter, rss), action icons (mail, copy, download).
- **Size**: 16px inline, 20px buttons, 24px nav.
- **Style**: 1.5px stroke, no fill.

### 2.10 Content (Placeholder — Full Stack Developer)

The portfolio uses realistic placeholder content for "Alex Rivera, Full Stack Engineer." All content is written to be believable and complete. Every section meets the Content Depth Standards (3-5 sentences per paragraph, 150+ words per section).

**Hero datasheet values**:
- status: available for new work
- location: San Francisco, CA · UTC−7
- focus: Distributed systems · DX tooling · DevX
- stack: TypeScript · Go · Postgres · React · Next.js
- local_time: (live)
- build: v3.2.1 · abc1234 · 2026-07-03

**Featured projects** (3):
1. **Helix** — Distributed task scheduler (Go, Postgres, Redis) — 2025 — Staff Engineer at Vector Labs
2. **Cadence** — Type-safe schema generator (TypeScript, AST) — 2024 — Side project, 2.4k★
3. **Atlas** — Internal design system (React, Tailwind) — 2024 — Senior Engineer at Lattice

**Writing** (3 essays):
1. "The case for boring infrastructure" — 2026-06-12 — 8 min read
2. "Why I stopped writing unit tests for everything" — 2026-04-03 — 12 min read
3. "Design systems are just compilers with extra steps" — 2026-02-18 — 6 min read

**Experience**:
- NOW: Staff Engineer at Vector Labs (2024-present) — RUNNING
- EARLIER:
  - Senior Engineer at Lattice (2022-2024) — COMPLETE
  - Software Engineer at Stripe (2020-2022) — COMPLETE
  - Junior Engineer at a seed-stage startup (2018-2020) — COMPLETE

---

## Part III — Engineering Plan (Phase 8)

### 3.1 File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, theme provider, cursor, sound
│   ├── page.tsx            # Single-page portfolio composition
│   └── globals.css         # Tailwind + design tokens
├── components/
│   ├── ui/                 # shadcn/ui (existing)
│   ├── portfolio/
│   │   ├── hero.tsx        # Hero datasheet + 3D scene
│   │   ├── nav.tsx         # Sticky nav with scroll-spy
│   │   ├── about.tsx       # About + 4-cell metadata grid
│   │   ├── stack.tsx       # Stack categorized prose
│   │   ├── work.tsx        # Work cards + case study modal
│   │   ├── case-study.tsx  # Case study dialog
│   │   ├── experience.tsx  # Two-tier experience
│   │   ├── writing.tsx     # Writing cards
│   │   ├── contact.tsx     # 3-question form
│   │   ├── footer.tsx      # System status panel
│   │   ├── cursor.tsx      # Dual-element custom cursor
│   │   ├── command-palette.tsx  # ⌘K command palette
│   │   ├── scroll-progress.tsx  # 2px scroll progress bar
│   │   ├── sound-toggle.tsx     # Footer sound toggle
│   │   ├── theme-toggle.tsx     # Nav theme toggle
│   │   └── three-scene.tsx      # Three.js particle field
│   └── providers/
│       ├── theme-provider.tsx   # next-themes wrapper
│       └── sound-provider.tsx   # Sound state via Zustand
├── lib/
│   ├── utils.ts            # cn() and helpers
│   ├── data.ts             # Placeholder content (projects, experience, writing)
│   └── use-scroll-spy.ts   # Scroll-spy hook
└── hooks/
    ├── use-local-time.ts   # Live local time hook
    ├── use-scroll-progress.ts  # Scroll progress hook
    └── use-keyboard-shortcuts.ts  # Global keyboard shortcuts
```

### 3.2 Implementation Order

1. Design tokens in `globals.css` (colors, type, spacing).
2. Theme provider + theme toggle.
3. Layout: nav + main + footer shell.
4. Hero section (datasheet, no 3D yet).
5. About section.
6. Stack section.
7. Work section + case study modal.
8. Experience section.
9. Writing section.
10. Contact section.
11. Footer (system status panel).
12. Scroll progress bar.
13. Scroll-spy for nav.
14. Command palette.
15. Keyboard shortcuts.
16. Dual-element cursor.
17. Three.js scene (lazy-loaded).
18. Sound toggle + event-driven sounds.
19. Live local time.
20. Responsive polish + accessibility pass.
21. Agent-browser self-verification.

### 3.3 Build Verification

After implementation:
1. `bun run lint` — must pass.
2. Read `dev.log` — must show no fatal errors.
3. Agent-browser visit to `/` — must render, no white screen.
4. Test: theme toggle, command palette (⌘K), contact form, case study modal, scroll-spy nav, sound toggle.
5. Test: mobile viewport (375px), tablet (768px), desktop (1440px).
6. Test: keyboard-only navigation.
7. Test: `prefers-reduced-motion`.
