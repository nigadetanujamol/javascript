/*  hoisting -----> we can access the variables even before declaration
the variable using var keyword are always hoisted.
but using let keyword are never hoisted.*/ 


console.log(myName); // We can access it is bcz hoisting
var myName= "GK";

// console.log(city);
// let city = "Pune";

// console.log(pin);
const pin = "431202";


show(); // Normal function or named function are hoisted that's why we are abale to call or invoke it even before it's declaration
function show(){
    console.log("show function");
}


display(); // FE never hoisted
var display = function() {
    console.log("inside FE");
}

