---
name: vue
description: Apply Vue 3 best practices for this project. Use when writing components, composables, or router/store code.
---

Apply Vue 3 best practices for this project (Vue beta / Vapor-compatible, vue-router v5, Pinia v3).

**Composition API rules:**
- Always use `<script setup lang="ts">` — no Options API, no `defineComponent`.
- Type all props with `defineProps<{...}>()` generics, not runtime validators.
- Type emits with `defineEmits<{...}>()` generics.
- Expose template refs as `const elRef = ref<HTMLElement | null>(null)` — always nullable.

**Reactivity:**
- Prefer `ref()` for primitives, `reactive()` only for objects where destructuring is not needed.
- Never destructure reactive objects without `toRefs()`.
- Use `computed()` for derived state, never compute inside templates.

**Component patterns:**
- Co-locate styles in `ComponentName.styles.ts` (PandaCSS `styled()`), animations in `ComponentName.animations.ts` (GSAP).
- Import styled components and use them as tags in the template — no `<style scoped>` blocks.
- GSAP animations belong in `onMounted`, always guard with `if (!el.value) return`.

**Router (vue-router v5):**
- Use `useRouter()` / `useRoute()` composables, never `this.$router`.
- Define routes with typed route names.
- Lazy-load all page components: `component: () => import('@/presentation/pages/...')`.

**State (Pinia v3):**
- Setup store style only: `defineStore('id', () => { ... })`.
- Stores expose `ref`, `computed`, and functions — never raw mutable objects.
- Access stores from `application/composables/`, not directly from `.vue` files.

**Performance:**
- Use `v-memo` for expensive list items.
- Prefer `shallowRef` for large objects that don't need deep reactivity.
- Lazy-load page components with dynamic imports in the router.
