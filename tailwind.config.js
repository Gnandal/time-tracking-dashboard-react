const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'bg-work',
    'bg-play',
    'bg-study',
    'bg-exercise',
    'bg-self-care',
    'bg-social',
  ],
  theme: {
    extend: {
      colors: {
        transparent: colors.transparent,
        blue: 'hsl(246, 80%, 60%)',
        'very-dark-blue': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)',
        work: 'hsl(15, 100%, 70%)',
        play: 'hsl(195, 74%, 62%)',
        study: 'hsl(348, 100%, 68%)',
        exercise: 'hsl(145, 58%, 55%)',
        social: 'hsl(264, 64%, 52%)',
        'self-care': 'hsl(43, 84%, 65%)',   
      }
    },
  },
  plugins: [],
}

