# hamara-rozgar — Project Deep Understanding

## Project Name

**Hamara-Rozgar (RozgarOrch)** — internally registered in `package.json` as `"service-orchestrator"` (version `0.0.0`, private). The Capacitor app is named `"Hamara Rozgar"` with appId `com.rozgar.orchestrator` (see `capacitor.config.json`). The repo directory is `hamara-rozgar`. The README's title is "Hamara-Rozgar (RozgarOrch) 🛠️" and it is explicitly a submission for **Challenge 2: AI Service Orchestrator for Informal Economy — Google Antigravity Hackathon**. The Hindi/Urdu phrase "hamara rozgar" literally translates to "our employment / our livelihood," which fits the project's positioning as a marketplace orchestrator for Pakistan's informal service economy (plumbers, electricians, AC technicians, tutors, beauticians, mechanics, carpenters).

## Tech Stack

Concrete versions are taken from `package.json` and `.env.example`:

**Framework & Runtime**
- `react` `^19.2.6` and `react-dom` `^19.2.6` (React 19, latest at time of build)
- `vite` `^8.0.12` with `@vitejs/plugin-react` `^6.0.1` (build tool / dev server)
- ESM-first (`"type": "module"` in `package.json`); entry `src/main.jsx` mounts into `index.html`

**Mobile / Native Wrapper**
- `@capacitor/core` `^8.3.4`, `@capacitor/android` `^8.3.4`, `@capacitor/cli` `^8.3.4`
- Pre-scaffolded `android/` Gradle project; native entry `android/app/src/main/java/com/rozgar/orchestrator/MainActivity.java` (a one-liner extending `BridgeActivity`)
- Build scripts `build_apk.sh` / `build_apk.bat` invoke `npm run build` → `npx cap sync android` → `./gradlew assembleRelease`

**UI / Styling**
- `lucide-react` `^1.16.0` for icons
- Hand-rolled CSS in `src/index.css` (1,779 lines, uses CSS custom properties — e.g. `--bg-primary: #080b11`, `--accent-purple: #8b5cf6`, glassmorphic `--glass-bg`, "AI Synthwave Tech" palette). README explicitly claims "Vanilla CSS (zero external bloated styling dependencies)." `src/App.css` (184 lines) is residual Vite template CSS.
- Google Fonts: `Outfit` (sans) + `Fira Code` (mono)

**Data / Persistence**
- Supabase via **direct REST** (`fetch` to `{supabaseUrl}/rest/v1/bookings`) — no `@supabase/supabase-js` SDK in `package.json`. README claims sub-250KB footprint.
- Browser `localStorage` (key `hamara_rozgar_bookings`) as offline fallback.
- `src/firebase.js` is now a stub: `export const db = null;` with a comment "Firebase has been evacuated to support 100% self-hosted/local stack operations."

**AI / NLP (configurable via `VITE_NLP_ENGINE`)**
- `regex` — built-in offline slang parser (large keyword dictionary in `Orchestrator.js`)
- `ollama` — self-hosted LLM via `POST {ollamaUrl}/api/generate` (default `llama3` at `localhost:11434`)
- `groq` — `https://api.groq.com/openai/v1/chat/completions` with model `llama3-8b-8192`
- `github` (default) — `https://models.inference.ai.azure.com/chat/completions` with model `gpt-4o-mini`
- Automatic failover chain: Groq → GitHub Models → regex

**Maps / Geocoding**
- OpenStreetMap **Nominatim** (`https://nominatim.openstreetmap.org/search` and `/reverse`) with custom `User-Agent: HamaraRozgar/1.0 (ammarasad2005@gmail.com)`
- Offline fallback sector dictionary in `src/data/serviceData.js` (5 Islamabad sectors: G-13, F-10, I-8, G-11, E-11)

**Dev tooling**
- `eslint` `^10.3.0`, `@eslint/js` `^10.0.1`, `eslint-plugin-react-hooks` `^7.1.1`, `eslint-plugin-react-refresh` `^0.5.2`, `globals` `^17.6.0`
- `.github/workflows/maps_scraper.yml` — scheduled GitHub Actions cron (`0 */6 * * *`) running a Python scraper

**Scraper (Python, in `maps-scrape/`)**
- `playwright`, `pandas`, `tqdm`, optional `playwright-stealth`
- Targets Google Maps via Playwright-driven Chromium; outputs `scraped_providers.csv`

## Overview

Hamara-Rozgar is an **agentic AI marketplace orchestrator for Pakistan's informal service economy**, not a conventional job board or resume platform. The user-facing application is a single-page React app that takes a **natural-language service request** — typed in English, formal Urdu (نستعلیق script), or Roman Urdu slang (e.g. *"yaar AC bilkul thanda nhi kar rha G-13 me"*) — and routes it through a pipeline of five cooperating "micro-agents" to: (1) parse intent, (2) geocode the location, (3) discover and rank nearby service providers, (4) compute a transparent dynamic-price quote, and (5) persist a booking transaction to a Supabase ledger (with `localStorage` fallback). A sixth concern, the **DisputeAgent**, handles self-healing recovery when a provider cancels or a customer disputes price/quality.

The README positions this as a hackathon submission under the theme "AI Service Orchestrator for Informal Economy" and frames the project as bridging the digital divide for daily-wage workers in Islamabad/Rawalpindi (the "twin cities"). A distinctive stated goal is that the stack is **"100% Evacuated from Google Cloud"** — i.e. it deliberately avoids Google Cloud services in favor of open-source / self-hostable equivalents (OSM instead of Google Maps, Supabase instead of Firebase, Ollama/Groq/GitHub Models instead of Vertex AI). The `firebase.js` file being reduced to `export const db = null;` is direct evidence of this migration. The deliverable is shipped both as a web app (Vite dev server, `localhost:5173`) and as a standalone Android APK via Capacitor — both `Hamara_Rozgar.apk` (~3.3 MB) and `Hamara_Rozgar_Signed.apk` (~3.3 MB) are committed to the repo root.

A secondary component is a Python scraper (`maps-scrape/hamara_rozgar_scraper.py`) that sweeps a 532-node 1 km × 1 km grid over the twin cities across 7 service categories, producing `scraped_providers.csv` (~11,608 rows of real Islamabad/Rawalpindi business listings scraped from Google Maps). This runs on a 6-hour GitHub Actions cron.

## Architecture

The application is a **single-page React SPA** with one root component (`src/App.jsx`, 1,283 lines) holding all UI state and a single orchestrator class (`src/agents/Orchestrator.js`, 1,306 lines) holding all "agentic" logic. There is no router, no Redux/Zustand, no component library — state is managed via ~25 `useState` hooks in `App.jsx`. Layers, top-down:

**1. UI Layer (`src/App.jsx`)** — Renders four views via a `currentView` state machine: `home` (request prompt), `matching` (radar spinner + result card + timeline), `active-booking` (live tracking stepper), `history` (receipt ledger). Also renders a "Proximity Location Hub" bar (GPS vs custom address modal), a Supabase connection badge, and a collapsible "Developer Reasoning Trace Logs" terminal at the bottom. The UI is laid out as a widescreen 3-column workspace (`340px 1fr 440px` per the README) with glassmorphic panels.

**2. Orchestrator Layer (`src/agents/Orchestrator.js` → `ServiceOrchestrator` class)** — The "brain." Receives callbacks `onTraceUpdate(logs)` and `onStateChange(state)` from the UI so that every internal action emits a structured trace log (`{timestamp, agent, action, details, reasoning, tool}`) that bubbles up to the timeline and terminal. Houses the five micro-agents as methods on a single class rather than separate files:
- `parseIntent()` — IntentAgent (NLP / regex / Ollama / Groq / GitHub Models, with failover)
- `getCoordinates()`, `getAddressFromCoords()`, `fetchLiveProvidersFromPlaces()`, `generateDynamicLocalProviders()`, `discoverAndRank()` — DiscoveryAgent
- `calculatePricing()` — PricingAgent
- `simulateBooking()`, `saveBookingToSupabase()`, `updateBookingInSupabase()`, `fetchBookingsFromSupabase()`, `simulateServiceProgress()` — BookingAgent + FollowupAgent
- `handleDispute()` — DisputeAgent

**3. Data Layer** — `src/data/serviceData.js` exports `sectorsCoordinates` (5 Islamabad sectors) and `sampleRequests` (4 bilingual example prompts). Supabase is reached via direct `fetch` (no ORM); localStorage mirrors everything for offline mode. `mapToDbBooking` / `mapFromDbBooking` translate camelCase JS objects ↔ snake_case SQL rows.

**4. Native Wrapper (`android/`)** — Standard Capacitor scaffold. `MainActivity.java` is empty (`extends BridgeActivity {}`). `AndroidManifest.xml` requests only `INTERNET` permission. The web `dist/` is bundled into the WebView.

**5. External Scraper (`maps-scrape/`)** — Decoupled Python pipeline; commits CSV outputs back to the repo via GitHub Actions. Not loaded by the React app at runtime (it is static data).

## Application Model

This is a **client-side-rendered (CSR) SPA** built with Vite + React 19. There is no server-side rendering, no static-site generation, no ISR, no traditional backend in the React app itself — every "agent" runs in the browser. All third-party calls (`fetch` to Groq, GitHub Models, OSM Nominatim, Supabase REST) are issued directly from the browser using keys injected at build time via `import.meta.env.VITE_*` (see `App.jsx` lines 14–22 and `.env.example`). The Supabase anon key is therefore exposed client-side; this is acceptable for an insert-only bookings table with row-level security (RLS) assumed, though RLS is not configured in-repo.

The **mobile distribution model** is a Capacitor-wrapped APK: `npm run build` produces `dist/`, `npx cap sync android` copies it into the Android project, and `./gradlew assembleRelease` produces `android/app/build/outputs/apk/release/app-release-unsigned.apk`. Both unsigned and signed APKs are committed to the repo root, so the app is shippable without any CI build.

The **scraper model** is a scheduled batch job (GitHub Actions cron every 6 hours, `MAX_RUN_TIME=18000` s = 5 h per run) that incrementally writes rows to `maps-scrape/scraped_providers.csv` and commits them back via the `github-actions[bot]` user. It supports resume via a `scraper.progress` JSON file storing `(node_idx, cat_idx)`.

## Data Model

There are three core entities. None use a formal ORM; they are plain JS objects / dataclasses.

**Intent** (output of IntentAgent, defined in the system prompt in `Orchestrator.js`):
```
{
  type: "booking" | "history" | "dispute" | "general_query",
  service: "AC Technician" | "Electrician" | "Plumber" | "Tutor" | "Beautician" | "Mechanic" | "Carpenter",
  location: string,          // e.g. "G-13" or "Sector 4 Airport Society"
  time: string,              // e.g. "Immediately", "Tomorrow Morning (10:00 AM)"
  severity: "high" | "medium",
  priceSensitivity: "high" | "medium",
  confidence: number         // 0.0–1.0
}
```

**Provider** (produced by either `fetchLiveProvidersFromPlaces` from OSM or `generateDynamicLocalProviders` synthesizer):
```
{
  id, name, specialization, baseRate, rating, reviewCount,
  reliabilityScore, cancellationRate, availability[],
  location, latitude, longitude, phone,
  experienceYears, toolsProvided, certifications[], reviews[],
  // computed at ranking time:
  calculatedDistance, matchScore, rankingReason
}
```

**Booking** (persisted to Supabase `bookings` table; SQL schema is in the README):
```sql
create table bookings (
  id text primary key,
  provider_id text not null,
  provider_name text not null,
  provider_phone text,
  service text not null,
  location text not null,
  time_slot text not null,
  pricing jsonb not null,
  status text not null,
  timestamp text not null,
  location_coords jsonb
);
```
The JS-side shape uses camelCase (`providerId`, `providerName`, `timeSlot`, `locationCoords`); `mapToDbBooking`/`mapFromDbBooking` translate. Booking IDs are generated as `"BK-" + Math.floor(1000 + Math.random() * 9000)`.

**Pricing** (computed by `calculatePricing`):
```
{ baseRate, distanceCost (50 PKR/km), urgencySurcharge (+30% if high severity),
  surgeSurplus (+15% for AC/Electrician/Plumber), loyaltyDiscount (-10%), totalPrice }
```

**Scraped Provider** (Python dataclass in `hamara_rozgar_scraper.py`, written to CSV):
```
name, specialization, phone, rating, review_count, address,
latitude, longitude, google_place_url, scraped_at
```
Phone numbers are normalized to `+92` prefix; dedup key is `name|phone`.

## Pipelines / Flows / Execution Path

The user is implicitly a **single role**: a consumer/customer booking services. There is no employer role, no seeker role, no admin role, no auth at all — the README and code show only the customer journey (with the "Sajid" placeholder name in the feedback modal hinting at a typical provider name). The flows below are observed in `App.jsx` `handleRequestSubmit` and the orchestrator methods.

**Flow A — Booking (default `type === "booking"`)** — `App.jsx:252`
1. User types a slang prompt on the home view (`currentView === "home"`) or clicks a category card / sample chip.
2. `handleRequestSubmit(text)` switches view to `matching` and calls `orchestrator.parseIntent(text, nlpConfig, [], previousIntent)`.
3. IntentAgent pre-classifies type via substring rules (`history`, `dispute`, `general_query`, else `booking`), sets a 3–5 step **workplan** (`setWorkplan`), and dispatches to the configured NLP engine (Ollama → Groq → GitHub Models → regex fallback chain). Each step logs a trace that animates the timeline UI.
4. If the parsed `location` is a custom string, `getCoordinates()` calls OSM Nominatim; otherwise it uses browser GPS (`navigator.geolocation`) or the sector dictionary.
5. `discoverAndRank(intent, {mode}, activeCoords)` first tries `fetchLiveProvidersFromPlaces()` (OSM POI search for `"{service} in {location}, Islamabad"`). If OSM returns nothing, falls back to `generateDynamicLocalProviders()`, which **synthesizes 3–5 providers** by jittering the geocoded coordinates by ±500 m–2 km and assigning randomized ratings (4.3–4.9), reliability (92–99), and base rates per service. Providers are then ranked by the **6-factor utility function** (see Design Decisions) and sorted descending by `matchScore`.
6. `calculatePricing(topProvider, intent)` produces the transparent quote. UI shows the matched provider card with name, rating, distance, reliability, price breakdown, and "Confirm & Dispatch Provider" button.
7. `handleConfirmBooking()` calls `simulateBooking()` → writes to Supabase via `saveBookingToSupabase()`; on failure, writes to `localStorage` under `hamara_rozgar_bookings`. Booking ID format `BK-XXXX`. A "WhatsApp message triggered" trace is logged (Inferred: no actual WhatsApp API call exists in the codebase — only the log string).
8. `simulateServiceProgress()` uses `setTimeout` to walk the booking through `Provider En-Route` (4 s) → `Work In Progress` (9 s) → `Completed` (15 s), each step syncing status to Supabase and `localStorage`.

**Flow B — History (`type === "history"`)** — `App.jsx:289`
Workplan is 3 steps: Intent Analysis → Querying Persistent Transaction Ledger → Displaying Historical Receipts. `loadBookings()` pulls from Supabase if `supabaseConnected`, else `localStorage`. UI switches to `currentView === "history"` rendering receipt-style cards with barcode stripes and grand-total PKR.

**Flow C — Dispute (`type === "dispute"`)** — `App.jsx:310` and `Orchestrator.handleDispute` at line 1195
Trigger words (`late`, `cancel`, `sasta`, `price`, `fare`, `budget`, `kharab kaam`, etc.) route into one of three dispute handlers:
- **Provider Cancelled** → re-invokes `discoverAndRank()` to find an alternative provider excluding the original `providerId`; if found, re-assigns and logs "Compensating customer with free 150 PKR voucher"; if not, sets status `"Cancelled - Fully Refunded"`. The 150 PKR voucher is a hardcoded constant, not actually credited anywhere.
- **Price Disagreement** → applies a 10% discount (`Math.round(booking.pricing.totalPrice * 0.9)`) and sets status `"Disputed - Pending Audit"`.
- **Quality Complaint** → escalates to "human administrator review panel" (status `"Disputed - Pending Review"`); Inferred: no actual admin panel exists in the codebase, only the trace message.

**Flow D — General Query (`type === "general_query"`)** — `App.jsx:380`
Two-step workplan (Marketplace Capacity Scan → Formulating Response). Largely a UI acknowledgement flow with no real catalog lookup.

**Flow E — Scraper (Python, separate from React app)** — `maps-scrape/hamara_rozgar_scraper.py:724`
Loads `twin_cities_grid.csv` (532 lat/lon nodes), iterates 7 categories × expanded query terms (e.g. Plumber → `["Plumber", "Sanitary Store", "Pipe Fitting"]`), opens a Playwright Chromium context with rotating user agents and optional stealth, blocks images/fonts/media for speed, scrolls each Google Maps results panel to the end, extracts `<a href*="/maps/place/">` listings, parses phone (`normalise_phone`) and coords (`parse_coords_from_url`), dedups by `name|phone`, appends to `scraped_providers.csv`, persists progress to `scraper.progress`, and exits gracefully on `MAX_RUN_TIME`. GitHub Actions commits the updated CSV + progress file back to the repo.

## Problem Solved

The README identifies the core problem as **"fragmentation in Pakistan's informal economy"** — specifically the digital divide that prevents daily-wage workers (plumbers, electricians, AC technicians, tutors, beauticians, mechanics, carpenters) and their customers from efficiently finding each other. The solution automates "the end-to-end booking lifecycle" across multiple friction points:

- **Linguistic barrier**: customers who speak only Urdu, Roman Urdu, or street slang cannot use form-based English apps. The IntentAgent + regex slang parser addresses this directly with trilingual keyword dictionaries (e.g. `toti`, `pankha`, `bijli`, `مکینک`, `الیکٹریشن`, `پڑھانا`).
- **Location ambiguity**: sector names like "G-13" or colloquial landmarks like "airport society" must become coordinates. OSM Nominatim + browser GPS + a sector dictionary solve this without Google Maps.
- **Provider matching opacity**: there is no transparent ranking. The 6-factor utility function (distance 25%, rating 20%, reliability 20%, price 15%, cancellation 10%, sector match 10%) makes the selection criteria explicit.
- **Opaque pricing**: customers don't know what they'll pay. The PricingAgent produces an itemized quote (base + travel @ 50 PKR/km + urgency + surge − loyalty).
- **Booking persistence**: paper-based ledgers lose records. Supabase `bookings` table + localStorage fallback provide a durable transaction ledger.
- **Service anomalies**: providers cancel en-route. The DisputeAgent auto-reschedules to the next-best candidate and issues a 150 PKR voucher credit (Inferred: the voucher is symbolic — there is no wallet table — but the intent is "self-healing fallback").

## Motivation for Building It

The README states the explicit motivation verbatim: it is a submission for **"Challenge 2: AI Service Orchestrator for Informal Economy — Google Antigravity Hackathon."** The project's stated mission is to "bridge the digital divide for daily wage workers" and "solve fragmentation in Pakistan's informal economy."

A secondary, strongly-emphasized motivation is the **"100% Evacuated from Google Cloud"** principle. The README, code comments (`firebase.js`), and orchestrator header (`// 100% Evacuated from Google Cloud: Runs fully offline and self-hosted`) all frame this as a deliberate migration away from proprietary cloud lock-in toward "open-source/self-hosted equivalents (OSM, Supabase, Ollama, Groq, GitHub Models)." This is positioned as both an engineering philosophy and a market-fit decision (self-hostable in low-infrastructure regions).

Inferred: the choice to scrape Google Maps while avoiding Google Cloud APIs is likely a cost-avoidance measure (Google Maps Places API is expensive; scraping is free but rate-limited and brittle). The scraper is a separate Python concern rather than integrated into the React app, which suggests it was used to bootstrap a provider database that the app itself does not yet consume at runtime (the orchestrator uses OSM live + synthesized providers, not `scraped_providers.csv`).

## Novel Aspects

- **The "Evacuation from Google Cloud" framing** is unusual and explicit. The repo retains a `firebase.js` stub (`export const db = null;`) purely as a migration artifact, with a comment explaining the evacuation. This is rare — most projects simply delete the old dependency.
- **Five cooperating micro-agents on a single class** (`ServiceOrchestrator`) with structured trace logging (`{timestamp, agent, action, details, reasoning, tool}`) that feeds a live "Chronological Agentic Execution Timeline" UI with accordion drawers per stage. The agentthoughts/reasoning/tool framing mimics the ReAct pattern but is presented to end-users, not just developers.
- **NLP auto-failover chain**: Groq → GitHub Models → regex, fully automatic and logged in the timeline. This gives resilience across free-tier cloud APIs.
- **6-factor weighted utility function** for provider ranking with explicit percentage weights (documented in README with LaTeX-style formula).
- **Synthesized provider generation** (`generateDynamicLocalProviders`): when OSM returns no POIs, the app generates 3–5 "vetted, bio-metric verified" candidates by jittering coordinates and assigning randomized but plausible attributes. This is a clever demo-fallback that keeps the UX flowing, though it raises honesty questions (see Tradeoffs).
- **Self-healing dispute resolution** with hardcoded compensation: 150 PKR voucher on provider cancellation, 10% discount on price disagreement, automatic re-routing to next-best candidate.
- **Twin-cities 532-node grid scraper** running on a 6-hour GitHub Actions cron, with resume-from-progress, deduplication, rotating user agents, optional Playwright stealth, and resource-blocking for speed. This is a serious production-grade scraping pipeline alongside the hackathon demo.
- **Sub-250KB Supabase client**: direct REST via `fetch` instead of the official SDK, justified by bundle-size constraints for a Capacitor mobile WebView.

## Optimizations / Efficiencies

- **Direct REST over SDK**: Supabase is called via raw `fetch` to `{url}/rest/v1/bookings` with `apikey` + `Authorization: Bearer` headers, avoiding the `@supabase/supabase-js` dependency. README claims sub-250KB footprint.
- **Offline-first resilience**: every cloud write (Supabase) falls back to `localStorage`; every NLP call falls back to regex; every OSM call falls back to the `sectorsCoordinates` dictionary; every provider search falls back to the synthesizer. No single external dependency can fully break the booking flow.
- **Scraper resource blocking** (`hamara_rozgar_scraper.py:755`): routes `**/*` through a handler that aborts `image`, `font`, `media`, `stylesheet` requests unless they come from `maps.googleapis.com` / `maps.gstatic.com`. This dramatically reduces bandwidth on a long scrape.
- **Scraper resume**: `scraper.progress` JSON stores `(node_idx, cat_idx)` so a 5-hour-limited GitHub Actions run can pick up the next cycle without re-scraping.
- **Scraper deduplication**: `dedup_key()` is `name|phone` (lowercased, whitespace-stripped); `seen_keys` set prevents re-writing existing rows.
- **Regex pre-classification** (`Orchestrator.js:48`): a fast substring scan sets `detectedType` before any LLM is invoked, so the timeline workplan can render immediately even before the (slow) NLP call returns.
- **NLP temperature = 0.1** and `response_format: {type: "json_object"}` on Groq and GitHub Models calls for deterministic, parseable output.
- **Bundle-conscious devDependencies**: only `lucide-react` as a runtime UI dependency beyond React itself; everything else is dev tooling or Capacitor.

## Design Decisions

- **Vanilla CSS over Tailwind / styled-components** — README explicitly states "zero external bloated styling dependencies." The 1,779-line `src/index.css` defines a complete design system using CSS custom properties (HSL palette, glassmorphic variables, transition tokens). This is unusual in 2025 React ecosystems.
- **Multi-agent class instead of separate files** — All five agents live as methods on a single `ServiceOrchestrator` class rather than five separate modules. This trades modularity for ease of state sharing (`this.traceLogs`, `this.activeWorkplan`, `this.activeTasks`) and simpler UI wiring.
- **6-factor utility function with explicit weights** — `distanceScore*0.25 + ratingScore*0.20 + reliabilityScore*0.20 + rateScore*0.15 + cancelScore*0.10 + sectorScore*0.10`. Distance score = `max(0, 100 - dist*10)`; rating score = `rating*20`; reliability score = raw 0–100; price score = `max(0, 100 - baseRate/30)` only if `priceSensitivity === "high"`, else fixed 80; cancel score = `100 - cancellationRate*5`; sector score = 100 if exact sector match else 40. The weights are hardcoded, not learned.
- **Pricing formula** — `50 PKR/km` travel, `+30%` urgency, `+15%` surge (only for AC/Electrician/Plumber), `-10%` loyalty. Loyalty is applied to *everyone* (no actual loyalty check), which is a design simplification.
- **camelCase ↔ snake_case mapping** — JS-side bookings use camelCase (`providerId`, `timeSlot`), Supabase uses snake_case (`provider_id`, `time_slot`). Explicit `mapToDbBooking`/`mapFromDbBooking` functions handle translation rather than an ORM.
- **No auth, no user accounts** — Bookings are anonymous; "loyalty" and "history" are inferred from the same `localStorage` bucket. This is a hackathon-scoped decision.
- **Inferred: scrape vs. API decision** — Using Playwright to scrape Google Maps rather than paying for the Places API is a cost-driven decision; the rotating user agents, stealth plugin, and 2–5 s human delays are anti-bot mitigations.
- **Inferred: separate `maps-scrape/` rather than integrated** — The scraped CSV (~11,608 real Islamabad businesses) is not loaded by the React app at runtime. The orchestrator instead queries OSM live or synthesizes providers. This decouples data collection from the demo and avoids bundling a 1 MB+ CSV into the WebView.

## Notable Implementation Details

- **`src/firebase.js` is a deliberate stub** — `export const db = null;` with the comment "Firebase has been evacuated to support 100% self-hosted/local stack operations." This file exists only to prevent build breaks for any lingering imports.
- **Multi-turn context memory** — The IntentAgent system prompt instructs the LLM to track conversation history: "If the latest user request is purely a location/address refinement (e.g. 'main sector 4 airport society mein rehta hu'), you must KEEP the 'service' category from the previous turn." The regex fallback mirrors this via `previousIntent?.service` carry-over.
- **Trilingual keyword dictionaries** — The regex parser recognizes English (`plumber`, `short circuit`), Roman Urdu (`toti`, `pankha`, `bijli`, `gari`, `almaari`, `drwaaza`), and formal Urdu script (`الیکٹریشن`, `مکینک`, `ٹیوٹر`, `پڑھانا`, `بیوٹیشن`, `नल` — the last is actually Devanagari for "tap", suggesting a copy-paste from a Hindi source).
- **OSM User-Agent is the author's email** — `HamaraRozgar/1.0 (ammarasad2005@gmail.com)`, complying with Nominatim's usage policy.
- **Five hardcoded Islamabad sector coordinates** in `serviceData.js`: G-13 (33.6409, 72.9814), F-10, I-8, G-11, E-11. These are the ultimate fallback if every geocoder fails.
- **Synthesizer provider names are service-specific** — e.g. AC Technician pool: `["Islamabad AC Coolers", "Peshawar HVAC Hub", "Rawal Cooling Services", "Target AC Specialists", "Safe Air Solutions"]`. Carpentry: `["Irfan Custom Woodworks", "Classic Wood Design & Polish", "Rapid Cabinet & Drawer Fixers", "Islamabad Lock & Handle Care", "Master Door Fitters"]`.
- **Both APKs are committed to the repo** — `Hamara_Rozgar.apk` (3,308,407 bytes) and `Hamara_Rozgar_Signed.apk` (3,354,070 bytes), despite `*.apk` being in `.gitignore`. The signed APK being committed suggests the author wanted a downloadable release artifact directly from GitHub.
- **Feedback modal hardcodes "Sajid AC Repairs"** as the provider name in the rating UI (`App.jsx:1221`), even though the actual provider name is dynamic. This is a leftover from demo scripting.
- **`scratch/test_parse.js`** is a tiny standalone test of the regex service detector (26 lines) — the only "test" in the repo.
- **ESLint ignores** `dist`, `android`, `scratch`, `public`, `maps-scrape` (see `eslint.config.js`), keeping lint focused on the React source.

## Tradeoffs and Limitations

- **No real authentication or user accounts.** Bookings are anonymous; "loyalty discount" is applied to everyone; "history" relies on a single `localStorage` bucket that is shared across all users on a device. There is no seeker/employer/admin role separation.
- **The scraped provider CSV (~11,608 real businesses) is not consumed by the app.** The orchestrator uses OSM live search or synthesized providers, not `scraped_providers.csv`. This means the substantial scraping infrastructure produces data that the demo never queries. Inferred: the CSV is intended for a future server-side matcher that hasn't been built.
- **Synthesized providers have fake phone numbers** — `+92 300 ${Math.floor(1000000 + Math.random() * 9000000)}` and randomized ratings. If OSM returns nothing, the user is shown fictional providers presented as "vetted, bio-metric verified." This is a UX honesty tradeoff.
- **The "WhatsApp message triggered" trace is not backed by any WhatsApp integration** — it is purely a log string (`Orchestrator.js:1106-1109`). No message is actually sent.
- **Service progress is `setTimeout`-simulated**, not real GPS tracking. En-Route fires at 4 s, Work In Progress at 9 s, Completed at 15 s, regardless of reality.
- **The "150 PKR voucher" compensation is symbolic** — there is no wallet, credit, or balance table; only the trace log mentions it.
- **The "human administrator review panel" for quality complaints does not exist** in the codebase — only the log string.
- **The "100% Evacuated from Google Cloud" claim is partial.** While Firebase is gone and Google Maps is replaced by OSM in the app, the project still relies on Groq (cloud), GitHub Models (cloud), and the scraper still targets Google Maps (the scraped data comes from Google). Inferred: "evacuation" means the runtime React app avoids Google Cloud specifically, not that the entire ecosystem avoids Google.
- **Supabase anon key is exposed client-side** (via `import.meta.env.VITE_SUPABASE_ANON_KEY`). Row-Level Security must be configured on the `bookings` table for this to be safe; no RLS policy is in the repo.
- **Pricing is heuristic, not market-driven.** Base rates are hardcoded per service (`AC=1500`, `Plumber=1000`, `Mechanic=2500`, else `1200` PKR); surge is applied based on service category, not actual demand telemetry.
- **No test suite** beyond the 26-line `scratch/test_parse.js`; no CI for the React app (only for the scraper).
- **The 6-factor utility weights are hardcoded**, not learned from historical booking outcomes.
- **No real-time availability** — `provider.availability` is always `["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM"]` for every provider; the first slot is auto-selected.
- **Single React component (`App.jsx`, 1,283 lines)** holds all UI state and rendering, making the codebase hard to extend.
- **Scraping Google Maps violates their ToS**; the scraper's anti-bot mitigations (stealth, rotating UAs, human delays) are an arms-race, not a sustainable data source.

## Impact or Value

The README's stated impact is to **"bridge the digital divide for daily wage workers (plumbers, electricians, tutors, AC technicians, beauticians, mechanics)"** in Pakistan's informal economy by automating the end-to-end booking lifecycle. By accepting natural-language queries in Urdu, Roman Urdu, and English, the platform lowers the literacy barrier for customers who cannot fill out form-based English apps. By exposing the 6-factor ranking and itemized pricing formula, it makes provider selection and fare computation transparent — a meaningful shift in a market where prices are typically negotiated opaquely.

The self-healing dispute agent (auto-reschedule + voucher credit) and the offline-first resilience (Supabase + localStorage + regex fallback) are operationally valuable for low-infrastructure regions where network connectivity is intermittent. The Capacitor APK packaging makes the platform installable on Android devices without app-store distribution, which fits the target demographic.

The secondary artifact — the 532-node twin-cities grid scraper running on GitHub Actions — has independent value as a longitudinal dataset of Islamabad/Rawalpindi informal service businesses (~11,608 deduplicated rows committed to the repo). Even if the React app does not currently consume it, the CSV is a reusable asset for any future marketplace, recommendation, or urban-informality research.

Inferred: as a hackathon submission, the project's value is primarily demonstrative — it shows a coherent vision of an agentic, trilingual, self-hostable marketplace orchestrator with a polished timeline UI. Its production-readiness is limited by the absence of auth, real provider data integration, real-time tracking, and actual notification/messaging backends.
