import { styled } from "@styled-system/jsx";

/** Category preview card linking to the full catalog page. */
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
    alignItems: "center",
    cursor: "pointer",
    transition: "transform 0.35s cubic-bezier(.25,.46,.45,.94), box-shadow 0.35s, border-color 0.35s",
    pt: "6",
    pb: "5",
    px: "4",
    _hover: {
      transform: "translateY(-6px)",
      boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 24px rgba(244,114,182,0.12)",
      borderColor: "rgba(244,114,182,0.2)",
    },
  },
});

/** Bottle preview area. */
export const CardBottle = styled("div", {
  base: {
    h: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: "3",
    transition: "transform 0.35s",
    "@media (min-width: 500px)": {
      h: "120px",
    },
  },
});

/** Category name. */
export const CardTitle = styled("div", {
  base: {
    fontSize: "sm",
    fontWeight: "bold",
    color: "text",
    textAlign: "center",
    mb: "0.5",
    "@media (min-width: 500px)": {
      fontSize: "base",
    },
  },
});

/** Product count subtitle. */
export const CardCount = styled("div", {
  base: {
    fontSize: "2xs",
    color: "muted",
    textAlign: "center",
    "@media (min-width: 500px)": {
      fontSize: "xs",
    },
  },
});
