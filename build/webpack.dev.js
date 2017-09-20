const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const config = require('./config.js');

const DIST_DIR = config.DIST_DIR;

module.exports = merge(common, {
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST_DIR
  }
});
