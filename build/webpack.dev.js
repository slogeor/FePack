//  wepack config merge
const merge = require('webpack-merge');
// HTML 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 通用的配置
const common = require('./webpack.common.js');
const config = require('./config.js');

const extendConfig = common.extendConfig;
delete common.extendConfig;

const webpackConfig = merge(common, {
	// devtool: 'inline-source-map',
	devServer:{
		contentBase: config.DIST_DIR,
		inline: true,
		hot:true
	}
});

// HTML 模板
extendConfig.htmlPliugins.forEach(function (htmlConfig) {
	/**
	 * @desc HTML模板插件
	 * @param title: 用来生成页面的 title 元素
	 * @param filename: 输出的 HTML 文件名，默认是 index.html, 也可以直接配置带有子目录
	 * @param template: 模板文件路径，支持加载器，比如 html!./index.html
	 * @param inject: true | 'head' | 'body' | false 注入所有的资源到特定的 template 或者 templateContent 中
	 * @param favicon: 添加特定的 favicon 路径到输出的 HTML 文件中
	 * @param minify: {} | false , 传递 html-minifier 选项给 minify 输出
	 * @param hash: true | false, 如果为 true, 将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件，对于解除 cache 很有用
	 * @param cache: true | false，如果为 true, 这是默认值，仅仅在文件修改之后才会发布文件
	 * @param showErrors: true | false, 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中
 	* @param chunks: 允许只添加某些块 (比如，仅仅 unit test 块)
 	* @param chunksSortMode: 允许控制块在添加到页面之前的排序方式，支持的值：'none' | 'default' | {function}-default:'auto'
	* @param excludeChunks: 允许跳过某些块，(比如，跳过单元测试的块)
	*/
	webpackConfig.plugins.push(new HtmlWebpackPlugin(htmlConfig));
});

module.exports = webpackConfig;
