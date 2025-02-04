function printZeroPaddedWithLabel(number, label) {
  let numberToString = String(number);
  while (numberToString.length < 3) {
    numberToString = "0" + numberToString;
  }
  console.log(`${numberToString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "cows");
  printZeroPaddedWithLabel(chickens, "chickens");
  printZeroPaddedWithLabel(pigs, "pigs");
}

printFarmInventory(7, 11, 3);
