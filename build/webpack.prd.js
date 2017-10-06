const merge = require('webpack-merge');
// JS压缩混淆
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// CSS 压缩
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	devtool: 'cheap-module-source-map',
	plugins: [
		new UglifyJSPlugin({
			compress: {
				warnings: false
			},
			sourceMap: true
		}),
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
  ]
});
