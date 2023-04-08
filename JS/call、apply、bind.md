# call、apply、bind

1. call() 和 apply()
    - 共同点：
        - 改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行的。
        - 调用 call 和 apply 的对象，必须是一个函数 Function
    - 区别：
        - 写法：
            - Function.call(obj,[param1[,param2[,…[,paramN]]]])
            - Function.apply(obj[,argArray])
        - 使用场景：
            - call
                - 对象的继承
                - 借用方法（如类数组借用数组方法）
            - apply
                - 可以将一个数组转换为一个参数列表
                - 实现两个数组合并
2. bind()
   - bind 也能改变对象的执行上下文
       - bind 会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。
   - 不同的是
       - bind 方法的返回值是函数，并且需要稍后调用，才会执行。
       - apply 和 call 则是立即调用。
3. [this](./this.md)
4. 实现call、apply 及 bind 函数 todo
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
                          this instanceof fn ? this : context,
                          args.concat(...arguments)
                      );
                  };
              };
              ```
