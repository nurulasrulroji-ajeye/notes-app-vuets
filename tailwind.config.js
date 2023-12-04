/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#45474B',
        'light-primary': '#F5F7F8',
      },
      fontFamily: {
        'be-viet': ['Be Vietnam Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
