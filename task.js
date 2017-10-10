// For Example 4-19. Background worker code for web workers API.
// Does not work. Try to fix it by converting the first element in the array to transferrable object.
// http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast
onmessage = function (event) {
    postMessage('completed', [
        event.data.id,
        // Demo: return a hard-coded result.
        'some computed result'
    ]);
};

