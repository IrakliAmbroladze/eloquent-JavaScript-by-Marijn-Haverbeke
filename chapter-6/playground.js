function speak(line) {
  console.log(` The ${this.type} rabbit says '${line}' `);
}
let whiteRabbit = { type: "white" };
let hungryRabbit = { type: "hungry" };

speak.call(whiteRabbit, "Hurry");

let finder = {
  find(array) {
    return array.some((v) => v == this.value);
  },
  value: 4,
};
console.log(finder.find([4, 5])); // → true
