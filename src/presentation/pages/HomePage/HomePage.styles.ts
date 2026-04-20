import { styled } from "@styled-system/jsx";

export const Page = styled("div", {
  base: {
    minHeight: "100vh",
    bg: "gray.50",
    display: "flex",
    flexDirection: "column",
  },
});
export const Content = styled("div", {
  base: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const TitleContent = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "6",
    px: "4",
  },
});

export const Title = styled("h1", {
  base: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "gray.900",
    textAlign: "center",
    mt: "1",
  },
});

export const Tagline = styled("p", {
  base: {
    fontSize: "lg",
    color: "gray.600",
    textAlign: "center",
  },
});
