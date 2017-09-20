## 模块热替换

模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。它允许在运行时更新各种模块，而无需进行完全刷新。

**HMR 不适用于生产环境，这意味着它应当只在开发环境使用**

### 启用 HMR

启用此功能实际上相当简单，而我们要做的，就是更新 `webpack-dev-server` 的配置，和使用 webpack 内置的 HMR 插件。

```js
module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // HMR
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    // HMR
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
### 参考文献

[https://doc.webpack-china.org/guides/hot-module-replacement](https://doc.webpack-china.org/guides/hot-module-replacement)
