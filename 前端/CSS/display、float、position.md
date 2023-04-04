# display、float、position

1. 首先，`display:none`优先级最高，position 和 float 的值都不生效；
2. 其次，`position:absolute`和`position:fixed`，浮动失效，调整`display`的值为 table 或 block；
3. 再次，`float != none`或者根元素生效，调整`display`的值为 table 或 block；
4. 最后，非根元素，并且非浮动元素，并且非绝对定位的元素，`display`的值生效。
