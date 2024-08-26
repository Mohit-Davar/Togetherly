/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-sarif"],
        Poppins: ["Poppins", "sans-sarif"],
        archivoBlack: ["Archivo Black", "sans-sarif"],
        alfaSlabOne: ["Alfa Slab One", "sans-sarif"],
      },
      colors:{
        themeOne:"#21d4fd",
        themeTwo:"#b721ff",
        themeThree:"#1eae98",
        themeFour:"white"
      },
      boxShadow:{
        form:"5px 5px 15px 0px rgba(0,0,0,0.5)",
      }
    },
  },
  plugins: [],
}