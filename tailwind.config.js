/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {

  },
  variants: {
    extend: {
      borderRadius: ['hover'],
      opacity: ['disabled'],
    }
  },
  plugins: [],
}
