// Recursion - Factorial

// Nested functions 

function addSquares(x, y) {
    function square(x) {
        return x * x;
    }

    return square(x) + square(y)
}

const a = addSquares(5, 4)


