/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      colors: {
        babyGreen: "#F5FCF8",
        forestGreen: "#296346",
        green: "#2F9062",
        investmentGreen: "#9BDEBE",
      },
    },
  },
  plugins: [],
};
