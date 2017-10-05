var p1, p2;

// Construct resolved with the "undefined" value promise using "factory" function.
p1 = Promise.resolve();
p2 = p1.then(function () {
    // ..."Success" handler code here.
});

console.log('p1 and p2 are different objects: ' + (p1 !== p2));

// Console output:
// p1 and p2 are different objects: true
