// local storage to highscores page
function printHighscores() {
      //pull from local storage
      var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
      // sort highscores
      highscores.sort(function(a, b) {
        return b.score - a.score;
      });
    
      highscores.forEach(function(score) {
        // append input to page
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;
    
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
      });
}
 
// clear out local storage with user input
function clearHighscores() {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}
    
document.getElementById("clear").onclick = clearHighscores;
    
printHighscores();