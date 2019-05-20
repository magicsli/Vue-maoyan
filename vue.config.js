/*
    webpack 配置
*/
var path = require('path')


module.exports = {
    // 路径别名 

    chainWebpack: function(config) {
        config.resolve.alias
            .set('Css', path.resolve(__dirname, 'src/assets/css'))
            .set('Components', path.resolve(__dirname, 'src/components'))
            .set('Pages', path.resolve(__dirname, 'src/pages'))
            .set('Utils', path.resolve(__dirname, 'src/utils'))
            .set('Store', path.resolve(__dirname, 'src/store'))
            .set('Filters', path.resolve(__dirname, 'src/filters'))
          
        
    }
}
