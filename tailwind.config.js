/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: 'rgba(17, 17, 17, 1)',
        neutral:{
          1: '#222222',
          2: '#2D2D2D',
        },
        primary:{
          orange: '#FEA013',
          orangeHover: '#BA4A0C',
          red: '#D23131',
          orangeMutated: '#69563A',
        },
        texts: {
          normal:'#CBCBCB',
          heading: '#F8F8F8',
          muted: '#999999',
          disabled: '#707070',
        },
        borders: {
          default: '#494949'
        }
      },
      boxShadow: {
        modal: '0px 12px 28px 0px rgba(22, 22, 22, 0.5)',
      },
    }
  },
  plugins: [],
}

