//  wepack config merge
const merge = require('webpack-merge');
// 通用的配置
const common = require('./webpack.common.js');
// 配置文件
const constant = require('./constant.js');

const webpackConfig = merge(common, {
	devtool: 'cheap-module-eval-source-map',
	devServer:{
		contentBase: constant.DIST_DIR,
		inline: true,
		hot:true
	}
});

module.exports = webpackConfig;
