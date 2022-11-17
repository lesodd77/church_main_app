// @ts-nocheck
/* eslint-disable no-dupe-keys */
module.exports = {
  content: ['./ui/**/*.{js,jsx,ts,tsx}', './client/*.html'],
  darkMode: 'class',
  theme: {
    animation: {
      slide: 'slide 10s infinite both',
      marquee: 'marquee 1s linear infinite',
    },
    keyframes: {
      slide: {
        '0%': {
          transform: 'translateX(100%) scale(0.75)',
          zIndex: '0',
        },
        '25%': {
          transform: 'translateX(50%) scale(0.9)',
          zIndex: '10',
        },
        '50%': {
          transform: 'translateX(0%) scale(1)',
          zIndex: '20',
        },
        '75%': {
          transform: 'translateX(-50%) scale(0.9)',
          zIndex: '10',
        },
        '100%': {
          transform: 'translateX(-100%) scale(0.75)',
          zIndex: '0',
        },
      },
      marquee: {
        '0%': {
          transform: 'translateX(120%)',
        },
        '100%': {
          transform: 'translateX(-120%)',
        },
      },
    },
    screens: {
      sm: '400px',
      // => @media (min-width: 576px) { ... }

      md: '760px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px',
    },
    lineClamp: {
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    },
    safelist: [
      '-mx-1.5',
      '-my-1.5',
      'appearance-none',
      'bg-green-100',
      'bg-green-50',
      'bg-cyan-600',
      'bg-red-50',
      'bg-white',
      'block',
      'border',
      'border-gray-300',
      'border-transparent',
      'cursor-pointer',
      'flex',
      'focus:border-cyan-500',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-cyan-500',
      'focus:ring-offset-2',
      'focus:ring-offset-red-50',
      'focus:ring-red-600',
      'font-medium',
      'hover:bg-cyan-700',
      'hover:bg-red-100',
      'hover:text-cyan-500',
      'inline-flex',
      'justify-center',
      'justify-end',
      'ml-auto',
      'mt-0',
      'mt-1',
      'mt-8',
      'p-1.5',
      'p-4',
      'pl-3',
      'placeholder-gray-400',
      'px-3',
      'px-4',
      'py-2',
      'py-8',
      'ring-green-600',
      'ring-offset-green-50',
      'rounded-md',
      'shadow',
      'shadow-sm',
      'sm:max-w-md',
      'sm:mx-auto',
      'sm:px-10',
      'sm:rounded-lg',
      'sm:text-sm',
      'sm:w-full',
      'space-y-6',
      'sr-only',
      'text-gray-700',
      'text-green-500',
      'text-green-800',
      'text-cyan-600',
      'text-red-500',
      'text-red-800',
      'text-sm',
      'text-white',
      'w-full',
    ],
    extend: {
      colors: {
        white: '#FFFFFF',
        primary: '#182f3f',
        primary_2: '#182d2d',
        secondary: '#1d3333',
        tertiaryOne: '#eb8338',
        tertiaryTwo: '#abb8c3',
        tertiaryThree: '#cdbda1',
        danger: '#FF0000',
      },
      corePlugins: {
        aspectRatio: false,
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
      boxShadow: {
        sm: '0 2px 4px -0px rgba(11, .10, .55, 0.15)',
        lg: '0 8px 20px -0px rgba(18, .16, .99, 0.6)',
      },

      fontFamily: {
        satoshi: 'Satoshi, sans-serif',
        inter: 'Inter, sans-serif',
      },

      variants: {
        lineClamp: ['responsive', 'hover'],
      },
      extend: {
        borderRadius: {
          '4xl': '2rem',
        },
        maxWidth: {
          '2xl': '40rem',
        },
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
  plugins: [require('@tailwindcss/typography')],
  plugins: [require('@tailwindcss/line-clamp')],
  plugins: [require('@tailwindcss/aspect-ratio')],
  plugins: [require('tailwind-scrollbar-hide')],
};
