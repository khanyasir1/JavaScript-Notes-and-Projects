// **********************ARRAY ************************
// ---------------------------------------------
// The Array object, as with arrays in other programming languages,
// enables storing a collection of multiple items under a single variable name
// js array are resizable and can contain mix of different data types
// JavaScript arrays are not associative arrays //can be accessed using index number only
// JavaScript arrays are zero-indexed
// JavaScript array-copy operations create ***shallow copies***
// --------------------------------------

// ***********SHALLOW COPY (IT IS STORED IN HEAP ) (actual reference of object is changed) *******************
// ----------------------------
// A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
// as those of the source object from which the copy was made.
//  As a result, when you change either the source or the copy, 
//  you may also cause the other object to change too.
// ---------------------------------

// const myArr = [0, 1 , 2 , 3 , 4 , 5  ]
// console.log(myArr); 

const arr = ["yaman", "yas", "aatik", 1 , true ]
// console.log(arr);

const newArray = new Array( 0 , 1 , 2 , 3 , 4 , 5 )
// console.log(newArray);
// console.log(newArray[0]);

//----------********* array methods *********------

const myArr = [0, 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ]
// console.log(myArr);
// ------length method----
// console.log(myArr.length); //length of array

// ----  push ------
// console.log(myArr.push(99));//added element to array at the end of array
// console.log(myArr);

// -------pop -------------------- 
// console.log(myArr.pop());//removed last element from array
// console.log(myArr.length);
// console.log(myArr);



// --------------******************unshift() method ********************------------
// -------------------------------
// The unshift() method of Array instances adds the specified elements 
// to the beginning of an array and returns the new length of the array.
//---example---->>   unshift() method is best to use in the todo list app
// console.log(myArr.unshift(11));
// console.log(myArr.length);
// console.log(myArr);

// console.log(myArr.unshift(99));
// console.log(myArr);
// console.log(myArr.length);
// ----------------------------




// ********************shift() method ********************
// -------------------------
//Removes the first element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr.shift(99));
// console.log(myArr);

// console.log(myArr.shift());
// console.log(myArr);
// -----------------------------


// console.log(myArr.includes(5));
// console.log(myArr.indexOf(1));



// const joinArr = myArr.join()
// console.log(myArr);
// console.log(joinArr);




// **********SLICE() & SPLICE OPERATION*************
// $$$$$$$$$$$$$$$$$$$$$$$$ -------------- INTERVIEW QUESTION HAI ---------- $$$$$$$$$$$$$$$$44





//slicing
// console.log("Array A : " , myArr);

const slicing = myArr.slice(0,3)// only 0 to 2 insdex wale   array present honge in the original array
// console.log("after slicing : " , slicing);






//splice



// console.log("Array B :" , myArr );

const splicing = myArr.splice(0,3) //array element 0 to 3 index wale sare remove ho gayenge realarray se

// console.log("Array C :" , myArr );
// console.log("after splicing : " , splicing );


