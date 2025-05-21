/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        lighttext: "hsl(200, 15%, 8%)",
        lightbg: "hsl(0,0%,99%)",
        darkbg950: "hsl(207, 26%, 17%)",
        darkbg900: "hsl(209, 23%, 22%)",
        darktext: "hsl(0, 100%, 100%)",
      },
    },
  },
  plugins: [],
};
