const auto = new Date()
// console.log(auto);
// console.log(new Date());

const myDate = new Date()

// console.log(`type of date is ${typeof(myDate)}`);

/*
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.getFullYear());
console.log(myDate.getMonth()+1);
console.log(myDate.getDate());
*/

// const ownDate = new Date(2023,0,27)
// const ownDate = new Date(2023,0,27,10,12)
// const ownDate = new Date(2023,0,27,10,12,50,25)

const ownDate = new Date("2023-11-09")
// const ownDate = new Date("11-09-2023")
// console.log(ownDate.toLocaleString());


const myTimeStamp = Date.now()

// console.log(myTimeStamp);//------[yeh hame mili second mai time dega]----
// console.log(ownDate.getTime());


// -----***********if we want time in secons then we will divide it by 1000*************------------
// console.log(Math.floor(Date.now()/1000));

const yasDate = new Date()
// console.log(yasDate);
// console.log(yasDate.getMonth()+1);
// console.log(yasDate.getDay());
// console.log(yasDate.getHours());
// console.log(yasDate.getMinutes());


 console.log(yasDate.toLocaleString('default',{
    weekday:"long"  
    
}));

 console.log(yasDate.toLocaleString('default',{
    weekday:"long",
    month:"long",
    "day": "2-digit"
   
}));