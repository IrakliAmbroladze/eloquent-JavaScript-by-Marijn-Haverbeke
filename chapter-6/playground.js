// const firstPrototype = {};
// firstPrototype.color = "white";
// const secondPrototype = Object.create(firstPrototype);

// secondPrototype.style = "beautiful";

// const testObject = Object.create(secondPrototype);

// testObject.value = 15;

// console.log(firstPrototype, secondPrototype, testObject);
// console.log(testObject.value);
// console.log(testObject.style);
// console.log(testObject.color);

const obj = {
  x: 1,
  y: "hello",
  toString() {
    return "This is object obj";
  },
};

console.log(obj + "");
console.log(String());
