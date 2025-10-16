/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['IBM Plex Sans Arabic', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          blue: '#2563EB',
          orange: '#F59E0B',
          gray: '#6B7280'
        }
      }
    },
  },
  plugins: [],
}
