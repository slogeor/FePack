### plugins

插件是 `webpack` 的支柱功能，插件的功能在于解决 `loader` 无法实现的其他事。

#### 用法

由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。

```js
const config = {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    }),

    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
```

### 参考文件

* [https://doc.webpack-china.org/concepts/plugins](https://doc.webpack-china.org/concepts/plugins)
