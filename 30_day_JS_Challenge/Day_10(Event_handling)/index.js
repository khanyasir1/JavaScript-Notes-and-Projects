// activity 1 : basic event handling
//task 01 : click event to a button tht changes it context of paragraph
const p =document.querySelector('p')
const button = document.querySelector('button')
const image = document.querySelector('img')

button.addEventListener('click',function(){
    p.innerText = "after click : i am clicked" 
})

button.addEventListener( 'dblclick',function(){
    image.style.opacity = "0.5"
})

//activity 2 : mouse events 
//task 03 : add mouseover event listnerto element rthat changes background color
button.addEventListener('mouseover',function(){
    button.style.backgroundColor ="black"
    button.style.color = "white"
})

//task 04 : add mouseout event on the element
button.addEventListener('mouseout',function(){
    button.style.backgroundColor = "gray"
});


// keyboard event
//task 05 :addkeydown event listner to an input field that logs the pressed to the console
const input = document.querySelector('input')
input.addEventListener('keydown',function(e){
    console.log("keypressed : " ,e.key);
})

//task 07
const key = document.getElementById('keyup')
input.addEventListener('keyup',function(){
    key.textContent = input.value
})
//activity 5 : form events
//task 08 :add submit event listner to a form that prevents the default submissio and log the form data tothe console

const form = document.querySelector('form')
form.addEventListener('submit',function(e){
    console.log("clicked : " , e.target);
})

//selecting the drop down list
const dropdown = document.getElementById('dropdown');

    dropdown.addEventListener('change', function(event) {
        const selectedValue = event.target.value;
        console.log('Selected option value:', selectedValue);
    });

    const list = document.getElementById('list');


    //eventdelegation
    list.addEventListener('click', function(event) {
        // Check if the clicked element is a list item
        if (event.target.tagName === 'LI') {
            console.log('Text content of the clicked list item:', event.target.textContent);
        }
    });



    const child = document.getElementById('child');
    const addItemButton = document.getElementById('addItem');

    // Function to add a new item to the list
    function addItem() {
        const newItem = document.createElement('li');
        newItem.textContent = 'New Item ' + (child.children.length + 1);
        child.appendChild(newItem);
    }

    // Event listener for the parent element
    child.addEventListener('click', function(event) {
        // Check if the clicked element is an <li>
        if (event.target.tagName === 'LI') {
            console.log('Text content of the clicked list item:', event.target.textContent);
        }
    });

    // Event listener to add a new item when the button is clicked
    addItemButton.addEventListener('click', addItem);