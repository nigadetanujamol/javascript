
let professor ={
    name: "Sushma sen",
    course: "BCS",
    gender: "Female",
    isMarried: true,
    score: 200,
    //nested object
    degrees: {
        engineering: "CSC",
        PHD: "ADV computing",
        programming: "java script",
    },
    //add array
    certificates: ["Hacker Rank participation" ,"certificate in IFE course" , "certificate in ADV programming"],


  //add function as a value
  teacherDegrees: function(){
    //we concate all degrees.
    console.log(`Total degrees are : ${this.degrees.engineering} ,${this.degrees.PHD}, ${this.degrees.programming}`);
  },

};

console.log(`professor object properties are: `);
console.log(professor);

console.log(`nested degress object properties are: `);
console.log(professor.degrees);
console.log(`certificates are :`);
console.log(professor.certificates);


//call function
professor.teacherDegrees();


  //add new proerty
 professor.experience = "14 years";
 console.log(`After adding new property experience `);
//console.table(professor);
console.log(professor);
console.log(`total experience is: ${professor.experience}`);


//modify course property as MCS
professor.course ="MCS";  
console.log(professor);


//add one new certificate in array as Oracle certified at end of array
 professor.certificates.push("Oracle certified");
console.log(professor.certificates);

//log last element of array certificate
const lastElement = professor.certificates[professor.certificates.length - 1];
console.log(`Last element of array is: ${lastElement} `);