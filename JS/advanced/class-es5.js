//父类 构造方法
function Phone(instanceVar1, instanceVar2){
    //实例属性： 实例化对象，都可以访问
    this.instanceVar1 = instanceVar1;
    this.instanceVar2 = instanceVar2;
}

//实例方法
Phone.prototype.instanceFun = function(){
    console.log("父类 实例方法");
}

//静态属性：不用实例化也可以使用
Phone.staticVar = '父类 静态属性';

//静态方法
Phone.staticFun = function(){
    console.log("父类 静态方法");
}



//子类 继承：只能继承父类的属性，不能继承父类的方法
function SmartPhone(instanceVar1, instanceVar2, subInstanceVar1, subInstanceVar2){
    //构造函数继承：只能继承父类的属性
    Phone.call(this, instanceVar1, instanceVar2); 
    //子类的实例属性
    this.subInstanceVar1 = subInstanceVar1;
    this.subInstanceVar2 = subInstanceVar2;
}

//原型继承：只能继承父类方法
SmartPhone.prototype = new Phone();
SmartPhone.prototype.constructor = SmartPhone;

//子类的实例方法
SmartPhone.prototype.subInstanceFun = function(){
    console.log("子类 实例方法")
}

//静态属性：不用实例化也可以使用
SmartPhone.subStaticVar = '子类 静态属性';

//静态方法
SmartPhone.subStaticFun = function(){
    console.log("子类 静态方法");
}


var p = new Phone('父类 实例参数 1', '父类 实例参数 2');
var sp = new SmartPhone('子类 实例参数 1', '子类 实例参数 2', '子类 实例参数 3', '子类 实例参数 4');
console.log("🐶 ---ES5-------------------------------------------------🐶")
console.log("🐶 ---实例与构造函数----------------------------------------🐶")
console.log('sp.__proto__ === SmartPhone.prototype', sp.__proto__ === SmartPhone.prototype);//true
console.log('sp.constructor === SmartPhone', sp.constructor === SmartPhone);//true

console.log("🐶 ---子类与父类--------------------------------------------🐶")
console.log('SmartPhone.__proto__ === Phone.prototype', SmartPhone.__proto__ === Phone.prototype);//true
console.log('SmartPhone.constructor === Phone', SmartPhone.constructor === Phone);//false
console.log('SmartPhone.constructor === Function', SmartPhone.constructor === Function);//true

console.log("🐶 ---子类的 prototype 与父类--------------------------------🐶")
console.log('SmartPhone.prototype.__proto__ === Phone.prototype', 
    SmartPhone.prototype.__proto__ === Phone.prototype);//true
console.log('SmartPhone.prototype.constructor === SmartPhone', 
    SmartPhone.prototype.constructor === SmartPhone);//true

console.log("🐶 ---实例--------------------------------------------------🐶")
console.log('phone 的实例 p', p);
console.log('SmartPhone 的实例 sp', sp);

console.log("🐶 ---静态属性及方法 未继承-------------------------------------🐶")
console.log("🐶 ~ Phone.staticVar:", Phone.staticVar)
console.log("🐶 ~ SmartPhone.staticVar:", SmartPhone.staticVar)
console.log("🐶 ~ Phone.staticFun:", Phone.staticFun)
console.log("🐶 ~ SmartPhone.staticFun:", SmartPhone.staticFun)

console.log("🐶 ---枚举----------------------------------------------------🐶")
for(let key in Phone){
    console.log("🐶 ~ for key in Phone:", key)
}
for(let key in SmartPhone){
    console.log("🐶 ~ for key in SmartPhone:", key)
}