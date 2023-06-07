console.log(`Callback using named Function `);
// Avinash --
function assignment(callbackFun){
    console.log("Start: Assignments solving");
    console.log("Took 3 hours");
    console.log("Complete : Assignments solving ");
    callbackFun();
}
// Mangesh
function copyAssignment(){
    console.log(`Start copying`);
    console.log(`Took 15 mins to copy`);
    console.log(`Complete assignments`);
}

assignment(copyAssignment);

// call back means passing one fun as a argument to another function
//here we pass function (copyHomeWork)as a arg---> to another fun (doHomeWork) in line no 35

console.log(`Callback using Function Expression`);
// Avinash --
let doHomeWork = function(callback){          // here callBack is arg. now function (copyHomeWork) stored 
    console.log("Start: Assignments solving");
    console.log("Took 3 hours");
    console.log("Complete : Assignments solving ");

    callback();  //here function (copyHomeWork) is call.If we are not calling this callback. then the data of copyHomework is not log. 
}
// Mangesh
let copyHomeWork = function(){
    console.log(`Start copying`);
    console.log(`Took 15 mins to copy`);
    console.log(`Complete assignments`);
}
doHomeWork(copyHomeWork);

