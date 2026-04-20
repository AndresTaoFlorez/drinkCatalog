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
    gridTemplateColumns: "1fr",
    gap: "4",
    mb: "10",
    "@media (min-width: 500px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "5",
    },
    "@media (min-width: 768px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
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
    fontSize: "4xl+",
  },
});

/** Recipe name text. */
export const RecipeName = styled("div", {
  base: {
    fontSize: "md",
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
    flexDirection: "column",
    gap: "4",
    alignItems: "center",
    textAlign: "center",
    fontSize: "xs",
    color: "muted",
    "@media (min-width: 500px)": {
      flexDirection: "row",
      justifyContent: "space-between",
      textAlign: "left",
    },
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
    fontSize: "xl+",
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
    fontSize: "3xs",
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
    gap: "4",
    flexWrap: "wrap",
    justifyContent: "center",
    "& a": {
      color: "muted",
      textDecoration: "none",
      transition: "color 0.2s",
      _hover: { color: "fuchsia.400" },
    },
    "@media (min-width: 500px)": {
      gap: "5",
      justifyContent: "flex-start",
    },
  },
});

/** Contact section grid. */
export const ContactGrid = styled("div", {
  base: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "8",
    pb: "10",
    mb: "10",
    // borderBottom: "1px solid rgba(255,255,255,0.06)",
    "@media (min-width: 640px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
});

/** Contact block wrapper. */
export const ContactBlock = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "3",
  },
});

/** Contact block title. */
export const ContactTitle = styled("div", {
  base: {
    fontSize: "xs",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "fuchsia.400",
    fontWeight: "semibold",
    mb: "1",
  },
});

/** Contact detail line. */
export const ContactLine = styled("div", {
  base: {
    fontSize: "sm",
    color: "text",
    display: "flex",
    alignItems: "center",
    gap: "2",
    lineHeight: 1.6,
  },
});

/** Social icons row. */
export const SocialRow = styled("div", {
  base: {
    display: "flex",
    gap: "3",
    mt: "1",
  },
});

/** Social icon link. */
export const SocialLink = styled("a", {
  base: {
    w: "38px",
    h: "38px",
    borderRadius: "full",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "muted",
    transition: "color 0.2s, background 0.2s, border-color 0.2s",
    cursor: "pointer",
    _hover: {
      color: "fuchsia.400",
      background: "rgba(244,114,182,0.1)",
      borderColor: "rgba(244,114,182,0.3)",
    },
  },
});
