# this

- this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。
    1. 函数调用模式，函数调用时，this 指向全局对象。
    2. 方法调用模式，方法调用时，this 指向这个对象。(当一个函数被保存为对象的一个属性时，我们称它为一个方法。)
    3. 构造器调用模式，用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。
    4. apply 、call 和 bind 调用模式，这三个方法都指定调用函数的 this 指向。
        1. apply 接收两个参数：一个是 this 绑定的对象，一个是参数数组。
        2. call 接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。
        3. bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。
    - 优先级：构造器调用模式 > apply、call 和 bind 调用模式 > 方法调用模式 > 函数调用模式