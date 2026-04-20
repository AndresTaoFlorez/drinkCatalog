import { styled } from "@styled-system/jsx";

/** Page wrapper. */
export const Page = styled("div", {
  base: {
    minHeight: "100vh",
    bg: "bg",
    display: "flex",
    flexDirection: "column",
  },
});

/** Main content area. */
export const Content = styled("div", {
  base: {
    maxWidth: "1200px",
    mx: "auto",
    w: "full",
    px: "4",
    pt: "16",
    pb: "16",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10",
    "@media (min-width: 500px)": {
      px: "6",
      pt: "20",
      pb: "20",
      gap: "14",
    },
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
      px: "16",
      pt: "24",
      pb: "24",
      gap: "20",
    },
  },
});

/** Left column: bottle display. */
export const BottleColumn = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.06)",
    py: "12",
    minHeight: "300px",
    "@media (min-width: 500px)": {
      py: "16",
      minHeight: "380px",
      borderRadius: "24px",
    },
    "@media (min-width: 768px)": {
      py: "20",
      minHeight: "460px",
    },
  },
});

/** Right column: product info. */
export const InfoColumn = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "8",
  },
});

/** Floating back button. */
export const BackLink = styled("button", {
  base: {
    position: "fixed",
    top: "16",
    left: "5",
    zIndex: "150",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    background: "rgba(19,16,46,0.85)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "muted",
    fontSize: "sm",
    cursor: "pointer",
    transition: "color 0.2s, background 0.2s, border-color 0.2s",
    px: "4",
    py: "2.5",
    borderRadius: "full",
    _hover: {
      color: "fuchsia.400",
      background: "rgba(19,16,46,0.95)",
      borderColor: "rgba(244,114,182,0.3)",
    },
  },
});

/** Category badge. */
export const CategoryBadge = styled("span", {
  base: {
    fontSize: "xs",
    textTransform: "uppercase",
    letterSpacing: "3px",
    color: "fuchsia.400",
  },
});

/** Product title. */
export const ProductTitle = styled("h1", {
  base: {
    fontSize: "3xl",
    fontFamily: "inter",
    fontWeight: "800",
    color: "text",
    lineHeight: 1.1,
    mt: "2",
    "@media (min-width: 500px)": {
      fontSize: "4xl",
    },
    "@media (min-width: 768px)": {
      fontSize: "5xl",
    },
  },
});

/** Product description. */
export const ProductDesc = styled("p", {
  base: {
    fontSize: "lg",
    color: "muted",
    lineHeight: 1.7,
  },
});

/** Info grid for ABV, origin, volume. */
export const InfoGrid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "4",
    mt: "4",
  },
});

/** Single info item. */
export const InfoItem = styled("div", {
  base: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "12px",
    p: "4",
    textAlign: "center",
  },
});

/** Info item label. */
export const InfoLabel = styled("div", {
  base: {
    fontSize: "2xs",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "muted",
    mb: "1",
  },
});

/** Info item value. */
export const InfoValue = styled("div", {
  base: {
    fontSize: "xl",
    fontWeight: "bold",
    color: "text",
  },
});

/** Tasting notes section. */
export const TastingSection = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "5",
    mt: "4",
    pt: "8",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
});

/** Tasting note row. */
export const TastingRow = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
  },
});

/** Tasting note label. */
export const TastingLabel = styled("span", {
  base: {
    fontSize: "xs",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "fuchsia.400",
    fontWeight: "semibold",
  },
});

/** Tasting note text. */
export const TastingText = styled("span", {
  base: {
    fontSize: "base",
    color: "text",
    lineHeight: 1.6,
  },
});

/** Price row. */
export const PriceRow = styled("div", {
  base: {
    display: "flex",
    alignItems: "baseline",
    gap: "3",
    mt: "4",
    pt: "8",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
});

/** Main price. */
export const PriceMain = styled("span", {
  base: {
    fontSize: "3xl",
    fontWeight: "bold",
    color: "gold.400",
  },
});

/** Old price. */
export const PriceOld = styled("span", {
  base: {
    fontSize: "lg",
    color: "muted",
    textDecoration: "line-through",
  },
});

/** Discount tag. */
export const DiscountTag = styled("span", {
  base: {
    background: "fuchsia.400",
    color: "white",
    fontSize: "sm",
    fontWeight: "bold",
    px: "3",
    py: "1",
    borderRadius: "full",
  },
});

/** Serve suggestion. */
export const ServeTip = styled("div", {
  base: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.06)",
    borderRadius: "14px",
    p: "6",
    fontSize: "base",
    color: "text",
    lineHeight: 1.6,
    mt: "2",
  },
});

/** Serve label. */
export const ServeLabel = styled("div", {
  base: {
    fontSize: "xs",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "muted",
    mb: "2",
  },
});

/** Add to cart button. */
export const AddToCartBtn = styled("button", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    background: "fuchsia.400",
    color: "white",
    fontSize: "base",
    fontWeight: "semibold",
    px: "10",
    py: "4",
    borderRadius: "full",
    border: "none",
    cursor: "pointer",
    boxShadow: "neon",
    transition: "transform 0.2s, box-shadow 0.2s",
    w: "full",
    _hover: {
      transform: "scale(1.02)",
      boxShadow: "0 0 36px rgba(244,114,182,0.7)",
    },
  },
});
