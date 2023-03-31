# JSX
                - 全称:  JavaScript XML
- react定义的一种类似于XML的JS扩展语法: JS + XML本质是React.createElement(component, props, ...children)方法的语法糖
- 作用: 用来简化创建虚拟DOM
  - 写法：`var ele = <h1>Hello JSX!</h1>`
     - 注意1：它不是字符串, 也不是HTML/XML标签
     - 注意2：它最终产生的就是一个JS对象
- 标签名任意: HTML标签或其它标签
- 标签属性任意: HTML标签属性或其它
- 基本语法规则
  - 遇到 `<` 开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
  - 遇到以 `{` 开头的代码，以JS语法解析: 标签中的js表达式必须用{ }包含
  - 样式的类名用 `className`
  - 内联样式 `style={{color:'red',fontSize: '20px'}}`
  - 只能有一个`跟标签`
  - 标签必须闭合
  - 只能写 js 表达式
  1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
      (1). a
      (2). a+b
      (3). demo(1)
      (4). arr.map()
      (5). function test () {}
  2. 语句(代码)：
      (1).if(){}
      (2).for(){}
      (3).switch(){case:xxxx}
  - 列表需要`key`  
- babel.js的作用
  - 浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
  - 只要用了JSX，都要加上`type="text/babel"`, 声明需要babel来处理
