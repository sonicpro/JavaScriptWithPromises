var rejectedPromise = new Promise(function (resolve, reject) {
    // Reject callback execution serves the constructed
    // promise rejection with some reason.
    reject(new Error('Arghhhh!'));	// Explicit rejection
});

rejectedPromise.catch(function (err) {
    console.log('Rejected');
    console.log(err);
});

// Console output:
// Rejected
// [Error: Arghhhh!]
