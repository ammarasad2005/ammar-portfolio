"""
Phase 1: Parse the developer-portfolios README and select 100 representative portfolios.

We use a deterministic sampling approach that:
- Filters out invalid/incomplete entries (no URL, no name)
- Stratifies by alphabetical sections so we get diversity
- Adds controlled randomness via a fixed seed for reproducibility
- Prefers entries that have an explicit role tag (more signal for research)
"""
import re
import json
import random
from pathlib import Path

README = Path("/home/z/my-project/research/portfolios_readme.md").read_text()

# Each line like: "- [Name](URL) [Role] - Tag"
LINE_RE = re.compile(
    r'^-\s+\[(?P<name>[^\]]+)\]\((?P<url>[^)]+)\)(?:\s+\[(?P<role>[^\]]+)\])?(?:\s*-\s*(?P<tag>.*))?$'
)

portfolios = []
current_letter = None
for raw in README.splitlines():
    s = raw.strip()
    if not s.startswith('- '):
        # Track section letters (## A, ## B, ...)
        m = re.match(r'^##\s+([A-Z])$', s)
        if m:
            current_letter = m.group(1)
        continue
    m = LINE_RE.match(s)
    if not m:
        continue
    url = m.group('url').strip()
    if not url.startswith(('http://', 'https://')):
        continue
    name = m.group('name').strip()
    role = (m.group('role') or '').strip()
    tag = (m.group('tag') or '').strip()
    portfolios.append({
        'name': name,
        'url': url,
        'role': role,
        'tag': tag,
        'letter': current_letter,
    })

print(f"Parsed {len(portfolios)} portfolio entries")

# Drop entries from domains that are often defunct or are pure link aggregators
# (we still keep them in the larger corpus, but exclude from the curated sample)
EXCLUDE_DOMAINS = {
    'twitter.com', 'x.com', 'github.com', 'linkedin.com', 'youtube.com',
    'medium.com', 'dribbble.com', 'behance.net', 'instagram.com',
}
def domain_of(u):
    return re.sub(r'^www\.', '', u.split('//')[-1].split('/')[0].lower())

filtered = [p for p in portfolios if domain_of(p['url']) not in EXCLUDE_DOMAINS]
print(f"After exclusion of social/link domains: {len(filtered)}")

# Stratify by letter; sample proportionally but ensure each letter gets at least one if possible
random.seed(42)
by_letter = {}
for p in filtered:
    by_letter.setdefault(p['letter'], []).append(p)

# Build a 100-portfolio sample
TARGET = 100
sample = []

# 1) Guarantee at least one from each letter that has entries (max 26)
letters_with_entries = [L for L in sorted(by_letter.keys()) if by_letter[L]]
for L in letters_with_entries:
    # Prefer entries that have a role tag (richer signal)
    pool = [p for p in by_letter[L] if p['role']] or by_letter[L]
    sample.append(random.choice(pool))

# 2) Top up to 100 with weighted random across letters (weighted by pool size)
remaining = TARGET - len(sample)
all_remaining = [p for L in letters_with_entries for p in by_letter[L] if p not in sample]
random.shuffle(all_remaining)
sample.extend(all_remaining[:remaining])

# Shuffle the final sample so batches feel diverse rather than alphabetical
random.shuffle(sample)

print(f"Final sample: {len(sample)} portfolios")

out = Path("/home/z/my-project/research/selected_portfolios.json")
out.write_text(json.dumps(sample, indent=2, ensure_ascii=False))
print(f"Wrote {out}")

# Also print a quick summary
from collections import Counter
domain_counter = Counter(domain_of(p['url']) for p in sample)
print("Top 10 domains in sample:")
for d, c in domain_counter.most_common(10):
    print(f"  {d}: {c}")
