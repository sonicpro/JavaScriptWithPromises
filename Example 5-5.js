var db = {
    connect: function () {
        return Promise.resolve();
    },
    query: function (connection, queryText) {
        throw new Error('queryText is incorrect');
    }
};

function getReportData() {
    return db.connect().then(function (connection) {
        return db.query(connection, 'select something');
    }).catch(function (err) {	// Put some logging statements close to the source of potential error.
        console.log('An error occurred while getting the data');
        if (err && err.message) {
            console.log(err.message);
        }
        throw err;	// Must re-throw if you want the rejection to propagate further;
                    // otherwise getReportData() would return a fulfilled promise after catch() call.
    });
}

// Some code higher in the call stack. Sorts the report data that getReportData() returns
// and has its own catch handler.
getReportData().then(function (data) {	// Never calls for this implementation that returns rejected promise from getReportData().
    data.sort();
    console.log(data);
}).catch(function (err) {
    console.log('Unable to show data');
});
    
