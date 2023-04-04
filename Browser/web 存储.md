# web 存储

1. [session](../Node/session.md) 和 [cookie](../Node/cookie.md) 的区别
    1. 存在的位置
       * cookie:浏览器端
       * session:服务端
    2. 安全性
       * cookie 是以明文的方式存放在客户端的，安全性相对较低
       * session 存放于服务器中，所以安全性 **相对** 较好
    3. 网络传输量
       * cookie 设置内容过多会增大报文体积，会影响传输效率
       * session 数据存储在服务器，只是通过 cookie 传递 id，所以不影响传输效率
    4. 存储限制
       * 浏览器限制单个 cookie 保存的数据不能超过 **4K** ，且单个域名下的存储数量也有限制
       * session 数据存储在服务器中，所以没有这些限制

2. localStorage 和 sessionStorage
   * HTML5 专门为存储来设计的,最大 5M
   * API 简单易用
   * 不会随着 http 请求被发送到服务端.
   区别:
   * localStorage 数据会永久存储,除非代码删除或手动删除.
   * sessionStorage 数据只存在于当前会话,浏览器关闭则清空.
   * 一般用 localStorage 会多一些.
