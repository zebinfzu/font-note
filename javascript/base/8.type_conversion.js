let value = true;
alert(typeof value); // boolean

// 1. 显示调用String方法来转换
String(value);

// 2. 转换为数值类型，比如/

// 3. 或者使用Number(value)显示转换
// Number转换规则
// undefined -> NaN
// null -> 0
// true / false -> 1 / 0
// string -> 去掉空白字符，空字符串->0，读一个合法数字，不然就返回NaN
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0

// 4. boolean转换规则
// 5个falsy值，(undefined、null、0、NaN、空字符串)转为false
// 其他均为true，包含像[]数组，"0"之类的值