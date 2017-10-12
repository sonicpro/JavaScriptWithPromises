function echo(text) {
    console.log(text);
    throw new Error('oops');

    // Example of call stack (printed explicitly from the catch handler of the promise which is
    // resolved by this method return value).
    // Error: oops
    //	at echo (Example 5-12.js:3)
    //	at <anonymous>
}

function showRandomNumber() {
    // Invoking echo as a promise callback
    var p = Promise.resolve(Math.random());
    p.then(echo).catch(function (error) {
        console.log(error.stack);
    });
}

document.addEventListener('click', function handleClick() {
    showRandomNumber();
});

document.addEventListener('keypress', function handleKeypress() {
    showRandomNumber();
});

