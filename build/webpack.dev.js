//  wepack config merge
const merge = require('webpack-merge');
// 通用的配置
const common = require('./webpack.common.js');
// 常量
const constant = require('./constant.js');
// 配置文件
const config = require('./config.js');

const webpackConfig = merge(common, {
	devtool: 'cheap-module-eval-source-map',
	devServer:{
		contentBase: constant.SRC_PATH,
		inline: true,
		hot:true,
		proxy: {
			'/api': {
				target: config.apiHost + '/json',
				pathRewrite: {
					'^/api' : ''
				},
				changeOrigin: true
			}
		}
	}
});

module.exports = webpackConfig;
