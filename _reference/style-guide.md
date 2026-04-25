# Typography & Visual Style Guide
**Derived from: Resume-2024-Layout (Affinity Designer source)**
**Applied to: patrickaurelio.com**

---

## Typeface

**Source:** Avenir (print)
**Web equivalent:** Plus Jakarta Sans

Avenir Book maps visually to Jakarta Extra Light (200), not Jakarta Light (300).
At display sizes (56px+), test 300 — 200 can become too gossamer at large scale on screen.

---

## Weight Hierarchy

Three weights only. This is a constraint, not a default.

| Tier | Usage | Jakarta weight |
|---|---|---|
| Primary | Name, section headers, body copy | 200 (Extra Light) |
| Secondary | Mid-tier labels, supporting text | 300 (Light) — use sparingly |
| Accent | Role/title tier only | 400 (Regular) |

**The accent weight (400) is the only heavier moment in the system.**
It is not bold. It is one step up. That restraint is the point.
Do not introduce a fourth weight.

---

## Size & Hierarchy

Size creates the primary tier separation. Weight creates the secondary.
Section headers are distinguished by size alone — same 200 weight as body copy.

| Element | Approximate scale | Weight |
|---|---|---|
| Name / hero | 56px (--type-2xl) | 200 |
| Section headers | 32px (--type-xl) | 200 |
| Role / title | 20px (--type-lg) | 400 |
| Body copy | 16px (--type-base) | 200 |
| Secondary text | 14px (--type-sm) | 200 or 300 |

---

## Tracking & Letter Spacing

- **Name / hero:** `letter-spacing: -0.02em` — approximates the hand-kerned feel of the source document
- **Section headers:** `letter-spacing: -0.01em`
- **Body copy:** default (0) — do not add positive tracking at body size
- **All caps labels (if used):** `letter-spacing: 0.12em` — the source document uses spaced caps for section labels

Apply `text-rendering: optimizeLegibility` globally to recover some of what print kerning provides.

---

## Line Height (Leading)

The source document uses tight print leading throughout. Web requires more air.

| Element | Line height |
|---|---|
| Name / hero | 1.1 |
| Section headers | 1.2 |
| Body copy | 1.65 |
| Secondary / captions | 1.5 |

Do not tighten body copy below 1.5 on screen regardless of how good it looks at one viewport size.

---

## Layout Principles

**Compositional discipline over grid compliance.**
The source document's two-column structure is not the design — the careful distribution of block mass within that structure is the design. Blocks are sized and positioned so their edges, weights, and whitespace create visual balance. Nothing is arbitrary.

Translate this to web as:
- `max-width` on text containers to control line length and block shape
- Deliberate margin relationships between sections — not just padding defaults
- Text blocks shaped to create good eye movement, not to fill available space
- Negative space treated as a design element, not leftover room

**Measure (line length):** Target 60–72ch for body copy. Already set as `--measure: 68ch`.

---

## Structural Dividers

Horizontal rules are used in the source document, sparingly, as structural separators — not decoration.
Carry this forward: rules mark genuine section breaks, not aesthetic punctuation.
Use `border-top: 1px solid currentColor` at reduced opacity rather than a decorative color.

---

## Color

The source document is black on white — hierarchy through type alone, zero color.
The site extends this with a warm off-white ground (`--color-bg: #f7f5f2`) and near-black text.
Color is not used for decoration or emphasis. Weight and size carry all hierarchy.

---

## What Web Cannot Replicate

- Character-level kerning on the name
- Sub-point leading control
- Physical density of 300dpi print

These are approximated through `letter-spacing`, `text-rendering: optimizeLegibility`, and accepting that body copy needs slightly more air than the source document uses.

---

## What to Ignore from the Source Document

- Two-column layout structure — adopted only if useful and aesthetic, not by default
- Column proportions — if columns are used, map to 12-column grid (3/9 preferred)
- Any content, copy, or phrasing — the 2024 resume is a **visual reference only**
