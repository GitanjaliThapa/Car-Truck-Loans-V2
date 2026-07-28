/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B1330', light: '#16214A', dark: '#060913' },
        blue: { DEFAULT: '#2F6FED', light: '#5B8DF5', dark: '#1D4ED8' },
        paper: '#F6F7FB',
        ink: '#0F172A',
        slate: '#64748B'
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(11, 19, 48, 0.10)',
        lift: '0 16px 32px -8px rgba(11, 19, 48, 0.20)',
        glow: '0 0 0 1px rgba(47, 111, 237, 0.15), 0 8px 24px -6px rgba(47, 111, 237, 0.35)'
      }
    }
  },
  plugins: []
};
