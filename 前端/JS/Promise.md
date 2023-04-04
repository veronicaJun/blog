# Promise

- Promise是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，避免了地狱回调。

- Promise的实例有三个状态:
    - Pending（进行中）
    - Resolved（已完成）
    - Rejected（已拒绝）

- Promise的实例有两个过程：
    - pending -> fulfilled : Resolved（已完成）
    - pending -> rejected：Rejected（已拒绝）
    - 注意：一旦从进行状态变成为其他状态就永远不能更改状态了。

- Promise的特点：
    - 对象的状态不受外界影响。
    - 一旦状态改变就不会再变，任何时候都可以得到这个结果。
    - then函数属于微任务，会在本轮事件循环的末尾执行。
    - 在构造 Promise 的时候，构造函数内部的代码是立即执行的

- Promise的缺点：
    - 无法取消Promise，一旦新建它就会立即执行，无法中途取消。
    - 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
    - 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

1. Promise的基本用法

   - 创建Promise对象
       - new Promise
       - promise.resolve
       - promise.reject

   - Promise方法

       1. then()
           - 接受两个回调函数作为参数。
               - 状态变为resolved时的回调
               - 状态变为rejected时的回调。可省略。
           - 返回一个新的Promise实例。可以采用链式写法。

       2. catch()
           - 相当于then方法的第二个参数，指向reject的回调函数。
           - 在执行resolve回调时，如果出现错误，抛出异常，也进入catch方法中。

       3. all()
           - 接收promise对象数组。
           - 当数组中所有都resolved，all的状态为resolved，否则为rejected。
           - resolved时的参数也是一个数组，保存着每一个promise对象resolve执行时的值。

       4. race()
           - 接收promise对象数组。
           - 第一个promise变成resolved，为resolved。
           - 第一个promise变成rejected，为rejected。
           - 用途：限时完成任务，超时则失败。
               - Promise.race([promise1,timeOutPromise(5000)]).then(res=>{})

       5. finally()

           - 不管 Promise 对象最后状态如何，都会执行。
           - 不接受任何参数。

2. Promise解决了什么问题
    - 回调嵌套，变链式调用。

3. Promise.all和Promise.race的区别的使用场景
   - Promise.all
       - 全部执行，并按顺序保存结果
       - 用途：发送多个请求并根据请求顺序获取和使用数据的场景
   - Promise.race
         - 哪个结果获得的快，就返回那个结果
         - 用途：限时完成。

4. 对async/await 的理解

    - async/await其实是 Generator 的语法糖，是异步任务的同步写法。
    - async 用于申明一个 function 是异步的
    - await 用于等待一个异步方法执行完成
    - await只能出现在 async 函数中

5. await 到底在等啥？

    - await 等的是一个返回值。可以等任意表达式的结果，
    - await 表达式的运算结果
        - 如果等到的不是 Promise 对象，那 await 表达式的运算结果就是它等到的东西。
        - 如果等到的是 Promise 对象，await 会阻塞后面的代码，等着Promise 对象 resolve，然后得到 resolve 的值，作为 await 表达式的运算结果。(这是 await 必须用在 async 中的原因)

6. async/await的优势

    - 将异步任务，用同步的写法表达出来，代码可读性更强

7. async/await对比Promise的优势

    - Promise
        - 解决了回调嵌套的问题，变成了链式调用
        - 调试不易，错误处理不友好
    - async/await
        - 异步代码的同步写法
        - 可以一步一步调试

8. async/await 如何捕获异常
    - try/catch

        ```js
        async function fn(){
            try{
                let a = await Promise.reject('error')
            }catch(error){
                console.log(error)
            }
        }
        ```
