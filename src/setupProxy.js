const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', { // 代理名称
    target: " https://www.easy-mock.com/mock/5fa8e38646fe9a0d32af2b73/api", // 这里是代理地址
    changeOrigin: true,
    pathRewrite: {'^/api': ''} // 路径重写
  }))
}
