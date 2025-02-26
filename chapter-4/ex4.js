const deepEqual = (obj1, obj2) => {
  //check if any argument is null
  if (obj1 == null || obj2 == null) {
    return false;
  }

  //if both of the arguments are objects do the following
  if (typeof obj1 == "object" && typeof obj2 == "object") {
    let fObjKeys = Object.keys(obj1);
    let sObjKeys = Object.keys(obj2);
    if (fObjKeys.length !== sObjKeys.length) {
      return false;
    }
    for (let key of fObjKeys) {
      if (obj2[key] === undefined) {
        console.log("first false", sObjKeys[key], key, sObjKeys);
        return false;
      } else if (obj1[key] !== obj2[key]) {
        if (typeof obj1[key] == "object") {
          return deepEqual(obj1[key], obj2[key]);
        }
        return false;
      }
    }
    return true;
  }
  //if arguments are not null and one of them is not an object then check equality directly
  return obj1 == obj2;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
