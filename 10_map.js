
//map having keys and values 
let map = new Map();

//type of map is object
console.log(typeof map);

 
// Key : Roll Number , Value : Student Name
map.set(11, "Ram");
map.set(22, "Shyam");
map.set(33, "Siya");
map.set(44, "Jenny");

const mapSize = map.size;

console.log(`Map size :${mapSize}`);

 
// Retrieve the value using key

const valueOfKey22 = map.get(22);

console.log(` Value of Key 22 is ${valueOfKey22}`);

 
// Retrieve the value using key but that key doesn't exists

const valueOfKey99 = map.get(99);

console.log(` Value of Key 99 is ${valueOfKey99}`);

 
// Adding duplicate key
//if we add the duplicate key then it will update or override that value.

map.set(33, "Billgates");

 
// Adding duplicate value

map.set(55, "Jenny")

 

// Delete entry

map.delete(22);

 

// Key is exists or not

const isAvailable = map.has(44);

console.log(`Iss 44 key Available: ${isAvailable}`);

 
//to get only keys
const keys = map.keys();

console.log(keys);

 
//to get values
const values = map.values();

console.log(values);

 
//travrsing map we use "for of" loop 
console.log("Traversing map");

const keysOfMap = map.keys();

for (const key of keysOfMap) { // 11

    const value = map.get(key);
    console.log(`${key} ${value}`);

}

 console.log(map);

 //keys and value in the form of table
console.table(map);