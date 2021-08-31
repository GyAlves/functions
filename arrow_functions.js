const houses = []
const introduce_houses = houses.map(house => {
    console.log(`${house}`)
})


// Traditional VS Arrow 

function test(a) {
    return a + 100;
}
// 1 - removes the word function add the arrow 

(a) => {
    return a + 100
}

// 2 - removes the brackets and return statement 

(a) => a + 100

// 3 - Removes the argument parenthesis 

a => a + 100

// Named functions 

// Traditional Function
function bob(a) {
    return a + 100;
}

// Arrow Function
let bob = a => a + 100;

// Advanced Syntax
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30