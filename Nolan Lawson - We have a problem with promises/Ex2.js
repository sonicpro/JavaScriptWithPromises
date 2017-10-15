function doSomething() {
    return Promise.resolve('Resolution value');
}

function doSomethingElse(resolutionValue) {
    return Promise.resolve(resolutionValue);
}

// Returns a promise resolved by a function object?
var promise = doSomething().then(function (prevValue) {
    doSomethingElse(prevValue);	// called a function as a side-effect (not returning the function result). The next then() handler will be called passing
});								// undefined as an argument. A non-returning function function in JavaScript technically returns undefined!


promise.then(function (resValue) {	// resValue === undefined here!
    console.log(resValue);
});

// Console output:
// undefined
