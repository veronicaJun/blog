# float

- why
    - 为了能让 Web 开发人员实现简单的布局，包括在一列文本中浮动的图像，文字环绕在它的左边或右边。
- 浮动
    - 通过脱离文档流，使信息列得以横向排列
- 清除浮动
    - 不让浮动的元素影响其他元素
    - 方案一：先向包含浮动内容及其本身的盒子后方插入一些生成的内容，并将生成的内容清除浮动。
        - 代码

            ```css
              .clearfix:after {
                content: "";
                display: block; //clear: both; 只对块级元素有效
                height: 0;
                clear: both;
                visibility: hidden;
              }
              .clearfix {
                zoom: 1;
              }
              ```

    - 方案二：将包裹元素的 overflow 属性设置为除 visible 外的其他值。
        - overflow: hidden

            ```css
                .clearfix {
                overflow: hidden;
                }
                ```

    - 方案三：创建块格式化上下文（BFC），在使用上没有副作用。
        - display: flow-root
