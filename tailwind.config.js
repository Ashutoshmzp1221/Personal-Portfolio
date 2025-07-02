/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      mono: ['Fira Code', 'monospace'],
    },
    colors: {
      vscode: {
        bg: '#1e1e1e',
        tab: '#2d2d2d',
      },
    },
  },
},

  plugins: [],
}