const student ={
username: "Mohammed aatik ",
father: "xyz khan",
password: "aatik@123",
fullname : function (){
      console.log(`full name is ${this.username} ,${this.father}`) 
      console.log(this);
}    

}
//this is used to show the current value of object with in the object only
// student.fullname()
// student.username = "aslam khan"
// student.father = "abdul kalam"
// student.fullname()

// student.this();

function showThis() {
  console.log(this);
}

// showThis(); // In non-strict mode, this will be the global object (window or global)
// In strict mode, this will be undefined



// console.log(this); // output => {} , bcz node mai koi global value nhi hai ,but agar yahi chrome mai run karenge to iska global value "window" hoga


function chai(){
    let name = "yasir "
    console.log(this.name);
}
// chai()

//this will work only in the objects......

const drink = function coffee(){
    let name = "abdul"
    // console.log(this.name);
}
// drink()

//---------------------------- arrows --------------------------------

const tea = () => {
  let name = "yasir"
  console.log(this);
}

// tea()

const add = (val1, val2) => {
  return val1 + val2
}
// console.log(add(3,3));

// -----------------------------    IMPLICIT RETURN ARROW     --------------------------------

//method-1
const addTwo = (value1, value2) => value1 + value2
// console.log(addTwo(50,70));

//method-2
const addThree = (v1, v2, v3) => ( v1 + v2 + v3 )
// console.log(addThree(30,40,30));

const object1 = () => ({name : "mohammed yasir"})
// console.log(object1());
// ---------------------------

const NewArray = [10,20,30,40,50,60]

NewArray.forEach( function () {}) //method-1 aese declare kar sakte hai
NewArray.forEach( () => {}) //method-2 aese declare kar sakte hai
// NewArray.forEach(() => ()) ; //method-3 aese declare kar sakte hai, but abhi error dera hai idk wh?


const Array1 = [10, 20, 30, 40, 50, 60];

Array1.forEach(function (element) {
    // Your code here
    console.log(element);
});


const Array2 = [10, 20, 30, 40, 50, 60];

Array2.forEach((element) => {
    // Your code here
    // console.log(element);
});

