/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#06101f',
        cobalt: '#0032ca',
        'cobalt-soft': '#2b63ff',
        cloud: '#f4f7ff',
        steel: '#9da9c4',
        line: '#d7dff4',
      },
      boxShadow: {
        panel: '0 24px 80px rgba(6, 16, 31, 0.18)',
        glow: '0 18px 70px rgba(0, 50, 202, 0.22)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-shell':
          'linear-gradient(rgba(0, 50, 202, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 50, 202, 0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
