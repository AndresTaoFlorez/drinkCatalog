import { styled } from "@styled-system/jsx";

/** Small uppercase label above a section title. */
export const Eyebrow = styled("div", {
  base: {
    fontSize: "11px",
    color: "fuchsia.400",
    textTransform: "uppercase",
    letterSpacing: "3px",
    mb: "2",
  },
});

/** Main section title text. */
export const Title = styled("div", {
  base: {
    fontSize: "xl",
    fontWeight: "bold",
    color: "text",
    mb: "4",
  },
});
