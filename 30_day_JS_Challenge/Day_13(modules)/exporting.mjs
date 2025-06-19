//activity 01
//task 1: create a module that export function to add two numbers and import and use in another module
export function add(a,b){
    return a + b;
}

//task 02 : create a module that export an object represnting a person with properties and methods import and use this module in another script
export const person = {
    name: 'John',
    age: 34,
    address :'kalyan',
    greet : function(){
        console.log("hello " + this.name );
    }
}

//activity 02 : named and defualt exports
//task 03 : create module that exports multiple functions using named exports .import and ue these functions in another script

export function sub(a,b){
    return a-b;
}

export function mul(a,b){
    return a*b;
}

export function div(a,b){
    return a/b;
};

//task 04 : cretae a module that exports single functon usingdefault export .import and use this function inanother script

export default function greeting(greet){
    return "hello sir, " + greet;
}

//activity 3 : importing entire modules
//task 05 : create module that exports multiple constants and functions .import the entire module as an objectin another script and use its properties
export const PI = 3.14
export const E = 2.718

export function calculateCircleArea(radius){
    return PI * radius*radius
}


export function calculateExponential(value){
    return E**value
}

//activity04 : using third party modules
//task 6 : install third party modules (eg loadsh)using npm import and use a function from this module in another script
// Importing the lodash module using ES module syntax
import _ from 'lodash';

// Using a function from lodash
// const array = [1, 2, 3, 4, 5];
// const shuffledArray = _.shuffle(array);

// console.log('Original array:', array);
// console.log('Shuffled array:', shuffledArray);
