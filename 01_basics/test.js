// console.log("mohammed yasir")
// console.log("mohammed yasir")
// console.log("mohammed yasir")
// console.log("mohammed yasir")

// const a = Symbol("password123")

// const stu_id = {
//     name : "yasir",
//     surname : "khan",
//     age :18,
//     [a] : "password5",
//     last : ["monday", "tuesday"]
// }
// console.log(stu_id["name"]);
// console.log(stu_id["age"]);
// console.log(stu_id[a]);
// console.log(stu_id["last"]);
// Object.freeze(stu_id)
// stu_id["age"] = 25
// console.log(stu_id["age"]);



const school = {
    name : " convent school",
    class : 10,
    location : "virar",
    state : "maharashtra",
    country : "india",
    address: {
        street: "ABC",
        pincode: 444555,
        area : "mumbai"
    }

}



function fetching({name,location,country}){
    const result = `my school name is ${name} and location is ${location} in the country : ${country}` 
    return result
}


console.log(fetching(school));

function add(a,b){
    const sum = a+b;
    const sub = a - b;
    const mul = a* b;
    const div = a/b;
    return [sum,sub,mul,div]
}

const [sum,sub,mul,div] = add(10,15)
console.log([sum,sub,mul,div]);