// 1. while 和 do while
// 循环体只有一个语句可以不要{}
let i = 0;
while (i < 3) i += 1;
do i += 2;
while (i < 10);
// 2. for (begin; condition; step) {}
// begin -> condition -> body -> step -> condition -> .....

// let 和 var 的一个区别
// let 有块级作用域，每次循环{}里面是一个新的临时变量
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i));
} // 0 1 2 3 4
// var会被变量提升是同一个变量
for (var j = 0; j < 5; j++) {
  setTimeout(() => console.log(j));
} // 5 5 5 5 5

// 3. break 和 continue
