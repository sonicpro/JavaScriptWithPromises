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
    this.connect().bind(this).then(function () { // bluebird.bind() not function.bind()
        console.log('First callback can use ' + this.paperSize);
    }).then(function () {
        console.log('And second callback can use ' + this.paperSize);
    }).bind(); // mask the previous binding to the calling code in order to prevent leaking.
};

// Callbacks for the subsequent calls of the promise's returned from printer.shutdown() functions
// no longer run in the printer context.
printer.print().then(function () {
    return printer.shutdown();
}).then(function () {
    console.log('This code is not running in the context  of the printer: ' + (this !== printer));
});

// Console output:
// Printing job using paper size US LETTER
// First callback can use US LETTER
// This code is not running in the context of the printer: true
// And second callback can use US LETTER
