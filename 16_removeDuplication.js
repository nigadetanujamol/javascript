
//WAP to remove duplicate element.
const arrayNum = [11 ,3 , 4 ,11 , 4, 7 ,3 , 5];
 const setOfNum = new Set();     // remember here  "S" is capital

for (const num of arrayNum) {
     setOfNum.add(num);

}
console.log(`original array is : ${arrayNum}`);
console.log(`After removing duplicate elements:`);
console.log(setOfNum);

//or we use direct like without for of loop

//const setOfNum1 = new Set(arrayNum);
//console.log(setOfNum1);
console.log(`**************************************************`);

//First and Last letter to be in uppercase.
 
const str ="How are you mate";
let newChar ="";
     const arrayWords =str.split(" ");
for (const element of arrayWords) {
     for(let index=0 ; index<element.length ; index++){

          let char="";
          if(index==0 || index==element.length-1){
               char =  element[index].toUpperCase();

          }else{
                char = element[index];
                }
                newChar =newChar + char;
               }
               newChar = newChar + " ";
           }
           console.log(newChar);
          


