# path 模块

1. path.resolve 拼接规范的绝对路径（常用）
2. path.sep 获取操作系统的路径分隔符
3. path.parse 解析路径并返回对象
4. path.basename 获取路径的基础名称
5. path.dirname 获取路径的目录名
6. path.extname 获取路径的扩展名

```js
const path = require('path');

// reslove 第一个参数给绝对路径，后面给相对路径
console.log(path.resolve(__dirname, 'index.html'));

// sep 分隔符
console.log(path.sep); // windows \ Linux /

// parse 方法
// __filename 文件的绝对路径
console.log(path.parse('d:\/nodejs\/index.html'));

```
