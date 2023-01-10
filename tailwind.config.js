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
        onyx: "#363946",
        balance: "rgba(155, 222, 190, 0.5)",
        investments: "rgba(155, 222, 190, 0.25)",
        expenses: "rgba(47, 144, 98, 0.5)",
        savings: "rgba(47, 144, 98, 0.75)",
      },
    },
  },
  plugins: [],
};
