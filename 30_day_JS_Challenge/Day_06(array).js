// Day 06
// Activity 01 : array creation and access 
// task 01 :create array of number from 1 to 5 and log the array
const array = [1,2,3,4,5]
console.log(array);

// task 02 : access the first and last elements of the array and log them to the console
console.log("first element : " + array[0] + "  " +" last element : " + array[array.length-1] );

// Activity 02 :Array methods (basic)
// task03 : use push method to add a new number to the end element of the array and log it
console.log(array.push(6));
console.log(array);

// task04 : use pop method to remove a last element from the array and log it
console.log(array.pop());
console.log(array);

// task05 : use shift method to remove  first element from  the array and log it
console.log(array.shift());
console.log(array);

// task06 : use unshift method to add a new number to the beginig of the array and log it
console.log(array.unshift(1));
console.log(array);

// activity 03 : array Methods(intermediate)
// task 07 : use the map method to create a new array where each number is doubled and log the new array
const doubleArray = array.map( (double) => {
    return double*2
})
console.log(doubleArray);

// task 08 : use the filter method to create a new array where even number  and log the new array
const filterArray = array.filter( (even) => {
    if(even % 2 === 0) return even
})
console.log(filterArray);

//task 09 : use the reduce method to calculate the sum of all numbers in the array and log the array
const reduceArray = array.reduce( (accumulator, currentValue) => accumulator + currentValue)
console.log(reduceArray);

// Activity 04 : Array iteration :
// task 10 : use a for loop to iterate over the array and log each element to the console
for(let i = 0; i <array.length; i++) {
    console.log(array[i]);
}

// task 11 : use thr foreach method to iterate over the array and log each element to the console
array.forEach(element => {
    console.log(element);
});
array.forEach((element, index) => {
    console.log(`Index: ${index}, Element: ${element}`);
});

// Activity 5 : Multi-dimensional Arrays 
// task 12 : create a two dimensional array(matrix) and log the entire array to console
const twoDimensionalArray = [
    [10, 20, 30, 41, 50],
    [60, 70, 80, 91, 100]
];

// console.log(twoDimensionalArray);


// task13 : access and log a specific element from the two-dimensional array
// console.log(twoDimensionalArray[1][4]);


let oddNumbers = []; // Initialize an empty array to store odd numbers

// Iterate through the twoDimensionalArray and store odd numbers
for (let i = 0; i < twoDimensionalArray.length; i++) {
    for (let j = 0; j < twoDimensionalArray[i].length; j++) {
        if (twoDimensionalArray[i][j] % 2 !== 0) {
            oddNumbers.push(twoDimensionalArray[i][j]); // Push odd number into the array
        }
    }
}

// Display the array of odd numbers
console.log(oddNumbers);

for (let i = 0; i < twoDimensionalArray.length; i++) {
    for (let j = 0; j < twoDimensionalArray[i].length; j++) {
        if (twoDimensionalArray[i][j] % 2 !== 0) {
            console.log((twoDimensionalArray[i][j])); // Push odd number into the array
        }
    }
}