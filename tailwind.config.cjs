/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'laptop': { 'max': '1536px' },
      // => @media (max-width: 1536px) { ... }

      'tablet': { 'max': '1280px' },
      // => @media (max-width: 1280px) { ... }

      'mobile': { 'max': '768px' },
      // => @media (max-width: 768px) { ... }
    },
    extend: {
      backgroundImage: {
        'loadingGif': "url(./src/assets/loading.gif)",
        'contactBackground': "url('./src/assets/contact-background.png')",
      },
      colors: {
        primary: "#D3B04B",
        navbar: "#1D1D1D",
        content: "#AFAFAF"
      }
    },
  },
  plugins: [],
}
