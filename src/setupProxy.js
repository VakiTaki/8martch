const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      '/api/v1/',
      createProxyMiddleware({
         target: 'http://37.46.134.70:9393/',
         changeOrigin: true,
      })
   );
};