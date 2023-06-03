//If you have to create clone of primitive type variabls(like string,boolean,number then we use = assignment operator) 

let age = 21;

let ageStudent = age; // Cloning using = assignment operator ---->shallow clone
ageStudent = 22;

console.log(`age ${age}`);
console.log(`ageStudent ${ageStudent}`);

const student = {      //reference variable
    name: "Mohit",
    age: 21,
    city: "Pune"
}

const studentCopy = student; // = Assignment operator to perform Shallow clone//i.e we make clone of student 

student.name = "Mohit Sharma";

console.table(student);
console.table(studentCopy.name);

console.log(`---------- Spread Operator -----------`);
const studentObj = {
    name: "Mohit",
    age: 21,
    city: "Pune"
}

// ... Spread operator
const clonedObject = {...studentObj};

clonedObject.city = "Mumbai";

console.log(clonedObject.city);// 
console.log(studentObj.city); // 

//for nested object 

let person = {
    fullName: "Virat Kohli",
    age: 54,
    isMarried: true,
    address: {
        street: "Wakad Road",
        country : "India",
        pin : 223344
    }
}

// let clonePerson = person; // Shallow clone
// const deepClonedPerson = {...person} ; // This will not work
const deepClonedPerson = JSON.parse(JSON.stringify(person));

person.address.street = "Hinjewadi Road";

console.log(person.address.street );
console.log("Cloned Object ");
console.log(deepClonedPerson.address.street );