# z-index

- what
    - 设定了一个定位元素及其后代元素或 flex 项目的 z-order
    - 前提是元素的 position 属性不是 static
- z-index 失效
    - 父元素position为relative时，子元素的z-index失效。
        - 解决：父元素position改为absolute或static；
    - 元素没有设置position属性为非static属性。
        - 解决：设置该元素的position属性为relative，absolute或是fixed中的一种；
    - 元素在设置z-index的同时还设置了float浮动。
        - 解决：float去除，改为display：inline-block；

- 元素的层叠顺序
    - ![元素的层叠顺序](./assets/2023-03-29-22-03-56.png)
    - 装饰、布局、内容
        - 装饰：边框、背景、阴影
        - 布局：定位、浮动、z-index
        - 内容：文本、图片、视频
    - 背景和边框：建立当前层叠上下文元素的背景和边框。
    - 负的z-index：当前层叠上下文中，z-index属性值为负的元素。
    - 块级盒：文档流内非行内级非定位后代元素。
    - 浮动盒：非定位浮动元素。
    - 行内盒：文档流内行内级非定位后代元素。
    - z-index:0：层叠级数为0的定位元素。
    - 正z-index：z-index属性值为正的定位元素。
    注意: 当定位元素z-index:auto，生成盒在当前层叠上下文中的层级为 0，不会建立新的层叠上下文，除非是根元素。

todo
-层叠上下文
    - 层叠上下文是一个独立的渲染层，拥有自己的层叠等级，层叠上下文中的元素可以相互覆盖，而不会影响到其他层叠上下文中的元素。
    - 层叠上下文的创建
        - 根元素
        - position的值不是static的元素
        - z-index的值不是auto的元素
        - opacity的值小于1的元素
        - transform或perspective的值不是none的元素
        - mix-blend-mode的值不是normal的元素
        - filter的值不是none的元素
        - isolation的值是isolate的元素
        - -webkit-overflow-scrolling的值不是auto的元素
        - position:fixed的元素
        - position:sticky的元素
        - flex元素的z-index值不是auto
        - grid元素的z-index值不是auto
        - -webkit-mask或mask的值不是none或者opacity不是1的元素
        - will-change的值包含上面任意一个属性
        - contain的值包含layout、paint或者strict
    - 层叠上下文的层叠等级
        - 层叠上下文的层叠等级由层叠上下文的类型决定，层叠上下文类型越高，层叠等级越高。
        - 层叠上下文类型
            - 根元素
            - position的值不是static的元素
            - z-index的值不是auto的元素
            - opacity的值小于1的元素
            - transform或perspective的值不是none的元素
            - mix-blend-mode的值不是normal的元素
            - filter的值不是none的元素
            - isolation的值是isolate的元素
            - -webkit-overflow-scrolling的值不是auto的元素
            -