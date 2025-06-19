// --------------SINGLETON----------
// if agar constructor se banega to hamesha singleton banega
// object literal se singleton nhi banega

Object.create //is method ko ki constructer ke through banate hai object
//yhi singleton banata hai
// -----------------------------------

// --------------OBJECT LITERALS ------------------
// Q) hhow to add symbol to the object ???

let yas = Symbol('saud123')

const a = {
   [yas] : "yas-symbol",
   name : "yas",
   surname : "khan",
   location : {
    area : "vasai",
    street : "cr raja",
    building : "joshua"
   },
   marks : [10,20,30]
}

// console.log(a["name"]);
// console.log(a["location"]);
// console.log(a['marks']);
// console.log([yas]);

const mySymbol = Symbol("yasir123")

const user = {
    [mySymbol]: "yasir123",
    name : "yasir",
    age: 36,
    address: "vasai",
    student: true,
    email: "yasir@gmail.com",
    lastLogin:["monday","friday"],
    greeting : function(){
        return "hello " + this.name + "  your age is " +this.age ;
    }

} 

console.log(user.greeting());
console.log(user.name);  //not good practise
// console.log(user["email"]);
// console.log(user["age"]);
// console.log(user[mySymbol]);

user.name = " mohammed Yasir"
// console.log(user);

Object.freeze(user)
user.name = "abdul basit"
// console.log(user);

// user.greeting = function(){ 
    // console.log("hello yasir!!!!!");
// }
// console.log(user.greeting());

user.greeting2 = function(){
    console.log(`hello user , ${this.name}, your age is ${user.age}`);
}
// console.log(user.greeting2());
// console.log(user);