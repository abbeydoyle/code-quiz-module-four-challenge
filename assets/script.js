var scores = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var highscores = document.querySelector("#highscores");
//var questionsEL = document.querySelector("#question");
var startButton = document.querySelector("#button");
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




function startQuiz() {
     
      //cycleQuestions(0);
      startPage.style.display = 'none';
      thanksEl.style.display = 'none';
      timerStart = setInterval(countdown, 1000);
      timerEl.textContent = time;
      cycleQuestions();
}



// go back and randomize questions
function cycleQuestions() {
      var currentQuestion = questions[currentQuestionIndex];
      questionEl.textContent = currentQuestionIndex.question;
      mcEl.innerHTML = "";
      currentQuestion.mc.forEach(function(choice, i) {
            console.log(choices, "sup");
            var choiceButton = document.createElement("button");
            choiceButton.onclick = userChoice;
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







function userChoice() {
     // if choiceButton.value
     if (this.value !==  currentQuestion.answer[i]) {
      time -= 5
      if (time<0) {
            time = 0;
      }
      timerEl.textContent = time;
      resultEl.textContent = "sorry </3";
     }
     else {
      resultEl.textContent = "hell yeah";
     }

     currentQuestion++;

     if (currentQuestion.length === 0) {
      stopQuiz;
     }
     else {
      cycleQuestions();
     }
}





function stopQuiz() {
      clearInterval(countdown);

}





function countdown() {
      time--;
      timerEl.textContent = time;
      if (time <=0) {
            stopQuiz;
      }
}


startButton.addEventListener("click", startQuiz);