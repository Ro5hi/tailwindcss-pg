module.exports = {
  purge: [],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        'xsm': '411px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-childrenn')
  ],
}
