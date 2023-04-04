# fetch

- 不建议使用
    - 原生函数，不使用 XmlHttpRequest 对象提交 ajax 请求
    - [Promise](尚硅谷Promise从入门到自定义.md) 风格
    - [关注分离](../../设计模式/关注分离.md)
    - 老版本浏览器不支持
- API
    - GET请求

    ```js
    fetch(url).then(function(response) {
        return response.json()
      }).then(function(data) {
        console.log(data)
      }).catch(function(e) {
        console.log(e)
      });
    ```

    - POST请求

    ```js
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      }).then(function(data) {
        console.log(data)
      }).catch(function(e) {
        console.log(e)
      });
    ```

- 示例
    - 未优化

    ```js
    fetch(`/api1/search/users2?q=${keyWord}`).then(
     response => {
      console.log('联系服务器成功了');
      return response.json() // Promise 实列对象，可以继续 .then 下去
     },
     error => {
      console.log('联系服务器失败了',error);
      return new Promise(()=>{}) // 中断 Promise 链，否则可以进入下一个 .then
     }
    ).then(
     response => {console.log('获取数据成功了',response);},
     error => {console.log('获取数据失败了',error);}
    )
    ```

    - 优化 1: 统一处理错误信息

    ```js
    fetch(`/api1/search/users2?q=${keyWord}`).then(
     response => {
      console.log('联系服务器成功了');
      return response.json() // Promise 实列对象，可以继续 .then 下去
     }
    ).then(
     response => {console.log('获取数据成功了',response);}
    ).catch(
     error => console.log('请求出错',error);
    )
    ```

    - 优化 2: .then不指定失败的回调，利用 try catch 接收错误信息

    ```js
    try {
     const response= await fetch(`/api1/search/users2?q=${keyWord}`)
     const data = await response.json()
     console.log(data);
     PubSub.publish('atguigu',{isLoading:false,users:data.items})
    } catch (error) {
     console.log('请求出错',error);
     PubSub.publish('atguigu',{isLoading:false,err:error.message})
    }
    // 注：外面需要包一个 async function
    ```
