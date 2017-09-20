const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // webpack-dev-middleware 使用
    publicPath: '/'
  },
  // 开启 source map
  devtool: 'inline-source-map',
  /**
   * 告诉开发服务器(dev server)，在哪里查找文件
   * 告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
   */
  // devServer: {
  //   contentBase: './dist'
  // },
  // 插件配置
  plugins: [
    // 清理文件
    new CleanWebpackPlugin(['dist']),
    // 定制输出模板
    new HtmlWebpackPlugin({
      title: 'Output Manager'
    })
  ]
};
