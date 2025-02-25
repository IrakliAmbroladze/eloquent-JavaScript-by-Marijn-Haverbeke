const prepend = (value, rest) => ({ value, rest });

function arrayToList(array) {
  let list = null;
  for (let i = array.length; i > 0; i--) {
    list = prepend(array[i - 1], list);
  }

  return list;
}

let list = arrayToList([1, 2, 3]);
console.log("result of arrayToList: ", list);

function listToArray(list) {
  let array = [];
  while (list.rest !== null) {
    array.push(list.value);
    list = list.rest;
  }
  array.push(list.value);

  return array;
}

console.log("result of listToArray: ", listToArray(list));

const nth = (list, number) => {
  let array = listToArray(list);
  return array[number];
};

// Your code here.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
