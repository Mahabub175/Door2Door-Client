/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        normal: 400,
        semibold: 700,
      },
      colors: {
        primary: "var(--primaryColor)",
        secondary: "#2563EB",
        pdf: "#F87171",
        excel: "#22C55E",
        light: "#EFF6FF",
        textColor: "#71717A",
      },
      screens: {
        sm: "580px",
        md: "600px",
        lg: "980px",
        xl: "1280px",
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
