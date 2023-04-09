# BFC

- 解答
● 初阶：能解释BFC概念，BFC 内部布局规则与 BFC 之间的关系
● 中阶：
  ○ 能说清楚如何产生 BFC，特别是 display: flow-root布局的概念和作用
  ○ 能提及 BFC 的应用案例：解决 margin 坍塌、清除浮动
● 高阶：能讲解 FC 概念，扩展开来简单介绍 BFC/IFC/GFC/FFC 等概念

知识点：
● 本质上是一个块级独立渲染、布局区域，区域内外的元素布局互相不影响
● FC：BFC/IFC(inline)/GFC(grid)/FFC(flex)，格式化上下文是一个独立概念，它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
● BFC 布局规则 —— 其实就是流式布局：
  ○ 垂直方向一个接一个摆放
  ○ Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
  ○ 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
  ○ BFC的区域不会与float box重叠。
  ○ BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
  ○ 计算BFC的高度时，浮动元素也参与计算
● 影响：
  ○ 浮动定位和清除浮动时只会应用于同一个BFC内的元素，浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动；
  ○ 外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。
● 什么情况下产生 BFC：HTML 根部、float 不为none、table-cell/inline-block/flex/grid/flow-root 等 display 值、absolute/fixed、overflow 不是 visible， 特别是 flow-root

- BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发BFC的条件，则BFC中的元素布局不受外部影响。

1. 有什么特点?
    1. 块级元素和文档流排列方式一致, 在垂直方向上一个接一个排列
    2. BFC 中上下相邻的两个容器的 margin 会重叠, 创建新的 BFC 可以避免外边距重叠.
    3. 计算 BFC 高度时, 会计算浮动元素的高度.
    4. BFC 区域不会与浮动的容器发生重叠.
    5. BFC 是独立的容器, 内部元素不会影响外部元素.
    6. 每个元素的左 margin 和容器的左 border 接触.
2. 解决了什么问题
    1. margin 塌陷 和 合并
    2. 浮动造成的高度塌陷
    3. 自适用两列布局
3. 触发条件
    1. 根元素html
    2. float, 有且不为 none
    3. position 为 absolute, fixed
    4. display 为 table-caption, table-cell, inline-bolck, flex, flow-root
    5. overflow, 有且不为 visible
    6. column-span: all
