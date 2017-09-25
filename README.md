### 主要功能

* 编译 css、sass
* 提取公共的样式文件
* 编译 es6，支持 await 、async 等属性
* 引入 HTML 插件，动态生成模板
* 自动删除 dist 目录
* 自动刷新浏览器和热模块替换

### webpack-dev-server

**inline 模式**

* 1.启动时配置

```js
$ webpack-dev-server --inline
```

* 2.修改配置文件

```js
devServer: { inline: true }
```

这样就完成了页面自动刷新，但这里的自动刷新是刷新整个页面。

**Hot Module Replacement**

`Hot Module Replacement（热加载）`是指当文件发生变化后，内存中的bundle文件会收到通知，同时更新页面中变化的部分，而非重新加载整个页面。

```js
 webpack-dev-server --hot
```

**总结**

* webpack-dev-server --line 能够实现页面刷新
* webpack-dev-server --hot  能够实现热模块替换

`webpack-dev-server` 命令行模式下，`webpack.config.js` 中一定要配置`output.publicPath`来指定编译后的包(bundle)的访问位置。

### 问题

* [regeneratorRuntime is not defined](http://esausilva.com/2017/07/11/uncaught-referenceerror-regeneratorruntime-is-not-defined-two-solutions/)
