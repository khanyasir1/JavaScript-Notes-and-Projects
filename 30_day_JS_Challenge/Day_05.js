// task 01
//FUNCTION DECLARATION
function check(number){
    if(number % 2 == 0){
        console.log("even number: " + number);
    }else{
        console.log("odd number: " + number);
    }
}

check(133);

// task 02

function square(number){
    const logic = number *number
    console.log(logic);

}

square(12);
//FUNCTION EXPRESSION
//task 03

const sum = function add(first, second){
    const sum = first + second
    console.log(sum);
}
sum(12,20);

// task 04
const StringConnector = function(first, second){
    console.log(`${first} ${second}`)
}
StringConnector("mohammed ", "khan")

//ARROW FUNCTIONS
// task 05
const Sum = (num1, num2) => console.log(num1 + num2);
Sum(120,20);

//task 06

const specialCharacter = (str) => {
    const specialchar = /[#$%^&*()!<>?;@|]/g
    return specialchar.test(str)
}

const testString1 = "hello world!@#$"
const testString2 ="hello world"

console.log(specialCharacter(testString1));
console.log(specialCharacter(testString2));

//FUNCTION PARAMTERS AND DEFAULT VALUES

// task 07
const product = (first, second = 10) => {
    const add = first + second
    console.log(add);
    return add
}
product(10,)

// task 08
const greet = function greting(name, age=0){
    console.log(`GREETING : ${name} and your default age is ${age}` )
    }

const message = (greet) => {
    return greet
}

message(greet("abdul",) )


// high order functions 
// task 09

function high(func,time){
    for(let i=0; i<time; i++){
        func()
    }
}

function greett(){
    console.log("hello user");
}
high(greett , 5)



//task 10 

function result(func1, func2, value){
    const result1 = func1(value)
    const finalResult = func2(result1)
    return finalResult
}

function double(x){
    return x*2
}

function square(x){
    return x*x;
}

const value = 5;

const final = result(double,square,value)
console.log(final);