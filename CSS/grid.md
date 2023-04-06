# grid

- what
    - 用于 web 的二维布局系统
    - 网格是由一系列水平及垂直的线构成的一种布局模式。
    - 一个网格通常具有许多的列（column）与行（row），以及行与行、列与列之间的间隙，这个间隙一般被称为沟槽（gutter）。
- how
    - `display: flex`
    - grid-template-columns（grid-template-rows） 定义显式网格轨道的大小
        - `grid-template-columns: 200px 200px 200px;`
        - `grid-template-columns: 2fr 1fr 1fr;`
            - 按比例划分空间，比例为 2:1:1
        - `grid-template-columns: repeat(2, 2fr 1fr)`
            - 相当于`grid-template-columns: 2fr 1fr 2fr 1fr`
        - 自动多列填充
            - `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));`
    - grid-gap 定义间隙
        - grid-column-gap 来定义列间隙
        - grid-row-gap 来定义行间隙
    - grid-auto-rows（grid-auto-columns） 设定隐式网格轨道的大小
    - minmax() 函数为一个行/列的尺寸设置了取值范围
        - `grid-auto-rows: minmax(100px, auto);`
        - 自动多列填充
    - grid-column/grid-row 指定开始与结束的线(使用`/`符号分开)
        - `grid-column: 1 / 3;`相当于共三列，占第一列到第三列
        - `grid-row: 1;`相当于共三行，占第一行
    - grid-template-areas
        - 划分区域

        ```css
        grid-template-areas:
            "header header"
            "sidebar content"
            "footer footer";
        grid-template-columns: 1fr 3fr;
        ```

        - 元素位置

            ```css
            grid-area: header;//grid-area: content;
            ```

        - 使用规则如下：
            1. 你需要填满网格的每个格子
            2. 对于某个横跨多个格子的元素，重复写上那个元素grid-area属性定义的区域名字
            3. 所有名字只能出现在一个连续的区域，不能在不同的位置出现
            4. 一个连续的区域必须是一个矩形
            5. 使用.符号，让一个格子留空
    - 网格排版框架
        - 一般由 12 到 16 列的网格构成
