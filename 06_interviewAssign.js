// Assignment 

var tcsInterEligibility =function(gradScore , hscScore , sscScore , CondName) {
        
      if (gradScore>=70 || hscScore >=80 || sscScore >90) {
         console.log(`Congrates! ${CondName} you are eligible for TCS interview`);
        
      } else {
        console.log(`Unfortunately ${CondName} you are eligible for TCS interview`);
      }
}
tcsInterEligibility(80 ,86 ,90 ,"Tanuja");
tcsInterEligibility(70 ,65 ,55 ,"Komal");
tcsInterEligibility(60 ,79 , 88 ,"Vidya");
