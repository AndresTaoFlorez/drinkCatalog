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
const AUTO_INTERVAL = 5000;

/**
 * Composable for a carousel with physical drag + radial rotation dismiss.
 */
export function useCarousel(totalSlides: number) {
  const current = ref(0);
  const sectionEl = ref<HTMLElement | null>(null);
  let autoTimer: ReturnType<typeof setInterval> | null = null;
  let transitioning = false;

  let isDragging = false;
  let startX = 0;
  let currentDx = 0;
  let peekingIdx = -1;

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
        zIndex: i === activeIndex ? 2 : 0,
      });
    });
  }

  function resetAutoTimer() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (!transitioning && !isDragging) next();
    }, AUTO_INTERVAL);
  }

  /** Transition to a slide (used by dots, auto-advance). */
  function goTo(index: number, forceDir?: -1 | 1) {
    if (transitioning || isDragging || index === current.value) return;
    const slides = getSlides();
    if (!slides.length) return;

    transitioning = true;
    const fromIdx = current.value;
    const from = slides[fromIdx];
    const to = slides[index];
    const dir = forceDir ?? (index > fromIdx ? -1 : 1);

    // Prepare: show target underneath, keep from on top
    gsap.set(to, { opacity: 1, x: 0, rotation: 0, zIndex: 1 });
    gsap.set(from, { zIndex: 2 });
    // Hide all others
    slides.forEach((s, i) => {
      if (i !== fromIdx && i !== index) gsap.set(s, { opacity: 0, zIndex: 0 });
    });

    current.value = index;

    const w = getWidth();
    const tl = gsap.timeline({
      onComplete: () => {
        resetSlides(index);
        transitioning = false;
        resetAutoTimer();
      },
    });
    // Move out — linear so it doesn't stall
    tl.to(from, {
      x: dir * w * 1.5,
      rotation: dir * MAX_ROTATION,
      duration: 0.65,
      ease: "none",
    });
    // Fade only in the last stretch
    tl.to(from, {
      opacity: 0,
      duration: 0.2,
      ease: "power1.in",
    }, 0.45);
  }

  function next() {
    goTo((current.value + 1) % totalSlides, -1);
  }

  function prev() {
    goTo((current.value - 1 + totalSlides) % totalSlides, 1);
  }

  /** Pointer down: start drag. */
  function onPointerDown(e: PointerEvent) {
    if (e.button !== 0 || transitioning) return;
    isDragging = true;
    startX = e.clientX;
    currentDx = 0;

    // Stop auto-advance while dragging
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = null;

    const slides = getSlides();
    const cur = slides[current.value];
    if (cur) {
      gsap.set(cur, { zIndex: 2, transformOrigin: "center bottom" });
      cur.style.cursor = "grabbing";
    }
    peekingIdx = -1;
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

    // Show the correct slide underneath based on drag direction
    const goingLeft = currentDx < 0;
    const targetIdx = goingLeft
      ? (current.value + 1) % totalSlides
      : (current.value - 1 + totalSlides) % totalSlides;

    if (targetIdx !== peekingIdx) {
      // Hide previous peek, show new one
      slides.forEach((s, i) => {
        if (i === current.value) return;
        gsap.set(s, {
          opacity: i === targetIdx ? 1 : 0,
          x: 0,
          rotation: 0,
          zIndex: i === targetIdx ? 1 : 0,
        });
      });
      peekingIdx = targetIdx;
    }

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
      const targetIdx = goingLeft
        ? (current.value + 1) % totalSlides
        : (current.value - 1 + totalSlides) % totalSlides;

      transitioning = true;
      const from = slides[current.value];
      const dir = goingLeft ? -1 : 1;

      current.value = targetIdx;

      const tl = gsap.timeline({
        onComplete: () => {
          resetSlides(targetIdx);
          transitioning = false;
          resetAutoTimer();
        },
      });
      tl.to(from, {
        x: dir * w * 1.5,
        rotation: dir * MAX_ROTATION,
        duration: 0.55,
        ease: "none",
      });
      tl.to(from, {
        opacity: 0,
        duration: 0.15,
        ease: "power1.in",
      }, 0.4);
    } else {
      // Snap back
      gsap.to(slides[current.value], {
        x: 0,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          resetSlides(current.value);
          resetAutoTimer();
        },
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
