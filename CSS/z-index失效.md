# z-index失效

- 父元素position为relative时，子元素的z-index失效。
    - 解决：父元素position改为absolute或static；
- 元素没有设置position属性为非static属性。
    - 解决：设置该元素的position属性为relative，absolute或是fixed中的一种；
- 元素在设置z-index的同时还设置了float浮动。
    - 解决：float去除，改为display：inline-block；
