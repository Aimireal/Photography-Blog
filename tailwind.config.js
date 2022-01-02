module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily: {
          'logo': ['"Amatic SC"', 'cursive']
        },
      },
    },
    variants: {
      extend: {
        scrollbar: ['rounded']
      },
    },
    plugins: [
      require('tailwind-scrollbar')
    ],
  }