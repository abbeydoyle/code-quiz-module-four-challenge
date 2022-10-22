//global variables
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");


var currentQuestionIndex = 0;
var time = questions.length * 15;
var time = 120;
var timerId;


// start quiz
function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // display questions section
  questionsEl.removeAttribute("class");

  // stimer
  timerId = setInterval(clockTick, 1500);
  timerEl.textContent = time;

  getQuestion();

  // function check
  console.log(time);
}

// quiz questions
function getQuestion() {

  // display first question
  var currentQuestion = questions[currentQuestionIndex];

  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // removes old mc elements
  choicesEl.innerHTML = "";

  // cycle through questions
  currentQuestion.choices.forEach(function(choice, i) {

    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ") " + choice;

    choiceNode.onclick = questionClick;

    choicesEl.appendChild(choiceNode);
  });
}

// reponsive mc
function questionClick() {
  // wrong guess
  if (this.value !== questions[currentQuestionIndex].answer) {

    time -= 5;

    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Sorry </3";
    feedbackEl.style.color = "var(--waterloo)";
    feedbackEl.style.fontSize = "1.5rem";
  } 

  // correct guess
  else {
    feedbackEl.textContent = "Hell yeah!";
    feedbackEl.style.color = "var(--sage)";
    feedbackEl.style.fontSize = "1.5rem";
  }

  // remove feedback element after 1s
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // next question
  currentQuestionIndex++;

  // timer
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

// end quiz
function quizEnd() {
  // clear timer
  clearInterval(timerId);

  // thanks for playing
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // final score
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // remove questions
  questionsEl.setAttribute("class", "hide");
}

// timer
function clockTick() {
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}


// add high score to local storage
function saveHighscore() {
  // user input initials
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    // pull from local storage
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // new score to not overwrite old input
    var newScore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // highscores page
    window.location.href = "./assets/highscores.html";
  }
}

// save high score in local storage with keydown
function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// call functions
submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;