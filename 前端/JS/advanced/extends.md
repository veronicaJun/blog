# 类的继承

## 两条继承链

（1）子类的 \_\_proto\_\_ 属性，表示构造函数的继承，总是指向父类。
（2）子类的 prototype 属性的 \_\_proto\_\_ 属性，表示方法的继承，总是指向父类的 prototype 属性。

## Prototype-based inheritance VS Class-based inheritance

基于 prototype 的继承
    可以由各种方式创建，可以在创建时设置继承对象，也可以在创建后修改继承对象
    可以继承数据、结构和行为三者（prototype 是一个对象，拥有自己的 data（非函数属性） 和 methods（函数属性））
    先设置 this，再添加属性和方法（Parent.apply(this)）

基于 class 的继承
    基于某个已完成继承关系的 class 模板所创建
    继承的是行为和结构（通常，data 数据由 instance 承载，methods 行为、方法则在 class 里）
    先设置属性和方法（先调用super方法），再设置 this

共同点：
    prototype 其实是一个隐式的单向链表，每个 item 中都存储了指向下一个 item 的引用，class 可以被更细力度的 prototype 实现
    对开发者不友好：prototype 在 JS 里隐式的、自动的行为，容易让开发者困扰
    对体积优化不友好：都能难通过代码分析，在构件式进行移除不必要的代码（Tree-Shaking）
    不利于代码复用
