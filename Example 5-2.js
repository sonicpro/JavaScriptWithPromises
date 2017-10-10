function rejectionCallback() {
    throw new Error('Thrown from reject callback');
}

var rejectedPromise = new Promise(function (resolve, rejectionCollback) {
    // It's like the code inside all three Promise API callbacks (resolver function,
    // and two synchronous callback agruments of it) is inside an implicit try block and the
    // implicit cath block with some rejection code inside.
    // throw new Error('Arghhhh!');	// Implicit rejection
    rejectionCallback();	// Explicit rejection turned out to be implicit: throw inside the rejection callback.
});

rejectedPromise.catch(function (err) {
    console.log('Rejected');
    console.log(err);
});
