module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    logs: false,
    themes: [
      {
        light: {
          primary: "#050066",
          secondary: "#238e3f",
          accent: "#FFB09F",
          neutral: "#ffffff",
          "base-100": "#f4f5fa",
          info: "#28AFB0",
          success: "#21A179",
          warning: "#FF8811",
          error: "#d44853",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
