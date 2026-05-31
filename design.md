# Design — Abdullah Ashraf Portfolio

A locked design system for this portfolio. Every page reads this before emitting code.
Theme: custom (Hyperlane-inspired, dark developer infrastructure).

## Genre
atmospheric

## Macrostructure family
- Marketing/hero pages: Marquee Hero — cycling display text, eyebrow kicker, two pill CTAs
- Project pages: Portfolio Grid — bento-variant grid, case-study cards
- Contact pages: Letter — first-person, clean form, no fake chrome

## Theme
- `--paper`         oklch(8% 0.015 255)    — near-black, slight blue tint
- `--paper-2`       oklch(13% 0.018 255)   — card surface
- `--paper-3`       oklch(17% 0.022 255)   — elevated card
- `--ink`           oklch(97% 0 0)         — off-white primary text
- `--ink-2`         oklch(58% 0.012 255)   — muted text
- `--ink-3`         oklch(36% 0.012 255)   — dimmed text / disabled
- `--rule`          oklch(22% 0.02 255)    — section dividers
- `--rule-2`        oklch(28% 0.02 255)    — card borders, interactive borders
- `--accent`        oklch(65% 0.22 255)    — electric blue (primary accent)
- `--accent-subtle` oklch(65% 0.22 255 / 0.1) — accent fill backgrounds
- `--accent-ink`    oklch(10% 0.03 255)    — text on accent bg
- `--focus`         oklch(72% 0.22 255)    — focus ring

## Typography
- Display: Inter 700, letter-spacing -0.04em, line-height 0.95
- Body: Inter 400, letter-spacing default
- Mono: JetBrains Mono 400/500 — kickers, labels, tags only
- Display sizes: clamp(4rem, 9vw + 1rem, 8.5rem) for hero / clamp(3rem, 6vw + 1rem, 5.5rem) for section heads

## Spacing
4-point named scale. Use `var(--space-*)` tokens — never raw values.

## Motion
- Ease: cubic-bezier(0.16, 1, 0.3, 1) (`--ease-out`)
- Hero reveals: fade + translate-y 0.7s
- Cycling text: AnimatePresence mode="wait", 0.45s
- Marquee: 35s linear infinite CSS keyframe
- Reduced-motion: opacity-only ≤ 150ms

## Microinteractions
- Hover state: color transition 150ms, no layout shifts
- Focus: 2px solid `var(--focus)` ring, appears instantly — never animated
- Button hover: lighten background one step
- Form fields: accent border + subtle glow on focus
- Silent success on contact form (no toasts)

## CTA voice
- Primary: filled pill, `var(--accent)` background, `var(--accent-ink)` text, rounded-full
- Secondary: outlined pill, `var(--rule-2)` border, `var(--ink-2)` text, rounded-full
- Destructive/nav: text only, color transition on hover

## What pages MUST share
- The `AA` wordmark in the nav
- The accent colour `var(--accent)` placement (≤ 5% per viewport)
- Inter 700 display + Inter 400 body
- Eyebrow kicker pattern (mono-kicker class, uppercase, 0.18em tracking)
- Horizontal rule section separators (1px `var(--rule)`)
- Pill CTA shape (rounded-full)

## What pages MAY differ on
- Macrostructure within the family (home = Marquee, projects = Portfolio Grid, contact = Letter)
- Section order and content
- Stat values per page context

## Anti-patterns (banned)
- Gradient text (background-clip: text) — gate 5
- Fake browser chrome (window dots, URL bar, terminal title bar) — gate 57
- Glassmorphism — explicitly banned for this genre
- 3-column equal-icon-grid features — gate 23
- Monospace body text — mono is kickers/labels only
- Cyan/violet palette from old design — replaced by electric blue

## Exports
See `tokens.css` at project root for drop-in CSS custom properties.
