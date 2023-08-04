/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: '#eceff7',
          100: '#abb2db',
          200: '#4c4b6e',
          300: '#0d093e',
        },
      }
    },
  },
  plugins: [],
}

