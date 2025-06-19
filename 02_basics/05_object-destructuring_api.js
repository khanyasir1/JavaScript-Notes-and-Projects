const tcs = {
    company : "tcs",
    owner: "ratan tata",
    location: "mumbai",
    stock: "tata-stock"
}

// console.log(tcs.location); // normal method
console.log(tcs["location"]);   //better method

// destructruing in the object
    
const {owner: own} = tcs

// console.log(owner);
console.log(own);

const {stock : trading}=tcs
// console.log(stock);


const student = {
    name : "xyz",
    age : 19,
    full_naam : {
        first_name : "xyz",
        last_name: "shaikh",
        middle_name : "father"

    },
    address : {
        town : "mumbai",
        street :  "mohammed ali road",
    }
}

const {name : naam} = student
 const {full_naam : Naam} = student
 console.log(Naam);
console.log(student.address.town);


