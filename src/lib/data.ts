/**
 * Personal portfolio content — Muhammad Ammar Asad.
 * Full-stack developer with a keen interest in agentic systems.
 *
 * All content sourced from the user's resume (Ammar_Asad_Resume.pdf)
 * and project documentation (8 project detail files).
 */

export const profile = {
  name: "Ammar Asad",
  role: "Full Stack Developer",
  srOnlyH1Prefix:
    "Muhammad Ammar Asad — Full Stack Developer in Islamabad, Pakistan, building web apps and agentic systems with TypeScript, React, Next.js, Node.js, and Supabase.",
  rolePhrase: "Developer", // word in the role line that gets the accent color
  tagline:
    "I architect full-stack web apps and agentic systems — building software the way architects build buildings: foundation before facade, structure before surface. Currently a CS undergrad at FAST-NUCES Islamabad, shipping production apps with TypeScript, React, Next.js, and Supabase.",
  heroDatasheet: [
    {
      key: "status",
      value: "seeking full-stack internship",
      kind: "status" as const,
    },
    { key: "location", value: "Islamabad, Pakistan · UTC+5" },
    {
      key: "focus",
      value: "Full-stack web · Agentic systems · Developer tools",
    },
    {
      key: "stack",
      value: "TypeScript · React · Next.js · Node · Supabase · MongoDB",
    },
    { key: "phase", value: "under architecture", kind: "mono" as const },
    { key: "local_time", value: "live", kind: "time" as const },
    {
      key: "build",
      value: "v3.2.1 · abc1234 · 2026-07-04",
      kind: "mono" as const,
    },
  ],
  aboutLead:
    "Muhammad Ammar Asad is a Full Stack Developer and 6th-semester B.S. Computer Science student at FAST-NUCES Islamabad. He builds end-to-end web applications with TypeScript, React, Next.js, Node.js, Express, PostgreSQL, and MongoDB, and has a growing interest in agentic systems built on multi-agent LLM orchestration. Four of his projects are deployed in production — from a campus utilities platform serving FAST NUCES students to a Chrome extension that bulk-downloads Google Classroom resources.",
  aboutBody: [
    "His deployed work spans Next.js App Router, Supabase, MongoDB Atlas, Chrome Extension Manifest V3, serverless backends, OAuth 2.0, and third-party integrations like Google Maps and Google Classroom. The recurring theme across his projects is the same one architects use: he starts with the floor plan — what does the user actually need to do, and what is the shortest path to it — and only then adds the facade. A campus utilities app that consolidates twelve student tools into one site; a Chrome extension that replaces twenty minutes of manual clicking with one ZIP download; a ride-hailing companion that fixes the weak address-indexing problem at the API layer instead of in the UI.",
    "Lately he has been drawn into agentic AI — building Hamara-Rozgar, a five-agent cooperative orchestrator for Pakistan's informal service economy, at the Google Antigravity Community Hackathon. The interest is not in AI as a buzzword but in AI as a load-bearing system component: how do you cache an expensive model call, how do you recover when an agent fails, how do you keep a $0 operational budget while still invoking Gemini and Groq in production. These are the architectural questions he finds most interesting.",
    "He thinks about engineering the way architects think about buildings — foundation before facade, structure before surface, load-bearing decisions before decoration. A system that cannot be operated is a building with no doors; a system that cannot be extended is a building with no windows. The interesting work is in the floor plan, not the lobby.",
  ],
  metadata: [
    { label: "BASED IN", value: "Islamabad, Pakistan" },
    { label: "ROLE", value: "Full Stack Developer" },
    { label: "EDUCATION", value: "B.S. CS · FAST-NUCES (6th sem)" },
    { label: "LANGUAGES", value: "TypeScript · Python · C++ · SQL" },
  ],
  contact: {
    email: "ammarasad321993@gmail.com",
    social: [
      { label: "GitHub", href: "https://github.com/ammarasad2005", key: "github" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/muhammad-ammar-asad",
        key: "linkedin",
      },
      { label: "Email", href: "mailto:ammarasad321993@gmail.com", key: "email" },
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
    id: "exam-table",
    index: "01",
    name: "FAST Isb Utilities",
    codename: "EXAM-TABLE",
    tagline:
      "Unified campus companion consolidating 12+ student tools — timetable, exam schedule, free-rooms finder, faculty directory, events calendar, lost & found — into one deployed Next.js app.",
    year: "2026",
    role: "Solo developer · Next.js 14 · Supabase",
    stack: ["Next.js 14", "TypeScript", "Supabase", "Tailwind", "Vercel Cron"],
    status: "active",
    caseStudy: {
      context:
        "FAST NUCES Islamabad students were juggling a monolithic Google Sheet for timetables, a dense Excel workbook for exam schedules, the SLATE portal for events, the faculty page for directory info, and emails/group chats for the academic calendar. The product started as an exam timetable viewer (hence the repo name `Exam-Table`) and grew into a multi-utility campus platform.",
      sections: [
        {
          heading: "Overview",
          body: [
            "FAST Isb Utilities is a Next.js 14 App Router web application that consolidates eight distinct campus utilities for FAST NUCES Islamabad students into one mobile-first site: weekly timetable viewer, exam schedule finder, custom exam builder, custom timetable builder, timetable optimizer, free-rooms finder, faculty directory, campus events calendar, semester academic calendar, and a Lost & Found system. Each utility was previously a separate spreadsheet, portal, or group chat.",
            "The site harvests heterogeneous data sources (Google Sheets, Excel workbooks, the SLATE portal, the official faculty page, emails), normalizes them, and presents them through one UI with filtering, search, conflict detection, and multi-format export (CSV, XLSX, ICS, PNG). The frontend uses shadcn/ui primitives on Radix UI, with DM Sans + Instrument Serif + JetBrains Mono for a typographic system tuned for dense information display.",
          ],
        },
        {
          heading: "The Challenge",
          body: [
            "The hardest problem was not the UI — it was the data pipeline. Every source had a different shape, a different update cadence, and a different failure mode. The Google Sheet was monolithic and edited by hand. The Excel workbook was dense and versioned weekly. The SLATE portal required scraping (Python + BeautifulSoup + lxml). The faculty page changed structure without warning. None of them exposed an API.",
            "The architectural decision was to treat data harvesting as a separate system from the UI. Python scripts (pandas, openpyxl, requests, beautifulsoup4) run on a schedule via Vercel Cron and GitHub Actions, normalize the data, and persist it to Supabase (PostgreSQL). The Next.js server components then consume typed data via the Supabase client. This separation means a scraper breaking never takes down the UI — it just shows stale data with a freshness timestamp.",
          ],
        },
        {
          heading: "The Approach",
          body: [
            "The stack is deliberately boring: Next.js 14, Supabase, Tailwind, shadcn/ui, Recharts. The novel parts are in the data layer and the AI integration. A smart-search endpoint at `/api/smart-search` invokes GitHub Models inference (`gpt-4o-mini`) to let students search across all utilities in natural language. A Lost & Found system uses `browser-image-compression` for photo uploads and an AI-assisted claim-sync endpoint.",
            "The export system is the most-used feature: any view (timetable, exam schedule, free-rooms list) can be exported as CSV, XLSX, ICS (for calendar apps), or PNG (for sharing in group chats). This required building a unified export pipeline that converts the same normalized data into four different formats without duplicating logic.",
            "The frontend uses next-themes for dark/light mode, Framer Motion for animation, and a manually-rolled theme system in `src/lib/theme.tsx` (despite next-themes being in deps). The typographic system is three fonts: DM Sans (body), DM Mono (data), Instrument Serif (display), JetBrains Mono (clock) — the same multi-font discipline that the strongest portfolios in my research corpus used.",
          ],
        },
        {
          heading: "The Outcome",
          body: [
            "The site is deployed at fast-nuces.vercel.app and is actively used by FAST NUCES Islamabad students. The data pipeline has run on Vercel Cron + GitHub Actions for months without manual intervention. The Lost & Found system has reunited students with lost items. The smart-search endpoint has handled hundreds of natural-language queries.",
            "The lesson: the bottleneck was never the UI. It was the data. Once the harvesting pipeline was solid, the UI was straightforward. The interesting architecture is in the floor plan — what data lives where, who updates it, how stale it can be — not in the lobby.",
          ],
        },
      ],
      metrics: [
        { label: "UTILITIES", value: "12+" },
        { label: "DATA SOURCES", value: "5" },
        { label: "EXPORT FORMATS", value: "4" },
        { label: "DEPLOYMENT", value: "live" },
      ],
      tags: [
        "nextjs",
        "supabase",
        "typescript",
        "data-pipeline",
        "campus",
        "vercel-cron",
      ],
    },
  },
  {
    id: "gcr-fetch",
    index: "02",
    name: "GCR Fetch",
    codename: "GCR-FETCH",
    tagline:
      "Manifest V3 Chrome extension that bulk-downloads every Google Classroom resource as one organized ZIP, replacing 20–25 minutes of manual clicking per course.",
    year: "2026",
    role: "Solo developer · Chrome Extension MV3 · OAuth 2.0",
    stack: [
      "Chrome MV3",
      "OAuth 2.0",
      "Google Classroom API",
      "Vercel Serverless",
      "JSZip",
    ],
    status: "shipped",
    caseStudy: {
      context:
        "Google Classroom is the de facto LMS at many universities, but downloading every resource for a course is a manual chore: open each announcement, open each coursework material, click each attachment, wait, repeat. A single course can take 20–25 minutes. GCR Fetch turns that into one click and one ZIP.",
      sections: [
        {
          heading: "Overview",
          body: [
            "GCR Fetch is a cross-browser Chrome Extension (Manifest V3, also targeting Firefox via `browser_specific_settings.gecko`) that bulk-downloads every resource from a Google Classroom course as a single organized ZIP archive. It uses a hybrid DOM + REST API detection strategy — it watches the Classroom DOM for course activity, then calls the Classroom REST API v1 (`classroom.googleapis.com/v1`) to enumerate courses, coursework, materials, and announcements, and the Drive API v3 to fetch the actual files.",
            "The extension is vanilla JavaScript with no framework and no build step — the entire UI is a sidebar iframe (`sidebar/sidebar.html`) styled in Google's design language (Google Sans + Roboto, Google blue gradients). The ZIP is built in-browser via a vendored JSZip with DEFLATE level-6 compression. The result is one organized archive per course, with filenames sanitized and folders structured by coursework type.",
          ],
        },
        {
          heading: "The Challenge",
          body: [
            "The security model was the hard part. Manifest V3 service workers can't hold long-lived state, and the OAuth 2.0 code flow requires a client secret that must never touch the extension. The naive approach — embedding the secret in the extension — would leak it to anyone who unpacks the extension package.",
            "The solution was to split the OAuth flow: the extension uses `chrome.identity.launchWebAuthFlow` for the interactive code-flow, then sends the authorization code to a Vercel serverless function (`gcr-fetch-backend/api/token.js`) that holds the client secret, exchanges the code for tokens, and returns them to the extension. The secret never touches the client. API calls are restricted to an HTTPS-only Google-domain allowlist. Filenames are sanitized to prevent path traversal in the ZIP.",
          ],
        },
        {
          heading: "The Approach",
          body: [
            "The extension uses seven OAuth scopes: `classroom.courses.readonly`, `classroom.coursework.me.readonly`, `classroom.courseworkmaterials.readonly`, `classroom.announcements.readonly`, `drive.readonly`, `drive.file`, plus `email` and `profile`. The hybrid DOM + REST detection is the interesting architectural choice — it lets the extension discover courses by watching what the user navigates to (DOM) and then enumerate resources via the API, which is faster and more reliable than scraping the DOM for every resource.",
            "The backend is a single Vercel serverless function. The extension is the client. The ZIP is built in-browser. There is no server-side storage — tokens live in `chrome.storage.local` and are cleared on logout. The whole thing runs on a $0 budget.",
          ],
        },
        {
          heading: "The Outcome",
          body: [
            "GCR Fetch replaces 20–25 minutes of manual clicking per course with one click and one ZIP. It works across Chrome and Firefox. The OAuth flow has held up against real-world use without leaking the client secret. The vendored JSZip keeps the bundle small and the build step nonexistent.",
            "The lesson: the security model was the architecture. Once the token-exchange-via-serverless pattern was in place, everything else was straightforward. The interesting work was in the trust boundaries — who holds what secret, who can call what API — not in the UI.",
          ],
        },
      ],
      metrics: [
        { label: "TIME SAVED", value: "20-25 min" },
        { label: "BROWSER SUPPORT", value: "Chrome + Firefox" },
        { label: "OAUTH SCOPES", value: "7" },
        { label: "BUDGET", value: "$0" },
      ],
      tags: [
        "chrome-extension",
        "manifest-v3",
        "oauth2",
        "google-classroom",
        "serverless",
        "security",
      ],
    },
  },
  {
    id: "hamara-rozgar",
    index: "03",
    name: "Hamara-Rozgar",
    codename: "ROZGAR-ORCH",
    tagline:
      "Five-agent cooperative AI orchestrator for Pakistan's informal service economy — parses natural-language service requests, geocodes, ranks providers, prices, and books. Built at the Google Antigravity Community Hackathon.",
    year: "2026",
    role: "Team of 5 · Google Antigravity Hackathon · Agentic AI",
    stack: [
      "React 19",
      "Vite",
      "Capacitor",
      "Supabase",
      "Groq",
      "OSM Nominatim",
    ],
    status: "shipped",
    caseStudy: {
      context:
        "Pakistan's informal service economy — plumbers, electricians, AC technicians, tutors, beauticians, mechanics, carpenters — runs on phone calls and word-of-mouth. There is no Yelp, no TaskRabbit, no Uber for it. Hamara-Rozgar (\"our employment\") was built at the Google Antigravity Community Hackathon as an AI service orchestrator for this economy: a user types a natural-language request in English, formal Urdu (نستعلیق), or Roman Urdu slang, and a pipeline of five cooperating micro-agents handles the rest.",
      sections: [
        {
          heading: "Overview",
          body: [
            "Hamara-Rozgar is an agentic AI marketplace orchestrator — not a conventional job board or resume platform. The user-facing application is a single-page React 19 app (Vite, vanilla CSS, no Tailwind) that takes a natural-language service request — e.g. \"yaar AC bilkul thanda nhi kar rha G-13 me\" — and routes it through a pipeline of five cooperating micro-agents to: (1) parse intent, (2) geocode the location, (3) discover and rank nearby service providers, (4) compute a transparent dynamic-price quote, and (5) persist a booking transaction to a Supabase ledger (with localStorage fallback).",
            "A sixth concern, the DisputeAgent, handles self-healing recovery when a provider cancels or a customer disputes price/quality. The deliverable ships both as a web app and as a standalone Android APK via Capacitor (Hamara_Rozgar.apk, ~3.3 MB). A secondary Python scraper sweeps a 532-node 1km × 1km grid over the twin cities across 7 service categories, producing ~11,608 rows of real Islamabad/Rawalpindi business listings scraped from Google Maps.",
          ],
        },
        {
          heading: "The Challenge",
          body: [
            "The hardest problem was making five LLM-backed agents cooperate reliably on a $0 budget. Each agent call is expensive (Gemini, Groq, GitHub Models), and a single user request can trigger 3–5 agent invocations. The naive approach — calling every agent synchronously and hoping for the best — would burn through the Groq free tier in minutes and produce inconsistent results.",
            "The architectural decision was to treat AI as a scarce, expensive resource that must be cached, batched, and only invoked after deterministic logic has done the heavy lifting. Intent parsing uses Groq's `llama-3.3-70b-versatile` (fast, free tier). Geocoding uses OSM Nominatim (free, no API key). Provider discovery uses the scraped CSV (no live API calls). Only the final pricing and dispute-resolution steps invoke the expensive models.",
          ],
        },
        {
          heading: "The Approach",
          body: [
            "The stack is deliberately \"evacuated from Google Cloud\" — a stated design goal of the project. OSM Nominatim instead of Google Maps. Supabase instead of Firebase. Ollama/Groq/GitHub Models instead of Vertex AI. The `firebase.js` file is literally `export const db = null;` with a comment about the migration. This is not a gimmick — it's a load-bearing decision that keeps the operational budget at $0 and makes the whole stack self-hostable.",
            "The UI uses a hand-rolled \"AI Synthwave Tech\" palette (glassmorphic `--glass-bg`, purple `--accent-purple: #8b5cf6`) in 1,779 lines of vanilla CSS. The frontend is React 19 + Vite + Capacitor for the Android build. The booking ledger is Supabase via direct REST (`fetch` to `{supabaseUrl}/rest/v1/bookings`) — no SDK, sub-250KB footprint. localStorage is the offline fallback.",
            "The agent pipeline is the interesting architecture. Each agent has a defined input/output contract, a fallback path, and a timeout. The DisputeAgent is the self-healing layer — if a provider cancels, it re-runs the discovery and pricing agents with the cancellation as context. This is the pattern I'm most interested in: agentic systems where failure is expected and designed for, not prevented.",
          ],
        },
        {
          heading: "The Outcome",
          body: [
            "Hamara-Rozgar was built in a weekend at the Google Antigravity Community Hackathon by a team of five. It runs end-to-end on a $0 budget. The Android APK is signed and installable. The scraper produces real provider data for the twin cities. The five-agent pipeline handles multilingual input (English, formal Urdu, Roman Urdu slang) and produces structured booking transactions.",
            "The lesson: agentic AI is an architecture, not a feature. The interesting decisions are about boundaries — what each agent is responsible for, how it fails, how it recovers, how it shares state. The LLM is the smallest part. The orchestration is the architecture.",
          ],
        },
      ],
      metrics: [
        { label: "AGENTS", value: "5+1" },
        { label: "PROVIDERS SCRAPED", value: "11,608" },
        { label: "APK SIZE", value: "~3.3 MB" },
        { label: "BUDGET", value: "$0" },
      ],
      tags: [
        "agentic-ai",
        "multi-agent",
        "react",
        "capacitor",
        "supabase",
        "groq",
        "hackathon",
      ],
    },
  },
];

export const stack = [
  {
    category: "FRONTEND",
    description:
      "TypeScript, React, Next.js (App Router), Tailwind CSS, Framer Motion. I treat the frontend as a product surface — accessibility, performance budgets, and motion design are first-class concerns. Recent work includes a multi-utility campus platform with shadcn/ui on Radix, and a React 19 + Vite app shipped as an Android APK via Capacitor.",
  },
  {
    category: "BACKEND",
    description:
      "Node.js, Express, Next.js Route Handlers, Vercel Serverless. REST APIs, OAuth 2.0 (Google, NextAuth), third-party integrations (Google Maps, Google Classroom, Google Drive). I prefer boring, well-tested patterns — token exchange via serverless, HTTPS-only allowlists, sanitized filenames — over clever ones.",
  },
  {
    category: "DATA & DATABASES",
    description:
      "PostgreSQL via Supabase (primary), MongoDB via Atlas (secondary), Redis via Upstash (sessions). I've built data pipelines that harvest from Google Sheets, Excel, and scraped HTML, normalize the data, and persist it to Supabase for typed consumption by Next.js server components.",
  },
  {
    category: "AGENTIC SYSTEMS",
    description:
      "Multi-agent LLM orchestration (Groq llama-3.3-70b, Google Gemini, GitHub Models gpt-4o-mini). Built a five-agent cooperative pipeline with a self-healing DisputeAgent for Hamara-Rozgar. Interest is in AI as a load-bearing system component — caching, fallbacks, contracts between agents, failure recovery — not as a buzzword.",
  },
  {
    category: "TOOLS & PLATFORMS",
    description:
      "Git, GitHub Actions (CI/CD + cron workers), Vercel, Linux, Chrome Extension Manifest V3, Capacitor (Android). I've shipped to production from a $0 budget using free-tier Vercel, free-tier Supabase, free Google CSE queries, free GitHub Actions minutes, and Gmail SMTP.",
  },
  {
    category: "LANGUAGES",
    description:
      "TypeScript (primary), JavaScript, Python (data pipelines, scraping, AI), C++ (coursework), SQL. I reach for TypeScript first because the type system catches the bugs I would otherwise ship; I reach for Python when the task is data-shaped (scraping, ETL, AI inference).",
  },
];

export const experience = [
  {
    tier: "NOW",
    role: "B.S. Computer Science (6th semester)",
    company: "FAST-NUCES, Islamabad",
    dates: "2023 — 2027",
    status: "RUNNING" as const,
    description:
      "Currently in the 6th semester of a B.S. in Computer Science at the National University of Computer and Emerging Sciences, Islamabad. Seeking a full-stack development internship. Shipping production web apps and agentic systems on the side.",
    bullets: [
      "Coursework in data structures, algorithms, operating systems, databases, and software engineering.",
      "Four deployed projects spanning Next.js App Router, Supabase, MongoDB Atlas, Chrome Extension MV3, and multi-agent LLM orchestration.",
      "Active interest in agentic systems — built a five-agent cooperative AI orchestrator at the Google Antigravity Hackathon.",
    ],
  },
  {
    tier: "HACKATHONS",
    role: "Hackathon Participant",
    company: "Google Antigravity · atomcamp · ACM NUCES",
    dates: "2025 — 2026",
    status: "COMPLETE" as const,
    description:
      "Three hackathons across AI, agentic systems, and competitive programming. Each one forced a different kind of architecture under time pressure.",
    bullets: [
      "Google Antigravity Community Hackathon (AISeekho 2026) — team of 5, built Hamara-Rozgar, a 5-agent cooperative AI orchestrator for Pakistan's informal economy (multilingual parsing, OSM Nominatim geocoding, Supabase ledger, Groq).",
      "National AI Hackathon (atomcamp @ FAST-NUCES Islamabad, Jan 2025) — solo, two-day hackathon focused on agentic AI solutions.",
      "FAST Problem Solving Competition (FPSC, ACM NUCES, Winter 2025) — solo, inter-semester competitive programming challenge.",
    ],
  },
  {
    tier: "VOLUNTEER",
    role: "Volunteer Literacy Tutor",
    company: "Karwaan-e-Mudabbir",
    dates: "Sep 2024 — Dec 2024",
    status: "COMPLETE" as const,
    description:
      "16-hour community service engagement teaching basic literacy and mathematics to underprivileged students via Karwaan-e-Mudabbir's non-formal education program.",
    bullets: [
      "Taught basic literacy and mathematics to underprivileged students through a non-formal education program.",
      "16 hours of community service over a four-month engagement.",
    ],
  },
];

export const writing = [
  {
    id: "agentic-architecture",
    title: "Agentic AI is an architecture, not a feature",
    date: "2026-06-20",
    excerpt:
      "What I learned building a five-agent cooperative pipeline at the Google Antigravity Hackathon. The LLM is the smallest part — the orchestration is the architecture.",
    minRead: 9,
    tags: ["agentic-ai", "architecture", "multi-agent"],
  },
  {
    id: "zero-budget-stack",
    title: "Shipping production apps on a $0 budget",
    date: "2026-05-04",
    excerpt:
      "How four deployed projects run on free-tier Vercel, free-tier Supabase, free Google CSE queries, free GitHub Actions minutes, and Gmail SMTP. The stack is the architecture.",
    minRead: 7,
    tags: ["devops", "indie", "free-tier"],
  },
  {
    id: "data-pipeline-first",
    title: "The data pipeline is the product",
    date: "2026-03-12",
    excerpt:
      "Building FAST Isb Utilities taught me that the bottleneck is never the UI — it's the data. Once the harvesting pipeline is solid, the UI is straightforward.",
    minRead: 6,
    tags: ["data-engineering", "nextjs", "supabase"],
  },
];
