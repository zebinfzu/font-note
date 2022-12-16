// 1. statements语句
// 通过分号分割语句
console.log(1); console.log(2);
// 2. js通常在换行的情况下语句可以省略分号
console.log(1)
console.log(2)
// 3. js存在很多无法确定是否真的需要自动插入分号的情况
// alert("hello")
// [1, 2].forEach(alert);
// 以上将会被js理解成alert("Hello")[1, 2].forEach(alert);