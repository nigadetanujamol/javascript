
// count character "a or A" in the given string


function countCharA(str) {

    
    let count =0;
    for (let index = 0; index <str.length; index++) {
        let char=str.charAt(index);

        if(char=="a" || char=="A"){
            
            console.log(`The given string is: ${str} `);
            count++;
        }
        
    }
       return count;

}
var result =countCharA("I AM Learning JavaScript The language of Internet");
console.log(`total no of "a" or "A" in the string: ${result}`);
console.log(`***********************************************************`);
var result =countCharA("My favorite movie is LAggAn");
console.log(`total no of "a" or "A" in the string: ${result}`);



