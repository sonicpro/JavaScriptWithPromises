function doSomething() {
    return Promise.resolve('Resolution value');
}

function doSomethingElse(resolutionValue) {
    return Promise.resolve(resolutionValue);
}


var promise = doSomething().then(function (prevValue) {
    return doSomethingElse(prevValue);	// returning another promise.
});

promise.then(function (resValue) {
    console.log(resValue);
});

// Console output:
// Resolution value
