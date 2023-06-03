
class Vehicle{
    constructor(name , color , company , mileage , type){
    this.name =name;
    this.color =color;
    this.company =company;
    this.mileage =mileage;
    this.type =type
    }
    /*method   for get the details of array
    showDetails(){
        console.log(`Details is: ${this.name} ,${this.color} ,${ this.company} , ${this.mileage} ,${this.type}`);
    }*/

}
//create object from class Vehicle
const audi = new Vehicle("audi" ,"red" ,"Hyundai" ,10 ,"petrol");
const creta =new Vehicle("creta" ,"white" ,"Honda" ,9 ,"Disel");
const kia = new Vehicle("Kia" , "Grey" ,"Maruti Suzuki" , 10 ,"gas");
const baleno =new Vehicle("baleno" ,"blue" , "Honda" ,9 ,"petrol");
const aura =new Vehicle("aura" ,"white" , "hyundai" ,11 ,"disel");

//add into array and log details
    const arrayOfVehicles =[audi ,creta ,kia ,baleno ,aura];

    for (const details of arrayOfVehicles) {  //here details means properties of object 
        //vehicle.showDetails();
        console.log(`Details are ${details.name} ,${details.color} ,${details.company} ,${details.mileage} ,${details.type} `);


    }
console.log(`******************************************************`);

    //define class College
    class College {
        constructor(collegeName , location , phone ,department){
            this.collegeName =collegeName;
            this.location =location;
            this.phone =phone;
            this.department =department;
        }
                
    }

    //object
    const mit = new College("mit" ,"alandi" , 1234567890 ,"MCS");
    const symbosis =new College("symbosis" , "pune" , 4325678321 ,"Engeneering") ;
    const coep =new College("coep" , "pune" ,5678345219 ,"Diploma");
    const dyPatil = new College("dyPatil" ,"bhosari" ,8912674532 ,"Medical");

    //function with one argument and traverse using for in loop and call function

    function traverseObject(collegeObject) {
        for (const key in collegeObject) {
           // if (Object.hasOwnProperty.call(collegeObject, key)) {
               const element = collegeObject[key];
                console.log(`${key} = ${element}`);
            }
        }
        
    //}
  // call function
  
    traverseObject(mit);
    console.log(`******************************************************`);
    traverseObject(symbosis);
    console.log(`******************************************************`);
    traverseObject(coep);
    console.log(`******************************************************`);
    traverseObject(dyPatil);

