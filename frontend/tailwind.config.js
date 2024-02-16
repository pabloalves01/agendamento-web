module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        vermelho: "#EC5656",
        cinza: "#202020",
      },
    },
  },
  variants: {
    extend: {
      maxWidth: {
        custom: "100rem",
      },
    },
  },
  plugins: [],
};
