document.querySelector("#startBtn").addEventListener("click", startQuiz);
var intro = document.querySelector("#intro");
var quizDiv = document.querySelector("#quiz");
var questions = [
    {
        question: "What color is the sky?",
        answers: ['green', 'red', 'yellow', 'blue'],
        correct: 'blue'
    },
    {
        question: "What sound does a dog make?",
        answers: ['chirp', 'bark', 'meow', 'mooo'],
        correct: 'bark'
    },
    {
        question: "What city is the Laker team in?",
        answers: ['LA', 'SD', 'NY', 'Canada'],
        correct: 'LA'
    }
]

//question index variable keeps track of the current question
var currentQuestion = 0;

//start quiz function
function startQuiz() {
    intro.style = "display:none";
    var h2 = document.createElement("h2");
    h2.textContent = questions[currentQuestion].question;
    quizDiv.appendChild(h2)
    for (var i = 0; i < questions[currentQuestion].answers.length; i++){
        var btn = document.createElement("button")
        btn.textContent = questions[currentQuestion].answers[i];
        quizDiv.appendChild(btn)
    }
}