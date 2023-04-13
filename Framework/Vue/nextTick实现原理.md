# nextTick 实现原理

#nextTick

- 解题：
    - 初阶：说清楚 nextTick 作用 & 基本原理
        - 原理：判断浏览器接口，按 promise/mutationObserver/setImmediate/setTimeout 执行
        - 作用：与 setTimeout 类似，在下次 idle 的时候执行，典型场景是修改数据之后没法立刻响应到 dom 上，可以用 nextTick 延迟获取dom内容
    - 中阶：扩展开来
        - 聊聊不同接口 promise/mutationObserver/setImmediate/setTimeout 的区别
        - 聊聊js原生事件循环与 nextTick 的关联
- nextTick 原理
    - 判断浏览器接口
        - 支持 promise 就用，否则下一步
        - 支持 mutationObserver 就用，否则下一步
        - 支持 setImmediate 就用(只有最新版IE和node支持)，否则下一步
        - setTimeout
    - 执行
- 关联
    - [事件循环机制](./JS/事件循环机制.md)