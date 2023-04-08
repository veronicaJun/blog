# new

- 步骤
    - 首先创建了一个新的空对象
    - 设置原型，将对象的原型设置为构造函数的 prototype 对象。
    - 用 apply 让构造函数的 this 指向这个对象，并执行构造函数（为这个新对象添加属性）
    - 判断构造函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

- 实现

    ```js
        function objectFactory() {
            var obj = new Object(),
            Constructor = [].shift.call(arguments);
            obj.__proto__ = Constructor.prototype;
            var ret = Constructor.apply(obj, arguments);
            return typeof ret === 'object' ? ret : obj;
        };
    ```
