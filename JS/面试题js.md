# 面试题 js

[Toc]

## 1. 数据结构

### 1. 基本数据类型

1. Undefined
2. Null
3. Boolean
4. Number
5. String
6. Object
7. Symbol 独一无二的值
8. BigInt 任意大小的整数

>值类型: 存在栈(stack)中
>引用类型: 存在堆(heap)中
>
### 2. 数据类型的判断

1. [typeof](./typeof.md): 能判断值类型,函数, 不能精确判断 null, 对象, 数组
2. [instanceof](./instanceof.md): 能判断对象类型(判断在其原型链中能否找到该类型的原型)
3. Object.prototype.toString.call(): 能判断所有原始数据类

>如何判断变量为数组?

```js
Array.isArray(arr); // true
arr.__proto__ === Array.prototype; // true
arr instanceof Array; // true
Object.prototype.toString.call(arr); // "[object Array]"
```

### 3. 案列: 手写深拷贝(todo)

### 4. 0.1 + 0.2 !== 0.3

1. 原因
    1. 进制转换: js 最大可以存储 53 位二进制数字,大于 53 位会截掉,导致精度丢失.
    2. 对接运算: 指数位数不同, 运算时需要对接运算,阶小的在尾数位移时发生数丢失,影响精度.
2. 解决方法
    1. 转为整数运算
    2. 使用 Number.EPSILON: ```Math.abs(a - b) < Number.EPSILON```
    3. 转为字符串

## 2. 原型和原型链(todo)

## 3. 作用域与作用域链(todo)

## 4. 执行上下文(todo)

## 5. 闭包

## 6. 案列: 实现 call, apple, bind

## 7. 案列: 实现 new

## 8. 异步

## 9. 浏览器的垃圾回收机制

## 10. 案列: 实现 EventMitter 类
