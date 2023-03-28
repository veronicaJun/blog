/**

 * 
 * 使用方法
 * objectFactory(构造函数, 初始化参数);
 */
function objectFactory() {
    let newObject = null;
    // 从 arguments 中删除 第一个参数，并获取到第一个参数，即 构造函数
    let constructor = Array.prototype.shift.call(arguments);
    let result = null;
    // 判断参数是否是一个函数
    if (typeof constructor !== "function") {
        console.error("type error");
        return;
    }
    // 新建一个空对象，对象的原型为构造函数的 prototype 对象
    newObject = Object.create(constructor.prototype);
    // 将 this 指向新建对象，并执行构造函数
    result = constructor.apply(newObject, arguments);
    // 判断返回对象
    let flag = result && (typeof result === "object" || typeof result === "function");
    // 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
    return flag ? result : newObject;
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

objectFactory(Person, '以恒', 18);