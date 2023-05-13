var myName = "Elon Musk";
var result = myName.startsWith("E");
console.log(` Is ${myName} starts with character E: ${result}`);

var result = myName.startsWith("Elon");
console.log(` Is ${myName} starts with character "Elon" : ${result}`);

var result = myName.startsWith("elon");
console.log(` Is ${myName} starts with character "elon" : ${result}`);


var myName = "Elon Musk";
var result = myName.endsWith("k");
console.log(` Is ${myName} ends with character "k" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("Musk");
console.log(` Is ${myName} ends with character "Musk" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("b");
console.log(` Is ${myName} ends with character "b" : ${result}`);

// function Expression
var multiplication = function (one, two, three) {
    var result = one*two*three;
    return `Multiplication is: ${result}`;
}
var result = multiplication(2, 2, 2 );
console.log(result);