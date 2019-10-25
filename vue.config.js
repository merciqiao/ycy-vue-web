// vue.config.js
module.exports = {
    publicPath:'/',
    // 选项...
    devServer: {
        port: 9000, //端口
        proxy: {    //代理
            '/api': {
                target: 'http://101ycy.com:10001',
                pathRewrite: { '^/api': '' }
            }
        }
    },
    /* 让bable去解析转换这些插件，兼容性处理 */
    transpileDependencies: ['vuex-persist']

}