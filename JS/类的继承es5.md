# ES5 中 类的继承

## 类式继承

    缺点：
        1. 引用类型属性，会被所有子类实例共享
        2. 创建父类的时候，无法向父类传递参数。实例化父类的时候无法进行属性初始化

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

    缺点：
        - 子类继承父类的共有属性
        - 父类的原型方法没有被继承

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

    类式继承和构造函数继承相组合

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
    缺点：存在子类实例共享引用类型的属性

    ```js
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
    缺点：子类不是父类的实例，而子类的原型是父类的实例

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
        var o = new inheritObject(obj);
        // 拓展新对象
        o.getName = function(name) {
            console.log(name)
        }
        // 返回拓展后的新对象
        return o;
    }
    ```

## 寄生组合式继承

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
    ```
