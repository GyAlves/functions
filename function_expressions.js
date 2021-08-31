// Anonymous

const square = function (number) {
    return number * number
}

// Named 
// When the function is named it helps with recursion 

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1)
}

// Function expression as an argument 

const houses = ["Griffindor", "Hufflepuf", "Slytherin", "Ravenclaw"]

function hogwarts_houses(houses, ranking) {
    houses.forEach((house) => {
        ranking(house)
    })
}

const ranking = function (house) {
    if (house === "Slytherin") {
        console.log(`${house} IS THE WINNER !!!`)
    } else {
        console.log(`${house} YOU LOST !!`)
    }
}

hogwarts_houses(houses, ranking)

