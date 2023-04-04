# 对 line-height 的理解及其赋值方式

- line-height的概念：
    - line-height 指一行文本的高度，包含了字间距，实际上是下一行基线到上一行基线距离；
    - 如果一个标签没有定义 height 属性，那么其最终表现的高度由 line-height 决定；
    - 一个容器没有设置高度，那么撑开容器高度的是 line-height，而不是容器内的文本内容；
    - 把 line-height 值设置为 height 一样大小的值可以实现单行文字的垂直居中；
    - line-height 和 height 都能撑开一个高度；

- line-height 的赋值及继承：
  1. 父元素写 数值, 子元素继承该值
  2. 父元素写 比列, 子元素继承比例
  3. 父元素写 百分比, 子元素继承 父元素 font-size * 百分比 的值
