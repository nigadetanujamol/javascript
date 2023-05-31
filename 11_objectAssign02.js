
//create objects 
let sbiBank ={
    bankName: "SBI Bank",
    location: "Bhosari",
    accountNo: 411324567,
    ifsc: "0000SBI234",
    interestRate: "8%",
  
//add member function

showDetails: function (){

    console.log(`Details are : bank name: ${this.bankName} , location: ${this.location} , acc.no: ${this.accountNo} , IFSC code: ${this.ifsc} , interest rate:  ${this.interestRate}`);
},

};  
let axixBank ={
    bankName: "Axix Bank",
    location: "Dighi",
    accountNo: 511324876,
    ifsc: "0000Axi234",
    interestRate: "8.25%",

//add member function

showDetails: function (){

    console.log(`Details are : bank name: ${this.bankName} , location: ${this.location} , acc.no: ${this.accountNo} , IFSC code: ${this.ifsc} , interest rate:  ${this.interestRate}`);
},
};
      
let hdfcBank ={
        bankName: "HDFC Bank",
        location: "Alandi",
        accountNo: 623324569,
        ifsc: "0000Hdf235",
        interestRate: "9%",
        
//add member function

showDetails: function (){

    console.log(`Details are : bank name: ${this.bankName} , location: ${this.location} , acc.no: ${this.accountNo} , IFSC code: ${this.ifsc} , interest rate:  ${this.interestRate}`);
},

};

let yesBank ={
            bankName: "YES Bank",
            location: "Chakan",
            accountNo: 874324567,
            ifsc: "0000yes234",
            interestRate: "9.15%",
            
//add member function

showDetails: function (){

    console.log(`Details are : bank name: ${this.bankName} , location: ${this.location} , acc.no: ${this.accountNo} , IFSC code: ${this.ifsc} , interest rate:  ${this.interestRate}`);
}                    
};

sbiBank.showDetails();
axixBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();