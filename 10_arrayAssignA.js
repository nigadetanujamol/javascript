
const arrayFruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

//print first element
let firstElement = arrayFruits[0];
console.log(`First element of Array is: ${firstElement}`);

//Print last element
let lastElement = arrayFruits[arrayFruits.length-1];
console.log(`Last element of Array is: ${lastElement}`);

//add papaya before "banana"
arrayFruits.unshift("Papaya");
console.log(`After adding papaya`);
console.log(arrayFruits);

//remove mango // it will print on last result i.e after adding papaya
arrayFruits.splice( 4,1);
console.log(`After removing mango`);
console.log(arrayFruits);

//add pineapple in last position
arrayFruits.push("Pineapple");
console.log(`After adding pineapple in last position`);
console.log(arrayFruits);

//add dragon fruit before water melon
arrayFruits.splice(4 ,0,"Dragon Fruit");
console.log(`After adding dragon fruit before water melon`);
console.log(arrayFruits);

//replace orange with kiwi
arrayFruits.splice(2, 1,"Kiwi");
console.log(`After replace orange with kiwi`);
console.log(arrayFruits);

//log elements index 1--4   
let ele = arrayFruits.slice(1,5);   //It will print from index 1 to before index 5
console.log(`Print index 1 to 4`);
console.log(ele);

//only select last 3 elements using length property
let lastThree = arrayFruits.slice([arrayFruits.length-3]);
console.log(lastThree);







