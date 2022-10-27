/** @type {import("tailwindcss").Config} */

module.exports = {
  content: [
    "./client/index.css",
    "./client/index.html",
    "./client/index.tsx",
    "./client/**/*.{css,js,jsx,ts,tsx,html}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Merriweather Sans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        "Merriweather",
        "ui-serif",
        "Georgia",
        "Cambria",
        '"Times New Roman"',
        "Times",
        "serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {},
  },
  plugins: [],
}
