//Activity 01 :basic error handling with trycatch
//task 01 : write fucntion that intentionally  throwa and error and use try catch to handle it
// const handlingError = function handle(){
//     try {
//         const adult = false
//         if(!adult){
//             throw new Error("you are not adult")
//         }
//         console.log("you are adult");
//     } catch (error) {
//         console.log(error);
//         console.log("ERROR: " + error.message);
//     }
// }
// handlingError()


//task 02 : function that divide the numers and throw an error if denomminator is zero, use trycatch
// const denomminator =function hello(){
//     try {
//         const num = 10 
//         const den = 0;
//         const result = num/ den;
//         console.log(result.toFixed(2));
//          if(den == 0){
//             throw new Error("cannot divide by zero")
//      }
//     }catch (error) {
//         console.log("ERROR: " + error);
//     }}
// denomminator()

//Activity 02 : finally block
//task 03 : write an script that includes trycatch block and finally block .log messages in try.catch finally blocks to observe the execution

// const denomminator =function hello(){
//         try {
//             const num = 102 
//             const den =2 ;
//             const result = num/ den;
//             console.log(result.toFixed(2));
//              if(den == 0){
//                 throw new Error("cannot divide by zero")
//          }
//         }catch (error) {
//             console.log("ERROR: " + error);
//         }finally{
//             console.log("output is displayed to the screen");
//         }
//     }
//     denomminator()

//activity 03 : Custom error objects
//task 04 : create a custom error class that extends the built in eroor class.throw an instance of this custom error in a functon and handle it using try catch

// class CustomError extends Error{
//     constructor(message){
//         super(message);  //The constructor calls super(message) to pass the error message to the parent Error class constructor.
//         this.name = "CustomError";
//     }
// }
// function throwError(){
//     try {
//         const passsowrd = true
//         if(!passsowrd) throw new Error ("this is custom error made by user..")
//             console.log("no errors found");
//     } catch (error) {
//         if(error instanceof CustomError){
//             console.log("custom error: " + error.message);
//         }else{
//             console.log("unexpected error: " + error.message);
//         }
//     }
// }
// throwError()

//task 05 : write a function that validates user input(eg checking if string is empty) and throws a custom error if a validation fails handle the custom error by trycatch

//not so good solution
// function validate(){
//     try {
//         const string = "  "
//     if(string.length === 0){
//         throw new Error("string is empty")
//     }
//     console.log(string.trim());
//     } catch (error) {
//         console.log("error: " + error.message);
//     }
// }
// validate()

// // Define a custom error class
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'ValidationError';
//     }
// }

// // Function to validate user input
// function validate(input) {
//     try {
//         // Trim the input string to remove whitespace from both ends
//         const trimmedString = input.trim();

//         // Check if the trimmed string is empty
//         if (trimmedString.length === 0) {
//             throw new ValidationError('String is empty');
//         }

//         // If validation passes, log the trimmed string
//         console.log(trimmedString);
//     } catch (error) {
//         // Handle the custom validation error
//         if (error instanceof ValidationError) {
//             console.log('Validation error: ' + error.message);
//         } else {
//             // Handle any other unexpected errors
//             console.log('Unexpected error: ' + error.message);
//         }
//     }
// }

// // Example usage
// validate("          sssss         "); // Output: 'sssss'
// validate("     "); // Output: 'Validation error: String is empty'


//activity 04 : error handling in promises
// task 06"create promise that randomly resolve or rejects use catch() to handle the rejection and log an appropirate message to the console

//my solution ///
// const promise  = new Promise((resolve, reject) => {
//     resolve(Math.floor(Math.random() * 100) +1 );
//     reject("error")
// }).then( (val) => {
//     console.log(val);
// }).catch( (err) => {
//     console.log(err);
// })

//better one
// const promise = new Promise((resolve, reject) => {
//     const randomValue = Math.random(); // Generate a random number between 0 and 1
//     if (randomValue > 0.5) {
//         resolve("Resolved with value: " + Math.floor(randomValue * 100) + 1);
//     } else {
//         reject("Error: Random value was less than or equal to 0.5");
//     }
// }).then((val) => {
//     console.log(val);
// }).catch((err) => {
//     console.log(err);
// });


//task 07 : use try/catch within async function to handle error from a promise that randmly resolves or reject and log the error

// const random  = new Promise((resolve, reject) => {
//     const age = 10
//     if(age >= 18){
//         resolve("you are adult")
//     }else{
//         reject("Error: " + age + "  you are not adult")
//     }
// })


// async function check(){
//     try {
//         const result =await random
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// check()

//activity 5 :handling fetch error
//task 08 :  use fetch api to request data from invalid url and handlw the error using .catch log appropriate error messageon console

fetch('https://api.github.com/users/hiteshchoudhary')
.then(response => {
    if (!response.ok) {
        throw new Error("Error in the API URL. Status: " + response.status);
    }
    return response.json(); // Continue to parse JSON if the response is OK
}).then( (response) => {
    console.log(response);
})
.catch(error => {
    console.log(error.message);
});




//task09 : use fetch api to request data from and invalid url and async function  and handle the error using try catch .log error message

// const url = fetch('https://api.github.com/user/hiteshchoudhary')

// async function api(){
//     try {
//         const res = await url;
//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }
// const data = await res.json();
// console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }

// }
// api()