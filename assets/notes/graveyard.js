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
            mcEl.appendChild(choiceButton);
      }
}