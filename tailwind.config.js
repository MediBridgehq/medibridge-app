/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-dark": "#1D4ED8",
        "primary-light": "#DBEAFE",
        surface: "#F8FAFC",
        border: "#E2E8F0",
        muted: "#64748B",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["System"],
      },
    },
  },
  plugins: [],
};
