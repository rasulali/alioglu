import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandColor: '#292D3A',
        grayA: '#303030',
        grayALight: '#4A4A4A',
        accentColor: '#41372e',
      },
      animation: {
        rotateY: 'rotateY 2s linear infinite',
        rotateYEnds: 'rotateY 2s forwards ',
        appear: 'appear 2s ease-in-out forwards',
        down: 'down 2s linear 3s infinite'
      },
      keyframes: {
        rotateY: {
          from: {
            transform: 'rotateY(0deg)'
          },
          to: {
            transform: 'rotateY(360deg)'
          }
        },
        appear: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        down: {
          '0%': {
            transform: 'translate3d(0px, 0px, 0px)',
            opacity: '0'
          },
          '33%': {
            opacity: '1'
          },
          '66%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translate3d(0px, 30px, 0px)',
            opacity: '0'
          },
        }
      },
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'animate-duration': (value: number) => ({
            animationDuration: value,
          }),
        },
        { values: theme('transitionDuration') }
      )
    }),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-ease': (value) => ({
            animationTimingFunction: value,
          }),
        },
        { values: theme('transitionTimingFunction') }
      )
    }),
  ],
};
export default config;
