const accountId = 145679



let accountEmial="khanyasir"
accountEmial="abc@gmail.com"


var accountPassword="yasir123"
// var accountPassword=11111 //re-declared
// accountPassword="123456" //re-updated

accountCity="Vasai"
let accountState;


console.log(accountId)
console.log(accountEmial)
console.log(accountPassword)
console.log(accountCity);
console.log(accountState);


console.table([accountId,accountEmial,accountPassword,accountCity,accountState])
// comment shortcut --> ctrl+ /





/*
prefer not to use var 
beacuse of issue in block scope in functional scope
*/
//var accountPassword="yasir123" //var can be re-declared (initial value of var is undefined  example var bottle ; coonsole.log(bottle))
//accountPassword="yasir123" //var can be re-updated


//const accountId = 145679  //const cannot be re-declaredand , re-updated

//accountEmial="basit123" // let is re updated
//let accountEmial="khanyasir" //let cannot be re-declared

//const means --> const variables can neither be updated nor re-declared
//let means -->  let variables can be updated but not re-declared
//var means --> var variables can be updated and re-declared within its scope;


// hoisting 

console.log(number) // undefined

var number = 50

console.log(number) // 50



// The number variable here has a global scope. Since it is declared with var, the variable is hoisted. 
// This means that we can access the variable before the line where it was declared without errors.

// But the variable is hoisted with a default value of undefined. So that's the value returned from the variable (until the line where the variable is declared with an initial value gets executed).

// var => global and local scope
// let =>global,local and block scope
// const =>global,local and block scope

