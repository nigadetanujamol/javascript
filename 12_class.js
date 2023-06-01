/*class------>class is blue print of an Object.
class name should be start from capital letter
constructor------>constructor is a special method which is called automatically to initialize the object
new------->new is keyword .which is help us to create new object
feactures of ECMA6--->let const var, string templete ,class*/


class Student {
    constructor(name, age, gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    //method
    showDetails(){
        console.log(`Details is ${this.name}, ${this.age}, ${this.gender}, ${this.city} `);
    }
}
const abhijeet = new Student("Abhijeeet", 21, "Male", "Pune");
const poonam = new Student("Poonam", 20, "Female", "Mumbai" );
const rushi = new Student("Rushikesh", 23, "Male", "Indor");
const snehal = new Student("Snehal", 22, "Male", "Pune");

const array = [abhijeet, poonam, rushi, snehal];

//we traverse the array.
for (const student of array) {
    student.showDetails();
}

//it gives us true if abhijeet object present in Student class.
const result = abhijeet instanceof Student;
console.log(result);


class College{

}
//rushi is not present in the college so it return false.
const res = rushi instanceof College;
console.log(res);

// const arrayNum = [34, 67, 89, 100];
// const value = arrayNum[0]

abhijeet.showDetails(); 
// snehal.showDetails();
// rushi.showDetails();

