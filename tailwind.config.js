/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        negr_rang: "#151515",
        gish_rang: "#FF8C42",
        chochqa_rang: "#FFDDC8",
        qaymoq_rang: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
