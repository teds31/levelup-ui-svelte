function withOpacity(variableName) {
  return ({opacityValue}) => {
     if(opacityValue != undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    } 
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  mode: 'jit', 
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          primary: withOpacity('--color--brand-primary'),
          dark:  withOpacity('--color--brand-dark'),
          light: withOpacity('--color--brand-light'),
          softBlack: withOpacity('--color--soft-black'),
          softerBlack: withOpacity('--color--softer-black'),
          softestBlack: withOpacity('--color--softest-black'),
          lightGray: withOpacity('--color--light-gray'),
          mediumGray: withOpacity('--color--medium-gray'),
          darkGray: withOpacity('--color--dark-gray'),
          success: withOpacity('--color--success'),
          caution: withOpacity('--color--caution'),
          warning: withOpacity('--color--warning'),
          alert: withOpacity('--color--alert'),
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
