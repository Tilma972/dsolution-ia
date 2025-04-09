import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17F9FF',
        secondary: '#0B63E1',
        accent: '#FF4040',
        'dark-bg': '#0A0A0A',
        'card-bg': '#111111',
        'subtle-text': '#C0E7FF',
      },
    },
  },
  plugins: [],
};

export default config;
