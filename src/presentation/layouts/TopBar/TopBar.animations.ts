import gsap from "gsap";
import type { Ref } from "vue";

export function animateIn(el: Ref<HTMLElement | null>) {
  if (!el.value) return;

  gsap.from(el.value, {
    y: -20,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  });
}
