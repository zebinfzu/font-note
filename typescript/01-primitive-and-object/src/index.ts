// 1. javascript 原生类型
{
  const str: string = "string";
  const num: number = 24;
  const bool: boolean = true;
  const undef: undefined = undefined;
  const nul: null = null;
  const obj: Object = { str, num, bool };
  const bigint_1: bigint = 12342313412341324n;
  const symbol_var: symbol = Symbol("unique");
}

// 2. null 和 undefined
// 在js中 null == undefined -> true, null === undefined -> false
// ts中null 和 undefined均是有意义类型
{
  // 不开启strictNullChecks时，null 和 undefined作为其他类型的子类型
  const tmp1: string = null;
  const tmp2: string = undefined;

  const tmp3: null = undefined;
  const tmp4: undefined = null;
}

// 3. js 中的 void 0
// void 操作符会执行后面跟着的表达式并返回一个 undefined，如你可以使用它来执行一个立即执行函数（IIFE）
{
  void function iife() {
    console.log("Invoked!");
  }()
  // 等价于 void((function iife(){})())
}

// 4. ts 中的 void 则不同，原始类型标注里面也有void，用于描述一个没有返回值的函数
// 可以认为void表示一个空类型，但undefined能够被赋值给void
{
  function func1(): void { }
  function func2(): void {
    return;
  }
  function func3(): undefined {
    return undefined;
  }
  // 需要在关闭 strictNullChecks 配置的情况下才能成立
  function func4(): void {
    return undefined;
  }
}

// 5. 数组的类型标注
{
  const arr1: string[] = [];
  const arr2: Array<String> = [];
}

// 6. 元组的类型标注
// 使用元组的可以有效避免隐式的越界访问
{
  const tup1: [string, string, string] = ['a', 'b', 'c'];

  // 如果需要让元组变成部分可选的可以用?语法糖写，没写的会被推导为undefined
  const tup2: [string, number?, boolean?] = ['str'];
  type TupleLength = typeof tup2.length; // 推导类型为0 | 1 | 2

  // ts4.0之后新增了具名元组
  const tup3: [name: string, age: number, male: boolean] = ['haha', 11, true];

  const arr1: string[] = [];
  // ts检查不了这个
  const [ele1, ele2, ...rest] = arr1;
}

// 7. 使用interface声明一个结构，并作为类型标注
{
  interface IDescription {
    name: string;
    age: number;
    male: boolean;
    // 接口修饰属性：通过?标记字段是可选的
    func?: Function;
    // readonly 标记字段是只读的
    readonly money: number;
  }
  const obj1: IDescription = {
    name: 'haha',
    age: 11,
    male: true,
    money: 10000
  }
}

// 8. ts 中的 type和interface
// interface 用来描述对象、类的结构
// 类型别名用来将一个函数签名、一组联合类型、一个工具类型等等抽离成一个完整独立的类型

// 9. object、Object 以及 { }
// JS当中所有原型链的顶端是Object以及Function
// 所有的原始类型与对象类型最终都指向 Object，在 TypeScript 中就表现为 Object 包含了所有的类型
{
  // 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
  const tmp1: Object = undefined;
  const tmp2: Object = null;
  const tmp3: Object = void 0;

  const tmp4: Object = 'haha';
  const tmp5: Object = 599;
  const tmp6: Object = { name: 'haha' };
  const tmp7: Object = () => { };
  const tmp8: Object = [];

  // 与Object类似的几个装箱类型Boolean、Number、String、Symbol
  const tmp9: String = undefined;
  const tmp10: String = null;
  const tmp11: String = void 0;
  const tmp12: String = 'haha';

  // 以下不成立，因为不是字符串类型的拆箱类型
  // const tmp13: String = 599; // X
  // const tmp14: String = { name: 'haha' }; // X
  // const tmp15: String = () => { }; // X
  // const tmp16: String = []; // X
}

// 10. 任何情况下都可以避免使用Object以及Number、Boolean这一些装箱类型

// 11. ts中引入了object就是为了避免使用Object，object表示所有非原始类型的类型，即数组、对象与函数类型
{
  const tmp17: object = undefined;
  const tmp18: object = null;
  const tmp19: object = void 0;

  // const tmp20: object = 'haha';  // X 不成立，值为原始类型
  // const tmp21: object = 599; // X 不成立，值为原始类型

  const tmp22: object = { name: 'haha' };
  const tmp23: object = () => { };
  const tmp24: object = [];
}

// 12. {} 可以当作对象的字面量，意味着任何非 null / undefined
// 虽然能够将其作为变量的类型，但你实际上无法对这个变量进行任何赋值操作

// 13. 注意要避免使用Object和{}，当不确定一个对象的实际类型，但明确不是原始类型时，可以使用object
