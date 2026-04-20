---
name: web-performance
description: Audit or optimize web performance. Use when reviewing bundle size, runtime rendering, images, or Core Web Vitals.
---

Audit or optimize web performance for this Vue 3 + Vite project.

**Bundle size:**
- Lazy-load all page components in the router: `component: () => import('@/presentation/pages/...')`.
- Tree-shake GSAP: import only used modules — `import { gsap } from "gsap"` and specific plugins, not the full bundle.
- PandaCSS outputs only used styles at build time — no dead CSS, but confirm with `vite build --report`.
- Check bundle with: `npx vite-bundle-visualizer` (install if needed) or `npm run build -- --report`.

**Runtime rendering:**
- Avoid computed properties that recompute on every render — memoize expensive derivations.
- Use `v-once` for static content that never changes.
- Use `v-memo="[dep1, dep2]"` for list items with expensive templates.
- `shallowRef` / `shallowReactive` for large data structures (e.g., a list of 100+ drinks) where deep reactivity is unnecessary.

**Images:**
- Always specify `width` and `height` on `<img>` tags to prevent layout shift (CLS).
- Use `loading="lazy"` on below-the-fold images.
- Prefer WebP/AVIF formats.

**GSAP animations:**
- Animate `transform` and `opacity` only — never animate `width`, `height`, `top`, `left` (triggers layout).
- Kill timelines on component unmount: `onUnmounted(() => tl.kill())`.
- Use `gsap.context()` to scope and clean up all animations from a component.

**Vite build:**
```sh
npm run build        # type-check + build
npm run preview      # serve the production build locally
```

**Core Web Vitals targets:**
- LCP < 2.5s: lazy-load below-fold content, optimize hero images.
- CLS < 0.1: reserve space for images/async content.
- INP < 200ms: debounce user input handlers, avoid long tasks on the main thread.
