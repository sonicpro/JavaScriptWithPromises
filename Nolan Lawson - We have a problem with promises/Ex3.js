function doSomething() {
    return Promise.resolve('Resolution value');
}

function doSomethingElse(resValue) {
    return Promise.resolve(resValue);
}

var promise = doSomething().then(doSomethingElse());	// Esoteric use case - the promise returned by doSomethingElse() is ignored;
// the promise returned from doSomething() falls through.
// Any non-function value passed to .then() is identical to passing null (or whatever non-function valeu) to it,
// that call to .then() is ignored, the previous value is passing through.
// doSomethingElse() retruns a promise, which is not a function. Compare the above statement to the following:
var promise1 = doSomething().then(1);

promise.then(function(resValue) {
    console.log(resValue);
});

promise1.then(function (resValue) {
    console.log(resValue);
});

// Console output:
// Resolution value
// Resolution value
