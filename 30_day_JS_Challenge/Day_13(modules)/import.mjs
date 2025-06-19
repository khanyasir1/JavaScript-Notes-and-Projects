import {add, calculateCircleArea, calculateExponential} from './exporting.mjs'  //module javascript
import {person} from './exporting.mjs'//task 02
import {sub, mul, div} from './exporting.mjs'//task 03
import greeting from './exporting.mjs'//task 04


 
// console.log(add(10,15));

// console.log(person["address"]);
// console.log(person);
// person.greet()
// console.log(sub(10,15));
// console.log(mul(10,15));
// console.log(div(10,15).toFixed(2));
// console.log(greeting("mr khan"));

const radius = 10 ;
const value = 20
const area = calculateCircleArea(radius);
const exponentialValue = calculateExponential(value)

console.log(area);
console.log(exponentialValue.toFixed(2));
