//import assertEqual function in another js file.

const assert = require('./assertEqual.js');

const head = function(array) {
    if (Array.isArray(array)) {
       return array[0]; 
    } else {
        return;
    }
};

assert.assertEqual(head([5,6,7]), 5);
assert.assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
