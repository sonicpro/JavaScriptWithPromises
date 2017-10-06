// Resolver function passed to the Promise constructor executes synchronously;
// callback passed to then() executes asynchronously.
var promise = new Promise(function (resolve, reject) {
    console.log('Inside the resolver function');	// 1
    resolve();
});

promise.then(function () {
    console.log('Inside the onFulfilled handler');	// 3
});

console.log('This is the last line of the script');	// 2

// Console output:
// Inside the resolver function
// This is the last line of the script
// Inside the onFunilled handler
