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

function balanceFromJson(json) {
    return JSON.parse(json).balance;
}

console.log('Update balance information...');

// Run a sequence of async requests, they will complete in arbitrary order.
accounts.forEach(function (account) {
    // ajaxGet returns a promise eventually fulfilled by the account balance json
    ajaxGet("http://127.0.0.1/JSWP/Example 3-6/" + mapping[account]).then(function (json) {
        console.log(account + ' Balance: ' + balanceFromJson(json));
    });
});

// Console output:
// Updating balance information...
// Checking Account Balance: 384
// Travel Rewards Card Balance: 509
// Big Box Retail Card Balance: 0
