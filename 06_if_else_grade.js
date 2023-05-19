

function voteEligibility(age) {
     if ( age <=0 || age>120 || age == null || age==undefined) {
         console.log(`your age is ${age} It is Invalid data`);
         }
     else if (age < 18) {
          console.log(`your age is ${age} which is not eligible for vote`);
                  
            }  else { 
               console.log(`your age is ${age} ----> which is eligible for vote`);
            }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
voteEligibility(undefined);