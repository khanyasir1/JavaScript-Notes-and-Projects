// advance concept in array

// -------------------------------
/*
Array.from is used to create an array from an iterable or array-like Object

Purpose: It creates a new shallow-copied array from an iterable object (like an array-like object or iterable, such as a set, map, string, etc.).
The Array.from method in JavaScript is used to create a new, shallow-copied array instance from an array-like or iterable object.
 This method is particularly useful when you want to convert array-like objects (such as NodeLists, arguments objects, or other iterable objects) into true arrays.


Array.of is used to create an array with the specified elements.
Purpose: It creates a new array from the provided arguments, regardless of the number or type of arguments.
*/
const bollywood_heros = ["salman" , "shahruk", "imran"]
const hollywood_heros = ["rock" , "arnold" , "tom-cruse"]

// we can add both array by "push" and "concate" method

// bollywood_heros.push(hollywood_heros)
// console.log(bollywood_heros);
// console.log(bollywood_heros[3][1]);// not good practise

//-----drawback of using this method is that we can add only one array to in this method 
const newArr = bollywood_heros.concat(hollywood_heros)
// console.log(newArr);




//***************** - --- - - - spread method ---> ek glass hai usko drop kiya to spread hogayega means tukde tukde hogayega
//best way to add the array here we can add multiple arrays


const spread_array = [...hollywood_heros , ...bollywood_heros]
// console.log(spread_array);

const array_in_array = [1, 2, 3, [ 4, 5, 6], 7,[8 ,7 ,[ 2, 3]]]

const a = [10,[11,22,33,[44,55,66,77]], 20 ,[50,60,],70,[60,70,[78,89,[10,10]]]];

// console.log(aaaa);
const b = a.flat(Infinity);
// console.log(b);

const all_in_array  = array_in_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(all_in_array);

// console.log(Array.isArray("yasir"))

const arr = [1, 2, 3];
// console.log(Array.isArray(arr)); // true


// console.log(Array.from("yaman"));
// console.log(Array.from({name : "aatik"}));  //imp for interview

console.log(Array.from({ 0:"one", 1:"two", length :2}));

// Example with arguments object
function toArray() {
  return Array.from(arguments);
}

const arr1 = toArray(1, 2, 3);
// console.log(arr1); // Output: [1, 2, 3]

function  aa(){
  return Array.from(arguments)
}
const xx = aa(10,20,30)
// console.log(xx);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
  ]);
//  console.log(Array.from(mapper.values())); 
  // ['a', 'b'];
  
  // console.log(Array.from(mapper.keys()));
  // ['1', '2'];


  //------practise --------
  // const a =["helloyasir", " i am thied year student"]
  // const b = ["i am from theem college student","i am from vasai"]

  // const c= [...a,...b];
  // // console.log(c);

  // const d = [ 1,2,3,[4,5,6,77,[44,55,66]]]
  // const ex = d.flat(isFinite(0,))
  // console.log(ex);


  /*

  Array.of is used to create a new array from individual elements, 
  while Array.from is used to create a new array from an iterable or array-like object, with an optional mapping function.

 => 1.   Array.of:

The Array.of method is used to create a new array from a variable number of arguments,
 treating each argument as an element of the new array. It ensures that the resulting value is always an array,
  regardless of the number or types of arguments passed to it.

  const newArray = Array.of(1, 2, 3, "four", [5, 6]);
  console.log(newArray);
  Output: [1, 2, 3, "four", [5, 6]]



  => 2. Array.from:

The Array.from method is used to create a new array from an iterable or array-like object.
 It takes a second optional mapping function as an argument, allowing you to modify the elements during the creation of the new array.
  */
  // difference between array.of //((it isused to create the array using given data ))        and array.from