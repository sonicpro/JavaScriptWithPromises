// Example 6-10.js. Using the iterable interface of an array.

var array = [1, 2];
var iterator = array[Symbol.iterator]();

console.log(iterator.next());	// {value: 1, done: false}
console.log(iterator.next());	// {value: 2, done: false}
console.log(iterator.next());	// {value: undefined, done: true}
