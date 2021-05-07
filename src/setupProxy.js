const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
        createProxyMiddleware("/api", { 
            target: "http://10.0.19.225:8080/AdminTool",
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            },
            cookieDomainRewrite: "localhost",
            onProxyReq(proxyReq, req, res) {
                proxyReq.setHeader('cookie', 'JSESSIONID=88946FF4C532EBA896BB4801EF470CDA;path=/;HttpOnly');
            }
        })
    )
}