// Day  04 : Loops

// task 1
/*
for(let i=1 ; i<=10 ; i++){
    console.log(i);
}

// task2
for(let i=1 ; i<=10 ; i++){
    console.log(5*i);
}

//While loop
// task 03
let i = 1
while(i<=10){
    console.log(i);
    i++
}

// task 04
let j=10
while(j>=1){
    console.log(j);
    j--
}
*/

// Activity 03  : do... while loop
// task 5
// let number = 1
// do {
//     console.log(number);
//     number += 1;
// } while (number <= 5);


// task 06
let num = 5;
let fact = 1  
let k = 1  
do {
    fact *= k;
    k++
} while (k <=num);
console.log(`factorial of ${num} is : ${fact}`);

//Activity 4
// task7
let number = 5
for(let i=1; i<=number; i++){
    let row =''
    for(let j=1; j<=i; j++){
       row +='*'
    }
    console.log(row);
}

for(let i=1; i<=10; i++){
    if(i == 5) continue
    else console.log(i)
}
for(let i=1; i<=10; i++){
    if(i == 7) break
    else console.log(i)
}

