# 样式文件处理

`Webpack`处理 Css、Less、Sass、Scss、Styl 样式资源

## 介绍

`Webpack` 本身是不能识别样式资源的，需要借助 `Loader` 来帮助 `Webpack` 解析样式资源

[Webpack 官方 Loader 文档](https://webpack.docschina.org/loaders/)

## 处理 css 资源

### 1. css-loader

```shell
npm i css-loader style-loader -D
```

- `css-loader`：负责将 Css 文件编译成 Webpack 能识别的模块
- `style-loader`：会动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容

此时样式就会以 Style 标签的形式在页面上生效

## 2. 配置

项目: webpack_code_1 copy from webpack_code_0

```js
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [],
  mode: "development",
};
```

### 3. 添加 Css 资源

- src/css/index.css

```css
.box1 {
  width: 100px;
  height: 100px;
  background-color: pink;
}
```

- src/main.js

```js{3-4}
import count from "./js/count";
import sum from "./js/sum";
// 引入 Css 资源，Webpack才会对其打包
import "./css/index.css";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```

## 4. 添加 html 文件

- public/index.html

### 5. 运行指令

```shell
npx webpack
```

打开 index.html 页面查看效果

## 处理 less 资源

```shell
npm i less-loader -D #负责将less文件编译成css文件的loader
```

### 修改 config 和添加 less 文件

- src/less/index.less
- src/main.js
- public/index.html

```js
module: {
    rules: [
      // 添加一个less处理的rule
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
```

## 处理 scss 资源

- `sass-loader`：负责将 Sass 文件编译成 css 文件
- `sass`：`sass-loader` 依赖 `sass` 进行编译

```shell
npm i sass-loader sass -D
```

### 修改 config 和添加 sass 文件

- src/sass/index.sass
- src/sass/index.scss
- src/main.js
- public/index.html

```js
{
  test: /\.s[ac]ss$/,
  use: ["style-loader", "css-loader", "sass-loader"]
}
```
