import type { Ref } from "vue";
import gsap from "gsap";
import { resolveEl } from "@/application/utils/resolveEl";

/** Fade-in and stagger children of a container. */
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
    "-=0.2",
  );
}

/** Night city neon logo: dramatic entrance, floating + pulsing glow cycle. */
export function animateLogo(el: Ref<HTMLElement | null>) {
  const dom = resolveEl(el);
  if (!dom) return;

  // Dramatic entrance
  const enter = gsap.timeline({ defaults: { ease: "power3.out" } });
  enter.fromTo(dom,
    { opacity: 0, scale: 0.75, y: 30, filter: "drop-shadow(0 0 0px rgba(244,114,182,0)) drop-shadow(0 0 0px rgba(34,211,238,0))" },
    { opacity: 1, scale: 1, y: 0, duration: 1.2 },
  );
  enter.to(dom, {
    filter: "drop-shadow(0 0 20px rgba(244,114,182,0.6)) drop-shadow(0 0 50px rgba(34,211,238,0.25))",
    duration: 0.6,
    ease: "power1.out",
  }, 0.5);

  // Float with subtle rotation
  gsap.to(dom, {
    y: -12,
    rotation: 1.5,
    duration: 3.5,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1.2,
  });

  // Neon glow pulse — cycles through pink, cyan, purple and gold
  gsap.timeline({ repeat: -1, delay: 1.8 })
    .to(dom, {
      filter: "drop-shadow(0 0 18px rgba(244,114,182,0.7)) drop-shadow(0 0 40px rgba(244,114,182,0.3))",
      duration: 2,
      ease: "sine.inOut",
    })
    .to(dom, {
      filter: "drop-shadow(0 0 14px rgba(34,211,238,0.6)) drop-shadow(0 0 36px rgba(34,211,238,0.2))",
      duration: 2.5,
      ease: "sine.inOut",
    })
    .to(dom, {
      filter: "drop-shadow(0 0 16px rgba(192,132,252,0.6)) drop-shadow(0 0 38px rgba(192,132,252,0.25))",
      duration: 2,
      ease: "sine.inOut",
    })
    .to(dom, {
      filter: "drop-shadow(0 0 12px rgba(251,191,36,0.5)) drop-shadow(0 0 30px rgba(251,191,36,0.15))",
      duration: 2.5,
      ease: "sine.inOut",
    });
}
