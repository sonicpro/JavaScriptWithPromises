function echo(text) {
    console.log(text);
    throw Error('oops');
}

// Example of call stack (printed by Chrome in the console) for error when triggered by a mouse click:
// Uncaught Error: oops
//	at echo (Example 5-11.js:3)
//	at showRandomNumber (Example 5-11.js:12)
//	at HTMLDocument.handleClick (Example 5-11.js:16)

function showRandomNumber() {
    echo(Math.random());
}

document.addEventListener('click', function handleClick() {
    showRandomNumber();
});

document.addEventListener('keypress', function handleKeypress() {
    showRandomNumber();
});
