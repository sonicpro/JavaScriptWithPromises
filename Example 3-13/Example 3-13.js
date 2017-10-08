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

// Build a sequential chain using recursion. Each task in a chain starts on completion of a previous task.
var products = ['sku-1', 'sku-4', 'sku-3']; // Introduce an error; sku-3 won't be processed.

// Creating promises one-by-one and fulfilling them by another promise returned by callback() function.
function sequence(array, callback) {
    function  chain(array, index) {
        if (index === array.length) {
            // Do nothing, just return a fulfilled promise.
            return  Promise.resolve();
        }
        // Create a primise resolved by another promise returned from callback function.
        // When the another promise is rejected, then() won't fire and rejection is propagated
        // to the return value of the sequence() function.
        return Promise.resolve(callback(array[index])).then(function () {
            return chain(array, index + 1);
        });
    }
    return chain(array, 0);
};

sequence(products, function (sku) {
    return getInfo(sku).then(function (json) {
        var info = JSON.parse(json);
        console.log(info.info);
    });
}).catch(function (reason) {
        console.log(reason);
    });

function getInfo(sku) {
    console.log('Requested info for ' + sku);
    return ajaxGet("http://127.0.0.1/JSWP/Example 3-12/" + sku.replace(/-/, '') + ".json");
}
