// 1. js提供内建的Array类型
let arr = new Array();
let arr_ = [];
// 2. js数组元素可以是任意类型
{
  let arr = [{}, 1, "str", Symbol("id")];
}
// 3. js的array可以有空位
{
  let arr = [, , 1];
  console.log(arr);
}
// 3. length属性返回长度
{
  // 这个长度是最大的下标+1，空位也算元素
  let arr = [, , , 1];
  console.log(arr.length);
  arr[10000] = 10;
  console.log(arr.length);
  console.log(arr);
}
// 4. js可以直接拿Array当作双端队列使用
// pop 队尾弹出
// push 队尾加入
// shift 队头弹出
// unshift 队头压入

// 5. 数组对象可以添加任意的key:value，和普通的object没区别

// 6. 可以使用for of循环
{
  for (const val of [1, 2, 3]) {
    console.log(val);
  }
  // for ... in 也是可以的和对象一样
}

// 7. splice(start[, deleteCount, elem1, ..., elemN]) 改变原来的数组
{
  let arr = [1, 2, 4];
  arr.splice(-1, 0, 3, 4); // 从索引 -1（尾端前一位），删除0个，添加3,4
  console.log(arr);
}

// 8. arr.slice([start], [end]) 返回一个新数组

// 9. arr.concat(arg1, arg2) 创建新数组
{
  console.log([1, 2].concat([3, 4], [5, 6]));
}

// 10. arr.forEach((item, index, array)=>{}), 遍历数组元素，执行传入的回调
// 11. 搜索数组元素indexOf/lastIndexOf 和 includes
// 12. arr.map((item, index, array) => { ... return newItem; }) 一比一转换，返回新数组
// 13. arr.filter((item, index, array) => {... return boolean; }) 筛选数组元素，返回新数组
// 14. arr.reduce((accumulator, item, index, array) => {... return result}, init) init会作为第一次执行的accumulator，之后每次回调函数将上一轮的返回值作为accumulator，返回的也是新数组

// 15. arr.sort((a, b) => {...return ;}) 排序方法，传入一个回调，数组元素将按照回调的规则进行排序

// 16. arr.reverse() 反转

// 17. str.split('分割字符串')，按照分割字符串来分割原串，返回一个数组
// 18. array.join("字符串")，split的反向操作

// 19. arr.isArray() 对于除了Function之外的复杂类型，typeof返回的都是Object，因此需要这个函数来判断是不是数组

// 20. array.fill(value, start, end)
// 21. array.flat(depth)