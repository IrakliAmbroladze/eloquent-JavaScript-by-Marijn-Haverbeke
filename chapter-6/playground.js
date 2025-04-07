class RandomSource {
  #max;
  constructor(max) {
    this.#max = max;
  }
  getNumber() {
    return Math.floor(Math.random() * this.#max);
  }
}

let randomNumber = new RandomSource(100);

console.log(new RandomSource(100).getNumber());
console.log(randomNumber.getNumber());
