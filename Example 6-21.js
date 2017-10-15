// Example 6-21.js. Replacement of the while(iterator.done !== true) with for..of.
function* match(array, prop, value) {
    var object;
    for (var i = 0, len = array.length; i != len; i++) {
        object = array[i];
        if (object[prop] === value) {
            yield object;
        }
    }
}

var animals = [
    { type: 'bird', legs: 2 },
    { type: 'cat', legs: 4 },
    { type: 'dog', legs: 4 },
    { type: 'spider', legs: 8 }
];

for (var animal of match(animals, 'legs', 4)) {
    console.log(animal.type);
}

// Console output:
// cat
// dog
