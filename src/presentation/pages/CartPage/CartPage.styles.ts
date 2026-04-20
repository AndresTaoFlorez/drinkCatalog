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

/** Main content. */
export const Content = styled("div", {
  base: {
    maxWidth: "800px",
    mx: "auto",
    w: "full",
    px: "4",
    pt: "16",
    pb: "16",
    flex: 1,
    "@media (min-width: 500px)": {
      px: "8",
      pt: "20",
      pb: "20",
    },
    "@media (min-width: 768px)": {
      px: "16",
      pt: "24",
      pb: "24",
    },
  },
});

/** Page title. */
export const Title = styled("h1", {
  base: {
    fontSize: "2xl",
    fontFamily: "inter",
    fontWeight: "800",
    color: "text",
    mb: "6",
    "@media (min-width: 500px)": {
      fontSize: "3xl",
      mb: "8",
    },
    "@media (min-width: 768px)": {
      fontSize: "4xl",
      mb: "10",
    },
  },
});

/** Cart item card. */
export const ItemCard = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "3",
    py: "4",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    "@media (min-width: 500px)": {
      flexWrap: "nowrap",
      gap: "5",
      py: "5",
    },
  },
});

/** Item thumbnail wrapper. */
export const ItemThumb = styled("div", {
  base: {
    w: "50px",
    h: "70px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "10px",
  },
});

/** Item details block. */
export const ItemDetails = styled("div", {
  base: {
    flex: 1,
    minWidth: 0,
  },
});

/** Item name. */
export const ItemName = styled("div", {
  base: {
    fontSize: "base",
    fontWeight: "semibold",
    color: "text",
    mb: "1",
  },
});

/** Item price. */
export const ItemPrice = styled("div", {
  base: {
    fontSize: "sm",
    color: "gold.400",
  },
});

/** Quantity controls. */
export const QtyControls = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
  },
});

/** Quantity button. */
export const QtyBtn = styled("button", {
  base: {
    w: "32px",
    h: "32px",
    borderRadius: "full",
    background: "rgba(255,255,255,0.06)",
    border: "none",
    color: "text",
    fontSize: "base",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.15s",
    _hover: { background: "rgba(244,114,182,0.15)" },
  },
});

/** Quantity value. */
export const QtyValue = styled("span", {
  base: {
    fontSize: "lg",
    fontWeight: "bold",
    color: "text",
    minWidth: "28px",
    textAlign: "center",
  },
});

/** Item subtotal. */
export const ItemSubtotal = styled("div", {
  base: {
    fontSize: "base",
    fontWeight: "bold",
    color: "text",
    textAlign: "right",
    "@media (min-width: 500px)": {
      fontSize: "lg",
      minWidth: "100px",
    },
  },
});

/** Remove button. */
export const RemoveBtn = styled("button", {
  base: {
    background: "none",
    border: "none",
    color: "muted",
    cursor: "pointer",
    transition: "color 0.2s",
    _hover: { color: "fuchsia.400" },
  },
});

/** Summary section. */
export const Summary = styled("div", {
  base: {
    mt: "10",
    pt: "8",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: "4",
  },
});

/** Summary row. */
export const SummaryRow = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});

/** Summary label. */
export const SummaryLabel = styled("span", {
  base: {
    fontSize: "base",
    color: "muted",
  },
});

/** Summary value. */
export const SummaryValue = styled("span", {
  base: {
    fontSize: "2xl",
    fontWeight: "bold",
    color: "gold.400",
  },
});

/** Actions row. */
export const Actions = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "3",
    mt: "6",
    "@media (min-width: 500px)": {
      flexDirection: "row",
      gap: "4",
    },
  },
});

/** Clear cart button. */
export const ClearBtn = styled("button", {
  base: {
    px: "6",
    py: "3",
    borderRadius: "full",
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "muted",
    fontSize: "sm",
    cursor: "pointer",
    transition: "color 0.2s, border-color 0.2s",
    _hover: { color: "fuchsia.400", borderColor: "rgba(244,114,182,0.3)" },
  },
});

/** Checkout button. */
export const CheckoutBtn = styled("button", {
  base: {
    flex: 1,
    py: "3",
    borderRadius: "full",
    background: "fuchsia.400",
    border: "none",
    color: "white",
    fontSize: "base",
    fontWeight: "semibold",
    cursor: "pointer",
    boxShadow: "neon",
    transition: "transform 0.2s, box-shadow 0.2s",
    _hover: {
      transform: "scale(1.02)",
      boxShadow: "0 0 36px rgba(244,114,182,0.7)",
    },
  },
});

/** Empty state. */
export const EmptyState = styled("div", {
  base: {
    textAlign: "center",
    color: "muted",
    fontSize: "lg",
    py: "16",
  },
});

/** Back to shop link. */
export const BackLink = styled("button", {
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "2",
    background: "transparent",
    border: "none",
    color: "fuchsia.400",
    fontSize: "sm",
    cursor: "pointer",
    mt: "4",
    px: "0",
    _hover: { textDecoration: "underline" },
  },
});
