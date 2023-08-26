/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        right : {
          "0%" : { left : "-100px"},
          "100%" : { left : "1px"}
        },
        left : {
          "0%" : { left : "1px"},
          "100%" : { left : "-100px"}
        },
      },
      animation : {
        right : "right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        left : "left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      }
    },
  },
  plugins: [],
}

