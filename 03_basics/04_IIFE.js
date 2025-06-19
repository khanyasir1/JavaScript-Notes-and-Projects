//IIFE -> immediately invoked function expressions
//Q => why we are using it?

// reason 1 : global scope se pollution nhi chaiye, to ek alag scope bana lete hai
// reason 2 :for immediate execution
// Because our application could include many functions and global variables from different source files,
//  it's important to limit the number of global variables.
//   If we have some initiation code that we don't need to use again,
//    we could use the IIFE pattern. As we will not reuse the code again, 
//    using IIFE in this case is better than using a function declaration or a function expression.

//syntax for arrow functions using the IIFE pattern
// (() => { 
// //..
// })()


//syntax for  functions using the IIFE pattern
//  (function yes(){
//    //..
//  }) ()


 //syntax for async functions using the IIFE pattern
//  (async () => {
//   // …
// })();

//  () ()
(function boss() {
    console.log("welcome back employee");
}
 ) (); // if we will not put semicolon (;) here and if we try to run another 
       //iife then it will throw an error
    // error  ===== >>>>>>   //    (() => {
    //     ^
       
    //    TypeError: (intermediate value)(...) is not a function
    //always terminate iife by putting semicolon at the end ,warna use nhi pata kaha terminate karna hai and it will throw an error like  this , which is mentioned above.....

 (() => {
    // Your code goes her  
    console.log("This is an IIFE using an arrow function");
})();


//passing value in the iife
( (company) => {
    console.log(`my company name is ${company}`);
})
("Google");


//////////////////////----------------
a= 10 
b = 20

function addNum(n1, n2) {
    let result = n1 + n2;
    return result;

}
let x = console.log(addNum(a, b));
let y = console.log(addNum(10, 12));


// shift + alt + down arrow
