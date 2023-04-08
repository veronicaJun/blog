# 配置代理 package.json

脚手架已安装h`ttp-proxy-middleware`

在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

```js
 axios.get('http://localhost:3000/api/students').then(
  response => {console.log('成功了',response.data);},
  error => {console.log('失败了',error);}
 )
```

说明：

1. 前端资源服务器 3000，后端资源服务器 5000
2. 优点：配置简单，前端请求资源时可以不加任何前缀。
3. 缺点：不能配置多个代理。
4. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）
