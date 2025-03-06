// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(1, horseShoe.length);
// → 4
console.log(2, horseShoe[0]);
// → (Invalid half-character)
console.log(3, horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(4, horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}
// → 🌹
// → 🐉

console.log("rose", roseDragon.codePointAt(0));
console.log("dragon", roseDragon.codePointAt(2));

console.log("I love \u{1F40E}");
console.log("I love " + String.fromCodePoint(128052));
console.log("I love \uD83D\uDC0E");

let someText = "yes";
console.log("yes, charCodeAt", someText.charCodeAt(0));
console.log("yes, codePointAt", someText.codePointAt(0));
