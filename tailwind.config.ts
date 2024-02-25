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
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        handwriting: ['var(--font-sacramento)'],
      }
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
