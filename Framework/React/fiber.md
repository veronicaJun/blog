# fiber

- react fiber 有哪些优点，怎样做到的
    - 解题：
        - 初阶：表象及基本原理
            - 优点：不会占用大块连续执行时间，能够更及时响应页面交互
            - 原本：一次性做完，setState 后立即开始 reconciliation 过程，完整遍历 vdom 找出diff，之后传递给renderer做渲染；
            - fiber：分批完成，diff 操作被划分为多个分批任务，所谓的分批是指做一段时间，cpu 交回给浏览器，之后再做一段时间，底层 requestIdleCallback接口

        - 中阶：底层原理
            - 为什么能实现任务中断？
                - 数据结构：vdom 升级为 fiber node
                    - 原来只保存子节点
                    - 现在会保存父节点、第一个子节点、兄弟节点，数据上就能保证从任意节点遍历整棵树
            - 流程：
                - setState 后创建更新任务，任务被加入任务队列中等待调度
                - 在 requestIdleCallback回调时执行任务
                - (可中断)render/reconciliation 通过构造 WorkInProgress Tree 得出 Change
                    - element => fiber tree
                - 生成 effectList
                - (不可中断)根据 effectList 更新dom
            - react 18 的变化
        - 高阶：
            - 与 vue 对比：
                - vue 中数据变更时，只会触发当前 component 重新执行render，不会影响子元素 —— 从而实现精确更新
                - react 节点更新会触发自顶向下更新
            - 如果对操作系统底层逻辑有过研究，可以展开聊聊“合作时调度”：把渲染更新过程拆分成多个子任务，每次只做一部分，昨晚如果有时间就继续，没有就先挂起，控制权交回主线程，等到不忙的时候再继续

    - 知识点：
        - render 阶段非同步；commit 阶段同步

    - 资料：
        - <http://www.ayqy.net/blog/dive-into-react-fiber/>
        - <https://7kms.github.io/react-illustration-series/main/fibertree-create>
        - <https://juejin.cn/post/7077545184807878692>
        - <https://medium.com/starbugs/react-%E9%96%8B%E7%99%BC%E8%80%85%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E5%BA%95%E5%B1%A4%E6%9E%B6%E6%A7%8B-react-fiber-c3ccd3b047a1>
