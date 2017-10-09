function thenable(value) {
    return {
        then: function (onfulfill, onreject) {
            onfulfill(value);
        }
    };
}

// Create a resolved with "thenable" object promise.
var promise = Promise.resolve(thenable('voila!'));
// Calling to the new promise then() function somehow causes firing then() function of
// the promise (or thenabe object) used to create the new promise.
promise.then(function(result) {
    console.log(result);
});

// Console output:
// voila!
