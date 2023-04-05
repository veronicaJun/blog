# vue 与 react 的区别

1. vue 与 react
    react 用于构建用户界面的 JS 库
    Vue 渐进式 js 框架
2. diffing算法
3. 生命周期
    - react生命周期的三个阶段
        1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
            - constructor()
            - getDerivedStateFromProps
            - render()
            - componentDidMount()
        2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
            - getDerivedStateFromProps
            - shouldComponentUpdate()
            - render()
            - getSnapshotBeforeUpdate
            - componentDidUpdate()
        3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
            - componentWillUnmount()

    重要的勾子
        - render：初始化渲染或更新渲染调用
        - componentDidMount：开启监听, 发送ajax请求
        - componentWillUnmount：做一些收尾工作, 如: 清理定时器
4. router
5. vuex,redux,mobx,

-
