loadImage('smile.gif').then(function (img) {
    document.body.appendChild(img);
}).catch(function (e) {
    console.log('Error occurred while loading image');
    console.log(e);
});
