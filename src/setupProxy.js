const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
   app.use(
      '/arm-screen/api/',
      createProxyMiddleware({
         target: 'http://192.168.4.45:5005',
         changeOrigin: true,
         pathRewrite: {
            '^/arm-screen/api/': '/api/',
         },
      })
   );
};