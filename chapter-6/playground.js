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
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log("temp.celsius", temp.celsius);
console.log("temp.fahrenheit", temp.fahrenheit);

let boil = Temperature.fromFahrenheit(212);
console.log(boil.celsius);

console.log("test static", temp.celsius);
