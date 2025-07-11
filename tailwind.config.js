/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2c5282",
        secondary: "#e53e3e",
        accent: "#38a169",
      },
    },
  },
  plugins: [],
};
