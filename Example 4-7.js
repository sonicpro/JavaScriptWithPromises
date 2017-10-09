// Node-style callback: the callback itself is the last argument,
// the callback's first argument is the error object.
function loadImageNodeStyle(url, callback) {
    var image = new Image();
    image.src = url;
    image.onload = function () {
        callback(null, image);
    };
    image.onerror = function (error) {
        callback(error);
    };
}

// Using promisify to wrap a node-style function
var loadImageWrapper = P.promisify(loadImageNodeStyle);
// The wrapped function does not require a callback with two parameters (error, image)
var promise = loadImageWrapper('smile.gif');

promise.then(function (image) {
    console.log('Image loaded');
    document.body.appendChild(image);
}).catch(function (error) {
    console.log('Unable to load image');
    console.log(error);
});
