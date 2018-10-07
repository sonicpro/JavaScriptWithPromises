/*global resolve, reject, require */
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function onReadyStateChange(resolver, rejecter) {
    if (this.readyState == 4) { // 4 - Complete
        if ((this.status >= 200 && this.status < 300) || this.status == 304) {
            resolver(this.responseText);
        } else {
            rejecter(this.status);
        }
    }
}
        
function httpCallPromise(url) {
    return new Promise(function(resolve, reject) {
        // Make an async HTTP request

        var async = true;
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, async);
        xhr.send();
    
        xhr.onreadystatechange = onReadyStateChange.bind(xhr, resolve, reject);
    });
}

var baseUrl = "http://localhost:3000/";
var resource = "movies";

var promise = httpCallPromise(baseUrl + resource).then(value => console.log(value))
        .catch(error => {
            console. log("An error occurred while getting the data");
            if (error) {
                console.log("Status " + error);
            }
        });
