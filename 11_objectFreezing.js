//if we make object as constant ----we can not change their content. we can update .
//constant object means it can not point to other object
//freeze object means we can not change ,can not update, can not delete the properties



const person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}

Object.freeze(person); // Freeze an object

person.age = 67; // Update not allowed as person object is freezed
delete person.city; // // Delete not allowed as person object is freezed
person.pin = 4445566; // Add not allowed as person object is freezed

console.table(person);

console.log("=========== Freezing an array =================");

const array = [22, 33, 44, 55, 77];
Object.freeze(array);
array[2] = 100;
console.table(array);


