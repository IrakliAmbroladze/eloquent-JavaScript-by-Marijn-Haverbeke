function speak(line) {
  console.log(` The ${this.type} rabbit says '${line}' `);
}
let whiteRabbit = { type: "white" };
let hungryRabbit = { type: "hungry" };

speak.call(whiteRabbit, "Hurry");
