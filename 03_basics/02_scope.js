// var a = 10 
// let b = 20 
// const c = 30 

let b = 100  //global scope

if(true){
    d = 5  //local scope
    var a = 20
    let b = 30
    const c = 30

    // console.log(`inner b : ${b}` );
    // console.log(`inner c : ${c} `);
}

// console.log(d);
// console.log(a);
// console.log(b);
// console.log(b); // error message
// console.log(c); // error message


function first(){
    const father = "masroor khan"

    function second(){
        const child = "yasir khan"
        console.log(father);
        console.log(child);
        
    }
    // console.log(child);  //out of scope is called , t should be called within the second() function
    // second();
} 
// console.log(father);
first()





if(true){
    const student = "Mohammed aatik"
    // console.log(student);

    if(student == "Mohammed aatik"){
        const surname = "khan"
        // console.log(student + " " + surname);
    }

}

// ************************************INTRESTING ********************************
//"mini hosting is going to used in 2nd example , in mini hosting we declare the function within the variable so ,we can call after the function only ""
 

//example 1
// console.log(addOne(10));

function addOne( number ){
    return number + 1
}

// console.log(addOne(20)); //it can be executed  before & after fuction decleration ,there will be no error


// save(1) //error message  -->ReferenceError: Cannot access 'save' before initialization
const save = function subTwo(money){

    return money - 2
}

// console.log(save(1)); // no-error
// console.log(save);


// arrow -> this -> object 
