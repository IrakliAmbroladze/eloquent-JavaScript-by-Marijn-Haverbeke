function range(from, to) {
  let r = Object.create(range.methods);
  r.from = from;
  r.to = to;
  return r;
}

range.methods = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },

  *[Symbol.iterator]() {
    for (let i = Math.ceil(this.from); i <= this.to; i++) yield i;
  },
  toString() {
    return "(" + this.from + "..." + this.to + ")";
  },
};

let r = range(1, 3);
// console.log(r);
// console.log(r.includes(2));
// console.log(r.toString());
// console.log([...r]);

class Rabbit {}
const rabbit = new Rabbit();
const identicalRabbit = new rabbit.constructor();

console.log(rabbit.constructor); // Rabbit
console.log(Object.getPrototypeOf(rabbit)); // Rabbit.prototype
console.log(Object.getPrototypeOf(Rabbit)); // Function.prototype
console.log(Object.getPrototypeOf(Function)); // Function.prototype!
console.log(Object.getPrototypeOf(Function.prototype)); // Object.prototype
console.log(new rabbit.constructor());

let myObj = {};
console.log(myObj.constructor);
console.log(Object.getPrototypeOf(myObj) === Object.prototype);
