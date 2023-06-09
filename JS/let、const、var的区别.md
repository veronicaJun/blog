# let、const、var的区别

- 块级作用域： 块作用域由 { } 包裹
    - 解决了 ES5 中的两个问题
        - 内层变量可能覆盖外层变量
        - 用来计数的循环变量泄露为全局变量
    - let 和 const 具有块级作用域
    - var 不存在块级作用域

- 变量提升
    - var存在变量提升
    - let和const不存在变量提升，即在变量只能在声明之后使用，否在会报错。

- 给全局添加属性
    - var声明的变量为全局变量，并且会将该变量添加为全局对象的属性
    - let和const不会。
- 重复声明
    - var声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历
    - const和let不允许重复声明变量。
- 暂时性死区： 变量声明变量之前不可用的。
    - let、const 有暂时性死区。
    - var 不存在暂时性死区。
- 初始值设置
    - var 和 let 可以不用设置初始值。
    - const声明变量必须设置初始值。
- 指针指向
    - let创建的变量是可以更改指针指向（可以重新赋值）。
    - const声明的变量是不允许改变指针的指向，但可以改变指针指向的值。
