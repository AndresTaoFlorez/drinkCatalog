import { styled } from "@styled-system/jsx";

/** Footer wrapper with top border. */
export const FooterWrap = styled("footer", {
  base: {
    background: "surface",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    px: "4",
    pt: "16",
    pb: "10",
    mt: "16",
    "@media (min-width: 400px)": {
      px: "16",
    },
  },
});

/** Inner container with max-width. */
export const FooterInner = styled("div", {
  base: {
    maxWidth: "1200px",
    mx: "auto",
  },
});

/** Grid layout for recipe cards. */
export const RecipeGrid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "5",
    mb: "10",
  },
});

/** Individual recipe card. */
export const RecipeCard = styled("div", {
  base: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: "14px",
    p: "5",
    cursor: "pointer",
    transition: "border-color 0.2s, transform 0.2s",
    _hover: {
      borderColor: "rgba(244,114,182,0.3)",
      transform: "translateY(-3px)",
    },
  },
});

/** Recipe thumbnail placeholder. */
export const RecipeThumb = styled("div", {
  base: {
    w: "full",
    h: "110px",
    background: "linear-gradient(135deg, rgba(244,114,182,0.12), rgba(34,211,238,0.08))",
    borderRadius: "10px",
    mb: "3.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
  },
});

/** Recipe name text. */
export const RecipeName = styled("div", {
  base: {
    fontSize: "15px",
    fontWeight: "semibold",
    mb: "1",
  },
});

/** Recipe metadata text. */
export const RecipeMeta = styled("div", {
  base: {
    fontSize: "xs",
    color: "muted",
  },
});

/** Bottom bar with logo, links, and copyright. */
export const FooterBottom = styled("div", {
  base: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    pt: "5",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "xs",
    color: "muted",
  },
});

/** Neon gradient text logo for the footer. */
export const NeonLogo = styled("div", {
  base: {
    userSelect: "none",
    lineHeight: 1,
  },
});

/** Script font for the neon logo text. */
export const NeonScript = styled("span", {
  base: {
    fontFamily: "accent",
    fontSize: "22px",
    fontWeight: "bold",
    background: "linear-gradient(100deg, #f472b6 0%, #c084fc 40%, #22d3ee 100%)",
    backgroundClip: "text",
    color: "transparent",
    filter: "drop-shadow(0 0 10px rgba(244,114,182,0.55)) drop-shadow(0 0 20px rgba(34,211,238,0.25))",
    display: "block",
  },
});

/** Gold badge text under the logo. */
export const NeonBadge = styled("span", {
  base: {
    fontSize: "9px",
    fontWeight: "bold",
    letterSpacing: "5px",
    color: "gold",
    textShadow: "0 0 8px rgba(251,191,36,0.6)",
    display: "block",
  },
});

/** Footer links row. */
export const FooterLinks = styled("div", {
  base: {
    display: "flex",
    gap: "5",
    "& a": {
      color: "muted",
      textDecoration: "none",
      transition: "color 0.2s",
      _hover: { color: "fuchsia.400" },
    },
  },
});
