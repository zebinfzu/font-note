// 1. 糟糕的注释
// ... 解释下面的代码是做什么的

// 2. 好的注释，把复杂内容拆分出新的函数，然后用函数注释来表示这个函数是干啥的
/**
 * 返回 x 的 n 次幂的值。
 *
 * @param {number} x 要改变的值。
 * @param {number} n 幂数，必须是一个自然数。
 * @return {number} x 的 n 次幂的值。
 */
function pow(x, n) {
  return x ** n;
}

// ide可以有良好的提示
pow(1, 2);
