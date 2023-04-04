# DOM和BOM

- DOM 指的是文档对象模型，document，它指的是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。
    - 常见的DOM操作有哪些
      1. DOM 节点的获取
         - getElementById // 按照 id 查询
         - getElementsByTagName // 按照标签名查询
         - getElementsByClassName // 按照类名查询
         - querySelectorAll // 按照 css 选择器查询
         - querySelector // 按照 css 选择器查询，只返回第一个

      2. 增删改查
         - createElement // 创建一个元素节点
         - appendChild // 节点的添加
         - insertBefore // 节点的插入
         - removeChild // 节点的删除
- BOM 指的是浏览器对象模型，window，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。
- window 对象含有 location 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。
