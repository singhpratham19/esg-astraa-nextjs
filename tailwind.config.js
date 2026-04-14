/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   '#2E8AEA',
          purple: '#7516EA',
          navy:   '#0D1B3E',
          light:  '#EEF5FF',
        },
        slate: { body: '#4A5568', border: '#E2E8F0', bg: '#F8F9FC' },
        base: '#0D1B3E',
        violet: { DEFAULT: '#2E8AEA', light: '#5BA8EF', dark: '#1A6DC4' },
        coral:  { DEFAULT: '#7516EA', light: '#9B30FF', dark: '#5A0FBB' },
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
