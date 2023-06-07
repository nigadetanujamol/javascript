//map method

const array = [20 ,11 ,40 , 25, 23 , 11, 9 ,31, 60, 2 ,19 ];
console.log(`Given array is: ${array}`);
console.log(`add 10 into each ele and log new array`);
 
const arrayTransform = array.map((element) =>{
    return element +10;
});
console.log(arrayTransform);

console.log(`**************************************************`);
console.log(`square of each array`);
 
const arrayTrans = array.map((element) =>{
    return element * element;
});
console.log(arrayTrans);

console.log(`**************************************************`);
console.log(`add index value into each element of array`);
const arraySum = array.map((element , index) =>{
    return element + index;
})
console.log(arraySum);