# 其他值到字符串的转换规则？

- Null 和 Undefined 类型 ，null 转换为 "null"，undefined 转换为 "undefined"，
- Boolean 类型，true 转换为 "true"，false 转换为 "false"。
- Number 类型的值直接转换，不过那些极小和极大的数字会使用指数形式。
- Symbol 类型的值直接转换，但是只允许显式强制类型转换，使用隐式强制类型转换会产生错误。
- 对普通对象来说，如果对象有自己的 toString() 方法，字符串化时就会调用该方法并使用其返回值，否则会调用（Object.prototype.toString()）来返回内部属性 [[前端/JS/class]] 的值，如"[object Object]"。
