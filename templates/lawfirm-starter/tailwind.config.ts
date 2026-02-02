import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f9',
          100: '#dae1ef',
          200: '#b8c7e0',
          300: '#8da5cc',
          400: '#6280b4',
          500: '#47639a',
          600: '#3a5082',
          700: '#32426a',
          800: '#2c3a58',
          900: '#1a2332',
          950: '#0f1520',
        },
        gold: {
          50: '#fdfaed',
          100: '#f9f0cc',
          200: '#f3de94',
          300: '#ecc95c',
          400: '#e6b635',
          500: '#d69b1e',
          600: '#ba7717',
          700: '#9a5616',
          800: '#7f4419',
          900: '#693818',
          950: '#3c1c09',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#262626',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
