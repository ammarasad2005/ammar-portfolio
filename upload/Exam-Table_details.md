# Exam-Table — Project Deep Understanding

## Project Name

**Exam-Table** — but the product brands itself as **"FAST Isb Utilities"** (formerly referenced in code as `fsc-exams` in `package.json`). The README's tagline is *"The unified campus companion for FAST NUCES Islamabad"*. The live demo is hosted at `https://fast-nuces.vercel.app/` and the repo is `https://github.com/ammarasad2005/Exam-Table`.

The repo name still reflects the project's original narrow purpose (an exam timetable viewer), but the actual product surface has grown into a multi-utility campus platform. As the end-user guide puts it: *"the product has grown beyond a single exam viewer into a broader campus utilities layer."* (`docs/end-user-guide.md`).

## Tech Stack

Concrete libraries/versions from `package.json`, grouped by category:

- **Framework & runtime**: `next` `^14.2.0` (Next.js 14, App Router), `react` / `react-dom` `^18.3.0`, TypeScript `^5`, `ts-node` `^10` (runs the prebuild parser). Target ES2017, `strict: true`, `moduleResolution: "bundler"`, `paths: { "@/*": ["./src/*"] }` (from `tsconfig.json`).
- **Styling & UI**: `tailwindcss` `^3.4` with `tailwindcss-animate`, design tokens via CSS custom properties (see `tailwind.config.ts` using `oklch()` and `var(--color-*)`). shadcn/ui primitives in `src/components/ui/` built on Radix UI (full Radix family: `@radix-ui/react-*` for accordion, dialog, dropdown, popover, scroll-area, select, tabs, tooltip, etc.). `class-variance-authority`, `clsx`, `tailwind-merge`. `lucide-react` icons. `framer-motion` `^12.38.0` for animation. `next-themes` `^0.4.6` is in deps but theme handling is rolled manually in `src/lib/theme.tsx`.
- **Fonts** (next/font/google, in `src/app/layout.tsx`): DM Sans (body), DM Mono, Instrument Serif (display), JetBrains Mono (clock).
- **Data / backend**: `@supabase/supabase-js` `^2.105.4` (PostgreSQL + Storage), `pg` `^8.21.0` (used in `scripts/setup-settings-db.ts`), `exceljs` `^4.4.0` + `xlsx` `^0.18.5` (Excel parsing/export), `file-saver` `^2.0.5`, `zod` `^4.4.3`.
- **AI / search**: GitHub Models inference endpoint (`https://models.github.io/inference/chat/completions`, model `gpt-4o-mini`) invoked from `src/app/api/smart-search/route.ts` and `src/app/api/lost-found/claim/sync/route.ts`. Groq `llama-3.3-70b-versatile` used inside Python scripts (`scripts/filter_events.py`, `all_courses_schedule.py`).
- **Email**: `nodemailer` `^8.0.8` (Gmail SMTP, see `src/lib/email.ts`) and `resend` `^6.12.3`.
- **Forms / inputs**: `react-hook-form` `^7.76.0`, `@hookform/resolvers`, `react-day-picker`, `input-otp`, `embla-carousel-react`, `react-resizable-panels`, `cmdk`, `vaul` (drawer), `browser-image-compression` (Lost & Found photo uploads).
- **Visualization**: `recharts` `^3.8.1`.
- **Analytics / hosting**: `@vercel/analytics` `^2.0.1`, Vercel deployment with cron jobs (`vercel.json`).
- **Data pipeline (Python, not under npm)**: `requests` + `beautifulsoup4` + `lxml` (SLATE scraper), `pandas` / `openpyxl` (CLI tool), `xlsx` parsing via `SheetJS` in TS.
- **Dev tooling**: `eslint` + `eslint-config-next` `^14`, `playwright` `^1.59.1` (for `scripts/capture-screenshots.js`), `autoprefixer`/`postcss`. GitHub Actions for cron-based data refresh (`.github/workflows/update-timetable.yml`, `update-events.yml`).

## Overview

Exam-Table / FAST Isb Utilities is a Next.js 14 web application that consolidates eight distinct campus utilities for FAST NUCES Islamabad students into one site: weekly timetable viewer, exam schedule finder, custom exam builder, custom timetable builder, timetable optimizer, free-rooms finder, faculty directory, campus events calendar, semester academic calendar, and a Lost & Found system.

The README's framing of the problem is direct: *"No more digging through messy Google Sheets. No more searching emails for exam schedules. No more peeking into rooms to check if they're free. Everything you need — in one place."* The data sources are heterogeneous — a single monolithic Google Sheet for timetables, a dense Excel workbook for exam schedules, the SLATE portal for campus events, the official faculty page for directory info, and emails/group chats for the academic calendar. The project's job is to harvest all of these, normalize them, and present them through one mobile-first UI with filtering, search, conflict detection, and multi-format export (CSV, XLSX, ICS, PNG).

Most read-heavy data (timetable, exam schedule, events, faculty, semester calendar) is pre-parsed into static JSON under `public/data/` and bundled into the client, so filtering and search run with zero API latency. Only genuinely dynamic features (Lost & Found, feedback, admin auth, AI smart search, summer-semester overrides) go through Supabase + Next.js API routes. The whole thing is deployed on Vercel with cron-driven data refresh committed back to the repo by GitHub Actions.

## Architecture

Layered, with a clear split between *build-time data* and *runtime data*.

**Data ingestion layer (offline, Python + TS scripts):**
- `exam_schedule.xlsx` → `scripts/parse-excel.ts` (runs as `prebuild` via `ts-node`) → `public/data/schedule.json`. The parser expands merged cells, locates the header row by alias matching, normalizes dates from Excel serials / ISO / long-form text, extracts departments from "Degree & Sections" via regex, and writes one `ExamEntry` per (date, time, courseCode, batch, department, school). See `scripts/parse-excel.ts`.
- Google Sheets timetable → `all_courses_schedule.py` (~1237 lines) → `timetable.json` → `public/data/timetable.json`. The script downloads the workbook, resolves weekday sheet tabs via either Groq LLM or regex heuristics (`resolve_sheets_via_llm`, `resolve_day_name`), reads each day's sheet, classifies entries into `regular`/`repeat`, runs a two-pass ambiguity resolution with majority-vote elective group inference, and emits a deeply nested `batch → dept → category → course → section → day → [{room, time, ...}]` JSON plus an `__meta__.days` array.
- SLATE portal → `scripts/scrape_slate.py` (logs in, switches to "List of Events", extracts events) → `slate_calendar_events.json` → `scripts/filter_events.py` (Groq LLM filters for student-relevance) → `public/data/student_events.json`.
- `public/data/faculty/*.json` and `public/data/semester_calendar.json` are manually curated.

**Static data layer (build-time, in the bundle):** Pages `require()` the JSON at module scope, e.g. `src/app/schedule/page.tsx`: `const scheduleData = require('../../../public/data/schedule.json');`. This bakes the data into the JS bundle so the client can filter without API calls. `next.config.js` adds `Cache-Control: public, max-age=3600, stale-while-revalidate=86400` for `/data/:path*`.

**Business-logic layer (`src/lib/`):** Pure TypeScript functions:
- `timetable-filter.ts`: `flattenTimetable`, `filterTimetable`, `groupByDayTimetable`, `detectConflicts`, `parseTimeToMinutes` (with the FAST PM heuristic: hours 1–7 are treated as 13:00–19:00), `findMatchingCatalogEntry` (fuzzy match for summer course catalog).
- `room-logic.ts`: `buildRoomCalendar` (inverts the timetable into `room → day → BusySlot[]`), `getAvailableRooms` (classifies rooms as fully vacant / partially vacant / busy based on ≥30 min free threshold), `buildFullCalendar`, `groupRoomsByBlock`.
- `faculty.ts`: `flattenFaculty`, `searchFaculty`, `getFacultyRank` (Director/HoD/Professor/Lecturer/…).
- `events.ts`: `parseEventDate`, `getEventsForMonth`, `getCalendarCells`.
- `export.ts`: CSV/XLSX/ICS/PNG generators for exams, timetable, and events.

**API layer (`src/app/api/`):** Mostly `force-dynamic` Node routes; two Edge routes. `POST /api/feedback`, `GET/POST /api/lost-found` (and `[id]`, `claim/*`, `handoff`, `cron/reminders`), `POST /api/admin/login|logout|check|refetch-timetable`, `POST /api/smart-search` (AI), `POST /api/export-image` (Edge, `next/og`), `GET /api/timetable` (Node, serves flattened entries + summer catalog), `GET /api/schedule` (Edge, filters `schedule.json`).

**UI layer (`src/app/` App Router + `src/components/`):** Pages are client components (`'use client'`). Shared shell in `src/app/layout.tsx` mounts `ThemeProvider`, `Navbar` (desktop floating bottom), `FloatingMenu` (mobile radial FAB), `FeedbackWidget`, `GlobalShortcuts`, `Toaster`. Department accent colors propagate via CSS variables (`--accent-cs`, `--accent-ai`, …).

## Application Model

Predominantly **Static-Site-Generation with client-side processing** — a hybrid SSG/CSR architecture, not SSR or ISR for the read-heavy views.

- The Next.js App Router pages do `require('../../public/data/*.json')` at module scope. Because these pages are client components, the JSON is inlined into the JS bundle shipped to the browser, then re-parsed and filtered client-side in `useMemo`. The README confirms this: *"JSON → require() at module level → Static data baked in"* and *"All filtering, search, and pagination runs client-side for instant results with zero API latency."*
- Two routes are explicitly Edge-runtime (`export const runtime = 'edge'`): `GET /api/schedule` (filters `schedule.json` by `batch`/`dept`) and `POST /api/export-image` (renders an OG image via `next/og` with dynamic height based on entry count).
- The dynamic / data-mutating routes (`force-dynamic`) all hit Supabase: Lost & Found CRUD, claims lifecycle, feedback, admin auth, smart search, `/api/timetable` (which reads `semester_settings` to switch between regular/summer mode and apply the summer course catalog whitelist).
- Authentication is a custom **cookie-based admin session** (`src/lib/admin.ts`): the admin token is `Buffer.from(`${username}:${password}`).toString('base64')` derived from env vars, set as an `httpOnly` cookie (`admin_session`, 24h) on `POST /api/admin/login`. There is no general-purpose user auth — Lost & Found submissions are anonymous, matched to claims by email only.
- Data freshness is handled outside the app: GitHub Actions run hourly (`update-timetable.yml`) and weekly Monday (`update-events.yml`), regenerate the JSON, and **commit it back to `main`**, which triggers a Vercel redeploy. Admins can also trigger a refresh on-demand via `POST /api/admin/refetch-timetable`, which dispatches the GitHub Actions workflow through the GitHub REST API.
- Vercel cron jobs (`vercel.json`) hit `/api/lost-found/cron/reminders` twice (weekdays 05:00 UTC for daily nudges, Sundays 13:00 UTC for weekly digest); the route is guarded by a `Bearer $CRON_SECRET` header in production.

## Data Model

Two distinct data worlds: **(A)** static JSON documents bundled into the client, and **(B)** live Supabase tables.

### A. Static JSON entities

**ExamEntry** (`src/lib/types.ts`, produced by `parse-excel.ts`, written to `public/data/schedule.json`):
```
{ date: "18/05/2026", day: "Monday", time: "9:00 to 12:00 PM",
  courseCode: "CS2005", courseName: "Database Systems",
  batch: "2024", department: "CS", school: "FSC" }
```
Sample inspection of `schedule.json` confirms this exact shape. The Excel "Degree & Sections" cell is exploded into one entry per department (e.g. CS2005 for batch 2024 emits four entries: CS, AI, SE, DS) — this is the "clusters of courses" mentioned in the GitHub description.

**TimetableEntry** (flattened from `RawTimetableJSON`):
```
courseName, batch, department, section, day, time ("08:30 - 10:00"),
room ("CR-01"|"TBA"), type ('lecture'|'lab'), category ('regular'|'repeat'),
rescheduled?, exam?, isElective?, electiveGroup?, cancelled?, reserved?
```
The raw nested shape is `batch → dept → {regular, repeat} → courseName → section → day → [{room, time, rescheduled, exam, is_elective, elective_group, cancelled?}]` plus a top-level `__meta__: { days: [{day, sheetName, date?, isoDate?, isMakeup?}] }`.

**SummerCourseCatalogEntry**: `{ sheetName, displayName|null, hidden }` — stored in `semester_settings.course_mappings` JSONB and used as a strict whitelist for summer mode.

**RegularCourseMappings**: `{ [batch]: { [dept]: string[] } }` — a `HARDCODED_VALID_COURSES_MAP` constant in `types.ts` mirrors the same map in `all_courses_schedule.py`'s `VALID_COURSES_MAP` and is used as a fallback for the admin editor.

**StudentEvent / CalendarEvent**: `{ event_name, date ("June 2"), time ("12:00 pm - 3:00 pm"), event_location, from? }`. Parsed client-side by `parseEventDate` which infers the year.

**FacultyMember** (`src/lib/faculty.ts`): `{ name, status, email, office_room, linkedin_profile, profile_url, image_url }`. Grouped under `RawFacultyDepartment` in `faculty_data.json` with 9 departments (CS, AIDS, SE, CY, EE, CE, SH, AF, MS).

**SemesterCalendar** (`public/data/semester_calendar.json`): top-level `{ semester, academicYear, generatedAt, keyDates: [{label, date, type, icon, endDate?}], … }` plus holiday/month-grid sections.

### B. Supabase tables (`supabase_schema.sql`)

- **`lost_found_items`**: PK `id UUID`, `type` ('lost'|'found'), `category`, `title`, `description`, `location`, `handoff_note`, `parsed_found_at`/`raw_found_at`/`parsed_submitted_at`/`raw_submitted_at`, `date timestamptz`, `contact_info`, `reporter_name`, `is_resolved bool`, `resolved_by`, `image_url`, `resolution_image_url`, `created_at`, `updated_at`. Indexed on `is_resolved`. RLS allows public read/insert/update/delete (intentionally permissive for the student-facing demo).
- **`lost_found_claims`**: `id`, `item_id → lost_found_items(id) ON DELETE CASCADE`, `claimer_id`, `claimer_email`, `lost_item_id → lost_found_items(id) ON DELETE SET NULL`, `status` ('pending'|'verified'|'unclaimed'), `created_at`. Public read/insert/delete.
- **`campus_feedback`**: `id`, `email`, `category` ('bug_report'|'suggestion'|'review'|'inquiry'), `rating int 1..5`, `content`, `created_at`. Public insert + read; deletes are admin-only (enforced in `GET /api/feedback` via `isAdminAuthenticated`).
- **`semester_settings`** (singleton row, `id=1`): `semester_type` ('regular'|'summer'), `bypass_courses_config bool`, `google_sheets_url`, `semester_name`, `course_mappings jsonb`, `sheet_name_mappings jsonb`, `updated_at`. Created/migrated by `scripts/setup-settings-db.ts` which connects via `pg` using a `DATABASE_URL`/`POSTGRES_*` env. Public read + update.
- **Storage bucket** `lost_found_images` (public) for Lost & Found photo uploads.

## Pipelines / Flows / Execution Path

### 1. Exam schedule extraction (the headline flow)
1. Admin drops the new `exam_schedule.xlsx` (a workbook with sheets named like `FSC Final`, `FSM Final`, `FSE Final`) into the repo root.
2. `npm run dev` or `npm run build` triggers the `prebuild` hook: `ts-node scripts/parse-excel.ts`.
3. The script calls `XLSX.readFile('exam_schedule.xlsx', { cellDates: false, cellNF: true })` (deliberately *not* `cellDates:true` to avoid UTC shift), iterates the three school sheets via `findSheet(wb, 'FSC'|'FSM'|'FSE')` (prefix match), runs `expandMerges()` to fill merged cells, finds the header row by alias-matching normalized headers, then `buildEntries()` walks each data row parsing date cells through 5 fallback regex strategies, extracting departments from "Degree & Sections" via the regex `/(?:BS\s*\(\s*(CS|AI|DS|CY|SE|AF|FT|BA|EE|CE)\s*\)|\b(BBA)\b)/gi`.
4. Each unique `(date, time, courseCode, batch, department)` becomes one `ExamEntry` tagged with the school; entries are sorted by `parseDate` then `parseTime` and written to `public/data/schedule.json`. A safety guard refuses to overwrite the file if zero entries were parsed.
5. At request time, `GET /api/schedule` (Edge) reads the bundled JSON and filters by `?batch=&dept=` query params, returning JSON with `Cache-Control: s-maxage=3600, stale-while-revalidate=86400`.

### 2. Timetable retrieval (student journey)
1. Student lands on `/` → `/home`, picks a feature (timetable), a batch, school, department, section. Selections are persisted in `localStorage`.
2. Router navigates to `/timetable?batch=2024&dept=CS&section=A`.
3. `src/app/timetable/page.tsx` has already inlined `timetable.json` at module scope. It calls `flattenTimetable(timetableRaw)` to get a flat `TimetableEntry[]`, then `filterTimetable()` applies batch/department/section filters (with special handling for 2025 sub-sections like `A1`→`A` and elective suppression for 2022's `G-I/G-II/G-III` groups), then `groupByDayTimetable()`, then `detectConflicts()` to highlight overlapping slots.
4. List View shows day-grouped entries with "today pinned first"; Grid View uses an absolute-positioned canvas (`GRID_START = 480`, `PX_PER_MIN = 1.35`, `TIME_COL_WIDTH = 56`) per `docs/timetable_analysis.md`.
5. Export buttons call `downloadTimetableCSV` / `downloadTimetableXLSX` / `downloadTimetableICS` (with `RRULE:FREQ=WEEKLY` for 16 weeks regular / 8 weeks summer) / `downloadTimetableImage` (POSTs entries to `/api/export-image`).

### 3. Timetable Optimizer (the algorithmic centerpiece)
Implemented in `src/components/TimetableOptimizer.tsx` (~1108 lines):
1. User picks courses as `CourseRow[]` (year, dept, type, course, preferredSection) or uses "Default mode" to verify the standard course list for their batch/dept.
2. The optimizer collects each course's section→day→time data and runs a **recursive backtracking search** (`backtrack(courseIdx, currentSchedule, currentSlots)`). For each course it iterates sections, builds candidate `Slot[]` (skipping Saturday/Sunday), checks `isClash(currentSlots, newSlots)`, recurses on success, pops on backtrack.
3. Every complete clash-free combination is scored by `calculateWorkloadMetrics()` — span (max end − min start per day), bad-gap minutes (with midday 11:30–14:30 gaps of 30–100 min treated as a *good* midday break), consecutive-afternoon fatigue (≥2 PM classes ending at 15:50+ incur a 300 penalty + 25% comfort deduction), missed midday breaks, early/late class counts, >3 classes per day.
4. Mode-specific `penalty` is computed (`max_off_days`: `(activeDays*10000) + workloadScore`; `balanced`: `workloadScore + (activeDays*250)`; `min_workload`: `(workloadScore*100) + activeDays`; `custom`: weighted sum of normalized user sliders).
5. Schedules are sorted ascending by penalty; **Fit Score** is mapped to a 60–100% range so even mid-tier results look positive. Top 15 are returned; "Preview" writes them to `localStorage['fsc_timetable_preview']` for the Custom Timetable Builder to consume.

### 4. Free Rooms Finder
1. `buildRoomCalendar(raw)` inverts the timetable into `Record<room, Record<day, BusySlot[]>>`.
2. For a target day + slot, `getAvailableRooms()` walks each room computing total overlap minutes; if 0 → fully vacant, if `freeMinutes >= 30` → partially vacant, else busy.
3. Six canonical FAST slots are defined in `STANDARD_SLOTS` (08:30–09:50, 10:00–11:20, 11:30–12:50, 13:00–14:20, 14:30–15:50, 15:55–17:15). `buildFullCalendar` produces a 6-day × 6-slot grid; `groupRoomsByBlock` buckets rooms by A/B/C/D/Other.

### 5. Lost & Found lifecycle
- Anonymous user submits an item (`POST /api/lost-found`) with image (compressed client-side, uploaded to Supabase Storage). Location is hidden until a claim is filed.
- Claimer submits a claim → backend matches against their prior "lost" reports via `POST /api/lost-found/claim/sync` which asks `gpt-4o-mini` (via GitHub Models) to semantically compare the found item against the user's lost reports, returning `{matchId, confidence}` with a threshold of 80.
- Email notifications (`src/lib/email.ts`) fire via Gmail SMTP: claim recorded, new-claim alerts to other claimers, claim alerts to the original reporter, verification reminders, unclaim confirmations.
- Vercel cron hits `/api/lost-found/cron/reminders` daily (weekdays) + weekly digest (Sundays) to email pending claimers a verification link.
- Resolution: any user can mark an item resolved (optionally with a proof photo). Items auto-expire: 30+ days flagged, 60+ days archived (per README).

## Problem Solved

The README's "The Problem" section enumerates eight concrete frustrations the app removes:

- **Messy Timetables** — FAST's official timetable is "a single, colossal Google Sheet crammed with every section of every department of every batch." This app flattens it and lets a student filter to their slice in seconds.
- **Clustered Exam Schedules** — exam dates arrive as a dense Excel "listing every course for every batch." The `parse-excel.ts` pipeline expands the "Degree & Sections" column into per-department rows and exposes them through search/filter.
- **No Room Availability Info** — previously students had to "physically walk to the room and peek in." The Free Rooms Finder inverts the timetable into a room calendar.
- **Faculty Info Is a Scavenger Hunt** — office rooms were only on hallway nameplates. The Faculty Directory indexes 9 departments with search.
- **Campus Events Buried in Emails** — events are scraped from SLATE and filtered by an LLM for student relevance.
- **Semester Schedule? Good Luck** — academic calendar lives in `public/data/semester_calendar.json`, always accessible.
- **Lost Items, No Recovery System** — fully replaced by the Supabase-backed Lost & Found with claims, AI matching, email reminders, and resolution workflow.
- **No Way to Optimize Your Timetable** — the backtracking Optimizer finds all clash-free section combinations and ranks them by comfort.

The GitHub description's mention of "exam schedule sheet, which contains clusters of courses" maps directly to the Excel "Degree & Sections" column where a single exam row lists multiple departments (e.g. "BS(CS), BS(AI), BS(SE), BS(DS)") that `parse-excel.ts` then explodes into separate `ExamEntry` records.

## Motivation for Building It

The README is explicit: the app "exists to solve every single one of these problems" listed under The Problem. The end-user guide adds context: *"Before this platform, a student often had to assemble their week from multiple sources… That process becomes even harder for irregular students, repeat students, and anyone trying to compare sections or build a mixed timetable across batches and departments."*

Inferred: The author (Ammar Asad, per LICENSE) is himself a FAST NUCES Islamabad student — the data sources (specific batches 2022–2025, specific departments, the SLATE portal, the actual `exam_schedule.xlsx` committed in the repo) all point to a personal-itch motivation. The expansion from a single exam viewer into a 10-feature utilities platform suggests it grew organically from "solve my own problem" into "solve the campus's problem." This inference is grounded in: the `fsc-exams` package name, the explicit FAST-specific PM-time heuristic baked into both Python and TS, and the `HARDCODED_VALID_COURSES_MAP` that exactly mirrors a real FAST course catalog by batch/year.

## Novel Aspects

Several implementation choices stand out as non-obvious or clever:

- **FAST PM time heuristic.** Both Python (`all_courses_schedule.py:502`) and TypeScript (`timetable-filter.ts:264`, `room-logic.ts:31`) treat any hour 1–7 as PM (13:00–19:00) because the source Google Sheet uses ambiguous 24-hour-looking notation. This is documented inline: *"FAST University classes are 8:30 AM to 5:15 PM. If the hour is 1 through 7, it definitively means PM."*
- **LLM-assisted sheet-name resolution.** `all_courses_schedule.py` uses Groq's `llama-3.3-70b-versatile` to map arbitrary sheet tab names like `"Thu (Makeup)"` or `"Tuesday (18 May)"` to canonical weekdays + extracted dates + makeup flag — with a deterministic regex fallback if `GROQ_API_KEY` is missing.
- **Backtracking timetable optimizer with comfort scoring.** A full combinatorial search with mode-aware penalty functions, a Fit Score mapped to a 60–100% visual range, and domain-specific penalties (midday break, afternoon fatigue block at ≥2 consecutive PM classes ending 15:50+, bad-gap minutes, >3 classes/day).
- **Inverted timetable → room calendar.** Reusing one data source (timetable) to power a completely different feature (Free Rooms) with a 30-minute vacancy threshold for partial availability.
- **AI semantic matching for Lost & Found claim sync.** `POST /api/lost-found/claim/sync` asks `gpt-4o-mini` to compare a found item against a user's reported lost items using explicit semantic-equivalence rules (synonyms, generic-vs-specific, complementary details) and negative contradiction rules (different colors/brands), gating matches at ≥80 confidence.
- **Admin "refetch timetable" button triggers a GitHub Actions workflow_dispatch** via the REST API rather than running the parser server-side — sidestepping Vercel's function timeout for a long-running Python job.
- **GitHub-Actions-committed data refresh.** Cron workflows regenerate `timetable.json`/`student_events.json` and commit them back to `main`, leveraging the Vercel redeploy-on-push as the actual cache invalidation mechanism.
- **Prebuild Excel parse safety guard.** `parse-excel.ts` refuses to overwrite `schedule.json` if zero entries were parsed, preventing a bad Excel upload from wiping the live schedule.
- **Per-department accent colors** propagating through CSS variables (`--accent-cs`, `--accent-ai`, …) for instant visual recognition across cards, pills, borders.
- **Glass-morphism header with "laser rail" gradient border** (purple→orange in light, gold→yellow in dark) — a deliberate brand signature per the Design Highlights section.
- **Auto-detecting theme by time of day** (`theme.tsx`: dark mode 18:00–06:00) as the default before any user preference is set.

## Optimizations / Efficiencies

- **Bundle-once, filter-client**. By `require()`-ing JSON at module scope in client components, all read-heavy filtering happens with zero network latency after the first page load. `next.config.js` adds aggressive cache headers on `/data/*` as a secondary optimization for the few routes that fetch JSON at runtime.
- **Edge runtime for hot paths**. `/api/schedule` and `/api/export-image` are `runtime = 'edge'` for low cold-start latency on the most-hit endpoints.
- **Lazy dynamic imports for heavy exporters**. `export.ts` does `await import('exceljs')` and `await import('file-saver')` only when the user actually clicks an export button, keeping the main bundle lean.
- **Image compression before upload**. `browser-image-compression` compresses Lost & Found photos client-side before they hit Supabase Storage.
- **Deduplication at multiple layers**. `parse-excel.ts` dedupes by `${date}|${time}|${courseCode}|${batch}|${department}`. `all_courses_schedule.py` dedupes by `(batch, dept, category, course_name, section, day, actual_time)` via a `seen_slots` set. Conflict detection in `detectConflicts` skips Saturday/exam/rescheduled entries to avoid false positives.
- **Majority-vote elective group inference**. In `all_courses_schedule.py`, the first pass collects `course_group_counts[(batch, course)][group] += 1` and the second pass assigns each occurrence the group with the max count — a robust heuristic for noisy source data where the same course may appear inconsistently tagged.
- **Range-based elective detection**. `is_elective_by_range = (c_max < d_max)` — a course is elective if its max section count is less than the department's max, a clever signal-free inference.
- **Two-pass ambiguity resolution**. The Python parser separates "unambiguous" rows from an "ambiguous pool" and runs a deduction pass, rather than failing on messy data.
- **Singleton settings row**. `semester_settings` is constrained `CHECK (id = 1) DEFAULT 1`, eliminating any need to query by other keys.
- **Selective Supabase use**. Only Lost & Found, feedback, admin, and semester-mode flags use the DB — everything else is statically bundled, keeping Supabase costs and round-trips minimal.
- **Sheet name prefix matching**. `findSheet(wb, 'FSC')` matches both `"FSC"` and `"FSC Final Term"` exactly, so renamed sheets don't break parsing.
- **Header alias table**. `parse-excel.ts` and `/api/timetable` route both use alias maps (`sno`→`serial`, `timeslot`→`time`, etc.) so column renames don't break parsing.
- **Cron-protected reminders**. The cron route returns early when no pending claims exist, avoiding unnecessary email sends.

## Design Decisions

- **Source-available, not open source.** The LICENSE is explicit: code is publicly visible for learning and PRs are welcome, but reproduction, UI copying, and commercial use require the author's permission. This is unusual for a campus tool and signals the author's investment in the design.
- **Python for ingestion, TypeScript for the app.** The data pipeline (`all_courses_schedule.py`, `scrape_slate.py`, `filter_events.py`, `cli-tool/exam_timetable.py`) is Python (using `requests`, `beautifulsoup4`, `pandas`, `openpyxl`), while the web app is TypeScript/Next.js. The two worlds meet at JSON files in `public/data/`.
- **No ORM.** Despite `pg` and `@types/pg` being installed, the Supabase JS client (`@supabase/supabase-js`) is the primary data access layer; `pg` is only used in the one-off `scripts/setup-settings-db.ts` for DDL.
- **No general-purpose auth.** Only the admin dashboard is authenticated (cookie-based, hardcoded credentials from env). Lost & Found, feedback, and event viewing are intentionally anonymous to reduce friction for student use — the trade-off being the permissive RLS policies noted in the README.
- **Static JSON instead of a cached API layer for reads.** This keeps the app resilient to Supabase outages (the `serveLocalFallback` in `/api/timetable` proves the design) and makes the read paths instant.
- **`force-dynamic` on every Supabase-touching route** to ensure fresh data, while static JSON pages remain SSG.
- **`cellDates: false` in the Excel parser** to avoid the well-known UTC timezone shift bug when parsing Excel date serials — an explicit comment in `parse-excel.ts` explains the choice.
- **Theme default by time of day** (dark 18:00–06:00) rather than `prefers-color-scheme` — a UX choice that fits the student use case (evening study sessions).
- **Department accent colors baked into CSS variables** so adding a new department is a single token addition.
- **Custom session token = base64(username:password)** — minimal but functional; clearly labeled as a demo-grade approach.
- **Permissive RLS policies with a comment that they're "for demo purposes."** The author acknowledges this is a known trade-off for the student-facing deployment.
- **Vercel cron jobs for Lost & Found reminders, GitHub Actions for data refresh.** Two different schedulers because the data refresh needs to commit back to git while the email reminders only need to hit an API endpoint.

## Notable Implementation Details

- **The `__meta__` key in `timetable.json`** stores `days: [{day, sheetName, date?, isoDate?, isMakeup?}]` so the UI can show real dates alongside day names and flag makeup classes. The flatteners (`flattenTimetable`, `buildRoomCalendar`) explicitly skip `__meta__`, `'System'`, and `'Reserved'` top-level keys.
- **2025 batch sub-section handling.** `filterTimetable` normalizes 2025 sections by stripping trailing digits (`A1`→`A`, `B2`→`B`) and `detectConflicts` skips conflicts between different 2025 sub-sections because they're treated as the same logical section.
- **2022 batch elective groups (G-I, G-II, G-III, Gp-…)** get special-cased exclusion from the section dropdown and from the main timetable view.
- **`extractTimeFromCourseName`** in `timetable-filter.ts` extracts inline time ranges like `Linear Algebra (08:30-10:00)` from course names — the source Google Sheet sometimes embeds the time in the course cell rather than the time column.
- **`/api/timetable` route does double duty.** It serves both the regular semester (no filtering) and the summer semester (filters `batch === 'Summer'`, applies a strict catalog whitelist via `findMatchingCatalogEntry`, auto-builds the catalog from entries on first run).
- **`/api/admin/refetch-timetable` triggers GitHub Actions** by POSTing to `https://api.github.com/repos/ammarasad2005/Exam-Table/actions/workflows/update-timetable.yml/dispatches` with `ref: 'main'`.
- **Smart search has a local-first fallback.** `/api/smart-search` first does keyword scoring locally (title=3pts, description=2pts, category=2pts, location=1pt per matched word >2 chars), then optionally enriches with `gpt-4o-mini` for alternative search terms. If `GITHUB_TOKEN` is missing or the AI call fails, it returns `source: 'local'` instead of erroring.
- **OG image export uses `next/og`** (`ImageResponse`) with dynamic height `Math.max(800, entries.length * 150 + 250)` and a styled navy-blue (#1F3864) header that mirrors the Excel export styling.
- **`docs/timetable_analysis.md`** is a 385-line engineering self-document explaining the grid coordinates (`GRID_START = 480`, `PX_PER_MIN = 1.35`), card rendering, state persistence keys, conflict heuristics, optimizer mechanics, and export pipelines — a rare level of internal documentation for a personal project.
- **`docs/end-user-guide.md`** is a 393-line Socratic-style user guide ("How can you…?") that treats the product as a "unified campus utilities layer."
- **`docs/campus_map_rules.md`** suggests there's some kind of campus map feature or rule set in development.
- **`cli-tool/exam_timetable.py`** is a standalone 680-line pandas/openpyxl CLI for generating personalized exam timetables from XLSX — likely the predecessor or sibling of the web app's exam parsing, kept for offline/personal use.
- **`patch_custom_exam.js`** is a one-off file-rewrite script (`fs.readFileSync` → regex replace → `fs.writeFileSync`) that added bundle-management state to `src/app/custom/page.tsx` — a snapshot of a dev workflow, not a runtime artifact.
- **`scratch.mjs`** is a 15-line throwaway test script that fetches `/api/lost-found` and inspects claimed items — committed as part of the dev history.
- **`TimetableOptimizer.jsx`** at the repo root (alongside `src/components/TimetableOptimizer.tsx`) appears to be an older/parallel JSX copy of the optimizer component — likely a backup or WIP refactor.
- **`@vercel/analytics`** is mounted in the root layout for production traffic insights.
- **Three fonts loaded via `next/font/google`** with CSS variables (`--font-body`, `--font-mono`, `--font-display`, `--font-clock`) so Tailwind can reference them by name.

## Tradeoffs and Limitations

- **Permissive RLS on every Supabase table.** `lost_found_items`, `lost_found_claims`, `campus_feedback`, and `semester_settings` all allow public read + write (and on `lost_found_items`, public delete). The schema comments explicitly call this out: *"Allow anyone to delete items (for demo purposes)"*. Anyone with the Supabase anon key (which is `NEXT_PUBLIC_` and therefore in the client bundle) can mutate or delete any Lost & Found item. This is appropriate for a trusted campus demo but would be unsafe in a hostile environment.
- **Admin auth is env-var credentials + base64 token.** `getAdminSessionToken()` is literally `Buffer.from(`${username}:${password}`).toString('base64')` — no hashing, no rotation, no rate limiting on `/api/admin/login`. Anyone who guesses the username/password (or steals the token) gets full admin powers including feedback deletion and timetable refetch.
- **`CRON_SECRET` is the only protection on the reminders endpoint**, and only in production — in dev, the bearer check is skipped (`if (process.env.NODE_ENV === 'production' && ...)`), meaning anyone can hit the cron route in a non-prod deploy.
- **Static JSON means data can be stale by up to 1 hour** (the GitHub Actions timetable refresh runs hourly). There is no client-side revalidation or push-based update for the timetable/exam/events data.
- **AI features are hard dependencies on third-party inference APIs** (GitHub Models `gpt-4o-mini`, Groq `llama-3.3-70b-versatile`). If those APIs are down or tokens are missing, smart search degrades to local keyword matching but Lost & Found claim sync (`/api/lost-found/claim/sync`) returns a 500 with `"AI matching unavailable"`.
- **Hardcoded course catalog.** `HARDCODED_VALID_COURSES_MAP` in `types.ts` and `VALID_COURSES_MAP` in `all_courses_schedule.py` must be kept in sync manually for new batches/departments. The admin override mechanism (`override_course_mappings` flag) mitigates this but the hardcoded map remains the source of truth when the override is off.
- **Excel parsing is fragile to schema changes.** `findHeaderRow` requires six specific columns (date, time, courseCode, courseName, degreeSections, batch) by alias; renaming any of these breaks parsing silently (the safety guard catches the "zero entries" case but not partial breakage).
- **The Python pipeline assumes a specific FAST Google Sheets URL** (`SHEET_INPUT` constant) with the option to override via Supabase `google_sheets_url`. If the sheet is moved or made private without updating the URL, the hourly cron will start producing empty/old data.
- **No automated tests.** There's no `__tests__` directory, no `vitest`/`jest` config, no test script in `package.json`. Only `scratch.mjs` and `patch_custom_exam.js` exist as ad-hoc dev scripts. `npm run type-check` and `npm run lint` are the only quality gates.
- **`scratch.mjs`, `patch_custom_exam.js`, root-level `TimetableOptimizer.jsx`, and `cli-tool/exam_timetable.py`** are loose artifacts that aren't part of the runtime but bloat the repo and could confuse contributors.
- **Bundle size implications of inlining JSON.** Bundling `timetable.json` (the entire university's timetable for all batches/depts/sections) into the client means the homepage JS payload scales with campus size. Acceptable today (FAST Islamabad is one campus) but not a pattern that would scale to multi-campus deployment.
- **Time-zone naive date handling.** Dates are stored as `DD/MM/YYYY` strings and parsed with `new Date(year, month-1, day)` — fine for display but vulnerable if the server's timezone ever matters.
- **The Optimizer caps results at 15.** `allValidSchedules.slice(0, 15)` — if there are thousands of valid combinations, the user sees only the top 15 by penalty, with no pagination.
- **Saturday is excluded from the optimizer** (`if (day === 'Saturday' || day === 'Sunday') continue`) — fine for FAST's regular schedule but would silently miss valid combos if Saturday classes existed.
- **`exam_schedule.xlsx` is committed directly to the repo** — if it ever contains real student-identifiable information (it doesn't appear to, just course/batch data), this would be a privacy concern.

## Impact or Value

The README and end-user guide frame the impact in concrete student-experience terms: replacing "messy Google Sheets," "searching emails for exam schedules," "peeking into rooms to check if they're free," and "word of mouth" lost-item recovery with one always-available web app. The feature set directly mirrors each named pain point (eight problems → ten features), which is strong evidence the product was scoped from real user needs rather than aspirational feature lists.

Specific value points grounded in the code:
- **Hourly timetable refresh + commit-to-git workflow** means the timetable a student sees is never more than ~1 hour stale, automatically, without any manual ops.
- **AI-powered Lost & Found claim matching** (`gpt-4o-mini` semantic comparison) materially improves the odds that a found laptop charger gets reunited with its owner — a problem with literally zero prior solution on this campus per the README.
- **Backtracking timetable optimizer** solves a problem the README claims was previously unsolved on campus: finding clash-free section combinations for cross-department or elective-laden course loads. The 15-result cap with Fit Score and Comfort Score gives students an actionable shortlist.
- **Multi-format exports (CSV/XLSX/ICS/PNG)** mean a student can pipe their schedule into Google Calendar, share it as an image on WhatsApp, or open it in Excel — meeting students where they actually are rather than forcing them back into the web app.
- **Free Rooms Finder** converts the timetable (already parsed for one purpose) into a real-time room availability map with zero additional data sourcing — a high leverage reuse of existing data.
- **The product is production-deployed** (Vercel, live at `fast-nuces.vercel.app`) with analytics, cron jobs, and an admin dashboard — not a demo. The breadth of features (10 distinct utilities) and the depth of internal documentation (`timetable_analysis.md`, `end-user-guide.md`) suggest real ongoing use by real FAST students.

Inferred: Given the FAST-specific data, the SLATE scraper credentials requirement, and the deep course-catalog knowledge baked into the code, the realistic impact boundary is "FAST NUCES Islamabad students (~thousands of undergraduates across 4 batches × 5+ departments)." The architecture (single-campus, static-JSON, GitHub-Actions-refresh) is right-sized for that scope. The author retains commercial rights under the source-available license, suggesting he sees potential future value in the design itself.
