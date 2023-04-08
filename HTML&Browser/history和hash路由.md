# history 和 hash 路由

- why
    - AJAX 无缝刷新 url 不变化
    - 下次使用 URL 访问时将无法重新呈现页面
    - 单页应用避免了页面重载，路由提供了浏览器地址变化，网页也跟着变化的能力。
- 路由的作用
    1. 浏览器地址变化时，切换页面
    2. 点击浏览器的前进后退按钮时，切换页面
    3. 刷新浏览器，页面加载当前路由对应的内容
- 路由的实现
    - hash 模式
        - 使用 window.onhashchange 监听变更事件，做出反应；直接修改页面 hash，改变路由位置
        - 不会带到服务端，无法做SSR
        - 不利于做 seo；失去原生页面锚点定位能力
        - 兼容IE8
        - 不需要服务端兼容处理
        - 注：  
            - hashchange 事件只有在hash变化的时候才会触发，所以初始化时还需要额外监听 load 事件
    - history 模式
        - 使用 HTML5 History API 的 popState 监听路由变化；使用 pushState()和 replaceState()方法
        - history 对服务端来说与普通url一致，可以做 ssr，容易做seo优化
        - history 可以携带 state 对象，hash只能带字符串
        - 兼容 IE10
        - 需要服务端做兼容处理
        - 注：
            - pushState、replaceState 都不会触发 popState 事件
                - 监听所有 a 路由的click事件，拦截，调用 pushState 更改路由
                - 拦截 history 原生 pushState、replaceState 方法，为它们添加事件特性

                ```js
                const listener = function (type) {
                    var orig = history[type];
                    return function () {
                        var rv = orig.apply(this, arguments);
                        var e = new Event(type);
                        e.arguments = arguments;
                        window.dispatchEvent(e);
                        return rv;
                    };
                };
                window.history.pushState = listener('pushState');
                window.history.replaceState = listener('replaceState');
                ```

- 拓展
    - vue-router实现原理
    - react-router实现原理
