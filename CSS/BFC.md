# BFC

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
    1. 根元素
    2. float, 有且不为 none
    3. position 为 absolute, fixed
    4. display 为 table-caption, table-cell, inline-bolck, flex, flow-root
    5. overflow, 有且不为 visible
    6. column-span: all
