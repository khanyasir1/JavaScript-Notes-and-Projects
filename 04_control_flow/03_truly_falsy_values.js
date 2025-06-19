// const userEmail = ""
// const userEmail = " "
const userEmail = []
// const userEmail = "yail@gmail.com"

if (userEmail) {
    // console.log( "logged in user", userEmail.startsWith('yail'));
}else {
    // console.log("don't have email");
}


// ------------------------ ***********VERY IMPORTANT FOR THE INTERVIEWS*************** ----------
// ----------------------------------------------------------/
// ----------------- FALSY VALUES -------

// false,  0, -0, BigInt 0n, "", null, undefined, NaN 

// -------------------------------------------------------------



// --------****** TRULY VALUES *****------------
// --------------------------------------
// "0", 'false', " ", [], function(){}

// ----------------------------------


// Q) how to check whether array is empty or not using conditional expression

if(userEmail.length === 0){
    console.log("array is empty");
}

// Q) how to detect whether object is empty or not?
const emptyObject = {};
if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}


//imp ,remeber it
console.log(false == 0);
console.log(false == '');
console.log(0 == '');

//Nullish Coalescing Operator (??) : null undefined

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 500 ?? 5

console.log(val1);

// ----------------------- ternary operater 

// (condition) ? true : false

const yas = 50
yas>=30 ? console.log("greater value") : console.log("less value");

