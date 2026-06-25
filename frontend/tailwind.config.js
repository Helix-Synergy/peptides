// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme primary
        'peptides-dark': '#0f2920',
        'peptides-dark-light': '#254438ff',
        'peptides-dark-lighter': '#e6e6e6ff',

        // Text colors
        'peptides-text-light': '#ffffff',
        'peptides-text-muted': '#d9d9d9',
        'peptides-color-brown': '#714819',


        // Buttons
        'btn-primary': '#0f2920',
        'btn-primary-hover': '#1f3b30',
        'btn-outline': '#0f2920',
        'btn-outline-hover': '#3a4a3f',

        // Gradient colors
        'gradient-start': '#0f2920',
        'gradient-end': '#3a4a3f',
        amber: {
          500: "#ad9554", // now you can use bg-amber-500 with this hex
          600: "#9e8653ff"
        },
        // Optional warm tones
        'amber-light': '#d6a95d',
        'amber-dark': '#b2874b',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      scrollMargin: {
        'navbar': '96px',
      },
      backgroundImage: {
        'gradient-br-dark': 'linear-gradient(to bottom right, #0f2920, #3a4a3f)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      }
    },
  },
  plugins: [],
};
