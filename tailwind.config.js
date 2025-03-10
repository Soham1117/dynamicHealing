/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@rewind-ui/core/dist/theme/styles/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        upAndDown: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "50%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        shine: "shine 1s linear infinite",
        upAndDown: "upAndDown 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
