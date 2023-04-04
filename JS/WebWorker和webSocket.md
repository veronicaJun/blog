# Web Worker 和 webSocket

- 其实这俩根本没法比，一个是多线程，一个是通信协议。

- web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 并且通过 `postMessage` 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。
- Web Worker 让JS有了多线程的能力，可以将复杂耗时的操作都交付给 Worker 线程处理。
- worker主线程:
    - 检测浏览器对于 web worker 的支持性
    - 通过 worker = new Worker( url ) 加载一个JS文件来创建一个worker，同时返回一个worker实例。
    - 通过 worker.postMessage( data ) 方法来向worker发送数据。
    - 绑定 worker.onmessage 方法来接收worker发送过来的数据。
    - 可以使用 worker.terminate() 来终止一个worker的执行。

- websocket 是一种网络通信协议，它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。
- Service Worker是一种离线缓存技术，属于web worker的一种。
