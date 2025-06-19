const buttons = document.querySelectorAll('.button')
// console.log(buttons);

const body = document.querySelector('body')
console.log(body);

buttons.forEach(function (button) {
    console.log(button);

    button.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === "black"){
            body.style.backgroundColor = "#212121";
            body.style.color ="#fff"
            
        }

        if(e.target.id === "white"){
            body.style.color="#212121"
            body.style.backgroundColor = "#fff"
        }

        if(e.target.id === "orange"){
            body.style.backgroundColor = "#ffa600";
        }

        if(e.target.id === "green"){
            body.style.backgroundColor ="#adff2f"
        }
    })

   
});

// const boody = document.querySelector("body");


// const change = document.querySelectorAll(".button")
// console.log(change);

// change.forEach(   function (e){
 

// e.addEventListener("click",function(e){
//     console.log(e);

//     console.log(e.target);
//     boody.style.backgroundColor ="#212121"
//     boody.style.color = "white"
// })



// })