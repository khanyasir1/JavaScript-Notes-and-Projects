function addNumber(number1, number2){
    return number1 + number2;
}

addNumber // reference hai yeh
console.log(addNumber(50,50));
// const a = addNumber(2,3) //execution hai yeh ,fuction ko call kiya hai to usko sore bhi karna hota hai warna display kaise hoga,isliye isko variable mai store kiya hai ya phir console mai simply print kardo warna yeh display nhi hoga
// console.log(a);

function printName(name){
 return `my name is : ${name}`;
}

// console.log(printName(null));
// console.log(printName(""));
// console.log(printName());
// console.log(printName("yasir"));


function multiply(num1 , num2){
    let result = num1 * num2;
    return result

}

const result = multiply(10, 20)
// console.log(result);



function logged(studentname){
    if(studentname === undefined) //method-1
    {
        console.log("enter the student name");
        return
    }
    if(!studentname){  //method 2
        console.log("please enter the name");
        return
    }
    return `${studentname} student logged in successfully!!!`
}

// console.log(logged());
// console.log(logged("aṇbdul basit"));

// Certainly! Here's a tabular representation of the possibilities for falsy values in the provided example:
/*

| Falsy Value         | Example                                | Condition `if (!studentname)` |
|---------------------|----------------------------------------|-------------------------------|
| `undefined`         | `let studentname;`                     | True                          |
| `null`              | `let studentname = null;`              | True                          |
| Empty String (`""`) | `let studentname = "";`                | True                          |
| Number `0`          | `let studentname = 0;`                 | True                          |
| `NaN`               | `let studentname = NaN;`               | True                          |
| Boolean `false`     | `let studentname = false;`             | True                          |
| Other Falsy Values  | `let studentname = someFalsyValue;`    | True                          |
| Truthy Values       | `let studentname = "abcd";`            | False                         |
|                     | `let studentname = 123;`               | False                         |
|                     | `let studentname = true;`              | False                         |
|                     | `let studentname = [1, 2, 3];`         | False                         |
|                     | `let studentname = { name: "John" };` | False                         |

The condition `if (!studentname)` will be true if `studentname` is any of the listed falsy values, and false otherwise.
*/

// ...xyz // isko ko hi rest operator and spread operator bolte hai 

function addCart(...item){  //  >>>>>>>>>>>>>>>>>>>  rest operator and spread operator
    if(item.length == 10){
        return "Cart is full ..."
    }
    return item
}
//  console.log(addCart(200,500,600,800,5000,102245,210,350,800));


// -------------->>>    // Q)interview question......
function addCartValue(val1, val2, ...item){
    return item
}

// val1 =200 , val2 =500 remaining in the ...item
// console.log(addCartValue(200,500,600,800));



//using array in the functions 

const myArray = [100,200,300,400,500]

function array(getArray){
return getArray[1]
}

console.log(array(myArray));
// console.log(array([100,89400,300,400,500]));


//practice

// const b = [10,100,1000,20,30,5000,1789]

// function arr(arr1){
//     return arr1[3]
// }

// console.log(arr([10,20,30,40]));
// // console.log(arr(b));