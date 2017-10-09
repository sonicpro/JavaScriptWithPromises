// Example 4-11.js
// Shows the difference between the array.map() and Bluebird.map().
// Bluebird.map() maps the promise resolved with array to the promise of the item outcomes.
// The outcome calculating is asynchronous and if the array item is a promise in turn,
// it must be resolved so that the mapping function process that item.
var Bluebird = require("bluebird");

// Returns a Bluebird promise that resolves after one second.
function resolveLater(value) {
    return new Bluebird(function (resolve, reject) {
        setTimeout(function () {
            resolve(value);
        }, 1000);
    });
}

// Create a promise resolved by array of three items, second of whose
// is the promise resolved by the value of 2 after 1 second.
var numbers = Bluebird.resolve([
    1,
    resolveLater(2),
    3
]);

console.log('Square the following numbers...');
// If Bluebird.map() encounters unresolved prromise, it won't be processed until resolved.
numbers.map(function (num) {
    console.log(num);
    return num * num;
}).then(function (result) {
    console.log('The squares of those numbers are...');
    console.log(result.join(', '));
});

// Console output:
// Square the following numbers...
// 1
// 3
// 2
// The squares of those numbers are...
// 1, 4, 9
