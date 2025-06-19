const car = [10 , 20 ,30 ,40 ]
const gst = 5000;


const model = car.map( (num) => num+10)
console.log(model);

const pricce = car.map( (price) => {
return price + gst
})
console.log(pricce);


//map chaining example--------
const CarCost = car.map( (val) => val +10).map( (val)=> val *10 ).filter( (val)=> val >=30)
console.log(CarCost);