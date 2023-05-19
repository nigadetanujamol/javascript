
console.log(`*************TCS interview eligibility************`);

var eligibility = function(gradScore , hscScore , sscScore , condName) {
       var res = (gradScore>=70) || (hscScore >=80) ||(sscScore >90) ?`Congrates ${condName} you are eligible for TCS interview.` : `Unfortunately you are not eligible for interview.`
       console.log(`${res}`);
}
eligibility(80 , 86 , 90 , "Tanuja");
eligibility(70 , 65 , 55 , "Komal");
eligibility(60 , 79 , 88 , "Vidya");