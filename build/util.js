const glob = require('glob');
const path = require('path');

exports.fullPath = function(dir) {
  return path.resolve(__dirname, dir);
};
