// Verbose piplene example.

// Individal functions for image processing.
// Do not have to be asynchronous. The approach is useful though
// if the individual functions would change in future so that to
// return promise instead of plain image value.
function scaleToFit(width, height, image) {
    console.log('Scaling image to ' + width + ' x ' + height);
    return image;
}

function watermark(text, image) {
    console.log('Watermerking image with ' + text);
    return image;
}

function grayscale(image) {
    console.log('Converting image to grayscale');
    return image;
}

// Image processing pipeline
function processImage(image) {
    return Promise.resolve(image).then(function (image) {
        return scaleToFit(300, 450, image);
    }).then(function (image) {
        return watermark('The Real Estate Company', image);
    }).then(function (image) {
        return grayscale(image);
    });
}

processImage('abc');
