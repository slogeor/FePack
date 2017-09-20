const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.js');
const entry = require('../entry.config.js');

// 产出路径
const DIST_PATH = config.DIST_PATH;
const SRC_PATH = config.SRC_PATH;

module.exports = {
  // 基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    context: SRC_PATH,
    entry: entry.config,
    output: {
        filename: '[name].bundle.js',
        path: DIST_PATH
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
                use: [{
                    // 将 JS 字符串生成为 style 节点
                    loader: "style-loader"
                },{
                    // 将 CSS 转化成 CommonJS 模块
                    loader: "css-loader"
                }, {
                    // 将 Sass 编译成 CSS
                    loader: "sass-loader"
                }]
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
                    loader: 'css-stloader',
                    options: {
                        modules: true,
                        camelCase: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }]
            }
        ]
    }
};
