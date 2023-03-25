# JSONP

1) JSONP 是什么
JSONP(JSON with Padding)，是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来，只支持 get 请求。
2) JSONP 怎么工作的?
在网页有一些标签天生具有跨域能力，比如:img link iframe script。
JSONP 就是利用 script 标签的跨域能力来发送请求的。
3) JSONP 的使用
    1. 动态的创建一个 script 标签

        ```js
        var script = document.createElement("script");
        ```

    2. 设置 script 的 src，设置回调函数

        ```js
        script.src = "http://localhost:3000/testAJAX?callback=abc"; 
        function abc(data) {
            alert(data.name); 
        };
        ```

    3. 将 script 添加到 body 中

        ```js
        document.body.appendChild(script);
        ```

    4. 服务器中路由的处理

    ```js
    router.get("/testAJAX" , function (req , res) {
        console.log("收到请求");
        var callback = req.query.callback; 
        var obj = {
            name:"孙悟空",
            age:18 
        }
        res.send(callback+"("+JSON.stringify(obj)+")"); 
    });
    ```

4) jQuery 中的 JSONP

```js
<!DOCTYPE
<html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <title>Title</title> 
    </head>
    <body>
    <button id="btn">按钮</ button> 
    <ul id="list"></ul>
    <script type="text/javascript" src="./jquery-1.12.3.js"></script>
    <script type=  "text/javascript">
        window.onload = function () {
        var btn = document.getElementById('btn') 
        btn.onclick = function () {
            $.getJSON("http://api.douban.com/v2/movie/in_theaters?callback=?",function (data) {
                console.log(data); 
                //获取所有的电影的条目 
                var subjects = data.subjects; 
                //遍历电影条目
                for(var i=0 ; i<subjects.length ; i++){ 
                    $("#list").append("<li>"+
                    subjects[i].title+"<br />"+
                    "<img src=\""+subjects[i].images.large+"\" >"+ 
                    "</li>");
                    } 
                });
            } 
        }
   </script> 
</body>
</html>
```