// 1. 对象方法, this，对于function有一个神奇的值称作this
// 最简单的理解function的this是编译期(好吧js没有编译期)就是执行之前是未知的
// this是在运行时才确定的，是方法调用的时候.之前的那个东西

let user = {
  name: "John",
  age: 30,
  print() {
    console.log(this, this.name);
  }
};

// 和定义的时候没关系
user.print(); // 此时this是user

let p = user.print;
p(); // 此时是全局对象，浏览器里面是window

// 2. 箭头函数无this

// 3. this的特殊情况，在new运算符调用函数的时候，称该函数为构造函数，使用的时候指向构造函数创建的新对象

function User(name, age) {
  // this = {};（隐式创建）
  this.name = name;
  this.age = age;
  // this = {};（隐式创建）
}

let u = new User("hhh", 12);