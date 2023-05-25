/*break -break means we are breaking the flow.
continue means skip  only 1 step which is given*/ 

// after index 5 it will break.

for (let index = 1; index <= 10; index++) {
    console.log(`${index}`); // 0  1
    // index == 5
    if (index==5) {
        break;
    }
}
console.log(`End loop`);
/*************************************************************/
// use of continue.
//we have to skip only 5 th iteration.

var iteration = 0;
for (let index = 1; index <= 10; index++) {// index = 0  1
    iteration = iteration + 1;           //here start 1st iteration
    console.log(`Iteration start: ${iteration}`);
    console.log(`${index}`); // 0  1
    
    if (index==5) {
        continue;
    }
    console.log(`Iteration End: ${iteration}`);
}
console.log(`End loop`);