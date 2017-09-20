## code splitting

代码分离是 webpack 中最引人注目的特性之一。此特性能够把代码分离到不同的 bundle 中，然后可以按需加载或并行加载这些文件。

代码分离可以用于获取更小的 bundle，以及控制资源加载优先级，如果使用合理，会极大影响加载时间。

### 三种常用的代码分离方法

* 入口起点：使用 entry 配置手动地分离代码
* 防止重复：使用 CommonsChunkPlugin 去重和分离 chunk
* 动态导入：通过模块的内联函数调用来分离代码

### 防止重复(prevent duplication)

CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk。

```js
plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    // 指定公共 bundle 的名称
    name: 'common'
  })
]
```

### 其他代码分离插件

* ExtractTextPlugin: 用于将 CSS 从主应用程序中分离
* bundle-loader: 用于分离代码和延迟加载生成的 bundle
* promise-loader: 类似于 bundle-loader ，但是使用的是 promises

### 参考链接

[https://doc.webpack-china.org/guides/code-splitting](https://doc.webpack-china.org/guides/code-splitting)
