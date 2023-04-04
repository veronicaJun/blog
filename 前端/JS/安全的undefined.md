# 如何获取安全的 undefined 值？

- undefined 是一个全局变量，可以被重新赋值，但是这样会影响 undefined 的正常判断。
- void ___ 没有返回值，因此返回结果是 undefined。
- void 并不改变表达式的结果，只是让表达式不返回值。
- 因此可以用 void 0 来获得 undefined。
