# Promise、setTimeout、Async-Await 的区别

- setTimeout
    - setTimeout 是一个宏任务，会在主线程空闲的时候执行，因此它的执行时间不可预测。
- Promise
    - Promise 是一个微任务，会在当前任务执行完毕后立即执行。
    - Promise 本身是同步的立即执行函数， 当在executor中执行resolve或者reject的时候, 此时是异步操作， 会先执行then/catch等，当主栈完成后，才会去调用resolve/reject中存放的方法执行，打印p的时候，是打印的返回结果，一个Promise实例。

- 当JS主线程执行到Promise对象时：
    - promise1.then() 的回调就是一个 task
    - promise1 是 resolved或rejected: 那这个 task 就会放入当前事件循环回合的 microtask queue
    - promise1 是 pending: 这个 task 就会放入 事件循环的未来的某个(可能下一个)回合的 microtask queue 中
    - setTimeout 的回调也是个 task ，它会被放入 macrotask queue 即使是 0ms 的情况

- async/await
    - async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。
    - await的含义为等待，也就是 async 函数需要等待await后的函数执行完成并且有了返回结果（Promise对象）之后，才能继续执行下面的代码。await通过返回一个Promise对象来实现同步的效果。
