
const image = document.querySelector('.image')
image.addEventListener('click',function(){
    console.log("yasir");

    const reqUrl = "https://api.github.com/users/hiteshchoudhary"

    const xhr = new XMLHttpRequest();
    xhr.open('GET', reqUrl);
     
    
        xhr.onreadystatechange = function() {
            try{
                console.log(xhr.readyState);
            }catch(e){
                console.log(e);
            }
       
    
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
           const image =  data.avatar_url
            console.log(image);

            const img = document.createElement('img')
           img.src = data.avatar_url
            document.body.appendChild(img)
        }


}

   xhr.send();
})



const bio = document.querySelector('.bio')
bio.addEventListener('click',function(){
    console.log("yasir");

    const reqUrl = "https://api.github.com/users/hiteshchoudhary"

    const xht = new XMLHttpRequest();
    xht.open('GET', reqUrl);
     
    
        xht.onreadystatechange = function() {
        console.log(xht.readyState);
    
        if (xht.readyState === 4 && xht.status === 200) {
            const data = JSON.parse(xht.responseText);
            console.log(data);
            console.log(data.bio);

            const bio = document.createElement('bio');
            bio.innerHTML= data.bio
            document.body.appendChild(bio);
           

            
            
        }


}

   xht.send();
})


// const reqUrl = "https://api.github.com/users/hiteshchoudhary"

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', reqUrl);
     
    
//         xhr.onreadystatechange = function() {
//         console.log(xhr.readyState);

//     if(xhr.readyState === 4){
//        const data = JSON.parse(this.responseText)
//         console.log(data);
//         console.log(data.followers);
//     }

// }

//    xhr.send();
