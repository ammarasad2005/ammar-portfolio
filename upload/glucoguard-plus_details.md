# glucoguard-plus — Project Deep Understanding

## Project Name
**GlucoGuard+** (styled `🛡️ GlucoGuard+`, repo slug `glucoguard-plus`). The tagline, written in Roman Urdu, is *"Apne khaane ka guard banayein. Awaaz mein. Roman Urdu mein."* — roughly "Be the guardian of your food. In voice. In Roman Urdu." The `+` in the name is an explicit differentiator from a base "GlucoGuard" concept; the README's "The + in GlucoGuard+" section enumerates two premium features over a hypothetical baseline: (1) voice output of the verdict via `gpt-4o-mini-tts`, and (2) live web search for actual healthier alternatives available in Pakistan via `gpt-4o-search-preview`. The footer (`src/ui/theme.py:617`) describes the project as a hackathon entry: *"National AI Hackathon · FAST NUCES Islamabad · 16-17 June 2026"*, Track 5: Open Innovation.

## Tech Stack
From `requirements.txt` (versions are floor pins, not exact):
- **Web framework / UI:** `streamlit>=1.40` (the entire app is server-rendered via Streamlit; no separate frontend)
- **LLM / AI providers (primary):** `openai>=1.50` (used for vision, reasoning, web search, and TTS via four different OpenAI models)
- **LLM / AI providers (fallback):** `google-genai>=0.3.0` (Gemini 2.0 Flash for vision), plus Groq `llama-3.3-70b-versatile` and Zhipu `GLM-4.7-Flash` / `GLM-4.6V-Flash` invoked through the OpenAI client's `base_url` swap (no dedicated SDKs in deps)
- **Web search fallbacks:** `requests>=2.31` for Tavily Search API and Google Custom Search API (CSE) raw HTTP calls
- **TTS fallback:** `edge-tts>=6.1.0` (Microsoft Edge neural voices, no API key required)
- **Image handling:** `pillow>=10.0` (used in `src/ui/teach_mode.py` to re-open the scanned image)
- **Config / secrets:** `python-dotenv>=1.0` plus Streamlit's `st.secrets`
- **Runtime:** Python 3.11 (declared in `runtime.txt` and pinned in `.devcontainer/devcontainer.json` via `mcr.microsoft.com/devcontainers/python:1-3.11-bookworm`)
- **Dev tooling:** VS Code devcontainer config (`.devcontainer/devcontainer.json`) auto-installs deps and launches `streamlit run src/app.py` (note: this path is wrong — the actual entry is `app.py` at repo root, not `src/app.py`; `src/main.py` is just a setup-check script). Streamlit theme pinned in `.streamlit/config.toml` (teal `#0F766E` primary).
- **Notably absent:** no `Dockerfile`, no `.github/` CI, no `pytest`/`unittest` tests, no database driver, no ORM, no auth library, no `pyproject.toml`. Single git commit (`313f39b Added Dev Container Folder`).

## Overview
GlucoGuard+ is a phone-camera web app targeting Pakistan's estimated 33 million diabetics (the README claims this is the world's second-highest after China). The user photographs a packaged-food label; the app reads it, produces a personalized health verdict ("SAFE / MODERATE / AVOID") tailored to the user's conditions and allergies, finds a real, purchasable healthier alternative from Pakistani retailers, and optionally reads the whole verdict aloud in Roman Urdu for the ~40% of adults who cannot read.

The product is deliberately scoped to Pakistan: alternatives are constrained to specific local chains named in the prompt (`alternative_finder.py:19` — Naheed, Chase Up, Carrefour, Imtiaz, Al-Fatah, Anees Supermarket, Yadley, Hashim Supermarket; online at naheed.com, chaseup.com.pk, daraz.pk), and prices must come back in PKR. The interaction language is Roman Urdu (Latin-script Urdu written the way Pakistanis text), and the verdict-reasoning prompts contain an explicit anti-Urdu-script instruction (`health_verdict.py:84-86`): strings must be plain Roman script, not `"یہ آپ کے لیے مناسب نہیں"`. There is no account system, no database, and no history — everything lives in Streamlit `st.session_state` for the duration of a browser session.

## Architecture
The codebase is layered into four packages under `src/`:

- **`src/config/settings.py`** — Central secrets/config. A `get_secret()` helper reads from Streamlit's `st.secrets` first, then falls back to `os.getenv`, then to a default. It exports model names (`OPENAI_VISION_MODEL`, `OPENAI_TEXT_MODEL`, `OPENAI_SEARCH_MODEL`, `OPENAI_TTS_MODEL`, plus equivalents for Gemini/Groq/GLM), validates that `OPENAI_API_KEY` exists at import time (raising a Roman-Urdu `EnvironmentError` if missing), and exposes `fallback_status()` returning a dict of which fallback providers are wired up (used by the sidebar UI).
- **`src/core/`** — The "business logic" / AI pipeline, fully independent of Streamlit:
  - `knowledge_base.py` — Static reference data: 35 hidden-sugar aliases, a 10-category allergen→alias map, WHO daily limits.
  - `label_scanner.py` — Vision OCR of the food label → structured JSON. Primary OpenAI, fallback Gemini, fallback GLM.
  - `health_verdict.py` — Combines label JSON + user profile + knowledge base → verdict JSON. Primary OpenAI, fallback Groq, fallback GLM.
  - `alternative_finder.py` — Live web search for a real Pakistani alternative product. Primary OpenAI search-preview, fallback Google CSE + LLM synthesis, fallback Tavily + LLM synthesis.
  - `voice_output.py` — Builds a Roman-Urdu speech string from verdict+alternative, then TTS-es it. Primary OpenAI TTS, fallback edge-tts.
  - `fallback.py` — Tiny generic `with_fallback(primary, fallback, *args)` helper used to chain every provider pair.
- **`src/ui/`** — Streamlit presentation layer:
  - `theme.py` — ~620 lines of custom CSS + Python helpers (`hero`, `stats_bar`, `verdict_card`, `hidden_sugar_pills`, `allergen_badges`, `alternative_card`, `voice_card`, `step_indicator`, `resilience_sidebar`, `footer`).
  - `components.py` — Thin wrappers that bridge Streamlit calls to `theme.py` helpers.
  - `scan_page.py` — The main upload→pipeline→results page; contains `run_scan_pipeline()`.
  - `profile_page.py` — Health-profile editor (conditions / allergies / language / voice toggle).
  - `teach_mode.py` — X-ray view showing every prompt and raw JSON response.
- **`app.py`** (repo root) — Entry point. Calls `st.set_page_config`, loads the theme, initializes `st.session_state` defaults, renders the sidebar (profile summary + nav + resilience layer), and routes to either `show_scan_page()` or `show_profile_page()`.

Layers communicate via plain dicts (no dataclasses, no Pydantic, no ORM). The UI never calls OpenAI directly — it always goes through `src/core/` functions.

## Application Model
Server-rendered single-page Streamlit app with manual in-app page switching (no `st.navigation`/multipage `pages/` folder). State is held entirely in `st.session_state`, initialized in `app.py:18-34` with defaults including `page`, `profile`, `error`, `label_data`, `verdict`, `alternative`, `audio_bytes`, `speech_text`, `scanned_image`, `scanned_image_mime`, `show_teach_mode`, and an unused `demo_mode` flag. Two logical pages exist — `scan` and `profile` — toggled by sidebar buttons that mutate `st.session_state.page` and call `st.rerun()`. A `show_teach_mode` flag overlays a third view on top of the scan page.

There is no authentication, no user accounts, no server-side persistence (no DB, no file writes — `sample_images/` and `sample_results/` are gitignored), and no REST API surface. The app is stateless across reloads: a refresh wipes the verdict. The intended deployment is Streamlit Community Cloud or a Codespace (the devcontainer forwards port 8501 and auto-launches `streamlit run`). Each scan triggers four sequential LLM calls (~15–25 seconds, per the UI copy in `scan_page.py:62`), with no client-side caching.

## Data Model
There is no relational database; the "data model" is a set of JSON contract schemas enforced via prompt instructions and `response_format={"type": "json_object"}`.

**User Profile** (`session_state.profile`, schema declared in `health_verdict.py:6-11`):
```
{ "conditions": [enum], "allergies": [enum], "language": enum, "voice_enabled": bool }
```
- `conditions` ∈ {`diabetes`, `hypertension`, `celiac`, `pcos`, `high_cholesterol`, `obesity`, `none`}
- `allergies` ∈ keys of `ALLERGEN_MAP` ∪ {`none`} = {`peanut`, `tree_nut`, `gluten`, `dairy`, `soy`, `egg`, `sesame`, `seafood`, `mustard`, `sulphite`, `none`}
- `language` ∈ {`roman_urdu`, `english`, `urdu`}

**Label Scan** (output of `label_scanner.scan_label`, schema in `label_scanner.py:7-52`): `product_name`, `brand`, `serving_size`, `servings_per_pack`, `ingredients_raw`, `ingredients_list[]`, nested `nutrition_per_serving{}` and `nutrition_per_100g{}` (calories, sugar_g, sodium_g, saturated_fat_g, protein_g, carbs_g), `allergen_statements[]`, `marketing_claims[]`, `label_language`, `label_readability`, `confidence` (0.0–1.0). Sodium is explicitly normalized to grams (labels often print mg).

**Verdict** (output of `health_verdict.generate_verdict`, schema in `health_verdict.py:23-68`): `verdict` ∈ {`SAFE`, `MODERATE`, `AVOID`}, `verdict_color` ∈ {`green`, `yellow`, `red`}, dual-language reason strings, `hidden_sugars_detected[]` (name, type ∈ {`high_gi`, `added_sugar`, `sugar_alias`}, concern, glycemic_index), `allergens_detected[]` (allergen, matching_ingredient, severity, note), `nutrition_analysis{}` with per-serving sugar/sodium percentages of the daily limit and a `verdict_per_condition` sub-map, `misleading_claims_flagged[]`, `healthier_alternative_roman_urdu/english`, and `teachable_moment_roman_urdu`.

**Alternative** (output of `alternative_finder.find_alternative`, schema in `alternative_finder.py:23-33`): `alternative_product`, `alternative_brand`, `why_better_roman_urdu`, `where_to_buy[]`, `estimated_price_pkr`, `online_link`, `search_sources[]`.

**Static knowledge** (`knowledge_base.py`): `HIDDEN_SUGARS` is a 35-item list of lowercase aliases (maltodextrin, dextrose, HFCS, agave nectar, maltitol syrup, …). `ALLERGEN_MAP` maps 10 allergen categories to ingredient aliases — e.g. `dairy` → [`milk`, `casein`, `whey`, `ghee`, `butter`, …]. `DAILY_LIMITS` hardcodes WHO adult limits: sugar 25g, sodium 2g, saturated fat 20g, calories 2000.

## Pipelines / Flows / Execution Path
The core user journey is `run_scan_pipeline()` in `src/ui/scan_page.py:75-134`, triggered when the user clicks `🛡️ Guard Karein` after uploading a photo. The four steps, each surfaced to the user via `step_indicator(i)`:

1. **Label Scan** (`scan_page.py:82-85`): The uploaded `BytesIO` is read into raw bytes plus a `mime_type`. `scan_label(image_bytes, mime_type)` (`label_scanner.py:158-165`) calls `with_fallback(scan_label_openai, gemini_then_glm, …)`. The primary OpenAI path base64-encodes the image into a `data:` URL, sends it to `gpt-4o-mini` as a `image_url` message along with the `SCAN_PROMPT` (which demands JSON-only output, lowercase ingredients, sodium normalized to grams, and a 0–1 confidence), and parses the response with `json.loads`. Failure falls through to Gemini 2.0 Flash (`google-genai`) then to GLM-4.6V-Flash (Zhipu, via OpenAI-compatible endpoint with `thinking.type=disabled`). Result: the **Label Scan** dict stored in `session_state.label_data`.

2. **Verdict** (`scan_page.py:89-96`): `generate_verdict(label_data, user_profile)` (`health_verdict.py:232-239`) chains OpenAI → Groq → GLM. Before the call, `ALLERGEN_MAP` is *filtered to only the user's own allergies* (`health_verdict.py:113-115`), enforcing the "CRITICAL ALLERGEN RULE" (`health_verdict.py:79-82`) — the model must never flag an allergen the user didn't list. The prompt encodes explicit numeric thresholds: AVOID if any user allergen detected OR (sugar > 18.75g and diabetic) OR (sodium > 1g and hypertensive); MODERATE for the 25–75% band; SAFE otherwise. Temperature is 0.2; `response_format=json_object` is forced.

3. **Alternative** (`scan_page.py:100-103`): `find_alternative(label_data, verdict, user_profile)` (`alternative_finder.py:329-336`) chains OpenAI search-preview → Google CSE+synthesis → Tavily+synthesis. The primary path asks `gpt-4o-search-preview` directly for one real Pakistani product; because that model "does NOT support `response_format`" (comment at `alternative_finder.py:70`), the code does best-effort JSON extraction with a regex `\{[\s\S]*\}` and degrades to a stub dict on parse failure. The fallback paths run a raw HTTP search (Tavily `/search` or Google CSE `customsearch/v1`), then synthesize JSON via Groq→GLM with `response_format=json_object`.

4. **Voice** (`scan_page.py:107-118`, conditional on `voice_enabled`): `build_speech_text(verdict, alternative)` (`voice_output.py:7-47`) concatenates Roman-Urdu fragments — verdict reason, hidden-sugar count and top-3 names, sugar-per-serving and percent of daily limit, the alternative product/brand/price/stores, and the teachable moment. `generate_voice(text)` chains OpenAI `gpt-4o-mini-tts` (voice `nova`, MP3) → `edge-tts` (Microsoft `en-US-AriaNeural`, run via an async event-loop dance that spawns a thread if Streamlit's loop is already running — `voice_output.py:82-100`). MP3 bytes go to `session_state.audio_bytes`.

On success, all artifacts land in `session_state` and `st.rerun()` re-renders the results view (`show_results`, `scan_page.py:137-171`): verdict card, product details, hidden-sugar pills, allergen badges, nutrition metrics, misleading-claim warnings, AI-suggested alternative, live web-search alternative card, and the voice player. A separate **Teach Mode** overlay (`teach_mode.py`) re-renders every prompt template and raw JSON response in expanders — described in its hero as an "Open Innovation bonus" feature for hackathon judges.

## Problem Solved
The README's "Problem" section (`README.md:12`) states three intertwined facts: Pakistan has 33M diabetics (world's highest after China); packaged food labels hide sugars under 50+ chemical names (maltodextrin, dextrose, …); and 40% of Pakistani adults can't read the labels at all. GlucoGuard+ addresses all three in one scan: the vision model reads the label for the user (solving literacy), the verdict engine cross-references 35 hidden-sugar aliases and 10 allergen categories against the user's profile (solving chemical-name obfuscation), and the TTS pipeline reads the verdict aloud in Roman Urdu (solving the literacy barrier a second time, for the output). The "alternative finder" step additionally solves the "okay, so what *should* I eat?" follow-up by surfacing a specific purchasable product rather than generic advice like "eat fruit."

## Motivation for Building It
The README explicitly states the project was built for the **National AI Hackathon at FAST NUCES Islamabad, 16-17 June 2026, Open Innovation track** (`README.md:33`, reinforced in `theme.py:618` and `teach_mode.py:16` which calls Teach Mode an "Open Innovation bonus"). The choice of Roman Urdu, voice output, Pakistani retailer list, and PKR pricing is consistent with a hackathon team optimizing for a local-judge audience and a demo that resonates with a Pakistani public-health problem. *Inferred:* the "+" branding suggests this is a second iteration of an earlier "GlucoGuard" concept (no such repo is visible in this clone), with voice and live web search being the headline additions.

## Novel Aspects
- **Four-model OpenAI pipeline in one scan.** The sidebar copy (`app.py:78-80`) and the step indicator (`theme.py:577-582`) advertise `gpt-4o-mini` (vision) → `gpt-4o-mini` (reasoning) → `gpt-4o-search-preview` (web search) → `gpt-4o-mini-tts` (voice). Using OpenAI's search-preview and mini-tts models together in a single consumer flow is unusual for a hackathon app.
- **Six-provider resilience layer.** Beyond OpenAI, the code transparently supports Gemini (vision), Groq llama-3.3-70b (text), Zhipu GLM-4.7-Flash / GLM-4.6V-Flash (text+vision), Tavily (search), Google CSE (search), and edge-tts (voice). The sidebar renders a live "Resilience Layer" card (`theme.py:597-611`) showing which fallbacks are configured, keyed off API-key prefix checks (`gemini` must start `AIza`, `groq` `gsk_`, `tavily` `tvly-`).
- **Allergen-map filtering per user.** Before prompting, `ALLERGEN_MAP` is filtered to only the user's declared allergies (`health_verdict.py:113-115, 149-152, 187-190`), so the model literally cannot flag an allergen the user doesn't have. This is reinforced by an explicit "CRITICAL ALLERGEN RULE" in the prompt.
- **Roman-Urdu-only output contract.** Every prompt that produces user-facing text includes a hard instruction to use Latin Roman script, not Urdu script (`health_verdict.py:84-86`, `alternative_finder.py:37`). This sidesteps the issue of TTS and rendering of Nastaliq script.
- **Teach Mode.** A transparency overlay (`teach_mode.py`) that exposes every prompt template and raw model response in expanders — a learning/inspection feature rarely seen in hackathon demos.

## Optimizations / Efficiencies
- **`with_fallback` is a 24-line generic helper** (`fallback.py`) reused for every provider pair — vision, reasoning, search-synthesis, TTS — so adding a new provider is a one-function change rather than touching call sites.
- **Aggressive low-temperature generation.** Vision scan uses `temperature=0.1`, verdict uses `0.2`, alternative synthesis uses `0.3` (`label_scanner.py:72`, `health_verdict.py:130`, `alternative_finder.py:191`). These are tuned for deterministic JSON rather than creative text.
- **JSON-mode forcing where supported.** `response_format={"type": "json_object"}` is used for OpenAI/Groq/GLM text calls; for `gpt-4o-search-preview` (which the comment at `alternative_finder.py:70` notes doesn't support `response_format`), the code falls back to regex JSON extraction.
- **GLM `thinking.type=disabled`** is set via `extra_body` (`health_verdict.py:212-216`, `label_scanner.py:137-141`) to skip chain-of-thought latency on Zhipu calls.
- **Token caps.** Verdict `max_tokens=2000`, scan `1500`, alternative `800–1000`, TTS uncapped — bounded to keep latency and cost predictable.
- **edge-tts as zero-cost, zero-key voice fallback.** `voice_output.py:68-103` runs Microsoft's free neural TTS, with an async-loop dance to coexist with Streamlit's already-running loop. The `fallback_status()` dict hardcodes `edge_tts: True` (`settings.py:57`) because it always works.
- **Filtered allergen map reduces prompt size.** Sending only the user's allergens (instead of all 10 categories) shrinks the prompt and sharpens the model's attention.

## Design Decisions
- **Streamlit over a JS SPA.** Lets a small hackathon team ship a polished UI (custom CSS in `theme.py` is ~620 lines) without a build step; trade-off is no client-side state persistence and the four-LLM sequential pipeline blocks the Streamlit run for ~15–25 seconds.
- **Session-state-only persistence.** No DB, no accounts — `app.py:18-34` initializes the entire app state. This is honest for a hackathon demo but means a refresh wipes the verdict and profile.
- **Provider abstraction via OpenAI client.** Groq and Zhipu GLM are invoked by swapping `base_url` on the same `openai.OpenAI` client (`alternative_finder.py:180-183`, `health_verdict.py:162-165`, `label_scanner.py:118-121`) rather than pulling in their native SDKs — keeps `requirements.txt` to seven lines.
- **Prompt-as-schema.** Rather than Pydantic models, JSON shape is enforced by writing the exact desired JSON into the prompt and demanding "ONLY a valid JSON object (no markdown, no explanation, no code fences)." Parse failures raise Roman-Urdu error messages (e.g. `label_scanner.py:81`).
- **Hardcoded WHO thresholds.** `DAILY_LIMITS` (`knowledge_base.py:37-42`) is fixed for adults and used both as prompt context and as the basis for the AVOID/MODERATE/SAFE thresholds baked into the prompt (`health_verdict.py:70-77`). No per-user calorie target.
- **Pakistani retailer whitelist in the prompt.** `alternative_finder.py:19` enumerates nine physical chains and three online stores, biasing the search model toward genuinely local results.
- **Custom CSS instead of a component library.** `theme.py` defines a teal-and-amber design system (`--gg-primary: #0F766E`, `--gg-accent: #F59E0B`) with verdict cards whose background gradients encode severity (green/yellow/red), and hides Streamlit branding (`#MainMenu { visibility: hidden }`, `theme.py:415-416`).

## Notable Implementation Details
- **Single git commit.** `git log --oneline` shows only `313f39b Added Dev Container Folder` — the project was likely developed elsewhere and pushed in one shot, or history was squashed.
- **Devcontainer entry point is wrong.** `.devcontainer/devcontainer.json:9,22` runs `streamlit run src/app.py`, but the actual entry is `app.py` at repo root (`README.md:24` correctly says `streamlit run app.py`). `src/main.py` is just a five-line setup-check script that prints key previews.
- **Unused `demo_mode` flag.** `app.py:30` initializes `st.session_state.demo_mode = False`, but no code path reads or sets it — likely a placeholder for an offline demo path that wasn't finished.
- **Async-in-Streamlit workaround for edge-tts.** `voice_output.py:82-100` detects whether an event loop is already running (Streamlit's is) and, if so, spawns a fresh loop in a `threading.Thread`, joins it, and pulls the result out of a one-element list — a known Streamlit+asyncio friction point handled inline.
- **Resilience sidebar is computed live.** `fallback_status()` (`settings.py:49-58`) inspects actual key prefixes (`AIza`, `gsk_`, `tvly-`) so the UI shows truthful provider availability rather than a static list.
- **`response_format` conditional on model name.** `alternative_finder.py:294` does `response_format={"type": "json_object"} if "gpt-4o" in OPENAI_SEARCH_MODEL else None` — a defensive guard against passing JSON mode to a model that doesn't accept it.
- **`requirements.txt` lists `google-genai` but the code uses the older `from google import genai` import** (`label_scanner.py:89`), which matches the new `google-genai` SDK (replaces the deprecated `google-generativeai`).
- **`sample_images/` and `sample_results/` exist but are empty** (and gitignored for `*.jpg/png/heic` and `*.json`) — the team likely demoed with local sample labels that aren't shipped.

## Tradeoffs and Limitations
- **No persistence.** A page refresh or a Streamlit redeploy wipes the user's profile and the current verdict. There is no database, no save-history, no account. *Inferred:* acceptable for a hackathon demo, a blocker for production.
- **No auth.** Anyone with the URL can use the app and burn the (shared, per `.env.example:1` — "Get from hackathon organizers (already shared)") OpenAI key. No rate limiting is visible.
- **Sequential, not parallel, pipeline.** The four LLM calls run strictly in order (`scan_page.py:75-130`), so a single scan takes ~15–25 seconds. Steps 1 and 2 are data-dependent, but step 3 (alternative) and step 4 (voice) could in principle run in parallel after step 2 — they don't.
- **Cost per scan.** Four paid OpenAI calls (vision + reasoning + search-preview + TTS) per scan, plus fallbacks. No caching layer; scanning the same product twice re-runs everything.
- **LLM verdict accuracy is unmeasured.** There are no tests, no eval set, no held-out labels. The 35-name `HIDDEN_SUGARS` list is fed to the model as context, but the model's detection accuracy vs. a deterministic regex match is never benchmarked.
- **Hardcoded adult WHO limits.** `DAILY_LIMITS` (`knowledge_base.py:37-42`) is one-size-fits-all — no pediatric, pregnant, or per-condition calorie adjustment despite the profile supporting `pcos`, `obesity`, etc.
- **Search-preview JSON fragility.** `gpt-4o-search-preview` doesn't support `response_format`, so `alternative_finder.py:80-111` does regex-based JSON extraction with a stub-dict fallback. Real-world misfires would silently produce `alternative_product: null`.
- **`gluten` allergen overlaps with `celiac` condition** — both are independently tracked, which could double-flag the same ingredient without deduplication logic.
- **`Hormonal` and `yellow` appear as icons** in `profile_page.py:7,21` — almost certainly copy-paste bugs (the other entries use emojis) that survived because no one tested the profile page rendering of those two specific options closely.

## Impact or Value
For the intended audience — a Pakistani diabetic with limited literacy shopping for packaged food — GlucoGuard+ collapses a multi-step expert task (read label, decode 50+ sugar aliases, cross-reference personal conditions and allergies, find a substitute, affordably, nearby) into a single phone photo. The voice output is the most consequential feature for the 40% who can't read: it converts the entire verdict plus alternative into spoken Roman Urdu, removing the literacy barrier from both input and output. The hardcoded Pakistani retailer whitelist and PKR pricing mean the "alternative" is actionable rather than aspirational — a real product the user can actually buy at Naheed or Daraz, not "eat more vegetables."

For the hackathon, the project demonstrates a non-trivial multi-model orchestration pattern (four OpenAI models plus six fallback providers chained through a 24-line `with_fallback` helper) with a polished custom-CSS Streamlit UI and a transparency-first Teach Mode. The README's framing — Pakistan-specific statistics, Roman-Urdu voice, local retailers — makes it a credible public-health demo rather than a generic "AI food scanner." *Inferred:* the productionization gap (no DB, no auth, no tests, no eval) means real-world deployment would require substantial scaffolding beyond what's here, but the core AI-pipeline architecture is sound and the provider-abstraction layer is genuinely reusable.
