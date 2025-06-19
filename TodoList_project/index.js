const todo = document.querySelector('.container');
console.log(todo);
const content = document.querySelector('#content');
const input = document.querySelector("#new-task");
const buttons = document.querySelector("#add-task-btn");
const output = document.querySelector('#result');

buttons.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target.innerHTML);

    if(input.value.trim() === '') {
        alert("enter the task");
        return;
    }

    let string = input.value;
    let timestamp = new Date().toDateString(); // Get current time
    
    let itemSet = document.createElement('li');
    itemSet.textContent = `${string}  ${'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}${timestamp}`;
    
    // Create and append cross button
    let crossBtn = document.createElement('span');
    crossBtn.className = 'cross-btn';
    crossBtn.innerHTML = '❌';
    crossBtn.addEventListener('click', function() {
        itemSet.remove();
    });

    itemSet.appendChild(crossBtn);
    output.appendChild(itemSet);

    input.value = '';

    // Removes the task after one day
    setTimeout(function() {
        itemSet.remove();
    }, 86400000);
});

output.addEventListener('click', function(e) {
    e.preventDefault();
    
    let tasks = output.getElementsByTagName('li');
    if (tasks.length > 0) {
        tasks[tasks.length - 1].remove();
    }
});
