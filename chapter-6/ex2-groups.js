class Group {
  constructor() {
    this.members = [];
  }
  add(v) {
    if (!this.members.includes(v)) {
      this.members.push(v);
    }
  }
  delete(v) {
    this.members = this.members.filter((member) => !(v === member));
  }
  has(v) {
    return this.members.includes(v);
  }
  static from(arr) {
    let group = new Group();
    for (let v of arr) {
      group.add(v);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
