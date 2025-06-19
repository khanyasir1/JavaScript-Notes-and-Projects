const array1 = [ 1, 2 , 3 ,4 ,5]

const initialValue = 0
const js = array1.reduce( (accumulator, currenValue)=> accumulator + currenValue , initialValue )
console.log(js);

const aa= array1.reduce( (acc, val) => {
    console.log(`acc = ${acc}, val = ${val}`);
  return  acc + val 
}, 0  )

console.log(aa);