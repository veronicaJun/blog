# redux

## 7.1. redux理解

### 学习文档

- 英文文档: <https://redux.js.org/>
- 中文文档: <http://www.redux.org.cn/>
- Github: <https://github.com/reactjs/redux>

### redux是什么

- redux是一个专门用于做状态管理的JS库(不是react插件库)。
- 它可以用在react, angular, vue等项目中, 但基本与react配合使用。
- 作用: 集中式管理react应用中多个组件共享的状态。

### 什么情况下需要使用redux

- 某个组件的状态，需要让其他组件可以随时拿到（共享）。
- 一个组件需要改变另一个组件的状态（通信）。
- 总体原则：能不用就不用, 如果不用比较吃力才考虑使用。

### redux工作流程

![img](../../../../ToDo/media/16756735693821/16759057176912.jpg)

- React Components 客人
- Action Creators 服务员
- Store 老板（数据、调度、更新存储）
- Reducers 厨师 （初始化、加工）

## 7.2. redux的三个核心概念

### action

- 动作的对象
- 包含2个属性
  - type：标识属性, 值为字符串, 唯一, 必要属性
  - data：数据属性, 值类型任意, 可选属性
- 例子：{ type: 'ADD_STUDENT',data:{name: 'tom',age:18} }

### reducer

- 用于初始化状态、加工状态。
- 加工时，根据之前的状态(preState)，动作对象(action)， 产生新的state的纯函数。

### store

- 将state、action、reducer联系在一起的对象
- 如何得到此对象?

```js
 import {createStore} from 'redux'
 import reducer from './reducers'
 const store = createStore(reducer)
```

- 此对象的功能?
  - getState(): 得到state
  - dispatch(action): 分发action, 触发reducer调用, 产生新的state
  - subscribe(listener): 注册监听, 当产生了新的state时, 自动调用

## 7.3. redux的核心API

### createstore()

作用：创建包含指定reducer的store对象

### store对象

- 作用: redux库最核心的管理对象
- 它内部维护着:
  - state
  - reducer
- 核心方法:
  - getState()
  - dispatch(action)
  - subscribe(listener)
- 具体编码:
  - store.getState()
  - store.dispatch({type:'INCREMENT', number})
  - store.subscribe(render)

### applyMiddleware()

作用：应用上基于redux的中间件(插件库)

### combineReducers()

作用：合并多个reducer函数

## 7.4. 使用redux编写应用

### 求和案例_redux精简版

  1. 去除Count组件自身的状态
  2. src下建立:
      -redux
       -store.js
       -count_reducer.js

  3. store.js：
     1. 引入`redux`中的`createStore`函数，创建一个`store`
     2. `createStore`调用时要传入一个为其服务的`reducer`
     3. 记得暴露`store`对象

  4. count_reducer.js：
     1. `reducer`的本质是一个函数，接收：`preState`,`action`，返回加工后的状态
     2. `reducer`有两个作用：初始化状态，加工状态
     3. `reducer`被第一次调用时，是store自动触发的，
         传递的`preState`是`undefined`,
         传递的`action`是:`{type:'@@REDUX/INIT_a.2.b.4}`

  5. 在`index.js`中监测`store`中状态的改变，一旦发生改变重新渲染`<App/>`
    备注：`redux`只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。

### 求和案例_redux完整版

新增文件：

   1. count_action.js 专门用于创建action对象
   2. constant.js 放置容易写错的type值

### 求和案例_redux异步`action`版

理解：

- `redux`默认是不能进行异步处理的,
- 某些时候应用中需要在`redux`中执行异步任务(`ajax`, 定时器)

1. 明确：延迟的动作不想交给组件自身，想交给`action`
1. 何时需要异步`action`：想要对状态进行操作，但是具体的数据靠异步任务返回。
1. 具体编码：
1. `yarn add redux-thunk`，并配置在`store`中
1. 创建`action`的函数返回一个函数，该函数中写异步任务。
1. 异步任务有结果后，分发一个同步的action去真正操作数据。
1. 备注：异步`action`不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步`action`。

### 求和案例_react-redux基本使用

理解

- 一个react插件库
- 专门用来简化react应用中使用redux

### react-Redux将所有组件分成两大类

![react-redux模型图](../../../../ToDo/media/16759071112242/react-redux模型图.png)

### 相关API

- Provider：让所有组件都可以得到state数据
- connect：用于包装 UI 组件生成容器组件
- mapStateToprops：将外部的数据（即state对象）转换为UI组件的标签属性
- mapDispatchToProps：将分发action的函数转换为UI组件的标签属性

1. 明确两个概念：
  1. UI组件:不能使用任何redux的api，只负责页面的呈现、交互等。
        - 只负责 UI 的呈现，不带有任何业务逻辑
        - 通过props接收数据(一般数据和函数)
        - 不使用任何 Redux 的 API
        - 一般保存在components文件夹下

  2. 容器组件：负责和redux通信，将结果交给UI组件。
      - 负责管理数据和业务逻辑，不负责UI的呈现
      - 使用 Redux 的 API
      - 一般保存在containers文件夹下

1. 如何创建一个容器组件————靠`react-redux` 的 `connect`函数
   connect(mapStateToProps,mapDispatchToProps)(UI组件)
    - mapStateToProps:映射状态，返回值是一个对象
    - mapDispatchToProps:映射操作状态的方法，返回值是一个对象

1. 备注1：容器组件中的`store`是靠`props`传进去的(在 App 中引入的)，而不是在容器组件中直接引入
1. 备注2：`mapDispatchToProps`，也可以是一个对象

### 求和案例_react-redux优化

   (1).容器组件和UI组件整合一个文件
   (2).无需自己给容器组件传递store，给`<App/>`包裹一个`<Provider store={store}>`即可。
   (3).使用了`react-redux`后也不用再自己检测`redux`中状态的改变了，容器组件可以自动完成这个工作。
   (4).`mapDispatchToProps`也可以简单的写成一个对象
   (5).一个组件要和`redux`“打交道”要经过哪几步？
       (1).定义好UI组件---不暴露
       (2).引入`connect`生成一个容器组件，并暴露，写法如下：
       ```js
         connect(
          state => ({key:value}), //映射状态
          {key:xxxxxAction} //映射操作状态的方法
         )(UI组件)

```
       (4).在UI组件中通过this.props.xxxxxxx读取和操作状态

### 求和案例_react-redux数据共享版

   (1).定义一个Person组件，和Count组件通过redux共享数据。
   (2).为Person组件编写：reducer、action，配置constant常量。
   (3).重点：Person的reducer和Count的Reducer要使用combineReducers进行合并，
     合并后的总状态是一个对象！！！
   (4).交给store的是总reducer，最后注意在组件中取出状态的时候，记得“取到位”。

### 求和案例_react-redux开发者工具的使用

(1).`yarn add redux-devtools-extension`
(2).`store`中进行配置

```js
 import {composeWithDevTools} from 'redux-devtools-extension'
 const store = createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
```

### 求和案例_react-redux最终版

   (1).所有变量名字要规范，尽量触发对象的简写形式。
   (2).reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer

## 纯函数和高阶函数

### 纯函数

- 一类特别的函数: 只要是同样的输入(实参)，必定得到同样的输出(返回)
- 必须遵守以下一些约束  
  - 不得改写参数数据
  - 不会产生任何副作用，例如网络请求，输入和输出设备
  - 不能调用Date.now()或者Math.random()等不纯的方法  
- redux的reducer函数必须是一个纯函数

### [高阶函数](高阶函数和函数柯里化.md)
