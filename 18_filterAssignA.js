
//filter method
const array = [20 ,11 ,40 , 25, 37 , 49, 9 ,90, 60, 2 ,19 ];
console.log(`Given array is: ${array}`);

console.log(`find all nos which are greater than 50`);
const arrayGreater = array.filter((element)=>{
    return element>50;
});
console.log(arrayGreater);

console.log(`**************find all even no *****************`);

const arrayEven = array.filter((element)=>{
    return element%2==0;
});
console.log(arrayEven);

console.log(`**************find all odd no *****************`);

const arrayOdd = array.filter((element)=>{
    return element %2!= 0;
});
console.log(arrayOdd);

console.log(`**************find all no which are multiple of 5 *****************`);

const arrayMulti = array.filter((element)=>{
    return element %5 ==0 || element %5 ==5;
});
console.log(arrayMulti);

console.log(`**************find all no which are between 20 to 50*****************`);

const arrayBetween =array.filter((element) =>{
    return element>20 && element<50;
})
console.log(arrayBetween);



