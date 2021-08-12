module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      'primary-violet': '#5964E0',
      'primary-light-violet': '#939BF4',
      'primary-very-dark-blue': '#19202D',
      'primary-midnight': '#121721',
      'secondary-white': '#fff',
      'secondary-light-grey': '#f4f6f8',
      'secondary-grey': '#9daec2',
      'secondary-dark-grey': '#6e8098',
    },
    fontFamily: {
      kumbh: ['Kumbh Sans', 'sans-serif'],
    },
    fontSize: {
      h1: ['28px', '34px'],
      h2: ['24px', '29px'],
      h3: ['20px', '24px'],
      h4: ['14px', '18px'],
      body: ['16px', '26px'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
