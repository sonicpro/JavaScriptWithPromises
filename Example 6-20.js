// Example 6-20.js. Generator that returns filtered array through iterator.
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
var iterator = match(animals, 'legs', 4),
    result;
while ((result = iterator.next()).done !== true) {
    console.log(result.value.type);
}

// Console output:
// cat
// dog
