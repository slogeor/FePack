const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
	devtool: 'cheap-module-source-map',
	plugins: [
		new UglifyJSPlugin({
			compress: {
				warnings: false
			},
			sourceMap: true
		}),
		// 压缩css
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
  	]
});
