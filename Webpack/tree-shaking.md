# tree shaking

- 解题：
    - 初阶：
        - 说清楚 tree shaking 是什么，为什么需要 tree-shaking；
        - 说清楚在 webpack or rollup 中如何启动 tree-shaking；

            ```webpack.config.js
            module.exports = {
                entry: "./src/index",
                mode: "production",
                devtool: false,
                optimization: {
                    usedExports: true,
                },
            };
            ```

    - 中阶：
        - 基本原理是怎么样的，有什么限制条件，为什么强依赖于 ESM
            - ESM 下模块之间的依赖关系是高度确定的，与运行状态无关，编译工具只需要对 ESM 模块做静态分析，就可以从代码字面量中推断出哪些模块值未曾被其它模块使用
        - 聊聊哪些特殊场景无法被 ts
            - CMD/AMD 模块化方案
            - 被用在赋值语句的导出也不会 ts
            - IIEF 也不会 TS，可以手动标记 ##PURE
            - 禁止 babel 转译导入导出语句
            - 优化导出粒度

                ```js
                export default {
                    bar: 'bar',
                    foo: 'foo'
                }

                const bar = 'bar'
                const foo = 'foo'

                export {
                    bar,
                    foo
                }
                ```

    - 高阶：能说出 webpack or rollup 是怎么实现 tree-shaking的
        - 标记 —— 收集模块导出了哪些内容
            - Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中
            - Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用
            - 生成产物时，若变量没有被其它模块使用则删除对应的导出语句
        - Terser 删掉这些没被用到的导出语句

- 知识点：
    - Tree-Shaking 是一种基于 ES Module 规范的 Dead Code Elimination 技术，它会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化。
- 参考文档
    - [](https://mp.weixin.qq.com/s/McigcfZyIuuA-vfOu3F7VQ)

- tree shaking
    - 是什么
        - 一种基于 ES Module 规范的 Dead Code Elimination 技术
        - 会在运行过程中静态分析模块之间的导入导出，确定 ESM 模块中哪些导出值未曾其它模块使用，并将其删除，以此实现打包产物的优化。
    - 在 webpack 中启动
        - 使用 ESM 规范编写模块代码
        - 配置 optimization.usedExports 为 true，启动标记功能
        - 启动代码优化功能，可以通过如下方式实现：
            - 配置 mode = production
            - 配置 optimization.minimize = true
            - 提供 optimization.minimizer 数组
    - 必要条件：ESM 下模块之间的依赖关系是高度确定的，与运行状态无关，编译工具只需要对 ESM 模块做静态分析，就可以从代码字面量中推断出哪些模块值未曾被其它模块使用，这是实现 Tree Shaking 技术的必要条件。
    - 实现原理
        - 先标记出模块导出值中哪些没有被用过，使用 Terser 删掉这些没被用到的导出语句。
        - Make 阶段，收集模块导出变量并记录到模块依赖关系图 ModuleGraph 变量中
        - Seal 阶段，遍历 ModuleGraph 标记模块导出变量有没有被使用
        - 生成产物时，若变量没有被其它模块使用则删除对应的导出语句
    - 不会被 tree shaking 的情况
        - CMD/AMD 模块化方案
        - 被用在赋值语句的导出也不会 ts
        - IIEF 也不会 TS
            - 可以在调用语句前添加 /*#__PURE__*/ 备注，明确告诉 Webpack 该次函数调用并不会对上下文环境产生副作用
        - babel 对导入导出语句的转译，导致 ts 失效
            - 可将 babel-preset-env 的 moduels 配置项设置为 false，关闭模块导入导出语句的转译。
        - export default 导出整个对象
            - 优化导出粒度，使用分别导出
        - ts 不支持的包
            - 使用支持 ts 的包
