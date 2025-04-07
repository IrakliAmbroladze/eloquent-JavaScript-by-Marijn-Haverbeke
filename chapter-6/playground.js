class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

Rabbit.prototype.teeth = "small";

let killerRabbit = new Rabbit("killer");

console.log(killerRabbit.teeth);

killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);

console.log(new Rabbit("basic").teeth);
console.log(Rabbit.prototype.teeth);
