const commonChunks = [ 'vendor', 'manifest'];

const config = {
  css: {
    chunks:['demoCSS'].concat(commonChunks),
    title: 'css页面',
    filename: 'css.html',
  },
  es6: {
    chunks:['demoES6'].concat(commonChunks),
    title: 'es6页面',
    filename: 'es6.html',
  },

};

module.exports = {
  config,
};
