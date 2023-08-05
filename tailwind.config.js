module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./component/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        active: '#419EBB',
        hover: '#38384F',
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
};
