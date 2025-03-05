const SCRIPTS = require("./05_higher_order/code/scripts");

require("./05_higher_order/code/scripts");

const characterCount = (script) => {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
};

let biggest = null;

for (let script of SCRIPTS) {
  if (biggest == null || characterCount(biggest) < characterCount(script)) {
    biggest = script;
  }
}

console.log(biggest);
