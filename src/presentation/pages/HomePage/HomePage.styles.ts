import { styled } from "@styled-system/jsx";

/** Root page container with dark background. */
export const Page = styled("div", {
  base: {
    minHeight: "100vh",
    bg: "bg",
    display: "flex",
    flexDirection: "column",
  },
});

/** Constrained content section with horizontal padding. */
export const Section = styled("section", {
  base: {
    px: "4",
    pt: "10",
    maxWidth: "1200px",
    mx: "auto",
    w: "full",
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

/** Page logo displayed below the topbar. */
export const PageLogo = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    pt: "1",
    pb: "0",
    "@media (min-width: 500px)": {
      pt: "2",
      pb: "1",
    },
  },
});

/** Logo image. */
export const PageLogoImg = styled("img", {
  base: {
    h: "260px",
    w: "auto",
    objectFit: "contain",
    filter: "drop-shadow(0 0 16px rgba(244,114,182,0.45)) drop-shadow(0 0 40px rgba(34,211,238,0.15))",
    "@media (min-width: 500px)": {
      h: "380px",
    },
    "@media (min-width: 768px)": {
      h: "480px",
    },
  },
});

/** Wrapper for scroll row + dots indicator. */
export const ScrollWrap = styled("div", {
  base: {
    position: "relative",
  },
});

/** Horizontal scrollable row with drag support. */
export const ScrollRow = styled("div", {
  base: {
    display: "flex",
    gap: "4",
    overflowX: "auto",
    pt: "6",
    pb: "2",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
    cursor: "grab",
    userSelect: "none",
    "@media (min-width: 500px)": {
      gap: "5",
    },
  },
});

/** Dots indicator row below the scroll. */
export const ScrollDots = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5",
    pt: "4",
    pb: "1",
  },
});

/** Single scroll dot. */
export const ScrollDot = styled("div", {
  base: {
    w: "6px",
    h: "6px",
    borderRadius: "full",
    background: "rgba(255,255,255,0.15)",
    transition: "all 0.3s",
  },
  variants: {
    active: {
      true: {
        background: "fuchsia.400",
        w: "18px",
        borderRadius: "4px",
      },
    },
  },
});

/** Fixed-width card wrapper inside a scroll row. */
export const ScrollCard = styled("div", {
  base: {
    flexShrink: 0,
    w: "180px",
    "@media (min-width: 500px)": {
      w: "220px",
    },
    "@media (min-width: 768px)": {
      w: "260px",
    },
  },
});

/** Smaller card wrapper for category cards in scroll. */
export const ScrollCategoryCard = styled("div", {
  base: {
    flexShrink: 0,
    w: "140px",
    "@media (min-width: 500px)": {
      w: "170px",
    },
    "@media (min-width: 768px)": {
      w: "200px",
    },
  },
});

/** Product cards grid layout — responsive columns. */
export const ProductsGrid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "4",
    pt: "10",
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
