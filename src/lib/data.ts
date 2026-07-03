/**
 * Placeholder portfolio content for a Full Stack Developer.
 * All content is realistic and complete; replace with real info later.
 */

export const profile = {
  name: "Alex Rivera",
  role: "Full Stack Engineer",
  srOnlyH1Prefix: "Alex Rivera — Full Stack Engineer based in San Francisco.",
  rolePhrase: "Engineer", // word in the role line that gets the accent color
  tagline:
    "I build distributed systems, developer tooling, and the occasional design system. Currently shipping at Vector Labs.",
  heroDatasheet: [
    { key: "status", value: "available for new work", kind: "status" as const },
    { key: "location", value: "San Francisco, CA · UTC−7" },
    { key: "focus", value: "Distributed systems · DX tooling · DevX" },
    { key: "stack", value: "TypeScript · Go · Postgres · React · Next.js" },
    { key: "local_time", value: "live", kind: "time" as const },
    {
      key: "build",
      value: "v3.2.1 · abc1234 · 2026-07-03",
      kind: "mono" as const,
    },
  ],
  aboutLead:
    "Alex Rivera is a Full Stack Engineer in San Francisco who treats infrastructure as a product surface. He has spent the last eight years building distributed task schedulers, type-safe schema generators, and internal design systems — usually at companies where developer experience is treated as a load-bearing wall, not wallpaper.",
  aboutBody: [
    "His current work at Vector Labs focuses on Helix, a distributed task scheduler that handles millions of jobs a day across three regions. The interesting parts are not the obvious ones: scheduling is solved, consensus is solved. The interesting parts are the operational interfaces — how on-call engineers reason about a stuck queue at 3 a.m., how a new hire understands what the system does in their first week, and how to make the boring paths boring enough that nobody has to think about them.",
    "Before Vector Labs, Alex built design systems and developer tooling at Lattice and Stripe. He is suspicious of novelty for its own sake, prefers boring infrastructure, and writes about engineering culture at length. He believes the best code is the code you do not have to write — and the second best is the code you can delete a year later without anyone noticing.",
  ],
  metadata: [
    { label: "BASED IN", value: "San Francisco, CA" },
    { label: "ROLE", value: "Staff Engineer" },
    { label: "EDUCATION", value: "B.S. Computer Science" },
    { label: "LANGUAGES", value: "TypeScript · Go · English · Spanish" },
  ],
  contact: {
    email: "hello@alexrivera.dev",
    social: [
      { label: "GitHub", href: "https://github.com", key: "github" },
      { label: "LinkedIn", href: "https://linkedin.com", key: "linkedin" },
      { label: "X", href: "https://x.com", key: "twitter" },
      { label: "RSS", href: "/rss.xml", key: "rss" },
    ],
  },
};

export type Project = {
  id: string;
  index: string;
  name: string;
  codename: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  status: "shipped" | "active" | "archived";
  caseStudy: {
    context: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    metrics: { label: string; value: string }[];
    tags: string[];
  };
};

export const projects: Project[] = [
  {
    id: "helix",
    index: "01",
    name: "Helix",
    codename: "ALPHA",
    tagline:
      "A distributed task scheduler handling 4M+ jobs/day across three regions.",
    year: "2025",
    role: "Staff Engineer · Vector Labs",
    stack: ["Go", "Postgres", "Redis", "gRPC"],
    status: "active",
    caseStudy: {
      context:
        "Vector Labs' previous scheduler was a single-queue Redis instance that worked beautifully until it didn't. At 4M jobs/day, the queue became a write-through cache for the entire company's failure modes. Helix is its replacement.",
      sections: [
        {
          heading: "Overview",
          body: [
            "Helix is a distributed task scheduler built to handle Vector Labs' mixed workload: short-lived cron jobs, long-running batch pipelines, and latency-sensitive user-triggered work. It runs across three AWS regions, schedules roughly 4 million jobs per day, and has been the source of exactly two on-call pages in the last six months.",
            "The system is split into three planes: a control plane (Go services, Postgres-backed), a data plane (Redis clusters per region), and an operational plane (a React + Next.js dashboard that on-call engineers actually want to use). The hardest part was not the scheduling — scheduling is a solved problem. The hardest part was making the operational plane legible enough that an engineer paged at 3 a.m. could reason about a stuck queue without reading source code.",
          ],
        },
        {
          heading: "The Challenge",
          body: [
            "The previous system's failure mode was opacity: when jobs backed up, the only signal was a Slack channel filling with screenshots of a Grafana dashboard nobody fully understood. The queue depth metric was a single number that conflated nine different failure modes. On-call engineers spent the first 20 minutes of any incident just figuring out which subsystem was actually broken.",
            "We needed a system where the operational interface was a first-class deliverable, not an afterthought. The scheduler itself was going to be a Go service with predictable performance; the real product was the mental model it gave to the engineers who had to operate it.",
          ],
        },
        {
          heading: "The Approach",
          body: [
            "We started from the operational interface and worked backwards. Before writing a line of scheduler code, we built a fake dashboard with hand-wired data and walked a rotating group of on-call engineers through five incident scenarios. The dashboard went through eleven major revisions before any real scheduler code was written.",
            "The scheduler itself is intentionally boring: a sharded Postgres table of jobs, a pool of worker processes that poll, a Redis-based distributed lock for leader election. The novel part is the job taxonomy — every job carries a typed metadata envelope that the operational plane can introspect, so the dashboard can render job-specific context (which customer, which workflow, which SLA tier) without the engineer having to look it up.",
          ],
        },
        {
          heading: "The Outcome",
          body: [
            "Helix has been in production for 14 months. On-call page volume dropped 78% in the first quarter. Median time-to-resolution for the remaining pages dropped from 34 minutes to 8 minutes. The operational dashboard is, by acclamation, the most-used internal tool at the company.",
            "The lesson we keep relearning: the bottleneck is rarely the technology. It is almost always the interface — the gap between what the system is doing and what the operator can see. Closing that gap is worth more than any performance optimization.",
          ],
        },
      ],
      metrics: [
        { label: "JOBS/DAY", value: "4.2M" },
        { label: "P50 LATENCY", value: "12ms" },
        { label: "ON-CALL PAGES", value: "−78%" },
        { label: "MTTR", value: "−76%" },
      ],
      tags: ["distributed-systems", "go", "postgres", "devex", "operations"],
    },
  },
  {
    id: "cadence",
    index: "02",
    name: "Cadence",
    codename: "BETA",
    tagline:
      "A type-safe schema generator that turns Postgres tables into end-to-end typed APIs.",
    year: "2024",
    role: "Side project · 2.4k★ on GitHub",
    stack: ["TypeScript", "AST", "Postgres", "CLI"],
    status: "shipped",
    caseStudy: {
      context:
        "Cadence is a side project that grew out of a recurring frustration: every team I've been on has rebuilt the same boilerplate layer between Postgres and the application. ORM, hand-written types, validation, route handlers — the same six tools, reassembled slightly differently each time.",
      sections: [
        {
          heading: "Overview",
          body: [
            "Cadence reads a Postgres schema and emits a fully-typed data layer: TypeScript types, Zod validators, tRPC routes, and a minimal query builder. The entire pipeline is type-checked end-to-end, so a column rename in Postgres becomes a compile error in the application, not a runtime exception in production.",
            "It is a CLI tool — `npx cadence generate` — that runs in CI on every schema migration. The generated code is boring, readable, and intentionally not magic. The goal was a tool that a senior engineer would trust on day one and a junior engineer could debug on day two.",
          ],
        },
        {
          heading: "The Challenge",
          body: [
            "The hard problem was not code generation — that is a solved problem with a thousand solutions. The hard problem was earning the trust of senior engineers who have been burned by codegen tools that produce unreadable output, fight with hand-written code, or break subtly on schema edge cases.",
            "I made one design decision early that shaped everything else: Cadence never deletes code. It only writes to a `.cadence/` directory that is git-committed but treated as a build artifact. Engineers can read every line, override anything, and delete the whole directory without losing application code. The generated code is a guest in your repository, not a tenant.",
          ],
        },
        {
          heading: "The Approach",
          body: [
            "The generator is a pipeline of AST transforms: Postgres schema → typed intermediate representation → TypeScript AST → formatted source. Each transform is a pure function with snapshot tests. The output is formatted with Prettier and structured so that git diffs are minimal on schema changes — column additions are one-line diffs, not file rewrites.",
            "The CLI is intentionally small: `generate`, `watch`, `check`. There is no config file by default; configuration is via Postgres comments on the schema itself. The schema is the source of truth, and the schema is already in version control.",
          ],
        },
        {
          heading: "The Outcome",
          body: [
            "Cadence has 2.4k stars on GitHub, an unknown but non-zero number of production users, and a small but excellent contributor base. It is used at three companies I know of and probably more I don't.",
            "The most rewarding outcome is not the stars — it is the GitHub issues that read like \"we replaced 4,000 lines of boilerplate with this and our PR reviews got shorter.\" That is the whole point. Tools should erase work, not create it.",
          ],
        },
      ],
      metrics: [
        { label: "GITHUB STARS", value: "2.4k" },
        { label: "LINES REMOVED", value: "−4,000" },
        { label: "CONTRIBUTORS", value: "18" },
        { label: "PROD USERS", value: "3+ companies" },
      ],
      tags: ["typescript", "codegen", "postgres", "devx", "open-source"],
    },
  },
  {
    id: "atlas",
    index: "03",
    name: "Atlas",
    codename: "GAMMA",
    tagline:
      "An internal design system adopted by 14 product teams in its first year.",
    year: "2024",
    role: "Senior Engineer · Lattice",
    stack: ["React", "TypeScript", "Tailwind", "Storybook"],
    status: "shipped",
    caseStudy: {
      context:
        "Atlas is the design system I led at Lattice. It started as a side project to fix three buttons that looked slightly different, and ended up as the substrate for the entire product surface.",
      sections: [
        {
          heading: "Overview",
          body: [
            "Atlas is a React + TypeScript design system with 47 components, 6 theme tokens, full keyboard accessibility, and a Storybook-driven contribution model. It was adopted by 14 product teams in its first year and now backs roughly 90% of Lattice's product surface area.",
            "The system is built on a strict separation between primitives (Button, Input, Dialog — unstyled except for tokens) and compositions (Form, DataTable, PageLayout — opinionated layouts built from primitives). The separation lets product teams override at the right level without forking components.",
          ],
        },
        {
          heading: "The Challenge",
          body: [
            "The challenge was political, not technical. Lattice had three existing UI libraries, each with a champion. The path to adoption was not \"build a better library\" — it was \"build a library that the existing champions would rather migrate to than maintain their own.\"",
            "That meant the migration story had to be the first-class feature, not the last. We spent more time on codemods than on components. Every primitive shipped with a codemod that converted the equivalent component from each of the three legacy libraries — one command, one PR, one merge.",
          ],
        },
        {
          heading: "The Approach",
          body: [
            "The technical foundation is Tailwind 4 with CSS variables for all theme tokens, exposed as both CSS custom properties and a typed TypeScript object. Components are built with a `cn()` helper that merges Tailwind classes with proper precedence, so overrides feel idiomatic to engineers who already know Tailwind.",
            "Accessibility was non-negotiable. Every component ships with WAI-ARIA patterns from the APG, full keyboard support, and a test suite that includes screen-reader assertions. We used the Radix primitives as a foundation for anything with non-trivial interaction semantics — menus, dialogs, popovers — and built visual styling on top.",
          ],
        },
        {
          heading: "The Outcome",
          body: [
            "Atlas is now the default for all new product work at Lattice. The three legacy libraries are deprecated. The contributor base is 23 engineers across 14 teams, and the average time-to-merge for a component contribution is 2.3 days.",
            "The lesson: a design system is a product, and the user is the engineer who has to adopt it. Treat the migration story as the core feature, not as documentation. The components are the easy part.",
          ],
        },
      ],
      metrics: [
        { label: "COMPONENTS", value: "47" },
        { label: "ADOPTING TEAMS", value: "14" },
        { label: "SURFACE COVERAGE", value: "~90%" },
        { label: "CONTRIBUTORS", value: "23" },
      ],
      tags: ["react", "design-system", "accessibility", "tailwind", "devx"],
    },
  },
];

export const stack = [
  {
    category: "FRONTEND",
    description:
      "TypeScript, React, Next.js, Tailwind. I treat the frontend as a product surface — accessibility, performance budgets, and motion design are first-class concerns, not afterthoughts. Recent work includes a design system adopted by 14 teams.",
  },
  {
    category: "BACKEND",
    description:
      "Go for services that need predictable latency, Node for everything else. Postgres as the default datastore; Redis for hot paths. I prefer boring, well-tested tools over novel ones — the interesting problems are usually in the operational interfaces, not the technology choices.",
  },
  {
    category: "INFRASTRUCTURE",
    description:
      "Terraform-managed AWS, Docker for local parity, GitHub Actions for CI. I have shipped to production from a tablet on a train — infrastructure should be that boring. On-call rotations taught me that observability is a feature, not a phase.",
  },
  {
    category: "DX & TOOLING",
    description:
      "I build internal CLIs and design systems. A good DX tool pays for itself in a week. Recent work includes a typed schema generator (Cadence) and a Next.js preview-deploy bot that cut review-cycle time by 40%.",
  },
];

export const experience = [
  {
    tier: "NOW",
    role: "Staff Engineer",
    company: "Vector Labs",
    dates: "2024 — present",
    status: "RUNNING" as const,
    description:
      "Leading the scheduler platform team. Built Helix, the distributed task scheduler that handles 4M+ jobs/day across three regions. Currently designing the next-generation event bus.",
    bullets: [
      "Reduced on-call page volume 78% by redesigning the operational interface as a first-class deliverable.",
      "Grew the team from 3 to 7 engineers; hired and mentored two senior engineers into tech-lead roles.",
      "Set the team's technical direction: boring infrastructure, typed interfaces, observability as a feature.",
    ],
  },
  {
    tier: "EARLIER",
    role: "Senior Engineer",
    company: "Lattice",
    dates: "2022 — 2024",
    status: "COMPLETE" as const,
    description:
      "Led the design system team. Built Atlas, adopted by 14 product teams in its first year. Drove the migration off three legacy UI libraries onto a unified substrate.",
    bullets: [
      "Shipped Atlas: 47 components, 90% surface coverage, 23 contributors across 14 teams.",
      "Built codemod-driven migration tooling that reduced adoption friction to one-PR-per-team.",
      "Established accessibility as a non-negotiable: WAI-ARIA, keyboard support, screen-reader tests.",
    ],
  },
  {
    tier: "EARLIER",
    role: "Software Engineer",
    company: "Stripe",
    dates: "2020 — 2022",
    status: "COMPLETE" as const,
    description:
      "Worked on the Payments API team. Shipped typed SDK improvements across 7 languages. Built the internal tooling that became the foundation for Stripe's current developer-dashboard experience.",
    bullets: [
      "Shipped typed SDK improvements across 7 languages, reducing integration bugs by 32%.",
      "Built internal dashboard tooling later adopted as the foundation for the developer dashboard.",
    ],
  },
  {
    tier: "EARLIER",
    role: "Software Engineer",
    company: "Vellum (seed-stage)",
    dates: "2018 — 2020",
    status: "COMPLETE" as const,
    description:
      "Second engineering hire at a seed-stage startup. Built the entire initial product surface — frontend, API, and the first version of the data pipeline. Learned more in two years than the previous four.",
    bullets: [
      "Built the initial product surface end-to-end as the second engineering hire.",
      "Owned the entire frontend stack and the first version of the data pipeline.",
    ],
  },
];

export const writing = [
  {
    id: "boring-infra",
    title: "The case for boring infrastructure",
    date: "2026-06-12",
    excerpt:
      "Why I keep choosing Postgres and Redis over the new hotness, and why \"boring\" is the highest compliment I can give a piece of infrastructure.",
    minRead: 8,
    tags: ["infrastructure", "engineering-culture"],
  },
  {
    id: "stop-unit-testing",
    title: "Why I stopped writing unit tests for everything",
    date: "2026-04-03",
    excerpt:
      "A pragmatic framework for deciding what to test, what to integration-test, and what to just delete. Includes the flowchart I use on my own PRs.",
    minRead: 12,
    tags: ["testing", "pragmatism"],
  },
  {
    id: "design-systems-compilers",
    title: "Design systems are just compilers with extra steps",
    date: "2026-02-18",
    excerpt:
      "A literal (and only somewhat tongue-in-cheek) mapping between compiler concepts and design-system architecture. Tokens are types, components are functions, the Figma file is the parser.",
    minRead: 6,
    tags: ["design-systems", "compilers", "devex"],
  },
];
