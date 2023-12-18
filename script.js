const questions= [
    {
        question: "which is larget animal in the world?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffee", correct: false},
        ]
    },


    {
        question: "which is the largest country in the world?",
        answers:[
            {text: "USA", correct: false},
            {text: "Russia", correct: true},
            {text: "China", correct: false},
            {text: "India", correct: false},
        ]
    },
    
    {
        question: "which is the largest bird in the world?",
        answers:[
            {text: "Ostrich", correct: true},
            {text: "Eagle", correct: false},
            {text: "Parrot", correct: false},
            {text: "Crow", correct: false},
        ]
    },

    {
        question: "which is the largest ocean in the world?",
        answers:[
            {text: "Atlantic", correct: false},
            {text: "Indian", correct: false},
            {text: "Pacific", correct: true},
            {text: "Arctic", correct: false},
        ]
    }
];

const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo+ ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}


function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();