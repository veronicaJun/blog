function Person(){}
var p = new Person();

console.log("🐶 ~~ p.constructor === Person:", p.constructor === Person)

console.log("🐶 ~~ p.__proto__ === Person.prototype:", p.__proto__ === Person.prototype)

console.log("🐶 ~~ Person.constructor === Function:", Person.constructor === Function)

console.log("🐶 ~~ Person.__proto__ === Function.prototype:", Person.__proto__ === Function.prototype)

console.log("🐶 ~~ Person.prototype.constructor === Person:", Person.prototype.constructor === Person)

console.log("🐶 ~~ Person.prototype.__proto__ == Object.prototype:", Person.prototype.__proto__ == Object.prototype)

console.log("🐶 ~~ Function.constructor === Function:", Function.constructor === Function)

console.log("🐶 ~~ Function.__proto__ === Function.prototype:", Function.__proto__ === Function.prototype)

console.log("🐶 ~~ Function.prototype.constructor === Function:", Function.prototype.constructor === Function)

console.log("🐶 ~~ Function.prototype.__proto__ === Object.prototype:", Function.prototype.__proto__ === Object.prototype)

console.log("🐶 ~~ Object.constructor === Function:", Object.constructor === Function)

console.log("🐶 ~~ Object.__proto__ === Function.prototype:", Object.__proto__ === Function.prototype)

console.log("🐶 ~~ Object.prototype.__proto__ === null:", Object.prototype.__proto__ === null)

console.log("🐶 ~~ Object.prototype.constructor === Object:", Object.prototype.constructor === Object)
