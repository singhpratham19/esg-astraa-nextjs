/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        kpmg: {
          navy:    '#00338D',
          blue:    '#0091DA',
          purple:  '#470A68',
          green:   '#00A3A1',
          sky:     '#E8F4FD',
          ink:     '#1A1A2E',
        },
        slate: { body: '#4A5568', border: '#DDE3ED', bg: '#F5F7FA' },
        base: '#1A1A2E',
        violet: { DEFAULT: '#00338D', light: '#0091DA', dark: '#002266' },
        coral:  { DEFAULT: '#0091DA', light: '#33A8E3', dark: '#0073B1' },
      },
      fontFamily: {
        display: ['"Open Sans"', 'sans-serif'],
        body:    ['"Open Sans"', 'sans-serif'],
      },
      maxWidth: { site: '1280px' },
      spacing: { section: '96px', paragraph: '40px' },
    },
  },
  plugins: [],
}
