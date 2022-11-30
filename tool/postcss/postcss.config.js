import autoprefixer from "autoprefixer";
import stylelint from "stylelint";
import postcssPresetEnv from "postcss-preset-env";
import pxtorem from "postcss-pxtorem";

export default {
  // 不要生成sourcemap
  map: false,
  plugins: [
    // 语法校验
    stylelint({
      fix: true, // 自动修复
    }),
    // 自动添加浏览器前缀
    autoprefixer,
    // 使用新语法
    postcssPresetEnv({
      stage: 0,
    }),
    // 单位转换: px -> rem
    pxtorem,
  ],
};
