
// ctrl + alt + N

//                                   //METHOD -01
// const promiseOne = new Promise(function(resolve, reject){
   
//     //DO ASYNC TASK
//     //DB CALLS, CRYPTOGRAPHY AND NETWORK
  
//     setTimeout(() => {
//         console.log("async task is started");
//         resolve();
//     },1000);
// })
                           
// promiseOne.then(function(){
//     console.log("resolved promise");
// })



//                                       //METHOD  - 02
new Promise(function(resolve , reject){

    setTimeout(function(){
        console.log("2nd method ");
        resolve();
    },1000)
}).then(function(){
    console.log("2ndmethod to solve the promise without creating the variable");
})



//method - 03 (here we are passing the object into the resolve function, how to access it in the then function)

const promiseThird = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log("passing the object in the resolve function");
        resolve({name : "mohammed yasir", email : "lionthelyal9@gmail.com" , lastname : "khan"});
    },1000)
})

promiseThird.then(function(user){
    console.log(user);
})




// const promiseFour =  new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("statring ......");
//         const error =false;
//         if(!error){
//             resolve({name : "mohammed yasir" , surname : "khan"})
//         }else{
//             reject("....SOMRTHING WENT WRONG .....")
//         }
//     },1000)
// })

// promiseFour.then(function(user){
//     console.log(user);
//     return user.name;
// }).then(function(username){
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally(function(){
//     console.log("promise is either resolved or rejected..");
// })



// //  ********** PROMISES USING THE ASYNC METHOD ***********

// const promiseFive =  new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("statring ......");
//         const error =true;
//         if(!error){
//             resolve({name : " javascript" , surname : "khan"})
//         }else{
//             reject("....JAVASCRIPT WENT WRONG .....")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
// try {
//    const response =  await promiseFive;
//    console.log(response);
// } catch (error) {
//     console.log(error);
// }}

// consumePromiseFive();


// async function response(){
//     try {
//         const responsing = await  fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await responsing.JSON()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ERROR HAS BEEN OCCURED...");
//     }
// }

// response();



// fetch('https://jsonplaceholder.typicode.com/users')

// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) =>{
//  console.log(err + "error has been occured!!!");
// })


