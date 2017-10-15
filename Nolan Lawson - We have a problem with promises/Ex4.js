function doSomething() {
    return Promise.resolve('Resolution value');
}

function doSomethingElse(resValue) {
    return Promise.resolve(resValue);
}

var promise = doSomething().then(doSomethingElse);	// Correct usage of the onFulfilled callback. Identical to the Ex1.js.

promise.then(function (resValue) {
    console.log(resValue);
});
