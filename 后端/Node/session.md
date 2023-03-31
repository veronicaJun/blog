# session

## 3.1 session 是什么

session 是保存在 **服务器端的一块儿数据** ，保存当前访问用户的相关信息

## 3.2 session 的作用

实现会话控制，可以识别用户的身份，快速获取当前用户的相关信息

## 3.3 session 运行流程

填写账号和密码校验身份，校验通过后创建 **session 信息** ，然后将 **session_id** 的值通过响应头返回给浏览器
![img](../../../../ToDo/media/16787801822617/16789535367237.jpg)

有了cookie，下次发送请求时会**自动**携带cookie，服务器通过 **cookie** 中的 **session_id** 的值确定用户的身份
![img](../../../../ToDo/media/16787801822617/16789535601147.jpg)

## 3.4 session 的代码操作

express中可以使用 **express-session** 对session进行操作

```js
const express = require('express');
//1. 安装包 npm i express-session connect-mongo 
//2. 引入 express-session connect-mongo
const session = require("express-session");
const MongoStore = require('connect-mongo');
// 加密 npm i md5
const md5 = require('md5');
const app = express(); 
//3. 设置 session 的中间件 
app.use(session({
    name: 'sid', //设置cookie的name，默认值是:connect.sid
    secret: 'atguigu', //参与加密的字符串(又称签名)
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id 
    resave: true, //是否在每次请求时重新保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/project' //数据库的连接配置 
    }),
    cookie: {
        httpOnly: true, // 开启后前端无法通过 JS 操作
        maxAge: 1000 * 300 // 这一条 是控制 sessionID 的过期时间的!!!
    }, 
}))
//注册
app.post('/reg', (req, res) => {
    UserModel.create({...req.body, passsword: md5(req.body.password)},(err,data)=>{
        if(err){
            res.status(500).send('注册失败，请稍后再试~');
            return;
        }
        res.render('success',{msg: '注册成功',url: '/login'});
    })
})
//登录
//创建 session
app.get('/login', (req, res) => {
    let {username, password} = req.body
    UserModel.findOne({username:username, password: md5(password)}, 
    (err,data)=>{
        if(err){
            res.send('登录失败');
            return;
        }
        
        //设置session
        req.session.username = 'zhangsan'; 
        req.session.email = 'zhangsan@qq.com' 
        res.render('success',{msg: '登录成功',url: '/account'});
    })
})
//获取 session
app.get('/home', (req, res) => {
    console.log('session的信息'); 
    console.log(req.session.username); 
    if (req.session.username) {
        res.send(`你好 ${req.session.username}`); 
    }else{
        res.send('登录 注册'); 
    }
})
//销毁 session
app.get('/logout', (req, res) => {
    //销毁session
    // res.send('设置session'); 
    req.session.destroy(() => {
        res.send('成功退出'); 
    });
});
app.get('/',(req, res) => {
    res.redirect('/account')
})
app.listen(3000, () => {
    console.log('服务已经启动, 端口 ' + 3000 + ' 监听中...');
});
```
