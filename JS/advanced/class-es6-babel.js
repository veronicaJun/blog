
/** 类型
 * 
 * @param {*} obj 
 * @returns 
 */
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
  /** 设置子类的 prototype === 父类的 prototype
   * 1. 校验父构造函数。
   * 2. 寄生继承：用父类构造函数的 prototype 创建一个空对象，并将这个对象指向子类构造函数的 prototype
   * 3. 将父构造函数指向子构造函数的 _proto_
   * @param {*} subClass 
   * @param {*} superClass 
   */
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
  /** 设置子类的 __proto__
   * 
   * @param {*} o 
   * @param {*} p 
   * @returns 
   */
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
    return _setPrototypeOf(o, p);
  }
  /** 校验this是否被初始化，super是否调用，并返回父类已经赋值完的this
   * 
   * @param {*} Derived 
   * @returns 
   */
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
  /** 检查 父类 是否为 object 或 undefined
   * 
   * @param {*} self 
   * @param {*} call 
   * @returns 
   */
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
  /** 检查 super 是否执行
   * 
   * @param {*} self 
   * @returns 
   */
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }
    return self;
  }
  /** 是否支持 Reflect
   * 
   * @returns 
   */
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
  /** 获取 子类的 __proto__
   * 
   * @param {*} o 
   * @returns 
   */
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
  }
  /** 检查 是否由 new 创建
   * 
   * @param {*} instance 
   * @param {*} Constructor 
   */
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /** 插入 所有属性
   * 
   * @param {*} target 
   * @param {*} props 
   */
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  /** 插入 所有方法
   * 
   * @param {*} Constructor 
   * @param {*} protoProps 
   * @param {*} staticProps 
   * @returns 
   */
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  /** 区分 静态 和 非静态 插入属性和方法
   * 
   * @param {*} obj 
   * @param {*} key 
   * @param {*} value 
   * @returns 
   */
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
  /** 处理 方法名 和 属性名
   * 
   * @param {*} arg 
   * @returns 
   */
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
    function Person(name) {
      _classCallCheck(this, Person);
      _defineProperty(this, "gender", "");
      _defineProperty(this, "identity", 0);
      this.name = name;
    }
    _createClass(
      Person,
      [
        {
          key: "sayName",
          value: function sayName() {
            console.log(this.name);
          }
        }
      ],
      [
        {
          key: "run",
          value: function run() {
            console.log("running");
          }
        }
      ]
    );
    return Person;
  })();
  var Students = /*#__PURE__*/ (function (_Person) {
    //继承父类的 prototype
    _inherits(Students, _Person);
    var _super = _createSuper(Students);
    //用一个闭包保存父类引用，在闭包内部做子类构造逻辑。
    function Students(name, age) {
      var _this;
      //new检查
      _classCallCheck(this, Students);
      //用当前this调用父类构造函数
      _this = _super.call(this, name);
      //将行子类class内部的变量和函数赋给this
      _defineProperty(_assertThisInitialized(_this), "vocation", "");
      //执行子类 constructor 内部的逻辑
      _this.age = age;
      return _this;
    }
    _createClass(
      Students,
      [
        {
          key: "hello",
          value: function hello() {
            console.log("hello");
          }
        }
      ],
      [
        {
          key: "laugh",
          value: function laugh() {
            console.log("hahaha");
          }
        }
      ]
    );
    return Students;
  })(Person);
  console.log(new Students("张三", 18));
  
  