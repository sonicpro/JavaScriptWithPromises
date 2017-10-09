// Getting the Bluebird global variable.
var Promise = require('bluebird');
// Treat Bluebird promise as separate from the native one.
var Bluebird = Promise.noConflict();
var nativePromise = Promise.resolve(); // Native promise
var b = Bluebird.resolve(nativePromise); // Wrap native promise with Bluebird promise.

// Expose wrapped promise state through the Bluebird promise functions.
console.log('Pending? ' + b.isPending());
console.log('Fulfilled? ' + b.isFulfilled());
console.log('Rejected? ' + b.isRejected());

// Console output:
// Pending? false
// Fulfilled? true
// Rejected? false
