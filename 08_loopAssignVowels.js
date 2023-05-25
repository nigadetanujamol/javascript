
//count total no of vowels

var str = "I am very good IT Developer";
var count=0
for(let index=0 ; index<str.length ; index++){
  var data = str.charAt(index);
  
  if(data =="a"|| data =="e" || data=="i" ||data=="o" || data=="u" || data =="A"|| data =="E" || data=="I" ||data=="O" || data=="U"){
        
        console.log(`The given string is : ${str}`);
   count++;
  }
  //var up = str.toUpperCase();
  //console.log(`${up}`);
}
console.log(`Total no of vowels are : ${count}`);
console.log(`********************************************************`)

//function to get sum of cube of no 1 ---- 5

function cubeOfNum(num) {
  var sum =0;

     for (let index = 1; index <=num; index++) {      
      var cube = index *index *index;
      sum=sum + cube;

      console.log(`cube of ${index} is : ${cube}`);
      
     } 
     console.log(`sum of cube is : ${sum}`);

}
cubeOfNum(5);

console.log(`**********************************************************`);

//odd position char. do not consider empty spaces.

        function oddPositionedChars(str) {
          var emptyString ="";
          for(let index= 0; index<str.length ; index++){
             var a = str.charAt(index);     //this step take index char one by one               
             
            if (index %2!=0 &&  a!=" ") {    //If we want even positions the (index %2==0).and (a!=" ") means blank speces are not consider
             emptyString = emptyString + a;
            }
   }
   console.log(`The given string is: ${str}`);
   console.log(`odd position characters are : [${emptyString}]`);
 
}
oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be Angular IT Champ");


