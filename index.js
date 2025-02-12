console.log("coconuts".slice(4, 7));
console.log("coconuts".indexOf("u"));
console.log("one two three".indexOf("ee"));
console.log("    okay \n  ".trim());

console.log(String(6).padStart(3, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log("sentence: ", sentence);
console.log("words: ", words);
words = words.join(". ");
console.log("joined words: ", words);

let myString = "LA";
let newString = myString.repeat(3);
console.log(myString);
console.log(newString);

let string = "abc";
console.log(string.length);
console.log(string[1]);
