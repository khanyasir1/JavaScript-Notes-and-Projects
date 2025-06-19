
// Activity 01 : Variable Declaration

// task 01 :

/* Note :
 var can be reassigned and reupdated
*/
var number = 10;
console.log(number);

// task 02 :
// let cannot be reassigned but reupdated
let name= "javascript"
console.log(name);



// Activity 02 : Constant Declaration

// task 03 :

const boy = true;
console.log(boy);


// Activity 03 : Data types

const naam = "mohammed"
console.log(typeof(naam));

const age= 20
console.log(typeof(age));

const male = true
console.log(typeof(male));

const address = {
    street : "koli",
    building : "java",
    pincode : "401111",
    country : "india"
}
console.log(typeof(address));

const marks = [ 10, 11, 12, 13, 14, 15, 16, 17]
console.log(typeof(marks));



// Activity 04 : Reassigning variables 

/* Note :
 let cannot be reassigned and  but can be reupdated

*/

let language = "english"
console.log(language);

// error => Cannot redeclare block-scoped variable 'language'
// let language = "franch"

// language = "russian"
// console.log(language);

// Activity 05 : Understanding Const

/* Note :
 const cannot be reassigned and reupdated

*/

const country = "india"
console.log(country);


//error => TypeError: Assignment to constant variable.
// country = "usa"
// console.log(country);



