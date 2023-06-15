
function isPalindrome(str){

      const arrSplit = str.split("");
    //console.log(arrSplit);

     const arrReverse= arrSplit.reverse();
    //console.log(arrReverse);

    const red = arrReverse.reduce((runningTotal , value)=>{   //here reduce method used to concat the reverse sptitted array to string 
                                                               //["m","o","m"]  ====>mom
         return runningTotal+value;
    });
    //console.log(red);
   // console.log(str);

    if(str == red){
      console.log(`Given ${str} string is palindrome`);
     }
     else{
        console.log(`Given ${str} string is not palindrome`);
        }
   }
  

isPalindrome("madam");
isPalindrome("141");
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");
