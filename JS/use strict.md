# use strict

- use strict 是一种 ECMAscript5 添加的（严格模式）运行模式，这种模式使得 Javascript 在更严格的条件下运行。
- 设立严格模式的目的如下：
    - 消除 Javascript 语法的不合理、不严谨之处，减少怪异行为;
    - 消除代码运行的不安全之处，保证代码运行的安全；
    - 提高编译器效率，增加运行速度；
    - 为未来新版本的 Javascript 做好铺垫。
- 限制：
    - 不允许使用未声明的变量：
    - 不允许删除变量或对象。
    - 不允许删除函数。
    - 不允许变量重名:
    - 不允许使用八进制:
    - 不允许使用转义字符:
    - 不允许对只读属性赋值:
    - 不允许对一个使用getter方法读取的属性进行赋值
    - 不允许删除一个不允许删除的属性：
    - 变量名不能使用 "eval" 字符串:
    - 变量名不能使用 "arguments" 字符串:
    - 不允许使用with
    - 由于一些安全原因，在作用域 eval() 创建的变量不能被调用：
    - 禁止this关键字指向全局对象。
    - 增加了保留字
        - implements
        - interface
        - package
        - private
        - protected
        - public
        - static
        - yield
