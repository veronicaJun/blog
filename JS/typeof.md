# typeof

- 写法：`typeof 变量`
- 作用：输出 变量的类型
    - 能判断除 null 以外的基本数据类型
    - 不能判断出 null, array 的类型
- 原理：
      1. JavaScript 所有值都存储在 32 位的单元中，包含一个类型标签(1-3 bits) 以及要存储值的数据。类型标签存储在每个单元的低位中，共有五种数据类型：
         1. 000: object   - 当前存储的数据指向一个对象。
         2. 1: int        - 当前存储的数据是一个 31 位的有符号整数。
         3. 010: double   - 当前存储的数据指向一个双精度的浮点数。
         4. 100: string   - 当前存储的数据指向一个字符串。
         5. 110: boolean  - 当前存储的数据是布尔值。

      2. 有两种特殊数据类型：
          1. undefined的值是 (-2)^30(一个超出整数范围的数字)；
          2. null 的值是机器码 NULL 指针(null 指针的值全是 0)
- 拓展：
    - [类型判断](./类型判断.md)
    - typeof null; // "object"
        - 是 JavaScript 设计的一个 bug，null 的类型标签 和 object 的类型标签相同，因此 typeof null 也返回 "object"。

    - typeof NaN; // "number"
        - NaN 指“不是一个数字”，是一个“警戒值”，用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。
        - NaN 与任何值都不相等，包括它自己，因此 NaN === NaN 为 false。
    - typeof (new String('')); // "object"
        - 所有使用 new 调用的构造函数都将返回非基本类型（"object" 或 "function"）
        - typeof (new Function('')); // "function"
    - typeof 操作符的优先级高于加法（+）等二进制操作符。
    - 未声明的标识符
        - typeof 未声明的标识符; // "undefined"
        - 但块级作用域中，typeof 未声明的标识符; // ReferenceError
    - [数据类型](./数据类型.md)

- 案例：

    ```js
    var u = undefined, 
        n = 1, 
        str = 'string',
        b = true, 
        f = function(){}, 
        o = {}, 
        s = Symbol('s'), 
        big = BigInt(Number.MAX_SAFE_INTEGER),
        a = [];

    console.log("🐶 --------------------------------------------------------🐶")
    console.log("🐶 typeof undefined:", typeof u)//undefined
    console.log("🐶 typeof null:", typeof null)//object
    console.log("🐶 typeof number:", typeof n)//number
    console.log("🐶 typeof string:", typeof str)//string
    console.log("🐶 typeof boolean:", typeof b)//boolean
    console.log("🐶 typeof function:", typeof f)//function
    console.log("🐶 typeof object:", typeof o)//object
    console.log("🐶 typeof symbol:", typeof s)//symbol
    console.log("🐶 typeof big:", typeof big)//bigint
    console.log("🐶 typeof array:", typeof a)//object
    console.log("🐶 --------------------------------------------------------🐶")
    ```

    ![typeof](assets/2023-03-27-10-53-35.png)

- 实现一个可以检查非基本类型的 typeof：

    ```js
    function type(value) {
        if (value === null) {
            return "null";
        }
        const baseType = typeof value;
        // 基本类型
        if (!["object", "function"].includes(baseType)) {
            return baseType;
        }

        // Symbol.toStringTag 通常指定对象类的“display name”
        // 它在 Object.prototype.toString() 中使用。
        const tag = value[Symbol.toStringTag];
        if (typeof tag === "string") {
            return tag;
        }

        // 如果它是一个函数，其源代码以 "class" 关键字开头
        if (
            baseType === "function" &&
            Function.prototype.toString.call(value).startsWith("class")
        ) {
            return "class";
        }

        // 构造函数的名称；例如 `Array`、`GeneratorFunction`、`Number`、`String`、`Boolean` 或 `MyCustomClass`
        const className = value.constructor.name;
        if (typeof className === "string" && className !== "") {
            return className;
        }

        // 在这一点上，没有合适的方法来获取值的类型，因此我们使用基本实现。 
        return baseType;
    }
    ```
