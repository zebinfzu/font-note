// 1. 相比于其他类型，object使用=的时候只赋值栈上的指针，堆上指向同一个地址，对于key的值也一样

let obj_1 = {
  value: 1
};

let obj_2 = obj_1;

obj_2.value = 3;
console.log(obj_1, obj_2);

// 2. clone
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 新的空对象

// 将 user 中所有的属性拷贝到其中
for (let key in user) {
  clone[key] = user[key];
}

// 3. 使用object.assign方法实现一样的效果

let clone_0 = {};
Object.assign(clone_0, user);

// 4. object.assign这种拷贝一样还是浅拷贝，对于key对应的value也是object的情况没有继续处理

// 5. js是垃圾回收是依赖于GC的