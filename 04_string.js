
//string = string is sequence of characters.
//index is always start from zero. In string 0th positionis index.
//what is position of last character of any string -- total no of characters -1.

var firstName = "Tanuj a";
var total = firstName.length;            //here length is property.so use paranthesis.
                                        //.length is used for count the total no of characters. 
console.log("total no of characters in given string = " ,total);

              
var greet = "Good Morning";
var greetLength = greet.length;
console.log("Total number of character in given string is: ", greetLength);
//*********************************************************** */

var charAtZeroIndex = greet.charAt(0);        //here we have to find which char is 0th index
                                              //charAt is method so use ()
console.log("Char at 0 index: ",charAtZeroIndex);

 /************************************************************ */

var charAtLastIndex = greet.charAt(greet.length-1);  //total length - 1
console.log("Char at last index: ",charAtLastIndex);
 

var charAtIndexTwenty= greet.charAt(20);
console.log("Char at index 20 is:", charAtIndexTwenty);
 

var firstName = "Gajanan";
var lastName = " Kharat"; 

var concatString = firstName.concat(lastName);
console.log("Concat String is: ", concatString);
 

var indexOfM = greet.indexOf("M")
console.log("Index of M is: ", indexOfM);

 
var indexOfo = greet.lastIndexOf("o");
console.log("Index of o is: ", indexOfo);

 
var replaceValue = greet.replace("Morning", "Afternoon");
console.log("After replace: ", replaceValue);

 
var firstName = "     Gajanan      ";
var firstNameLength = firstName.length;
console.log("Before trim length is: ", firstNameLength );


var trimmedFirstName = firstName.trim();

var lengthAfterTrim = trimmedFirstName.length;
console.log("After Trim firstName is: ",trimmedFirstName, trimmedFirstName.length );

console.log("Trimmed total spaces : ", firstNameLength-lengthAfterTrim);

 
var lastName = "        Kharat   ";
 var trimmedLastName = lastName.trimEnd();

console.log(" afer trimmed last name is = " , trimmedLastName);

