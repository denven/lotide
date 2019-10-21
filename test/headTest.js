const assert = require("./../assertEqual.js").assertEqual;
const head = require("./../head.js");
 

assert(head([5,6,7]), 5);
assert(head(["Hello", "Lighthouse", "Labs"]), "Hello");
