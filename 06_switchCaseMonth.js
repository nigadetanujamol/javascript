//Assignment

function monthOfYear(monthNum) {
  switch (monthNum) {
    case 1:
          console.log(`The first month name is : January`);
          break;
    case 2:
          console.log(`The second month name is : February`);
           break;                                                                                                                       break;
    case 3:
          console.log(`The third month name is : March`);
          break;
    case 4:
          console.log(`The forth month name is : April`);
          break;
    case 5:
           console.log(`The fifth month name is : May`);
            break;
    case 6:
           console.log(`The sixth month name is : June`);
           break;
    case 7:
          console.log(`The seventh month name is : July`);
           break;
    case 8:
          console.log(`The eight month name is : August`);
           break;
    case 9:
          console.log(`The nineth month name is : Septmber`);
           break;
    case 10:
          console.log(`The tenth month name is : October`);
           break;
    case 11:
          console.log(`The eleventh month name is : November`);
           break;
    case 12:
          console.log(`The twelve month name is : December`);
           break;

    default:
           console.log(`You entered the invalid month number: ${monthNum}`);
           break;
  }
}
monthOfYear(1);
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
