// 1. js中的字符串存储格式始终是utf-16，不依赖页面编码
// 2. 可以使用'',"",``，区别在于``支持换行和通过${}插入表达式
{
  let single = "single-quoted";
  let double = "double-quoted";

  let backticks = `backticks`;
  let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
}
// 3. 可以使用\来转义
// 4. 通过str[index]来访问字符，只是访问，而非可以用来改变
// 5. String构建类型提供length属性返回长度
// 6. toLowerCase() 和 toUpperCase() 方法可以改变大小写
// 7. indexOf(substr, pos) 从给定的pos位置开始找到第一个串
// 8. includes，startsWith，endsWith
// 9. substring、substr 和 slice用来获取字串

