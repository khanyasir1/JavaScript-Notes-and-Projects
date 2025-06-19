const name = "mohammmed yasir "
const age = 18 
// -------------------------------------------------------
/*------THIS IS AN OUTDATED METHOD TO WRITE STRING ------*/
// console.log(name + " " + age + "is isyour current age and name");

/*------CURRENTLY WE ARE USING THE "----STRING INTERPOLATION---" METHOD*/
//{{{{"HERE WE MAKE A PLACEHOLDER WHERE WE INJECT THE VALUES OF THE VARIABLES"}}}} 
// -----------------------------------------------------------


// ---------****MODERN SYNTAX ********--------



// ------------
// method -1   "----STRING INTERPOLATION---"
// ------------
// console.log(`my name is ${name} and i am ${age} year old student...  `);



// -----------
// method-2     "----string object -------"
// --------------

const newStudent = new String("aatik-khan")
// console.log(newStudent);
// console.log(newStudent[0]); //key , value pair accessing
// console.log(newStudent.__proto__); //Deprecated: This feature is no longer recommended. Though some browsers might still support it,
// //                                     // it may have already been removed from the relevant web standards
// console.log(newStudent.toUpperCase());
// console.log(newStudent.toLowerCase());
// console.log(newStudent.endsWith('khan'));
// console.log(newStudent.indexOf('an')); //index will be displayed
// console.log(newStudent.charAt(6));// character will be displayed


const student1 = newStudent.slice(0,4)
// console.log(newStudent.slice(0,5));
console.log(student1);


const a = new String("yasir khan")
const b = a.substring(0,7)
// console.log(b);
// console.table([b]);

const student33 = newStudent.substring(0,7)
console.log(student33);

const trimStudent = "     yaman khan    "
// console.log( trimStudent );
// console.log( trimStudent.trim() );


const replaceStudent = "https://helloyasir.com/student%20yasir"
// console.log(replaceStudent.replace('%20' ,'-'));
// console.log(replaceStudent.includes('helloyasir'));//contains yasir
// console.log(replaceStudent.includes('khan'));//replace student does not included or have the khan word in it's string

const new1 = "hello+yasie-welcome-back"

// -----"syntax of the split"
// split(separator)
// split(separator, limit)

// console.log(new1.split('-'));
// console.log(new1.split('+'));

/*
In JavaScript, `splice` and `slice` are array methods used to manipulate and extract elements from arrays. They serve different purposes and have distinct behaviors.

### 1. `splice`

**Purpose:**
- `splice` is used to add or remove elements from an array at a specific index.

**Syntax:**
```javascript
array.splice(start, deleteCount, item1, item2, ...)
```

- `start`: The index at which to start changing the array.
- `deleteCount`: The number of elements to remove (optional).
- `item1, item2, ...`: Items to add to the array (optional).

**Characteristics:**
- Modifies the original array.
- Returns an array containing the removed elements.

**Example:**

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];

// Remove 1 element at index 1
let removed = fruits.splice(1, 1);

console.log(fruits); // Output: ['Apple', 'Cherry']
console.log(removed); // Output: ['Banana']

// Add 'Mango' and 'Pineapple' at index 1
fruits.splice(1, 0, 'Mango', 'Pineapple');

console.log(fruits); // Output: ['Apple', 'Mango', 'Pineapple', 'Cherry']
```
/*
### 2. `slice`

**Purpose:**
- `slice` is used to create a shallow copy of a portion of an array into a new array object.

**Syntax:**
```javascript
array.slice(start, end)
```

- `start`: The index at which to start the extraction.
- `end`: The index at which to end the extraction (not included).

**Characteristics:**
- Does not modify the original array.
- Returns a new array containing the extracted elements.

**Example:**

```javascript
let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig'];

// Extract elements from index 1 to 3 (excluding index 3)
let sliced = fruits.slice(1, 3);

console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date', 'Fig']
console.log(sliced); // Output: ['Banana', 'Cherry']
```

### Summary:

- **`splice`**: Modifies the original array. Use it to add or remove elements at specific positions.
- **`slice`**: Creates a new array without modifying the original. Use it to extract portions of an array.

Each method has its use case depending on whether you need to modify the original array or simply create a new array from a part of the existing one.
*/