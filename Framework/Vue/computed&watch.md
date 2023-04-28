# computed & watch

- 问题：vue 的 computed 和 watch 的区别
    - 解题：
        - 初阶：表象
            - 能说出 computed、watch 都是基于 vue 的响应式系统实现的，都能在数据发生变化时做出响应，两者差别更多体现在语义上
                - Computed 是根据已有值计算一个新的值
                - Watch 是在数值发生变化的时候，执行一些 side effect 操作
            - 其次，computed 计算出的值可以直接渲染到 html 中
        - 中阶：原理
            - 其实 computed 属性底层也是依赖于 watcher 对象实现的，是同一套底层逻辑的不同应用
            - 响应式系统 —— 劫持数据获取、修改时机
            - 为 Computed 属性创建 watcher
            - watcher 在计算值的时候，会收集计算过程用到的依赖属性 —— dep 对象
            - 依赖属性变更时，触发 dep.notify，最终触发 watcher.update 函数，重新计算值
        - 高阶：
            - 说出 Vue3 与 Vue2 实现上的区别；
            - 横向对比：react useMemo 与 usecallback；可以用 mobx 的computed属性，或者 rxjs 实现

- 参考资料：
    - [](https://vuejs.org/guide/essentials/watchers.html#basic-example)
    - [](https://www.cnblogs.com/tugenhua0707/p/11760466.html)
    - [](https://juejin.cn/post/6844903603497336845)

