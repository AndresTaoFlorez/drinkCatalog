import type { Ref } from "vue";
import gsap from "gsap";
import { resolveEl } from "@/application/utils/resolveEl";

export function animateContent(el: Ref<HTMLElement | null>) {
  const dom = resolveEl(el);
  const tl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  tl.from(dom, {
    delay: 0.1,
    opacity: 0,
    duration: 0.3,
  }).from(
    dom!.children,
    {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      clearProps: "opacity,y",
    },
    "-=0.2", // Overlap: starts 0.2s before the previous tween ends
  );
}
