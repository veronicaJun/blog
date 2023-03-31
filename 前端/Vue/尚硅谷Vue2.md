# 尚硅谷 Vue2
                [Toc]

## 脚手架文件结构

 ├──00_html: 非脚手架环境代码
 ├──dd_src_xxx: 按小节存储的 src 文件
 ├── node_modules
 ├── public
 │   ├── favicon.ico: 页签图标
 │   └── index.html: 主页面
 ├── src
 │   ├── assets: 存放静态资源
 │   │   └── logo.png
 │   │── component: 存放组件
 │   │   └── HelloWorld.vue
 │   │── App.vue: 汇总所有组件
 │   │── main.js: 入口文件
 ├── .gitignore: git版本管制忽略的配置
 ├── babel.config.js: babel的配置文件
 ├── package.json: 应用包配置文件
 ├── README.md: 应用描述文件
 ├── package-lock.json：包版本控制文件

## 关于不同版本的Vue

1. vue.js与vue.runtime.xxx.js的区别：
    1. vue.js是完整版的Vue，包含：核心功能 + 模板解析器。
    2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
2. 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template这个配置项，需要使用render函数接收到的createElement函数去指定具体内容。

## vue.config.js配置文件

1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：<https://cli.vuejs.org/zh>

## ref指令

1. id 的替代
2. 在标签上,获得的是 dom 元素;在组件上,获得的是 VueComponent 对象实例.
3. 使用方式:
    标记: `<h1 ref="xxx" ></h1>`
    获取: `this.#refs.xxx`

## props : 让组件接收外部传入的数据

1. 传递数据

```js
<Demo name="xxxx"/>
```

> 注: number 类型, 用 ' :age="18" '

2. 接收数据

```js
// 简单接收
props:['name','address','amount'] 
// 限制类型
props:{
    name: String
}
// 限制类型 和 必要性
props:{
    name: {
        type: String,
        required: true  // 必传
    }
    amount: {
        type: String,
        default: 0 // 默认值, 和 required 不同时出现
    }
}
```

> 注: props 只读

## mixin : 把多个组件共用的配置提前到一个混合对象

定义:

```js
{
    data(){...},
    methods:{...},
    ...
}
```

使用:

```js
//全局
Vue.mixin(mixin)
//局部
import {mixin} from '../mixin.js';
export default {
    mixins: [mixin],
}
```

## plugin : 增强 vue

本质: 包含 install 方法的一个对象, install(vue,插件使用者传染地的数据)
定义:

```js
obj.install = function (Vue, options){
    
    Vue.filter(...) // 全局过滤器
    
    Vue.directive(...)  // 定义全局指令
    
    Vue.mixin(...)  // 定义混入
    
    Vue.prototype.hello = xxx   // 给 vue 原型上添加方法
}
```

使用:
`Vue.use(plugin)`

## scoped : 让样式局部生效,防止冲突

```js
<style scoped>
</style>
```

## TODOLIST 案例

1. 组件化编码流程:
    1. 拆分静态组件: 按照功能点拆分, 命名不要与 `html` 元素冲突
    2. 实现动态组件: 通用数据放在父组件中(状态提升), 非通用数据放在组件自身中
    3. 实现交互: 从绑定事件监听开始

2. `props` 适用于:
    1. 父组件 ==> 子组件 通信
    2. 子组件 ==> 父组件 通信 (父给子一个函数)

3. 使用 `v-modal` 时, 不能绑定 `props`

4. `props` 是对象类型时, 修改对象中的属性, vue 不会报错, 不建议修改

## 自定义事件 : 组件间通信方式, 适用于 子 ===> 父

1. 事件回调在 父组件 中
2. 绑定方式:
    1. 方式一: 父组件 中使用 `v-on` 或 `@`

    ```js
    <Student v-on:getStudentName="getStudentName" 
            @event1="hendleEvent1">
            </Student>
    ```

    2. 方式二: 父组件 中使用 `$ref.xxx.$on`

    ```js
    <Student ref="student"></Student>
    ```

    > 注: 若只触发一次,使用 once 或 $once 修饰符

3. 触发: `this.$emit('event',param1,param2,param3)`
4. 解绑: `this.$off()` / `this.$off('event')` / `this.$off(['event1', 'event2', 'event3'])`
5. 组件上绑定原生事件, 需要使用 native 修饰符

> 注: 使用 `this.$refs.xxx.$on` 时, 回调函数的作用域, 建议回调卸载 `methods` 中, 使用匿名函数写成箭头函数

## 全局数据总线 GlobalEventBus : 组件间通信方式, 适用于 任意组件间

安装数据总线

```js
new Vue({
    ...
    beforeCreate () {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
```

接收数据:

```js
methods:{
    reseiveData(data) {
        ...
    }
},
mounted(){
    this.$bus.$on('event', this.receiveData)
}
```

发送数据:

```js
methods:{
    sendData(data) {
        this.$bus.$emit('event', data)
    }
}
```

> 注: 最好在  beforeDestroy 中 解绑

## 消息订阅与发布 pubsub : 组件间通信方式, 适用于 任意组件间

安装: `npm i pubsub-js`
引入: `import pubsub from "pubsub-js"`
接收数据:

```js
methods:{
    reseiveData(data) {
        ...
    }
},
mounted(){
    this.pubid = pubsub.subscribe('event', this.receiveData)
},
destory(){
    pubsub.unsubscribe(this.pubid)
}
```

发送数据:

```js
methods:{
    sendData(data) {
        pubsub.publish('event', data)
    }
}
```

> 注: 在 Vue 中, 使用 GlobalEventBus

## nextick

语法: `this.$nextick(function)`
作用: 下一次DOM 更新结束后执行指定回调
时机: 当改变数据后, 需要对更新后的 DOM 进行操作

## Vue 封装的过渡与动画

作用: 在插入/更新/移除元素时, 在合适的时机给元素添加上样式类名
使用:
    1. 准备好样式: `v-enter`,`v-leave-to`,`v-enter-to`,`v-leave`,`v-enter-active`,`v-leave-active`
    2. 使用 `transition` 包裹元素, 并配置 `name`
> 注: 多个元素使用 `transition-group`, 并且每个元素需要配置 `key`

## Vue-cli 的服务代理 : vue.config.js中配置

### 1. 方式一

```js
devServer: {
    proxy: 'http://localhost:5000'
}
```

缺点: 不能配置多个, 不能指定是否代理

### 2. 方式二

```js
devServer: {
    proxy: {
        '/api': {   //匹配以 /api 开头的请求路劲
            target: 'http://localhost:5000',
            changeOrigin: true, //是否如实告知对方代理服务器的端口号
            pathRewrite: { '^/api': '' }  //将添加的/api前缀删除
        }
    }
}
```

缺点: 请求资源时必须加前缀

## slot : 让 父组件 可以向 子组件 指定的位置插入 html 结构

### 1.默认插槽

```js
//父组件
<Category title="美食">
    <img src="" alt="img">
</Category>
```

```js
//子组件
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot></slot>
    </div>
</template>
```

### 2. 具名插槽

父组件

```js
<Category title="美食">
    <a slot="slot" href="">更多美食</a>
</Category>
```

子组件

```js
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot name="slot"></slot>
    </div>
</template>
```

### 3. 作用域插槽: 父组件决定结构, 子组件决定数据

父组件

```js
<Category title="游戏">
    <template scope="data">
        <ul>
        <li v-for="(item,index) in data.games" 
        :key="index">{{item}}</li>
        </ul>
    </template>
</Category>

<Category title="游戏">
<template slot-scope={games}>
    <h4 v-for="(item,index) in games" 
    :key="index">{{item}}</h4>
</template>
</Category>
```

子组件: 数据 games 在子组件中

```js
<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <slot :games="games"></slot>
    </div>
</template>
```

## Vuex

### 1. `Vuex` 是 集中式 状态(数据)管理的 `Vue` 插件, 使用与任意组件通信

1. `EventBus` 适用于 一个数据多方查看, 当一个数据多方修改时, 容易造成数据混乱, `Vuex` 将数据及对应方法封装在一起, 由 `Vuex` 统一提供或修改数据
2. 在不涉及数据请求时, `Vuex` 允许 组件 直接调用 `mutations`

### 2. 搭建vuex环境

1. 创建文件：```src/store/index.js```

```js
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
const actions = {}
//准备mutations对象——修改state中的数据
const mutations = {}
//准备state对象——保存具体的数据
const state = {}

//创建并暴露store
export default new Vuex.Store({
actions,
mutations,
state
})
```

2. 在```main.js```中创建vm时传入```store```配置项

```js
......
//引入store
import store from './store'
......

//创建vm
new Vue({
el:'#app',
render: h => h(App),
store
})
```

### 3. 基本使用

1. 初始化数据、配置```actions```、配置```mutations```，操作文件```store.js```

```js
//引入Vue核心库
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//引用Vuex
Vue.use(Vuex)

const actions = {
    //响应组件中加的动作
jia(context,value){
    // console.log('actions中的jia被调用了',miniStore,value)
    context.commit('JIA',value)
},
}

const mutations = {
    //执行加
JIA(state,value){
    // console.log('mutations中的JIA被调用了',state,value)
    state.sum += value
}
}

//初始化数据
const state = {
    sum:0
}

//创建并暴露store
export default new Vuex.Store({
actions,
mutations,
state,
})
```

2. 组件中读取vuex中的数据：`$store.state.sum`

3. 组件中修改vuex中的数据：`$store.dispatch('action中的方法名',数据)` 或 `$store.commit('mutations中的方法名',数据)`

> 注: 若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写`dispatch`，直接编写`commit`
>
### 4. getters : 当 state 中的数据需要加工后再使用, 而且需要被复用, 可以使用 getters 加工, 类似 computed

1. 在```store.js```中追加```getters```配置

```js
......

const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    ......
    getters
})
```

2. 组件中读取数据：`$store.getters.bigSum`

### 5. mapper

1. `mapState`: 映射`state`中的数据为计算属性

```js
computed: {
    ...mapState({sum:'sum',school:'school',subject:'subject'}),
            
    ...mapState(['sum','school','subject']),
},
```

2. `mapGetter`: 映射`getters`中的数据为计算属性

```js
computed: {
    ...mapGetters({bigSum:'bigSum'}),

    ...mapGetters(['bigSum'])
},
```

3. `mapActions`: 生成与`actions`对话的方法，即：包含`$store.dispatch(xxx)`的函数

```js
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

    //靠mapActions生成：incrementOdd、incrementWait（数组形式）
    ...mapActions(['jiaOdd','jiaWait'])
}
```

4. `mapMutations`: 生成与`mutations`对话的方法，即：包含`$store.commit(xxx)`的函数

```js
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
    //靠mapMutations生成：JIA、JIAN（对象形式）
    ...mapMutations(['JIA','JIAN']),
}
```

> 注：`mapActions`与`mapMutations`使用时，若需要传递参数需要：在模板中绑定事件时传递好参数，否则参数是事件对象

### 6. 模块化+命名空间

1. 目的：让代码更好维护，让多种数据分类更加明确。

2. 修改```store.js```

   ```javascript
   const countAbout = {
     namespaced:true,//开启命名空间
     state:{x:1},
     mutations: { ... },
     actions: { ... },
     getters: {
       bigSum(state){
          return state.sum * 10
       }
     }
   }
   
   const personAbout = {
     namespaced:true,//开启命名空间
     state:{ ... },
     mutations: { ... },
     actions: { ... }
   }
   
   const store = new Vuex.Store({
     modules: {
       countAbout,
       personAbout
     }
   })
   ```

3. 开启命名空间后，组件中读取state数据：

   ```js
   //方式一：自己直接读取
   this.$store.state.personAbout.list
   //方式二：借助mapState读取：
   ...mapState('countAbout',['sum','school','subject']),
   ```

4. 开启命名空间后，组件中读取getters数据：

   ```js
   //方式一：自己直接读取
   this.$store.getters['personAbout/firstPersonName']
   //方式二：借助mapGetters读取：
   ...mapGetters('countAbout',['bigSum'])
   ```

5. 开启命名空间后，组件中调用dispatch

   ```js
   //方式一：自己直接dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   //方式二：借助mapActions：
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```

6. 开启命名空间后，组件中调用commit

   ```js
   //方式一：自己直接commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   //方式二：借助mapMutations：
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
   ```

## 路由

1. 理解： 一个路由（route）就是一组映射关系（key - value），多个路由需要路由器（router）进行管理。
2. 前端路由：key是路径，value是组件。

### 1.基本使用

1. 安装vue-router，命令：```npm i vue-router```

2. 应用插件：```Vue.use(VueRouter)```

3. 编写router配置项:

```js
//引入VueRouter
import VueRouter from 'vue-router'
//引入Luyou 组件
import About from '../components/About'
import Home from '../components/Home'

//创建router实例对象，去管理一组一组的路由规则
const router = new VueRouter({
routes:[
    {
        path:'/about',
        component:About
    },
    {
        path:'/home',
        component:Home
    }
]
})

//暴露router
export default router
```

4. 实现切换（active-class可配置高亮样式）

```vue
<router-link active-class="active" to="/about">About</router-link>
```

5. 指定展示位置

```vue
<router-view></router-view>
```

### 2.几个注意点

1. 路由组件通常存放在`pages`文件夹，一般组件通常存放在`components`文件夹。
2. 通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载。
3. 每个组件都有自己的`$route`属性，里面存储着自己的路由信息。
4. 整个应用只有一个router，可以通过组件的`$router`属性获取到。

### 3.多级路由（多级路由）

1. 配置路由规则，使用children配置项：

```js
routes:[
{
    path:'/about',
    component:About,
},
{
    path:'/home',
    component:Home,
    children:[ //通过children配置子级路由
        {
            path:'news', //此处一定不要写：/news
            component:News
        },
        {
            path:'message',//此处一定不要写：/message
            component:Message
        }
    ]
}
]
```

2. 跳转（要写完整路径）：

```vue
<router-link to="/home/news">News</router-link>
```

### 4.路由的query参数

1. 传递参数

```vue
<!-- 跳转并携带query参数，to的字符串写法 -->
<router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
            
<!-- 跳转并携带query参数，to的对象写法 -->
<router-link 
:to="{
    path:'/home/message/detail',
    query:{
        id:666,
            title:'你好'
    }
}"
>跳转</router-link>
```

2. 接收参数：

```js
$route.query.id
$route.query.title
```

### 5.命名路由

1. 作用：可以简化路由的跳转。

2. 如何使用

   1. 给路由命名：

      ```js
      {
       path:'/demo',
       component:Demo,
       children:[
        {
         path:'test',
         component:Test,
         children:[
          {
           name:'hello' //给路由命名
           path:'welcome',
           component:Hello,
          }
         ]
        }
       ]
      }
      ```

   2. 简化跳转：

      ```vue
      <!--简化前，需要写完整的路径 -->
      <router-link to="/demo/test/welcome">跳转</router-link>
      
      <!--简化后，直接通过名字跳转 -->
      <router-link :to="{name:'hello'}">跳转</router-link>
      
      <!--简化写法配合传递参数 -->
      <router-link 
       :to="{
        name:'hello',
        query:{
           id:666,
                  title:'你好'
        }
       }"
      >跳转</router-link>
      ```

### 6.路由的params参数

1. 配置路由，声明接收params参数

```js
{
path:'/home',
component:Home,
children:[
    {
        path:'news',
        component:News
    },
    {
        component:Message,
        children:[
            {
                name:'xiangqing',
                path:'detail/:id/:title', //使用占位符声明接收params参数
                component:Detail
            }
        ]
    }
]
}
   ```

2. 传递参数

```vue
<!-- 跳转并携带params参数，to的字符串写法 -->
<router-link :to="/home/message/detail/666/你好">跳转</router-link>
            
<!-- 跳转并携带params参数，to的对象写法 -->
<router-link 
:to="{
    name:'xiangqing',
    params:{
        id:666,
            title:'你好'
    }
}"
>跳转</router-link>
```

> 特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

3. 接收参数：

```js
$route.params.id
$route.params.title
```

### 7.路由的props配置

​ 作用：让路由组件更方便的收到参数

```js
{
    name:'xiangqing',
    path:'detail/:id',
    component:Detail,

    //第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
    // props:{a:900}

    //第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给Detail组件
    // props:true
    
    //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
    props(route){
        return {
            id:route.query.id,
            title:route.query.title
        }
    }
}
```

### 8.```<router-link>```的replace属性

1. 作用：控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式：分别为```push```和```replace```，```push```是追加历史记录，```replace```是替换当前记录。路由跳转时候默认为```push```
3. 如何开启```replace```模式：```<router-link replace .......>News</router-link>```

### 9.编程式路由导航

1. 作用：不借助```<router-link>```实现路由跳转，让路由跳转更加灵活

2. 具体编码：

```js
//$router的两个API
this.$router.push({
name:'xiangqing',
    params:{
        id:xxx,
        title:xxx
    }
})

this.$router.replace({
name:'xiangqing',
    params:{
        id:xxx,
        title:xxx
    }
})
this.$router.forward() //前进
this.$router.back() //后退
this.$router.go() //可前进也可后退
```

### 10.缓存路由组件

1. 作用：让不展示的路由组件保持挂载，不被销毁。

2. 具体编码：

```vue
<!-- include 里 放组件名 -->
<!-- 缓存一个 -->
<!-- <keep-alive include="News">   -->

<!-- 缓存多个 -->
<!-- <keep-alive :include="['News','Message']"> -->

<!-- 缓存全部 -->
<keep-alive>
    <router-view></router-view>
</keep-alive>
```

### 11.两个新的生命周期钩子

1. 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。
2. 具体名字：
   1. ```activated```路由组件被激活时触发。
   2. ```deactivated```路由组件失活时触发。

### 12.路由守卫

1. 作用：对路由进行权限控制

2. 分类：全局守卫、独享守卫、组件内守卫

3. 全局守卫:

```js
//全局前置守卫：初始化时执行、每次路由切换前执行
router.beforeEach((to,from,next)=>{
console.log('beforeEach',to,from)
if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
    if(localStorage.getItem('school') === 'atguigu'){ //权限控制的具体规则
        next() //放行
    }else{
        alert('暂无权限查看')
        // next({name:'guanyu'})
    }
}else{
    next() //放行
}
})

//全局后置守卫：初始化时执行、每次路由切换后执行
router.afterEach((to,from)=>{
console.log('afterEach',to,from)
if(to.meta.title){ 
    document.title = to.meta.title //修改网页的title
}else{
    document.title = 'vue_test'
}
})
```

4. 独享守卫:

```js
beforeEnter(to,from,next){
console.log('beforeEnter',to,from)
if(to.meta.isAuth){ //判断当前路由是否需要进行权限控制
    if(localStorage.getItem('school') === 'atguigu'){
        next()
    }else{
        alert('暂无权限查看')
        // next({name:'guanyu'})
    }
}else{
    next()
}
}
```

5. 组件内守卫：

```js
//进入守卫：通过路由规则，进入该组件时被调用
beforeRouteEnter (to, from, next) {
    // 鉴权
},
//离开守卫：通过路由规则，离开该组件时被调用
beforeRouteLeave (to, from, next) {
}
```

### 13.路由器的两种工作模式

1. 对于一个url来说，什么是hash值？—— #及其后面的内容就是hash值。
2. hash值不会包含在 HTTP 请求中，即：hash值不会带给服务器。
3. hash模式：
   1. 地址中永远带着`#`号，不美观 。
   2. 若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。
   3. 兼容性较好。
4. history模式：
   1. 地址干净，美观 。
   2. 兼容性和hash模式相比略差。
   3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。

```js
    mode: 'hash' // 'history'
```

Vue UI 组件库
移动端
Vant
Cube UI
Mint UI

PC端
Element UI
IView UI
