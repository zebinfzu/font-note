# 处理图片资源

`webpack5`直接内置了`file-loader`和`url-loader`

## 配置 config 和添加资源文件

- src/images/1.jpeg
- src/images/2.png
- src/images/3.gif

资源文件从css中引入
```css
.box1 {
  background-image: url("../images/1.jpeg");
}
.box2 {
  background-image: url("../images/2.png");
}
.box3 {
  background-image: url("../images/3.gif");
}
```

> 设置新的rule处理图片文件

```js
{
  test: /\.(png|jpe?g|gif|webp)$/,
  type: "asset"
}
```

## 查看生成的结果

```shell
npx webpack
```
dist文件夹下增加了3张图片

## 优化部分图片资源

如果希望将小于指定体积的图片文件转换为data URI形式（Base64格式）

修改之前的rule
```js
{
  test: /\(png|jpe?g|gif|webp)$/,
  type: "assert",
  parser: {
    dataUrlCondition: {
      maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
    }
  }
}
```

- 优点：减少请求数量
- 缺点：体积变得更大