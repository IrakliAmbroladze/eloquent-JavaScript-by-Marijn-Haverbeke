let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

function ArchaichRabbit(type) {
  this.type = type;
}

ArchaichRabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let oldSchoolRabbit = new ArchaichRabbit("old school");

oldSchoolRabbit.speak("I am from an old school!");

let obj = {
  x: 5,
};

class SecretiveObject {
  #getSecret() {
    return "I ate all the plums";
  }
  interrogate() {
    let shallISayIt = this.#getSecret();
    return "never";
  }
}
let secretObject = new SecretiveObject();

class RandomSourse {
  #max;
  constructor(max) {
    this.#max = max;
  }

  getNumber() {
    return Math.floor(Math.random() * this.#max);
  }
}

let random = new RandomSourse(75);

// let ages = new Map();

// let myObj = { x: 1 };

// ages.set("Irakli", 34);
// ages.set(myObj, 45);

// console.log(ages.get(myObj));

let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }

  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);

temp.fahrenheit = 86;

let boil = Temperature.fromFahrenheit(212);

let sym = Symbol("name");

let killerTabbit = new Rabbit("killer");

Rabbit.prototype[sym] = 55;

let okIterator = "OK"[Symbol.iterator]();

// console.log(okIterator.next());
// console.log(okIterator.next());
// console.log(okIterator.next());

class List {
  constructor(value, rest) {
    this.value = value;
    this.rest = rest;
  }

  get length() {
    return 1 + (this.rest ? this.rest.length : 0);
  }

  static fromArray(array) {
    let result = null;
    for (let i = array.length - 1; i >= 0; i--) {
      result = new this(array[i], result);
    }
    return result;
  }
}

class ListIterator {
  constructor(list) {
    this.list = list;
  }
  next() {
    if (this.list == null) {
      return { done: true };
    }
    let value = this.list.value;
    this.list = this.list.rest;
    return { value, done: false };
  }
}

List.prototype[Symbol.iterator] = function () {
  return new ListIterator(this);
};

let list = List.fromArray([1, 2, 3]);

for (let element of list) {
  console.log(element);
}

class LengthList extends List {
  #length;
  constructor(value, rest) {
    super(value, rest);
    this.#length = super.length;
  }

  get length() {
    return this.#length;
  }
}

console.log(LengthList.fromArray([1, 2, 3]).length);

console.log(new LengthList(1, null) instanceof LengthList);
console.log(new LengthList(2, null) instanceof LengthList);
console.log(new List(3, null) instanceof LengthList);
console.log([1] instanceof Array);
