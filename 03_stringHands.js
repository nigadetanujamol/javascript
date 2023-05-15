
//Assign by using string Template

function stringHandsOn(){
    console.log(` Hey you are doing good, keep it up`);    
}
stringHandsOn();
 
/***************calculate length of string*************************/

var str = "     Hey you are doing good, keep it up     ";   
var totalLengthOfString = str.length;
console.log(` 2. Total length of string is ${totalLengthOfString}`);

/****************Removing extra spaces and print length************************** */

var a = str.trim();
console.log(` 3. After Removing extra spaces the string is ${a} `);
console.log(` After removing spaces total length is  ${ a.length}`);

/***************total no of extra spaces count*****************************/
 
console.log(` 4. No of extra spaces removed ${ totalLengthOfString - a.length}`);

/**************first and last char after trim********************/

var firstChar = a.charAt(0);
var lastChar = a.charAt(a.length - 1);
console.log(` 5. First and Last character of string after trim is ${firstChar}  and ${lastChar} resp`);

/***************Total words********************** */

var totalWords = a.split(" ");
console.log(` 6. Total no of words are ${totalWords.length}`);

/*******************index of Good ********************/

var indexOfG = a.search("good");
console.log(` 7. Index of good is ${indexOfG}`);

/*********************substring starting from index 22******** */

var subStringResult = a.substring(22);
console.log(` 8. Substring starts from index 22 is ${subStringResult}`);

// by using slice()
var subStringResult = a.slice(22);
console.log(` 8. Slice starts from index 22 is ${subStringResult}`);

/*****************is string ends with "up" ************/

var endsWithUp = a.endsWith("up");
console.log(` 9. is string ends with "up" ${endsWithUp}`);

/*****************is string starts with "Hey" ***********/

var startWithHey = a.startsWith("Hey");
console.log(` 10. Is string start with "Hey" ${startWithHey}`);

console.log(`Length of string is 45`);