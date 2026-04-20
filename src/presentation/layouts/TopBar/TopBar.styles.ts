import { styled } from "@styled-system/jsx";

/** Sticky navigation bar with glassmorphism backdrop. */
export const NavOuter = styled("nav", {
  base: {
    position: "sticky",
    top: 0,
    zIndex: 200,
    px: "3",
    py: "2",
    background: "rgba(12,10,36,0.82)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    "@media (min-width: 500px)": {
      px: "8",
      py: "2.5",
    },
    "@media (min-width: 768px)": {
      px: "16",
    },
  },
});

/** Inner nav container with max-width constraint. */
export const NavInner = styled("div", {
  base: {
    maxWidth: "1200px",
    mx: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

/** Left or right side of the nav bar. */
export const NavSide = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "1",
    "@media (min-width: 500px)": {
      gap: "1.5",
    },
  },
  variants: {
    align: {
      left: {},
      right: { justifyContent: "flex-end" },
    },
  },
});

/** Unified nav button — icon-only on mobile, icon+label on desktop. */
export const NavBtn = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0",
    background: "transparent",
    border: "none",
    borderRadius: "10px",
    w: "36px",
    h: "36px",
    color: "rgba(255,255,255,0.7)",
    cursor: "pointer",
    transition: "color 0.2s, background 0.15s",
    position: "relative",
    flexShrink: 0,
    _hover: {
      color: "white",
      background: "rgba(255,255,255,0.06)",
    },
    "@media (min-width: 500px)": {
      w: "auto",
      h: "auto",
      gap: "2",
      px: "3",
      py: "2",
      borderRadius: "10px",
    },
  },
  variants: {
    active: {
      true: {
        color: "fuchsia.400",
        _hover: {
          color: "fuchsia.400",
          background: "rgba(244,114,182,0.08)",
        },
      },
    },
  },
});

/** Label text inside NavBtn — hidden on mobile. */
export const NavLabel = styled("span", {
  base: {
    display: "none",
    fontSize: "sm",
    fontWeight: "medium",
    lineHeight: 1,
    "@media (min-width: 500px)": {
      display: "inline",
    },
  },
});

/** Cart item count badge. */
export const CartBadge = styled("span", {
  base: {
    position: "absolute",
    top: "2px",
    right: "2px",
    minWidth: "16px",
    height: "16px",
    borderRadius: "full",
    background: "fuchsia.400",
    color: "white",
    fontSize: "2xs",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    px: "1",
    lineHeight: 1,
    boxShadow: "0 0 8px rgba(244,114,182,0.5)",
    "@media (min-width: 500px)": {
      top: "-2px",
      right: "-4px",
    },
  },
});
