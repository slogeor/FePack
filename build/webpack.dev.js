//  wepack config merge
const merge = require('webpack-merge');
// 通用的配置
const common = require('./webpack.common.js');
// 配置文件
const constant = require('./constant.js');

const webpackConfig = merge(common, {
	devtool: 'cheap-module-eval-source-map',
	devServer:{
		contentBase: constant.SRC_PATH,
		inline: true,
		hot:true,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:8080/json',
				pathRewrite: {
					'^/api' : ''
				},
				changeOrigin: true
			}
		}
	}
});

module.exports = webpackConfig;
