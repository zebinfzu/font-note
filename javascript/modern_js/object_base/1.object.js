// 1. js的唯一复杂类型，Object，赋值的时候浅拷贝
// 2. 以下两种语法都可以创建一个空对象
let obj_1 = new Object();
let obj_2 = {}; // 字面量

// 3. 常见的初始化 key: value，Object支持的key包括string和symbol，value可以是任何类型
let user = {
  name: "John",
  age: 18
};

// 3. 属性简写语法
let text = "text string";
let obj_3 = {
  text // text: text 同名变量的值，闭包按照作用域链向上找
};

// 4. 属性名禁止是任何关键字，比如for、if、let之类

// 5. key存在的操作符，测试一个key是否出现再一个对象上面，返回布尔值
console.log("text" in obj_3);

// 6. in 可以用来遍历对象的key
for (let key in user) {
  console.log(key);
}

// 7. 一些常用操作
// . 运算符 obj.property
// []运算符 obj[property]
// 删除key, delete obj.prop
// 遍历: for (let key in obj) {}

// 8. 常用的一些自定义类型，原型链根指向Object
// Array、Date、Error