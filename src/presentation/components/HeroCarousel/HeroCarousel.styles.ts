import { styled } from "@styled-system/jsx";

/** Outer wrapper with horizontal padding. */
export const HeroOuter = styled("div", {
  base: {
    px: "4",
    pt: "6",
    "@media (min-width: 400px)": {
      px: "16",
    },
  },
});

/** Main hero container with overflow hidden and rounded corners. */
export const HeroSection = styled("section", {
  base: {
    position: "relative",
    overflow: "visible",
    h: "400px",
    touchAction: "pan-y",
    cursor: "grab",
    userSelect: "none",
    borderRadius: "20px",
    maxWidth: "1200px",
    mx: "auto",
  },
});

/** Individual slide stacked via absolute positioning. */
export const HeroSlide = styled("div", {
  base: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    borderRadius: "20px",
    willChange: "opacity, transform",
    background: "#16133a",
  },
});

/** Background layer for city skyline SVGs. */
export const CityBg = styled("div", {
  base: {
    position: "absolute",
    inset: 0,
  },
});

/** Text content overlay positioned on the left side. */
export const HeroContent = styled("div", {
  base: {
    position: "absolute",
    top: "50%",
    left: "10%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    maxWidth: "480px",
  },
});

/** Small uppercase eyebrow label above the hero title. */
export const HeroEyebrow = styled("div", {
  base: {
    fontSize: "11px",
    color: "fuchsia.400",
    textTransform: "uppercase",
    letterSpacing: "3px",
    mb: "2.5",
  },
});

/** Large hero heading using accent script font with neon gradient. */
export const HeroH = styled("div", {
  base: {
    fontFamily: "manrope",
    fontSize: "6xl",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 1.05,
    background: "linear-gradient(100deg, #f472b6 0%, #c084fc 40%, #22d3ee 100%)",
    backgroundClip: "text",
    color: "transparent",
    filter: "drop-shadow(0 0 20px rgba(244,114,182,0.4)) drop-shadow(0 0 40px rgba(34,211,238,0.2))",
    mb: "4",
  },
});

/** Hero subtitle/description text. */
export const HeroSub = styled("div", {
  base: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.55)",
    mb: "6",
    lineHeight: 1.5,
  },
});

/** Primary CTA button with neon glow. */
export const HeroBtn = styled("button", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    background: "fuchsia.400",
    color: "white",
    fontSize: "sm",
    fontWeight: "semibold",
    px: "8",
    py: "3",
    borderRadius: "full",
    border: "none",
    cursor: "pointer",
    boxShadow: "neon",
    pointerEvents: "all",
    transition: "transform 0.2s, box-shadow 0.2s",
    _hover: {
      transform: "scale(1.04)",
      boxShadow: "0 0 36px rgba(244,114,182,0.7)",
    },
  },
});

/** Dot indicators container. */
export const HeroDots = styled("div", {
  base: {
    position: "absolute",
    bottom: "18px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "1.5",
    pointerEvents: "all",
  },
});

/** Individual dot indicator. */
export const HeroDot = styled("div", {
  base: {
    w: "6px",
    h: "6px",
    borderRadius: "full",
    background: "rgba(255,255,255,0.3)",
    cursor: "pointer",
    transition: "all 0.35s",
    "&[data-active]": {
      background: "fuchsia.400",
      w: "22px",
      borderRadius: "4px",
    },
  },
});

/** Arrow navigation button (prev/next). */
export const HeroArrow = styled("button", {
  base: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    w: "42px",
    h: "42px",
    borderRadius: "full",
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "white",
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: 10,
    transition: "background 0.2s",
    pointerEvents: "all",
    lineHeight: 1,
    _hover: { background: "rgba(244,114,182,0.3)" },
  },
  variants: {
    side: {
      prev: { left: "16px" },
      next: { right: "16px" },
    },
  },
});
