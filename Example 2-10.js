// Create a promise fulfilled with 'ta-da!' value:
Promise.resolve('ta-da!').then(
    function step2(result) {
        console.log('Step 2 received ' + result);
        // The promise created by this "then()" is fulfilled by "Greetings from step 2" value;
        return 'Greetings from step 2'; // Explicit return value
    }
).then(
    function step3(result) {
        console.log('Step 3 received ' + result); // No explicit return value (fulfilled with undefined).
    }
).then(
    function step4(result) {
        console.log('Step 4 received ' + result);
        // The promise create by this "then()" is fulfilled with the value that fullfills the returned
        // from its callback promise.
        return Promise.resolve('fulfilled value'); // Return a promise
    }
).then(
    function step5(result) {
        console.log('Step 5 received ' + result);
    }
);

// Console output:
// Step 2 received ta-da!
// Step 3 received Greetings from step 2
// Step 3 received undefined
// Step 5 received fulfilled value
