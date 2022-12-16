// 1. js的number遵循IEEE754标准
// 2. js的数字和rust一样支持用_作为分隔符提高可读性
let billion = 1_000_000_000;
// 3. 调用构造类型方法的时候字面量整数会导致歧义，因此需要多加一个.
1..toString();

// 4. 支持e科学计数法
{
  let num = 9e10;
}

// 5. 支持16进制、2进制、8进制字面量写法
{
  0xff;
  0o77;
  0b111100001111;
}

// 6. toString(base) 将number按指定进制转换成字符串，默认base=10，base最大可以是36
{
  console.log(123456..toString(36));
}

// 7. 舍入的构造类型方法
// floor 向下取整
// ceil 向上取整
// round 四舍五入
// trunc (ie不支持) 去掉小数点后的内容

// 8. toFixed(n) 保留n位小数并返回字符串，保留方式类似round
console.log(1.0123.toFixed(5));

// 9. number的值超界有infinite, -infinite
{
  console.log(1e500);
  console.log(-(1e500));
}

// 10. 数学上未定义的行为返回NaN，NaN和任何数字操作都返回NaN

// 11. 无法通过条件比较infinite和nan，只能使用构造器方法isInfinite和isNaN判断

// 12. parseInt, parseFloat传入字符串转换位数字，值不能转换则会得到NaN

// 13. 内建的Math对象提供一系列数字操作的方法
{
  console.log(Math.random());
  console.log(Math.max(3, 5, 1, 2, -5));
  console.log(Math.min(1, -1, 2, -9));
  console.log(Math.pow(2, 3));
}