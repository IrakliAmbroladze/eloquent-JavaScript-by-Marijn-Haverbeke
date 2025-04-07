let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";

blackRabbit.speak("I am fear and darkness");
