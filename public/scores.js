
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
const collectionRef = collection(db, 'scores')

getDocs(collectionRef)
    .then((snapshot)=> {
        let scores = []
        snapshot.docs.forEach((doc) =>
        {
            scores.push({ ...doc.data(), id: doc.id })
        })
        console.log(scores)
    }) 
    .catch(err =>
        {
            console.log(err.message)
        })