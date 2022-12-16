// 1. ?. 可选链语法，当?.访问到非undefined/null返回undefined作为表达式的值，否则会继续链式调用

// 2. ?.() 变体:表示可能存在的方法，是方法就执行，不然就啥也不发生
let u1 = {
  admin() {
    console.log(u1);
  },
};
let u2 = {};

u1.admin?.();

u2.admin?.();

// 3. ?.[key] 将返回的值作为对象访问，不是数组的话返回undefined
let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

