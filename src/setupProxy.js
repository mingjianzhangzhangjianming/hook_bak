const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
        createProxyMiddleware("/api", { 
            target: "http://10.0.19.225:8080/AdminTool",
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
            // cookieDomainRewrite:{
            //     '*':'localhost' // 把相应的 cookie 域都设置成 localhost，或者指定的域名
            // }
        })
    )
}