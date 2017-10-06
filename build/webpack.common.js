const webpack = require('webpack');
// 自动补全css3前缀
const autoprefixer = require('autoprefixer');
// 清除目录文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 提取公共 CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// HTML 插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 工具方法
const utils = require('./util');
// 常量
const constant = require('./constant.js');
// 入口文件配置
const entry = require('../entry.config.js');
// 模板配置
const htmlPluginConfig = require('../html.config');

// dist 路径
const DIST_PATH = constant.DIST_PATH;
// src 路径
const SRC_PATH = constant.SRC_PATH;
// scripts 路径
const SCRIPTS_PATH = constant.SCRIPTS_PATH;
// styles 路径
const STYLES_PATH = constant.STYLES_PATH;

// HTML配置对象
const htmlPliugins = utils.generateHtmlPlugin(htmlPluginConfig.config);

const webpackConfig = {
  // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    context: SRC_PATH,
    entry: entry.config,
    output: {
        filename: utils.getFileName(),
        path: DIST_PATH,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                /**
                * @desc 解析 Sass 文件
                * @example
                * // index.js
                * import './style.scss';
                * <header class="header">hello <span class="h3">webpack</span></header>
                *
                * // style.scss
                * .header {
                *      font-size: 30px;
                *      color: #f00;
                *      .h3 {
                *          font-size: 24px;
                *          color: #000;
                *      }
                *  }
                */
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        }
                    },{
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },{
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }]
                })
            },
            {
                /**
                * @desc 解析 css 文件
                * @param modules: true，启用 CSS 模块， JS 引用需要动态引用
                * @param localIdentName: 生成的 ClassName
                * @param camelCase: true，以驼峰化式命名导出类名，需要配合modules参数使用
                */
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        camelCase: true,
                        sourceMap: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader'
                }]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|build)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        // 删除内容
        new CleanWebpackPlugin([DIST_PATH],  {
            // dist is outside of the project root. Skipping...
            allowExternal: true,
        }),
        // 抽取公共的css
        new ExtractTextPlugin(utils.getExtractCSSName()),
        // 抽取公共的JS
        new webpack.optimize.CommonsChunkPlugin({
            names: ['manifest', 'vendor'].reverse(),
            minChunks: Infinity
        }),
        // 对模块路径进行 MD5 摘要
        new webpack.HashedModuleIdsPlugin()
    ],
    resolve: {
        alias: {
            SCRIPTS: SCRIPTS_PATH,
            STYLES: STYLES_PATH,
        }
    }
};

// HTML 模板
htmlPliugins.forEach(function (htmlConfig) {
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

	webpackConfig.plugins.push(new HtmlWebpackPlugin(utils.getHtmlPlugin(htmlConfig)));
});


module.exports = webpackConfig;
