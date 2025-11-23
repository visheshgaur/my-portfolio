// /** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '350px',
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        titleColor: '#333333',
        titleColorDark: '#000000',
        textColor: '#757575',
        bodyColor: '#FAFAFA',
        containerColor: '#FFFFFF',

        titleColorDarkMode: '#CECECE',
        titleColorDarkDarkMode: '#FFFFFF',
        textColorDarkMode: '#E8E8E8',
        bodyColorDarkMode: '#262626',
        containerColorDarkMode: '#1a1a1a',

        // Brand colors for your Resume button
        primaryColor: '#6366F1', // Indigo
        secondaryColor: '#EC4899', // Pink
      },
      fontSize: {
        big: '2.75rem',
        h1: '2.25rem',
        h2: '1.8rem',
        h3: '1.2rem',
        normal: '1rem',
        small: '0.875rem',
        smaller: '0.813rem',
        tiny: '0.625rem',
        'res-big': '2rem',
        'res-h1': '1.5rem',
        'res-h2': '1.25rem',
        'res-h3': '1rem',
        'res-normal': '0.938rem',
        'res-small': '0.813rem',
        'res-smaller': '0.75rem',
      },
      gridTemplateColumns: {
        'hero': '100px repeat(2, 1fr)',
        'res-hero': '100px repeat(1, 1fr)'
      },
      boxShadow: {
        'profile-shadow': 'inset 0 0 0 9px rgba(255, 255, 255 , .3)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },

      // 🔥 New animation for your button's moving gradient
      keyframes: {
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradient-move 4s ease infinite',
      }
    },
  },
  plugins: [],
}
