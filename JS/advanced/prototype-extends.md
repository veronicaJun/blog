# 原型的继承

## 显式原型继承

亲自将某个对象设置为另一个对象的原型。

- Object.setPrototypeOf

    ```js
    const obj_a = {a: 1}
    const obj_b = {b: 1}
    //将 a 设置为 b 的原型
    Object.setPrototypeOf(obj_b, obj_a) 
    ```

- Object.create

    ```js
    const obj_a = {a: 1}
    const obj_b = Objeact.create(obj_a);
    ```

- Object.setPropertyOf 和 Object.create 的差别在于：
  - Object.setPropertyOf，给我两个对象，我把其中一个设置为另一个的原型。
  - Object.create，给我一个对象，它将作为我创建的新对象的原型。

## 隐式原型继承

无感知的完成创建对象、原型继承和属性初始化的过程

- 构造函数
  - 普通函数创建时，自带 prototype， 包含一个 constructor， 指向构造函数
  - js 提供了几个内总 constructor 的函数，如： Object，Array，Boolean，String，Number 等
  - 对象、数组字面量创建时，隐式的通过 new 去创建， 并隐式的进行原型继承