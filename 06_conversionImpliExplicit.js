
/*implicit conversoion ----->javascript internally added the value and convert it automatically in one date type to another.
eg. var num1 ="100";  ----> it automaticaly store the value no.100

Explicit conversion ------> conversion of one data type to another as per your need.
eg. city ="pune"  then +city */

console.log(`${ '3' + 2 }`);  //this will give preference to concat. ie ans is 32.

console.log(`${ '3' + undefined }`); 


console.log(`${ '6' - true}`); //their is no preference.

console.log(`${ 7 - false}`); // 7-0 =7 

console.log(`${ false - undefined}`);  //here undefined -operation = Nan
 

console.log("======== explicit conversion ===========");

console.log(`===== Boolean to Number========`);

var num1 = true; // boolean to number ==> by using Number block.

var result = Number(num1);
console.log(`Boolean to number ${result} and it's type ${typeof result}`);

 
console.log(`===== String to Number========`);

var num2 = "30"; // string to number ==> Number 
     //or
var num2 = +30;
var result = Number(num2);

console.log(`String to number ${result} and it's type ${typeof result}`);

 

console.log(`===== Any type to Boolean ========`);

var num3 = 1; // conversion number to boolean // give here anything ----> boolean 
var result =  Boolean(num3);
console.log(`number to boolean ${result} and it's type ${typeof result}`);


var num3 = 0; // conversion number to boolean //if var is 0 then only result is false. 
var result =  Boolean(num3);
console.log(`number to boolean ${result} and it's type ${typeof result}`);

 
var num4 = "Bill gates"; // conversion String to boolean
var result =  Boolean(num4);
console.log(`string to boolean ${result} and it's type ${typeof result}`);

 

console.log(`===== Any type to String ========`);

var num5 = 100; 
var result =  String(num5);
console.log(`number to string ${result} and it's type ${typeof result}`);

 

var num6 = true; //boolean to string 
var result =  String(num6);
console.log(`number to string ${result} and it's type ${typeof result}`);