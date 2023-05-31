
//create object
let sbiBank ={
    bankName: "SBI Bank",
    location: "Bhosari",
    accountNo: 411324567,
    ifsc: "0000SBI234",
    interestRate: "9%",

};

let interestRate ={
    homeLoanInterest: "6%",
    personalLoanInterest: "9%",
    dueInterest: "10%",
}

let bankLocation ={
    street: "MG road",
    city: "pune",
    pin: 411039,
};

//clone 2 object using assign() method
 Object.assign(sbiBank , bankLocation);

 console.log(`After clonning sbi bank and bank location`);
 console.table(sbiBank);
 console.table(bankLocation);

 //new empty object sbiDetails --->merge all properties

 let sbiDetails= {

 };
 
console.log(sbiDetails);
 Object.assign(sbiDetails ,sbiBank, bankLocation , interestRate);
console.log(`After merging all properties`);
 console.table(sbiDetails);

 //traverse all merge 
 console.log(`Traversing merge details `);

  for (const elements in sbiDetails) {
    const value = sbiDetails[elements];
  console.log(`${elements} = ${value}`);
    
  }


