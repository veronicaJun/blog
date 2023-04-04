# AJAX

- AJAX是指的是通过 JavaScript 的 异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。

- 创建AJAX请求的步骤：
    - 创建 XMLHttpRequest 对象
    - 新建 http 请求，指定方法、url等
    - 设置状态监听函数及请求头
    - 发送 Http 请求
    - 代码

        ```js
        const SERVER_URL = "/server";
        // 1.创建一个 XMLHttpRequest 对象
        let xhr = new XMLHttpRequest();
        // 创建 Http 请求
        xhr.open("GET", url, true);
        // 2.设置状态监听函数
        xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        // 当请求成功时
        if (this.status === 200) {
            handle(this.response);
        } else {
            console.error(this.statusText);
        }
        };
        // 3.设置请求失败时的监听函数
        xhr.onerror = function() {
        console.error(this.statusText);
        };
        // 4.设置请求头信息
        xhr.responseType = "json";
        xhr.setRequestHeader("Accept", "application/json");
        // 5.发送 Http 请求
        xhr.send(null);
        ```

- 使用Promise封装AJAX
    - 代码

        ```js
        // promise 封装实现：
        function getJSON(url) {
        // 创建一个 promise 对象
        let promise = new Promise(function(resolve, reject) {
            let xhr = new XMLHttpRequest();
            // 新建一个 http 请求
            xhr.open("GET", url, true);
            // 设置状态的监听函数
            xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;
            // 当请求成功或失败时，改变 promise 的状态
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
            };
            // 设置错误监听函数
            xhr.onerror = function() {
            reject(new Error(this.statusText));
            };
            // 设置响应的数据类型
            xhr.responseType = "json";
            // 设置请求头信息
            xhr.setRequestHeader("Accept", "application/json");
            // 发送 http 请求
            xhr.send(null);
        });
        return promise;
        }
        ```
