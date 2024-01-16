/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#F7C32A',
      },
      fontFamily: {
        sans: ['Anaheim', 'sans-serif'],
      },
      fontSize: {
        'slide-header': '5rem',
      },
      padding: {
        outer: '12.5%',
      },
    },
  },
  plugins: [],
}
