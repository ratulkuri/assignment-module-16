/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-green': '#20B15A',
        'theme-green-light': '#D7F5DC',
        'theme-orange': '#F55F1D',
        'theme-white': '#F8F9FC',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        avenir: ["var(--font-avenir)"],
        poppin: ["var(--font-poppin)"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // 'sm': "1rem",
        // 'md': "2rem",
        // 'lg': "3rem",
        // 'xl': "4rem",
        // '2xl': "5rem",
      },
    },
    screens: {
      'sm': "380px", // @media (min-width: 380px)
      'md': "768px", // @media (min-width: 768px)
      'lg': "1024px", // @media (min-width: 1024px)
      'xl': "1280px", // @media (min-width: 1280px)
      '2xl': "1536px", // @media (min-width: 1536px)
    }
  },
  plugins: [],
});
