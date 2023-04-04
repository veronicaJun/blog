# ajax、axios、fetch的区别

- AJAX
    - 通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。
    - 缺点
        本身是针对MVC编程，不符合前端 MVVM 的浪潮
        基于原生XHR开发，XHR本身的架构不清晰
        不符合关注分离（Separation of Concerns）的原则
        配置和调用方式非常混乱，而且基于事件的异步模型不友好。

- Fetch
    - fetch号称是AJAX的替代品，Fetch是基于promise设计的。Fetch的代码结构比起ajax简单多。
    - fetch的优点：
        - 语法简洁，更加语义化
        - 基于标准 Promise 实现，支持 async/await
        - 更加底层，提供的API丰富（request, response）
        - 脱离了XHR，是ES规范里新的实现方式

    - fetch的缺点：
        - fetch 只对网络请求报错，服务器错误码不 reject
        - fetch 默认不带cookie，需要添加配置项： fetch(url, {credentials: 'include'})
        - fetch 不支持abort，不支持超时控制
        - fetch 无法监测请求的进度，而XHR可以

- Axios
    - Axios 是一种基于 Promise 封装的 HTTP 客户端
    - 特点
        - 支持浏览器端发起 XMLHttpRequests 请求
        - 支持 node 端发起 http 请求
        - 支持 Promise API
        - 监听请求和返回
        - 对请求和返回进行转化
        - 取消请求
        - 自动转换 json 数据
        - 客户端支持抵御 XSRF 攻击
