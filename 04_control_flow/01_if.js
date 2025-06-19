const price = 500
const loggedIn = true

//if condition
if(price > 400){
    // console.log("price is higher");
}


//case 2
if( loggedIn === 500 ) {
    // console.log("logged in"); //here datatype is different

}

if(loggedIn){
    if(price == 500){
        // console.log("done!!!!!!");
    }
}


const score = 1000

if (score > 50 ){
    let a = "half century"
    // console.log(`half score ${a}`);
}

if (score > 100){
    // console.log("go to next step...");
} else if (score >50){
    // console.log("futher go to next step...");
} else if (score > 70 ){
    // console.log("done with step ....");
}
else {
    // console.log("bye byee ....");
}
 

// -------- IMPLICIT METHOD -------
// we can display as many as element by seprating it by coma in the implicit function....
// BOT A GOOD PRACTISE N METHOD...
const goal = 2
// if(goal > 1) console.log("you won the match "),console.log("be prepared for next match...");
// -----------------------------

const phoneNumber = true 
const debitcard = true

if (phoneNumber && debitcard) {
    console.log("you can purchase the product");
}else if (phoneNumber || debitcard) {
    console.log("you can not purchase the product");
}
else {
    console.log("enter your phone number and debit card details here");
}