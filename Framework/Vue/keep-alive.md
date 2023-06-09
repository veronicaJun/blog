# keep-alive

- 说下 vue 的 keep alive
    - 解题：
        - 初阶：
            - 作用：优化性能 —— 通过缓存渲染结果，避免重复渲染
                - vnode、dom、组件实例 都会被缓存
                - 被缓存组件在下次渲染的时候，不会再触发生命周期钩子 —— created...
            - 用法：
                - include: 白名单
                - exclude: 黑名单
                - max: 最大的缓存实例数 —— LRU 算法
        - 中阶：实现原理
            - keep-alive 组件内部负责维护缓存逻辑
                - key：componentName /key/tag
                - render 的时候缓存节点 —— 放到 cache变量；vnode.keepalive=true；
                - 底层会用一套简单的 LRU 缓存控制
            - patch 判断 vnode.keepAlive 直接把 dom 插入到父元素
            - createComponent 阶段，判断 keepAlive 的值 直接调用 updateChildComponent 更新节点
        - 高阶：
            - patch/createComponent 阶段分别是什么？
            - react 相关实践
                - react-keep-alive
                - useMemo
    - 资料
        - <https://juejin.cn/post/6844903950886371342>
        - <https://juejin.cn/post/6844903837770203144>
        - <https://juejin.cn/post/6862206197877964807>
