const createListObject = (value, rest) => ({ value, rest });

function arrayToList(array) {
  let list = null;
  for (let i = array.length; i > 0; i--) {
    list = createListObject(i, list);
  }

  return list;
}

console.log("result of arrayToList: ", arrayToList([1, 2, 3]));
