# pubsub

消息订阅与发布机制

- 下载: npm install pubsub-js --save
- 使用:
  - import PubSub from 'pubsub-js' //引入
  - PubSub.subscribe('delete', function(data){ }); //订阅
  - PubSub.publish('delete', data) //发布消息
