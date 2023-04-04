# null 和 undefined 区别

1. undefined 和 Null 都是基本数据类型，都只有一个值
2. undefined 是未定义，null 是空。一般变量声明了但还没有定义的是 undefined，null 主要用于赋值给一些可能会返回对象的变量，作为初始化。
3. undefined 不是保留字，我们可以通过一些方法获得安全的 undefined 值，比如说 void 0。
4. 当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”。
5. null == undefined 为 true，null === undefined 为 false。
