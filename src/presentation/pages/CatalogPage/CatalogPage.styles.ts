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
    pt: "10",
    pb: "16",
    flex: 1,
    "@media (min-width: 500px)": {
      px: "8",
      pt: "14",
    },
    "@media (min-width: 768px)": {
      px: "16",
      pt: "16",
    },
  },
});

/** Page header with title and count. */
export const Header = styled("div", {
  base: {
    mb: "8",
    "@media (min-width: 500px)": {
      mb: "10",
    },
  },
});

/** Category eyebrow. */
export const Eyebrow = styled("div", {
  base: {
    fontSize: "xs",
    color: "fuchsia.400",
    textTransform: "uppercase",
    letterSpacing: "3px",
    mb: "2",
  },
});

/** Page title. */
export const Title = styled("h1", {
  base: {
    fontSize: "2xl",
    fontFamily: "inter",
    fontWeight: "800",
    color: "text",
    lineHeight: 1.1,
    mb: "2",
    "@media (min-width: 500px)": {
      fontSize: "3xl",
    },
    "@media (min-width: 768px)": {
      fontSize: "4xl",
    },
  },
});

/** Product count subtitle. */
export const Subtitle = styled("div", {
  base: {
    fontSize: "sm",
    color: "muted",
  },
});

/** Product grid. */
export const Grid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "4",
    "@media (min-width: 500px)": {
      gap: "5",
    },
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "6",
    },
    "@media (min-width: 1024px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
});

/** Category navigation chips row. */
export const ChipRow = styled("div", {
  base: {
    display: "flex",
    gap: "2",
    overflowX: "auto",
    pb: "1",
    mb: "8",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
    "@media (min-width: 500px)": {
      gap: "2.5",
      mb: "10",
    },
  },
});

/** Category chip link. */
export const ChipLink = styled("button", {
  base: {
    display: "flex",
    alignItems: "center",
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
