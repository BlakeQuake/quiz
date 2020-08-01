document.querySelector("#startBtn").addEventListener("click", startQuiz);
var intro = document.querySelector("#intro");
var quizDiv = document.querySelector("#quiz");
var highScores = document.querySelector("#highScores")
var questions = [
    {
        question: "What color is the sky?",
        answers: ['green', 'red', 'yellow', 'blue'],
        correct: 'blue',
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
var userAnswer = [];
var score = 0;
var visable = true;  

function renderQuestion() 
{
    quizDiv.innerHTML=""
    intro.style = "display:none";
    var h2 = document.createElement("h2");
    h2.textContent = questions[currentQuestion].question;
    quizDiv.appendChild(h2)
    for (var i = 0; i < questions[currentQuestion].answers.length; i++)
    {
        var btn = document.createElement("button")
        btn.textContent = questions[currentQuestion].answers[i];
        btn.addEventListener("click", validateAnswer);
        quizDiv.appendChild(btn);
        

        
        function validateAnswer()
        {
            var message = document.getElementById("message")
                if (this.textContent === questions[currentQuestion].correct)
                {
                    quiz.style = "display:none";
                    message.textContent = "Correct";
                    setInterval(function(){message.style = "display:none"; },1000);
                    score++
                }
                else 
                {
                    quiz.style = "display:none";
                    message.textContent = "wrong";
                    setInterval(function(){message.style = "display:none"; },1000);
                }
                currentQuestion++
                renderQuestion()
        }
    }
}
//////////////// START QUIZ ///////////////////
function startQuiz() 
{   
    renderQuestion()

    var startButton = document.querySelector("#startBtn")
        startButton.addEventListener("click", startQuiz)
    

//////////////////// TIMER FUNCTION /////////////////////  

        var myVar = setInterval(function(){ myTimer() }, 1000);
        var secondlimit = 60;

        function myTimer() 
        {
        if(secondlimit == 0)
            {
            myStopFunction();
            }

        document.getElementById("time").innerHTML = '00:' + zeroPad(secondlimit,2);
        secondlimit = secondlimit  - 1;
        }

        function myStopFunction() 
        {
            clearInterval(myVar);
        }

        function zeroPad(num, places) 
        {
        var zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join("0") + num;
        }
}