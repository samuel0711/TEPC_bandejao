module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "band-red": "#9E1313",
        "band-white":"#F7F7F7",
        "night-red": "#FF4E4E"
      },
      fontFamily: {
        'Bitter': ['"Bitter"', 'serif'],
      },
    },
    container:{
      center: true,
      padding: "1rem",
      screens:{
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024",
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
