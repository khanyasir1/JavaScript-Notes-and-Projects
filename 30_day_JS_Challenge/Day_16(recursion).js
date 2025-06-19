// activity 01
//task 1 :write basic recursion for the factorial of number and log it
 function factorial(number){
    if(number === 0 || number ===1) return 1;
    return number *factorial(number -1)
}

// console.log(factorial(5));
// console.log(factorial(15));

//task 02 : fibonacci series 

function fibonacci(number){
    if(number === 0) return 0;
    if(number === 1) return 1;

    return fibonacci(number-1) + fibonacci(number -2)
}

// console.log(fibonacci(5));
// console.log(fibonacci(10));

//activity 02 : recusion with arrays
//task 03 : recursion to find sum of all elements in the array
function sumArray(arr, index=0){
    if(index >= arr.length) return 0;
    return arr[index] + sumArray(arr, index+1)
}
const arr= [10,20,30,40,50]
const arr2 = [20,50,99,30,40,99]
// console.log(sumArray(arr));
// console.log(sumArray(arr2));


//task 04: max element from the array

function maxElement(arr, index = 0){
    if(index === arr.length - 1){
        return arr[index];
    }

    const max = maxElement(arr, index+1);

    return arr[index] > max ? arr[index] : max;
}

const array = [10, 0, 20, 99, 40, 50]
// console.log(maxElement(array))

//activity 03 : String manipulation
//task 05 : reverse the string

function reverseString(string){
    if(string.length <=1){
        return string;
    }

    return (string.slice(1))+string[0]
}

const greet= "mohammed alqamah"
// console.log(reverseString(greet));

//task 06 : palindrome or not?
function palindrome(str){

    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    if(str.length <=1){
        return true;
    }

    if(str[0] === str[str.length - 1]){
        return palindrome(str.slice(1,-1))
        
        
    }else{
        return false;
    }
  
}

const testString1 = "A man, a plan, a canal, Panama";
const testString2 = "hello";

console.log(palindrome(testString1)); // Output: true
console.log(palindrome(testString2)); //

//task 07 : binary search on sorted array
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    // Base case: if the search range is invalid
    if (left > right) {
      return -1; // Target is not in the array
    }
  
    // Find the middle index
    const mid = Math.floor((left + right) / 2);
  
    // Check if the target is at the middle
    if (arr[mid] === target) {
      return mid;
    }
  
    // If the target is less than the middle element, search in the left half
    if (target < arr[mid]) {
      return binarySearch(arr, target, left, mid - 1);
    }
  
    // If the target is greater than the middle element, search in the right half
    return binarySearch(arr, target, mid + 1, right);
  }
  
  // Example usage
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const target = 15;
  
  console.log(binarySearch(sortedArray, target)); // Output: 7 (index of 15 in the array)
  
  
  
  //counting the occurences 
  function countOccurrences(arr, target, index = 0) {
    // Base case: if the index is out of the array bounds
    if (index >= arr.length) {
      return 0;
    }
  
    // Check if the current element is the target
    const isCurrentTarget = arr[index] === target ? 1 : 0;
  
    // Recursively count the occurrences in the rest of the array
    return isCurrentTarget + countOccurrences(arr, target, index + 1);
  }
  
  // Example usage
  const array1 = [1, 2, 3, 2, 4, 2, 5];
  const target1 = 2;
  
  console.log(countOccurrences(array1, target1)); // Output: 3
  