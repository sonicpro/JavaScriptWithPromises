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

// Define each account
var accounts = ['Checking Account', 'Travel Rewards Card', 'Big Box Retail Card'];

// provide balance urls mapping
var mapping = {
    "Checking Account": "checkingAccount.json",
    "Travel Rewards Card": "travelRewardsCard.json",
    "Big Box Retail Card": "bigBoxRetailCard.json"
};

// Creating the array of promises (pending operations) from the array of accounts.
var requests = accounts.map(function (account) {
    return ajaxGet(mapping[account]);
});


// Running ALL the operations in the array of promises,
// regardless of their outcome.
// We are using the fact that then() as well as catch() always (if not throwing inside)
// return a resolved promise, even if their "call target" promise is rejected.

// This function reportedly resembles the ephoneous function from Bluebird.js.
function settled(promises) {
    // Create array of fulfilled promises out of the array of pending promises.
    var alwaysFulfilled = promises.map(function (promise) {
        return promise.then(function onFulfilled(value) {
            return { state: 'fulfilled', value: value };
        },
                            function onRejected(readon) {
                                return { state: 'rejected', reason: reason };
                            }
                           );
    });
    // Consolidate the array of promises into a singe one.
    return Promise.all(alwaysFulfilled);
}

// Update status message once all requests finish
settled(requests).then(function (outcomes) {
    var count = 0;
    outcomes.forEach(function(outcome) {
        if (outcome.state === 'fulfilled')
            count++;
    });
    console.log(count + ' out of ' + outcomes.length + ' balances were updated');
});

// Console output (varies based on requests):
// 2 balances out of 3 were updated.
