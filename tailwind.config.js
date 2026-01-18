/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Josefin Sans', 'sans-serif'],
        'serif': ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        'vasanta': {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce5cd',
          300: '#8dd1ab',
          400: '#57b582',
          500: '#339b64',
          600: '#267d4f',
          700: '#1f6441',
          800: '#1b5036',
          900: '#17422d',
        }
      }
    },
  },
  plugins: [],
};
