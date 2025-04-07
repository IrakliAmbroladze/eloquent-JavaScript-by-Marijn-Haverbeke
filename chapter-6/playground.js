let protoRabbit = {
  a: "hello",
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";

blackRabbit.speak("I am fear and darkness");

// Classes

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

let killerRabbit = new Rabbit("killer");

console.log(killerRabbit);
