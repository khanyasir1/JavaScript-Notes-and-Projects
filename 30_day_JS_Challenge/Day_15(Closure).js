//activtity 01 : understanding closure
//task01 : write a function that returns function, wherethe inner function accessses variable from the outer function scope.callthe inner function and log result.

// function student(){
//     var name = "mdn"

//     function display(){
//         console.log(name);
//     }

//     return display
// }

// const res = student()
// res()

//task 2 : create  a closure that maintians private number .implement function toincrementand get the current value of the counter

// function counter() {

//     let count= 0 ;
//     return  {
//         increment : function(){
//             count++
//         },
//         getValue : function(){
//             return count;
//         }
//     }
// }

// const result  = counter()
// result.increment()
// console.log(result.getValue());


// result.increment()
// console.log(result.getValue());

//activity 2 : practical closure
// task 03 : function that generates uniqueids, use the closure to keep track of the last genertaed id and increment it with each call

// function generateId(){
//     let lastId = 0;
//     return function(){
//         lastId++;
//         return `lastId : ${lastId}`
//     }
    
// }

// const ans = generateId()
// console.log(ans());
// console.log(ans());
// console.log(ans());

// task 04 : create a closure that captures a user name and return a fucntion that  that greet the user by name

// function Capture(userName){
    
//     return {
//         display : function(){
//             return userName
//         },
//         greet : function(){ 
//             return `welcome back ! ${userName}`
//         }
//     }
// }

// const result = Capture("john")
// console.log(result);
// console.log(result.display());
// console.log(result.greet());

//ativity 03 : closure in loops
//task 5 : write a loop that creates a array of functions .each function shiuld log its index when called .use closure to ensure each function logs the correct index

function arrayIndex(n){
    const array= [];

    for(let i=0; i<n ; i++){
        array.push(function(){
            console.log(`array index is : ${i}`);
        })
    }

    return array;
}

// const result = arrayIndex(5);
// result.forEach((func) => func() )


//activity 5 : module pattern
//task 06 : use closure to create simple module for managing colleciton of items. impementmethods to add,remove and list itmes

function createItem(){
    const items = [];

    return {
        AddItem: function(item){
            items.push(item)
        },
        removeItem : function(item){
            const index = items.indexOf(item);
            if(index > -1){
                items.splice(index, 1);
            }
        },
        list : function(){
            return [...items];
        }
        
    }
}

// const res = createItem();
// res.AddItem(10)
// res.AddItem(20)
// res.AddItem("marks")
// console.log(res.list());
// res.removeItem(10);
// console.log(res.list());

//activity 5: memoixation : 
//task 08 : function that memoizes the result of another function useclosure to store the result of previous computations
function memoize(fn) {
    const cache = {}; // Object to store cached results

    return function(arg) {
        if (cache[arg]) {
            console.log('Fetching from cache');
            return cache[arg];
        }

        const result = fn(arg);
        cache[arg] = result;
        console.log('Computing result');
        return result;
    };
}

// Simple factorial function
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Call the memoized function
console.log(memoizedFactorial(5)); // Computing result, then 120
console.log(memoizedFactorial(5)); // Fetching from cache, then 120
console.log(memoizedFactorial(6)); // Computing result, then 720

/*
function memoize(fn) {

Definition: This line defines a function named memoize that takes a single argument fn. The argument fn is expected to be a function that you want to memoize (i.e., cache its results).
const cache = {};

Initialization: Inside the memoize function, an empty object cache is created. This object will be used to store the results of function calls, using the function's arguments as keys.
return function(arg) {

Return Statement: The memoize function returns a new function that takes an argument arg. This returned function is the memoized version of the original function fn.
if (cache[arg]) {

Cache Check: This line checks if cache[arg] exists. It means checking if the result for the given argument arg is already in the cache. If it is, it indicates that the result has been computed before and is stored in the cache.
console.log('Fetching from cache');

Logging: If the result is found in the cache, this line logs a message indicating that the result is being fetched from the cache.
return cache[arg];

Return Cached Result: If the result is in the cache, this line returns the cached result, avoiding the need to recompute it.
const result = fn(arg);

Compute Result: If the result is not found in the cache, this line computes the result by calling the original function fn with the argument arg.
cache[arg] = result;

Store in Cache: After computing the result, this line stores the result in the cache object with arg as the key. This ensures that the result will be available in the future for the same argument.
console.log('Computing result');

Logging: This line logs a message indicating that the result is being computed, which helps you track when the cache is actually being used versus when new results are computed.
return result;

Return Computed Result: Finally, the computed result is returned from the memoized function.
*/