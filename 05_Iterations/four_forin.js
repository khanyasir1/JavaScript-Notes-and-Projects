



/*
In JavaScript, the term "enumerable properties" refers to the properties of an object that can be iterated over using a loop. An object property is considered enumerable if it can be accessed and processed in a specific order.

For...In Loop and Enumerable Properties:

The for...in loop is used to iterate over the enumerable properties of an object.
It works by looping through all the properties of an object, including its prototype chain.
It is often used to iterate over the keys or indices of an object.
----------------------------

Iterable:(for of loop)


An object is considered iterable if it defines an iteration protocol via the Symbol.iterator method.
Iterable objects can be looped over using constructs like the for...of loop.
Examples of iterable objects include arrays, strings, maps, sets, etc.

So, in summary:

- `for...of` is used for iterating over values of iterable objects.
- `for...in` is used for iterating over keys or indices of objects (including arrays).

*/

// 1) object :

const Employee = {
    personal_details : {
        name: "mister khan",
        surname : "khan",
        age:20
    },
    Educational_details : {
        school : "convent school",
        college : "Thakur college",
        degree_college: "VJTI college",
        duration : 4
    },
    salary : 40000,
    stipend :10000
    
}

for (const key in Employee) {
//    console.log(`employee key = ${key} and ${Employee[key]} `);
  
}
// console.log(Employee.Educational_details.college);
// console.log(Employee.personal_details.name);

// 2) array =>


let grade = ["A", "B", "C", "D", "E", "F"]

for (const key in grade) {
    // console.log(`index is ${key} and value is ${grade[key]}`);
  
}


// 3. map ->In the case of a Map, you should use the for...of loop or the forEach method to iterate over its entries

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Using for...in loop with Map
// console.log('Using for...in loop:');
for (const key in myMap) {
  console.log(key, myMap[key]); // This may not work as expected for Map
}
