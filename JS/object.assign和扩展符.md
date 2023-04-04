# object.assign和扩展符

- 都是浅拷贝。
- 都不复制继承的属性或类的属性。
- object.assign 和扩展符的区别
    - object.assign 会修改原对象，扩展符不修改原对象。
    - Object.assign 会触发 set 方法，扩展符不触发。
    - 扩展符会复制 ES6 的 symbols 属性。
