// Passing a primitive value 

function introduce(name) {
    name = name.toUpperCase()
    console.log(`Hy, my name is ${name}`)
}

const me = "Gyasmin";


// Passing a non-primitive value 

function myFunc(theObject) {
    theObject.make = 'Toyota';
}

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"

