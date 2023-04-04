# instanceof

- 原理：instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
- 实现

    ```js
    function myInstanceof(left, right) {
    // 获取对象的原型
    let proto = Object.getPrototypeOf(left)
    // 获取构造函数的 prototype 对象
    let prototype = right.prototype;

    // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true;
        // 如果没有找到，就继续从其原型上找，Object.getPrototypeOf方法用来获取指定对象的原型
        proto = Object.getPrototypeOf(proto);
    }
    }
    ```

用法：obj_A instanceof obj_B
作用：
    - 判断在 A 原型链中能否找到 B 类型的原型
    - Object.getPrototypeOf(obj_A) === obj_B.prototype

```js
console.log(Object instanceof Object);//true 
console.log(Object instanceof Function);//true 

console.log(Function instanceof Function);//true 
console.log(Function instanceof Object);//true

console.log(Number instanceof Number);//false 
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true

console.log(String instanceof String);//false 
console.log(String instanceof Function);//true
console.log(String instanceof Object);//true

console.log(Boolean instanceof Boolean);//false 
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true

console.log(Symbol instanceof Symbol);//false 
console.log(Symbol instanceof Function);//true
console.log(Symbol instanceof Object);//true

console.log(BigInt instanceof BigInt);//false 
console.log(BigInt instanceof Function);//true
console.log(BigInt instanceof Object);//true



function Foo(){}

console.log(Foo instanceof Function);//true 
console.log(Foo instanceof Foo);//false

```