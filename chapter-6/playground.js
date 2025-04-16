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

let obj = function () {
  return 5;
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

console.log(random.getNumber());
