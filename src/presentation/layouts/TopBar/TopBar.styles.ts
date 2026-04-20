import { styled } from "@styled-system/jsx";

export const Bar = styled("header", {
  base: {
    display: "flex",
    alignItems: "center",
    px: "6",
    height: "14",
    borderBottom: "1px solid",
    borderColor: "gray.200",
    bg: "gray.50",
  },
});

export const BrandWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "3",
    fontWeight: "semibold",
    fontSize: "1.125rem",
    color: "gray.900",
  },
});

export const BrandName = styled("span", {
  base: {
    fontWeight: "semibold",
    fontSize: "1.125rem",
    color: "gray.900",
  },
});
