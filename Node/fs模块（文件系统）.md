# fs 模块（文件系统）



## 1. 文件写入

### 1. writeFile 异步写入

语法：`fs.writeFile(file, data[, options], callback)`
返回值：`undefined`
代码示例：

```js
// require 是 Node.js 环境中的‘全局‘变量，用来导入模块
const fs = require('fs');

// 将 ‘三人行，必有我师焉。’写入到当前文件夹下‘座右铭.txt’文件中
fs.writeFile('./座右铭.txt','三人行，必有我师焉。',err=>{
    // err 写入失败：错误对象 写入成功：null
    if(err){
        console.log(err);
        return
    }
    console.log('写入 successful');
});
```

### 2. writeFileSync 同步写入

```js
fs.writeFileSync('./data.txt','test');
```

### 3. appendFile / appendFileSync 追加写入

```js
// 异步
fs.appendFile('./座右铭.txt','\r\n择其善者而从之，择其不善者而改之。',err=>{
    // err 写入失败：错误对象 写入成功：null
    if(err){
        console.log(err);
        return
    }
    console.log('追加写入 successful');
})
// 同步
fs.appendFileSync('./座右铭.txt','\r\n温故而知新，可以为师矣。',err=>{
    // err 写入失败：错误对象 写入成功：null
    if(err){
        console.log(err);
        return
    }
    console.log('追加写入 successful');
})
// writeFile 配置
fs.writeFile('./座右铭.txt','三人行，必有我师焉。',{flag: 'a'},err=>{
    // err 写入失败：错误对象 写入成功：null
    if(err){
        console.log(err);
        return
    }
    console.log('写入 successful');
});
```

使用场景：

1. 日志
2. 持续记录信息

### 4. createWriteSteam 流式写入

语法：`fs.createWriteSteam(path[, options])`
返回值： Object
代码示例：

```js
// 创建写入流对象
const ws = fs.createWriteSteam('./观书有感。txt');
// 持续写入
ws.write('三人行，必有我师焉。');
ws.write('择其善者而从之，择其不善者而改之。');
// 关闭通道
ws.close();
```

>`程序打开一个文件是需要消耗资源的`，流式写入可以减少打开关闭文件的次数。
>适用于 `大文件写入`或 `频繁写入` 的场景，writeFile 适合 `写入频率较低` 的场景。
>
### 5. 写入文件场景

* 下载文件
* 安装软件
* 保存程序日志，如 git
* 编辑器保存文件
* 视频录制

>当 `需要持久化保存数据` 的时候，应该想到 `文件写入`

## 2. 文件读取

### 1. readFile 异步读取

语法：`fs.readFile(path[, options], callback)`
返回值：undefined
代码示例：

```js
fs.readFile('./座右铭.txt',(err,data)=>{
    // err 写入失败：错误对象 写入成功：null
    if(err){
        console.log('读取失败');
        return
    }
    console.log(data.toString());
});
```

### 2. readFileSync 同步读取

语法：`readFileSync(path)`
返回值：
代码示例：

```js
let data = fs.readFile('./座右铭.txt');
console.log(data.toString());
```

### 3. createReadStrem 流式读取

```js
const rs = fs.createReadStrem('/笑看风云.mp4');
const ws = fs.createWriteStrem('/笑看风云-1.mp4');
// 绑定 data 事件，chunk 大块
rs.on('data',chunk =>{
    console.log(chunk); // length 65536 => 64 KB
    ws.write(chunk); // 将读取到的数据，放入写入流 也可以写为 rs.pipe(ws)
})

rs.on('end',()=>{
    console.log('读取完成');
});

```

>流式读写 消耗的内存空间更少
>
### 4. 读取文件应用场景

* 电脑开机
* 程序运行
* 编辑器打开文件
* 查看图片
* 播放视频
* 播放音乐
* git 查看日志
* 上传文件
* 查看聊天记录

## 3. 文件读取与重命名

语法：
    `fs.rename(oldpath, newpath, callback)`
    `fs.renameSycn(oldpath, newpath)`
代码示例：

```js
fs.rename('./观书有感.txt','./论语/观书有感 2.txt',err=>{
    if(err)throw err;
    console.log('文件重命名 及 移动成功');
});
```

## 4. 文件删除

语法：
    `fs.unlink(path, callback);`
    `fs.unlinkSync(path);`
    `fs.rm(path,callback);`
    `fs.rmSync(path);`
代码示例：

```js
fs.unlink('./test.txt',err=>{
    if(err) throw err;
    console.log('删除成功');
});

```

## 5. 文件夹操作

### 1. mkdir 创建文件夹

语法：
    `fs.mkdir(path[, options], callback);`
    `fs.mkdirSync(path[, options]);`

```js
// 递归创建文件夹
fs.mkdir('./a/b/c',{rescursive:true},err=>{
    if(err){
        console.log('fail');
        return;
    }
    console.log('success');
});
```

### 2. readdir 读取文件夹

```js
fs.readdir('../资料',(err,data)=>{
    if(err){
        console.log('fail');
        return;
    }
    console.log(data);// 文件夹资源的名称列表
});
```

### 3. rmdir 删除文件夹

```js
// 递归删除
// fs.rmdir 将被移除，不建议使用
fs.rm('./a/c',{rescursive:true}, err=>{
    if(err){
        console.log('fail');
        return 
    }
    console.log('success');
})
```

## 6. 查看资源状态

```js
fs.stat('../x.mp4', (err,data)=>{
    if(err){
        console.log('fail');
        return 
    }
    console.log('success');
    console.log(data.isFile());// 是否是文件
    console.log(data.isDirectory());//是否是文件夹
});
```

## 7. 相对路径问题

* 相对路径
  * ./a.html 当前目录
  * a.html 当前目录
  * ../a.html 上层目录

* 绝对路径
  * d:/index.html
  * /index.html

## 8. __dirname

可以理解为全局变量，存的是，所在文件的所在目录的绝对路径
