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
