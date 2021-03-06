const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("save-button");
const finalScore = document.getElementById("FinalScore");
const mostRecentScore = localStorage.getItem("mostRecentscore");






import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

const firebaseConfig = 
{
   apiKey: "AIzaSyCsi7k_Qf_Rubmx5fmQnXmP1eGosKqYbEA",
   authDomain: "quizapp-d375c.firebaseapp.com",
   databaseURL: "https://quizapp-d375c-default-rtdb.firebaseio.com",
    projectId: "quizapp-d375c",
    storageBucket: "quizapp-d375c.appspot.com",
    messagingSenderId: "102216189713",
    appId: "1:102216189713:web:3ee38fb0f5c3c5b9b7eeb0"
}

//init firebase
initializeApp(firebaseConfig)

//init database services
const db = getFirestore()

//reference firestore database
const collectionRef = collection(db, 'hunterScores')


finalScore.innerText = mostRecentScore;
//username.addEventListener("keyup", () => {
    //saveScoreBtn.disabled = !username.ariaValueMax;
//});

saveScoreBtn.addEventListener("click",saveHighScore)

function saveHighScore(e)  
{
    console.log("clicked the save button!");
    e.preventDefault();

    addDoc(collectionRef,{
        mode: "hunter",
        name: username.value,
        score: mostRecentScore
    })
    .then(() =>{
        console.log("score successfully saved")
        //window.location("scores.html")
    })


//const score = {
    //score: Math.floor(Math.random() * 100),
   // name: username.value
//};
//highScores.push(score)
//highScores.sort((a,b) => b.score - a.score)
//highScores.splice(5);
//localStorage.setItem("highScore", JSON.stringify(highScores));
//window.location.assign("/");
};

