#!/usr/bin/env python3
"""
Fix JSX // comment textnodes by wrapping them in braces.
Only targets lines where // appears as JSX text content (not as JS comments).

Strategy: for each .tsx file, find lines that have `// ...` as visible text
inside JSX (between > and <), and wrap them in {"..."}.
"""
import re
from pathlib import Path

files = [
    "src/components/portfolio/command-palette.tsx",
    "src/components/portfolio/contact.tsx",
    "src/components/portfolio/experience.tsx",
    "src/components/portfolio/footer.tsx",
    "src/components/portfolio/hero.tsx",
    "src/components/portfolio/nav.tsx",
    "src/components/portfolio/stack.tsx",
    "src/components/portfolio/case-study.tsx",
]

base = Path("/home/z/my-project")

# Pattern: a line that has indentation, then `// something` (not preceded by code)
# This matches lines like: "              // system status"
# But NOT lines like: "      const x = foo // comment"
JSX_TEXT_COMMENT = re.compile(r'^(\s*)(//[^<>\n]*?)(\s*)$')

for rel in files:
    p = base / rel
    if not p.exists():
        print(f"skip (missing): {rel}")
        continue
    lines = p.read_text().splitlines(keepends=True)
    changed = False
    for i, line in enumerate(lines):
        # Skip if line has code before //
        stripped = line.strip()
        if not stripped.startswith("//"):
            continue
        # Skip if it's inside a JS comment block already (look at prev line)
        # Skip if previous non-whitespace is * or /* (block comment)
        # We only want to convert // text that is JSX text content
        # Heuristic: if the line is JUST `// text` with leading whitespace,
        # and the surrounding context is JSX (which we can't easily check),
        # wrap it in braces.
        m = JSX_TEXT_COMMENT.match(line.rstrip("\n"))
        if not m:
            continue
        indent, text, trailing = m.groups()
        # Skip JS-style comments at top of function/file (heuristic: if indent is 0-2 spaces and text starts with // it's likely a JS comment)
        if len(indent) < 3:
            continue
        # Replace with {"text"}
        new_line = f'{indent}{{"{text}"}}\n'
        if new_line != line:
            lines[i] = new_line
            changed = True
            print(f"  {rel}:{i+1}: {text!r} -> wrapped")
    if changed:
        p.write_text("".join(lines))
        print(f"updated: {rel}")

print("done")
