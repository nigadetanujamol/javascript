//isNaN(marks) means (marks==nan)

function gradeCalculation(marks){
    
    if (marks==undefined || isNaN(marks) || marks<0 || marks>100) { // undefined, null
        console.log(`Invalid marks: ${marks}`);
    } else {
       console.log(`Valid marks : ${marks}`); 
       if (marks>=90) {
            console.log(`Fantastic marks : ${marks}, Your grade is A+`);
       } else {
        
       }
    }

    
}
// Handling invalid inputs
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(NaN);

gradeCalculation("Karthik");
gradeCalculation(-10);
gradeCalculation(120);

// Valid input
gradeCalculation("20");