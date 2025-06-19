 "use strict"; //treat all JS code as newer version

//  alert("hello yasir") // we are using nodejs not browser, browser mai simply pop aagayega but yaha nhi aayega
// code readibility must be high
 // tc39 ,mdn  ---> source
/*
-------------// DATA TYPES  => (8 - types) //----------------
 number => 2 to power 53    
 bigint
 float
 String => ""
 boolean =>true,false
 null  --> it is stand alone value bhi hai and data type bhi hai.
 undefined 
 Symbol =>uniqueness

 object
 
 */
let age=19
// Symbol = 20
console.log(typeof 19);
console.log(typeof(age));  // o/p  ->number
 console.log(typeof "yasir");// o/p  ->String
 console.log(typeof null); // o/p ->object
 console.log(typeof undefined);
 console.log(typeof Symbol);//without parenthethis it will give o/p as the "function"
console.log(typeof Symbol());// correct format to declare the Symbol()
