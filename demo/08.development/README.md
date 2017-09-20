## 开发

### 使用 source map

为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。

```js
const config = {
   // 开启 source map
  devtool: 'inline-source-map',
}
```

### 开发工具

* webpack --watch
* webpack-dev-server
* webpack-dev-middleware

#### webpack --watch

`webpack --watch` 使用非常简单，能够监听文件的变化，当文件发生改变后，`webpack` 会重新编译。但唯一的缺点是，为了看到修改后的实际效果，你需要刷新浏览器。

#### webpack-dev-server

```js
npm install --save-dev webpack-dev-server
```

```js
const config = {
  /**
    * 告诉开发服务器(dev server)，在哪里查找文件
    * 告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
    */
  devServer: {
    contentBase: './dist'
  }
}
```
能够实现代码修改，webpack 自动编译且浏览器`能够自动刷新`。

#### hot-module-replacement

```js
npm install --save-dev express webpack-dev-middleware
```

* webpack.config.js 指定 publicPath
* server.js

能够实现代码修改，webpack 自动编译但浏览器`不会能够自动刷新`。

### 参考文献

[https://doc.webpack-china.org/guides/development](https://doc.webpack-china.org/guides/development)
