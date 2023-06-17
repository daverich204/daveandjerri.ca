/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f7',
          100: '#e4ebf2',
          200: '#bfccde',
          300: '#99a9c7',
          400: '#5f6d9e',
          500: '#323875',
          600: '#292e69',
          700: '#1c2057',
          800: '#131647',
          900: '#0a0d36',
          950: '#040521'
        },
        plum: {
          50: '#f6edf7',
          100: '#e9daed',
          200: '#caa9d4',
          300: '#ab7fba',
          400: '#713d87',
          500: '#3d1255',
          600: '#350f4d',
          700: '#290a40',
          800: '#1e0733',
          900: '#140326',
          950: '#0c021a'
        },
        light: {
          accent: '#4B0082',
        },
        dark: {
          accent: '#000080',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
