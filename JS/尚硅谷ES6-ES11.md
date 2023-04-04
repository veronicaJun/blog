# 尚硅谷 ES6 - ES11

[Toc]

## 第 1 章 ECMASript 相关介绍

### 什么是 ECMA

ECMA(European Computer Manufacturers Association)中文名称为欧洲计算机制 造商协会，这个组织的目标是评估、开发和认可电信和计算机标准。1994 年后该 组织改名为 Ecma 国际。  

### 什么是 ECMAScript

ECMAScript 是由 Ecma 国际通过 ECMA-262 标准化的脚本程序设计语言。

### 什么是 ECMA-262

Ecma 国际制定了许[标准](http://www.ecma-international.org/publications/standards/Standard.htm)，而 ECMA-262 只是其中的一个

### ECMA-262 历史

ECMA-262(ECMAScript)[历史版本查看网址](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
注:从 ES6 开始，每年发布一个版本，版本号比年份最后一位大 1

### 谁在维护 ECMA-262

TC39(Technical Committee 39)是推进 ECMAScript 发展的委员会。其会员都是 公司(其中主要是浏览器厂商，有苹果、谷歌、微软、因特尔等)。TC39 定期 召开会议，会议由会员公司的代表与特邀专家出席

### 为什么要学习 ES6

- ES6 的版本变动内容最多，具有里程碑意义
- ES6 加入许多新的语法特性，编程实现更简单、高效
- ES6 是前端发展趋势，就业必备技能

### ES6 兼容性

<http://kangax.github.io/compat-table/es6/> 可查看兼容性

## 第 2 章 ECMASript 6 新特性

### let 关键字

let 关键字用来声明变量，使用 let 声明的变量有几个特点:

1) 不允许重复声明
2) 块儿级作用域
3) 不存在变量提升(声明前不可使用)
4) 不影响作用域链
应用场景:以后声明变量使用 let 就对了

### const 关键字

const 关键字用来声明常量，const 声明有以下特点

1) 声明必须赋初始值
2) 标识符一般为大写
3) 不允许重复声明
4) 值不允许修改
5) 块儿级作用域
注意: 对象属性修改和数组元素变化不会出发 const 错误
应用场景:声明对象类型使用 const，非对象类型声明选择 let

### 变量的解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称
为解构赋值。

```js
//数组的解构赋值
 const arr = ['张学友', '刘德华', '黎明', '郭富城'];
 let [zhang, liu, li, guo] = arr;
  
//对象的解构赋值
 const lin = {
     name: '林志颖',
     tags: ['车手', '歌手', '小旋风', '演员']
 };
 let {name, tags} = lin;

//复杂解构
const wangfei = {
    name: '王菲',
    age: 18,
    songs: ['红豆', '流年', '暧昧', '传奇'], 
    history: [
        {name: '窦唯'},
        {name: '李亚鹏'},
        {name: '谢霆锋'} ]
};

let {songs: [one, two, three], history: [first, second, third]} = wangfei;
```

注意:频繁使用对象方法、数组元素，就可以使用解构赋值形式

### 模板字符串

模板字符串(template string)是增强版的字符串，用反引号(`)标识，特点:

1) 字符串中可以出现换行符
2) 可以使用 ${xxx} 形式输出变量

```js
  // 定义字符串
 let str = `<ul>
     <li>沈腾</li>
     <li>玛丽</li>
     <li>魏翔</li>
     <li>艾伦</li>
     </ul>`;
  // 变量拼接
 let star = '王宁';
 let result = `${star}在前几年离开了开心麻花`;
 ```

注意:当遇到字符串与变量拼接的情况使用模板字符串

### 简化对象写法

ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这
样的书写更加简洁。

```js
 let name = '尚硅谷';
 let slogon = '永远追求行业更高标准';
 let improve = function () {
    console.log('可以提高你的技能');
 }
 //属性和方法简写
 let atguigu = {
     name,
     slogon,
     improve,
     change() {
         console.log('可以改变你')
     }
 };
```

注意:对象简写形式简化了代码，所以以后用简写就对了

### 箭头函数

ES6 允许使用「箭头」(=>)定义函数。
箭头函数的注意点:

1) 如果形参只有一个，则小括号可以省略
2) 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果
3) 箭头函数 this 指向声明时所在作用域下 this 的值, 无法改变
4) 箭头函数不能作为构造函数实例化对象
5) 不能使用 arguments 变量（arguments 用来保存实参）

```js
//1. 通用写法
let fn = (arg1, arg2, arg3) => { return arg1 + arg2 + arg3;}
//2. 省略小括号的情况
 let fn2 = num => {
    return num * 10;
 };
 //3. 省略花括号的情况
 let fn3 = score => score * 20;
//4. this 指向声明时所在作用域中 this 的值, 无法改变
 let fn4 = () => {
    console.log(this);
 }

 let school = {
     name: '尚硅谷',
     getName(){
        let fn5 = () => {
             console.log(this);
        }
        fn5();
     }
 };
 ```

注意:箭头函数不会更改 this 指向
适合与 this 无关的回调，如定时器，数组方法回调，不适合事件回调，对象的方法

### 函数参数默认值

ES6 允许给函数参数赋值初始值

```js
//1. 形参初始值 具有默认值的参数, 一般位置要靠后(潜规则)
 function add(a,b,c=10) {
     return a + b + c;
 }
 let result = add(1,2);
 console.log(result);

//2. 与解构赋值结合
function connect({host="127.0.0.1", username,password, port}){
    console.log(host)
    console.log(username)
    console.log(password)
    console.log(port)
}
connect({
    host: 'atguigu.com',
    username: 'root',
    password: 'root',
    port: 3306
})
```

### rest 参数

ES6 引入 rest 参数，用于获取函数的实参，用来代替 arguments

```js
//作用与 arguments 类似
 function add(...args){
    console.log(args);
 }
 add(1,2,3,4,5);
//rest 参数必须是最后一个形参
 function minus(a,b,...args){
    console.log(a,b,args);
 }
 minus(100,1,2,3,4,5,19);
 ```

注意:rest 参数非常适合不定个数参数函数的场景

### spread 扩展运算符

扩展运算符(spread)也是三个点(...)。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。

 ```js
 //展开数组
 let tfboys = ['德玛西亚之力','德玛西亚之翼','德玛西亚皇子'];
 function fn(){
    console.log(arguments);
 }
 fn(...tfboys)

//展开对象
let skillOne = { q: '致命打击',};
let skillTwo = {w: '勇气' };
let skillThree = { e: '审判'};
let skillFour = { r: '德玛西亚正义'};
let gailun = {...skillOne, ...skillTwo, ...skillThree, ...skillFour};

//应用
//1. 数组的合并
 const kuaizi = ['王太利','肖央'];
 const fenghuang = ['曾毅','玲花'];
 const zuixuanxiaopingguo = kuaizi.concat(fenghuang);
 const zuixuanxiaopingguo = [...kuaizi, ...fenghuang];
 console.log(zuixuanxiaopingguo);

//2. 数组的克隆（浅拷贝）
 const sanzhihua = ['E','G','M'];
 const sanyecao = [...sanzhihua];//  ['E','G','M']
 console.log(sanyecao);

//3. 将伪数组转为真正的数组
const divs = document.querySelectorAll('div');
const divArr = [...divs];
console.log(divArr);// arguments
```

### Symbol

#### Symbol 基本使用

ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。
Symbol 特点

1) Symbol 的值是唯一的，用来解决命名冲突的问题
2) Symbol 值不能与其他数据进行运算
3) Symbol 定义的对象属性不能使用 for...in 循环遍历，但是可以使用 Reflect.ownKeys 来获取对象的所有键名

```js
//创建 Symbol
 let s1 = Symbol();
 console.log(s1, typeof s1);
  //添加标识的 Symbol
 let s2 = Symbol('尚硅谷');
 let s2_2 = Symbol('尚硅谷');
 console.log(s2 === s2_2); //false
  //使用 Symbol for 定义
 let s3 = Symbol.for('尚硅谷');
 let s3_2 = Symbol.for('尚硅谷');
 console.log(s3 === s3_2); // true
 
// 6种数据类型
// USONB  you are so niubility 
// u  undefined
// s  string  symbol
// o  object
// n  null number
// b  boolean

//应用
//安全的向对象中添加方法 up down，不影响原对象
let game = {
    name:'俄罗斯方块',
    up: function(){},
    down: function(){}
};

//方式一
 let methods = {
     up: Symbol(),
     down: Symbol()
 };
 game[methods.up] = function(){
     console.log("我可以改变形状");
 }
 game[methods.down] = function(){
     console.log("我可以快速下降!!");
 }
 console.log(game);

//方式二
let youxi = {
    name:"狼人杀",
    [Symbol('say')]: function(){
        console.log("我可以发言")
    },
    [Symbol('zibao')]: function(){
        console.log('我可以自爆');
    }
}
console.log(youxi)
```  

注: 遇到唯一性的场景时要想到 Symbol

#### Symbol 内置值

除了定义自己使用的 Symbol 值以外，ES6 还提供了11个内置的Symbol值，指向语言内部使用的方法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

- Symbol.species
    创建衍生对象时，会使用该属性
- Symbol.hasInstance
    当其他对象使用 instanceof 运算符，判断是否为该对 象的实例时，会调用这个方法
- Symbol.isConcatSpreadable
  对象的 Symbol.isConcatSpreadable 属性等于的是一个 布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开。
- Symbol.match
  当执行 str.match(myObject) 时，如果该属性存在，会调用它，返回该方法的返回值。
- Symbol.replace
  当该对象被 str.replace(myObject)方法调用时，会返回该方法的返回值。
- Symbol.search
   当该对象被 str. search (myObject)方法调用时，会返回该方法的返回值。
- Symbol.split
 当该对象被 str. split (myObject)方法调用时，会返回该方法的返回值。
- Symbol.iterator
  对象进行 for...of 循环时，会调用 Symbol.iterator 方法，返回该对象的默认遍历器
- Symbol.toPrimitive
   该对象被转为原始类型的值时，会调用这个方法，返回该对象对应的原始类型值。
- Symbol.toStringTag
 在该对象上面调用 toString 方法时，返回该方法的返回值
- Symbol.unscopables
   该对象指定了使用with关键字时，哪些属性会被with 环境排除。

```js
    class Person{
        static [Symbol.hasInstance](param){
            console.log(param);
            console.log("我被用来检测类型了");
            return false;
        }
    }
    let o = {};
    console.log(o instanceof Person);

    const arr = [1,2,3];
    const arr2 = [4,5,6];
    arr2[Symbol.isConcatSpreadable] = false;
    console.log(arr.concat(arr2));
```

### 迭代器

遍历器(Iterator)就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口（对象里的一个属性），就可以完成遍历操作。

1) ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费
2) 原生具备 iterator 接口的数据(可用 for of 遍历)
    a) Array
    b) Arguments
    c) Set
    d) Map
    e) String
    f) TypedArray
    g) NodeList
3) 工作原理
    a) 创建一个指针对象，指向当前数据结构的起始位置
    b) 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
    c) 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
    d) 每调用 next 方法返回一个包含 value 和 done 属性的对象
注: 需要自定义遍历数据的时候，要想到迭代器。

```js
        //声明一个数组
        const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];

        //使用 for...of 遍历数组
         for(let v of xiyou){
             console.log(v);
         }

        let iterator = xiyou[Symbol.iterator]();

        //调用对象的next方法
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
        console.log(iterator.next());
```

```js
//声明一个对象
const banji = {
    name: "终极一班",
    stus: [
        'xiaoming',
        'xiaoning',
        'xiaotian',
        'knight'
    ],
    [Symbol.iterator]() {
        //索引变量
        let index = 0;
        
        let _this = this;
        return {
            next: function () {
                if (index < _this.stus.length) {
                    const result = { value: _this.stus[index], done: false };
                    //下标自增
                    index++;
                    //返回结果
                    return result;
                }else{
                    return {value: undefined, done: true};
                }
            }
        };
    }
}

//for of 遍历这个对象, 返回 班级成员 
for (let v of banji) {
    console.log(v);
}
```

### 生成器

生成器函数是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同

```js
function * gen(){
     yield '一只没有耳朵'; 
     yield '一只没有尾巴';
     return '真奇怪';
 }
 let iterator = gen(); 
 console.log(iterator.next()); 
 console.log(iterator.next()); 
 console.log(iterator.next());
 
//遍历
for(let v of gen()){
    console.log(v);
}
```

代码说明:

1. `*` 的位置没有限制
2. 生成器函数返回的结果是迭代器对象，调用迭代器对象的 next 方法可以得到
yield 语句后的值
3. yield 相当于函数的暂停标记，也可以认为是函数的分隔符，每调用一次 next
方法，执行一段代码
4. next 方法可以传递实参，作为 yield 语句的返回值

```js
// 函数参数
    function * gen(arg){
        console.log(arg);
        let one = yield 111;
        console.log(one); // ‘BBB’
        let two = yield 222;
        console.log(two); // 'CCC'
        let three = yield 333;
        console.log(three); // 'DDD'
    }

    //执行获取迭代器对象
    let iterator = gen('AAA');
    console.log(iterator.next());
    //next方法可以传入实参
    console.log(iterator.next('BBB'));
    console.log(iterator.next('CCC'));
    console.log(iterator.next('DDD'));
```

```js
// 异步编程  文件操作 网络操作(ajax, request) 数据库操作
// 需求：1s 后控制台输出 111  2s后输出 222  3s后输出 333 

// 方式一： 回调地狱
setTimeout(() => {
    console.log(111);
    setTimeout(() => {
        console.log(222);
        setTimeout(() => {
            console.log(333);
        }, 3000);
    }, 2000);
}, 1000);

// 方式二： 生成器函数
function one(){
    setTimeout(()=>{
        console.log(111);
        iterator.next();
    },1000)
}

function two(){
    setTimeout(()=>{
        console.log(222);
        iterator.next();
    },2000)
}

function three(){
    setTimeout(()=>{
        console.log(333);
        iterator.next();
    },3000)
}

function * gen(){
    yield one();
    yield two();
    yield three();
}

//调用生成器函数
let iterator = gen();
iterator.next();
```

```js
//模拟获取  用户数据  订单数据  商品数据 
function getUsers(){
    setTimeout(()=>{
        let data = '用户数据';
        //调用 next 方法, 并且将数据传入
        iterator.next(data);
    }, 1000);
}

function getOrders(){
    setTimeout(()=>{
        let data = '订单数据';
        iterator.next(data);
    }, 1000)
}

function getGoods(){
    setTimeout(()=>{
        let data = '商品数据';
        iterator.next(data);
    }, 1000)
}

function * gen(){
    let users = yield getUsers();
    console.log(users);
    let orders = yield getOrders();
    console.log(orders);
    let goods = yield getGoods();
    console.log(goods);
}

//调用生成器函数
let iterator = gen();
iterator.next();

```

### Promise

Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果。

1) Promise 构造函数: Promise (excutor) {}
2) Promise.prototype.then 方法
3) Promise.prototype.catch 方法

```js
    //实例化 Promise 对象
    const p = new Promise(function(resolve, reject){
        setTimeout(function(){
            
            let data = '数据库中的用户数据';
            resolve
            resolve(data);

            let err = '数据读取失败';
            reject(err);
        }, 1000);
    });

    //调用 promise 对象的 then 方法
    p.then(function(value){
        console.log(value);
    }, function(reason){
        console.error(reason);
    })
```

```js
//Promise封装读取文件
//1. 引入 fs 模块
const fs = require('fs');

//2. 调用方法读取文件
 fs.readFile('./resources/为学.md', (err, data)=>{
     //如果失败, 则抛出错误
     if(err) throw err;
     //如果没有出错, 则输出内容
     console.log(data.toString());
 });

//3. 使用 Promise 封装
const p = new Promise(function(resolve, reject){
    fs.readFile("./resources/为学.mda", (err, data)=>{
        //判断如果失败
        if(err) reject(err);
        //如果成功
        resolve(data);
    });
});

p.then(function(value){
    console.log(value.toString());
}, function(reason){
    console.log("读取失败!!");
});
```

```js
    //Promise封装AJAX
    // 接口地址: https://api.apiopen.top/getJoke
    const p = new Promise((resolve, reject) => {
        //1. 创建对象
        const xhr = new XMLHttpRequest();

        //2. 初始化
        xhr.open("GET", "https://api.apiopen.top/getJ");

        //3. 发送
        xhr.send();

        //4. 绑定事件, 处理响应结果
        xhr.onreadystatechange = function () {
            //判断
            if (xhr.readyState === 4) {
                //判断响应状态码 200-299
                if (xhr.status >= 200 && xhr.status < 300) {
                    //表示成功
                    resolve(xhr.response);
                } else {
                    //如果失败
                    reject(xhr.status);
                }
            }
        }
    })
    
    //指定回调
    p.then(function(value){
        console.log(value);
    }, function(reason){
        console.error(reason);
    });
```

```js
    //then 方法
    //创建 promise 对象
    const p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('用户数据');
            // reject('出错啦');
        }, 1000)
    });

    //调用 then 方法  
    //then方法的返回结果是 Promise 对象, 对象状态由回调函数的执行结果决定
    //1. 如果回调函数中返回的结果是 非 promise 类型的属性, 状态为成功, 返回值为对象的成功的值
    //2. 如果返回结果为 Promise 对象，对象状态 同 返回的 promise 对象一致
    //3. 抛出错误，为失败状态
    const result = p.then(value => {
        console.log(value);
        //1. 非 promise 类型的属性
        return 'iloveyou'; // 非 promise 对象，result 的状态为 成功
        //2. 是 promise 对象
        return new Promise((resolve, reject)=>{
            // resolve('ok'); //成功，result 的状态为 成功
            reject('error'); //失败，result 的状态为 失败
        });
        //3. 抛出错误
        throw new Error('出错啦!');
        throw '出错啦!';
    }, reason=>{
        console.warn(reason);
    });
    console.log(result);//result 的结果也是一个 promise 对象

    //链式调用 优化回调地狱
    p.then(value=>{

    }).then(value=>{

    });
```

```js
//链式调用 改变回调地狱的情况
//原写法
const fs = require("fs");

fs.readFile('./resources/为学.md', (err, data1)=>{
    fs.readFile('./resources/插秧诗.md', (err, data2)=>{
        fs.readFile('./resources/观书有感.md', (err, data3)=>{
            let result = data1 + '\r\n' +data2  +'\r\n'+ data3;
            console.log(result);
        });
    });
});

//使用 promise 实现
const p = new Promise((resolve, reject) => {
    fs.readFile("./resources/为学.md", (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/插秧诗.md", (err, data) => {
            resolve([value, data]);
        });
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/观书有感.md", (err, data) => {
            //压入
            value.push(data);
            resolve(value);
        });
    })
}).then(value => {
    console.log(value.join('\r\n'));
});
```

```js
    //catch 方法
    const p = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //设置 p 对象的状态为失败, 并设置失败的值
            reject("出错啦!");
        }, 1000)
    });

    // p.then(function(value){}, function(reason){
    //     console.error(reason);
    // });

    p.catch(function(reason){
        console.warn(reason);
    });
```

### Set

ES6 提供了新的数据结构 Set(集合)。它类似于数组，但成员的值都是唯 一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for...of...』进 行遍历，集合的属性和方法:

1) size 返回集合的元素个数
2) add 增加一个新元素，返回当前集合
3) delete 删除元素，返回 boolean 值
4) has 检测集合中是否包含某个元素，返回 boolean 值
5) clear 清空集合，返回 undefined

```js
  //创建一个空集合
 let s = new Set();
 //创建一个非空集合
 let s1 = new Set([1,2,3,1,2,3]);

 //返回集合的元素个数
 console.log(s1.size);
 //添加新元素
 console.log(s1.add(4));
 //删除元素
 console.log(s1.delete(1));
 //检测是否存在某个值
 console.log(s1.has(2));
 //清空集合
 console.log(s1.clear());
 ```

```js
let arr = [1,2,3,4,5,4,3,2,1];
//1. 数组去重
let result = [...new Set(arr)];
console.log(result);
//2. 交集
let arr2 = [4,5,6,5,6];
let intersection = [...new Set(arr)].filter(item => new Set(arr2).has(item));
console.log(intersection);

//3. 并集
let union = [...new Set([...arr, ...arr2])];
console.log(union);

//4. 差集
let diff = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)));
console.log(diff);
```

### Map

ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合。但是“键” 的范围不限于字符串，各种类型的值(包括对象)都可以当作键。Map 也实现了 iterator 接口，所以可以使用『扩展运算符』和『for...of...』进行遍历。Map 的属性和方法:

1) size 返回 Map 的元素个数
2) set 增加一个新元素，返回当前 Map
3) get 返回键名对象的键值
4) has 检测 Map 中是否包含某个元素，返回 boolean 值
5) clear 清空集合，返回 undefined

```js
  //创建一个空 map
 let m = new Map();
 //创建一个非空 map
 let m2 = new Map([
 ['name','尚硅谷'],
 ['slogon','不断提高行业标准']
 ]);

 //获取映射元素的个数
 console.log(m2.size);
 //添加映射值
 console.log(m2.set('age', 6));
 //获取映射值
 console.log(m2.get('age'));
 //检测是否有该映射
 console.log(m2.has('age'));
 //清除
 console.log(m2.clear());
 ```

### class 类

ES6 提供了更接近传统语言的写法，引入了 Class(类)这个概念，作为对 象的模板。通过 class 关键字，可以定义类。基本上，ES6 的 class 可以看作只是 一个语法糖，它的绝大部分功能，ES5 都可以做到，新的 class 写法只是让对象 原型的写法更加清晰、更像面向对象编程的语法而已。
知识点:

1) class 声明类
2) constructor 定义构造函数初始化
3) extends 继承父类
4) super 调用父级构造方法
5) static 定义静态方法和属性
6) 父类方法可以重写

```js
//ES5 实现
//手机
function Phone(brand, price){
    this.brand = brand;
    this.price = price;
}

//添加方法
Phone.prototype.call = function(){
    console.log("我可以打电话!!");
}

//实例化对象
let Huawei = new Phone('华为', 5999);
Huawei.call();
console.log(Huawei);

  //父类
 class Shouji {
 //构造方法
     constructor(brand, color, price) {
         this.brand = brand;
         this.color = color;
         this.price = price;
     }
      //对象方法
     call() {
        console.log('我可以打电话!!!')
 }
}

let onePlus = new Shouji("1+", 1999);
console.log(onePlus);
```

静态属性

```js
    function Phone(){

    }
    Phone.name = '手机';
    Phone.change = function(){
        console.log("我可以改变世界");
    }
    Phone.prototype.size = '5.5inch';

    let nokia = new Phone();

    // 示例对象 与 函数对象 的属性不通, 即 静态属性
    // 示例对象 和 函数对象 的 原型对象 的属性相通
    console.log(nokia.name);// undefined 
    nokia.change();// Error: nokia.change is not a function
    console.log(nokia.size);// '5.5inch'

    class Phone{
        //静态属性 属于类，不属于实列对象
        static name = '手机';
        static change(){
            console.log("我可以改变世界");
        }
    }

    let nokia = new Phone();
    console.log(nokia.name);
    console.log(Phone.name);
```

继承 ES5 实现

```js
//手机
function Phone(brand, price){
    this.brand = brand;
    this.price = price;
}

Phone.prototype.call = function(){
    console.log("我可以打电话");
}

//智能手机
function SmartPhone(brand, price, color, size){
    Phone.call(this, brand, price);
    this.color = color;
    this.size = size;
}

//设置子级构造函数的原型
SmartPhone.prototype = new Phone();
SmartPhone.prototype.constructor = SmartPhone;

//声明子类的方法
SmartPhone.prototype.photo = function(){
    console.log("我可以拍照")
}

SmartPhone.prototype.playGame = function(){
    console.log("我可以玩游戏");
}

const hammerhead = new SmartPhone('锤子',2499,'黑色','5.5inch');

console.log(hammerhead);
```

继承 ES6 实现

```js
  //父类
 class phone {
 //构造方法
     constructor(brand, color, price) {
         this.brand = brand;
         this.color = color;
         this.price = price;
     }
      //对象方法
     call() {
        console.log('我可以打电话!!!')
 }
}

  //子类
 class SmartPhone extends phone {
      constructor(brand, color, price, screen, pixel) {
         super(brand, color, price);// Phone.call(this, brand, color, price)
         this.screen = screen;
         this.pixel = pixel;
     }
      //子类方法
     photo(){
        console.log('我可以拍照!!');
     }
      playGame(){
        console.log('我可以玩游戏!!');
     }
      //方法重写 子类不能调父类的同名方法
     call(){
        console.log('我可以进行视频通话!!');
     }
      //静态方法
     static run(){
        console.log('我可以运行程序')
     }
      static connect(){
        console.log('我可以建立连接')
     }
 }


 //实例化对象
 const Nokia = new Phone('诺基亚', '灰色', 230);
 const iPhone6s = new SmartPhone('苹果', '白色', 6088,
 '4.7inch','500w');
  //调用子类方法
 iPhone6s.playGame();
 //调用重写方法
 iPhone6s.call();
 //调用静态方法
 SmartPhone.run();
 ```

#### class 的 get 和 set

```js
class Phone{
    get price(){// 计算出结果
        console.log("价格属性被读取了");
        return 'iloveyou';
    }

    set price(newVal){// 控制 判断
        console.log('价格属性被修改了');
    }
}

//实例化对象
let s = new Phone();

console.log(s.price);//'价格属性被读取了'
s.price = 'free';//'价格属性被修改了'
```

### 数值扩展

#### Number.EPSILON 是 JavaScript 表示的最小精度

EPSILON 属性的值接近于 2.2204460492503130808472633361816E-16

```js
console.log(0.1 + 0.2 === 0.3); // false

function equal(a, b){
    if(Math.abs(a-b) < Number.EPSILON){
        return true;
    }else{
        return false;
    }
}

console.log(equal(0.1 + 0.2, 0.3)) // true
```

#### 二进制和八进制

ES6 提供了二进制和八进制数值的新的写法，分别用前缀 0b 和 0o 表示。

```js
    let b = 0b1010;
    let o = 0o777;
    let d = 100;
    let x = 0xff;
    console.log(x);
```

#### Number.isFinite() 与 Number.isNaN()

Number.isFinite() 用来检查一个数值是否为有限的 Number.isNaN() 用来检查一个值是否为 NaN

```js
    console.log(Number.isFinite(100));
    console.log(Number.isFinite(100/0));
    console.log(Number.isFinite(Infinity));
```

#### Number.parseInt() 与 Number.parseFloat()

ES6 将全局方法 parseInt 和 parseFloat，移植到 Number 对象上面，使用不变。

```js
   console.log(Number.isNaN(123)); 
```

#### Number.parseInt Number.parseFloat 字符串转整数

```js
    console.log(Number.parseInt('5211314love'));
    console.log(Number.parseFloat('3.1415926神奇'));
```

#### Math.trunc

用于去除一个数的小数部分，返回整数部分。

```js
    console.log(Math.trunc(3.5));

```

#### Number.isInteger

Number.isInteger() 用来判断一个数值是否为整数

```js
    console.log(Number.isInteger(5));
    console.log(Number.isInteger(2.5));

```

#### Math.sign 判断一个数到底为正数 负数 还是零

```js
        console.log(Math.sign(100));
        console.log(Math.sign(0));
        console.log(Math.sign(-20000));

```

### 对象扩展

ES6 新增了一些 Object 对象的方法

1) Object.is 比较两个值是否严格相等，与『===』行为基本一致(+0 与 NaN)

    ```js
            console.log(Object.is(120, 120));// true
            console.log(Object.is(NaN, NaN));// true 
            console.log(NaN === NaN);// false

    ```

2) Object.assign 对象的合并，将源对象的所有可枚举属性，复制到目标对象

    ```js
            const config1 = {
                host: 'localhost',
                port: 3306,
                name: 'root',
                pass: 'root',
                test: 'test'
            };
            const config2 = {
                host: 'http://atguigu.com',
                port: 33060,
                name: 'atguigu.com',
                pass: 'iloveyou',
                test2: 'test2'
            }
            console.log(Object.assign(config1, config2));`
    ```

3) __proto__、setPrototypeOf、 setPrototypeOf 可以直接设置对象的原型

    ```js
            const school = {
                name: '尚硅谷'
            }
            const cities = {
                xiaoqu: ['北京','上海','深圳']
            }
            Object.setPrototypeOf(school, cities);
            console.log(Object.getPrototypeOf(school));
            console.log(school);

    ```

### 模块化

模块化是指将一个大的程序文件，拆分成许多小的文件，然后将小文件组合起来。

#### 模块化的好处

模块化的优势有以下几点:

1) 防止命名冲突
2) 代码复用
3) 高维护性

#### 模块化规范产品

ES6 之前的模块化规范有:

1) CommonJS => NodeJS、Browserify
2) AMD => requireJS
3) CMD => seaJS

#### ES6 模块化语法

模块功能主要由两个命令构成:export 和 import。

- export 命令用于规定模块的对外接口
- import 命令用于输入其他模块提供的功能
分别暴露

```js
//m1.js
export let school = '尚硅谷';

export function teach() {
    console.log("我们可以教给你开发技能");
}
```

统一暴露

```js
//m2.js
let school = '尚硅谷';

function findJob(){
    console.log("我们可以帮助你找工作!!");
}

export {school, findJob};
```

默认暴露

```js
//m3.js
export default {
    school: 'ATGUIGU',
    change: function(){
        console.log("我们可以改变你!!");
    }
}
```

//模块引入

```js
// 通用模式
import * as m1 from "./m1.js";
import * as m2 from "./m1.js";
import * as m3 from "./m1.js";
// 解构赋值
import {school, teach} from "./m2.js";
import {school as guigu, findJob} from "./m2.js";
import {default as m32} from "./m3.js";
// 简便模式 只能对默认暴露
import m33 from "./m3.js";
```

#### ES6 模块在浏览器中使用

```js
// 方法一：
    <script type="module">
         import * as m1 from "./src/js/m1.js";
         import * as m2 from "./src/js/m2.js";
         import * as m3 from "./src/js/m3.js";
    </script>
// 方法二：
    <script src="./src/js/app.js" type="module"></script>
```

```js
//app.js
         import * as m1 from "./src/js/m1.js";
         import * as m2 from "./src/js/m2.js";
         import * as m3 from "./src/js/m3.js";
```

#### ES6 模块化在项目中的使用

1. 安装工具 npm i babel-cli babel-preset-env browserify(项目中使用webpack) -D
2. 编译 npx babel src/js -d dist/js --presets=babel-preset-env（局部安装，使用 npx）
3. 打包 npx browserify dist/js/app.js -o dist/bundle.js

#### ES6 模块与 NPM 包

```js
// npm i juqery
import $ from 'jquery';
$('body').css('background','pink');
```

## 第 3 章 ECMASript 7 新特性

### Array.prototype.includes

Includes 方法用来检测数组中是否包含某个元素，返回布尔类型值

```js
        // includes   indexOf
         const mingzhu = ['西游记','红楼梦','三国演义','水浒传'];

        //判断
         console.log(mingzhu.includes('西游记'));
         console.log(mingzhu.includes('金瓶梅'));

```

### 指数操作符

在 ES7 中引入指数运算符「**」，用来实现幂运算，功能与 Math.pow 结果相同

```js
        console.log(2 ** 10);
        console.log(Math.pow(2, 10));
```

## 第 4 章 ECMASript 8 新特性

### async 和 await

async 和 await 两种语法结合可以让异步代码像同步代码一样

#### async 函数

1. async 函数的返回值为 promise 对象，
2. promise 对象的结果由 async 函数执行的返回值决定

```js
    //async 函数
    async function fn(){
        // fn() 返回 成功 Promise 对象，值为字符串
        // return '尚硅谷';
        
        // fn()返回的结果不是一个 Promise 类型的对象, 返回的结果就是成功 Promise 对象
        // return;
        
        // 抛出错误, fn()返回的结果是一个失败的 Promise，值是错误对象
        // throw new Error('出错啦!');
        
        // 返回的结果如果是一个 Promise 对象，fn() 返回的结果与 promise 对象一致
        return new Promise((resolve, reject)=>{
            resolve('成功的数据');
            // reject("失败的错误");
        });
    }

    const result = fn();

    //调用 then 方法
    result.then(value => {
        console.log(value);
    }, reason => {
        console.warn(reason);
    })
```

#### await 表达式

1. await 必须写在 async 函数中
2. await 右侧的表达式一般为 promise 对象
3. await 返回的是 promise 成功的值
4. await 的 promise 失败了, 就会抛出异常, 需要通过 try...catch 捕获处理

```js
    //创建 promise 对象
    const p = new Promise((resolve, reject) => {
        // resolve("用户数据");
        reject("失败啦!");
    })

    // await 要放在 async 函数中.
    async function main() {
        try {
            let result = await p;
            console.log(result);
        } catch (e) {
            console.log(e);
        }
    }
    //调用函数
    main();
```

#### async 与 await 读取文件内容

```js
//1. 引入 fs 模块
const fs = require("fs");

//读取『为学』
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/为学.md", (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

function readChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/插秧诗.md", (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile("./resources/观书有感.md", (err, data) => {
            //如果失败
            if (err) reject(err);
            //如果成功
            resolve(data);
        })
    })
}

//声明一个 async 函数
async function main(){
    try{
        //获取为学内容
        let weixue = await readWeiXue();
        //获取插秧诗内容
        let chayang = await readChaYangShi();
        // 获取观书有感
        let guanshu = await readGuanShu();
    
        console.log(weixue.toString());
        console.log(chayang.toString());
        console.log(guanshu.toString());
    } catch (e) {
        console.log(e);
    }
}

main();
```

#### async 和 await 封装 ajax

```js
   // 发送 AJAX 请求, 返回的结果是 Promise 对象
    function sendAJAX(url) {
        return new Promise((resolve, reject) => {
            //1. 创建对象
            const x = new XMLHttpRequest();

            //2. 初始化
            x.open('GET', url);

            //3. 发送
            x.send();

            //4. 事件绑定
            x.onreadystatechange = function () {
                if (x.readyState === 4) {
                    if (x.status >= 200 && x.status < 300) {
                        //成功啦
                        resolve(x.response);
                    }else{
                        //如果失败
                        reject(x.status);
                    }
                }
            }
        })
    }

    //promise then 方法测试
    // sendAJAX("https://api.apiopen.top/getJoke").then(value=>{
    //     console.log(value);
    // }, reason=>{})

    // async 与 await 测试  axios
    async function main(){
        //发送 AJAX 请求
        let result = await sendAJAX("https://api.apiopen.top/getJoke");
        //再次测试
        let tianqi = await sendAJAX('https://www.tianqiapi.com/api/?version=v1&city=%E5%8C%97%E4%BA%AC&appid=23941491&appsecret=TXoD5e8P')

        console.log(tianqi);
    }

    main();
```

### Object.values 和 Object.entries

1. Object.values()方法返回一个给定对象的所有可枚举属性值的数组
2. Object.entries()方法返回一个给定对象自身可遍历属性 [key,value] 的数组

```js
        //声明对象
        const school = {
            name:"尚硅谷",
            cities:['北京','上海','深圳'],
            xueke: ['前端','Java','大数据','运维']
        };

        //获取对象所有的键
        console.log(Object.keys(school));
        //获取对象所有的值
        console.log(Object.values(school));
        //entries
        console.log(Object.entries(school));
        //创建 Map
        const m = new Map(Object.entries(school));
        console.log(m.get('cities'));
```

### Object.getOwnPropertyDescriptors

该方法返回指定对象所有自身属性的描述对象

```js
        //对象属性的描述对象
        console.log(Object.getOwnPropertyDescriptors(school));

        const obj = Object.create(null, {// 原型对象为 null
            name: { // 描述对象
                //设置值
                value: '尚硅谷',
                //属性特性
                writable: true,
                configurable: true,
                enumerable: true
            } 
        });
```

## 第 5 章 ECMASript 9 新特性

### Rest/Spread 属性

Rest 参数与 spread 扩展运算符在 ES6 中已经引入，不过 ES6 中只针对于数组， 在 ES9 中为对象提供了像数组一样的 rest 参数和扩展运算符
rest 参数对对象的支持

```js
function connect({host, port, ...user}) { 
    console.log(host);
    console.log(port);
    console.log(user);
 }
connect({
    host: '127.0.0.1', 
    port: 3306, 
    username: 'root', 
    password: 'root', 
    type: 'master'
});
```

扩展运算符对对象的操作

```js
    //对象合并
    const skillOne = {
        q: '天音波'
    }

    const skillTwo = {
        w: '金钟罩'
    }

    const skillThree = {
        e: '天雷破'
    }
    const skillFour = {
        r: '猛龙摆尾'
    }

    const mangseng = {...skillOne, ...skillTwo, ...skillThree, ...skillFour};

    console.log(mangseng)

```

### 正则表达式命名捕获组

ES9 允许命名捕获组使用符号`?<name>`,这样获取捕获结果可读性更强

```js
let str = '<a href="http://www.atguigu.com">尚硅谷</a>'; 
// 提取 url 与 标签文本
// 无命名捕获
const reg0 = /<a href="(.*)">(.*)<\/a>/;
const result0 = reg.exec(str); 
console.log(result0[1],result0[2]);

// 命名捕获
const reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
const result = reg.exec(str); 
console.log(result.groups.url); 
console.log(result.groups.text);
```

### 正则表达式反向断言

ES9 支持反向断言，通过对匹配结果前面的内容进行判断，对匹配进行筛选。

```js
//声明字符串
let str = 'JS5211314 你知道么 555 啦啦啦'; 
// 提取后边的数字 555

//正向断言 根据目标后边的内容判断是不是目标
const reg = /\d+(?=啦)/; 
const result = reg.exec(str);

 //反向断言 根据目标前面的内容判断是不是目标
const reg = /(?<=么)\d+/;
const result = reg.exec(str); console.log(result);
```

### 正则表达式 dotAll 模式

正则表达式中点.匹配除回车外的任何单字符，标记『s』改变这种行为，允许行终止符出现

```js
let str = ` <ul>
<li> <a>肖生克的救赎</a>
 <p>上映日期: 1994-09-10</p> </li>
<li> <a>阿甘正传</a>
<p>上映日期: 1994-07-06</p> </li>
</ul>`; 
//提取电影名称和上映时间
const reg0 = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/;
const result1= = reg.exec(reg0);
console.log(result1);


//声明正则
//未加 s，‘.’匹配除回车外的任何单字符
//加 s 后，‘.’匹配任意字符
const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs; 
 //执行匹配
const result = reg.exec(str); 
let result;
let data = [];
while(result = reg.exec(str)){data.push({title: result[1], time: result[2]}); }
//输出结果
 console.log(data);
```

## 第 6 章 ECMASript 10 新特性

### Object.fromEntries

创建对象

```js
        //二维数组
        const result = Object.fromEntries([
            ['name','尚硅谷'],
            ['xueke', 'Java,大数据,前端,云计算']
        ]);

        //Map
        const m = new Map();
        m.set('name','ATGUIGU');
        const result = Object.fromEntries(m);

        //Object.entries ES8 将对象转化为二维数组
        const arr = Object.entries({
            name: "尚硅谷"
        })
        console.log(arr);

```

### trimStart 和 trimEnd

```js
        let str = '   iloveyou   ';

        console.log(str.trim());//清楚两侧空白
        console.log(str.trimStart());//清楚左边空白
        console.log(str.trimEnd());//清楚右边空白

```

### Array.prototype.flat 与 flatMap

```js
        //flat 平
        //将多维数组转化为低位数组
        const arr1 = [1,2,3,4,[5,6]];//1 [1,2,3,4,5,6]
        const arr2 = [1,2,3,4,[5,6,[7,8,9]]];//1 [1,2,3,4,5,6,[7,8,9]]
        //参数为深度 是一个数字，默认 1
        console.log(arr1.flat(2));  

        //flatMap 将结果降维
        const arr = [1,2,3,4];
        const result = arr.flatMap(item => [item * 10]);
        console.log(result);

```

### Symbol.prototype.description

获取 symbol 的描述字符串

```js
        //创建 Symbol
        let s = Symbol('尚硅谷');

        console.log(s.description);//'尚硅谷'
```

## 第 7 章 ECMASript 11 新特性

### 类的私有属性

```js
        class Person{
            //公有属性
            name;
            //私有属性
            #age;
            #weight;
            //构造方法
            constructor(name, age, weight){
                this.name = name;
                this.#age = age;
                this.#weight = weight;
            }

            intro(){
                console.log(this.name);
                console.log(this.#age);
                console.log(this.#weight);
            }
        }

        //实例化
        const girl = new Person('晓红', 18, '45kg');

        // console.log(girl.name);
        // console.log(girl.#age);//不能调用
        // console.log(girl.#weight);//不能调用

        girl.intro();
```

### Promise.allSettled

```js
        //声明两个promise对象
        const p1 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('商品数据 - 1');
            },1000)
        });

        const p2 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('商品数据 - 2');
                // reject('出错啦!');
            },1000)
        });

        //调用 allsettled 方法， 有一个成功就成功
         const result = Promise.allSettled([p1, p2]);
        console.log(result);
        
        // 两个都成功，才能成功
         const res = Promise.all([p1, p2]);
        console.log(res);

```

### String.prototype.matchAll

正则批量匹配

```js
        let str = `<ul>
            <li>
                <a>肖生克的救赎</a>
                <p>上映日期: 1994-09-10</p>
            </li>
            <li>
                <a>阿甘正传</a>
                <p>上映日期: 1994-07-06</p>
            </li>
        </ul>`;

        //声明正则
        const reg = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/sg
        
        const result = str.matchAll(reg);

        const arr = [...result];

        console.log(arr);
```

### 可选链操作符

```js
        // ‘?.’
        function main(config){
            //原来
            // const dbHost = config && config.db && config.db.host;
            
            const dbHost = config?.db?.host;

            console.log(dbHost);
        }

        main({
            db: {
                host:'192.168.1.100',
                username: 'root'
            },
            cache: {
                host: '192.168.1.200',
                username:'admin'
            }
        })

```

### 动态 import 导入

按需加载

```html
    <button id="btn">点击</button>
    <script src="./js/app.js" type="module"></script>
```

```js
//hello.js
export function hello(){
    alert('Hello');
}

```

```js
//app.js
//静态导入
// import * as m1 from "./hello.js";

const btn = document.getElementById('btn');

btn.onclick = function(){
    // 动态导入
    import('./hello.js').then(module => {
        module.hello();
    });
}
```

### BigInt

```js
        //大整形
         let n = 521n;
         console.log(n, typeof(n));

        //函数
         let m = 123;
         console.log(BigInt(m));
         console.log(BigInt(1.2));//报错

        //大数值运算
        let max = Number.MAX_SAFE_INTEGER;
        console.log(max);
        console.log(max + 1);
        console.log(max + 2);//出错

        console.log(BigInt(max))
        console.log(BigInt(max) + BigInt(1))//bigint 不能直接与 1 运算
        console.log(BigInt(max) + BigInt(2))

```

### globalThis 对象

绝对全局对象

- 浏览器 window
- node global
