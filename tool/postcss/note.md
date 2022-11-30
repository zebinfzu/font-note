# postcss

CSS 界的 Babel，能够转译 CSS 代码，通过一些列插件增强浏览器兼容性，并让开发者提前用上新特性

## 使用 postcss

1. 安装

```shell
npm init
npm i -D postcss postcss-cli
```

2. 命令指定转换文件
   ```shell
   npx postcss style.css -o dist.css
   ```
3. 插件 autoprefixer 用作兼容不同浏览器，需要设置 package.json 文件中"browserslist"项
   ```
   npm i -D autoprefixer
   npx postcss style.css -o dist.css -u autoprefixer
   ```
4. 配置 postcss.config.js
   ```js
   import autoprefixer from "autoprefixer";
   export default {
     map: false,
     plugins: [autoprefixer],
   };
   ```
5. 配置之后可以简化命令
   ```shell
   npx postcss style.css -o dist.css
   ```
6. stylelint，对 css 做格式化检查
   ```shell
   npm install --save-dev stylelint stylelint-config-standard
   ```
   ```js
   // stylelint.config.js
   module.exports = {
     extends: ["stylelint-config-standard"],
   };
   ```
7. postcss 使用 stylelint 插件

   ```js
   import stylelint from "stylelint";

   export default {
     plugins: [
       stylelint({
         fix: true,
       }),
     ],
   };
   ```

8. postcss-pxtorem 插件，将 px 转 rem
   ```
   npm i -D postcss-pxtorem
   ```
