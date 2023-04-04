# `Object.is()` 与比较操作符 `===`、`==` 的区别？

- 双等号`==`，如果两边的类型不一致，则会进行强制类型转化后再进行比较。
- 三等号`===`，如果两边的类型不一致时，不会做强制类型准换，直接返回 `false`。
- `Object.is()` 更接近`===`，但对待有符号的零和 `NaN` 不同。
    - 例子

        ```js
        // Case 1: Evaluation result is the same as using ===
        Object.is(25, 25);                // true
        Object.is('foo', 'foo');          // true
        Object.is('foo', 'bar');          // false
        Object.is(null, null);            // true
        Object.is(undefined, undefined);  // true
        Object.is(window, window);        // true
        Object.is([], []);                // false
        var foo = { a: 1 };
        var bar = { a: 1 };
        Object.is(foo, foo);              // true
        Object.is(foo, bar);              // false

        // Case 2: Signed zero
        Object.is(0, -0);                 // false
        Object.is(+0, -0);                // false
        Object.is(-0, -0);                // true
        Object.is(0n, -0n);               // true

        // Case 3: NaN
        Object.is(NaN, 0/0);              // true
        Object.is(NaN, Number.NaN)        // true
        ```
