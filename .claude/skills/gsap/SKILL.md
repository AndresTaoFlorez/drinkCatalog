---
name: gsap
description: Implement or review GSAP animations. Use when adding entrance animations, timelines, or scroll-triggered effects to components.
---

Implement or review GSAP animations for this project. Animations are co-located in `ComponentName.animations.ts` files alongside their Vue components.

**File structure pattern:**
```ts
// TopBar.animations.ts
import gsap from "gsap"
import type { Ref } from "vue"

export function animateIn(el: Ref<HTMLElement | null>) {
  if (!el.value) return   // always guard

  gsap.from(el.value, {
    y: -20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  })
}
```

**Vue integration:**
- Declare refs as `const elRef = ref<HTMLElement | null>(null)` in `<script setup>`.
- Bind with `ref="elRef"` in template.
- Trigger animations in `onMounted(() => animateFn(elRef))`.
- For leave animations, use `onBeforeUnmount` or vue-router navigation guards.
- Clean up with `onUnmounted(() => ctx.revert())` when using `gsap.context()`.

**Performance rules:**
- Animate `opacity` and `transform` (x, y, scale, rotation) only. Never animate `width`, `height`, `top`, `left`, `margin`, `padding`.
- Use `will-change: transform` sparingly and only on actively animating elements.
- Prefer `gsap.context()` for scoping multiple animations in one component — it auto-cleans on revert.

**Timeline pattern for sequenced animations:**
```ts
export function animateContent(container: Ref<HTMLElement | null>) {
  if (!container.value) return

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.4 } })
    tl.from(".logo", { scale: 0.8, opacity: 0 })
      .from(".title", { y: 20, opacity: 0 }, "-=0.2")
      .from(".tagline", { y: 10, opacity: 0 }, "-=0.2")
  }, container.value)

  return ctx  // caller should call ctx.revert() on unmount
}
```

**Easing guide for a drink catalog:**
- Enter/reveal: `power2.out` or `expo.out`
- Exit/dismiss: `power2.in`
- Elastic/playful (use sparingly): `back.out(1.7)`
- Smooth loops: `sine.inOut`

**Do not:**
- Import GSAP plugins you don't use.
- Put animation logic inside `.vue` files — keep it in `.animations.ts`.
- Use GSAP for CSS-only animations (hover color changes, simple fades) — those belong in PandaCSS tokens.
