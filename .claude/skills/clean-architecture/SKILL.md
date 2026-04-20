---
name: clean-architecture
description: Review or implement code following Clean Architecture principles for this Vue 3 project. Use when creating new files, refactoring imports, or checking layer boundaries.
---

Review or implement code following Clean Architecture principles for this Vue 3 project.

The project uses a strict 3-layer architecture under `src/`:

**Layer rules (dependency direction: inward only):**
- `domain/` — Pure TypeScript. Interfaces, types, value objects. Zero Vue/Pinia/GSAP imports. No external dependencies.
- `application/` — Vue composables only. Orchestrates domain models. May import from `domain/`. No direct DOM or store access; use composables to expose reactive state.
- `presentation/` — Vue components, pages, layouts. May import from `application/` and `domain/`. Never import directly from `stores/` in components — go through `application/` composables.
- `stores/` — Pinia stores (setup style). Pure state management. Composables in `application/` wrap stores when logic is needed.

**File co-location pattern for presentation:**
Each component/page/layout folder contains:
- `ComponentName.vue` — template + script setup
- `ComponentName.styles.ts` — PandaCSS `styled()` exports only
- `ComponentName.animations.ts` — GSAP functions accepting `Ref<HTMLElement>`

**When reviewing:** Check that imports don't cross layer boundaries in the wrong direction. Flag any Vue imports in `domain/`, any direct store usage in `.vue` files (should go via composables), and any styling logic inside `.vue` `<style>` blocks (should be in `.styles.ts`).

**When implementing:** Ask which layer the new code belongs to before writing. Place types/interfaces in `domain/models/`, business logic in `application/composables/`, and UI in `presentation/`.
