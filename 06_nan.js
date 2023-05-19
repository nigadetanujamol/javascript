/* What is nan?
Nan means not a number.
when we perform the invalid operation then we get result is nan.
the typeof nan is number. eg when we declare one variable not assign any value .and after that we perform operation like
addition subctraction means result is undefined +1 at that time result is nan.*/


var num1; // here we declre var but not assign any value so result is undefined.
num1 = num1++; // undefined + 1 ==> NaN

console.log(`${num1}, type of NaN is ${typeof num1}`);

//***********************************/

console.log(`${0/0}`);  //result is nan
/*************************************/
var numTwo = "200";

numTwo = numTwo++; // 200 + 1

console.log(`${numTwo}`);

 

var num3 = "Ten";// "10" ==> 10

num3 = --num3; 

console.log(`${num3}`);

 

var city = "Pune";

var result = +city;

console.log(`${result}`);

 

var num5 = "100";

var result = +num5;

console.log(`Result is ${result} and it's type is: ${typeof result}`);