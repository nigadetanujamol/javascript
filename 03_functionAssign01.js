
//function with no arguments and no return value.
function zoo(){
console.log ("zoo having tiger and lion");
}
zoo();


function hospital(){
    console.log ( "Hospital having dental and pediatric department");
}
hospital();
console.log ("*********************************");

function personalDetails(firstName,lastName,collegeName){
       console.log ("My personal details");
       console.log("My name is: ", firstName, lastName);
       console.log("My college Name is :", collegeName);
}
personalDetails("Tanuja", "Nigade" ,"MIT ACSC Alandi");
console.log ("*********************************");

function swapValuesDude(hero,heroin){
       console.log("Before swap :value1 =", hero , "and value2 =" , heroin);
       temp = hero;
       hero = heroin;
       heroin =temp;
    console.log("After swap : value1 =", hero , "and value2 =" , heroin);
 }
swapValuesDude("virat","anushka");
swapValuesDude(1000,2000);
console.log ("*********************************");

function addThreeValues(a,b,c){
           console.log("Before Addition the values are:", a ,b ,c);  
           result = a+b+c;
           console.log("Addition is: " , result);
}
addThreeValues(10.23,600,40);
addThreeValues("hello" ," Good" ," Morning");


