
function stringBasics(){
    console.log("My dream company is: ADP" );
}
stringBasics();

/***************************************** */
var hobbyOne = "Drawing";
var hobbyTwo = "coding";
var hobbyThree = "trecking";
console.log("My hobbies are : ",hobbyOne ,hobbyTwo ,hobbyThree);

var totalCharOne = hobbyOne.length;
var totalCharTwo = hobbyTwo.length;
var totalCharThree = hobbyThree.length;
console.log("Total no of characters in hobbies are: ",totalCharOne + totalCharTwo + totalCharThree);

/************************************************ */
console.log("******************************************************");
console.log("Assignment 2");

function stringHandsOn(){
    console.log("Hey you are doing good, keep it up");    
}
stringHandsOn();
 
/***********************************************/

var str = "     Hey you are doing good, keep it up     ";
var totalLengthOfString = str.length;
console.log(" Total length of string is: " , totalLengthOfString);

/****************************************** */

var a = str.trim();
console.log(" After Removing extra spaces the string is: ", a);
console.log(" After removing total length is: ", a.length);

/********************************************/
 
console.log(" No of extra spaces removing: ", totalLengthOfString - a.length);

/**********************************/

var firstChar = a.charAt(0);
var lastChar = a.charAt(a.length - 1);
console.log("First and Last character of string is " , firstChar,"and", lastChar ,"resp");


