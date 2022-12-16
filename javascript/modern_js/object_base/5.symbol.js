// 1. 创建一个symbol值
{
  let id = Symbol();
}
// 2. 创建的时候可以给一个描述符
{
  let id = Symbol("id");
}

// 3. 相同描述符的symbol并不相等
{
  let id1 = Symbol("id");
  let id2 = Symbol("id");
  console.log(id1 === id2);
}

// 4. 对象使用symbol可以创建默认隐藏的属性，在for in循环中会被跳过
{
  let id = Symbol("id");
  let user = {
    name: "John",
    age: 30,
    [id]: 123,
  };

  for (let key in user) console.log(key); // name, age（没有 symbol）

  // 只能通过symbol本身访问
  console.log(user[id]);
}

// 5. 需要相同的symbol可以使用全局symbol，通过for创建
{
  // 从全局注册表中读取
  let id = Symbol.for("id"); // 如果该 symbol 不存在，则创建它

  // 再次读取（可能是在代码中的另一个位置）
  let idAgain = Symbol.for("id");

  console.log(id === idAgain);

  // keyFor可以获取到symbol的描述符
  console.log(Symbol.keyFor(id)); // "id"
}
