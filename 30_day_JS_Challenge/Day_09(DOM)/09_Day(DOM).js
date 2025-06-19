// Activity 01 : selecting and manipulating  elements
//task 01: select html element from id and change its content
const id= document.getElementById('id');
id.textContent =" hello mohammed"
console.log(id.innerText);

//rask 02 : select html element from class and change its background color
const change_color = document.querySelector('h2')
change_color.style.backgroundColor = "pink"

//ACTIVITY 02 : CREATING AND aPPENDING ELEMENTS
//TASK03 : CREATE new div element and with some text content and append it to the body

const div = document.createElement('div');

div.style.fontSize = "10px";
div.style.padding= "20px"
div.style.border ="1px solid"
const content = document.createTextNode("adding new content to the body ")
document.body.append(content)

//task 04 : create a new li element and add it to an existing ul list
const ul = document.querySelector('ul')
console.log(ul.innerText); 

const li = document.createElement('li');
const li2 = document.createTextNode("added the new list to the ul tag...")

li.append(li2)

document.querySelector('ul').appendChild(li)

//Activity 03 : Removing element


//task 05 : remove the html element and remove it from the dom
const h1 =document.querySelector('h1');
h1.addEventListener('click', () => {
    h1.remove()
})

//task 06: remove the last child of a specific html element
const rem = document.querySelector('ul')
rem.addEventListener('click', (e) => {
    e.preventDefault()
    const last = rem.lastElementChild
    if(last){
          last.remove()
    }
  
})

//Activity : 04  :Modifying attributes and classes
// task 07 : select html element and change one of ts attributes like src of img tag
const img = document.querySelector('img')
img.style.height ="50px"
img.setAttribute('src', 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg')

//task 08 : add and remove a css class to from the html element
// change_color.style.backgroundColor = ''

//Activity : event handling :
//task 09 :  add a click event listner tobutton thatchanges a text content of a paragraph
const p = document.querySelector('p')
const button = document.querySelector('button')
button.style.cursor = 'pointer'
button.addEventListener('click',function(){
    p.innerText ="text is changed after clicking the button"
})

button.addEventListener('mouseover', function() {
    button.style.border = "5px solid red";
});

button.addEventListener('mouseout', function() {
    button.style.border = "";
});

button.addEventListener('click', function() {
    button.style.border = "2px solid blue"; // Different color or style on click
});