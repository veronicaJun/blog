# display 的属性值及其作用

- none：元素不显示，并且会从文档流中移除。
- block：块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
- inline：行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。可设置水平方向的margin和padding，垂直方向无效；
- inline-block： 将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。
    - 有间隙的情况
        - 元素间有回车或空格
        - 元素设置了左右 margin
- list-item：像块类型元素一样显示，并添加样式列表标记。
- table：此元素会作为块级表格来显示。
- inherit：规定应该从父元素继承display属性的值。

- 对于行内元素和块级元素，其特点如下：
    - 行内元素
        - 设置宽高无效；
        - 可以设置水平方向的 margin 和 padding 属性，垂直方向无效；
        - 不会自动换行；
    - 块级元素
        - 可以设置宽高；
        - 设置 margin 和 padding 都有效；
        - 可以自动换行；
        - 多个块状，默认排列从上到下。

display:none与visibility:hidden的区别

- 在渲染树中
    - `display:none`会让元素完全从渲染树中消失，渲染时不会占据任何空间；
    - `visibility:hidden`不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。
- 是否是继承属性
    - `display:none`是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
    - `visibility:hidden`是继承属性，子孙节点消失是由于继承了hidden，通过设置`visibility:visible`可以让子孙节点显示；
- 修改常规文档流中元素的 `display` 通常会造成文档的重排，但是修改`visibility`属性只会造成本元素的重绘；
- 如果使用读屏器，设置为`display:none`的内容不会被读取，设置为`visibility:hidden`的内容会被读取。