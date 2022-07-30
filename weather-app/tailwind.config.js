/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-primary": "#fafafa",
        "text-primary": "#1d242e",
        "secondary": "#ec764f",
        "tertiary": "#53aba8"

      },
      fontFamily: {
        sans: ['Inter', "sans-serif"]
      },
    },
    plugins: [],
  }
}
