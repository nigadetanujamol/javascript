
//      !0=1
// 5! = 5 * 4 * 3 * 2 * 1
/*
let factorial = 1; // 120
for (let index = 5; index >= 1; index--) { // index = 5  4  3  2  1  0
    factorial = factorial * index; // 120 * 1 
}
console.log(`Factorial of no. 5 is:  ${factorial}`);*/

/********************************************************/
//assign for factorials of given nos.

function factorialOfNum(num) {

                 if(num==0){
                 console.log(`Factorial of zero is 1.`);
    return;
 }

    else if(num==null || num==undefined || num==NaN){
        console.log(`Invalid input`);
       }    
    else {
       let fact = 1;
    for(index =num ; index >= 1 ; index--){
      fact = fact * index;
     }
     return `factorial of ${num} is: ${fact}`;
    } 
}

 var fact = factorialOfNum(5);
 console.log(fact);
 
 var fact = factorialOfNum(3);
 console.log(fact);

 var fact = factorialOfNum(null);
 console.log(fact);

 var fact = factorialOfNum(8);
 console.log(fact);

 var fact = factorialOfNum(undefined);
 console.log(fact);

 var fact = factorialOfNum(9);
 console.log(fact);

 var fact = factorialOfNum(0);
 console.log(fact);

 var fact = factorialOfNum(NaN);
 console.log(fact);








