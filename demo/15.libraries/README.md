### 配置 webpack

现在需要打包这个 library，同时要完成以下要求

* 不要打包 lodash，而是 require 用户加载好的 lodash
* library 的名字是 webpack-numbers，其变量名是 webpackNumbers
* library 可以用两种方式来引入：import webpackNumbers from 'webpack-numbers' 或者 require('webpack-numbers')
* 当library 通过 script 标签引入的时候，可以通过全局变量 webpackNumbers 来使用
* library 可以在 Node.js 中使用


### 增加 externals

执行 webpack，你会发现输出了一个非常巨大的文件。文件里会发现 lodash 和你的代码被一起打包了。 然而对于你的 library 本身来说，并不需要打包 lodash。因此你可能会想将该外部扩展(external)的控制权交给你的用户。

```js
module.exports = {
    ...
    externals: {
        "lodash": {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_"
        }
    }
    ...
};
```

### 参考文献
[https://doc.webpack-china.org/guides/author-libraries](https://doc.webpack-china.org/guides/author-libraries)
