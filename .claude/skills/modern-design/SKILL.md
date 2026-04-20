---
name: modern-design
description: Apply modern minimal UI design principles. Use when building new components, reviewing layouts, or making visual decisions.
---

Apply modern, minimal UI design principles when building or reviewing components in this project.

**Visual language:**
- Whitespace first: generous padding (`p: "6"` to `p: "14"`) and margins. Content should breathe.
- Neutral base palette with one accent color. Avoid more than 2–3 distinct hues per screen.
- Typography hierarchy: one display size, one body size, one small/label size — resist adding intermediate sizes.
- Borders and dividers should be subtle (`borderColor: "gray.100"` or `gray.200`), never heavy.
- Shadows only for elevated elements (modals, dropdowns) — flat cards get borders instead.

**Layout:**
- Use CSS Grid for page-level layout, Flexbox for component-level alignment.
- Consistent spacing grid: stick to the PandaCSS token scale (multiples of 4px).
- Responsive by default: design mobile-first, then expand. No fixed pixel widths on containers.

**Interaction states:**
- Every interactive element needs `:hover`, `:focus-visible`, and `:active` states.
- Focus rings must be visible (accessibility) — use `outlineOffset` and a clear `outlineColor`.
- Transitions on hover/focus: `transition: "colors"` at `duration: "fast"` (150ms) — never animate layout properties.

**Component aesthetics for a drink catalog:**
- Cards: rounded corners (`borderRadius: "xl"`), soft shadow or subtle border, image-forward.
- Navigation/TopBar: minimal, sticky, low visual weight — let content dominate.
- CTAs: one primary action per view, high contrast, generous hit target (min 44px height).
- Empty states and loading states should be designed, not left unstyled.

**What to avoid:**
- Gradients on UI chrome (buttons, navbars) — use solid fills.
- Too many font weights — bold and regular only.
- Decorative icons without labels for primary actions.
