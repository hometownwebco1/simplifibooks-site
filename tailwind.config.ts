import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0EA5E9",
          green: "#10B981",
          dark: "#111827"
        }
      }
    },
  },
  plugins: [],
};
export default config;
