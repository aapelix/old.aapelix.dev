/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      animation: {
        float: "float 40s linear infinite"
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)', opacity: '0.25' },
          '90%': { transform: 'translateY(-700px)', opacity: '1' },
          '100%': { transform: 'translateY(-800px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

