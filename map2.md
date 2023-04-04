
## 27.你觉得jQuery或zepto源码有哪些写的好的地方 (答案仅供参考)

Query源码封装在一个匿名函数的自执行环境中，有助于防止变量的全局污染，然后通过传入window对 象参数，可以使window对象作为局部变量使用，好处是当jquery中访问window对象的时候，就不用将 作用域链退回到顶层作用域了，从而可以更快的访问window对象。同样，传入undefined参数，可以缩 短查找undefined时的作用域链。
  (function( window, undefined ) { //用一个函数域包起来，就是所谓的沙箱 //在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局 //把当前沙箱需要的外部变量通过函数参数引入进来 //只要保证参数对内提供的接口的一致性，你还可以随意替换传进来的这个参数
  window.jQuery = window.$ = jQuery;
})( window );
jquery将一些原型属性和方法封装在了jquery.prototype中，为了缩短名称，又赋值给了jquery.fn，这 是很形象的写法。
有一些数组或对象的方法经常能使用到，jQuery将其保存为局部变量以提高访问速度。 jquery实现的链式调用可以节约代码，所返回的都是同一个对象，可以提高代码效率。

## 30.关于Http 2.0你知道多少?

HTTP/2引入了“服务端推(server push)”的概念，它允许服务端在客户端需要数据之前就主动地将数据
发送到客户端缓存中，从而提高性能。
HTTP/2提供更多的加密支持
HTTP/2使用多路技术，允许多个消息在一个连接上同时交差。
它增加了头压缩(header compression)，因此即使非常小的请求，其请求和响应的header都只会占 用很小比例的带宽。



## 33.如何评价AngularJS和BackboneJS

backbone具有依赖性，依赖underscore.js。Backbone + Underscore + jQuery(or Zepto) 就比一个

AngularJS多出了2 次HTTP请求.
Backbone的Model没有与UI视图数据绑定，而是需要在View中自行操作DOM来更新或读取UI数据。 AngularJS与此相反，Model直接与UI视图绑定，Model与UI视图的关系，通过directive封装， AngularJS内置的通用directive，就能实现大部分操作了，也就是说，基本不必关心Model与UI视图的关 系，直接操作Model就行了，UI视图自动更新。
AngularJS的directive，你输入特定数据，他就能输出相应UI视图。是一个比较完善的前端MVW框架， 包含模板，数据双向绑定，路由，模块化，服务，依赖注入等所有功能，模板功能强大丰富，并且是声 明式的，自带了丰富的 Angular 指令。

## 34.用过哪些设计模式?

工厂模式

主要好处就是可以消除对象间的耦合，通过使用工程方法而不是new关键字。将所有实例化的代码集中 在一个位置防止代码重复。
工厂模式解决了重复实例化的问题 ，但还有一个问题,那就是识别问题，因为根本无法搞清楚他们到底 是哪个对象的实例。

 构造函数模式
使用构造函数的方法 ，即解决了重复实例化的问题 ，又解决了对象识别的问题，该模式与工厂模式的不 同之处在于:
1)构造函数方法没有显示的创建对象 (new Object()); 2)直接将属性和方法赋值给 this 对象;
3)没有 renturn 语句。

## 36.请你谈谈Cookie的弊端 cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的

第一:每个特定的域名下最多生成20个cookie 1)IE6或更低版本最多20个cookie 2)IE7和之后的版本最后可以有50个cookie。 3)Firefox最多50个cookie
4)chrome和Safari没有做硬性限制
IE和Opera 会清理近期最少使用的cookie，Firefox会随机清理cookie。 cookie的最大大约为4096字节，为了兼容性，一般不能超过4095字节。
IE 提供了一种存储可以持久化用户数据，叫做userdata，从IE5.0就开始支持。每个数据最多128K，每 个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。
function createObject(name,age,profession){//集中实例化的函数var obj = newObject(); obj.name =name;
obj.age = age;
obj.profession= profession;
  obj.move =function () {
    returnthis.name + ' at ' + this.age + ' engaged in ' + this.profession;
};
return obj; }
var test1 = createObject('trigkit4',22,'programmer');//第一个实例var test2 =createObject('mike',25,'engineer');//第二个实例

 优点:极高的扩展性和可用性
1)通过良好的编程，控制保存在cookie中的session对象的大小。
2)通过加密和安全传输技术(SSL)，减少cookie被破解的可能性。
3)只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
4)控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。
缺点:

1) Cookie 数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB， 否则会被截掉.
2)安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补， 因为拦截者并不需要知道cookie的意义，他只要原样转发cookie就可以达到目的了。
3)有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数 器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

## 37.浏览器本地存储 在较高版本的浏览器中，js提供了sessionStorage和globalStorage。在HTML5中提供了localStorage来

取代globalStorage。
html5中的Web Storage包括了两种存储方式:sessionStorage和localStorage。
sessionStorage用于本地存储一个会话(session)中的数据，这些数据只有在同一个会话中的页面才能 访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话 级别的存储。
而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的

## 38.web storage和cookie的区别

Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并 且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要 指定作用域，不可以跨域调用。
除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者 自己封装setCookie，getCookie。
但是cookie也是不可以或缺的:cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ， 而Web Storage仅仅是为了在本地“存储”数据而生
浏览器的支持除了IE7及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值 得一提的是IE总是办好事，例如IE7、IE6中的userData其实就是javascript本地存储的解决方案。通过简 单的代码封装可以统一到所有的浏览器都支持web storage。
localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等

## 39.cookie和session的区别

1)cookie数据存放在客户的浏览器上，session数据放在服务器上。 2)cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
考虑到安全应当使用session。 3)session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
考虑到减轻服务器性能方面，应当使用COOKIE。 4)单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。 5)所以个人建议:
将登陆信息等重要信息存放为SESSION 其他信息如果需要保留，可以放在COOKIE中

## 40.display:none和visibility:hidden的区别?

display:none 隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不
存在。
visibility:hidden 隐藏对应的元素，但是在文档布局中仍保留原来的空间。


## 52.HTML与XHTML——二者有什么区别

区别: 1)所有的标记都必须要有一个相应的结束标记 2)所有标签的元素和属性的名字都必须使用小写 3)所有的XML标记都必须合理嵌套 4)所有的属性必须用引号""括起来 5)把所有<和&特殊符号用编码表示 6)给所有属性赋一个值 7)不要在注释内容中使“--” 8)图片必须有说明文字

## 53.常见兼容性问题?

png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.
浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。
IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。
浮动ie产生的双倍距离(IE6双边距问题:在IE6下，如果对元素设置了浮动，同时又设置了margin-left 或margin-right，margin值会加倍。)
     #box{ float:left; width:10px; margin:0 0 0 100px;}
这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入

 将其转化为行内属性。(_这个符号只有ie6会识别) 渐进识别的方式，从总体中逐渐排除局部。
首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。
   css .bb{
background-color:#f1ee18;/*所有识别*/ .background-color:#00deff\9; /*IE6、7、8识别*/ +background-color:#a200ff;/*IE6、7识别*/_background-color:#1e0bd1;/*IE6识别*/
}
怪异模式问题:漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发
怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。现在
可以使用html5推荐的写法: <doctype html>
上下margin重合问题
ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin- bottom却会发生重合。
解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom



## 57.DOM操作——怎样添加、移除、移动、复制、创建和查找节点。 1)创建新节点

createDocumentFragment() //创建一个DOM片段 createElement() //创建一个具体的元素 createTextNode() //创建一个文本节点
2)添加、移除、替换、插入 appendChild()
removeChild()
replaceChild()
insertBefore() //并没有insertAfter()
3)查找
getElementsByTagName() //通过标签名称
getElementsByName() //通过元素的Name属性的值(IE容错能力较强， 会得到一个数组，其中包括id等于name值的)
getElementById() //通过元素Id，唯一性

## 58.html5有哪些新特性、移除了那些元素?如何处理HTML5新标签的浏览器兼 容问题?如何区分 HTML 和 HTML5?

HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。 拖拽释放(Drag and drop) API 语义化更好的内容标签(header,nav,footer,aside,article,section) 音频、视频API(audio,video)
画布(Canvas) API
地理(Geolocation) API
本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失; sessionStorage 的数据在浏览器关闭后自动删除 表单控件，calendar、date、time、email、url、search 新的技术webworker, websocket,Geolocation
移除的元素
纯表现的元素:basefont，big，center，font, s，strike，tt，u; 对可用性产生负面影响的元素:frame，frameset，noframes;
支持HTML5新标签: IE8/IE7/IE6支持通过document.createElement方法产生的标签， 可以利用这一特性让这些浏览器支持HTML5新标签， 当然最好的方式是直接使用成熟的框架、使用最多的是html5shim框架
如何区分: DOCTYPE声明\新增的结构元素\功能元素

## 59.如何实现浏览器内多个标签页之间的通信?

调用localstorge、cookies等本地存储方式

## 60.什么是 FOUC(无样式内容闪烁)?你如何来避免 FOUC?

FOUC - FlashOf Unstyled Content 文档样式闪烁
<styletype="text/css"media="all">@import"../fouc.css";</style>
而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再 去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是 没有样式的，这段时间的长短跟网速，电脑速度都有关系。
   <!--[if lt IE 9]>
    <script>src="http://html5shim.googlecode.com/svn/trunk/html5.js"</script>
<![endif]-->

 解决方法简单的出奇，只要在 之间加入一个 或者 元素就可以了。
   <head>

## 61.null和undefined的区别 null是一个表示”无”的对象，转为数值时为0;undefined是一个表示”无”的原始值，转为数值时为NaN

当声明的变量还未被初始化时，变量的默认值为undefined。 null用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。 undefined表示”缺少值”，就是此处应该有一个值，但是还没有定义。典型用法是: (1)变量被声明了，但没有赋值时，就等于undefined。
(2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。 (3)对象没有赋值的属性，该属性的值为undefined。 (4)函数没有返回值时，默认返回undefined。
null表示”没有对象”，即该处不应该有值。典型用法是: (1) 作为函数的参数，表示该函数的参数不是对象。 (2) 作为对象原型链的终点。

## 65.哪些操作会造成内存泄漏? 内存泄漏指任何对象在您不再拥有或需要它之后仍然存在

垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0(没有其他对象引用过该对象)，或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。 闭包、控制台日志、循环(在两个对象彼此引用且彼此保留时，就会产生一个循环)

## 66.列举IE与其他浏览器不一样的特性?

IE支持currentStyle，FIrefox使用getComputStyle
IE 使用innerText，Firefox使用textContent
滤镜方面:IE:filter:alpha(opacity= num);Firefox:-moz-opacity:num 事件方面:IE:attachEvent:火狐是addEventListener 鼠标位置:IE是event.clientX;火狐是event.pageX IE使用event.srcElement;Firefox使用event.target IE中消除list的原点仅需margin:0即可达到最终效果;FIrefox需要设置margin:0;padding:0以及list- style:none
CSS圆角:ie7以下不支持圆角

## 67.WEB应用从服务器主动推送Data到客户端有那些方式? Javascript数据推送

Commet:基于HTTP长连接的服务器推送技术 基于WebSocket的推送方案
SSE(Server-Send Event):服务器推送数据新方式


## 73.异步加载和延迟加载

1)异步加载的方案: 动态插入script标签
2)通过ajax去获取js代码，然后通过eval执行
3)script标签上添加defer或者async属性
4)创建并插入iframe，让它异步执行js
5)延迟加载:有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。

## 74.ie各版本和chrome可以并行下载多少个资源 IE6 两个并发，iE7升级之后的6个并发，之后版本也是6个

Firefox，chrome也是6个

## 75.Flash、Ajax各自的优缺点，在使用中如何取舍?

Flash适合处理多媒体、矢量图形、访问机器;对CSS、处理文本上不足，不容易被搜索。 Ajax对CSS、文本支持很好，支持搜索;多媒体、矢量图形、机器访问不足。 共同点:与服务器的无刷新传递消息、用户离线和在线状态、操作DOM


## 78.GET和POST的区别，何时使用POST?

GET:一般用于信息获取，使用URL传递参数，对所发送信息的数量也有限制，一般在2000个字符
POST:一般用于修改服务器上的资源，对所发送的信息没有限制。
GET方式需要使用Request.QueryString来取得变量的值，而POST方式通过Request.Form来获取变量 的值，
也就是说Get是通过地址栏来传值，而Post是通过提交表单来传值。 然而，在以下情况中，请使用 POST 请求: 无法使用缓存文件(更新服务器上的文件或数据库) 向服务器发送大量数据(POST 没有数据量限制) 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

## 79.事件、IE**与火狐的事件机制有什么区别? 如何阻止冒泡? 1)我们在网页中的某个操作(有的操作对应多个事件)。例如:当我们点击一个按钮就会产生一个事

件。是可以被 JavaScript 侦测到的行为。 2)事件处理机制:IE是事件冒泡、firefox同时支持两种事件模型，也就是:捕获型事件和冒泡型事
件。;
3) ev.stopPropagation() ;注意旧ie的方法 ev.cancelBubble = true ;

## 80.ajax的缺点和在IE下的问题?

ajax的缺点
1)ajax不支持浏览器back按钮。
2)安全问题 AJAX暴露了与服务器交互的细节。 3)对搜索引擎的支持比较弱。 4)破坏了程序的异常机制。
5)不容易调试。
  
 IE缓存问题
在IE浏览器下，如果请求的方法是GET，并且请求的URL不变，那么这个请求的结果就会被缓存。解决这 个问题的办法可以通过实时改变请求的URL，只要URL改变，就不会被缓存，可以通过在URL末尾添加上 随机的时间戳参数('t'= + newDate().getTime())
或者:
Ajax请求的页面历史记录状态问题 可以通过锚点来记录状态，location.hash。让浏览器记录Ajax请求时页面状态的变化。 还可以通过HTML5的history.pushState，来实现浏览器地址栏的无刷新改变

## 81.谈谈你对重构的理解

网站重构:在不改变外部行为的前提下，简化结构、添加可读性，而在网站前端保持一致的行为。也就 是说是在不改变UI的情况下，对网站进行优化，
在扩展的同时保持一致的UI。
对于传统的网站来说重构通常是:
表格(table)布局改为DIV+CSS 使网站前端兼容于现代浏览器(针对于不合规范的CSS、如对IE6有效的) 对于移动平台的优化
针对于SEO进行优化
深层次的网站重构应该考虑的方面
减少代码间的耦合
让代码保持弹性
严格按规范编写代码
设计可扩展的API
代替旧有的框架、语言(如VB)
增强用户体验
通常来说对于速度的优化也包含在重构中 压缩JS、CSS、image等前端资源(通常是由服务器来解决) 程序的性能优化(如数据读写)
采用CDN来加速资源加载
对于JS DOM的优化
HTTP服务器的文件缓存
  open('GET','demo.php?rand=+Math.random()',true);//

## 82.HTTP状态码

100 Continue 继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确
认，之后发送具体参数信息
200 OK 正常返回信息
201 Created 请求成功并且服务器创建了新的资源
202 Accepted 服务器已接受请求，但尚未处理
301 Moved Permanently 请求的网页已永久移动到新位置。
302 Found 临时性重定向。
303 SeeOther 临时性重定向，且总是使用 GET 请求新的 URI。
304 Not Modified 自从上次请求后，请求的网页未修改过。
400 BadRequest 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。 401 Unauthorized 请求未授权。
403Forbidden 禁止访问。
404 NotFound 找不到如何与 URI 相匹配的资源。
500 InternalServer Error 最常见的服务器端错误。
503 ServiceUnavailable 服务器端暂时无法处理请求(可能是过载或维护)。

## 83.说说你对Promise的理解

依照 Promise/A+ 的定义，Promise 有四种状态:
pending: 初始状态, 非fulfilled 或 rejected.
fulfilled: 成功的操作.
rejected: 失败的操作.
settled: Promise已被fulfilled或rejected，且不是pending 另外， fulfilled 与 rejected 一起合称 settled。
Promise 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算。 Promise 的构造函数
构造一个 Promise，最基本的用法如下:
  var promise = new Promise(function(resolve, reject) {
  if (...) { // succeed
    resolve(result);
  } else {  // fails
    reject(Error(errMessage));
} });

 Promise 实例拥有 then 方法(具有 then 方法的对象，通常被称为 thenable)。它的使用方法如下: promise.then(onFulfilled, onRejected)
接收两个函数作为参数，一个在 fulfilled 的时候被调用，一个在 rejected 的时候被调用，接收参数就是 future，onFulfilled对应 resolve, onRejected 对应 reject。

## 84.说说你对前端架构师的理解

负责前端团队的管理及与其他团队的协调工作，提升团队成员能力和整体效率;
带领团队完成研发工具及平台前端部分的设计、研发和维护;
带领团队进行前端领域前沿技术研究及新技术调研，保证团队的技术领先
负责前端开发规范制定、功能模块化设计、公共组件搭建等工作，并组织培训。
实现一个函数clone，可以对JavaScript中的5种主要的数据类型(包括Number、String、Object、 Array、Boolean)进行值复制
  Object.prototype.clone = function(){
    var o = this.constructor === Array ? [] : {};
    for(var e inthis){
        o[e] = typeofthis[e] === "object" ? this[e].clone() : this[e];
    }
return o; }

## 85.说说严格模式的限制

严格模式主要有以下限制:
变量必须声明后再使用
函数的参数不能有同名属性，否则报错
不能使用with语句
不能对只读属性赋值，否则报错 不能使用前缀0表示八进制数，否则报错 不能删除不可删除的属性，否则报错
不能删除变量delete prop，会报错，只能删除属性delete global[prop] eval不会在它的外层作用域引入变量
eval和arguments不能被重新赋值 arguments不会自动反映函数参数的变化 不能使用arguments.callee 不能使用arguments.caller
禁止this指向全局对象 不能使用fn.caller和fn.arguments获取函数调用的堆栈

 增加了保留字(比如protected、static和interface) 设立”严格模式”的目的，主要有以下几个:
消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为; 消除代码运行的一些不安全之处，保证代码运行的安全; 提高编译器效率，增加运行速度; 为未来新版本的Javascript做好铺垫。
注:经过测试均不支持严格模式。

## 86.如何删除一个cookie

1)将时间设为当前时间往前一点。
var date = newDate(); date.setDate(date.getDate() - 1);//真正的删除 setDate()方法用于设置一个月的某一天。 2)expires的设置
document.cookie= 'user='+ encodeURIComponent('name') + ';expires = ' + newDate(0)
<strong> ， <em> 和 <b> ， <i> 标签
<strong> 标签和 <em> 标签一样，用于强调文本，但它强调的程度更强一些。
em 是 斜体强调标签，更强烈强调，表示内容的强调点。相当于html元素中的 <i>...</i> ;
< i > 是视觉要素，分别表示无意义的加粗，无意义的斜体。 em 和 strong 是表达要素(phraseelements)。


## 88.document.write()的用法 document.write()方法可以用在两个方面:页面载入过程中用实时脚本创建页面内容，以及用延时脚本

创建本窗口或新窗口的内容。 document.write只能重绘整个页面。innerHTML可以重绘页面的一部分 编写一个方法求一个字符串的字节长度 假设:一个英文字符占用一个字节，一个中文字符占用两个字节
     <b>

## 89.git fetch和git pull的区别

git pull:相当于是从远程获取最新版本并merge到本地
git fetch:相当于是从远程获取最新版本到本地，不会自动merge

## 90.说说你对MVC和MVVM的理解

MVC
View 传送指令到 Controller
Controller 完成业务逻辑后，要求 Model 改变状态
Model 将新的数据发送到 View，用户得到反馈
所有通信都是单向的。
Angular它采用双向绑定(data-binding):View的变动，自动反映在 ViewModel，反之亦然。 组成部分Model、View、ViewModel
View:UI界面 ViewModel:它是View的抽象，负责View与Model之间信息转换，将View的Command传送到Model; Model:数据访问层

## 91.请解释什么是事件代理

事件代理(Event Delegation)，又称之为事件委托。是 JavaScript 中常用绑定事件的常用技巧。顾名 思义，“事件代理”即是把原本需要绑定的事件委托给父元素，让父元素担当事件监听的职务。事件代理 的原理是DOM元素的事件冒泡。使用事件代理的好处是可以提高性能。

## 92.attribute和property的区别是什么?

attribute是dom元素在文档中作为html标签拥有的属性; property就是dom元素在js中作为对象拥有的属性。 所以:
functionGetBytes(str){
    var len = str.length;
    var bytes = len;
    for(var i=0; i<len; i++){
      if (str.charCodeAt(i) >255) bytes++;
    }
    return bytes;
  }
alert(GetBytes("你好,as"));

 对于html的标准属性来说，attribute和property是同步的，是会自动更新的， 但是对于自定义的属性来说，他们是不同步的，

## 93.说说网络分层里七层模型是哪七层

应用层:应用层、表示层、会话层(从上往下)(HTTP、FTP、SMTP、DNS) 传输层(TCP和UDP)
网络层(IP)
物理和数据链路层(以太网)
每一层的作用如下: 物理层:通过媒介传输比特,确定机械及电气规范(比特Bit) 数据链路层:将比特组装成帧和点到点的传递(帧Frame) 网络层:负责数据包从源到宿的传递和网际互连(包PackeT) 传输层:提供端到端的可靠报文传递和错误恢复(段Segment) 会话层:建立、管理和终止会话(会话协议数据单元SPDU) 表示层:对数据进行翻译、加密和压缩(表示协议数据单元PPDU) 应用层:允许访问OSI环境的手段(应用协议数据单元APDU)
各种协议
ICMP协议: 因特网控制报文协议。它是TCP/IP协议族的一个子协议，用于在IP主机、路由器之间传递控 制消息。
TFTP协议: 是TCP/IP协议族中的一个用来在客户机与服务器之间进行简单文件传输的协议，提供不复 杂、开销不大的文件传输服务。
HTTP协议: 超文本传输协议，是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用 于分布式超媒体信息系统。
DHCP协议: 动态主机配置协议，是一种让系统得以连接到网络上，并获取所需要的配置参数手段。

## 94.说说mongoDB和MySQL的区别

MySQL是传统的关系型数据库，MongoDB则是非关系型数据库 mongodb以BSON结构(二进制)进行存储，对海量数据存储有着很明显的优势。
对比传统关系型数据库,NoSQL有着非常显著的性能和扩展性优势，与关系型数据库相比，MongoDB的 优点有:
1弱一致性(最终一致)，更能保证用户的访问速度: 2文档结构的存储方式，能够更便捷的获取数据。

## 95.讲讲304缓存的原理 服务器首先产生ETag，服务器可在稍后使用它来判断页面是否已经被修改。本质上，客户端通过将该记

号传回服务器要求服务器验证其(客户端)缓存。
304是HTTP状态码，服务器用来标识这个文件没修改，不返回内容，浏览器在接收到个状态码后，会使 用浏览器已缓存的文件
客户端请求一个页面(A)。 服务器返回页面A，并在给A加上一个ETag。 客户端展现该页面，并将页 面连同ETag一起缓存。 客户再次请求页面A，并将上次请求时服务器返回的ETag一起传递给服务器。 服 务器检查该ETag，并判断出该页面自上次客户端请求之后还未被修改，直接返回响应304(未修改—— Not Modified)和一个空的响应体。

## 96.什么样的前端代码是好的

高复用低耦合，这样文件小，好维护，而且好扩展
