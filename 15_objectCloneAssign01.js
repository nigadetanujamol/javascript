

const arrayNums = [20 ,3 ,4 ,56 ,90 , 400 ,49];
console.log(`Given array is =  [${arrayNums}]`);


console.log(`1. ****************perform shallow clone and push()***********************`)

const cloneArray =arrayNums;

//update clonned array with values 55, 66 using push()
cloneArray.push(55 ,66);
console.log(`original array==> ${arrayNums}`);
console.log(`clonned array = [${cloneArray}]`);


console.log(`2. *************** Performing deep clone using spread operator************`);
const cloneArr = [...arrayNums];
cloneArr.push(10 ,25);
console.log(`original array==> ${arrayNums}`);
console.log(`clonned array==> ${cloneArr}`);


console.log(`**************************************************************`);
const arrayEven =[2 , 30 , 14 ,8];
const mergeArray =[...arrayEven ,...arrayNums];  //concat using spread operator
console.log(`3.  After merge the array is===> [${mergeArray}]`);
console.log(``);  

console.log(`4.******************* create employee info object*************`);

const employee_Info ={
    emp_id :27,
    emp_name :"John Deo",
    salary:{
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        june_month:"65,0000INR"
    },
    address:{
        locality:{
            colony: "Om Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city:"Mumbai",
        state:"Maharashtra",
        country:"India",
    },
    mobiles:["+91 8600 3456 88" ,"1800 -4567 32" , "+91- 9096 5678 77"]
}
console.log(`5. Employee Details`);
console.log(`Address of employee:${employee_Info.address.locality.colony} ,${employee_Info.address.locality.street} , ${employee_Info.address.city} ,${employee_Info.address.state} ,${employee_Info.address.country}`);
console.log(`Mobile no is: [${employee_Info.mobiles}]`);

console.log(`6. ******************perform deep copy using JSON.stringfy()*****************************`);

const deepCloneEmp = JSON.parse(JSON.stringify(employee_Info));  //make deep clone

deepCloneEmp.salary.july_month ="80,0000INR";  //updated salary on cloned object

console.log(`Original salary is: ${employee_Info.salary.july_month}`);
console.log(`Updated salary is: ${deepCloneEmp.salary.july_month}`);

console.log(`************************************************`);

console.log(`country before update is: ${employee_Info.address.country}`);

employee_Info.address.country ="United Kingdom";     //updated country on original object
console.log(`country after update is: ${employee_Info.address.country}`);


