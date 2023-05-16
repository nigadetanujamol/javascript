//use ternary op and create Function expression

//FE with two arg and no return value 
//find greater no.

var greaterNumber = function(num1 ,num2) {
      console.log(`Given no are ${num1} and ${num2}`);

      var c = num1 >= num2 ? `${num1} is greater` :  `${num2} is greater`;
      console.log(`${c}`);
}
greaterNumber(10 ,-10);
greaterNumber(800 , 899);

console.log(`*********************************************`);

var isEvenOrOddNum = function(num){
      var result = num%2 ==0 ? true : false;
      return result;
}
 var result = isEvenOrOddNum(29);
 var res = (result == true)? "29 is even" : "29 is odd";
 console.log(`${res}`);

var result = isEvenOrOddNum(44);
var res = (result == true) ? "44 is even" : "44 is odd";
console.log(`${res}`);

var result = isEvenOrOddNum(0);
var res = (result == true) ? "0 is even" : "0 is odd";
console.log(`${res}`);

var result = isEvenOrOddNum(101);
var res = (result == true) ? "101 is even" : "101 is odd";
console.log(`${res}`);
console.log(`**********************************************`);

var wordLength = function(str){
      var a =str.length;
      var result = a%2 ==0 ? "EVEN" : "ODD";
      return result; 
}
 var result = wordLength("Javascript");
 console.log(`"javascript" have ${result} length`);

 var result = wordLength("Developer");
 console.log(`"Develor" have ${result} length`);

 var result = wordLength("Google");
 console.log(`"Google" have ${result} length`);

