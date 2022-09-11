const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./app/ui/**/*.{js,jsx,ts,tsx}', './client/*.html'],
   darkMode: 'class',
   theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      purple: colors.purple,
      silver: colors.silver,
      sky: colors.sky,
      cyan: colors.cyan,
      slate: colors.slate,
      red: colors.red,
      green: colors.green,

    },

      backgroundOpacity: {
         10: '0.1',
         20: '0.2',
         95: '0.95',
        },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      lineClamp: {
        7: '7',
        
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  variants: {
    lineClamp: ['responsive', 'hover']
  },
  plugins: [require('@tailwindcss/forms')],
   plugins: [require('@tailwindcss/typography')],
   plugins: [require('@tailwindcss/line-clamp')],
};
