//reduce and filter

//using map method
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha =  new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmps =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`***********find all emp name from wipro company**************`);
const arrayEmp = arrayEmps.filter((elements) =>{
    return elements.emp_company=="Wipro";
    
});
//console.log(arrayEmp);  //here we gor result in object

const array_Emploo =arrayEmp.map((elements)=>{
    return elements.emp_name;
});
console.log(array_Emploo);
console.log(``);

console.log(`***********find all emp name from IT or HR dept**************`);
const empName =arrayEmps.filter((elements) =>{
         return elements.emp_dept=="IT" || elements.emp_dept=="HR";
});
const arrayName = empName.map((element) =>{
    return element.emp_name;
})
console.log(arrayName);

console.log(``);


console.log(`***********find all emp name whose emp id are gteater than 50**************`);
const empId =arrayEmps.filter((elements) =>{
    return elements.emp_id >50;
});
const arrayEmpName = empId.map((element) =>{
    return element.emp_name;
})
 console.log(arrayEmpName);

console.log(``);
//console.log(`**********emp whose name start with A , V , M ************`);
 //const a =arrayEmps.filter((elements) =>{
 
 //});

 console.log(`***********average salary of all depart*****************`);
 const a1 =arrayEmps.map((elements) =>{
    return elements.emp_salary;
 });
const a2 = a1.reduce((runningTotal , value) =>{
    return (runningTotal+value) /a1.length;

})
console.log(a1);
console.log(a2);




 console.log(`***********average salary of IT depart*****************`);

 const a =arrayEmps.filter((elements) =>{
    return elements.emp_dept=="IT";
 });

 const b =a.map((elements) =>{
    return elements.emp_salary;
 });

 const c = b.reduce((runningTotal , value) =>{
     return (runningTotal+value) /(a.length);

 })
 console.log(b);
 console.log(c);
