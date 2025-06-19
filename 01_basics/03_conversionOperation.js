let score ="33abc"

//both are valid
// console.log(typeof score);
// console.log(typeof(score)); 


// --------------------------------------

let ValueInNumber = Number(score)
// console.log(ValueInNumber);
// console.log(typeof(ValueInNumber));

// ------------------------------------------

let score1 = "33abc"

let newValue = Boolean(score1)
// console.log(newValue);
// console.log(typeof(newValue));
// console.log("value is " + Boolean(newValue));


let emptyString = "";
let zeroValue = 0;
let nullValue = null;
let undefinedValue;
let nanValue = NaN;

// console.log(Boolean(emptyString));   // false
// console.log(Boolean(zeroValue));     // false
// console.log(Boolean(nullValue));     // false
// console.log(Boolean(undefinedValue));// false
// console.log(Boolean(nanValue));      // false


// --------------------------------------------

// "33" => 33       /// string --> number 
// "33abc" =>NaN    /// string containing alphabet --- trying to convert into number --> NaN (not a number)
// true => 1 ; false => 0

let isLoggedIn =""

let booleanLoggedIn = Boolean(isLoggedIn)

//  console.log(booleanLoggedIn); // false
// console.log(typeof(booleanLoggedIn));

let loggedOut = " "
let newLog = Boolean(loggedOut)
// console.log(newLog); // true
// console.log(typeof(newLog));

// 1 => true ; 0 => false
// "" => false
// "yassir" => true

let someNumer = true

let stringNumber = String(someNumer)
 
// console.log(stringNumber);
// console.log(typeof(stringNumber));

// *************************** Operations ******************

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let val = 3
let Negvlaue = - val
// console.log(Negvlaue);

// console.log(2+2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/300);
// console.log(2%3);

let str1 = "hello "
let str2 = "yasir" 
let str10 = " khan"
let str3 = str1 + str2 + str10 
// console.log(str3);



// TYPE COERCION
// console.log("1" + 2);
// console.log(1 + "2" );
// console.log("1" + 2 + 3);(string concatenation, then more string concatenation)
// console.log(1 + 2 + "3"); (numeric addition, then string concatenation)


// console.log((3+4)*(5%3));

// console.log( +false );//0 //convert boolean value into numeric representation
// console.log( +true )//1  //convert boolean value into numeric representation
// console.log(+""); //0

const stack = undefined 
// console.log(typeof(stack))
//******** */ typeof undefined will be undefined always....

const car = null
// console.log(typeof(car));
// *******  typeof null will be object always....

let num1, num2 ,num3
num1 = num2 = num3 = 2 + 2
// console.table([num1, num2, num3]);

let count = 2
// console.log(++count);
// console.log(count++);
// console.log(count);

let x = 3 
let y = x++  // y=3
// console.log(x , y) 
let z = ++y
// console.log(x ,z);





// *************************DATA TYPES ************************
// how data is stored in memory and how it is accessed , on the basis 
// of that data is categerozied in 2 ways 

// 1. primitive =>(call by value)
// 2. non-primitive data / referrence data types => (call by reference)

// 1.primitive  ---> call by value(copy of original data is given)
// 7 types
// Integer,string,boolean,symbol,null,undefined and bigint

const number = 22 
const name = "yasir"
const paased = false
let yasir;

const employee_Id = Symbol('yasir123')
// console.log(employee_Id);

const next_Id = Symbol('yasir123')
// console.log(next_Id);

// console.log( employee_Id === next_Id );


// console.log(1 === 1); // true
// console.log('hello' === 'hello'); // true
// console.log(true === true); // true
// console.log(null === null); // true
// console.log(undefined === undefined); // true




const bigNnumber = 1234568545546549843545344n
// console.log(bigNnumber);

//--------------------------------------
// 2. Reference (non-primitive)
// >>>> array,objects, functions
// all  non primitive data types are actually -->> objects
//---------------------------------------
/*array*/  
const subject = ["dsa" , "computer networks" , "computer graphics" , "Maths"]
// console.log(subject);
// console.log(typeof(subject)); //type of array is object


 /*object*/
let student = {
    name: "mohammed yasir",
    age: 18,
    branch: "computer engineering"
}
// console.log(student);
// console.log(typeof student);



// /*functions*/ 
const computer = function(){
    console.log("hello mohammed yasir");
}
// console.log(typeof(computer));




//*******************STACK AND HEAP*********************8
 
// --------------------------
// STACK is used by => primitive data type 
// HEAP is used by  => non primitive data type
// -----------------------------------


/* STACK example usin primitive datatype */
let student1 = "mohammed yasir"
let student2 = student1 
    student2 = "khan Yaman "  

console.log(student2);
console.log(student1);

/* HEAP example using not primitive datatype */

// let data ={
//     name : "mohammed aatik",
//     age : 25
// }

// let data2 = data

// data2.name = " abdul Basit"
// console.log(data.name);
// console.log(data2.name);

// Truthy and Falsy Values in JavaScript
// JavaScript considers the following values as "falsy":

// false
// 0
// -0
// 0n (BigInt zero)
// "" (empty string)
// null
// undefined
// NaN
