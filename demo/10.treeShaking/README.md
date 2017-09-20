## tree shaking

tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块系统中的静态结构特性，例如 import 和 export。这个术语和概念实际上是兴起于 ES2015 模块打包工具 rollup。

### 精简输出

通过 `import and export` 语法，标识出了那些`未引用代码(dead code)`，但是我们仍然需要从 `bundle` 中删除它们。

要做到这一点，我们将添加一个能够删除未引用代码(dead code)的压缩工具(minifier): UglifyJSPlugin

```js
npm i --save-dev uglifyjs-webpack-plugin
```

```js
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tree shaking'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 精简输出
    new UglifyJSPlugin()
  ],
  output: {}
};
```

### 结论

使用 tree shaking 的条件

* 使用 ES2015 模块语法（即 import 和 export）
* 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）

### 参考文献

[https://doc.webpack-china.org/guides/tree-shaking](https://doc.webpack-china.org/guides/tree-shaking)
