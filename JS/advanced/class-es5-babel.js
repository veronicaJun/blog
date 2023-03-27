function _typeof(obj) {
    "@babel/helpers - typeof";
    return (
        (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (obj) {
                return typeof obj;
            }
            : function (obj) {
                return obj &&
                "function" == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            }),
        _typeof(obj)
    );
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: true, configurable: true }
    });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
    return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
        result;
        if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
        } else {
        result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError(
        "Derived constructors may only return object or undefined"
        );
    }
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
        );
    }
    return self;
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
        );
        return true;
    } catch (e) {
        return false;
    }
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
    }
    function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
if (protoProps) _defineProperties(Constructor.prototype, protoProps);
if (staticProps) _defineProperties(Constructor, staticProps);
Object.defineProperty(Constructor, "prototype", { writable: false });
return Constructor;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
        Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var Person = /*#__PURE__*/ (function () {
    function Person(instanceVar1) {
    _classCallCheck(this, Person);
    //实例属性和方法 constructor 外定义的方法和属性 所有实例对象 共享的 注意!
    _defineProperty(this, "instanceVar2", "父类 实例属性2");
    //实例属性和方法 constructor 内定义的方法和属性 实例对象 自己使用
    this.instanceVar1 = instanceVar1;
}
_createClass(
    Person,
    [
    {
        key: "instanceFun",
        value: function instanceFun() {
        console.log("父类 实例方法");
        }

        //私有属性和方法：只能在类的内部访问的方法和属性，外部不能访问。
        // 方式 1：在命名前加_
        // 方式 2：使用 symbol 值来命名
        // 方式 3：将私有方法移除 class, 在实例方法中调用该方法的 call

        //静态属性和方法：不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
    }
    ],
    [
    {
        key: "staticFun",
        value: function staticFun() {
        console.log("父类 静态方法");
        }
    }
    ]
);
return Person;
})();
_defineProperty(Person, "staticVar", "父类 静态属性");
var Students = /*#__PURE__*/ (function (_Person) {
    _inherits(Students, _Person);
    var _super = _createSuper(Students);
    function Students(instanceVar1, subInstanceVar1) {
        var _this;
        _classCallCheck(this, Students);
        _this = _super.call(this, instanceVar1);
        _defineProperty(
            _assertThisInitialized(_this),
            "subInstanceVar2",
            "子类 实例属性"
        );
        _this.subInstanceVar1 = subInstanceVar1;
        return _this;
    }
    _createClass(
        Students,
        [
        {
            key: "subInstanceFun",
            value: function subInstanceFun() {
            console.log("子类 实例方法");
            }
        }
        ],
        [
        {
            key: "subStaticFun",
            value: function subStaticFun() {
            console.log("子类 静态方法");
            }
        }
        ]
    );
    return Students;
})(Person);
_defineProperty(Students, "subStaticVar", "子类 静态属性");

var p = new Person('父类 实例参数');
var s = new Students('子类 实例参数 1', '子类 实例参数 2');
console.log("%cES5","color: red; font-size: 40px")
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