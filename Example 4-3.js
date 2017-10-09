var Promise = require("bluebird");

var printer = {
    pageSize: 'US LETTER',

    connect: function () {
        // Return a promise that is fulfilles when a connection
        // to the printer is established.

        // For the demo purposes just return a promise fulfilled with "undefined".
        return Promise.resolve();
    },

    configure: function (pageSize) {
        return this.connect().then(function () {
            console.log('Setting page size to ' + pageSize);
            this.pageSize = pageSize;
        }.bind(this));
    }, // Set the context for inner callback when calling the configure().

    print: function (job) {
        // Aliasing the outer context by making a closure.
        var that = this;
        return this.connect().then(function () {
            console.log('Printing job using page size ' + that.pageSize);
        });
    }
};

printer.configure('A4').then(function () {
    return printer.print('Test page');
});

// Console output:
// Setting page size to A4
// Printing job using page size A4
