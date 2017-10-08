// Concise piplene example. The same as 3-16, but less verbose.

// Individal functions for image processing.
// Do not have to be asynchronous. The approach is useful though
// if the individual functions would change in future so that to
// return promise instead of plain image value.

// We can bind the domain-specific parameters to the individual functions
// provided they accept the image as the last argument.
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
    var customScaleToFit = scaleToFit.bind(null, 300, 450);
    var customWatermark = watermark.bind(null, 'The Real Estate Company');
    
    return Promise.resolve(image)
        .then(customScaleToFit)
        .then(customWatermark)
        .then(grayscale);
}

processImage('abc');
