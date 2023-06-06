
//create employee class
class Employee{
    constructor(id ,name ,dept ,salary ,company){
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.salary = salary;
        this.company =company;

    }
}
//we create object
const anil = new Employee(22, "Anil" ,"IT" ,50000 ,"TCS");
const radha = new Employee(33 ,"Radha" , "HR" ,74000 ,"Wipro");
const rishi = new Employee(55 ,"Rishi" ,"Finance" ,47000 , "TCS");
const sonali = new Employee(66 ,"Sonali" , "Finance", 45000 , "Infy");
const monika = new Employee(77 , "monika", "IT" ,40000 ,"Wipro");
const viny = new Employee(88 ,"Vinayak" ,"IT" ,75000 ,"TCS");
const mahi =new Employee(99, "Mahesh" ,"HR" ,85000 ,"Infy");

//add all object in array

const arrayEmpl =[anil ,radha ,rishi ,sonali ,monika ,viny ,mahi];

console.log(`find all emp in  tcs and log their name and company`);
      for (const details of arrayEmpl) {

          if(details.company=="TCS"){
        console.log(`${details.name} is working in ${details.company}`);
    }
}
console.log(`**************************************************`);
 console.log(`find finance dept and log their dept and name`);
        for (const details of arrayEmpl) {

             if(details.dept =="Finance"){
        console.log(`${details.name} is working in ${details.dept}`);
    }
 }
 console.log(`**************************************************`);
console.log(`find emp whose name start with "R" and log complete details`);
    for (const details of arrayEmpl) {
         if(details.name.startsWith("R")){
            console.log(`${details.id} ,${details.name} ,${details.dept} ,${details.salary} ,${details.company}`);
         }
}
console.log(`**************************************************`);
console.log(`Find emp whose sal greater than 75000 and log name company, salary`);
       for (const details of arrayEmpl) {
        if(details.salary>75000){
            console.log(`${details.name} , ${details.company} ,${details.salary}`);
        }
       }
console.log(`**************************************************`);
console.log(`find emp whose sal greater than equal to 50000 and "IT" dept log complete details`);

for (const details of arrayEmpl) {
    if(details.salary>=50000 && details.dept=="IT"){
        console.log(`${details.id} ,${details.name} ,${details.dept} ,${details.salary} ,${details.company}`);
    }
}
console.log(`**************************************************`);
console.log(`find all emp from "infy" log all details`);

for (const details of arrayEmpl) {
    if(details.company=="Infy"){
        console.log(`${details.id} ,${details.name} ,${details.dept} ,${details.salary} ,${details.company}`);
    }
}