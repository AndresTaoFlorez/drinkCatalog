import { styled } from "@styled-system/jsx";

/** Wrapper for the drink glass SVG logo icon. */
export const LogoWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    w: "fit-content",
    cursor: "pointer",
    userSelect: "none",
    willChange: "transform",
    transitionProperty: "transform",
    transitionDuration: "fast",
    transitionTimingFunction: "ease-out",
    _hover: {
      transform: "scale(1.05)",
      transitionDelay: "0ms",
    },
    "& svg": {
      display: "block",
    },
    "& .logo-bg": {
      fill: "fuchsia.700",
    },
    "& .logo-glass": {
      fill: "amber.100",
    },
    "& .logo-liquid": {
      fill: "amber.500",
      opacity: "0.9",
    },
    "& .logo-straw": {
      fill: "white",
    },
  },
});
