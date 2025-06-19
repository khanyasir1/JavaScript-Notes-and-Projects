// Activity 01 : use template to create string thaht includes cariables for a person name and age and log it
//template literal :  emplate literals allow for embedded expressions and multi-line strings.
 
const name = "theem college of engineering"
const age = `18`

console.log(name);
console.log(age); 


// task 02 : cretae multiline string using template literals and log it 
const message = ` college name is ${name} 
and age is : ${age}`;console.log(message);

// Activity 02 : Destruturing 
// task 03 : use array destructing to extract the first and second from an array of numbers and log

const  [first_college_name, second_college_name]= ["theem college", "vartak college"] 
console.log(first_college_name, second_college_name);

const college = {
    name : "theem college of engineering",
    type: "degree",
    state : "Maharashtra",
    address : {
        location : "betegaon",
        pincode : "40120202",
        district : "palghar"
    }
}



const  {address : current_location  } = college
console.log(current_location);


// Activity  03 : spread operator and rest operators
//task 5 : use spreadoperator to create new array that inculdes all the elements of existing array plus new element and log it
const girls = [1,2,3,4,5]
const boys = [5,6,7,8,9]
const total = [...girls, ...boys,10,20,30]
console.log(total);

// rest operator : function havingrestoperatorthat takes the arbitary value and sum them and log the result
//task -6
function add(...number){
    return number.reduce( ( acc , curr) => acc+ curr)
}

console.log(add(1,2,3,4,5));

//default parameters
// task 07 :write function that takes two parameters and returns theirproduct,with the second paramter having a default value of 1. logthe result calling the function and without second parameter

function product(first, second = 1){
    return first * second
}
console.log(product(10,));

//Activity 05 : enhanced object literals : 
// task 07: write enhanced object literls to create an object with methods andproperties, and log the result

const car = {
    brand : "BWM",
    model : "BMW-800",
    year : 2022,
    startEngine() {
        console.log("engine is atrting....");
    },
    stopEngine(){
        console.log("engine is stopping....");
    },
    getCarInfo(){
       return `car brand is : ${this.brand} and model is : ${this.model} year : ${this.year}`;
    }
}

console.log(car.getCarInfo());



//task 08 : write enhanced object with computed property names based on variable and log it

