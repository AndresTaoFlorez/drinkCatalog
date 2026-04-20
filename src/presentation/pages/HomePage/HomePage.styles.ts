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
    pt: "16",
    maxWidth: "1200px",
    mx: "auto",
    w: "full",
    "@media (min-width: 400px)": {
      px: "16",
    },
  },
});

/** Page logo displayed below the topbar. */
export const PageLogo = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    pt: "8",
    pb: "4",
  },
});

/** Logo image. */
export const PageLogoImg = styled("img", {
  base: {
    h: "420px",
    w: "auto",
    objectFit: "contain",
    filter: "drop-shadow(0 0 12px rgba(244,114,182,0.4))",
  },
});

/** Product cards grid layout (4 columns). */
export const ProductsGrid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "6",
    pt: "10",
  },
});
