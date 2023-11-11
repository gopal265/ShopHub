/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
         color1: '#f8d4bd',
         color2:"#f8f6f2",
         color3 :"#fa8907",
         color4: "#f1d6c4",
         color5:"#0f4e8c",
         color6:"#aaa198",
         color7:"#f1d6c4",
         color8:"fe7c55"
    },
    
    backgroundImage:{
      card: 'radial-gradient(#dfa57f 8%, transparent 0)',
    },
    boxShadow:{
      shadow1:"inset 0 0 5rem 2rem #fff;",
      shadow2 : "inset 0 0 1rem 0.5rem #fff;",
      shadow3:"0 0 1rem 0.1rem rgba(0,0,0,.3)",
      shadow4 :"inset 0 0 1rem 0.5rem #fff"
    },
    backgroundSize:{
      size1 : "1.8rem 1.8rem",
    },
    fontWeight:{
      weight1 : 550
    }
  },
  plugins: [],
}
}

