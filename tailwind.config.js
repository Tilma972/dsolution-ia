/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-cta': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(23, 249, 255, 0.5)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 25px rgba(23, 249, 255, 0.7), 0 0 35px rgba(11, 99, 225, 0.3)',
            transform: 'scale(1.03)',
          },
        },
      },
      animation: {
        'pulse-cta': 'pulse-cta 2.5s infinite',
      },
      colors: {
        primary: '#17F9FF',
        secondary: '#0B63E1',
        accent: '#FF4040',
        'dark-bg': '#000b21',
        'card-bg': '#111111',
        'subtle-text': '#C0E7FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
