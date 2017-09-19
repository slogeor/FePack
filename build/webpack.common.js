const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./config.js');
const entry = require('./entry.config.js');

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
  }
};
