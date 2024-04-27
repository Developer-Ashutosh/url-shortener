/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        error: "hsl(0, 87%, 67%)",
        main: "hsl(180, 66%, 49%)",
      },
      textColor: {
        primary: "hsl(255, 11%, 22%)",
        secondary: "hsl(257, 7%, 63%)",
        tertiary: "white",
      },
      backgroundColor: {
        body: "#F0F1F6",
        disabled: "hsl(0, 0%, 75%)",
        primary: "hsl(260, 8%, 14%)",
        secondary: "hsl(255, 11%, 22%)",
        tertiary: "hsl(257, 27%, 26%)",
      },
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
    },
  },
  plugins: [],
};
