
//Funct Expression for square of no

var square = function (one){
    var multi = one*one;
    return `square is :${multi}`;
   
}
var result =square(5);
console.log(`1. Square of 5 is ${result}`);

var result =square(6);
console.log(`Square of 6 is ${result}`);

var result =square(25);
console.log(`Square of 25 is ${result}`);

var result =square(100);
console.log(`Square of 100 is ${result}`);

/******************** check typeof function*****************/

console.log(`2. Type of function is : ${typeof square}`);

/*********************funct expression to area of rect ***********/

var rectangle = function(len , bre){
    var result = len*bre;
    return `3. Area of rectangle is: ${result}`;
}
    var result = rectangle(499 , 917);
    console.log(result);

/******************FE for swapping with arguments with value***************/

var swapValues = function(a , b){
       console.log(`Before swap the values are : ${a} , ${b}`);
         var temp = a;
         a = b;
         b = temp;
         console.log(`After swapping: ${a} , ${b}`);         
}
var result = swapValues(" virat" , "Anushka");
var result = swapValues(1000 , 2000);

/**********************FE Function*************/
var givenStr = function(){
     var label = `Js the most popular language of internet`;
     console.log(`A : Total no of characters in Given string ${label.length}`);
     console.log(`B : character at index 6 is ${label.charAt(6)}`);
     console.log(`C : character at index 11 is ${label.charAt(11)}`);
     console.log(`D : Last Character ${label.charAt(label.length - 1)}`);
     console.log(`E : First Chracter ${label.charAt(0)}`);

     var totalWords = label.split(" ");
     var res = totalWords.length;
     console.log(`F : Total no of words ${res}`); 

         var square = res*res;
     console.log(`Square of total no of words in given string is: ${square}`);
}
var result = givenStr();

