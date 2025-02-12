let myArray = [0, 1, 2, 3, 4];

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log("myArray: ", myArray);
console.log("newArray: ", remove(myArray, 2));
