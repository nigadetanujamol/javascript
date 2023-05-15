//we can store one function as a value inside one variable called as funct Expression

var multiplication = function (one, two, three) {
    var result = one*two*three;
    return `Multiplication is: ${result}`;
}

var result = multiplication(2, 2, 2 );
console.log(result);