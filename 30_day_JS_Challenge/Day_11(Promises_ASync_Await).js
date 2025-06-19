//Activity 01
//task 1 : create a promise with message after 2 second timeout and log message
// const promise = new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             console.log("hello world!");
//             resolve()
//         }, 7000);

      
// }) .then(function( ){
//     console.log("message will after timeout");
// })

//task 02 :create promise that rehects with an error message after 2 second timeout and handle it .

// const promiseError = new Promise( (resolve, reject) => {
//     setTimeout(( ) => {
//         // console.log("checking for error message");
        
//         reject(new Error("an error occurred"));
//     },2000)
// }).then(() =>{
//     console.log("cannot proceed because error is occured");
// }).catch( (e) => {
//     console.log(e.message);
// })

//Activity 02 : chahining promises
//task 03 : create a sequence of promises that simulates fetching data from server chain the promises to log messages in specific order

// const promiseChaining = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         console.log("starting the message ....");

//         const error = false;
//         if(!error){
//             resolve( {"name" : "Abdul Basit",
//                 age : 20,
//                 address : {
//                     road : "cr",
//                     area : "vasi",
//                     district : "palghar",
//                     state : "maharashtra"
//                 }
//             })
//         }else{
//             reject( " .....something went wrong... 404 error")
//         }
  
//     }, 1000);
// }).then( (user) =>{
//     console.log(user.name)
//     return user 
// })
// .then( (user) =>{
//     console.log(user.age)
//     return user
// })
// .then( (user) =>{
//     console.log(user.address.state)
//     return user
// } )
// .finally( () => console.log("closing the message..."))

//Activity 03 : using async/await 
//task 04 : write a async function that waits for a promise to resolve and then log the resolved value.

// const promise_async = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         const result = true
//         if(result){
            
//             resolve({name : " hello" , message :  "result is generated"})
//         }else{
//             reject(`something went wrong: ${result}`)
//         }
//     }, 1000);
// })

// async function async_promise(){
//         const ans = await promise_async;
//         console.log(ans);
// } 

// async_promise();


//task 05 : write a async function that handles rejected promise using try catch and log error message

// const promise_error = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         const result = true
//         if(result){
            
//             resolve({name : " hello" , message :  "result is generated"})
//         }else{
//             reject(new Error("something went wrong: "))
//         }
//     }, 1000);
// })

// async function async_promise(){
//         try {
//             const ans = await promise_error;
//         console.log(ans);
//         } catch (error) {
//             console.log(error.message);
//         } 
// } 

// async_promise();


//activity 07 : use fetch api to et data from public api and log the response data to the console using promises
// async function fetching(){
//     try {
//         const response =  await  fetch('https://api.github.com/users/hiteshchoudhary')
//         const data =  await response.json();
//         console.log(data);
//         console.log(`${data.followers} ${data.bio} ${data.login}`);
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// fetching()


//activity 06 : use fetch api to et data from public api and log the response data to the console using promises

// Define the API URL
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// // Fetch data from the public API
// fetch(apiUrl)
//     .then(response => {
//         // Check if the response is okay (status code in the range 200-299)
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         // Parse the JSON data from the response
//         return response.json();
//     })
//     .then(data => {
//         // Log the data to the console
//         console.log(data);
//     })
//     .catch(error => {
//         // Log any errors that occurred during the fetch
//         console.error('There has been a problem with your fetch operation:', error);
//     });


    //activity 5 : concurrent promises
    //task 8 :use promise.all to wait for multiple promises to resolve and then log all their values
    //task 8 :use promise.all to wait for multiple promises to resolve and then log all their values

    // const promise1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("promise 1 resolved afer one second..");
    //     }, 1000);
    // })

    // const promise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("promise 2 resolved afer two second..")
    //     }, 2000);
    // })

    // const promise3 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("promise 3 resolved afer three second..")
    //     }, 3000);
    // })

    // Promise.all([promise1, promise2, promise3])
    // .then( (values) => {
    //     console.log("all promises are resolved");
    //     console.log(values);
    // }).catch( (err) => {
    //     console.log(err);
    // })


    //task 09 : use promise.race to log the value of first promise that resolves among multiple promises

const promise_one = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise 1 resolved after 1 second");
    }, 1000);
})

const promise_two = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise 2 resolved after 2 second");
    }, 2000);
})

const promise_three = new Promise((resolve) => {
    setTimeout(() => {
        resolve("promise 3 resolved after 3 second");
    }, 3000);
})

Promise.race([promise_one, promise_two, promise_three])
.then( (value) => {
    console.log("promise resolved first is....." + value);
    console.log(value);
}).catch( (err) => {
    
})