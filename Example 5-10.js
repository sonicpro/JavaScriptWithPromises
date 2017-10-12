// Example 9-10. More concise implementation of catch/finally block for the promises chain (Example 5-9.js)
// using Bluebird.finally().

var Bluebird = require("bluebird");

function getData() {
    var timestamp = Date.now();

    // Bluebird.finally() executes its callback and returns a new promise chanied from its call target.
    // Unless throwing from the callback, it has no effect on the fulfilled or rejected value of the returned promise;
    // thus the original rejection is propagated up to the promise chain.
    return new Bluebird(function (resolve, reject) {
        // ...
        throw new Error('Unexpected problem');
    }).finally(function () {
        console.log('Data fetch took ' + (Date.now() - timestamp) + ' ms');
    });
}

getData().catch(function (e) {
    console.log('Some error occurred');
    console.log(e);
});

// Console output is reversed comparing to Example 5-9.js:
// Data fetch took 6 ms
// Some error occurred
// [Error: Unexpected problem]
