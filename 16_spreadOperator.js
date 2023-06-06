

`use strict`
const array = [11, 22, 33, 44, 55, 66];
console.log(array);
console.log(...array);

const array2 = [...array];

//object
const person = {
    name: "Stew",
    age: 57,
    country: "US"
}

const person2 = {...person};
console.log(person2);
/************************************************/

//rest parameter---->i.e remaining parameter
//rest para are always written at last .

function show(adharNum, role, ...parameters) {
    console.log(adharNum, role, parameters);
  }
  show(11223344, "CEO", 23, "Elon", "US");

//function with default parameter.
  function division(num1, num2=1){ 
    if(num2==0){
        num2=1;
    } 
    console.log(num1/num2);
}
division(10, 5);
division(67, 0);
division(7);  //here we are not given the value of num2 so it becomes  1 as we set it default.

console.log(`============ Object Destructuring =============`);//we use object destructuring in order to extract the values.
const student = {
    name: "Stew",
    age: 57,
    country: "US",
    pin: 223312,
    rollNo: 111,
    college: "COEP Pune",
    marks: "90%",
    degree: "BE CSE"
}
// const rollNo = student.rollNo;
// const name = student.name;
// const college = student.college;
// const degree = student.degree;
// const country = student.country;
 
//instead of these 5 lines we use Object distructuring
  
const {rollNo,name, college, degree, country } = student;   //object distructuring

const { pin, age, isMarried=false } = student;  // const pin = student.pin;
console.log(pin, age, isMarried);

const arr = [11, 22, 33];
const [element1, element2, num1, num2=0] = arr;
console.log(element1, element2, num1, num2);