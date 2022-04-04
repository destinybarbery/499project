
const highScoresList = document.getElementById('highScoresList')
let scores = []


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getFirestore, where, onSnapshot, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";


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
const collectionRef = collection(db, 'scores')

//query
const q = query(collectionRef, orderBy('score','desc'))


onSnapshot(q,(snapshot)=>
{
    let scores = []
    snapshot.docs.forEach((doc) =>
    {
        scores.push({...doc.data(), id: doc.id })
    })
    buildTable(scores)
    console.log(scores)
})



        //console.log(scores)
    

function buildTable(data)
{
    var table = document.getElementById('myTable')
    for(var i = 0;i<data.length;i++)
    { 
        var temp = i+1;
        var row = `<tr>
            <td>${temp}</td>
            <td>${data[i].name}</td>
            <td>${data[i].score}</td>
        </tr>`
        
        
        
        table.innerHTML += row
        console.log("table created")
    }
}


