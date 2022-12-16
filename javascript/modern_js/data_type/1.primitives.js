// 1. 原始值，属于原始类型中的一种值
// string, number, boolean, bigint, symbol, undefined, null
// 2. js提供了一系列构造类型，String，Number，Boolean，BigInt...，使得我们在使用原始值的时候可以隐式的类型转换以调用构造类型上的方法
console.log(1..toString()); // 原始值1 number -> Number(1).toString()

// 3. null 和 undefined没有对应的构造类型，因此没有任何方法