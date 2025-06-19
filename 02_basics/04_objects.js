//how to make it singleton and how to use constructer to make it


// ----------singleton -----
 const tenderUser = new Object() //**method-1** to declare object
//***it is """singleton object""" 
// ---------------------



// ------ not singleton --------

const tinderUser = {} //**method-2** to declare object
 tinderUser.id = "1223-yasir"
 tinderUser.name ="mohammed yaman"
 tinderUser.student = true
 tinderUser.age = 18

// console.log(tinderUser);

const regularUser = {
    email: "yasir@gmail.com",
    fullname: {
            username: "yasir",
            lastname : "khan",
            middlename: "masroor",
            address: {
                town : "vasai",
                street: "cr road",
                pincode: 401201
            }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.phoneNumber = "1234567890")
// console.log(regularUser);
// console.log(regularUser.fullname.address.pincode);

const obj1 = {
    1: "a",
    2: "b",
    3: "c"
}

const obj2 = {
    4:"d",
    5:"e",
    6:"f"
}

//  const merge1 = obj1.concat(obj2); // not allowed
//  console.log(merge1);
const merge = {...obj1, ...obj2} //  allowed
// console.log(merge);

// const obj3 = {obj1 , obj2} // object ke ander object will be created

// ------merging the object (assign , spread function) --------------------------------
const obj3 = Object.assign( {}, obj1, obj2) //merging of two objects
console.log(obj3);


//we are going to use it more
const obj4 = {...obj1, ...obj2}
// console.log(obj4);

// --- when data is coming  from the database -----

const database = [{
    id: "1",
    name:"abdul"
},
{
    id: "2",    
    name: "basit"
}
]

console.log(database[0].id);
console.log(database[1].name.toUpperCase());

console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));
console.log(tinderUser.hasOwnProperty('branch'));
console.log(tinderUser.valueOf());

// const tinderUser = {} //**method-2** to declare object
//  tinderUser.id = "1223-yasir"
//  tinderUser.name ="mohammed yaman"
//  tinderUser.student = true
//  tinderUser.age = 18