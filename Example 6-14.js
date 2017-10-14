var previous = 0;
var next = 1;

function fib() {
    next = previous + next;
    previous = next - previous;
    return next;
}

for (var i = 0; i < 5; i++) {
    console.log(fib());
}
