function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) {
      result = number;
    }
  }
  return result;
}

console.log(max(2, 4, 1, -6, 4, 2));

let numbers = [4, 6, 2, 4, 7, 8, 2, 2, 7, 3];
console.log(max(...numbers));
