# React HOC

- 关键字
    #react
    #hoc
- 解答
    ● 初阶：
        能解释高阶组件概念，
        能列举一些示例，例如 react-router 的 withRouter，或者给组件自动加上 Loading 态、错误态，日志打点；
        能说清楚怎么开发一个 HOC 组件；
    ● 中阶：如何写好 HOC：
        ○ 适用场景
            ■ 修改默认 props，例如：使用开源组件库，可以用HOC 重写默认 props
        ○ 最佳实践：
            ■ 内外组件保持 props 一致，保持直接透传
            ■ 不要以任何方式改变原始组件 WrappedComponent
            ■ 不要再 render() 方法中使用高阶组件
            ■ 使用 compose 组合高阶组件
            ■ 包装显示名字以便于调试
            ■ 始终拷贝静态属性；
            ■ 不要在 render 中创建高阶组件
        ○ 缺点：
            ■ 容易出现嵌套地狱 hoc1(hoc2(hoc3(comp)))
    ● 高阶：mixin => hoc => hook，其实是复用粒度 对象级别=>函数级别=>功能点 的过程
        ○ HOC 与 FP 的关系：
            ■ 无限接近 FP 的高阶函数概念，那高阶函数这种模式有什么优点呢：逻辑复用，关注点分离等，也就是底层实现一个原子函数，中间可以嵌套更多复杂、可复用的逻辑
        ○ HOC 与 mixin：
            ■ mixin 本质是将一个对象的属性、函数拷贝到另一个对象上；
            ■ 多个mixin容易出现冲突；mixin 间可能存在互相依赖；
            ■ 高阶组件理论上是一个没有副作用的纯函数，HOC 间不存在依赖；
        ○ HOC 与 hook：都是逻辑复用手段
            ■ HOC 容易出现嵌套地狱，hook 更灵活易用，很多开源框架如 react-router 已经由以前的 HOC 切换为 hook
            ■ HOC 有太多需要遵循的约定，协作成本较高；
            ■ HOC 很容易包装 shouldComponentUpdate，hook 目前为止还没有合适的手段；
            ■ HOC 很容易实现渲染劫持

- why
    - 解决什么问题
    - 高阶组件的主要功能是封装并分离组件的通用逻辑，让通用逻辑在组件间更好地被复用
    - 使用场景：用于与核心业务无关但又在多个模块使用的功能，如权限控制、日志记录、数据校验、异常处理、统计上报等
    - 高阶组件的问题：
- when
- what
    - [高阶函数](../../JS/高阶函数.md)
    - 高阶组件：即接受一个或多个组件作为参数并且返回一个组件的函数
    - 通过对传入的原始组件 WrappedComponent 做一些你想要的操作（比如操作 props，提取 state，给原始组件包裹其他元素等），从而加工出想要的组件 EnhancedComponent
- where
    - [Mixins](./mixins.md)
    - [Hooks](../hooks.md)
- how
    - 代码示例：

        ```js
        import React, { Component } from 'react';

        export default (WrappedComponent) => {
        return class EnhancedComponent extends Component {
            // do something
            render() {
            return <WrappedComponent />;
            }
        }
        }
        ```
