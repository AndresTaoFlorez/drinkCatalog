import { ref, onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";

/**
 * Resolves a Vue ref that may point to a styled component instance or a raw DOM element.
 */
function resolveDom(r: { value: unknown }): HTMLElement | null {
  const v = r.value as { $el?: HTMLElement } | HTMLElement | null;
  if (!v) return null;
  if (v instanceof HTMLElement) return v;
  if ((v as { $el?: HTMLElement }).$el instanceof HTMLElement)
    return (v as { $el: HTMLElement }).$el;
  return null;
}

const DISMISS_THRESHOLD = 0.18;
const MAX_ROTATION = 12;

/**
 * Composable for a carousel with physical drag + radial rotation dismiss.
 * The active slide translates and rotates with the pointer like a card
 * being swiped, pivoting from the bottom center.
 */
export function useCarousel(totalSlides: number) {
  const current = ref(0);
  const sectionEl = ref<HTMLElement | null>(null);
  let autoTimer: ReturnType<typeof setInterval> | null = null;
  let transitioning = false;

  let isDragging = false;
  let startX = 0;
  let currentDx = 0;

  function getSlides(): HTMLElement[] {
    const section = resolveDom(sectionEl);
    if (!section) return [];
    return Array.from(section.querySelectorAll<HTMLElement>("[data-slide]"));
  }

  function getWidth(): number {
    const section = resolveDom(sectionEl);
    return section?.offsetWidth ?? 1;
  }

  /** Reset all slides to their idle state. */
  function resetSlides(activeIndex: number) {
    const slides = getSlides();
    slides.forEach((s, i) => {
      gsap.set(s, {
        opacity: i === activeIndex ? 1 : 0,
        x: 0,
        rotation: 0,
        scale: 1,
        transformOrigin: "center bottom",
        zIndex: i === activeIndex ? 2 : 1,
      });
    });
  }

  /** Transition to a slide (used by dots, auto-advance). */
  function goTo(index: number) {
    if (transitioning || index === current.value) return;
    const slides = getSlides();
    if (!slides.length) return;

    transitioning = true;
    const from = slides[current.value];
    const to = slides[index];
    const dir = index > current.value ? -1 : 1;

    current.value = index;

    gsap.set(to, { opacity: 0.5, x: 0, rotation: 0, scale: 1, transformOrigin: "center bottom", zIndex: 1 });
    gsap.set(from, { zIndex: 2 });

    const tl = gsap.timeline({
      onComplete: () => {
        resetSlides(index);
        transitioning = false;
      },
    });

    tl.to(from, {
      x: dir * getWidth() * 1.1,
      rotation: dir * MAX_ROTATION,
      duration: 0.55,
      ease: "power2.in",
    });
    tl.to(to, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    }, 0.2);
  }

  function next() {
    goTo((current.value + 1) % totalSlides);
  }

  function prev() {
    goTo((current.value - 1 + totalSlides) % totalSlides);
  }

  function resetAutoTimer() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (!transitioning && !isDragging) next();
    }, 5000);
  }

  /** Pointer down: start drag. */
  function onPointerDown(e: PointerEvent) {
    if (e.button !== 0 || transitioning) return;
    isDragging = true;
    startX = e.clientX;
    currentDx = 0;
    if (autoTimer) clearInterval(autoTimer);

    const slides = getSlides();
    const cur = slides[current.value];
    if (cur) {
      gsap.set(cur, { zIndex: 2, transformOrigin: "center bottom" });
      cur.style.cursor = "grabbing";
    }

    // Peek: show adjacent slides underneath
    const nextIdx = (current.value + 1) % totalSlides;
    const prevIdx = (current.value - 1 + totalSlides) % totalSlides;
    if (slides[nextIdx]) gsap.set(slides[nextIdx], { opacity: 0.4, x: 0, rotation: 0, zIndex: 1 });
    if (slides[prevIdx] && prevIdx !== nextIdx) gsap.set(slides[prevIdx], { opacity: 0.4, x: 0, rotation: 0, zIndex: 1 });
  }

  function onPointerMove(e: PointerEvent) {
    if (!isDragging) return;
    e.preventDefault();

    currentDx = e.clientX - startX;
    const slides = getSlides();
    const cur = slides[current.value];
    if (!cur) return;

    const w = getWidth();
    const rotate = (currentDx / w) * MAX_ROTATION;

    gsap.set(cur, {
      x: currentDx * 0.85,
      rotation: rotate,
    });
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;

    const slides = getSlides();
    const cur = slides[current.value];
    if (cur) cur.style.cursor = "";

    const w = getWidth();
    const ratio = Math.abs(currentDx) / w;
    const goingLeft = currentDx < 0;

    if (ratio > DISMISS_THRESHOLD) {
      // Dismiss current slide
      const targetIdx = goingLeft
        ? (current.value + 1) % totalSlides
        : (current.value - 1 + totalSlides) % totalSlides;

      transitioning = true;
      const from = slides[current.value];
      const to = slides[targetIdx];
      const dir = goingLeft ? -1 : 1;

      current.value = targetIdx;

      gsap.set(to, { opacity: 0.4, x: 0, rotation: 0, scale: 1, transformOrigin: "center bottom", zIndex: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          resetSlides(targetIdx);
          transitioning = false;
          resetAutoTimer();
        },
      });

      tl.to(from, {
        x: dir * w * 1.1,
        rotation: dir * MAX_ROTATION,
        duration: 0.4,
        ease: "power2.in",
      });
      tl.to(to, {
        opacity: 1,
        duration: 0.35,
        ease: "power2.out",
      }, 0.15);
    } else {
      // Snap back
      const tl = gsap.timeline({
        onComplete: () => {
          resetSlides(current.value);
          resetAutoTimer();
        },
      });

      tl.to(slides[current.value], {
        x: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }

  onMounted(() => {
    resetSlides(0);
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    resetAutoTimer();
  });

  onBeforeUnmount(() => {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    if (autoTimer) clearInterval(autoTimer);
  });

  return { current, sectionEl, goTo, next, prev, onPointerDown };
}
