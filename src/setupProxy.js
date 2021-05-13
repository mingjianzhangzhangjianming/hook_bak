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
                proxyReq.setHeader('cookie', 'JSESSIONID=3B497A831D569CE15FE1921CA2453EF9;path=/AdminTool;HttpOnly');
            }
        })
    )
}