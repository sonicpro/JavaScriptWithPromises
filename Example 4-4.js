var Promise = require("bluebird");

var printer = {
    paperSize: 'US LETTER',

    connect: function () {
        // Return a promise that is fulfilles when a connection
        // to the printer is established.

        // For the demo purposes just return a promise fulfilled with "undefined".
        return Promise.resolve();
    },

    configure: function (paperSize) {
        return this.connect().then(function () {
            console.log('Setting paper size to ' + paperSize);
            this.paperSize = paperSize;
        }.bind(this));
    }, // Set the context for inner callback when calling the configure().

    print: function (job) {
        // Aliasing the outer context by making a closure.
        var that = this;
        return this.connect().then(function () {
            console.log('Printing job using paper size ' + that.paperSize);
        });
    }
};

printer.shutdown = function () {
    this.connect().bind(this).then(function () { // bluerird.bind() not function.bind()
        console.log('First callback can use ' + this.paperSize);
    }).then(function () {
        console.log('And second callback can use ' + this.paperSize);
    });
};

// Returns a promise resolved by the promise returned from printer.shutdown() (it returns the promise resolved with "undefined").
printer.configure('A4').then(function () {
    return printer.shutdown();
});

// Console output:
// First callback can use A4
// And second callback can use A4
