// This function is from Adrian Hall's blog: https://shellmonger.com/2015/03/24/promises-and-ajax-in-ecmascript-6/
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

// Show pun get by ajax call, then show the "career decision message"
showPun().then(function () {
    console.log('Maybe I should stick to programming');
});

// Show pun (returns promise fulfilled with undefined).
function showPun() {
    return getPun().then(function (punText) {
        console.log(punText);
    });
}

// Get pun text asynchronously, returns promise fulfilled with the pun text.
function getPun () {
    // ajaxGet() returns a promise that is eventually fulfilled
    // by json for {content: "The pet store job was ruff!"}

    // If ajaxGet() returned the JSON synchronously, getPun() and showPun()
    // would not consume or return promises!
    return ajaxGet("http://127.0.0.1/JSWP/pun.json").then(function (json) {
        var pun = JSON.parse(json);
        return pun.content;
    })
        .catch(function (error) {
            console.log(error);
        });
}

// Console output:
// The pet store job was ruff!
// Maybe I should stick to programming

