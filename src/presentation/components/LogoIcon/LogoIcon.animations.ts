import gsap from "gsap";
import { resolveEl } from "@/application/utils/resolveEl";
import type { Ref } from "vue";

export function logoAnimateIn(el: Ref<HTMLElement | null>) {
  const dom = resolveEl(el);

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .from(dom, {
      opacity: 0,
      duration: 0.3,
    })
    .from(
      dom!.children,
      {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        clearProps: "opacity,y",
      },
      "-=0.3",
    );
}
