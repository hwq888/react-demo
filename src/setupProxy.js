// 引入方式变为：
const {createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
  // 将原来的proxy改为createProxyMiddleware 
    createProxyMiddleware(
      '/index',
      {
        target: 'https://www.bilibili.com',
        changeOrigin: true
      }
    )
  )
};