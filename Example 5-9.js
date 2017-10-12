// Example 5-9.js. Mimicing catch/finally with catch/then.

function getData() {
    var dataPromise,
        timestamp = Date.now();

    dataPromise = new Promise(function (resolve, reject) {
        // ...
        throw new Error('Unexpected problem');
    });

    dataPromise.catch(function (err) {
        // Do not rethrow an error so that the subsequent then() call fires.
    }).then(function () {
        // Simulates finally block
        console.log('Data fetch took ' + (Date.now() - timestamp) + ' ms');
    });

    // Return data promise instead of catch/then tail to propagate rejection.
    return dataPromise;
}

getData().catch(function (e) {
    console.log('Some error occurred');
    console.log(e);
});

// Console output:
// Some error occurred
// [Error: Unexpected problem]
// Data fetch took 15 ms
    
