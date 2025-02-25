const createListObject = (value, rest) => ({ value, rest });

let result = createListObject(1, createListObject(2, null));
console.log(result);

function arrayToList(array) {
  let list = {};
  return list;
}

console.log("result of arrayToList: ", arrayToList([1, 2, 3]));

let testObject = { a: 1, b: 2 };
console.log(Object.keys(testObject));
