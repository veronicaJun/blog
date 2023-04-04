# call、apply 及 bind

- call 函数的实现步骤
    1. 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
    3. 获取参数。
    4. 将调用函数作为上下文对象的一个属性。
    5. 使用上下文对象来调用这个方法，并保存返回结果。
    6. 删除刚才新增的属性。
    7. 返回结果。
    - 代码

        ```js
        Function.prototype.myCall = function(context) {
            // 判断调用对象
            if (typeof this !== "function") {
                console.error("type error");
            }
            // 获取参数
            let args = [...arguments].slice(1),
                result = null;
            // 判断 context 是否传入，如果未传入则设置为 window
            context = context || window;
            // 将调用函数设为对象的方法
            context.fn = this; //方法调用模式
            // 调用函数
            result = context.fn(...args);
            // 将属性删除
            delete context.fn;
            return result;
        };
        ```

- apply 函数的实现步骤：
    1. 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
    3. 将函数作为上下文对象的一个属性。
    4. 判断参数值是否传入
    5. 使用上下文对象来调用这个方法，并保存返回结果。
    6. 删除刚才新增的属性
    7. 返回结果
    - 代码

        ```js
        Function.prototype.myApply = function(context) {
            // 判断调用对象是否为函数
            if (typeof this !== "function") {
                throw new TypeError("Error");
            }
            let result = null;
            // 判断 context 是否存在，如果未传入则为 window
            context = context || window;
            // 将函数设为对象的方法
            context.fn = this;
            // 调用方法
            if (arguments[1]) {
                result = context.fn(...arguments[1]);
            } else {
                result = context.fn();
            }
            // 将属性删除
            delete context.fn;
            return result;
        };
        ```

- bind 函数的实现步骤：
    1. 判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    2. 保存当前函数的引用，获取其余传入参数值。
    3. 创建一个函数返回
    4. 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象。
    - 代码

        ```js
        Function.prototype.myBind = function(context) {
            // 判断调用对象是否为函数
            if (typeof this !== "function") {
                throw new TypeError("Error");
            }
            // 获取参数
            var args = [...arguments].slice(1),
                fn = this;
            return function Fn() {
                // 根据调用方式，传入不同绑定值
                return fn.apply(
                    this instanceof Fn ? this : context,
                    args.concat(...arguments)
                );
            };
        };
        ```

- 它们的作用一模一样，区别在于传参形式。
    - apply 第一个参数指定函数体内 this，第二个参数是参数列表，可以是数组、类数组
    - call 第一个参数指定函数体内 this，后接函数的参数，不限个数