//syntax

// switch (key) {

//     case value :
//         break;
//         .
//         .
//         .

//     default :
//     break;

// }



//--- cases for number in switch
const weekDays = 1

switch (weekDays) {
    case 1:
        console.log("sunday ");
        break;
    case 2:
        console.log("monday ");
        break;
    case 3:
        console.log("tuesday ");
        break;
    case 4:
        console.log("wednesday ");
        break;
    case 5:
        console.log("thursday ");
        break;
    
    case 6:
        console.log("friday ");
        break;
    
    case 7:
        console.log("saturday ");
        break;

    default:
        console.log("enter the  correct number ");
        break;
}

//------ cases in string using switch -----



const months = "february"

switch (months) {
    case "january":
        console.log("first month of the year, january "); 
        break;
    case "february":
        console.log("second month of the year, february ");
        break;
    case "march":
        console.log("third month of the year, march");
        break;
    case "april":
        console.log("fourth month of the year, april");
        break;
    case "may":
        console.log("fifth month of the year, may");
        break;
    
    case "june":
        console.log("sixth month of the year,   june");
        break;
    
    case "july":
        console.log(" seventh month of the year, july");
        break;
      //like wise till december , but for right noe that is enough...
    default:
        console.log("enter the  correct name of the month");
        break;
}

// both number and string cases are usedin the switch /