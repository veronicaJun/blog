# core

CORS 其实是 W3C 的一个标准，全称是跨域资源共享。需要浏览器和服务器的共同支持.
<https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS>

1) CORS 是什么?
CORS(Cross-Origin Resource Sharing)，跨域资源共享。CORS 是官方的跨域解决方案，它的特点是不需要在客户端做任何特殊的操作，完全在服务器中进行处理，支持 get 和 post 请求。跨域资源共享标准新增了一组 HTTP 首部字段，允许服务器声明哪些 源站通过浏览器有权限访问哪些资源
2) CORS 怎么工作的?
CORS 是通过设置一个响应头来告诉浏览器，该请求允许跨域，浏览器收到该响应 以后就会对响应放行。
3) CORS 的使用
  主要是服务器端的设置:

  ```js
    router.get("/testAJAX" , function (req , res) {
        //通过 res 来设置响应头，来允许跨域请求 
        //res.set("Access-Control-Allow-Origin","http://127.0.0.1:3000");  
        res.set("Access-Control-Allow-Origin","*");
        res.send("testAJAX 返回的响应");
    });
```

1. 简单请求:

    * 请求方法为 GET、POST 或者 HEAD
    * 请求头的取值范围: Accept、Accept-Language、Content-Language、Content-Type(只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain)

    浏览器发送请求, 携带 Origin 字段,
    服务端返回 Access-Control-Allow-Origin,
    如果 Origin 不在字段中被拦截.

2. 非简单请求:
    浏览器发送 OPTIONS 请求,携带 Origin, Host, Access-Control-Request-Methods, Access-Control-Request-Headers
    服务端返回 Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, Access-Control-Allow-Credentials,
    Access-Control-Max-Age
    如果请求不满足响应头的条件,则拦截

3. 请求头:
    * Origin: 说明请求来自哪个源
    * Access-Control-Request-Method, 列出 CORS 请求用到哪个HTTP方法
    * Access-Control-Request-Headers，指定 CORS 请求将要加上什么请求头

4. 响应头:
    * Access-Control-Allow-Origin: 表示可以允许请求的源，可以填具体的源名，也可以填*表示允许任意源请求。
    * Access-Control-Allow-Methods: 表示允许的请求方法列表。
    * Access-Control-Allow-Headers: 表示允许发送的请求头字段
    * Access-Control-Allow-Credentials: 表示是否允许发送 Cookie
    * Access-Control-Max-Age: 预检请求的有效期，在此期间，不用发出另外一条预检请求。
    * Access-Control-Expose-Headers。这个字段是给 XMLHttpRequest 对象赋能，让它不仅可以拿到基本的 6 个响应头字段（包括Cache-Control、Content-Language、Content-Type、Expires、Last-Modified和Pragma）, 通过 XMLHttpRequest.getResponseHeader("xx")响应头字段。
