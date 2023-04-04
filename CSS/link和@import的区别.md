# `link`和`@import`的区别

1. 范围
    - link 是 HTML 标签，除了能够加载 CSS，还可以定义 RSS 等其他事务；
    - @import 属于 CSS 范畴，只可以加载 CSS。
2. 加载
    - link 引用时，在页面载入时同时加载；
    - @import 需要页面完全载入以后再加载。
3. 兼容性
    - link 是 HTML 标签，无兼容问题；
    - @import 则是在 CSS2.1 提出的，低版本的浏览器不支持。
4. JS 支持
    - link 支持使用 Javascript 控制 DOM 改变样式；
    - 而 @import 不支持。
