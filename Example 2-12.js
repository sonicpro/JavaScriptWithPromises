Promise.reject(Error('bad news')).then(
    function step2 () {
        console.log('This is never run');
    }
).then(
    function step3 () {
        console.log('This is also never run');
    }
).catch(
    function (error) {
        console.log('Something failed along the way. Inspect error for more info');
        console.log(error);	// Error object with message 'bad news'
    }
);

// Console output:
// Something failed along the way. Inspect error for more info.
// [Error:bad news]
