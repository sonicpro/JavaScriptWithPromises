var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var async = true;
var xhr = new XMLHttpRequest();
xhr.open('get', 'data.json', async);
xhr.send();						// The result of AJAX call can be removed from the queue as soon as the execution
								// of the current script completes.
    function listener() {
        console.log('greetings from listener');
    }

setTimeout(function delayed() { // Creates race condition!
    xhr.addEventListener('load', listener);
    xhr.addEventListener('error', listener);
}, 5);

