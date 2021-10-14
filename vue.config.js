//vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'FTL: Прямая машина'
      return args
    })
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/test__dot-dot.ru/' : '/',
}
