/* let -Let is one keyword. this variable is introducedn in ECMA6.
It does not allowed variable re-declaration
we can update but not re-declre variable.
means eg let a="Tanuja";
         let a="Nigade"    its not allowed. instead of that we have to write only a="Nigade".   

const -onces we can declre and initialize the value then we can not change its value.
       we can not update const
       eg. const pi=3.14

var------> having function scope
let and const ------>having block scope */

var name ="Tanuja";
var name ="Nigade";         //re-declaration allowed 
name = "Tanuja A Nigade"  //update  

console.log(`${name}`);

let college ="MIT";
college ="CEOP";      //redeclaration not allowed.

