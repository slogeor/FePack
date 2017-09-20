## 缓存

### 输出文件的文件名(Output Filenames)

```js
const config = {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

* [hash] 每次构建过程中，唯一的 hash 生成
* [chunkhash]: 基于每个 chunk 内容的 hash

### 提取模板(Extracting Boilerplate)

``` js
const config = {
  entry: {
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
  }
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
}
```

引入顺序在这里很重要。CommonsChunkPlugin 的 'vendor' 实例，必须在 'runtime' 实例之前引入。


### 模块标识符(Module Identifiers)

 module.id 会基于默认的解析顺序(resolve order)进行增量。也就是说，当解析顺序发生变化，ID 也会随之改变。因此，简要概括：

* main bundle 会随着自身的新增内容的修改，而发生变化
* vendor bundle 会随着自身的 module.id 的修改，而发生变化
* runtime bundle 会因为当前包含一个新模块的引用，而发生变化

第一个和最后一个都是符合预期的行为，而 vendor 的 hash 发生变化是我们要修复的。

通过选择是使用 HashedModuleIdsPlugin 来解决，推荐用于生产环境构建。

```js
const config = {
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ]
}
```

### 参考文献
[https://doc.webpack-china.org/guides/caching](https://doc.webpack-china.org/guides/caching)
