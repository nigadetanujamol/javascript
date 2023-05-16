

function squareOfWordLength(name) {
    var a = name.length;
    console.log(`In ${name} the Length 0f word is: ${a}`);
    var square = a*a;
    console.log(`Square of  ${a} is :${square}`);
 }
 squareOfWordLength("JavaScript");
 squareOfWordLength("Google Chrome");
 squareOfWordLength("Developer Smart");
 console.log(`**********************************************`);

 
 function lion() {
    var str ="I am Angular Developer";
    console.log(`length of string is: ${str.length}`);
    
    //divide the string by words
    
    console.log(`After split the no of words in given string is: ${str.split(" ")} `);
    
 }
 lion();

 console.log(`******************************************`);
 
 var str ="I am Angular Developer";
 var a = str.length;
 var b = str.split(" ");
 var c = b.length;
 var res = a/c;
 var result = a*c;
 console.log(`string length divide by total words are ${res}`);
 console.log(`string length multiply by total words are ${result}`);
