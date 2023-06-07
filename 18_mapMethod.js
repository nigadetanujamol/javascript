

const array = [2, 3, 5,  6,  7,  9 ];
// const arrayTransformed = [4, 9, 25, 36, 49, 81 ];
const arrayTransformed= [];
array.forEach( (element)=> {
    arrayTransformed.push(element*element);     //using push
});
console.log(arrayTransformed);
/************************ or ***********************/
console.log("======== using map()  ========");
const arrayTrans = array.map( (element) => {
    return element*element;
} );
console.log(arrayTrans);
/***************************************************************/

//how to use map  on class
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

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

// Get the list of employee names

console.log("======== Get the list of employee names using for each ========");

const empNames = [];
array_employees.forEach( (employee)=> {
       empNames.push(employee.emp_name);

 }  );
 console.log(empNames);

/******************************************************************/
console.log(` by using map method`);
//what map method do?  ---->map is intrnally created one array are selecting elements on condition and push 

const empNames1 = array_employees.map( (employee)=> {

    return employee.emp_name;

} );

console.log(empNames1);