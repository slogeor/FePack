const webpack = require('webpack');
// 自动补全css3前缀
const autoprefixer = require('autoprefixer');
// 清除目录文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 提取公共 CSS
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 工具方法
const utils = require('./util');

// 常量
const config = require('./config.js');
// 入口文件配置
const entry = require('../entry.config.js');
// 模板配置
const htmlPluginConfig = require('../html.config');

// dist 路径
const DIST_PATH = config.DIST_PATH;
// src 路径
const SRC_PATH = config.SRC_PATH;
// scripts 路径
const SCRIPTS_PATH = config.SCRIPTS_PATH;
// styles 路径
const STYLES_PATH = config.STYLES_PATH;

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
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        // 删除内容
        // new CleanWebpackPlugin([DIST_PATH],  {
        //     // dist is outside of the project root. Skipping...
        //     allowExternal: true,
        // }),
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
    },
    // 额外的配置参数
    extendConfig: {
        htmlPliugins: utils.generateHtmlPlugin(htmlPluginConfig.config),
    },
};

module.exports = webpackConfig;
