/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        64: "64px",
      },
      colors: {
        negr_rang: "#151515",
        gish_rang: "#FF8C42",
        chochqa_rang: "#FFDDC8",
        qaymoq_rang: "#F4F4F4",
        jigar_rang: "#7B3000",
      },
    },
  },
  plugins: [],
};
