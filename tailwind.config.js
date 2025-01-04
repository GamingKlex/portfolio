import typographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "sans-serif"],
        mono: ["JetBrains Mono Variable", "monospace"],
      },
      fontSize: {
        "3_5xl": "2rem",
      },
    },
  },
  plugins: [typographyPlugin],
};
