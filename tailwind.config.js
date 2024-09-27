/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Righteous: ["Righteous", "system-ui"],
      JetBrains_Mono: ["JetBrains Mono", "system-ui"],
    },
    colors: {
      Pure_White: "#ffffff",
      Dark_Gray: "#666666",
      Light_Gray: "#919191",
      Light_Gray_2: "#7F7F7F",
      Light_Gray_3: "#808080",
      Charcoal_Black: "#0F0F0F",
    },

    extend: {
      backgroundImage: {},
      boxShadow: {},
      keyframes: {},
      animation: {},
    },
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
