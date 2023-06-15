

const array = [10, 5 ,"a","b" ,"h" ,11];
console.log(`Given array is : [${array}]`);
const arrayAlpha =[];
const arrayNum =[];

const num=1;
array.forEach((elements)=>{

   if(typeof elements===typeof num){
    arrayNum.push(elements)
   }
   else{
    arrayAlpha.push(elements);
   }
});
//console.log(arrayNum);
//console.log(arrayAlpha);

//sorting for numbers
 arrayNum.sort ((n1, n2) =>{
    return n1 > n2 ? 1 : -1;

 });
 console.log(arrayNum);
 
 //sorting for alphabets
 arrayAlpha.sort();
 console.log(arrayAlpha);

