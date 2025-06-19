

// let question = document.querySelector('#question');
// const answerButton = document.querySelector('#answer-button')
// const nextButton = document.querySelector(".next-btn")

//  const api = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";

// const requestInterval = 1000; 

// for (let i = 0; i < 1; i++) {
//     setTimeout(fetchData, i * requestInterval);
//   }


//   let currentQuestion = 0;
//   let score = 0;


// function fetchData(){

//     fetch(api)
    
//     .then((response) => {

//         if(!response.ok){
//             console.log(` ${response.status}`);
//             console.log(api);
//         }return response.json();
//     })

//     .then((data) => {

//        function startQuiz(){
//         currentQuestion = 0;
//         score = 0;
//         nextButton.innerHTML = "Next"
//        }

//          let string = " ";
//          let answer= " ";    
//         //  let correct = " " 


//     //    function(){
//     //     let currentQuestion = questions
//     //    }

// //  



//     string = `<p> ${data.results[0].question}</p>`;
//     // for (let i = 0; i < 4; i++) {
//        answer =  ` <button class="btn"><b>A</b>  ${data.results[0].incorrect_answers[0]} </button>
//         <button class="btn"><b>B  </b> ${data.results[0].incorrect_answers[1]}</button>
//         <button class="btn"><b>C</b> ${data.results[0].incorrect_answers[2] }</button>
//         <button class="btn"><b>D</b> ${data.results[0].correct_answer}</button>`

//         answerButton.addEventListener('click', function (e) {
//             if (e.target.textContent === data.results[0].correct_answer) {
//                 document.body.style.background = "#9757df";
//             }
//         });

//         const correctButton = document.createElement('button');
//         correctButton.innerHTML = ` ${data.results[0].correct_answer}`;
//         correctButton.classList.add("btn");
//         answerButton.appendChild(correctButton);
        
//         nextButton.addEventListener('click', function () {
//             currentQuestion++;
//             fetchData();
//         });
        

//         answerButton.addEventListener('click', function (e) {
//             const selectedButton = e.target;
//             if (selectedButton.textContent === data.results[0].correct_answer) {
//                 selectedButton.classList.add("correct");
//             } else {
//                 selectedButton.classList.add("incorrect");
//             }
//         });
        
       

//     // }
//     //    correct =  `<button class="btn"><b>D</b>   ${data.results[0].correct_answer }</button>`
//     // answer = ` ${i + 1}. ${data.results[i].incorrect_answers }`;


   
// //     string += `<p>${i + 1}. ${data.results[i].correct_answer }</p>`;


// // }
    

//         question.innerHTML = string;
//         answerButton.innerHTML = answer
//         console.log(data);
//     })


//     .catch((err) => {
//         console.log("Error 404");
//     })
// }


let question = document.querySelector('#question');
const answerButton = document.querySelector('#answer-button');
const nextButton = document.querySelector(".next-btn");

const api = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
let currentQuestion = 0;
let score = 0;

function fetchData() {
    fetch(api)
        .then((response) => {
            if (!response.ok) {
                console.log(` ${response.status}`);
                console.log(api);
            }
            return response.json();
        })
        .then((data) => {
            let string = " ";
            let answer = " ";

            string = `<p>${data.results[0].question}</p>`;
            answer = `<button class="btn" onclick="checkAnswer(this)"><b>A)</b> ${data.results[0].incorrect_answers[0]}</button>
                      <button class="btn" onclick="checkAnswer(this)"><b>B)</b> ${data.results[0].incorrect_answers[1]}</button>
                      <button class="btn" onclick="checkAnswer(this)"><b>C)</b> ${data.results[0].incorrect_answers[2]}</button>
                      <button class="btn" onclick="checkAnswer(this)"><b>D)</b> ${data.results[0].correct_answer}</button>`;

            answerButton.innerHTML = answer;
            question.innerHTML = string;

            nextButton.style.display = "none";
        })
        .catch((err) => {
            console.log("Error 404");
        });
}

function checkAnswer(selectedButton) {
    const correctAnswer = answerButton.querySelector('.btn:last-child');
    disableAllButtons();

    if (selectedButton.textContent === correctAnswer.textContent) {
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    correctAnswer.classList.add("correct");
    nextButton.style.display = "block";
}

function disableAllButtons() {
    const buttons = answerButton.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

nextButton.addEventListener('click', function () {
    currentQuestion++;
    fetchData();
});

// Initial fetch to start the quiz
fetchData();


