// CONTROL STRUCTURE

// Activity 01 :
// Task 1:
/*
let number = 0;
if(number > 0)  console.log("positive number: " + number);
if(number < 0)  console.log("negative number: " + number);
if(number == 0) console.log("Zero: " + number);

    

// Task :02

const age = 18; 
if(age>=18) console.log("You are alegible to vote");

// Activity 02 :
 
//Task :03
const first = 1000
const second = 200 
const third = 30 

if (first > second && first > third){
    console.log("largest : " + first);
}else if(second > third) {
    console.log("second largest : " + second);
}else{
    console.log("third largest: " + third);
}

//Activity 03   
// Task 4:

const day = 4;

switch(day){
        case 1:
        console.log("sunday: " + day);
        break;
        case 2:
        console.log("Monday: " + day);
        break;
        case 3:
        console.log("Tuesday: " + day);
        break;
        case 4:
        console.log("Wednesday: " + day);
        break;
        case 5:
        console.log("Thursday: " + day);
        break;
        case 6:
        console.log("Friday: " + day);
        break;
        case 7:
        console.log("Saturday: " + day);
        break;

    default: 
    console.log("enter the valid day");
}


// task 05 :

const grade = "D"
switch(grade) {

    case "A":
        console.log("Excellent grade " + grade);
        break;
    case "B":
        console.log("sucess grade " + grade);
        break;
    case "C":
        log("completed grade " + grade);
        break;
    case "D":
        console.log(" just passed grade " + grade);
        break;
    case "F":
        console.log("failed grade "+ grade);
        break;                
    default : console.log("enter the valid grade");
}
   */ 

// Activity 04 :
// task 6 : 


const number = 143 ;
const even = number % 2 === 0 


even  ? console.log("even: " + number):console.log("odd: "+ number)

//Activity 05;
//task 07 :


const year= 1995
if(year % 4 === 0){
    console.log("leap year");
}else if(year % 400 === 0){
    console.log("leap year");
}
 else if(year % 100 ===0 ){
    console.log("not a leap year");
}else {
    console.log("not leap year");
}
  