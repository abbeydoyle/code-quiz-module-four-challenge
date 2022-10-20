var scores = document.querySelector("#scores");
var timer = document.querySelector("#timer");
var highscores = document.querySelector("#highscores");
//var questionsEL = document.querySelector("#question");
var startButton = document.querySelector("#button");
<<<<<<< HEAD
var mcEl = document.querySelector("#mc-container");
var startPage = document.querySelector("#start-page");
var questionEl = document.querySelector("#question-container");
var thanksEl = document.querySelector("#thanks");
var resultEl = document.querySelector("#result");

var timerStart;

// have this dependent on number of questions
var time = 60;

//timerEl = time;

var currentQuestionIndex = 0;

=======
var questionsContainer = document.querySelector(".questions-container");
var mcEl = document.querySelector("#mc");
>>>>>>> parent of 055bbc0 (work on js question loop, timer, no storage. userchoice error)



function startQuiz() {
     
<<<<<<< HEAD
      //cycleQuestions(0);
      startPage.style.display = 'none';
      thanksEl.style.display = 'none';
      timerStart = setInterval(countdown, 1000);
      timerEl.textContent = time;
      cycleQuestions();
=======
      cycleQuestions(0);

>>>>>>> parent of 055bbc0 (work on js question loop, timer, no storage. userchoice error)
}



<<<<<<< HEAD
// go back and randomize questions
function cycleQuestions() {
      var currentQuestion = questions[currentQuestionIndex];
      questionEl.textContent = currentQuestionIndex.question;
      mcEl.innerHTML = "";
      currentQuestion.mc.forEach(function(choice, i) {
            console.log(choices, "sup");
            var choiceButton = document.createElement("button");
            choiceButton.onclick = userChoice;
=======
function cycleQuestions(index) {
      let questionTag = document.createElement("p");
      questionTag.textContent = questions[index].question;
      questionsContainer.appendChild(questionTag);
      let currentQuestion = questions[index];
      for (let i = 0; i < currentQuestion.mc.length; i++) {
            const choices = currentQuestion.mc[i];
            console.log(choices, "sup");
            const choiceButton = document.createElement("button");
            choiceButton.textContent = choices;
>>>>>>> parent of 055bbc0 (work on js question loop, timer, no storage. userchoice error)
            mcEl.appendChild(choiceButton);

      });
      




      //questionEl.textContent = questions[index].question;
      //var currentQuestion = questions[index];
      //mcEl.innerHTML = "";
      // for (i = 0; i < currentQuestion.mc.length; i++) {
      //       const choices = currentQuestion.mc[i];
      //       console.log(choices, "sup");
      //       const choiceButton = document.createElement("button");
      //       choiceButton.textContent = choices;
      //       choiceButton.onclick = userChoice;
      //       mcEl.appendChild(choiceButton);
      // }
}








startButton.addEventListener("click", startQuiz);