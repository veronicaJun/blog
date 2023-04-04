# translate改变位置

1. `transform`或`opacity`的改变不触发重排（reflow）或重绘（repaint），只会触发复合（compositions）。绝对定位会触发重新布局，进⽽触发重绘和复合。
2. `translate`更⾼效，可以缩短平滑动画的绘制时间。
    - `transform`使浏览器为元素创建⼀个 GPU 图层，但改变绝对定位会使⽤到 CPU。
3. `translate`改变位置时，元素依然会占据其原始空间，绝对定位不会。
