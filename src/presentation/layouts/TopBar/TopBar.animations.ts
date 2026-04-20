import gsap from "gsap";
import { resolveEl } from "@/application/utils/resolveEl";
import type { Ref } from "vue";

/** Animate the topbar entrance. */
export function animateIn(el: Ref<HTMLElement | null>) {
  const dom = resolveEl(el);
  if (!dom) return;

  gsap.from(dom, {
    y: -20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}
