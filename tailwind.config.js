/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        appear: 'fadeInOut 0.25s ease-in-out 1'
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '75%' },
          '100%': { opacity: '100%' }
        }
      }
    }
  },
  plugins: []
}
