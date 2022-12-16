// 1. js的原始类型
// 目前原始类型有8种
// 按照变量赋值的时候是发生copy(栈上复制)还是浅拷贝(指向堆上同一个地址)分成简单类型和复杂类型
// 简单类型:
// 2. number(ieee457标准，同cpp的double和rust的f64)
let num = 123.123;
// BigInt，超出number安全范围的值，数字字面值末尾+n
let big_num = 123412341324123412341323n;
// 3. string，在js里面赋值发生的是copy(确实复制了一份)
// 使用''或者""包裹，或者``包裹，``中可以使用${}插入表达式
let user_name = "John";
let message = `his name's ${user_name}`;

// 4. boolean 布尔值 只包含true和false

// 5. null 只包含null，通常含义上表示为这个值是个对象，但是现在没有初始化或者被free了指向空

// 6. undefined 

// 7. typeof 运算符返回参数的类型
typeof 0 // number

// 8. 复杂类型Object，这个类型在赋值的时候发生浅拷贝

// 9. Symbol