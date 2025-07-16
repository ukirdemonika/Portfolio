/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //1.Custom fonts
      fontFamily: {
        'agustina': ['Agustina Regular', 'cursive'],
         'google-sans': ['Google Sans Regular', 'sans-serif']
      },
      screens: {
        'lg-desktop': '1380px', 
      }
      
  },
 
  plugins: [],
}
}

