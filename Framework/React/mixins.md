# mixins

- why
    - 代码复用：其他类可以访问mixin类的方法而不必成为其子类。
    - 避免了多继承的复杂
- when
- what
    - mixin是一个包含方法的类，其他类无需继承它就可以使用这些方法。
    - 实现
        - Object.assign：JavaScript 不支持多重继承，但是mixin 可以通过将方法复制到原型中来实现。
    - 问题：
        - 违背了关注分离：状态与行为之间缺少分离
- where
- how
