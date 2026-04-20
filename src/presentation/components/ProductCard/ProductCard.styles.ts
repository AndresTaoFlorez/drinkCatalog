import { styled } from "@styled-system/jsx";

/** Dark product card with hover lift effect. */
export const Card = styled("div", {
  base: {
    background: "rgba(19,16,46,0.95)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "18px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.35s cubic-bezier(.25,.46,.45,.94), box-shadow 0.35s, border-color 0.35s",
    cursor: "pointer",
    _hover: {
      transform: "translateY(-8px)",
      boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 24px rgba(244,114,182,0.1)",
      borderColor: "rgba(244,114,182,0.2)",
    },
  },
});

/** Container for the bottle SVG inside the card. */
export const CardBottle = styled("div", {
  base: {
    w: "full",
    h: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.35s",
    ":hover > &": {
      transform: "translateY(-4px) scale(1.03)",
    },
    "@media (min-width: 500px)": {
      h: "180px",
    },
  },
});

/** Discount badge positioned at the top-right of the card. */
export const CardBadge = styled("div", {
  base: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "fuchsia.400",
    color: "white",
    fontSize: "xs",
    fontWeight: "bold",
    w: "42px",
    h: "42px",
    borderRadius: "full",
    zIndex: 3,
    letterSpacing: "0.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 1,
    boxShadow: "0 4px 12px rgba(244,114,182,0.3)",
  },
});

/** Card body containing text content. */
export const CardBody = styled("div", {
  base: {
    px: "3",
    pt: "3",
    pb: "4",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    "@media (min-width: 500px)": {
      px: "5",
      pt: "4",
      pb: "5",
    },
  },
});

/** Category and volume label. */
export const CardCat = styled("div", {
  base: {
    fontSize: "2xs",
    color: "muted",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    mb: "2",
  },
});

/** Drink name text. */
export const CardName = styled("div", {
  base: {
    fontSize: "sm",
    fontWeight: "semibold",
    color: "text",
    lineHeight: "1.35",
    mb: "4",
    flex: 1,
  },
});

/** Row containing price, old price, and cart button. */
export const CardPriceRow = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

/** Wrapper for price values. */
export const CardPrices = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
  },
});

/** Current price text. */
export const CardPrice = styled("span", {
  base: {
    fontSize: "base",
    fontWeight: "bold",
    color: "gold.400",
    lineHeight: 1,
    "@media (min-width: 500px)": {
      fontSize: "xl",
    },
  },
});

/** Strikethrough original price text. */
export const CardOldPrice = styled("span", {
  base: {
    fontSize: "xs",
    color: "muted",
    textDecoration: "line-through",
    lineHeight: 1,
  },
});

/** Circular add-to-cart button. */
export const CardAddBtn = styled("button", {
  base: {
    w: "32px",
    h: "32px",
    borderRadius: "full",
    background: "rgba(244,114,182,0.12)",
    border: "1px solid rgba(244,114,182,0.25)",
    color: "fuchsia.400",
    cursor: "pointer",
    fontSize: "lg",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "background 0.2s, transform 0.15s, color 0.2s",
    lineHeight: 1,
    _hover: {
      background: "fuchsia.400",
      color: "white",
      transform: "scale(1.1)",
    },
    "@media (min-width: 500px)": {
      w: "38px",
      h: "38px",
      fontSize: "xl",
    },
  },
});
