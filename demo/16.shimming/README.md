### shimming

很多时候当使用第三方 library 的时候，可以看出我们还期望有一些全局依赖，比如对于大家都知道 jquery 的 $。


#### alias

```js
module.exports = {
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  }
};
```

#### ProvidePlugin

ProvidePlugin 可以将模块作为一个变量，被 webpack 在其他每个模块中引用。只有你需要使用此变量的时候，这个模块才会被 require 进来。 比如：可以在每次遇到全局标识符 $ 的时候，在 webpack 中预先设置 `var $ = require(“jquery”)`。

```js
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
```


### 参考文献
[https://doc.webpack-china.org/guides/shimming/](https://doc.webpack-china.org/guides/shimming/)
