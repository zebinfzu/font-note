// 1. map 哈希表，和一般的对象的区别在于key可以是任何类型
// new Map()
// map.set(key, value)，会返回map本身，因此可以链式调用
// map.get(key)
// map.has(key)
// map.delete(key)
// map.clear()
// map.size
// Object.entries 从对象创建Map
// Object.fromEntries 从Map创建对象

// 2. set
// new Set() 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中
// set.add(value) 添加一个值，返回 set 本身
// set.delete(value)
// set.has(value)
// set.clear()
// set.size
// for ..of 或者 forEach方法来迭代set的值

// 3. WeakMap
// key必须是对象，而不能是原始值
//  weakMap 中使用一个对象作为键，并且没有其他对这个对象的引用 —— 该对象将会被从内存（和map）中自动清除

// 4. WeakSet
// 同样key必须是对象
