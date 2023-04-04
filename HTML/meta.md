# 常⽤的meta标签有哪些

- meta 标签由 name 和 content 属性定义，用来描述网页文档的属性，比如网页的作者，网页描述，关键词等，除了HTTP标准固定了一些name作为大家使用的共识，开发者还可以自定义name。
- 常用的meta标签
    - charset，用来描述HTML文档的编码类型：
        - `<meta charset="UTF-8" >`

    - keywords，页面关键词：
        - `<meta name="keywords" content="关键词" />`

    - description，页面描述：
        - `<meta name="description" content="页面描述内容" />`

    - refresh，页面重定向和刷新
        - `<meta http-equiv="refresh" content="0;url=" />`

    - viewport，适配移动端，可以控制视口的大小和比例：
        - `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
            - 其中，content 参数有以下几种
                - `width viewport` ：宽度(数值/device-width)
                - `height viewport` ：高度(数值/device-height)
                - `initial-scale` ：初始缩放比例
                - `maximum-scale` ：最大缩放比例
                - `minimum-scale` ：最小缩放比例
                - `user-scalable` ：是否允许用户缩放(yes/no）

    - 搜索引擎索引方式
        - `<meta name="robots" content="index,follow" />`
            - 其中，content 参数有以下几种：
                - `all`：文件将被检索，且页面上的链接可以被查询；
                - `none`：文件将不被检索，且页面上的链接不可以被查询；
                - `index`：文件将被检索；
                - `follow`：页面上的链接可以被查询；
                - `noindex`：文件将不被检索；
                - `nofollow`：页面上的链接不可以被查询。
