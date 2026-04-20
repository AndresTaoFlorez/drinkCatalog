import { styled } from "@styled-system/jsx";

/** Horizontal scrollable container for category chips. */
export const ChipRow = styled("div", {
  base: {
    display: "flex",
    gap: "2.5",
    overflowX: "auto",
    pb: "1",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  },
});

/** Individual category filter chip. */
export const Chip = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "2",
    px: "4",
    py: "2",
    borderRadius: "full",
    border: "1.5px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all 0.2s",
    fontSize: "sm",
    fontWeight: "medium",
    color: "text",
    flexShrink: 0,
    _hover: {
      borderColor: "rgba(244,114,182,0.4)",
      background: "rgba(244,114,182,0.06)",
    },
    "&[data-active]": {
      borderColor: "fuchsia.400",
      background: "rgba(244,114,182,0.12)",
      color: "fuchsia.400",
    },
  },
});
