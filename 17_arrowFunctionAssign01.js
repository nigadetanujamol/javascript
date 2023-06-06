
//Write a arrow fun with no arg no return value

let display = () =>{
    console.log(`Good Morning , Today is Monday`);

}
display();
console.log(`*************************************************`);

//AF with 3 arg no return value and assign third value default as 1

let multi =(num1 , num2 ,num3 =1) =>{

   let result = num1*num2*num3;
          console.log(`The nos are: ${num1} ,${num2} ,${num3}`);
          console.log(`multipication of number is: ${result}`);
}
multi(5 ,5 ,2);
console.log(``);   //for line space
multi(10, 4 );

console.log(`**************************************************`);

//with 5 arg and return value and do addition 

let add = (n1 ,n2 ,n3 ,n4 ,n5)=>{

    let result = n1+n2+n3+n4+n5;
    console.log(`The nos are : ${n1} ,${n2} ,${n3} ,${n4}, ${n5}`);

    return result;
    //return (`addition is : ${result}`);
}
let result = add(100 ,100 ,200 ,349 ,756 );
console.log(`Adition of nos is: ${result}`);
//console.log(result);

console.log(``);

let result1 = add(" I am" , " learning" , " ES6" ," features" ," in depth");
console.log(`Addition of string: ${result1}`);


