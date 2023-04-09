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