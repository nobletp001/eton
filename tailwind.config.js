/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./component/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  
    extend: {
      fontSize:{
      f64:'64px',
      f50:'50px',
      f20:"20px",
      f18:'18px',
      f10:'10px',
      f16:'16px',
      f36:'36px',
      f40:'40px',
      f22:'22px',
      f15:'15px',
      f75:'75px',
      f32:'32px',
      f25:'25px',
      f17:'17px',
      f21:'21px',
      f30:'30px',
      f24:'24px',
      f18:'18px'


        },
        fontFamily:{
          fdm :'DM Sans',
          fInter: 'Inter',
        },
        colors:{
         A:" #949494",
         textGreen:'#01EAD4',
         B:'#C8CAFF',
         textP:'#B08BFF',
         textA:' #C8CAFF',
         textC:'#03EED8',
         textD:'#B08BFF'
        }
    },
  },
  plugins: [],
}
