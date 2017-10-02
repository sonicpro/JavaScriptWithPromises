function loadImage(url) {
    var promise = new Promise(
        function resolver(resolve, reject) {
            var img = new Image();
            img.src = url;

            img.onload = function () {
                // The result is passed to the promise as a parameter
                // of the resolve. For example, callbacks registered with
                // Promise.then() will receive img as the parameter.
                resolve(img);
            };
            img.onerror = function (e) {
                // This function paramater privided by Promise object?
                reject(e);
            };
        }
    );
    return promise;
}
