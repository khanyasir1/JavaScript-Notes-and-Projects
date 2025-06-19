// const form = document.querySelector('form')
// console.log(form);

// form.addEventListener('submit', function(e){
//     e.preventDefault();
// 22
//     const height = parseInt(document.querySelector('#height').value)
//     const weight = parseInt(document.querySelector('#weight').value)
//     const result = document.querySelector('#result');


// if(height === '' || height < 0 || isNaN(height)){
//     result.innerHTML = 'Enter a valid height '
// }
// else if(weight === '' || weight < 0 || isNaN(weight)){
//     result.innerHTML = 'Enter a valid weight ';
// }
// else{
//     const BMI = (weight / (height * height / 10000) ).toFixed( 2 );

//     // shows the result
//     result.innerHTML = ` Your BMI is :<span>${BMI}</span>`
// }
// })



const form = document.querySelector('form')
console.log(form);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
console.log(height);
const weight = parseInt(document.querySelector('#weight').value)
console.log(weight);
const result = document.querySelector('#result');
console.log(result.innerHTML);

  
    if(height === '' || height < 0 || isNaN(height)){
        console.log("Enter a valid height");
        
        result.innerHTML = "entera valid height"
    }else if(weight === '' || weight< 0 || isNaN(weight) ){
        console.log("enter a valid weight");
        result.innerHTML = "enter avalid weight"
    }else{
        const BMI = (weight /(height * height /10000)).toFixed(2)
        console.log(BMI.toString());
        result.innerHTML = `${BMI}`
    }
   
   
})


