# react router 和 vue router

- 相同点
    1. 工作原理都相同
       1. 都是基于 window.history 实现的。
       2. 跳转页面时，通过 window.history.pushState、window.history.replaceState、window.location.hash、window.location.replace 添加或修改历史记录，然后重新渲染页面。
       3. 浏览器的前进、回退按钮或者调用 go、back、forward 等方法时，会触发 popstate、hashchange 事件，然后重新渲染页面。
       4. 在整个应用过程中，会构建一个 location 对象来保存页面的 url 信息。 这个 location 对象是响应式的，当发生页面跳转时，更新 location 对象，然后触发页面重新渲染。
    2. 都有 hash 模式和 history 模式
    3. 都支持编程式导航
       1. vue router，在页面组件中访问 router 实例 (this.$router) 的 push、replace、back、go、forward 方法实现编程式导航。
       2. react router，在页面组件中访问 history 实例 (this.props.history，hooks) 的 push、replace、back、go、forward 方法实现编程式导航。
    4. 都可以在页面组件中访问当前 url 信息
       1. vue router，在页面组件中通过组件实例的 $route 属性 访问
       2. react router，在页面组件中通过 props.location 或者 hooks 获取 location 对象访问
    5. 都支持动态路由匹配
       1. vue router，通过 $route.params 访问动态路由参数。
       2. react router，在页面组件中通过 props.match.params 或者 hooks 获取 params 对象来访问动态路由参数。
    6. 都支持嵌套路由
    7. 都支持路由懒加载
        - 都需要 webpack 等工具的配合，且都是基于动态构建 script 元素加载 js 文件的方式实现的。
- 不同点
    1. 页面跳转(渲染) 触发机制不同 todo 看不懂
        - 原因：vue 和 react 两者响应式实现的原理不同
        - 使用 vue router 时，在 应用启动过程 中，会给 根 vue 实例 构建一个响应式属性 $route 来保存 页面 url 信息。 $route 属性 会维护一个 依赖列表 - deps，使用 router-view  的组件都会添加到 deps 中。当我们通过 push(replace) 跳转页面 或者 激活历史记录 时， 都会修改$route, 然后通知 deps 中的 组件 更新， 重新渲染页面。
        - 使用 react router 时， Router 组件在渲染时会构建一个组件实例并初始化。初始化过程中，会定义 state.location 来保存页面 url 信息。当我们通过 push(replace) 跳转页面或者激活历史记录时，会通过 setState 方法更新 state.location，然后触发更新，重新渲染页面。

    2. hash 模式的实现不同
        1. react router 的 hash 模式，是基于 window.location.hash(window.location.replace) 和 hashchange 实现的。当通过 push 方式 跳转页面时，直接修改 window.location.hash，然后渲染页面； 当通过 replace 方式 跳转页面时，会先构建一个 修改 hash 以后的临时 url，然后使用这个 临时 url 通过 window.location.replace 的方式 替换当前 url，然后渲染页面；当 激活历史记录导致 hash 发生变化时，触发 hashchange 事件，重新 渲染页面。
        2. 和 react router 不同，vue router 的 hash 模式，是先通过 pushState(replaceState) 在浏览器中 新增(修改)历史记录，然后渲染页面。 当 激活某个历史记录 时， 触发 popstate 事件，重新 渲染页面。 如果 浏览器不支持 pushState，才会使用 window.location.hash(window.location.replace) 和 hashchange 实现。

    3. history 模式不支持 pushState 的处理方式不同
        1. 使用 react router 时，如果 history 模式 下 不支持 pushState， 会通过 重新加载页面(window.location.href = href)的方式实现页面跳转。
        2. 使用 vue router 时，如果 history 模式 下 不支持 pushState，会根据 fallback 配置项 来进行下一步处理。 如果 fallback 为 true， 回退到 hash 模式；如果 fallback 为 false， 通过 重新加载页面的方式实现页面跳转。

    4. 路由拦截的实现不同
       1. vue router 提供了 全局守卫、路由守卫、组件守卫 供我们实现 路由拦截。
       2. react router 没有提供类似 vue router 的 守卫 供我们使用，不过我们可以 在组件渲染过程中自己实现路由拦截。 如果是 类组件， 我们可以在 componentWillMount 或者 getDerivedStateFromProps 中通过 props.history 实现 路由拦截； 如果是 函数式组件，在函数方法中通过 props.history 或者 useHistory 返回的 history 对象 实现 路由拦截。

    5. 懒加载实现过程不同
       1. vue router 在 路由懒加载 过程中，会 先去获取懒加载页面对应的js文件。等 懒加载页面对应的js文件加载并执行完毕，才会开始 渲染懒加载页面。
       2. react router 在 路由懒加载 过程中， 会 先去获取懒加载页面对应的js文件，然后 渲染 loading 页面。 等 懒加载页面对应的js文件加载并执行完毕，触发更新，渲染懒加载页面。
    6. 静态路由配置
        1. vue router 使用的时候，会先通过 VueRouter 构建一个 router 实例。构建 router 实例的时候， 需要传入一个 静态路由配置 - routes，用于建立 path 和 component、name 和 component 以及 父子页面 之间的 映射关系。 当我们跳转页面时， 会先根据提供的 path(name) 找到匹配的页面组件(及子页面组件)，然后确定页面的 url，再将 router-view 组件渲染为相应的页面。
        2. vue-router 的这种机制，导致 同级路由， 一般只需要一个 router-view 组件 即可。
        3. react router 不同，它 没有使用静态路由配置。当我们跳转页面时，由于没有静态路由配置，无法立即根据跳转提供的 pathname 立即找到匹配的页面，只能在渲染过程中，遍历 Route 组件，一个个做匹配，然后渲染 匹配的 Route 组件及页面组件。
        4. react-router 的这种机制，导致 有多少个同级路由， 一般就需要多少个 Route 组件。

- [参考文档](https://juejin.cn/post/6844904025012322318)
