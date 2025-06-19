/*
The forEach loop in JavaScript does not return anything. 
It is a method that performs an operation on each element of an array but does not generate a new array or any other value as a result.
The purpose of forEach is to iterate over the elements of an array
 and execute a provided callback function for each element. The callback function is called for each element in the array, 
 but the return values of the callback are ignored. 
 The primary use case is to perform some action for each element in the array.


 
The forEach method in JavaScript is used for iterating over the elements of an array.
 It provides a simple and concise way to perform an operation on each element of the array without the need for a traditional for loop.
  The main purpose of using forEach is to execute a provided function once for each array element.

Here are some key purposes and advantages of using forEach in JavaScript:

Concise Syntax:

forEach provides a more concise syntax compared to a traditional for loop, making the code cleaner and easier to read.
Callback Function:

It takes a callback function as an argument, allowing you to define the logic to be executed for each element.
No Need for Manual Indexing:

You don't need to manually manage array indices; the forEach loop takes care of iterating over each element in the array.
Readability:

The code using forEach is often more readable and expressive than equivalent for loop code, especially when performing operations on each element.
Avoiding Common Loop Issues:

forEach can help avoid common issues like off-by-one errors and infinite loops that can occur in traditional for loops.
*/

const marks = [ 40,50,60,70]

//method -1 : using function -->callback function
marks.forEach( function (number) { 
    // console.log(number);
})


//method -2 :using arrow function -->callback
marks.forEach(  (item) => {
// console.log(`item is ${item}`);
})


//method - 3  : calling another function in the for each loop

function Marks(item){
    console.log(`marks of students are ${item}`);
}

// marks.forEach( Marks)

marks.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
//    console.log(`student detail = > ${item} ,${index} , ${arr} `);
})

const student  = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

const detail = student.forEach( (item) => {
        console.log(item.languageFileName);
        console.log(item.languageName);
})
console.log(detail);


/*
forEach loop iterates over each element of the "item" array and logs each element to the console. 
The forEach loop itself does not produce any value or modify the original array.
 If you need to transform the array or produce a new array based on the elements, 
 you might use other array methods like map, filter, or reduce.
 */