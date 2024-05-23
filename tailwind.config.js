/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{              
        'smm':'576px',
        "mdm":"992px",
        "lgl":"1200px",
        'xxl':'1440px',
        "max-lgl":{'max':'1200px'},
        "max-sm-tab":{'max':'767px'}
      },
      fontFamily:{
        'gilroy': ['Gilroy', 'sans-serif']
      },
      colors:{
        'dark':'#121212',
        'primary':'#e9d1ca',
        'secondary':{
          100:'#f4f2f2',
          200:'#f8f8f8',
          900:'#183330'
        }
      },
      transitionTimingFunction: {
        'cubic-22': 'cubic-bezier(.22,.61,.36,1)'
      }
    },
  },
  plugins: [],
};
