## 管理输出

### 设定 HtmlWebpackPlugin

```js
npm install --save-dev html-webpack-plugin
```

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  // 定制输出模板
  new HtmlWebpackPlugin({
    title: 'Output Manager'
  })
]
```

### 清理 /dist 文件夹

```js
npm install clean-webpack-plugin --save-dev
```

```js
const CleanWebpackPlugin = require('clean-webpack-plugin');

plugins: [
  // 清理文件
  new CleanWebpackPlugin(['dist']),
  // 定制输出模板
  new HtmlWebpackPlugin({
    title: 'Output Manager'
  })
]
```

### 参考文献

[https://doc.webpack-china.org/guides/output-management](https://doc.webpack-china.org/guides/output-management)
