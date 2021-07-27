const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    // api 表示代理路径
    // target 表示目标服务器的地址
    app.use(
        proxy(
            '/api', {
                target: 'http://localhost:5000/',
                /*
                changeOrigin设置为true时，服务器收到的请求头中的host为: localhost: 5000
                changeOrigin设置为false时，服务器收到的请求头中的host为: localhost: 3000
                changeOrigin默认值为false,但我们一般将changeOrigin值设为true
                */
                changeOrigin: true, //控制服务器接收到的请求头中的host字段
                // 重写接口路由
                pathRewrite: {
                    '^/api': '' // 这样处理后, 最终得到的接口路径为: 
                }
            }
        )
    );
};