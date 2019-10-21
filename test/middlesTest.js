const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");


assertArraysEqual(middle(["1", "2", "3"]), ["2"], true);
assertArraysEqual(middle(["1", "2", "3", "4"]), ["2", "3"], true);
assertArraysEqual(middle(["1", "2", 3, "4"]), ["2", 3], true);
assertArraysEqual(middle(["1", "2", 3, "4"]), [2, 3], false);
assertArraysEqual(middle(["1", "2"]), [], true);