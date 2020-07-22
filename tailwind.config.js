// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./gatsby-ssr.js', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    // A nice default centered .container with a little padding
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '3rem',
      },
      aspectRatio: {
        none: 0,
        square: [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '21/9': [21, 9],
      },
    },
    // You'll probably use a font family for titles, and another for body text
    fontFamily: {
      display: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      //   body: ['Georgia', 'serif'],
    },
    // Add `top-100` and similar classes for absolute-positioned elements
    inset: {
      '0': 0,
      auto: 'auto',
      '100': '100%',
    },
    extend: {
      // Prettier box shadows: https://box-shadows.co/
      boxShadow: {
        'bs-1': '0px 1px 0px rgba(17,17,26,0.1)',
        'bs-2':
          '0px 1px 0px rgba(17,17,26,0.05), 0px 0px 8px rgba(17,17,26,0.1);',
        'bs-3': '0px 0px 16px rgba(17,17,26,0.1)',
        'bs-4':
          '0px 4px 16px rgba(17,17,26,0.05), 0px 8px 32px rgba(17,17,26,0.05)',
        'bs-5':
          '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 32px rgba(17,17,26,0.05)',
        'bs-6':
          '0px 1px 0px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 48px rgba(17,17,26,0.1)',
        'bs-7':
          '0px 4px 16px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1)',
        'bs-8':
          '0px 8px 24px rgba(17,17,26,0.1), 0px 16px 56px rgba(17,17,26,0.1), 0px 24px 80px rgba(17,17,26,0.1)',
      },
      // You'll probably have a primary and secondary color
      colors: {
        primary: '#5D9D0E',
        secondary: '#A1C45B',
        orange: {
          light: '#F89721',
          default: '#E56B07',
          dark: '#B66008',
        },
        black: '#4A3E2E',
        brown: {
          light: '#A48774',
          default: '#6C4E32',
        },
        beige: '#F3E8D9',
        // Overwrite default grays with a neutral shade (defaults are blue-ish)
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
      },
      // We all need that container that is almost-but-not-quite full height
      height: {
        'almost-screen': '80vh',
      },
      minHeight: {
        'almost-screen': '80vh',
      },
      // Utilities to lock an image or video to a fixed aspect ratio
      // (https://github.com/tailwindcss/designing-with-tailwindcss/tree/master/02-designing-an-image-card/06-locking-images-to-a-fixed-aspect-ratio)
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '9/16': '56.25%',
        '10/16': '62.5%',
      },
      // https://twitter.com/mjsarfatti/status/1263432797039067136
      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.25,0.02,0,1)',
      },
    },
  },
  variants: {
    // In case you need to reset the margin on the last element "mr-2 last:mr-0"
    margin: ['responsive', 'last'],
    aspectRatio: ['responsive'],
  },
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('tailwindcss-responsive-embed'),
    require('tailwindcss-aspect-ratio'),
  ],
};
