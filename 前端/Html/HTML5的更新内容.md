# HTML5 更新

1. 语义化标签
    - 头部：`<header></header>`  
    - 底部：`<footer></footer>`  
    - 导航栏：`<nav></nav>`  
    - 侧边栏：`<aside></aside>`  
    - 区块：`<section></section>`  
    - 主要区域：`<main></main>`  
    - 主要内容：`<article></article>`  

2. 媒体标签

    - audio音频
        - `<audio src='' controls autoplay loop='true'></audio>`
    - video视频
        - `<video src='' poster='img/aa.jpg' controls width=100 height=100></video>`
    - source标签
        - 兼容不同的浏览器对视频格式的支持，可以通过source来指定视频源。
        - 写法

            ```html
            <video>
                <source src='aa.flv' type='video/flv'></source>
                <source src='aa.mp4' type='video/mp4'></source>
            </video>

            ```

3. 增强型表单
    - 表单类型
        - email ：能够验证当前输入的邮箱地址是否合法
        - url ： 验证URL
        - number ： 只能输入数字，自带上下增大减小箭头，可以设置 max 和 min 以及 value，其中 value 属性可以设置为默认值
        - search ： 输入框后面会给提供一个小叉，可以删除输入的内容，更加人性化。
        - range ： 提供给一个范围，可以设置 max 和 min 以及 value，其中 value 属性可以设置为默认值
        - color ： 提供了一个颜色拾取器
        - time ： 时分秒
        - data ： 日期选择年月日
        - datatime ： 时间和日期(目前只有 Safari 支持)
        - datatime-local ：日期时间控件
        - week ：周控件
        - month：月控件

    - 表单属性
        - placeholder ：提示信息
        - autofocus ：自动获取焦点
        - autocomplete：`autocomplete=“off/on”`
            - 使用这个属性需要有两个前提
                - 表单必须提交过
                - 必须有name属性。
        - required：要求输入框不能为空，必须有值才能够提交。
        - pattern：正则匹配，例如手机号 `pattern="^(+86)?\d{10}$"`
        - multiple：可以选择多个文件或者多个邮箱
        - form：`form = "form表单的ID"`

    - 表单事件
        - oninput 每当 input 里的内容发生变化都会触发此事件。
        - oninvalid 当验证不通过时触发此事件。

4. 进度条、度量器

    - progress标签：用来表示任务的进度（IE、Safari不支持），max用来表示任务的进度，value表示已完成多少
    - meter属性：用来显示剩余容量或剩余库存（IE、Safari不支持）

        - high/low：规定被视作高/低的范围
        - max/min：规定最大/小值
        - value：规定当前度量值
        - 设置规则：min < low < high < max

5. DOM查询操作

    - `document.querySelector()`
    - `document.querySelectorAll()`

6. Web存储

    - HTML5 提供了两种在客户端存储数据的新方法

        - localStorage - 没有时间限制的数据存储
        - sessionStorage - 针对一个 session 的数据存储

7. Drag API
    - `<img draggable="true" />`

8. Canvas 绘图
    - `<canvas id="myCanvas" width="200" height="100"></canvas>`

9. SVG 绘图
    - SVG 指可伸缩矢量图形，用于定义用于网络的基于矢量的图形，使用 XML 格式定义图形，图像在放大或改变尺寸的情况下其图形质量不会有损失，它是万维网联盟的标准
    - 写法

        ```html
        <svg id="svgLineTutorial" 
        style="border-style:solid;border-width:2px;" 
        height="200px" width="200px" 
        xmlns="http://www.w3.org/2000/svg">
            <line x1="10" y1="20" x2="100" y2="200" 
            style="stroke:Green;stroke-width:2"/>
            <circle id="myCircle" cx="55" cy="55" r="50" 
            fill="#219E3E" stroke="#17301D" stroke-width="2" />
        </svg>
        ```

10. Geolocation API
    - 用于定位用户的位置。

11. Web Worker
    - Web Worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。

12. Web Socket
    - Web Socket 协议本质上是一个基于TCP的协议，Web Socket 使得客户端和服务器之间的数据交换变得更加简单，当获取 Web Socket 连接之后，可以通过`send()`方法来向服务器发送数据，通过`onmessage`事件来接受服务器返回的数据。

13. history API
    - go、forward、back、pushstate

14. 移除的元素
    - 纯表现的元素：basefont，big，center，font, s，strike，tt，u;
    - 对可用性产生负面影响的元素：frame，frameset，noframes；
