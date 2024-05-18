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
      colors: {
        geyser: {
          50: '#f5f8fa',
          100: '#ebeff3',
          200: '#cbd7e0',
          300: '#abc0ce',
          400: '#7e9eb2',
          500: '#5e8299',
          600: '#4a687f',
          700: '#3d5467',
          800: '#354857',
          900: '#303e4a',
          950: '#202931',
        },
      }
    },
  },
  plugins: [],
}

