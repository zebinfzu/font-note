// 1. 普通函数function
function foo() {}

// 2. 参数列表
function foo_0(arg1) {}

// 3. 参数默认值
function foo_1(arg1 = 10) {}

// 4. 匿名函数，赋值给一个变量
let foo_2 = function() {};

// 5. 箭头函数，区别是没有this和arguments
let foo_3 = () => {};

// 6. 回调函数
function foo_4(foo) {
  foo(); // foo是作为foo_4的参数被foo_4调度，称为foo为回调
}

foo_4(foo_3);

// 7. 箭头函数再直接返回值的情况下不需要{}，参数只有一个的情况下也不需要()
const foo_5 = arg => arg + 10;