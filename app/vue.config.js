
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  devServer: {
    hot: true,
    host: 'localhost',
    port: 5840,
    open: false,
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            tailwindcss(),
            autoprefixer()
          ]
        }
      }
    }
  }
}
