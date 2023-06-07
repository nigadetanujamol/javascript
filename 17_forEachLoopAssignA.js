//Assign using for each loop

const arrayNums = [1 ,-7 , 40 ,502 , -77 ,91 , 0 , 108 ,89 ,-601];

console.log(`log array elements with index and values`);
arrayNums.forEach((element ,index) => {
    console.log(`element--${element},  index value--${index}`);
});
console.log(`**************************************************`);


console.log(`find positive nos from array`);
arrayNums.forEach((element) =>{
    if(element>0){
        console.log(element);
    }
});
console.log(`**************************************************`);


console.log(`find negative nos and add it into new array`);
const newArray =[];
arrayNums.forEach((element)=>{
      if(element<0){
        newArray.push(element);
      }

});
console.log(newArray);

console.log(`**************************************************`);


console.log(`find the even nos`);
arrayNums.forEach((element) =>{
    if(element%2==0){
        console.log(element);
    }
});
console.log(`**************************************************`);

console.log(`sum of all elements from array`);
let sum=0;
arrayNums.forEach((element) => {
    sum = element + sum;
    
});
console.log(sum);

console.log(`**************************************************`);

console.log(`log only even indexed array values`);
arrayNums.forEach((element , index) => {
       if(index % 2==0 ){
        console.log(element);
       }
})