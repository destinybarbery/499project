
        // firebase config
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
        

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




        //references

        const email = document.getElementById('emailInp');
        const pass = document.getElementById('passInp');
        const submit = document.getElementById('sub_btn');

        //authentication process

        function AuthenticateUser()
        {
            const emailData = email.value
            const passData = pass.value
            signInWithEmailAndPassword(auth,emailData,passData)
            .then((userCredential) =>
            {
                const userData = userCredential.userData;
                console.log("logged in");
                window.location = "index.html"
            });

        }

        //decryption process
        function decPass()
        {
            var pass12 = CryptoJS.AES.decrypt(dbPass, pass.value);
            return pass12.toString(CryptoJS.enc.Utf8);
        }

        //login

        function login(user)
        {
            let keepLoggedIn = document.getElementById('customSwitch1').checked;

            if(!keepLoggedIn)
            {
                sessionStorage.setItem('user', JSON.stringify(user));
                window.location = "index.html";
            }
            else
            {
                localStorage.setItem('keepLoggedIn', 'yes');
                localStorage.setItem('user',JSON.stringify(user));
                window.location = 'index.html';
            }
        }

        submit.addEventListener('click', AuthenticateUser);
        

