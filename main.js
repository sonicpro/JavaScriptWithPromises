// For Example 4-19.js - main program code for web workers API
var worker = new Worker('task.js');
var deferreds = {};
var counter = 0;

// The deferred for the concrete task is resolved here, not in the
// background worker code (task.js).
worker.addEventListener('completed', function onCompleted(event) {
    var d = deferreds[event.data[0]];
    d.resolve(event.data.result);
});

function background(task) {
    var id = ++counter;
    var deferred = jQuery.Deferred();
    deferreds[id] = deferred; // Store deferered for later resolution.
    console.log('Sending task to worker: ' + task);
    // Trigger 'onmessage' event on the worker.
    worker.postMessage({
        id: id,
        task: task
    });
    return deferred.promise(); // Only expose promise to calling code.
}

// then() is a synonym for pipe() in jQuery.
background('Solve for x').then(function(result) {
    console.log('The outcome is... ' + result);
}).fail(function(err) {
    console.log('Unable to complete task');
    console.log(err);
});

// Console output:
// Sending task to worker: Solve for x
// The outcome is... some calculated result
