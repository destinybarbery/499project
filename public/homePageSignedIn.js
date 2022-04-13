// firebase config
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
        

        const firebaseConfig = {
          apiKey: "AIzaSyCsi7k_Qf_Rubmx5fmQnXmP1eGosKqYbEA",
          authDomain: "quizapp-d375c.firebaseapp.com",
          databaseURL: "https://quizapp-d375c-default-rtdb.firebaseio.com",
          projectId: "quizapp-d375c",
          storageBucket: "quizapp-d375c.appspot.com",
          messagingSenderId: "102216189713",
          appId: "1:102216189713:web:3ee38fb0f5c3c5b9b7eeb0"
        };
      
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



onAuthStateChanged(auth,(user)=>
{
    if(user)
    {

    }
    else
    {
        location.href = '/index.html';
    }
    console.log("user status changed: ", user)
})