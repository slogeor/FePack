## 管理资源

### 加载 CSS

为了从 JavaScript 模块中 import 一个 CSS 文件，你需要在 module 配置中 安装并添加 style-loader 和 css-loader。

```js
npm install --save-dev style-loader css-loader
```

```js
module: {
  rules: [
    {
      /**
        * 加载 CSS
        */
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}
```

在依赖于此样式的文件中 import './style.css'，当该模块运行时，含有 CSS 字符串的 `<style>` 标签，将被插入到 html 文件的 `<head>` 中。

#### 两种使用方

##### 方法1

**webpack.config.js**

```js
module: {
  rules: [
    {
      /**
        * 加载 CSS
        */
      test: /\.css$/,
      use: [
        'style-loader',
        // 以 module 引入
        'css-loader?module'
      ]
    }
  ]
}
```

**index.js**

```js
import styles from './style.css';
...
element.classList.add(styles.hello);
```

这种方法引入 css 的类名会变化，只能通过 styles.hello 引用。

##### 方法二

**webpack.config.js**

```js
module: {
  rules: [
    {
      /**
        * 加载 CSS
        */
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
}
```

**index.js**

```js
import from './style.css';
...
element.classList.add('hello');
```

这种方法引入 css 的类名不会变化。

### 加载图片

```js
npm install --save-dev file-loader
```

```js
/**
  * 加载图片
  */
{
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader'
  ]
}
```

当你 `import login from './login.png'`，该图像将被处理并添加到 `output` 目录，并且 login 变量将包含该图像在处理后的最终 url

当使用 `css-loader` 时，你的 CSS 中的 `url('./login.png')` 会使用类似的过程去处理。loader 会识别这是一个本地文件，并将 `'./login.png'` 路径，替换为输出目录中图像的最终路径

`html-loader` 以相同的方式处理 `<img src="./login.png" />`

### 加载字体

file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录

```js
/**
  * 加载字体
  */
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    'file-loader'
  ]
}
```

### 加载数据

可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。

```js
npm install --save-dev csv-loader xml-loader
```

```js
/**
  * 加载其它资源
  */
{
  test: /\.(cvs|tsv)$/,
  use: [
    'cvs-loader'
  ]
},
{
  test: /\.xml$/,
  use: [
    'xml-loader'
  ]
}
```

### 参考文献

[https://doc.webpack-china.org/guides/asset-management](https://doc.webpack-china.org/guides/asset-management)
