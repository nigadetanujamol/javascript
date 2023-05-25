
const arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11];
console.log(`given array is: `);
console.log(arrayNumbers);
 //length
 let lengthOfArray = arrayNumbers.length;
 console.log(`length of array is: ${lengthOfArray}`);

 //log first and last elements
 let firstElement =arrayNumbers[0];
 console.log(`First element of array is: ${firstElement}`);
 let lastElement = arrayNumbers[arrayNumbers.length-1];
 console.log(`Last element of array is : ${lastElement}`);

 //third last using length
 let thirdLast =arrayNumbers[arrayNumbers.length -3]
 console.log(`Third last element of array is : ${thirdLast}`);

 //find all even no using "for in" loop
 for (const evenElements in arrayNumbers) {
           if (arrayNumbers[evenElements] %2 ==0){
            console.log(`even no is : ${arrayNumbers[evenElements]}`);
           }
    }

console.log(`----------------------------------------------`);
 //odd no using "for in loop
    for (const oddElements in arrayNumbers) {
       if (arrayNumbers[oddElements] %2!= 0){
        console.log(`odd no is : ${arrayNumbers[oddElements]}`);
       }
}

console.log(`----------------------------------------------`);

//all even position elements.and sum it
var sum=0;
for (const evenElements in arrayNumbers) {
       if ([evenElements] %2 ==0){     //value compared  with index  if we put arrayNumber then index nos compared
        console.log(`even no is : ${arrayNumbers[evenElements]}`);
         sum = sum + arrayNumbers[evenElements];
       }
}
console.log(`sum of even positioned no is: ${sum}`);

console.log(`--------------------------------------------------`);

//all odd position elements.and sum it
var sum1=0;
for (const oddElements in arrayNumbers) {
       if (oddElements %2 !=0){     // value compared with index if we put arrayNumber then index nos compared
        console.log(`odd no is : ${arrayNumbers[oddElements]}`);
         sum1 = sum1 + arrayNumbers[oddElements];
       }
}
console.log(`sum of odd positioned no is: ${sum1}`);

console.log(`--------------------------------------------------`);

//sum of all arrayNumbers
var sum=0;
for (const element in arrayNumbers) {
       sum = sum + arrayNumbers[element];               
       }
console.log(`sum of all elements: ${sum}`);

console.log(`--------------------------------------------------`);

//no multiple of 5
console.log(`given array is: ${arrayNumbers}`);
for (const element in arrayNumbers){
       if(arrayNumbers[element] %5 ==0 || arrayNumbers[element]% 5 ==5){
              console.log(`divisible by 5: ${arrayNumbers[element]}`);
       }
}
console.log(`--------------------------------------------------`);

//is 115 available
let a =arrayNumbers.includes(115);
console.log(`115 is available in array: ${a}`);

console.log(`--------------------------------------------------`);

//is 23 available
let b =arrayNumbers.includes(23);
console.log(`23 is available in array: ${b}`);

console.log(`--------------------------------------------------`);

//insert 55,66,before index 3
        arrayNumbers.splice(3, 0, 55, 66);
console.log(`After adding 55,66 : `);
console.log(arrayNumbers);
console.log(`--------------------------------------------------`);
 
//delete 3 ele starting from index 4
        arrayNumbers.splice(4 , 3);
console.log(`After deleting 3 ele start from index 4 :`);
console.log(arrayNumbers);