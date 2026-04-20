import { styled } from "@styled-system/jsx";

/** Full-screen invisible overlay that closes popup on click. */
export const Overlay = styled("div", {
  base: {
    position: "fixed",
    inset: 0,
    zIndex: 300,
  },
});

/** Floating popup panel anchored below the cart button. */
export const Panel = styled("div", {
  base: {
    position: "absolute",
    top: "calc(100% + 8px)",
    right: 0,
    zIndex: 301,
    w: "360px",
    maxH: "calc(100vh - 72px)",
    background: "surface",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    boxShadow: "0 16px 48px rgba(0,0,0,0.6), 0 0 24px rgba(244,114,182,0.1)",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 400px)": {
      position: "fixed",
      top: "56px",
      right: "8px",
      left: "8px",
      w: "auto",
    },
  },
});

/** Popup header row. */
export const PopupHeader = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: "5",
    py: "4",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
});

/** Popup title. */
export const PopupTitle = styled("div", {
  base: {
    fontSize: "lg",
    fontWeight: "bold",
    color: "text",
  },
});

/** Close button. */
export const CloseBtn = styled("button", {
  base: {
    w: "28px",
    h: "28px",
    borderRadius: "full",
    background: "rgba(255,255,255,0.06)",
    border: "none",
    color: "muted",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.2s, background 0.2s",
    _hover: { color: "fuchsia.400", background: "rgba(244,114,182,0.1)" },
  },
});

/** Scrollable items list (max ~5 items visible). */
export const ItemsList = styled("div", {
  base: {
    flex: 1,
    overflowY: "auto",
    px: "5",
    py: "3",
    display: "flex",
    flexDirection: "column",
    gap: "3",
    maxH: "340px",
    minH: 0,
  },
});

/** Single cart item row. */
export const CartItemRow = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "3",
    py: "2",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
  },
});

/** Item thumbnail wrapper. */
export const ItemThumb = styled("div", {
  base: {
    w: "40px",
    h: "56px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "8px",
  },
});

/** Item info block. */
export const ItemInfo = styled("div", {
  base: {
    flex: 1,
    minWidth: 0,
  },
});

/** Item name. */
export const ItemName = styled("div", {
  base: {
    fontSize: "sm",
    fontWeight: "medium",
    color: "text",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

/** Item price. */
export const ItemPrice = styled("div", {
  base: {
    fontSize: "xs",
    color: "gold.400",
    mt: "0.5",
  },
});

/** Quantity controls. */
export const QtyControls = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1.5",
  },
});

/** Quantity button (+/-). */
export const QtyBtn = styled("button", {
  base: {
    w: "24px",
    h: "24px",
    borderRadius: "full",
    background: "rgba(255,255,255,0.06)",
    border: "none",
    color: "text",
    fontSize: "sm",
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
    fontSize: "sm",
    fontWeight: "bold",
    color: "text",
    minWidth: "20px",
    textAlign: "center",
  },
});

/** Remove item button. */
export const RemoveBtn = styled("button", {
  base: {
    background: "none",
    border: "none",
    color: "muted",
    cursor: "pointer",
    fontSize: "xs",
    transition: "color 0.2s",
    px: "0",
    _hover: { color: "fuchsia.400" },
  },
});

/** Footer with totals and actions. */
export const PopupFooter = styled("div", {
  base: {
    px: "5",
    py: "4",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    display: "flex",
    flexDirection: "column",
    gap: "3",
  },
});

/** Total row. */
export const TotalRow = styled("div", {
  base: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
});

/** Total label. */
export const TotalLabel = styled("span", {
  base: {
    fontSize: "sm",
    color: "muted",
  },
});

/** Total value. */
export const TotalValue = styled("span", {
  base: {
    fontSize: "xl",
    fontWeight: "bold",
    color: "gold.400",
  },
});

/** Go to cart page link. */
export const GoToCartBtn = styled("button", {
  base: {
    w: "full",
    py: "3",
    borderRadius: "full",
    background: "fuchsia.400",
    border: "none",
    color: "white",
    fontSize: "sm",
    fontWeight: "semibold",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "neon",
    _hover: {
      transform: "scale(1.02)",
      boxShadow: "0 0 36px rgba(244,114,182,0.7)",
    },
  },
});

/** Empty state text. */
export const EmptyText = styled("div", {
  base: {
    textAlign: "center",
    color: "muted",
    fontSize: "sm",
    py: "10",
  },
});
