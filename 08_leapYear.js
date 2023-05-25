
var checkLeapYear = function (year) {

   // var nan=0
    if((year==null) || (year==undefined) || year==NaN){
        console.log(`${year} is not valid input`);

    }else if((year %4==0) && (year %100 !=0) || (year%400==0)){

        console.log(`${year} is leap year`);
    } 

    else{
        console.log(`${year} is not leap year`);

    }
}
checkLeapYear(2020);
checkLeapYear(1999);
checkLeapYear(1600);
checkLeapYear(2022);
checkLeapYear(1945);
checkLeapYear(1750);
checkLeapYear(null);
checkLeapYear(undefined);
checkLeapYear(NaN);
checkLeapYear("Twenty twenty");
