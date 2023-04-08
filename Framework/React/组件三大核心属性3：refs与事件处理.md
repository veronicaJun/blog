# 组件三大核心属性3：refs与事件处理

## 理解

组件内的标签可以定义 ref 属性来标识自己

## 编码

- 字符串形式的ref(不建议使用) `<input ref="input1" />`

- 回调形式的ref `<input ref={(c}=>{this.input1=c}} />`

- createRef创建ref容器

```js
    //React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
    myRef = React.createRef()
    <input ref={this.myRef} />
```

## 事件处理

- 通过onXxx属性指定事件处理函数(注意大小写)
  - React使用的是自定义(合成)事件, 而不是使用的原生DOM事件 —————— 兼容性
  - React中的事件是通过事件委托方式处理的(委托给组件最外层的元素) —————— 高效
- 通过event.target得到发生事件的DOM元素对象 ————— 避免过度使用ref
