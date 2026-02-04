module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-url': {
      url: 'copy',            // CSS içindeki url() kaynaklarını kopyala
      assetsPath: '../fonts', // CSS çıktısı: dist/css/ -> ../fonts = dist/fonts
      useHash: false,         // istersen true yapıp cache-busting kullanabilirsin
    },
    autoprefixer: {},
  },
};
