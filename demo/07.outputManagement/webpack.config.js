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
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // 清理文件
    new CleanWebpackPlugin(['dist']),
    // 定制输出模板
    new HtmlWebpackPlugin({
      title: 'Output Manager'
    })
  ]
};
