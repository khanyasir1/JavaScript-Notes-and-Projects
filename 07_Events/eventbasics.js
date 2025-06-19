//there are 3 approaches for solving the event problem in the interview
// 1.we can directly add onclick event in the html tag => worst practice
/*   <li><img src="yasirAatik.jpg" id="aatik" width="200" alt="aatik bhai" onclick="alert('yes, i am aatik')"></li> */


// 2.using the event directly for the given task
        // document.getElementById('tree').onclick = function(){
        //     alert('images clicked')
        // }

        // 3-METHOD using the add event listner
        // const images = document.getElementById('kalpesh')    
        // images.addEventListener('click', function(e){
        //  alert('yasir')
        // },false)


// ********ToPIC TO BE LEARN FROM DOCUMENTATION*****
// type, timestamp,preventDefault
// target, toElement, srcElement, currentTarget
// clientX, clientY ,screenX, screenY, 
// altkey, ctrlkey, shiftkey, keyCode

//attachevent
//jQuery



// const images = document.getElementById('images')
// images.addEventListener('click', function(e){
//     // console.log(e.target);
    
//     console.log(e.target.parentNode);
//     if(e.target.tagName == 'IMG'){

//         console.log(e.target.tagName);
//         let remove = e.target.parentNode
//         remove.remove()
//         e.preventDefault()
//     } 
   
//     e.stopPropagation()
// },false)



const ss = document.getElementById('dom')

ss.addEventListener('click', function(e){
    console.log(e.target.parentNode);

    if(e.target.tagName == 'IMG'){
        let rem = e.target.parentNode
 rem.remove();
 e.preventDefault()
    }
    e.stopPropagation()
},false);

//********************event propogation ==> Bubbling Phase:

/*  */
 document.getElementById('images').addEventListener('click', function(e){
    console.log("Image clicked");
},false);


document.getElementById('irfan').addEventListener('click',function(e){
 console.log("irfan is clicked");
},false);



//********************event propogation ==> Capturing Phase: top to bottom
// /*
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("Image clicked");
// },true);


// document.getElementById('irfan').addEventListener('click',function(e){
//  console.log("irfan is clicked");
// },true);

