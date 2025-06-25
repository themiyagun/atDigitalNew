/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#F28D35",
        analogousColor1: "#6A44F2",
        analogousColor2: "#1CBDDD",
        triadicColor1: "#52378C",
        darkColor1: "#78BF91",
        darkColor2: "#4DCA79",
        text: "#2F2F2F",
        textLight: "#545A75",
        textSubtle: "#9C9991",
        accent1: "#E2F2FE",
        accent2: "#FFF8E0",
        error: "#FF0335",
        success: "#5EB30B",
      },
    },
  },
  plugins: [],
};
