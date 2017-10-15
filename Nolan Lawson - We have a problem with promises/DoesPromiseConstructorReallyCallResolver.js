var p = new Promise(function (resolve, reject) {
    try {
        console.log('called by the constuctor');
        resolve('Fulfillment value');
    }
    catch(e) {
        return reject(e);
    }
});

p.then(function(fulfillmentValue) {
    console.log(fulfillmentValue);
});
    
