# 面试题 css

[Toc]

## 1. css 选择器优先级

1. ！important
2. 内联
3. ID
4. 类、伪类、属性
5. 元素、伪元素
6. 通配符、关系
7. 继承

>(1,1,1) (ID,类,元素)

## 2. BFC 块级格式上下文

盒子的布局会受到尺寸，定位，盒子的子元素或兄弟元素，视口的尺寸等因素决定, BFC 用于决定块级盒的布局及浮动相互影响范围的一个区域

1. 有什么特点?
    1. 块级元素和文档流排列方式一致, 在垂直方向上一个接一个排列
    2. BFC 中上下相邻的两个容器的 margin 会重叠, 创建新的 BFC 可以避免外边距重叠.
    3. 计算 BFC 高度时, 会计算浮动元素的高度.
    4. BFC 区域不会与浮动的容器发生重叠.
    5. BFC 是独立的容器, 内部元素不会影响外部元素.
    6. 每个元素的左 margin 和容器的左 border 接触.
2. 解决了什么问题
    1. margin 塌陷 和 合并
    2. 去除浮动
    3. 自适用两列布局
3. 触发条件
    1. 根元素
    2. float, 有且不为 none
    3. position 为 absolute, fixed
    4. display 为 table-caption, table-cell, inline-bolck, flex, flow-root
    5. overflow, 有且不为 visible
    6. column-span: all

## 3. 盒模型

1. 标准盒模型：
    1. box-sizing: content-box;
    2. width: content
2. IE盒模型：
    1. box-sizing: border-box;
    2. width: content + padding + border

## 4. 案例：如何实现左侧宽度固定，右侧自适应的布局

1. 左侧固定宽度 + float, 右侧margin-left + width:auto
2. 左侧固定宽度 + float, 右侧overflow: hidden(触发 BFC);
3. 左侧固定宽度, 右侧calc计算宽度
4. 左侧固定宽度 + 绝对定位, 右侧margin-left
5. 左侧固定宽度, 右侧绝对定位 + left: 固定宽度 + right/top/bottom: 0
6. 右侧flex: 1
7. 左侧flex-basis: 宽度

## 5. 重排(reflow)和重绘(repaint)

1. reflow: 需要重新计算元素的**位置**及**尺寸**
2. repaint: 需要重新绘制元素的**样式**
3. 如何优化?
    1. 合并多次对DOM和样式的修改，然后一次处理掉
    2. 脱离文档流
        1. 隐藏元素，应用修改，重新显示
        2. 使用文档片段(document fragment)在当前DOM之外构建一个子树，再把它拷贝回文档。
        3. 将原始元素拷贝到一个脱离文档的节点中，修改节点后，再替换原始的元素。
    3. 减少访问元素属性的次数
    4. 开启 GPU 加速: 使用css3硬件加速
        1. transform
        2. opacity
        3. filters
        4. Will-change

## 6. 案例: 圣杯/双飞翼布局(经典三分栏布局)

1. 目的:
    1. 三栏布局, 中间先加载和渲染
    2. 两侧内容固定, 中间内容随宽度自适应
    3. 一般用于 PC 网页
2. 总结:
    1. 使用 float 布局
    2. 两侧使用 margin 负值,以便和中间内容横向重叠.
    3. 防止中间内容被两侧覆盖, 圣杯用 padding, 双飞翼用 margin.

## 7. 按钮: 水平垂直居中

1. 定宽高
    1. 绝对定位 + margin 负值
    2. 绝对定位 + transform
    3. 绝对定位 + left/right/bottom/top:0 + margin:auto
    4. flex
    5. grid + margin: auto
    6. table-cell + vertical-algin:middle + inline-block/margin:auto
2. 不定宽高
    1. 绝对定位 + transform
    2. table-cell + vertical-algin:middle + inline-block/margin:auto
    3. flex
    4. flex + margin:auto
    5. grid + flex(align-self/justify-self:center)
    6. grid + margin: auto

>grid 兼容性差

## 8. flex

1. 容器属性
    1. flex-direction: row | row-reverse | column | column-reverse;
    2. flex-wrap: nowrap | wrap | wrap-reverse;
    3. flex-flow: `<flex-direction> || <flex-wrap>`;
    4. justify-content: flex-start | flex-end | center | space-between | space-around;
    5. align-items: flex-start | flex-end | center | baseline | stretch;
    6. align-content: flex-start | flex-end | center | space-between | space-around | stretch;
2. 项目属性
    1. order: `<integer>`;
    2. flex-grow: `<number>`; /*default 0*/
    3. flex-shrink: `<number>`; /*default 1*/
    4. flex-basis: `<length> | auto`; /*default auto*/
    5. flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    6. align-self: auto | flex-start | flex-end | center | baseline | stretch;

## 9. line-height 的继承

1. 父元素写 数值, 子元素继承该值
2. 父元素写 比列, 子元素继承比例
3. 父元素写 百分比, 子元素继承 父元素 font-size * 百分比 的值
