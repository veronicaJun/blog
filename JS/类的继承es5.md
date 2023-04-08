# ES5 中 类的继承

## 原型链继承

    缺点：
        1. 引用类型属性，会被所有实例共享
        2. 创建子类的时候，无法向父类传递参数。实例化父类的时候无法进行属性初始化

    ```js
    function SuperClass() {
        this.superValue = true;
    }
    SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
    }

    function SubClass() {
        this.subValue = false;
    }
    //继承父类
    SubClass.prototype = new SuperClass();

    SubClass.prototype.getSubValue = function() {
        return this.subValue;
    }

    var sc = new SubClass();

    console.log(sc instanceof SuperClass)//true
    console.log(sc instanceof SubClass)//true
    console.log(sc instanceof SuperClass)//false
    ```

## 构造函数继承

    优点：
        1. 避免了引用类型的属性被所有实例共享
        2. 可以在 Child 中向 Parent 传参
    缺点：
        - 方法都在构造函数中定义，每次创建实例都会创建一遍方法。

    ```js
    function SuperClass(id) {
        this.books = ['js','css'];
        this.id = id;
    }
    SuperClass.prototype.showBooks = function() {
        console.log(this.books);
    }
    function SubClass(id) {
        //继承父类
        SuperClass.call(this,id);
    }
    //创建第一个子类实例
    var sc1 = new SubClass(10);
    //创建第二个子类实例
    var sc2 = new SubClass(11);

    sc1.books.push('html');
    console.log(sc1)
    console.log(sc2)
    sc1.showBooks();//TypeError
    ```

## 组合式继承

    优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。
    缺点：会调用两次父构造函数。

    ```js
    function SuperClass(name) {
        this.name = name; 
        this.books = ['Js','CSS'];
    }
    SuperClass.prototype.getBooks = function() {
        console.log(this.books);
    }
    function SubClass(name,time) {
        SuperClass.call(this,name);
        this.time = time;
    }
    SubClass.prototype = new SuperClass();

    SubClass.prototype.getTime = function() {
    console.log(this.time);
    }
    ```

## 原型式继承

    对类式继承的一个封装
    缺点：存在实例共享引用类型的属性

    ```js
    // ES5 Object.create 的模拟实现
    function inheritObject(o) {
        //声明一个过渡对象
        function F() { }
        //过渡对象的原型继承父对象
        F.prototype = o;
        //返回过渡对象的实例，该对象的原型继承了父对象
        return new F();
    }
    ```

## 寄生式继承

    对原型继承的拓展，这样新创建的对象不仅仅有父类的属性和方法，还新增了别的属性和方法。
    缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法。

    ```js
    function inheritObject(o) {
        //声明一个过渡对象
        function F() { }
        //过渡对象的原型继承父对象
        F.prototype = o;
        //返回过渡对象的实例，该对象的原型继承了父对象
        return new F();
    }

    function createBook(obj) {
        //通过原型方式创建新的对象
        var o = new inheritObject(obj);//也可以使用Object.create(obj)
        // 拓展新对象
        o.getName = function(name) {
            console.log(name)
        }
        // 返回拓展后的新对象
        return o;
    }
    ```

## 寄生组合式继承

    优点：
        只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
        原型链保持不变

    ```js
    function inheritObject(o) {
        //声明一个过渡对象
        function F() { }
        //过渡对象的原型继承父对象
        F.prototype = o;
        //返回过渡对象的实例，该对象的原型继承了父对象
        return new F();
    }

    function inheritPrototype(subClass,superClass) {
        // 复制一份父类的原型副本到变量中
        var p = inheritObject(superClass.prototype);
        // 修正因为重写子类的原型导致子类的constructor属性被修改
        p.constructor = subClass;
        // 设置子类原型
        subClass.prototype = p;
    }

    inheritPrototype(child, parent);
    ```
