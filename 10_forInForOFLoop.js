
/*slice ----->we can retrive the Element. we only take the peice of element not removing.Element
splice -----> we removing the elements from array

we can store duplicate elements in array.Elementwe can store string ,number,boolean,object, null ,undefined*/

//To traverse the array we use "for in" and "for of" loop instead of for loop
//if we want index then can not use "for of" loop instead of that we have to use "for in" loop.
//if we want only elements then use "for of" loop

var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];

console.log(`--------------for in loop--------------`);
for (const index in arrayNames) {
    console.log(arrayNames[index]);
    }

console.log(`---------------for of loop--------------`);
for (const elements of arrayNames) {
    console.log(elements);
    
}


console.log(`==== Traversing array =====`);

var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
for (let index = 0; index < arrayNames.length; index++) {
    const element = arrayNames[index];
    console.log(element);
}

console.log(`------- WAP to get even indexed element ------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
// WAP to get even indexed element
for (const index in arrayNames) {
   if (index%2==0) {
    console.log(`${arrayNames[index]}`);
   }
}

console.log(`---------------- join() --------------------`);
let names = arrayNames.join(", ");
console.log(names);

const arrayBoys = ["Anil", "Ram" ,"Sunil"];
let arrayGirls = ["Siya", "Jenny"]

let combineArray =  arrayBoys + arrayGirls;
console.log(combineArray);

let concatArray =  arrayBoys.concat(arrayGirls);
console.log(concatArray);

console.log(`----------------- Resize an array ---------------------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
arrayNames.length = 3;
console.log(arrayNames);

