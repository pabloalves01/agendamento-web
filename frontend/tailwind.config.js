module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Removi o purge duplicado
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        vermelho: "#EC5656",
        cinza: "#202020",
      },
      // Configuração do container adicionada aqui
      container: {
        center: true,
        padding: "1rem", // Ajuste o padding conforme necessário
        screens: {
          sm: "640px", // Define o tamanho máximo para telas pequenas, se necessário
          md: "768px", // Define o tamanho máximo para telas médias, se necessário
          lg: "1200px", // Aqui é onde definimos o tamanho máximo de 1200px para telas grandes
          xl: "1200px", // Mantém o tamanho máximo de 1200px para telas extra grandes
          "2xl": "1200px", // Mantém o tamanho máximo de 1200px para telas 2xl
        },
      },
    },
  },
  variants: {
    extend: {
      // Suas extensões de variantes aqui
    },
  },
  plugins: [],
};
