const reverseArray = (array) => {
  let reversedArray = [];
  let copyArray = array.slice();
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    reversedArray.push(copyArray.pop());
  }

  return reversedArray;
};
const reverseArrayInPlace = (array) => {
  let reversedArray = [];
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    reversedArray.push(array.pop());
  }
  array.push(...reversedArray);
  return array;
};

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
