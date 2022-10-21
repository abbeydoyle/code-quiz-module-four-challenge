var scores = document.querySelector("#scores");
var timerEl = document.querySelector("#timer");
var highscores = document.querySelector("#highscores");
var questionsEL = document.querySelector("#questions");
var startButton = document.querySelector("#button");
var mcEl = document.querySelector("#mc-container");
var startPage = document.querySelector("#start-page");
var questionEl = document.querySelector("#question-container");
var thanksEl = document.querySelector("#thanks");
var resultEl = document.querySelector("#result");
var quizEl = document.querySelector("#card");
var index=0;
var timer;

// have this dependent on number of questions
var time = 60;

timerEl.textContent = time;



function startQuiz() {
     
      cycleQuestions(0);
      startPage.style.display = 'none';
      thanksEl.style.display = 'none';
      timer = setInterval(countdown, 1000);
      timerEl.textContent = time
}



// go back and randomize questions
function cycleQuestions(index) {
      console.log("index = ", index);
      questionEl.textContent = questions[index].question;
      var currentQuestion = questions[index];
      mcEl.innerHTML = "";
      for (i = 0; i < currentQuestion.mc.length; i++) {
            const choices = currentQuestion.mc[i];
            console.log(choices, "sup");
            const choiceButton = document.createElement("button");
            choiceButton.textContent = choices;
            choiceButton.onclick = userChoice;
            mcEl.appendChild(choiceButton);
      }
}







function userChoice() {
     // if choiceButton.value

     var currentQuestion = questions[index];
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

     if (index === 4) {
      stopQuiz();
     }
     else {
      index++;
      cycleQuestions(index);
     }
}





function stopQuiz() {
      clearInterval(timer);
      thanksEl.style.display = "block";
      quizEl.style.display = 'none';

}





function countdown() {
      time--;
      timerEl.textContent = time;
      if (time <=0) {
            stopQuiz();
      }
}


startButton.addEventListener("click", startQuiz);