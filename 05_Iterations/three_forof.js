/*
---------------------------------------------------------
there are also 3 different types of loops are usedin the js
1. forof
2.forin
3.foreach


So, in summary:

- `for...of` is used for iterating over values of iterable objects.
- `for...in` is used for iterating over keys or indices of objects (including arrays).


["" ,"" ,""]
[{},{},{}]
----------------------------------------------------------
*/

//  ----------------
//  1 >>>>>>> ********* for array ****************---

let array = [10,20,30,40,50,60,70]

for (const value of array) {
    // console.log(`${value} and ${array[value]}`);
    
}

for (const key in array) {
        // console.log(`value of array is : ${key} and ${array[key]}`);
    }



    // ----------------------------

// 2---- ***************for string****************** -----

const greeting = "hello yasir!"
//

for (const value of greeting) {
    // console.log(`value of greeeting is : ${value}`);
    
}

//forin loop is used here 
for (const value in greeting) {
    // console.log(`value of greeting is : ${value}`); // it will return keys(index numbers) of the array
    // console.log(`value of greeting is : ${greeting[value]}`); //it will return value of the array 
   
}

// -------------------
// 3  **************for MAP ****************

const map = new Map()
map.set("a",10)
map.set("b",20)
map.set("c",30)
map.set("d",40)
map.set("IN", "India")

console.log(map);

/*
// METHOD -1
for (const key of map) {
    console.log(`key of map is : ${key}`);/// IT WILL WRITTERN BOTH
    console.log(key); // WHOLEMAP 
}

*/


// ----------for mapping in the javascript we use key and value concept--
for (const [key, value] of map) { //desructuring is done here
    console.log(`key of map is : ${key} - > ${value} `);//write the key and value seprately, can be accessed both using it
}


// -------------------------------Q) IMPORTANT NOTE :-
// *********************** WE CANNOT USE FOROF FOR ITERATION OF ELEMENT FROM THE OBJECT************ 


