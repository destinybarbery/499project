
    // firebase config
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";

    

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

    import {getDatabase,ref,set,child,get}
        from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
    const db = getDatabase();
    
     //references

    const email = document.getElementById('emailInp');
    const username = document.getElementById('userInp');
    const pass = document.getElementById('passInp');
    const submit = document.getElementById('sub_btn');

    //validation

    function isEmptyOrSpaces(str)
    {
        return str == null || str.match(/^ *$/) !== null;
    }

    function Validation()
    {
        let emailRegex = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
        let userNameRegex = /^[a-zA-Z0-9]{1,16}$/;
        if(isEmptyOrSpaces(username.value) || isEmptyOrSpaces(email.value)
        || isEmptyOrSpaces(pass.value))
        {
            alert("You cannot leave any field empty!");
            return false;
        }
        if(!emailRegex.test(email.value))
        {
            alert("Not a valid email!");
            return false;
        }

        if(!userNameRegex.test(userNameRegex.value))
        {
            alert("The username you have chosen is not valid!");
            return false;
        }

        return true;

    }

    //register user to firebase

    function RegisterUser()
    {
        if(Validation){
        const emailData = email.value
        const passData = pass.value
        createUserWithEmailAndPassword(auth,emailData,passData)
        .then((userCredential) =>
        {
            const userData = userCredential.userData;
            console.log("create acc")
            window.location = 'loginPage.html';
        })
        .catch((error)=>
        {
            const errorCode = error.code;
            const errorMessage = error.Message;
            console.log(errorCode+errorMessage)
        });
    }}

    //password encryption

    function encPass()
    {
        var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
        return pass12.toString();
    }

    //assigning the events

    submit.addEventListener('click',RegisterUser);

