# Buffer(缓冲器)



## 1. 概念

Buffer 是一个类似于数组的`对象`，用于表示固定长度的字节序列
Buffer 本质是一段内存空间，专门用于处理`二进制数据`。

## 2. 特点

1. Buffer 大小固定且无法调整
2. Buffer 性能较好，可以直接对计算机内存进行操作
3. 每个元素的大小为 1 字节（byte）

## 3. 使用

1. 创建 Buffer
    1. alloc(全新的)

        ```js
        let buf_1 = Buffer.alloc(10);
        ```

    2. allocUnsafe(可能包含旧的数据,速度比 alloc 快)

        ```js
        let buf_2 = Buffer.allocUnsafe(10);
        ```

    3. from

        ```js
        let buf_3 = Buffer.from("hello");
        let buf_4 = Buffer.from([105,108,118,101,121,111,117]);
        ```

2. Buffer 与字符串的转化
    借助`toString`方法将 Buffer 转为字符串

    ```js
    let buf_4 = Buffer.from([105,108,118,101,121,111,117]);
    console.log(buf_4.toString());
    ```

    >toString 默认是按照 utf-8 编码方式进行转换的。
3. Buffer 的读写
    Buffer 可以直接通过[]的方式对数据进行处理。

    ```js
    //读取
    console.log(buf_3[1]);
    //修改
    buf_3[1] = 97;
    console.log(buf_3[1]);
    ```

    >注意：
        1. 如果修改的数值超过 255，则高于 8 位数据会被舍弃
        2. 一个 utf-8 的字符一般占 3 个字节

## 进程和线程

1. 进程：
2. 线程：一个进程中执行的一个执行流，一个线程是属于某个进程的。
