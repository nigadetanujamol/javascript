//use for each loop


//create employee class

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


console.log(`find all emp in  tcs and log their name and company`);
      array_employees.forEach((emp) =>{
        if(emp.emp_company=="TCS"){
            console.log(`${emp.emp_name} is working in ${emp.emp_company}`);
        }
      });
 console.log(`**************************************************`);
 console.log(`find emp with sal greater than =50000 log their all details `);
        array_employees.forEach((emp) =>{
            if(emp.emp_salary>=50000){
                console.log(`${emp.emp_id}, ${emp.emp_name}, ${emp.emp_dept}, ${emp.emp_salary}, ${emp.emp_company}`);
            }
        })

   console.log(`**************************************************`);
  console.log(`find sum of all emp salaries`);
  let sum=0;
  array_employees.forEach((emp) =>{
    sum =sum +emp.emp_salary;
    
  });
  console.log(sum);
  console.log(`**************************************************`);

  console.log(`find average sal and log`);
  let sum1=0;
  array_employees.forEach((emp) =>{
    sum1 =sum1 +emp.emp_salary;    //here we got sum of sal
    
  });  
  const average =sum1 /array_employees.length;
  console.log(average);

  console.log(`**************************************************`);
console.log(`find IT or HR dept whose sal greater than equal to 75000`);

array_employees.forEach((emp) =>{
    if(emp.emp_dept=="IT" && emp.emp_dept =="HR" ||emp.emp_salary>=75000){
        console.log(`${emp.emp_id}, ${emp.emp_name}, ${emp.emp_dept}, ${emp.emp_salary}, ${emp.emp_company}`);
    }

});


     