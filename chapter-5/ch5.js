let scripts = require("./05_higher_order/code/scripts");

let georgian = scripts.filter((script) => script.name == "Georgian");
console.log(georgian);
georgian.map((script) => console.log(script.name));
georgian.map((script) => console.log(script.ranges));
