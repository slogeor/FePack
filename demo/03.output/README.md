### output

output 可以控制 webpack 如何向硬盘写入编译文件。

#### 用法

向 webpack 中配置 output 最低要求是：

* filename: 用于输出的文件名
* path: 目录输出的绝对路径

```js
const config = {
  output: {
    filename: 'bundle.js',
    path: '/dist'
  }
}
```

#### 多入口

如果配置了多个单独的 chunk 应该使用占位符来确保文件的唯一性

```js
const config = {
  enrty: {
    home: './src/home/index.js',
    about: './src/about/index.js'
  },

  output: {
    filename: '[name].js',
    path: '/dist'
  }
}

// 写入到硬盘：/dist/home.js, /dist/about.js
```

#### 高阶配置

使用 CDN 和 资源的 hash

```js
const config = {
  output: {
    filename: '[name].[hash].js',
    publicPath: 'http://cdn.example.com/assets'
  }
}
```

### 参考文件

* [https://doc.webpack-china.org/concepts/output](https://doc.webpack-china.org/concepts/output)
