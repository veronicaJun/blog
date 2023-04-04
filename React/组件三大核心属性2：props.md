# 组件三大核心属性2：props

## 理解

- 每个组件对象都会有props(properties的简写)属性
- 组件标签的所有属性都保存在props中

## 作用

- 通过标签属性从组件外向组件内传递变化的数据
- 注意: 组件内部不能修改props数据

## 编码操作

- 内部读取某个属性值

  ```js
      //创建组件
  class Person extends React.Component{
   render(){
    // console.log(this);
    const {name,age,sex} = this.props
    return (
     <ul>
      <li>姓名：{this.props.name}</li>
      <li>性别：{sex}</li>
      <li>年龄：{age+1}</li>
     </ul>
    )
   }
  }
  ReactDOM.render(<Person name="jerry" age={19} sex="男">,document.getElementById('test1'))

  ```

- 对props中的属性值进行类型限制和必要性限制
  - 写法 1：已弃用

    ```js
      Person.propTypes = {
       name:PropTypes.string.isRequired, //限制name必传，且为字符串
       sex:PropTypes.string,//限制sex为字符串
       age:PropTypes.number,//限制age为数值
       speak:PropTypes.func,//限制speak为函数
      }
      //指定默认标签属性值
      Person.defaultProps = {
       sex:'男',//sex默认值为男
       age:18 //age默认值为18
      }
    ```

  - 写法 2：引入prop-types库，用prop-types库进限制

    ```js
        import 'prop-types';
     //对标签属性进行类型、必要性的限制
     static propTypes = {
      name:PropTypes.string.isRequired, //限制name必传，且为字符串
      sex:PropTypes.string,//限制sex为字符串
      age:PropTypes.number,//限制age为数值
     }
    
     //指定默认标签属性值
     static defaultProps = {
      sex:'男',//sex默认值为男
      age:18 //age默认值为18
     }
    ```

- 扩展属性: 将对象的所有属性通过props传递
    `<Person {...p}/>` (`...`在 js 中只能展开数组)
- 默认属性值：

    ```js
     //指定默认标签属性值
  Person.defaultProps = {
   sex:'男',//sex默认值为男
   age:18 //age默认值为18
  }
    ```

- 组件类的构造函数

    ```js
     constructor(props){
     //构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
      super(props)
      console.log('constructor',this.props);
     }
    ```

- 函数组件中的 props

```js
  function Person (props){
   const {name,age,sex} = props
   return (
     <ul>
      <li>姓名：{name}</li>
      <li>性别：{sex}</li>
      <li>年龄：{age}</li>
     </ul>
    )
  }
  Person.propTypes = {
   name:PropTypes.string.isRequired, //限制name必传，且为字符串
   sex:PropTypes.string,//限制sex为字符串
   age:PropTypes.number,//限制age为数值
  }

  //指定默认标签属性值
  Person.defaultProps = {
   sex:'男',//sex默认值为男
   age:18 //age默认值为18
  }
```
