
/*what is function
function is piece of Code
function is a resort keyword.
syntax of function is -----function_keyword function_name ();
 function is not executed unless and until we call function i.e show()*/

 function show(){
    console.log("show function");
 }
    console.log("before show function");
show();  //call or invoke fun
    console.log ("after fun");
show();
show();

var num1 = 100;
var num2 = 200;

var name1 = "Billgates";
var name2 = "Elon Musk";

var cityPune = "Pune";
var cityMumbai = "Mumbai";


  function swapVariables(value1,value2,value3){  //arguments
      console.log ("before swap: ",value1 , value2);
      console.log(value3);

      var temp = value1;
      value1 = value2;
      value2 = temp;
      console.log ("After swap: ",value1 , value2);      
  }
  swapVariables(num1,num2); //values passing to arguments
                           //   if arguments are more then result is undefined
                           //if more value is given then it ignores value
  swapVariables(name1,name2);
  swapVariables(cityPune,cityMumbai);


    