let input  = document.querySelector('input');
let button = document.querySelector('.button1')
let display = document.getElementById('eyeIcon');
let result = document.querySelector('.one')


const password = function(){
    let GenPassword='';
    let number = '0123456789';
    let symbol ='!@#$%&*()*+,-./<>?';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCase= 'abcdefghijklmnopqrstuvwxyz';
    let all = number + symbol +  upperCase + lowerCase;
    

   for(let i=0 ;i<16 ;i++){
   const random= Math.floor(Math.random()*all.length);
   GenPassword +=all.charAt(random)
   }
    return GenPassword;
}

console.log(password());


button.addEventListener('click',function(e){
    input.value = password()
  
    
});

// input.addEventListener('click',function(e){
//    input.value = password() 
  
// })

display.addEventListener('click',function(e){
    if (input.type === 'password') {
        input.type = 'text';
       
        
       
    } else {
        input.type = 'password';
        if( result.innerHTML == input.value){
            result.remove()
        }
       
        
        
    }
})





