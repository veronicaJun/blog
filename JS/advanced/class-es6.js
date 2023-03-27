class Person {
    constructor(instanceVar1){
      //实例属性和方法 constructor 内定义的方法和属性 实例对象 自己使用
      this.instanceVar1 = instanceVar1;
    }
  
    //实例属性和方法 constructor 外定义的方法和属性 所有实例对象 共享的 注意!
    instanceVar2 = '父类 实例属性2';
    instanceFun(){
      console.log('父类 实例方法');
    }
  
    //私有属性和方法：只能在类的内部访问的方法和属性，外部不能访问。
    // 方式 1：在命名前加_
    // 方式 2：使用 symbol 值来命名
    // 方式 3：将私有方法移除 class, 在实例方法中调用该方法的 call
  
  
    //静态属性和方法：不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
    static staticVar = '父类 静态属性';
    static staticFun(){
      console.log('父类 静态方法');
    }
  }
  
  
  class Students extends Person {
    constructor(instanceVar1, subInstanceVar1){
     super(instanceVar1);
      this.subInstanceVar1 = subInstanceVar1;
    }
    subInstanceVar2 = '子类 实例属性'
    subInstanceFun(){
      console.log('子类 实例方法');
    }
    static subStaticVar = '子类 静态属性';
    static subStaticFun(){
      console.log('子类 静态方法');
    }
  }
  
  var p = new Person('父类 实例参数');
  var s = new Students('子类 实例参数 1', '子类 实例参数 2');
  console.log("%cES6","color: skyblue; font-size: 40px")
  console.log("🐶 ---实例与构造函数----------------------------------------🐶")
  console.log('s.__proto__ === Students.prototype', s.__proto__ === Students.prototype);//true
  console.log('s.constructor === Students', s.constructor === Students);//true
  
  console.log("🐶 ---子类与父类--------------------------------------------🐶")
  console.log('Students.__proto__ === Person.prototype', Students.__proto__ === Person.prototype);//true
  console.log('Students.constructor === Person', Students.constructor === Person);//false
  console.log('Students.constructor === Function', Students.constructor === Function);//true
  
  console.log("🐶 ---子类的 prototype 与父类--------------------------------🐶")
  console.log('Students.prototype.__proto__ === Person.prototype', 
      Students.prototype.__proto__ === Person.prototype);//true
  console.log('Students.prototype.constructor === Students', 
      Students.prototype.constructor === Students);//true
  
  console.log("🐶 ---实例--------------------------------------------------🐶")
  console.log('p',p);
  console.log('s',s);
  
  console.log("🐶 ---静态属性及方法 未继承-------------------------------------🐶")
  console.log("🐶 ~ Person.staticVar:", Person.staticVar)
  console.log("🐶 ~ Students.staticVar:", Students.staticVar)
  console.log("🐶 ~ Person.staticFun:", Person.staticFun)
  console.log("🐶 ~ Students.staticFun:", Students.staticFun)
  
  console.log("🐶 ---枚举----------------------------------------------------🐶")
  for(let key in Person){
      console.log("🐶 ~ for key in Person:", key)
  }
  for(let key in Students){
      console.log("🐶 ~ for key in Students:", key)
  }