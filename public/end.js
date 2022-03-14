const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem(highScores)) || [];
const MAX_HIGH_SCORES = 5;


finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.ariaValueMax;
});



saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();


const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
};
highScores.push(score)
highScores.sort((a,b) => b.score - a.score)
highScores.splice(5);
localStorage.setItem("highScore", JSON.stringify(highScores));
window.location.assign("/");
};

