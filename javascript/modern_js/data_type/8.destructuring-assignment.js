// 1. 数组解构赋值
let arr = [1, 2];
let [a, b] = arr;
// 2. =右边可以是任何可迭代对象
{
  let [a, b, c] = "abc"; // ["a", "b", "c"]
  let [one, two, three] = new Set([1, 2, 3]);
}
// 3. =左边可以是任何可以被赋值的东西，比如给对象属性赋值
{
  let user = {};
  [user.name, user.surname] = "John Smith".split(" ");
}
// 4. 利用数组解构赋值来遍历对象的[key:value]
{
  let user = {
    name: "hhh",
    age: 18,
  };
  for (const [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
  }
}
// 5. 利用数组解构赋值来交换元素的值
{
  let a = 10,
    b = 20;
  [a, b] = [b, a];
}
// 6. 剩余运算符
{
  let [name1, name2, ...rest] = [
    "Julius",
    "Caesar",
    "Consul",
    "of the Roman Republic",
  ]; // 剩余参数收集到rest作为一个数组
  console.log(rest.length);
}
// 7. 默认值
{
  // 左边短不会报错，右边短会导致报错，可以给默认值，这样右边不够长的情况下，会获得默认值
  let [name = "Guest", surname = "Anonymous"] = ["Julius"];
  console.log(name, surname);
}

// 8. 对象解构
{
  let options = {
    title: "Menu",
  };

  // 可以给默认值，和新变量名
  let { width: w = 100, height: h = 200, title: t } = options;

  console.log(t); // Menu
  console.log(w); // 100
  console.log(h); // 200
}
// 9. 对象解构语法的剩余语法
{
  let options = {
    title: "Menu",
    height: 200,
    width: 100,
  };

  // title = 名为 title 的属性
  // rest = 存有剩余属性的对象
  let { title, ...rest } = options;

  // 现在 title="Menu", rest={height: 200, width: 100}
}

// 10. 以上语法支持嵌套
{
  let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  let {
    size: {width: w, height: h},
    items: [item1, item2],
    extra,
    title = "Menu" // 使用默认值
  } = options;
}

// 11. 嵌套解构也适用于函数参数
{
  function foo({size: {width: w, height: h}, items: [item1, item2], extra: e}) {}
}

// 12. 对象解构的完整语法 let {key: varName = default, ...rest} = object;
// 13. 数组解构的完整语法 let [item1 = default, item2, ...rest] = array;