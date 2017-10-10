var Bluebird = require("bluebird");

// Returns promise fulfilled with a fake connection object.
function getConnection() {
    return Bluebird.resolve({
        count: function (key) {
            if (key === "students") {
                return 25;
            }
            return null;
        }
    });
}

// Tapping into chain of promises for logging etc. purposes.
// tap() returns a new promise fulfilled with the same value that the
// promise it is called on is fulfilled, the tap() callback return value is ignored.
function countStudents() {
    return getConnection().then(function(connection) {
        return connection.count('students');
    }).tap(function(count) {
        console.log('Number of students: ' + count);
    });
}

countStudents().then(function(count) {
    if (count > 24) console.log('Classroom has too many students.');
});

// Console output:
// Number of students: 25
// Classroom has too many students

