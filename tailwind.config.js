/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#c00000',
        secondary: '#493968',
      },
      boxShadow: {
        '3xl': '1px 1px 8px 6px rgba(0, 0, 0, 0.05)',
        '2sm': '0 0 3px 4px rgba(0, 0, 0, 0.05)',
        'heavy' : '0px 0px 10px 5px rgba(0,0,0,0.3);',
        '4xl': '3px 3px 13px black;',
        '5xl': '0px 17px 50px -17px rgba(0,0,0,0.6);',
      }
    },
  },
  plugins: [],
}
