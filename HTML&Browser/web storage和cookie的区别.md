# web storage和cookie的区别

1. 存储空间不同
   1. web storage能提供5M的存储空间（不同浏览器不同），cookie提供4k的空间
   2. web storage每个域（包括子域）都有独立的存储空间，各个存储空间是完全独立的，因此不会造成数据混淆
2. 与服务端交互
    1. web storage中的数据仅仅是本地存储，不会和服务器发生任何交互
    2. cookie的内容会随着请求一并发送到服务器（每请求一个新的页面时，cookie都会被发送过去，无形中造成带宽浪费）
3. 接口API
    1. web storage提供了许多丰富易用的接口，拥有setItem，removeItemgetItem，clear，key等方法，操作数据更简单
    2. cookie 需要自己封装setCookie，getCookie等
4. 作用域不同：
    1. sessionStorage：不在不同的浏览器窗口中共享，即使是同一个页面；
    1. localStorage：在所有同源窗口都是共享的；
    1. cookie：也是在所有同源窗口中共享的；
5. 数据的有效期不同：
    1. sessionStorage：仅在当前的浏览器窗口关闭有效；
    1. localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
    1. cookie：只在设置的cookie过期时间之前一直有效，即使窗口和浏览器关闭
6. 安全性：
    1. web storage 明文存储在客户端，因此不适合存储敏感数据
    2. cookie 可以加密，因此可以存储敏感数据
7. webStorage支持事件通知机制，可以将数据更新的通知发生给监听者