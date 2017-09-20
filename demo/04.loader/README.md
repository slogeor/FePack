### loader

`loader` 是对模块的源代码进行转换，可以使用在 `import` 或者加载模块时进行预处理。

### 使用 loader

* 配置: 在 `webpack.config.js` 文件内指定 `loader`
* 内联: 在每个 `import` 语句中显示指定 `loader`
* CLI: 在 shell 命令指定

#### 配置

`module.rules` 允许在 webpack 配置多个 loader

```js
const config = {
  module: {
    rules: {
      test: /\.css/,
      use: [
        {loader: 'style-loader'},
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }
      ]
    }
  }
}
```

#### 内联

可以在 `import` 语句或任何等效于 `import` 的方法中指定 `loader`，使用 `!` 将资源中的 `loader` 分开。先指定 `loader`，后引入文件。

```js
import Styles from 'style-loader!css-loader?modules!./styles.css';
```

#### CLI

```js
webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```

对 `.jade` 文件使用 `jade-loader`，对 `.css` 文件使用 `style-loader` 和 `css-loader`。

### loader 特性

* 支持链式调用
* 支持同步和异步
* 接受查询参数，用于向 `loader` 传递参数
* 可以使用 `options` 对象进行配置
* `loader` 可以产生额外的任意文件
* 插件能为 `loader` 带来更多特性

### 解析 loader

`loader` 遵循标准的模块解析，多数情况下，`loader` 将从模块路径开始解析[通常将模块路径认为 npm install， node_modules]

### 参考链接

* [https://doc.webpack-china.org/concepts/loaders](https://doc.webpack-china.org/concepts/loaders)
