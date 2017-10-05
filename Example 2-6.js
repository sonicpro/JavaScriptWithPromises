var promise = new Promise(function (resolve, reject) {
    resolve(Math.PI);
    reject(0);				// Does nothing
    resolve(Math.sqrt(-1));	// Does nothing
});

// Fires immediately.
promise.then(function (number) {
    console.log('The number is ' + number);
});

// Console output:
// The number is 3.141592653589793
