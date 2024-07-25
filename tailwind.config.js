/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      handwriting: ["Caveat"],
      headline: ["Poppins"]
    },
    extend: {},
  },
  plugins: [],
}

