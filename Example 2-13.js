rejectWith('bad news').then(
    function step2() {
        cosole.log('This is never run');
    }
).catch(
    function (error) {
        console.log('Foiled again!');
        console.log(error);	// [Error: bad news]
    }
);

function rejectWith(val) {
    return new Promise(function (resolve, reject) {
        throw Error(val);
        resolve('Not used');	// This line is never run
    });
}

// Console output:
// Foiled again!
// [Error: bad news]
