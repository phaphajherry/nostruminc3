document.querySelectorAll('#form input');

// Reduce
const values = Array.from(document.querySelectorAll('#form input')).reduce((acc, input) => ({...acc, [input.id]: input.value }), {});

console.log(values);