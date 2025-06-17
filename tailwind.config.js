/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D3B36",
        secondary: "#EFF5E1",
        accent: "#FEFFF4",
      },
    },
  },
  plugins: [],
}
