import { defineConfig } from "@pandacss/dev";
import { themeTokens } from "./src/presentation/styles/theme.config";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  exclude: [],
  theme: {
    extend: {
      tokens: themeTokens,
    },
  },
  outdir: "styled-system",
  jsxFramework: "vue",
});
