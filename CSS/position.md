# position

- inherit
    - 规定从父元素继承position属性的值
- static
    - 默认值。没有定位，元素出现在正常的流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。
- absolute
    - 生成绝对定位的元素，相对于 static 定位以外的一个父元素进行定位。元素的位置通过left、top、right、bottom 属性进行定位。
- fixed
    - 生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。(老IE不支持)
- relative
    - 生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。
- sticky
    - 依赖于用户的滚动，在 `position:relative` 与 `position:fixed` 定位之间切换。
    - 元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
    - 语法：
        - `position: sticky`
        - 并指定 top, right, bottom 或 left 四个阈值其中之一，否则其行为与相对定位相同。

1. absolute 与 fixed 共同点与不同点

- 共同点：
    - 改变行内元素的呈现方式，将 display 置为 inline-block  
    - 使元素脱离普通文档流，不再占据文档物理空间
    - 覆盖非定位文档元素

- 不同点：
    - absolute 与 fixed 的根元素不同，absolute 的根元素可以设置，fixed 根元素是浏览器。
    - 在有滚动条的页面中，absolute 会跟着父元素进行移动，fixed 固定在页面的具体位置。
    - absolute 可以设置 z-index，fixed 不可以。