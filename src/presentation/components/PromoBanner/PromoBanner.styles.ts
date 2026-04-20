import { styled } from "@styled-system/jsx";

/** Gradient promotional banner with decorative overlay. */
export const Banner = styled("div", {
  base: {
    borderRadius: "16px",
    background: "linear-gradient(130deg, #1e3a5f 0%, #312e81 55%, #4c1d95 100%)",
    border: "1px solid rgba(196,181,253,0.18)",
    px: "5",
    py: "6",
    display: "flex",
    flexDirection: "column",
    gap: "4",
    position: "relative",
    overflow: "hidden",
    _before: {
      content: '""',
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse at 75% 50%, rgba(244,114,182,0.18) 0%, transparent 60%)",
    },
    "@media (min-width: 500px)": {
      px: "8",
      py: "8",
      borderRadius: "18px",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "@media (min-width: 768px)": {
      px: "10",
    },
  },
});

/** Text block inside the promo banner. */
export const PromoText = styled("div", {
  base: {
    position: "relative",
    zIndex: 1,
  },
});

/** Promo eyebrow label. */
export const PromoEyebrow = styled("div", {
  base: {
    fontSize: "xs",
    color: "fuchsia.400",
    textTransform: "uppercase",
    letterSpacing: "3px",
    mb: "2",
  },
});

/** Large promo heading. */
export const PromoH = styled("div", {
  base: {
    fontFamily: "heading",
    fontSize: "3xl",
    color: "white",
    lineHeight: 1,
    mb: "1.5",
    "@media (min-width: 500px)": {
      fontSize: "4xl",
    },
    "@media (min-width: 768px)": {
      fontSize: "5xl",
    },
  },
});

/** Promo subtitle text. */
export const PromoSub = styled("div", {
  base: {
    fontSize: "sm",
    color: "rgba(255,255,255,0.5)",
    mb: "5",
  },
});

/** Promo CTA button. */
export const PromoBtn = styled("button", {
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
    boxShadow: "0 0 18px rgba(244,114,182,0.4)",
    transition: "transform 0.2s",
    position: "relative",
    zIndex: 1,
    _hover: { transform: "scale(1.04)" },
  },
});

/** Container for decorative bottle SVGs. */
export const PromoGraphic = styled("div", {
  base: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    gap: "3",
    alignItems: "flex-end",
    opacity: 0.7,
    hideBelow: "md",
  },
});
