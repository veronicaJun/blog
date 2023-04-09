    // ES5 Object.create 的模拟实现
    function inheritObject(o) {
        //声明一个过渡对象
        function F() { }
        //过渡对象的原型继承父对象
        F.prototype = o;
        //返回过渡对象的实例，该对象的原型继承了父对象
        return new F();
    }