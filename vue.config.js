// vue-cli配置文件


module.exports = {
    // router里面的"base: process.env.BASE_URL"，这个在 vue.config.js 里面有对应的 publicPath option ，同时是你的应用部署的基本路径
    // publicPath: '/dakhaan/',
    publicPath: process.env.NODE_ENV === 'production' ? '/dakhaan/' : '/',
    devServer: {
        proxy: {
            "/api": {
                target: 'http://furniture.idopin.com',
                // target: 'http://local.furniture.com',
                // target:'https://dakhaan.com',
            },
        }
    }
}