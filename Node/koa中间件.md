# koa中间件 todo

#koa

- 解题：
    - 初阶：说清楚表象
        - KOA 的核心设计之一，所有用户扩展都是围绕中间件展开，初始化时用户可以按需一个一个注册中间件函数；启动后KOA 会按照注册顺序逐个调用
        - 调用时koa会传递上下文对象及next函数，用户可通过修改上下文对象传递信息，也可以调用next函数执行下一个
    - 中阶：本质上是一种带上下文、副作用的插件模式，说清楚原理
        - 横向看跟 lodash 的flow函数 与 ramda.compose有点像，只是更复杂且灵活
        - 自己手写。。。
- 参考文档
    - [](https://github1s.com/koajs/compose/blob/HEAD/index.js)