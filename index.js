// Your code here.
const countBs = (word) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === "B") {
      count++;
    }
  }
  return count;
};

const countChar = (word, char) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }
  return count;
};

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlakkkkk", "k"));
// → 4
