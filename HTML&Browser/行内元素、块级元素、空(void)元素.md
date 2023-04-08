# 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

- 行内元素有：a b span img input select strong；
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4 h5 h6 p；

- 空元素：
    - 常见的有：br、hr、img、input、link、meta；
    - 鲜见的有：area、base、col、colgroup、command、embed、keygen、param、source、track、wbr。
    - 空元素没有闭合标签

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