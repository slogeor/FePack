## 生成环境

开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

###  webpack-merge

通过通用配置，我们不必在环境特定(environment-specific)的配置中重复代码。

```js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
});
```

在环境特定的配置中使用 merge() 很容易地包含我们在 dev 和 prod 中的常见配置。webpack-merge 工具提供了多种合并(merge)的高级功能。

### 特定环境

可以使用 webpack 内置的 DefinePlugin 为所有的依赖定义这个变量。

```js
module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});

```

### 参考文献

[https://doc.webpack-china.org/guides/production](https://doc.webpack-china.org/guides/production)
