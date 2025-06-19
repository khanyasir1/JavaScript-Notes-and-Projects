// console.log (2 > 1);  
// console.log (2 < 1);
// console.log(2 == 2)  
// console.log( 2 >= 2);   


// important to note that :
// console.log(false == 0);         // true
// console.log('' == 0);            // true
// console.log(null == undefined);  // true
// console.log([] == false);        // true
// console.log([1] == 1);           // true


// console.log("2" > 1); //here string will be treated as number here
// console.log( 1 > "2"); // same here string will be treated as number

 console.log( null > 0); //false
 console.log( null == 0 );//false
 console.log( null >= 0 );//true
// 
/*
REASON: here equality check (==) and comparision check(<,>,<=,>=)
        works differently.
        => Comparisions converts null to the number, treating it as 0.
        =>thats why (3) null>=0 is true and (1) null>0 is false
*/


// console.log( undefined == null );
// console.log( undefined === null );
// console.log( undefined >=  0);

// // ===
// console.log( " 2 "  ==  2 ); loose equality check (==)  checks the vlaue is same or not...
// console.log( " 2 " === 2);strict equality check (===)  checks the value and data type is same or not...