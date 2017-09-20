const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  /**
   * 多入口配置
   * @description 应用程序的入口
   */
  entry: {
    home: './src/home/index.js',
    about: './src/about/index.js',
    vendor: ['react'],
  },
   /**
   * 出口配置
   * @description 如何处理归拢在一起的代码
   * @param {string} path - 文件输出后存放的路径
   * @param {string} filename - 最后输出的文件名称
   */
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  //
  /**
   * loader: 文件被添加到依赖图中时，其转化成模块
   * @description webpack 配置 loader 有两个目标
   * @desc 在 webpack 里配置 loader，要定义在 modules.rules 里
   * @param {string} rules.test - 识别出应该被 loader 转换的哪些文件
   * @param {string} rules.use: 转换这些文件，从而使能够添加到对应的依赖图中
   */
  module: {
    rules: [
      {
        // test: /(\.jsx|\.js)$/,
        // use: {
        //     loader: "babel-loader"
        // },
        // exclude: /node_modules/
      },
    ]
  },
  /**
   * 插件
   * @desc loader 仅在每个文件的基础上执行转换，而插件更常用于在打包模块的 compilation 和 chunk 生命周期执行操作和自定义功能
   */
  plugins: [
    /**
     * 允许使用 CommonsChunkPlugin 从应用程序的 bundle 中提取出 vendor 引用 到 vendor bundle
     * 并把引用 vendor 的部分替换成 __webpack_require__() 调用
     * @param {array} name - 数组的 key 对应上面的 entry 的 key
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    })
  ]
};

module.exports = config;
