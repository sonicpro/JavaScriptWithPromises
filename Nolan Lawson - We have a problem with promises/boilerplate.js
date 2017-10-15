function doSomething() {
    return Promise.resolve('Resolution value');
}

function doSomethingElse() {
    return Promise.resolve();
}

var promise;

promise.then(function (resValue) {
    console.log(resValue);
});
