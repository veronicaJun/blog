# 组件三大核心属性1：state

## 理解

- state是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)
- 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)

## 强烈注意

- 组件中render方法中的this为组件实例对象
- 组件自定义的方法中this为undefined，如何解决？
  - 强制绑定this: 通过函数对象的bind()

  ```js

  constructor(props){
   console.log('constructor');
   super(props)
   //初始化状态
   this.state = {isHot:false,wind:'微风'}
   //解决changeWeather中this指向问题
   this.changeWeather = this.changeWeather.bind(this)
  }
  ```

  - 箭头函数

  ```js
   //自定义方法————要用赋值语句的形式+箭头函数
  changeWeather = ()=>{
   const isHot = this.state.isHot
   this.setState({isHot:!isHot})
  }
  ```

- 状态数据，不能直接修改或更新
  - 状态必须通过setState进行更新,且更新是一种合并，不是替换。
  - `this.state.isHot = !isHot` 不可直接更改,是错误的写法
