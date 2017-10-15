// Example 6-22.js. Passing an error to generator with iterator.throw().
function* languages() {
    try {
        // Yielding one language name at a time.
        yield 'English';
        yield 'French';
        yield 'German';
        yield 'Spanish';
    } catch (error) {
        console.log(error.message);
    }
}

var greetings = {
    English: 'Hello',
    French: 'Bonjour',
    Spanish: 'Hola'
};

var iterator = languages(),
    word;
for (var language of iterator) {
    word = greetings[language];
    if (word) {
        console.log(word);
    } else {
        // notice iterator.throw() usage to terminate the iteration from inside the iterator.
        iterator.throw(Error('Missing translation for ' + language.value));
    }
}

// Console output:
// Hello
// Bonjour
// Missing translation for German
