const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["var(--font-nunito)", ...fontFamily.sans],
    },
    colors: {
      neutral: {
        100: "hsl(209, 23%, 22%)",
        200: "hsl(207, 26%, 17%)",
        300: "hsl(200, 15%, 8%)",
        400: "hsl(0, 0%, 52%)",
        500: "hsl(0, 0%, 98%)",
        600: "hsl(0, 0%, 100%)",
        700: "hsl(0, 0%, 77%)",
      },
      white: "#fff",
      black: "#000",
    },
    extend: {},
  },
  plugins: [],
};
