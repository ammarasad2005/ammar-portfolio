# WayFinder — Project Deep Understanding

## Project Name

**Wayfinder** (package name: `wayfinder-app`, version `0.1.0`, profile screen labels it `Wayfinder v1.0`).

The HTML `<title>` declared in `app/layout.tsx` is the dual-brand tagline: *"Wayfinder — Search with Google. Travel with Yango."* The OpenGraph description calls it a tool that "uses Google Maps intelligence to help you find, verify, and navigate to any destination in Pakistan — then seamlessly hands off to Yango for your ride."

The repo is hosted at `https://github.com/ammarasad2005/WayFinder` and contains a single Next.js workspace under `wayfinder-app/`. Despite the generic name "WayFinder," this is **not** a generic pathfinding visualizer, indoor navigator, or itinerary planner — it is a region-locked (Pakistan) destination-discovery web app that bridges Google Places search and Yango ride-hailing via a deep-link handoff. The repository's top-level `.gitignore` even references an AI-assisted workflow (`wayfinder-app/AGENTS.md` and `wayfinder-app/CLAUDE.md` are deliberately excluded), and a `ChatGPT Image Jun 9, 2026…` asset is ignored, suggesting AI-assisted design iteration.

## Tech Stack

Concrete libraries and versions (from `wayfinder-app/package.json`):

**Framework & runtime**
- `next` `16.2.7` (Next.js App Router, React Server Components-capable)
- `react` / `react-dom` `19.2.4`
- `typescript` `^5`, `@types/node` `^20`, `@types/react`/`@types/react-dom` `^19`
- `eslint` `^9` with `eslint-config-next` `16.2.7` (flat config in `eslint.config.mjs`)

**Auth & data**
- `next-auth` `^4.24.14` (Google OAuth provider, JWT session strategy)
- `@upstash/redis` `^1.38.0` (server-side persistent storage for saved places of authenticated users)
- `rate-limiter-flexible` `^11.2.0` (declared as a dependency; the current in-code rate limiter in `app/api/places/autocomplete/route.ts` is a hand-rolled in-memory `Map` — `Inferred:` the dependency appears staged for a future Redis-backed limiter that a TODO comment explicitly calls out)

**Mapping / routing (external APIs, no client SDK)**
- Google Places API **v1** (`https://places.googleapis.com/v1`) for Autocomplete, Place Details, Nearby Search, and Place Photo media
- Google Directions API (`https://maps.googleapis.com/maps/api/directions/json`) with `departure_time=now` for live traffic
- Google Static Maps API for server-rendered dark-themed map tiles
- Yango partner deep-link scheme (`https://yango.go.link/route`) plus the Yango web order fallback (`https://yango.com/en_int/order/`)

**Styling**
- Hand-rolled CSS Modules (`*.module.css`) plus a global design system in `app/globals.css` (CSS custom properties, dark theme, max-width 430px mobile-first shell). No Tailwind, no UI kit.
- Inter font loaded from Google Fonts via `@import`.

**Dev / build tooling**
- `next dev` / `next build` / `next start` scripts; `next/font` is mentioned in README but the actual layout uses a Google Fonts `@import`.
- No test runner, no CI config (`.github/` is absent), no Dockerfile, no `docker-compose.yml`.

## Overview

Wayfinder is a mobile-first web app for users in Pakistan that compresses the "find a place → confirm it's real → get a ride there" journey into a single flow. The user searches for any destination using Google Places (restricted to region code `pk`), lands on a richly populated place detail page (photos, reviews, hours, editorial summary, live driving directions with traffic), and then taps a single sticky CTA — *Continue with Yango* — which constructs a Yango `go.link` deep link that opens the native Yango app with the destination pre-filled (or falls back to Yango's web order page if the app isn't installed).

The README itself is the unmodified `create-next-app` template, so it conveys nothing project-specific. All actual product intent is encoded in source: the metadata in `app/layout.tsx`, the three-step onboarding in `components/WelcomeScreen.tsx` ("Search with Google → Destination Verified → Continue with Yango"), and the dual-brand color tokens (`--google-blue: #4285F4` for search affordances, `--yango-red: #FF3D4F` for ride-action buttons) in `app/globals.css`.

Geographic scope is hard-coded at the API layer: `lib/google-maps.ts` sets `includedRegionCodes: ['pk']` for autocomplete, `region: 'pk'` for geocode and directions, and the default fallback location is Islamabad city center (`33.6844, 73.0479` in `app/home/page.tsx` and `app/place/[placeId]/page.tsx`). Five place categories are surfaced as quick chips: Restaurants, Hotels, Airports, Landmarks, Businesses (`CATEGORIES` constant in `app/home/page.tsx`).

## Architecture

The app is a classic Next.js App Router structure with a thin BFF (Backend-For-Frontend) layer. All third-party Google calls are server-side only; the browser never sees `GOOGLE_MAPS_API_KEY`.

```
wayfinder-app/
├── app/
│   ├── layout.tsx                # Root layout, metadata, <Providers>
│   ├── page.tsx                  # Entry: route to /home or show WelcomeScreen
│   ├── providers.tsx             # SessionProvider (next-auth)
│   ├── globals.css               # Design system tokens
│   ├── home/page.tsx             # Search + nearby + recent searches
│   ├── place/[placeId]/page.tsx  # Place detail + directions + Yango CTA
│   ├── saved/page.tsx            # Saved places (local + server merge)
│   ├── profile/page.tsx          # Account / sign-out / clear history
│   └── api/
│       ├── places/{autocomplete,details,nearby,photo}/route.ts
│       ├── directions/route.ts
│       ├── map/route.ts          # Server-rendered dark Static Map proxy
│       ├── saved/route.ts        # Upstash Redis CRUD
│       └── auth/[...nextauth]/route.ts
├── components/                   # SearchBar, PlaceCard, MapEmbed, BottomNav, WelcomeScreen
├── lib/
│   ├── google-maps.ts            # Server-side Google API wrappers + input validators
│   ├── yango-handoff.ts          # Yango go.link URL builder
│   └── storage.ts                # localStorage helpers (saved places, recent searches, visit flag)
├── next.config.ts                # CSP, HSTS, remote image hosts, security headers
└── tsconfig.json                 # Strict mode, @/* path alias to repo root
```

**Layers and interactions:**

1. **Client shell** — every page is a Client Component (`'use client'`) wrapped by `SessionProvider`. The shell is constrained to `max-width: 430px` (mobile-first), with a fixed `BottomNav` (Home / Saved / Profile).
2. **BFF API routes** — `app/api/**/route.ts` proxies all Google calls. They validate inputs (`isValidPlaceId`, `isValidLatLng`, `isValidRadius`, `isValidType` in `lib/google-maps.ts`), translate Google Places **v1** response shapes back into the legacy "Classic" shape the frontend expects, and apply route-specific `Cache-Control` headers.
3. **Persistence tier** — dual storage: `lib/storage.ts` for guest `localStorage` (`wf_saved_places`, `wf_recent_searches`, `wf_visited`); `app/api/saved/route.ts` + Upstash Redis (`wf:saved:{userId}`) for authenticated users. The Saved page merges both, deduplicating by `placeId`.
4. **Auth tier** — NextAuth v4 with Google provider, JWT sessions (30-day `maxAge`), `__Secure-next-auth.session-token` HttpOnly cookie. The JWT callback stores `providerAccountId` as `token.sub`, and the session callback surfaces it as `session.user.id` so the Redis key can be scoped per user.
5. **Map tier** — rather than shipping the Google Maps JS SDK to the client (which would require `'unsafe-eval'` in CSP), the app uses Google **Static Maps** rendered through `app/api/map/route.ts` with a custom dark style array, returned as a single `<img>`.

## Application Model

The application is a **client-rendered SPA-with-BFF** running on the Next.js App Router. Observations:

- Every page component (`app/page.tsx`, `app/home/page.tsx`, `app/place/[placeId]/page.tsx`, `app/saved/page.tsx`, `app/profile/page.tsx`) starts with `'use client'`. There is **no SSR data fetching**, no `generateStaticParams`, no `revalidate` on page-level loaders. The root page is essentially a client-side router based on `useSession()` + `hasVisited()` localStorage flag.
- The only server-side rendering work happens in API route handlers, which are edge/node Runtime functions invoked via `fetch` from the client.
- Caching is layered:
  - **Browser**: `Cache-Control` headers vary per endpoint — `no-store` for autocomplete & directions (live), `public, s-maxage=1800` for nearby, `public, s-maxage=3600, stale-while-revalidate=86400` for place details, `max-age=2592000` (30 days) for photos, `max-age=86400` for static maps.
  - **Next fetch cache** inside `lib/google-maps.ts`: `next: { revalidate: 3600 }` on Place Details, `1800` on Nearby, `86400` on Geocode, `0` on Autocomplete & Directions.
  - **Filesystem cache** for place photos in `.cache/photos/{sha256}.bin` + `.json` (see `/api/places/photo`).
- `Inferred:` Because all pages are client components and the homepage depends on `navigator.geolocation`, the app is effectively a PWA-style installable web app rather than an SSR/SEO-oriented site — which is consistent with the mobile-first, ride-hailing use case.
- Geolocation is requested client-side (`navigator.geolocation.getCurrentPosition`) with an 8-second timeout and `maximumAge: 300_000` (5 min). Denial silently falls back to Islamabad center, with a banner offering "Use my location" retry.

## Data Model

There is no traditional RDBMS/ORM. State lives in three places:

**1. Google Places v1 entities (mapped to legacy shape)** — `app/api/places/details/route.ts` performs an explicit field-by-field translation from the new `places.googleapis.com/v1` response (e.g. `displayName.text`, `formattedAddress`, `regularOpeningHours.openNow`, `priceLevel` enum, `authorAttribution.displayName`) into the legacy Google Places shape the frontend types expect (`name`, `formatted_address`, `opening_hours.open_now`, `price_level` integer 0–4, `reviews[].author_name`). This lets the frontend `PlaceDetails` interface stay stable.

**2. Client-side TypeScript types** — defined inline in `lib/storage.ts` and the page components:

```ts
// lib/storage.ts
interface SavedPlace {
  placeId: string; name: string; address: string;
  rating?: number; photoRef?: string;
  lat: number; lng: number;
  savedAt: number; collection?: string;
}
interface RecentSearch {
  placeId: string; name: string; address: string;
  searchedAt: number;
}
```

`SavedPlace` includes a `collection?` field for grouping (e.g., user-defined buckets), and the Saved page derives a `collections` list dynamically via `Array.from(new Set(places.map(p => p.collection).filter(Boolean)))`.

**3. Redis schema** — single key per user: `wf:saved:{userId}` → JSON array of `SavedPlace`, capped at 100 entries, with a 1-year TTL (`60 * 60 * 24 * 365`). `getUserKey()` enforces per-user data isolation. Both `save` and `unsave` operations are read-modify-write (fetch existing array → filter/unshift → `redis.set`).

**4. Local cache** — `.cache/photos/{sha256(ref_width)}.bin` (image bytes) + `.json` (content-type metadata). Cache key is `sha256(`${photoRef}_${maxWidthNum}`)`.

**Validation contracts** — `lib/google-maps.ts` exports pure validators: `isValidPlaceId` (regex `^[A-Za-z0-9_\-]+$`, <300 chars), `isValidLatLng` (-90..90, -180..180), `isValidRadius` (1..50,000m), `isValidType` (16-entry allowlist: restaurant, hotel, lodging, airport, tourist_attraction, establishment, point_of_interest, store, bank, hospital, gas_station, shopping_mall, mosque, church, school, university). The photo route adds `isValidPhotoRef` allowing `/` plus the alphanumerics.

## Pipelines / Flows / Execution Path

**Flow A — First-time visitor → home**
1. `app/page.tsx` mounts. `useSession()` resolves; if no session and `hasVisited()` is false, `setShowWelcome(true)` after a `setTimeout(0)`.
2. `WelcomeScreen` renders the three-step onboarding ("Search with Google → Destination Verified → Continue with Yango"). Two CTAs: *Start Searching* (calls `markVisited()` then `router.push('/home')`) or *Sign in to sync saved places* (`signIn('google', { callbackUrl: '/home' })`).
3. Returning visitors (localStorage flag set) or signed-in users are `router.replace('/home')` immediately.

**Flow B — Search → place detail → Yango handoff (the core loop)**
1. On `/home`, `SearchBar` generates a per-mount `sessionToken = crypto.randomUUID()` (Google Places billing optimization — one session token batches Autocomplete calls and terminates with a Place Details call).
2. User types → debounced 300 ms → `GET /api/places/autocomplete?input=…&sessionToken=…`. The route enforces a 30 req/min-per-IP in-memory rate limit, validates input length (2–200 chars), then calls `fetchAutocomplete()` which POSTs to `places.googleapis.com/v1/places:autocomplete` with `includedRegionCodes: ['pk']`.
3. The v1 response (`suggestions[].placePrediction`) is mapped to legacy `predictions[]` with `place_id`, `description`, `structured_formatting.{main_text,secondary_text}`.
4. User picks a suggestion → `addRecentSearch()` writes to `localStorage` → `router.push('/place/${placeId}')`.
5. `app/place/[placeId]/page.tsx` mounts. It generates its **own** `sessionToken` (separate from the search bar's), calls `GET /api/places/details?placeId=…&sessionToken=…`. The server applies a field mask (`X-Goog-FieldMask: id,displayName,formattedAddress,location,types,rating,userRatingCount,priceLevel,regularOpeningHours,photos,reviews,editorialSummary,websiteUri,nationalPhoneNumber,businessStatus`) and returns the mapped legacy object with `Cache-Control: public, s-maxage=3600, stale-while-revalidate=86400`.
6. In parallel, the page requests geolocation and calls `GET /api/directions?oLat=&oLng=&dLat=&dLng=`. Server calls Google Directions with `departure_time=now`, `region=pk`, `mode=driving`, no caching. Client computes traffic level: `ratio = duration_in_traffic / duration`; `<1.2 → Low`, `<1.5 → Moderate`, else `Heavy`. The encoded `overview_polyline.points` is forwarded to `MapEmbed`.
7. `MapEmbed` builds a URL `/api/map?lat=&lng=&dLat=&dLng=&polyline=…` → `app/api/map/route.ts` constructs a Google Static Maps URL with a custom dark style array, two markers (origin blue `0x4285F4`, destination red `0xFF3D4F`), and a `path=weight:4|color:0x4285F4|enc:{polyline}` overlay. Returned as a single PNG, cached 24 h.
8. Photos are fetched via `/api/places/photo?ref=…&w=800`. Server SHA-256-hashes `${ref}_${width}` → checks `.cache/photos/{hash}.bin`; on hit, streams cached bytes with `X-Cache: HIT`; on miss, fetches `places.googleapis.com/v1/{ref}/media?key=…&maxWidthPx=…`, validates `content-type` starts with `image/`, writes both `.bin` and `.json` metadata, returns `X-Cache: MISS`.
9. User taps **Continue with Yango**. `handleYangoHandoff()` calls `buildYangoUrlFromDestination(lat, lng)` from `lib/yango-handoff.ts` and sets `window.location.href` to the result.

**Flow C — Yango deep link construction** (the single most interesting algorithm in the repo):
`buildYangoUrl({ endLat, endLng })` assembles `https://yango.go.link/route?…` with:
- `adj_t=vokme8e_nd9s9z9` (Adjust widget tracker token — partner-program identifier)
- `adj_deeplink_js=1`, `utm_source=widget`, `adj_adgroup=widget` (Adjust tracking params)
- `ref=wayfinder`, `lang=en`
- `end-lat` / `end-lon` (6-decimal fixed-point)
- **Crucially, `start-lat` / `start-lon` are omitted on purpose**. The doc comment explains: "We omit starting coordinates so the native Yango app automatically uses the mobile device's high-accuracy GPS for the pickup location. This avoids inter-city tariff loading failures and loading screen hangs."
- `adj_fallback` is set to a fully-constructed Yango web order URL (`https://yango.com/en_int/order/?gto={lng},{lat}&ref=wayfinder`) — note Yango web uses **longitude,latitude** ordering, opposite of the deep link.

The go.link then routes the user: native app if installed, otherwise the web order fallback.

**Flow D — Saved places**
- Guest: all saves go to `localStorage` via `savePlace/unsavePlace` (capped at 100, dedup by `placeId`, newest-first).
- Authenticated: `SavedPage` fetches `/api/saved`, merges with localStorage, dedups by `placeId`. Unsave fires both a local removal and a `POST /api/saved { action: 'unsave', placeId }`. The server read-modify-writes the Redis list.

## Problem Solved

The app solves a very specific frictions-of-compounding problem: in Pakistan, a Yango rider often knows roughly where they want to go but cannot reliably (a) spell the place name in a way Yango's own search understands, (b) verify the place actually exists and is currently open, (c) estimate travel time and traffic before committing to a ride, or (d) trust that the pin Yango is routing them to is the *correct* branch/location.

Wayfinder addresses each:
- **Discovery quality**: Google Places' Pakistani POI coverage is far richer than Yango's internal index, so search uses Google's v1 autocomplete (region-locked to `pk`).
- **Verification**: the detail page surfaces photos, reviews, hours, business status, and a "✓ Verified via Google Maps" badge — the user is *looking at* what they're going to before they order.
- **Travel preview**: live traffic-aware directions and a static route map render before the ride is ordered, so the user can sanity-check distance/time/traffic.
- **Handoff friction**: one tap on *Continue with Yango* hands the verified destination coordinates to the Yango app via a go.link deep link — no copy/paste, no second search inside Yango.
- **Quota protection**: the photo filesystem cache, the field-mask-based Place Details calls, the `next.revalidate` cache tiers, and the per-IP autocomplete rate limiter all defend Google Maps API spend, which is the dominant cost of running the app.

`Inferred:` The dual "Verified via Google Maps" badge language in the UI ("Arrive with confidence. We've verified the best way to reach your destination.") suggests the product positioning is *trust* — users get a Google-grade answer before paying for a Yango ride.

## Motivation for Building It

The README is the stock `create-next-app` boilerplate and states no motivation. However, several concrete signals in the code reveal intent:

- **`app/layout.tsx` metadata description** (direct quote): *"Wayfinder uses Google Maps intelligence to help you find, verify, and navigate to any destination in Pakistan — then seamlessly hands off to Yango for your ride."*
- **`components/WelcomeScreen.tsx`** headlines: *"Search with Google. Travel with Yango."* with subtitle *"The smartest way to find your destination and book your ride in Pakistan."*
- **`lib/yango-handoff.ts`** comment: the Yango `go.link` format and Adjust tracker token (`adj_t=vokme8e_nd9s9z9`) come "from the partner documentation" — `Inferred:` this is consistent with the author being part of, or building toward, the Yango partner/affiliate program (the `ref=wayfinder` affiliate/source ID reinforces this).
- **`next.config.ts`** explicitly omits geolocation from `Permissions-Policy` *"intentionally — we use it on the client"*, indicating the author cares about both security posture *and* a real mobile-geolocation UX.

`Inferred:` The most likely motivation is to build a Yango-affiliate acquisition surface: a polished destination-search experience that ends in a Yango ride order, monetizable via the `ref=wayfinder` parameter on every handoff. The Pakistan region lock and the Islamabad default strongly suggest the author's local market.

## Novel Aspects

A few details distinguish this from a typical "Google Maps wrapper":

- **Deliberate omission of the pickup coordinates in the Yango deep link** (`buildYangoUrlFromDestination` only sends `end-lat`/`end-lon`). The code comment documents the failure mode this avoids — "inter-city tariff loading failures and loading screen hangs" — meaning if Wayfinder passes a stale or low-precision pickup, Yango's tariff engine can mis-load. Letting the Yango app capture its own high-accuracy GPS at handoff is a non-obvious, experience-driven choice.
- **Longitude/latitude ordering asymmetry** between the two Yango surfaces: the `go.link` deep link uses `start-lat`/`start-lon` (lat-first), but the web-order fallback uses `gfrom={lng},{lat}` and `gto={lng},{lat}` (lng-first). The code handles both correctly.
- **Server-side static-map styling as a CSP workaround.** Most Next.js Google Maps tutorials embed the Maps JS SDK, which requires `'unsafe-eval'` in the Content-Security-Policy. Wayfinder instead renders maps as styled PNGs via the Static Maps API, proxying through `/api/map` with an 11-rule dark style array (`style=feature:all|element:geometry|color:0x161922`, etc.), letting the CSP keep `script-src` tighter (it still allows `'unsafe-eval'` for now, with a `TODO(security)` to tighten).
- **Google Places v1 → legacy shape adapter.** The BFF routes do explicit field mapping (`displayName.text → name`, `priceLevel: PRICE_LEVEL_EXPENSIVE → 3`, `regularOpeningHours.openNow → opening_hours.open_now`, etc.). This is unusual — most apps pick one API generation. The author appears to have migrated to v1 (field masks reduce billing) but kept the frontend types stable.
- **Filesystem-cached photo proxy with `X-Cache: HIT/MISS` introspection.** Photos are SHA-256-keyed by `ref + width`, stored as `.bin` + sidecar `.json` for content-type, served with 30-day `Cache-Control`. This is a meaningful cost-control pattern not commonly seen in small Next.js demos.
- **Dual storage strategy with merge semantics.** Saved places live in `localStorage` for guests and Redis for authenticated users, and the Saved page merges both client-side, deduplicating by `placeId`. This means a guest's saves survive sign-in as long as the local list isn't cleared.
- **Email masking in the profile screen** — only the first two characters of the local part are shown (`xx***@domain`), a small but thoughtful PII touch.

## Optimizations / Efficiencies

- **Field masks on every Places v1 call** (`X-Goog-FieldMask`) restrict billed fields to exactly what the UI renders — directly reduces Google bill.
- **Session tokens** (`crypto.randomUUID()`) on Autocomplete + Place Details calls qualify for Google's session-based Autocomplete billing (one Place Details call terminates a session and bills at the lower session rate).
- **Tiered cache TTLs** in `lib/google-maps.ts`:
  - Autocomplete: `revalidate: 0` (always fresh — user-typed)
  - Directions: `revalidate: 0` (live traffic)
  - Nearby: `revalidate: 1800` (30 min)
  - Place Details: `revalidate: 3600` (1 h)
  - Geocode: `revalidate: 86400` (24 h)
- **HTTP `Cache-Control` headers** mirror those tiers and add `stale-while-revalidate` for details and nearby.
- **Photo filesystem cache** at `.cache/photos/` prevents re-fetching the same photo reference, which is the most expensive per-byte Google call.
- **Debounced autocomplete** (300 ms) in `components/SearchBar.tsx` reduces call frequency.
- **In-memory rate limiter** on `/api/places/autocomplete` — 30 req/min per IP — prevents runaway billing from a malicious or buggy client. (TODO comment notes this should be Redis-backed for multi-instance deployments; `rate-limiter-flexible` is already in `package.json`.)
- **Static-map PNG instead of Maps JS SDK** saves the client a multi-hundred-KB script download and avoids `unsafe-eval` runtime cost.
- **Image constraints** in `/api/map/route.ts`: width/height clamped to 100–1200 px, zoom 1–21; in `/api/places/photo`: width clamped to 100–1600 px. Both prevent abuse.
- **Saved-places cap of 100** enforced both client-side (`slice(0, 100)` in `lib/storage.ts`) and server-side (`deduped.slice(0, 100)` in `app/api/saved/route.ts`) with a 1-year TTL on the Redis key.
- **Mobile-first 430px shell** avoids unnecessary layout/paint on desktop viewports the product isn't designed for.

## Design Decisions

- **Server-only API key.** `lib/google-maps.ts` reads `GOOGLE_MAPS_API_KEY` only on the server; the comment at the top states "API key is never sent to the client." All maps/places traffic is proxied through `/api/**`.
- **Legacy-shape stability layer.** Rather than rewriting frontend types when migrating to Places v1, the BFF routes translate responses in-place. This isolates the frontend from Google's API churn.
- **NextAuth v4 (not v5/Auth.js).** Stable, well-documented; JWT sessions (30-day `maxAge`) avoid extra database calls. The session cookie is forced `__Secure-`-prefixed and HttpOnly.
- **`session.user.id` injected via callbacks.** Because NextAuth v4 doesn't put provider account ID on `session.user` by default, the `jwt` callback captures `account.providerAccountId` into `token.sub`, and the `session` callback copies it to `session.user.id` so the Redis key can be user-scoped (`wf:saved:{userId}`).
- **Dark mode as the default and only theme.** All tokens in `globals.css` are dark (`--surface-0: #090B12`). No light-mode variant exists. The Static Map style array is dark-themed to match.
- **`max-width: 430px` mobile shell** with desktop centering. The product is unambiguously a phone app, not a responsive web app.
- **No external icon/UI library.** Every icon is an inline SVG component (`BackIcon`, `HeartIcon`, `StarIcon`, `PinIcon`, `GoogleBadge`, `YangoLogo`, etc.). This keeps the bundle minimal and avoids an icon-font dependency.
- **CSP allows `unsafe-eval`** with an explicit `TODO(security)` noting the Maps JS API limitation. The current Static-Map approach doesn't strictly need `unsafe-eval`, but the CSP is permissive now and marked for tightening.
- **No tests.** The repo has no `.test.ts` / `.spec.ts` files and no test runner in `package.json`. `Inferred:` the project is in pre-launch / iteration phase (profile footer reads `Wayfinder v1.0`, but `package.json` is `0.1.0`).
- **`.gitignore` excludes `AGENTS.md` and `CLAUDE.md`.** `Inferred:` the author uses AI coding agents and chose not to commit their internal instructions to the public repo.

## Notable Implementation Details

- **`lib/yango-handoff.ts:74-83`** — `buildYangoUrlFromDestination` is the explicit public API for the handoff; the `startLat`/`startLng` parameters are deliberately *not* passed. The comment explains the failure mode this avoids (inter-city tariff loading failures, loading screen hangs). This is the most non-obvious implementation choice in the codebase.
- **`app/api/places/photo/route.ts:27`** — cache key is `crypto.createHash('sha256').update(`${photoRef}_${maxWidthNum}`).digest('hex')`. Two files per entry: `{hash}.bin` (bytes) + `{hash}.json` (`{ contentType }`). The `X-Cache: HIT|MISS` header exposes cache state for observability.
- **`app/api/map/route.ts:9-21`** — the `MAP_STYLE` constant is an 11-clause Google Static Maps style array hand-tuned to the dark theme tokens (e.g. `style=feature:road.highway|element:geometry|color:0x34374a`). The style string is appended raw (`urlString += '&' + MAP_STYLE`) because `URLSearchParams` would escape `|` and `:`.
- **`app/place/[placeId]/page.tsx:111-115`** — traffic-level classification:
  ```ts
  const ratio = trafficSec / (normalSec || 1);
  const trafficLevel = ratio < 1.2 ? 'Low' : ratio < 1.5 ? 'Moderate' : 'Heavy';
  ```
  A simple, explainable heuristic — not a learned model.
- **`app/api/places/details/route.ts:18-26`** — `PRICE_LEVEL_FREE → 0`, `PRICE_LEVEL_INEXPENSIVE → 1`, … `PRICE_LEVEL_VERY_EXPENSIVE → 4`. The frontend `PRICE_MAP` (`{0:'Free',1:'$',2:'$$',3:'$$$',4:'$$$$'}`) then renders it.
- **`app/api/saved/route.ts:16-23`** — Upstash Redis client is conditionally constructed only if `UPSTASH_REDIS_REST_URL` starts with `https://` and a token is set. Otherwise the route degrades gracefully (returns `{ places: [] }` on GET, 503 on POST), so missing Redis doesn't crash the app.
- **`next.config.ts:33-35`** — `Permissions-Policy` disables `camera`, `microphone`, `payment`, `usb` but *intentionally omits* `geolocation` with an explanatory comment.
- **`components/SearchBar.tsx:18-24`** — hand-rolled `debounce` (no Lodash dependency).
- **`app/api/places/autocomplete/route.ts:8-24`** — in-memory rate limiter: `Map<ip, {count, resetAt}>`, 30 req / 60,000 ms. The TODO says "Replace with Redis-backed rate limiter for multi-instance deployments."
- **`app/profile/page.tsx:55-58`** — email masking: `${email.split('@')[0].slice(0,2)}***@${email.split('@')[1]}`.
- **`lib/google-maps.ts:44-52`** — `ALLOWED_TYPES` is a `Set` of 16 place types; the nearby route rejects any type not in the set.
- **`app/layout.tsx:21-27`** — viewport is locked: `userScalable: false, maximumScale: 1` — typical of a mobile-web-app-that-acts-like-a-native-app.

## Tradeoffs and Limitations

- **No tests, no CI.** There is no `.github/` directory, no test runner, no lint-but-don't-build step in CI. Regression risk is fully on the developer. `Inferred:` acceptable for a v0.1 pre-launch app, risky as it grows.
- **In-memory rate limiter is per-instance.** Under multi-instance deployment (e.g., Vercel serverless with multiple concurrent invocations), each instance gets its own `Map`, so the 30 req/min limit is effectively multiplied by instance count. The TODO acknowledges this.
- **Photo cache is local filesystem only.** `.cache/photos/` is per-instance and ephemeral on serverless platforms (Vercel's filesystem is read-only except `/tmp`). `Inferred:` in production this cache likely doesn't survive cold starts; a Redis or S3-backed cache would be needed. The `.gitignore` excludes `.cache/`, so it's intentionally local.
- **Region-locked to Pakistan.** `includedRegionCodes: ['pk']` and `region: 'pk'` are hard-coded. A user outside Pakistan searching for a place will get no results. This is by design but limits market reach.
- **Static-map-only rendering.** The map is a non-interactive PNG. Users cannot pan, zoom, or tap POIs in-app; the "Open in Google Maps" link is the escape hatch. This trades interactivity for performance, bundle size, and CSP simplicity.
- **CSP still allows `'unsafe-eval'` and `'unsafe-inline'`** in `script-src`. The TODO in `next.config.ts` flags this as known tech debt arising from the Google Maps JS API. Until the Maps JS API is removed entirely (it's not currently loaded by any page), tightening further would break it.
- **No persistent guest sync.** A guest's saved places live only in `localStorage`. Switching devices or clearing browser data loses them. Sign-in is required for cross-device persistence.
- **Yango handoff is one-way.** The app receives no callback from Yango about ride status, ETA, or completion. Once `window.location.href = yangoUrl` fires, Wayfinder is out of the loop. `Inferred:` this is a deliberate scope boundary — Wayfinder is acquisition/search, not ride-tracking.
- **Single-language UI (English).** `lang=en` is hard-coded in the Yango URL and `languageCode: 'en'` in autocomplete. Urdu or other regional languages are not supported.
- **`package.json` lists `rate-limiter-flexible` as a dependency but the code uses a hand-rolled limiter.** Unused dependency (or staged for migration).
- **No Dockerfile or deployment config.** Deployment is implicitly Vercel (the README and `.vercel/` gitignore entry suggest it), but there is no `vercel.json`.

## Impact or Value

Wayfinder's value proposition, as encoded throughout the codebase, is to compress a multi-step, multi-app journey (search in Google Maps → verify in Google Maps → estimate travel → switch to Yango → re-search the destination in Yango → order) into a single three-tap flow inside one mobile web app. For end users in Pakistan this means measurably less friction and more confidence before paying for a ride; for the Yango partner ecosystem (the `ref=wayfinder` affiliate ID and Adjust tracker token `vokme8e_nd9s9z9` confirm a partner-program integration) it functions as a customer-acquisition and ride-conversion surface that monetizes via the Yango affiliate program.

The engineering value lies in its disciplined BFF pattern: the entire Google Maps API surface is hidden behind a thin, validated, cached, rate-limited proxy that keeps the API key server-side, controls billing via field masks and per-route cache TTLs, and presents a stable legacy-shape contract to the frontend so Google API version migrations don't ripple into the UI. The filesystem photo cache, the dark-themed Static Map proxy as a CSP workaround, and the deliberate `start-lat`-omission in the Yango deep link are all reusable patterns for any developer building a Maps-integrated, budget-conscious Next.js app.

`Inferred:` Because the README is unmodified and there are no analytics, monitoring, or deployment configs in the repo, the production impact cannot be measured from the code alone. The dual-brand polish (Google Blue + Yango Red tokens, verified badges, three-step onboarding), the security headers (HSTS preload, frame-ancestors none, nosniff), and the explicit TODOs (`TODO(security)` for nonce-based CSP, the Redis rate-limiter migration) suggest a serious pre-launch or early-launch product rather than a toy demo.
