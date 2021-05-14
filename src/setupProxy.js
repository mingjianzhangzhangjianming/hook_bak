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
                proxyReq.setHeader('cookie', 'JSESSIONID=35F1C0C216C9A7607665086B25A37172;path=/AdminTool;HttpOnly');
            }
        })
    )
}