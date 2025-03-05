const SCRIPTS = require("./05_higher_order/code/scripts");

const characterScript = (code) => {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
};

console.log(characterScript(121));
