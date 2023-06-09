# 行内元素、块级元素、空(void)元素

- 解题：
    - 初阶：
        - 默认地，span、a、strong、big、small 等都是行内元素；div、p、section、ul、li 等都是块级元素
        - 行内/块级元素最大的区别在于是否占满一行，但可以通过 display 属性修改
    - 中阶：
        - 但是，这只是 html4.1 及之前的概念，H5 之后引入更复杂的概念 —— 内容类别
            - Metadata Content：base/link/meta/title/script/style
            - Flow Content: a/h1/h2/h3/details/footer/iframe
            - Sectioning Content: footer/header/aside/nav/section
            - Heading Content: h1/h2/.../hgroup
            - Phrasing Content(措施内容): label/cite/code/button
            - 等等
    - 高阶：
        - 内容类别能让标签更具语义化，毕竟 HTML 更重要的作用在于表达页面结构、内容语义，表现特性可以通过样式轻易修改，就没必要给它留位置了

- HTML 4.1
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

- HTML 5 内容分类
    - 主内容类，描述了很多元素共享的内容规范；
        - 元数据内容 MetaData Content
            - `base`、`link`、`meta`、`noscript`、`script`、`style` 和 `title`
        - 流式内容 Flow Content
            - 包括大多数可以包含在 body 元素之内的元素，包括标题元素、分段元素、措辞元素、嵌入元素、互动元素和表单相关元素。
            - 分段内容 Sectioning Content
                - 创建了一个当前大纲中的分段，它定义了 header 元素、footer 元素和标题内容的范围。
                - article、aside、nav 和 section
            - 标题内容 Heading Content
                - 定义了分段的标题
                - h1 、h2 、h3 、h4 、h5 、h6和 hgroup。
            - 短语内容 Phrasing Content
                - 定义了文本和它包含的标记
            - 嵌入内容 Embedded Content
                - 将来自另一种标记语言或命名空间的内容插入到文档中
                - audio、canvas、embed、iframe、img、math、object、picture、svg 和 video
            - 交互内容 Interactive Content
                - 包含为用户交互而特别设计的元素
                - a、button、details、embed、iframe、label、select 和 textarea。
            - 可感知内容 Perceivable Content
            - 表单相关内容类，描述了表单相关元素共有的内容规范；
                - 包括有表单所有者的元素
                - button、fieldset、input、label、meter、object、output、progress、select、textarea
    - 特殊内容类，描述了仅仅在某些特殊元素上才需要遵守的内容规范，通常这些元素都有特殊的上下文关系。
