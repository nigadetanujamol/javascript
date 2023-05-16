
function maleMarriageEligibility(gender , age ,boyName){

       var result = (gender=="male") && (age>=21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} is not eligible for marriage`;
       console.log(`${result}`);
    }
    maleMarriageEligibility("male" , 25 ,"Billgates");
    maleMarriageEligibility("male" , 17 , "Stew Jobs");
          console.log(`********************************************`);

 function femaleMarriageEligibility(gender , age ,girlName){
         var result = (gender == "female") && (age >=18) ?`Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} is not eligible for marriage`;
         console.log(`${result}`);
     }
     femaleMarriageEligibility("female" ,16 , "Jenifer");
     femaleMarriageEligibility("female" ,27 ,"Malinda Gates" )