import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '320px',
      //=> @media (min-width: 360px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1200px',
      // => @media (min-width: 820px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      gray: '#E4E4E4',
      gray2: '#C0C0C0',
      purple: '#8E6AF8',
      purple2: '##9363FD',
      cardBgGray: 'rgba(255, 255, 255, 0.10)',
      purpleBg:
        'linear-gradient(90deg, rgba(19, 19, 19, 0.00) -0.53%, #9266FC 99.98%)',
    },
  },
  plugins: [],
}
export default config
