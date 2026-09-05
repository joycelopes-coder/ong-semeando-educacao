module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#227c38',
          hover: '#1b632d',
        },
        secondary: {
          DEFAULT: '#f48c06',
          hover: '#d97a05',
        },
        tertiary: {
          DEFAULT: '#594236',
          hover: '#4a362e',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    }
  },
}
