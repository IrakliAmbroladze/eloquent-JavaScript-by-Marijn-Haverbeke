function range(start, end, step = 1) {
  let allNumberArray = [];
  if (step > 0) {
    while (start <= end) {
      allNumberArray.push(start);
      start += step;
    }
  } else if (step < 0) {
    while (start >= end) {
      allNumberArray.push(start);
      start += step;
    }
  } else {
    console.log("step is zero, that is not allowed!");
  }
  return allNumberArray;
}

function sum(range) {
  let total = 0;
  for (let number of range) {
    total += number;
  }
  return total;
}

console.log("range: ", range(1, 10, 2));
console.log("sum: ", sum(range(1, 10)));
console.log("negative range: ", range(5, 2, -1));
console.log("sum: ", sum(range(5, 2, -1)));
console.log("negative range: ", range(5, 2, 0));
