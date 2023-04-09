    /* 
  总结：
   1.类中的构造器不是必须要写的，要对实例进行一些初始化的操作，如添加指定属性时才写。
   2.如果A类继承了B类，且A类中写了构造器，那么A类构造器中的super是必须要调用的。
   3.类中所定义的方法，都放在了类的原型对象上，供实例去使用。
 */
 //创建一个Person类
 class Person {
    //构造器方法
    constructor(name,age){
     //构造器中的this是谁？—— 类的实例对象
     this.name = name
     this.age = age
    }
    //一般方法
    speak(){
     //speak方法放在了哪里？——类的原型对象上，供实例使用
     //通过Person实例调用speak时，speak中的this就是Person实例
     console.log(`我叫${this.name}，我年龄是${this.age}`);
    }
   }
  
   //创建一个Student类，继承于Person类
   class Student extends Person {
    constructor(name,age,grade){
     super(name,age)
     this.grade = grade
     this.school = '尚硅谷'
    }
    //重写从父类继承过来的方法
    speak(){
     console.log(`我叫${this.name}，我年龄是${this.age},我读的是${this.grade}年级`);
     this.study()
    }
    study(){
     //study方法放在了哪里？——类的原型对象上，供实例使用
     //通过Student实例调用study时，study中的this就是Student实例
     console.log('我很努力的学习');
    }
   }
   
   class Car {
    constructor(name,price){
     this.name = name
     this.price = price
     // this.wheel = 4
    }
    //类中可以直接写赋值语句,如下代码的含义是：给Car的实例对象添加一个属性，名为a，值为1
    a = 1
    wheel = 4
    static demo = 100
   }
   const c1 = new Car('奔驰c63',199)
   console.log(c1);
   console.log(Car.demo);