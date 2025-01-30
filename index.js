function power(base, exponant) {
  if (exponant == 0) {
    return 1;
  }
  return base * power(base, exponant - 1);
}

console.log(power(4, 4));
