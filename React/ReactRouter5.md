# React Router 5

[Toc]

- [SPA](../JavaScript/SPA.md)的理解
- [路由的理解](路由的理解.md)

## 相关API

### react-router-dom 的理解

- react的一个插件库。
- 专门用来实现一个SPA应用。
- 基于react的项目基本都会用到此库。

### 内置组件

- `<BrowserRouter>`
- `<HashRouter>`
- `<Route>`
- `<Redirect>`
- `<Link>`
- `<NavLink>`
- `<Switch>`

### 其它

- `history`对象
- `match`对象
- `withRouter`函数

## 基本使用

### 准备

- 下载react-router-dom: `npm install --save react-router-dom`
- 引入bootstrap.css: `<link rel="stylesheet" href="/css/bootstrap.css">`

### 使用

1. 明确好界面中的导航区、展示区
2. 导航区的a标签改为Link标签
  `<Link to="/xxxxx">Demo</Link>`
3. 展示区写Route标签进行路径的匹配
  `<Route path='/xxxx' component={Demo}/>`
4. `<App>`的最外侧包裹了一个`<BrowserRouter>`或`<HashRouter>`

### 路由组件与一般组件

1. 写法不同：
  一般组件：`<Demo/>`
  路由组件：`<Route path="/demo" component={Demo}/>`
2. 存放位置不同：
  一般组件：components
  路由组件：pages
3. 接收到的`props`不同：
  一般组件：写组件标签时传递了什么，就能收到什么
  路由组件：接收到三个固定的属性
       history:
          go: ƒ go(n)
          goBack: ƒ goBack()
          goForward: ƒ goForward()
          push: ƒ push(path, state)
          replace: ƒ replace(path, state)
       location:
          pathname: "/about"
          search: ""
          state: undefined
       match:
          params: {}
          path: "/about"
          url: "/about"

### `<NavLink/>`

1. NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
2. 标签体内容是一个特殊的标签属性`children`
3. 封装

    ```js
    <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
    ```

    使用

    ```js
    <MyNavLink to="/about">About</MyNavLink>
    ```

### `Switch`的使用

1. 通常情况下，path和component是一一对应的关系。
2. Switch可以提高路由匹配效率(单一匹配,不加 Swithc，会匹配全部 Route)。

### 解决多级路径刷新页面样式(public/css/bootstrap.css)丢失的问题

1. public/index.html 中 引入样式时不写 './' 写 '/' （常用）
2. public/index.html 中 引入样式时不写 './' 写 '%PUBLIC_URL%' （常用）
3. 使用`HashRouter`

### 路由的严格匹配与模糊匹配

1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）
2. 开启严格匹配：`<Route exact={true} path="/about" component={About}/>`
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

### `Redirect`的使用

1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2. 具体编码：

    ```jsx
      <Switch>
       <Route path="/about" component={About}/>
       <Route path="/home" component={Home}/>
       <Redirect to="/about"/>
      </Switch>
      ```

### 嵌套路由

1. 注册子路由时要写上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

### 向路由组件传递参数

1. `params`参数
   路由链接(携带参数)：`<Link to='/demo/test/tom/18'}>详情</Link>`
   注册路由(声明接收)：`<Route path="/demo/test/:name/:age" component={Test}/>`
   接收参数：`this.props.match.params`

2. `search`参数
   路由链接(携带参数)：`<Link to='/demo/test?name=tom&age=18'}>详情</Link>`
   注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" component={Test}/>`
   接收参数：`this.props.location.search`
   备注：获取到的`search`是`urlencoded`编码字符串，需要借助[querystring](../Webpack/querystring.md)解析

3. `state`参数
   路由链接(携带参数)：`<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>`
   注册路由(无需声明，正常注册即可)：`<Route path="/demo/test" component={Test}/>`
   接收参数：`this.props.location.state`
   备注：刷新也可以保留住参数（`BrowserRouter`将 `state` 保存在 `history` 对象中，清除缓存会出错）

### `Link` 的 `replace`模式

`<MyNavLink replace to="/about">About</MyNavLink>`
`<Link replace to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>`

### 编程式路由导航

 借助`this.prosp.history`对象上的API对操作路由跳转、前进、后退

- `this.prosp.history.push(path, state)`
- `this.prosp.history.replace(path, state)`
- `this.prosp.history.goBack()`
- `this.prosp.history.goForward()`
- `this.prosp.history.go(n)` //前进 N 步

### `withRouter`

- `withRouter` 可以加工一般组件，让一般组件具备路由组件所特有的 API
- `withRouter` 的返回值是一个新组件

 ```js
 import {withRouter} from 'react-router-dom'
 export default withRouter(Header)
 ```

### BrowserRouter与HashRouter的区别

   1. 底层原理不一样：
      `BrowserRouter`使用的是`H5`的`history API`，不兼容IE9及以下版本。
      `HashRouter`使用的是`URL`的哈希值。(#后的不会发送给服务器）
   2. `path`表现形式不一样
      `BrowserRouter`的路径中没有#,例如：`localhost:3000/demo/test`
      `HashRouter`的路径包含#,例如：`localhost:3000/#/demo/test`
   3. 刷新后对路由`state`参数的影响
      1. `BrowserRouter`没有任何影响，因为`state`保存在`history`对象中。
      2. `HashRouter`刷新后会导致路由`state`参数的丢失！！！
   4. 备注：`HashRouter`可以用于解决一些路径错误相关的问题。
