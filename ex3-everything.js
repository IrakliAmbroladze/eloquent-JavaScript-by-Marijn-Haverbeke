function every(array, test) {
  // Your code here.
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

function every2(array, test) {
  // Your code here.

  return array.some((x) => !test(x)) === true ? false : true;
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true

console.log(every2([1, 3, 5], (n) => n < 10));
// → true
console.log(every2([2, 4, 16], (n) => n < 10));
// → false
console.log(every2([], (n) => n < 10));
// → true
