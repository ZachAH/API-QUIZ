var questions1 = [
    {
        question:"What does parseInt argument do?",
        choices:["closes function", "Gives a Random Number", "Turns a string argument into an integer"],
        answer: "Turns a string argument into an interger"

    },

    {
        question: "What does DOM stand for?",
        choices:["Document Object Model", "Display or Move", "Document of Media"],
        answer: "Document Object Model"
    },

    {
        question: "Packers, Saints, Chiefs This is an example of What?" ,
        choices:["Array", "Function", "DOM"],
        answer: "Array"
    },

    {
        question: "<div> is an example of what type of element?",
        choices:["block level element", "inline element", "selector element"],
        answer: "block level element"
    }
];


var currentQuestionIndex = 0;
var time = questions1.length * 20;
var timerId;



var button = document.getElementById("BTN");
var firstQuestionsEl = document.getElementById("start");
var QuestionEl = document.getElementById("question");
var endQuestionsEl = document.getElementById("end");
var correctEl = document.getElementById("right-wrong");
var timerEl = document.getElementById("time");
var endButton = document.getElementById("submit");
var choicesEl = document.getElementById("new1");



function quizTime () {
    var startQuizEl =  document.getElementById("home-screen").style.display = "none";
    var startQuiz1El = document.getElementById("end").style.display = "none";
    
    timerId = setInterval(timeStart, 1000);

    timerEl.textContent = time;

    quizQuestions();

    

}


function quizQuestions () {
    var currentQuestion = questions1[currentQuestionIndex];
    var titleEl = document.getElementById("question");
    titleEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
     // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    choiceNode.onclick = question1;

    // display on the page
    choicesEl.appendChild(choiceNode);

  });
}

function question1() {
    // check if user guessed wrong
    if (this.value !== questions1[currentQuestionIndex].answer) {
      // penalize time
      time -= 25;
  
      if (time < 0) {
        time = 0;
      }
  
      // display new time on page
      timerEl.textContent = time;
  

      correctEl.textContent = "Wrong!";
    } else {

  
      correctEl.textContent = "Correct!";
    }
  
    // flash right/wrong feedback on page for half a second
    correctEl.setAttribute("class", "feedback");
    setTimeout(function() {
      correctEl.setAttribute("class", "feedback hide");
    }, 1000);
  
    // move to next question
    currentQuestionIndex++;
  
    // check if we've run out of questions
    if (currentQuestionIndex === questions1.length) {
      quizEnd();
    } else {
      quizQuestions();
    }
  }


function timeStart() {
    
    time--;
    timerEl.textContent = time;

}   

function quizEnd() {
    // stop timer
    clearInterval(timerId);
    var startQuizEl = document.getElementById("question").style.display = "none";
    var startQuizEl = document.getElementById("new1").style.display = "none";
    var startQuiz1El = document.getElementById("end").style.display = "";  
    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.textContent = time;

}   


button.onclick = quizTime;