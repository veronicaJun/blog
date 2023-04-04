# for…in 和 for…of 的区别 （for key in object, for value of array）

- for…of 遍历是键值，for…in 遍历是键名；
- for…in 遍历整个原型链，性能非常差不推荐使用，for…of 不会遍历原型链；
- for…in 遍历数组及其原型链中的可枚举属性，for…of 变量数组的下标对应的属性值；

- 总结
    - for…in 遍历对象，不适用于数组；
    - for…of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。
        - 如果需要遍历的对象是类数组对象，用Array.from转成数组即可。
        - 如果不是类数组对象，就给对象添加一个[Symbol.iterator]属性，并指向一个迭代器即可。
            - 方法一

                ```js
                obj[Symbol.iterator] = function(){
                var keys = Object.keys(this);
                var count = 0;
                return {
                next(){
                if(count<keys.length){
                    return {value: obj[keys[count++]],done:false};
                }else{
                    return {value:undefined,done:true};
                }
                }
                }
                };
                ```

            - 方法二

                ```js
                obj[Symbol.iterator] = function*(){
                    var keys = Object.keys(obj);
                    for(var k of keys){
                        yield [k,obj[k]]
                    }
                };
                ```
