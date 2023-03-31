# session 和 cookie 的区别

[cookie](cookie.md)
[session](session.md)
cookie 和 session 的区别主要有如下几点:

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
