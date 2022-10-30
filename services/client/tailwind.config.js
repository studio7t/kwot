/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{css,js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        "kwot-background": "#fafafa",
        "kwot-overlay": "#f1f1f1",
        "kwot-text": "#0a0a0a",
        "kwot-inactive": "#afafaf",
        "kwot-primary": "#2ed13d",
        "kwot-notification": "#d12e63",
      },
      fontFamily: {
        serif: ["Merriweather"],
      },
    },
  },
  plugins: [],
}
