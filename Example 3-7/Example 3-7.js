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

// Creating the array of promises from the array of accounts.
var requests = accounts.map(function (account) {
    return ajaxGet(mapping[account]);
});

// Create a single promise from the array of promises and provide resolve / reject handlers.
Promise.all(requests).then(function (balances) {
    console.log('All ' + balances.length + ' balances are up to date');
}).catch(function (error) {
    console.log('An error occurred while retreiving balance information');
    console.log(error);
});

// Console output:
// All 3 balances are up to date
