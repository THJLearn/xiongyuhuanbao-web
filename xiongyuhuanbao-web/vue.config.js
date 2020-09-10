const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, 'src'),
      },
    },
  },
  publicPath:'./',//本地打包用，部署线上环境 关闭
  devServer: {
    /* 自动打开浏览器 */
    open: false,
  }
};