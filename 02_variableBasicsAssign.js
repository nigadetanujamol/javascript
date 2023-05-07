var age= 30;
var year= 2023;
var std= 5;

var name="Anuj";
var lastName="Nigade";
var city="Pune";

var isSingle = false; 
var isChef = false;
var isVegeterian = true;

console.log("value of age:",age);

//here "typeof"  is importaint..It gives us the type of that variable.
var typeOfAge =  typeof age;
console.log  ("type of age",typeOfAge);

var typeOfYear = typeof year;
console.log("value of year:",year, "        Type of year: " ,typeOfYear);

var typeOfStd= typeof std;
console.log("value of std: ",std,"           Type of std: ",typeOfStd );

var typeOfName= typeof name;
console.log("value of Name: ", name ,"       Type of name: ", typeOfName);

var typeOfLastName = typeof lastName;
console.log("value of Last name:",lastName, "      Type of Last Name: ",typeOfLastName);

var typeOfCity = typeof city;
console.log("value of city: ",city, "        type of city=",typeOfCity);

var a = typeof isSingle;
console.log("value of single: ",isSingle, "        type of single=", a);

var b = typeof isChef;
console.log("value of Chef: ",isChef, "        type of Chef=", b);

//var c = typeof isVegeterian ;  OR
console.log("value of Vegeterian : ",isVegeterian , "        type of single=",typeof isVegeterian);

console.log("********************************");

var big;
console.log("value of big: ",big);
console.log("Type of big:",typeof big);
console.log("If variable declared but does not initialized any value then its value and type is undefined.");

var tank = null;
console.log("value of tank: ",tank);
console.log("Type of tank:",typeof tank);
console.log("If variable initialized with null then its value is null and type is Object");


