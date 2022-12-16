// 1. 可迭代对象
// 使用for ..of 的时候，会调用对象的Symbol.iterator方法创建一个迭代器，返回一个迭代器(iterator)，这个对象有next方法
{
  let range = {
    from: 1,
    to: 5,
    [Symbol.iterator]() {
      return {
        current: this.from,
        last: this.to,
        // iterator对象必须实现next方法
        next() {
          // 它将会返回 {done:.., value :...} 格式的对象
          if (this.current < this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
  for (let num of range) {
    console.log(num); // 1, 然后是 2, 3, 4, 5
  }
}

// 2. iterator可以和对象本身合并，把next方法挂自己身上就行
{
  let range = {
    from: 0,
    to: 5,
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
    next() {
      if (this.current < this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
  for (const val of range) {
    console.log(val);
  }
}


// 3. 可迭代的，就是有Symbol.iterator方法，可以迭代，字符串就是可迭代的
// 4. 类数组，有索引和length属性的对象，但是不可以迭代

// 5. Array.from 接收一个可迭代对象或者类数组，返回一个Array