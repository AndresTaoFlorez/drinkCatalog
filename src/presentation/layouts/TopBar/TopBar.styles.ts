import { styled } from "@styled-system/jsx";

/** Sticky navigation bar with glassmorphism backdrop. */
export const NavOuter = styled("nav", {
  base: {
    position: "sticky",
    top: 0,
    zIndex: 200,
    px: "4",
    py: "2.5",
    "@media (min-width: 400px)": {
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
    gap: "2.5",
    flex: 1,
  },
  variants: {
    align: {
      left: {},
      right: { justifyContent: "flex-end" },
    },
  },
});

/** Pill-shaped nav button with text and icon. */
export const NavPill = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    background: "transparent",
    border: "none",
    borderRadius: "full",
    px: "3",
    py: "1.5",
    color: "text",
    fontSize: "sm",
    fontWeight: "medium",
    cursor: "pointer",
    transition: "color 0.2s",
    whiteSpace: "nowrap",
    _hover: { color: "fuchsia.400" },
  },
});

/** Circular icon button in the nav. */
export const NavIconBtn = styled("button", {
  base: {
    w: "36px",
    h: "36px",
    borderRadius: "full",
    background: "transparent",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "15px",
    transition: "color 0.2s",
    position: "relative",
    color: "text",
    _hover: { color: "fuchsia.400" },
  },
  variants: {
    variant: {
      default: {},
      cart: {
        color: "fuchsia.400",
      },
    },
  },
});
