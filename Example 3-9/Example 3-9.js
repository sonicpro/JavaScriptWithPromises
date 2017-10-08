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

// Similar to the example 3-6: Running a bunch of async requests and then getting a
// bunch of callback calls from the event loop queue.
var products = ['sku-1', 'sku-2', 'sku-3'];

products.forEach(function (sku) {
    getInfo(sku).then(function (json) {
        var info = JSON.parse(json);
        console.log(info.info);
    });
});

function getInfo(sku) {
    console.log('Requested info for ' + sku);
    return ajaxGet("http://127.0.0.1/JSWP/Example 3-9/" + sku.replace(/-/, '') + ".json");
}

// Console output:
// Requested info for sku-1
// Requested info for sku-2
// Requested info for sku-3
// Info for sku1
// Info for sku2
// Info for sku3
