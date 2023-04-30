# require

- require 具体实现是什么
    - 解题：
        - 初阶：
            - CommonJS 规范
                - 同步加载
                - 所有代码都运行在模块作用域，不会污染全局作用域。
                - 独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互。
                - 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
                - 模块加载的顺序，按照其在代码中出现的顺序。
            - 基本过程：
                - 先解析路径对应的文件绝对路径
                - 读文件内容，并注入 require/module/exports 等变量
                - 编译 & 执行模块，返回 module.exports 值
                - 保存模块对象，下次直接返回
        - 中阶：
            - 先算出模块的绝对路径 module._resolveFilename
                - 如果是 内置模块，直接返回
                - 相对 or 绝对路径，直接合并文件路径
                - 例如在 /src/a.js 的 require('./b.js')会被直接解析为 /src/b.js
                - 沿路径向上迭代遍历所有层级
                - /home/bin/coding/node-test/node_module
                - /home/bin/coding/node_module
                - /home/bin/node_module
                - /home/node_module
                - node_module
                - $Prefix/lib/node如果有缓存，直接返回缓存(以文件的绝对路径为 key)
            - 如果是内置模块，调用 loadNativeModule 并返回
            - 生成 Module 实例，存入缓存
            - 调用 module.load 加载模块
                - 如果 .js 结尾
                    - 读入文件内容
                    - 调用 module._compile，拼接字符串，传入 require/module/exports等变量，包装成独立函数 function (require,module,exports,...){ ${content} }
                    - 编译 & 执行模块
                - 如果 .json结尾
                    - 调用 JSONParse 并赋值给 module.exports 对象
                    - 如果 .node 结尾
                    - 调用 process.dlopen 加载内容
            - 返回模块的 exports 值
        - 高阶：
            - 横向的，node 中的 esm import/export 又是怎么实现的？这方面的资料很少，有空的同学完全可以自己输出一份
            - 按照 node 的这种加载逻辑，可以推导出那些性能优化方案：
                - 文件层级不能太深
                - 大 JSON 对象可以用 stream 方式读入

        - 核心代码：

        ```js
        Module._load = function(request, parent, isMain) {

        //  计算绝对路径
        var filename = Module._resolveFilename(request, parent);

        //  第一步：如果有缓存，取出缓存
        var cachedModule = Module._cache[filename];
        if (cachedModule) {
            return cachedModule.exports;

        // 第二步：是否为内置模块
        if (NativeModule.exists(filename)) {
            return NativeModule.require(filename);
        }

        // 第三步：生成模块实例，存入缓存
        var module = new Module(filename, parent);
        Module._cache[filename] = module;

        // 第四步：加载模块
        try {
            module.load(filename);
            hadException = false;
        } finally {
            if (hadException) {
            delete Module._cache[filename];
            }
        }

        // 第五步：输出模块的exports属性
        return module.exports;
        };
        ```

    - 资料：
        - <http://www.ruanyifeng.com/blog/2015/05/require.html>
