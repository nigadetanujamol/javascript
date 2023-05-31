
//how to get all keys of object-------->Object.keys(object name)
//how to get all values of object--------->Object.values(object name)
//how to traverse the array----------->we use for in loop or for of loop
//we use for in loop  to traverse object 
//we use for of loop for collection i.e set map array



let person = {
    height: "6feet",
    name: "Bill gates",
    city: "Pune",
    age: 54,
    isMarried: true
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const entries = Object.entries(person);
console.log(entries);
console.table(entries);

console.log("------------- Entry --------------------");
const entry = entries[1][1];
console.log(entry);
// console.log(entry[0]);

console.log("--------- Traversing an Object -----------");
for (const key in person) { // key = "height"
    if (Object.hasOwnProperty.call(person, key)) {
        const value = person[key];
        console.log(`${key}, ${value}`);
    }
}






