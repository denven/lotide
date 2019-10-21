const assertEqual = require("../assertEqual").assertEqual;
const eqArrays = require("../eqArrays");

assertEqual(eqArrays(["12", "2", "3"], ["12", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 5]), false); // => true
assertEqual(eqArrays([],[]), true);
assertEqual(eqArrays("aaaaa",[]), false);
assertEqual(eqArrays(2,[]), false);

