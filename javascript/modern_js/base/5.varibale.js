// 1. js定义变量的关键字有var和let
// 区别主要在于var会被挂到全局对象上，浏览器里面就是window
// var没有块级作用域，所以要使用var局部变量必须要使用立即执行函数
{
  var v1 = "string";
}
console.log(v1); // v1还存在
// let 有块级作用域
{
  let v2 = "string";
}
// console.log(v2); v2不存在

// 2. const用来定义一个常量
// 通常建议变量名使用小写_，常量使用大写_
const MAX_NUM = 10000;
