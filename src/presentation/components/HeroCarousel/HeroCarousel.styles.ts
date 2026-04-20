import { styled } from "@styled-system/jsx";

/** Outer wrapper with horizontal padding. */
export const HeroOuter = styled("div", {
  base: {
    px: "2",
    pt: "4",
    "@media (min-width: 500px)": {
      px: "8",
      pt: "6",
    },
    "@media (min-width: 768px)": {
      px: "16",
    },
  },
});

/** Main hero container with overflow hidden and rounded corners. */
export const HeroSection = styled("section", {
  base: {
    position: "relative",
    overflow: "visible",
    h: "260px",
    touchAction: "pan-y",
    cursor: "grab",
    userSelect: "none",
    borderRadius: "16px",
    maxWidth: "1200px",
    mx: "auto",
    "@media (min-width: 500px)": {
      h: "340px",
      borderRadius: "20px",
    },
    "@media (min-width: 768px)": {
      h: "400px",
    },
  },
});

/** Individual slide stacked via absolute positioning. */
export const HeroSlide = styled("div", {
  base: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    borderRadius: "16px",
    willChange: "opacity, transform",
    background: "#16133a",
    "@media (min-width: 500px)": {
      borderRadius: "20px",
    },
  },
});

/** Background layer for hero images. */
export const CityBg = styled("div", {
  base: {
    position: "absolute",
    inset: 0,
    borderRadius: "16px",
    _after: {
      content: '""',
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(12,10,36,0.88) 0%, rgba(12,10,36,0.55) 50%, rgba(12,10,36,0.15) 100%)",
      borderRadius: "16px",
    },
    "@media (min-width: 500px)": {
      borderRadius: "20px",
      _after: {
        borderRadius: "20px",
      },
    },
  },
});

/** Text content overlay positioned on the left side. */
export const HeroContent = styled("div", {
  base: {
    position: "absolute",
    top: "50%",
    left: "5%",
    right: "5%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    "@media (min-width: 500px)": {
      left: "8%",
      right: "auto",
      maxWidth: "420px",
    },
    "@media (min-width: 768px)": {
      left: "10%",
      maxWidth: "480px",
    },
  },
});

/** Small uppercase eyebrow label above the hero title. */
export const HeroEyebrow = styled("div", {
  base: {
    fontSize: "xs",
    color: "fuchsia.400",
    textTransform: "uppercase",
    letterSpacing: "3px",
    mb: "2.5",
    textShadow: "0 0 12px rgba(244,114,182,0.6)",
  },
});

/** Large hero heading using accent script font with neon gradient. */
export const HeroH = styled("div", {
  base: {
    fontFamily: "manrope",
    fontSize: "3xl",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 1.05,
    background: "linear-gradient(100deg, #f472b6 0%, #c084fc 40%, #22d3ee 100%)",
    backgroundClip: "text",
    color: "transparent",
    filter: "drop-shadow(0 0 24px rgba(244,114,182,0.5)) drop-shadow(0 0 48px rgba(34,211,238,0.3))",
    textShadow: "0 2px 30px rgba(0,0,0,0.6)",
    mb: "3",
    "@media (min-width: 500px)": {
      fontSize: "4xl+",
      mb: "4",
    },
    "@media (min-width: 768px)": {
      fontSize: "6xl",
    },
  },
});

/** Hero subtitle/description text. */
export const HeroSub = styled("div", {
  base: {
    fontSize: "sm",
    color: "rgba(255,255,255,0.8)",
    mb: "4",
    lineHeight: 1.5,
    textShadow: "0 1px 16px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    "@media (min-width: 500px)": {
      fontSize: "md",
      mb: "6",
      WebkitLineClamp: "3",
    },
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
    fontSize: "xs",
    fontWeight: "semibold",
    px: "5",
    py: "2.5",
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
    "@media (min-width: 500px)": {
      fontSize: "sm",
      px: "8",
      py: "3",
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
    zIndex: 10,
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
    fontSize: "xl+",
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
