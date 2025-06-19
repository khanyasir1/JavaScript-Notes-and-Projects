// Day 2 : Operators
// =============================

// Activity 1 : Arithmetic Operators 
// --------------------------------------

// Task 1 :

const calculator = function add(a,b){
    // Task 1 :
    const sum = a + b;
    // Task 2 :
    const sub = a - b;
    // Task 3 :
    const mul = a * b;
    // Task 4 :
    const div = a / b;
    // Task 5 :
    const rem = a % b;
    console.log([sum,sub,mul,div,rem] );
    return [sum,sub,mul,div,rem] 
}

const [sum,sub,mul,div,rem] = calculator(5,10);
// --------------------------

// Activity 02 :Assignment Operators

// Task 06 :
  const mark1 = 10 
  let mark2  = 100
  mark2 += mark1;
  console.log(mark2);

  //Task 07 :

  let newAge = 50
  let oldAge = 30
  newAge -= oldAge
  console.log(newAge);

// ----------------------------------

// Activity 03 : 
// Task 08 :

const laptop = 10
const computer = 20

if(computer > laptop)  console.log( "computer is in demand....")
if(computer && laptop)  console.log( "Both are in demand....")    
else console.log("laptop is in demand");

// Task 09 :
const classStudent = 10
const classAttendence = 10

if( classStudent >= classAttendence)  console.log( " all are present....")
    if(classStudent < classAttendence)  console.log( "all student are not present ....")    
    else console.log("koi nhi, chalta hai ");

// Task 10 :

const num1 = 10 
const num2 = "100"

if(num1 == num2) console.log("both are equal");
else if(num1 === num2) console.log("both have same value and data type");
else if( num1 !== num2) console.log("both have same value but are of different data type");

// Activity 04 : 

// Task 11 :

let name1 = "Student"
let name2 = "pass"
if(name1 && name2){
    console.log("passed");
}else{
    console.log("Failed");
}

// Task 12 :

let username =true
let password = false

if(username || password){
    console.log("change your password to access the account");
}else{
    console.log("enter valid username and password");
}

// Task 13 :

const adult = true;

if(!adult) console.log("you cannot access the content");
else console.log("Welcome to the coding session");

//Ternary Operator

const member = true ;
  const discount = member ? "10% discount": "0% discount ";
  console.log(discount);

//   for...in loop (used for iterating over object properties):
  const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}


