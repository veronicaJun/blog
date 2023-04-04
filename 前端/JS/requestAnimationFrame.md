# requestAnimationFrame

- 实现动画效果的方法
    - Javascript：setTimeout
    - CSS3：transition 和 animation
    - HTML5：canvas
    - HTML5：requestAnimationFrame

- 浏览器执行过程
    1. 首先要判断`document.hidden`属性是否为 true ,即页面处于可见状态下才会执行；
    2. 浏览器清空上一轮的动画函数；
    3. 这个方法返回的 handlerId 值会和动画函数 callback 进入到动画帧请求回调函数列；
    4. 浏览器会遍历动画帧请求回调函数列表，根据 handlerId 的值大小，依次去执行相应的动画函数。

- 取消动画
    - `cancelAnimationFrame(handlerId)`

- `requestAnimationFrame` 的优势：
    - CPU节能
        - 使用 setTimeout 实现的动画，当页面被隐藏或最小化时，setTimeout 仍然在后台执行动画任务，由于此时页面处于不可见或不可用状态，刷新动画是没有意义的，完全是浪费CPU资源。
        - requestAnimationFrame，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统步伐走的 requestAnimationFrame 也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了CPU开销。
    - 函数节流
        - requestAnimationFrame 由系统来决定回调函数的执行时机，在高频率事件(resize,scroll等)中，可保证每个刷新间隔内回调函数只被执行一次，既能保证流畅性，也能更好的节省函数执行的开销。
    - 减少DOM操作
        - requestAnimationFrame 会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，一般来说，这个频率为每秒60帧。

- setTimeout 出现卡顿、抖动的现象的原因
    - setTimeout的执行时间并不是确定的。
        - setTimeout 任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；
    - 时间间隔固定。
        - 不同设备的屏幕刷新频率可能会不同，而 setTimeout 只能设置一个固定的时间间隔。
