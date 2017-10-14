// Example 6-15.js. Generator for computing the infinite set of Fibonacci numbers.
function* fib() {
    var previous = 0;
    var next = 1;

    while(true) {
        next = previous + next;
        previous = next - previous;
        yield next;
    }
}

var iterator = fib();
for(var i = 0; i < 5; i++) {
    console.log(iterator.next().value);
}
