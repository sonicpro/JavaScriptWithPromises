function ajaxGet(url) {
    return new Promise(function (resolve, reject) {
        "use strict";
        let req = new XMLHttpRequest();
        req.open("get", url, true);
        req.onload = function () {
            if (req.status === 200) {
                // Fulfill this promise with the response text.
                resolve(req.response);
            } else {
                // Reject this promise.
                reject(new Error(req.statusText));
            }
        };

        req.onerror = function () {
            // Also reject this promise.
            reject(new Error("Network error"));
        };

        req.send();
    });
}

// Build a sequential chain using a loop. Each task in a chain starts on completion of a previous task.
var products = ['sku-1', 'sku-2', 'sku-3'];

// Creating promises in a loop and fulfilling them.
function sequence(array, callback) {
    return array.reduce(function (promise, item) {
        // onFulfilled callback parameter to then() disregards its parameter in this demo,
        // we just printing to console inside onFulfilled and fulfill the promise with the new promise
        // created inside the callback() by means of another then().
        return promise.then(function () {
            return callback(item);
        });
    }, Promise.resolve()); // "Seed" promise for the first reduce() iteration.
};

sequence(products, function (sku) {
    return getInfo(sku).then(function (json) {
        var info = JSON.parse(json);
        console.log(info.info);
    });
})
// If some promise returned from the callback function is rejected,
// this causes skipping .then() execution for all the remaining items in sequence() and
// promoting the rejected promise to the sequence return value. Catch it here.
    .catch(function (reason) {
        console.log(reason);
    });

function getInfo(sku) {
    console.log('Requested info for ' + sku);
    return ajaxGet("http://127.0.0.1/JSWP/Example 3-12/" + sku.replace(/-/, '') + ".json");
}
