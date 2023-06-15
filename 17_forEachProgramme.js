
//we have to print even index values
const arrayNums = [10, -5, 70, 90, 100, 30, 47, -88,-67 ];

const arrayNegativeNums = [];   //this empty array to store result
arrayNums.forEach( (element, index) => {
    if (index%2==0) {
        console.log(element);
    }
} );
arrayNegativeNums.forEach( element => console.log(element))
console.log(`***************************************************`);

// Length of the word and square it and then sum it all

const array = ["Bill", "Stew Jobs", "Elon Musk", "Mark", "Sundar"];
let result = 0; 
array.forEach( (element) => {
     const wordLength = element.length;  //length of word
     result = result + wordLength * wordLength;   //square it and and into result
} );
console.log(result);
console.log(`**************************************************************`);


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

const array_employees =[emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

// WAP to find the employees from Finance department
array_employees.forEach( (employee)=> {
    if (employee.emp_dept=="Finance") {
        console.log(employee);
    }
}); 

// WAP to get the sum of all salary of Infy employees
let sumSalaryOfInfy = 0;
array_employees.forEach( (employee)=> {
    if (employee.emp_company == "Infy") {
        sumSalaryOfInfy = sumSalaryOfInfy + employee.emp_salary;
    }
});
console.log(sumSalaryOfInfy);

// WAP to find the average salary of an employee 
let sumSalary = 0;
array_employees.forEach( (employee) => {
    sumSalary = sumSalary + employee.emp_salary;
});
let averageSalary = sumSalary / array_employees.length;
console.log(`Average Salary is : ${averageSalary}`);

// WAP to get the average salary of IT Department
const arrayIT = [];
array_employees.forEach( (employee) => {
    if (employee.emp_dept=="IT") {
        arrayIT.push(employee);
    }
});
console.log(arrayIT);
let sum =0;
arrayIT.forEach((emp) =>{
    sum = sum + emp.emp_salary;
});
console.log(sum);
const average =sum/arrayIT.length;
console.log(average);



