// 1. 函数签名
{
  function foo(name: string): number {
    return name.length
  }

  const baz = function (name: string): number {
    return name.length
  }

  // 写作变量的类型签名
  const fff: (name: string) => number = function (name) {
    return name.length
  }
}

// 2. 箭头函数
{
  const foo = (name: string): number => {
    return name.length
  }

  const baz: (name: string) => number = (name) => {
    return name.length
  }
}

// 3. void 类型
{
  // 没有调用 return 语句
  function foo(): void { }

  // 调用了 return 语句，但没有返回值
  function bar(): void {
    return;
  }
}

// 4. 可选参数
{
  function foo1(name: string, age?: number): number {
    const inputAge = age || 18; // 或使用 age ?? 18
    return name.length + inputAge
  }

  // 直接为可选参数声明默认值
  function foo2(name: string, age: number = 18): number {
    const inputAge = age;
    return name.length + inputAge
  }
}

// 5. 剩余参数，必须在参数列表最后，通过...运算符将多出来的参数收集到一个数组里面
{
  function foo(arg1: string, ...rest: any[]) { }
}

// 6. 重载，和别的语言类型，调用的时候去匹配参数列表
{
  // 重载入参必须有区别
  function func(foo: number, bar: true): string;
  function func(foo: number, bar?: false): number;
  function func(foo: number, bar?: boolean): string | number {
    if (bar) {
      return String(foo);
    } else {
      return foo * 599;
    }
  }

  const res1 = func(599); // number
  const res2 = func(599, true); // string
  const res3 = func(599, false); // number
}

// 7. 异步函数，生成器函数签名
{
  async function asyncFunc(): Promise<void> { }

  function* genFunc(): Iterable<void> { }

  async function* asyncGenFunc(): AsyncIterable<void> { }
}

// 8. class
{
  // class 语法支持给成员添加修饰符: public / private / protected / readonly
  // static运算符可以申明静态成员，静态成员挂在类上而非实例化对象上，因此使用this.访问不到
  // 静态成员直接被挂载在函数体上，而实例成员挂载在原型上
  // 静态成员不会被实例继承，它始终只属于当前定义的这个类（以及其子类）
  // 会沿着原型链进行传递
  class Foo {
    prop: string;

    constructor(inputProp: string) {
      this.prop = inputProp;
    }

    print(addon: string): void {
      console.log(`${this.prop} and ${addon}`)
    }

    get propA(): string {
      return `${this.prop}+A`;
    }

    set propA(value: string) {
      this.prop = `${value}+A`
    }
  }
}

// 9. 继承，实现，抽象
{
  class Base {
    print() { }
  }

  class Derived extends Base {
    // override 确保覆盖基类的方法
    override print(): void {
      super.print(); // 调用基类的方法
    }
  }

  // 抽象类
  // 一个抽象类描述了一个类中应当有哪些成员（属性、方法等），一个抽象方法描述了这一方法在实际实现中的结构
  // ts中不能声明静态的抽象成员
  abstract class AbsFoo {
    abstract absProp: string;
    abstract get absGetter(): string;
    abstract absMethod(name: string): string
  }

  // 通过implements实现抽象类
  class Foo implements AbsFoo {
    absProp: string = "hello"

    get absGetter() {
      return "hello"
    }

    absMethod(name: string) {
      return name
    }
  }
}

// 10. interface用来声明类结构
{
  interface FooStruct {
    absProp: string;
    get absGetter(): string;
    absMethod(input: string): string
  }
  
  class Foo implements FooStruct {
    absProp: string = "hello"
  
    get absGetter() {
      return "hello"
    }
  
    absMethod(name: string) {
      return name
    }
  }
}


// SOLID原则

// S single单一职责，一个类应该仅具有一种职责
// O open开放封闭原则，一个类应该是可扩展但不可修改的
// L 里氏替换原则，一个派生类可以在程序的任何一处对其基类进行替换
// I 接口分离原则，类的实现方应当只需要实现自己需要的那部分接口
// D 依赖倒置原则，对功能的实现应该依赖于抽象层