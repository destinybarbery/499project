const startButton = document.getElementById("start-button")
const nextButton = document.getElementById("next-button")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById('question')
let shuffledQuestions, currentQuestionIndex
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreText = document.getElementById('score');
let TEMPPOINTS = 5;
const startingTime = 5; //for some UNKNOWN reason this shit refuses to change from 15 seconds
let time = startingTime; 
const countdownElement = document.getElementById('countdown')


let score = 0;


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click",()=>{
    currentQuestionIndex++
    setNextQuestion()
})



// Starts the game
function startGame()
{
    console.log("Game Started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5); //randomly selects a question from array of questions
    currentQuestionIndex = 20;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();

}

function setNextQuestion()
{
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question)
{
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("button")
        if(answer.correct)
        {
            button.dataset.correct = answer.correct

        }
        button.addEventListener("click",selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState()
{
    resetTimer();
    clearStatusClass(document.body)
    nextButton.classList.add("hide");
    while(answerButtonsElement.firstChild)
    {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct;
    setStatusClass(document.body, isCorrect)
    Array.from(answerButtonsElement.children).forEach(button =>
        {
        setStatusClass(button, button.dataset.correct)
        })
    scoreCounter(-(5+time));
    if(shuffledQuestions.length > currentQuestionIndex+1)
    {
        nextButton.classList.remove("hide")
    }
    else
    {

        console.log("this is score")
        location.href = '/end.html';
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
        //sessionStorage.setItem("mostRecentScore", score);
        
        localStorage.setItem("mostRecentscore", score)
        console.log(localStorage.getItem("mostRecentscore"));
    }
     //same as below
    
}

function setStatusClass(element, isCorrect)
{   if(isCorrect)
    {
        scoreCounter(TEMPPOINTS+time); //this is a temporary formula, will tweak whenever
    }
    {
        element.classList.add("correct")

    }
    clearStatusClass(element)
    if(isCorrect)
    {
        element.classList.add("correct")

    }
    else
    {
        element.classList.add("wrong")
        
    }
}

function clearStatusClass(element)
{
    element.classList.remove("correct")
    element.classList.remove("wrong")
}


const questions =
[
    {
          //1
        question: "How many teeth does a dog have?",
        answers: [
            { text: '28', correct: true },
            { text: "29", correct: false }, 
            { text: '32', correct: false },
            { text: "12", correct: false }
        ]
    },
        //2
    {
        question: "What European country has 158 verses to its anthem?",
        answers: [
            { text: "Germany", correct: false }, 
            { text: "Ireland", correct: false },
            { text: "Monaco", correct: false }, 
            { text: "Greece", correct: true }
        ]
    },
        //3
    {
        question: "What is the oddest name of a town located in norway?",
        answers: [
            { text: "Normal", correct: false }, 
            { text: "Ireland", correct: false },
            { text: "Monaco", correct: false }, 
            { text: "Greece", correct: true }
        ]
    },
        //4
    {
        question: "What food could turn your skin color orange throughout your body?",
        answers: [
            { text: "Cantaloupe", correct: false }, 
            { text: "Butternut squash", correct: false },
            { text: "Carrots", correct: true }, 
            { text: "Sweet potatoes", correct: false }
        ]
    },
        //5
    {
        question: "How fast was the first person ever convicted of speeding?",
        answers: [
            { text: "13 mph", correct: false }, 
            { text: "8 mph", correct: true },
            { text: "70 mph", correct: false }, 
            { text: "85 mph", correct: false }
        ]
    },
        //6
    {
        question: "On Sunday what is illegal to sell in Columbus, Ohio?",
        answers: [
            { text: "Cornflakes", correct: true }, 
            { text: "Apples", correct: false },
            { text: "Red meat", correct: false }, 
            { text: "Orange juice", correct: false }
        ]
    },
        //7
    {
        question: "On Sunday what is illegal to sell in Columbus, Ohio?",
        answers: [
            { text: "Cornflakes", correct: true }, 
            { text: "Apples", correct: false },
            { text: "Red meat ", correct: false }, 
            { text: "Orange juice", correct: false }
        ]
    },
        //8
    {
        question: "Who said 'Champagne should be dry, cold and free'?",
        answers: [
            { text: "JFK", correct: false }, 
            { text: "Joseph Stalin", correct: false },
            { text: "Winstom Churchill", correct: true }, 
            { text: "MLK", correct: false }
        ]
    },
        //9
    {
        question: " What sport has been played on the moon?",
        answers: [
            { text: "Tennis", correct: false }, 
            { text: "Golf", correct: true },
            { text: "Ping Pong", correct: false }, 
            { text: "Basketball", correct: false }
        ]
    },
        //10
    {
        question: " What sport has been played onFrom which country do French fries originate?",
        answers: [
            { text: "France", correct: false }, 
            { text: "Switzerland", correct: false },
            { text: "Italy", correct: false }, 
            { text: "Belgium", correct: true }
        ]
    },
        //11
    {
        question: "The average person does what thirteen times a day?",
        answers: [
            { text: "Smiles", correct: false }, 
            { text: "Crys", correct: false },
            { text: "Laughs", correct: true }, 
            { text: "Frowns", correct: false }
        ]
    },
        //12
    {
        question: "What is 'cynophobia?",
        answers: [
            { text: "fear of dogs", correct: true }, 
            { text: "fear of trains", correct: false },
            { text: "fear of cynics", correct: false }, 
            { text: "fear of cantelope", correct: false }
        ]
    },
        //13
    {
        question: "How many questions are written by right to left?",
        answers: [
            { text: "15", correct: false }, 
            { text: "4", correct: false },
            { text: "12", correct: true }, 
            { text: "8", correct: false }
        ]
    },
        //14
    {
        question: "What animal can be seen on the Porsche logo?",
        answers: [
            { text: "Lion", correct: false }, 
            { text: "Ram", correct: false },
            { text: "Tiger", correct: false }, 
            { text: "Horse", correct: true }
        ]
    },
         //15
        {
         question: "What is the rarest M&M color?",
         answers: [
             { text: "Green", correct: false }, 
             { text: "Brown", correct: true },
             { text: "Red", correct: false }, 
             { text: "Orange", correct: false }
         ]
        },
        //16
    {
         question: "'Hendricks', 'Larios', and 'Seagram's' are some of the best selling brands of which spirit?",
             answers: [
                 { text: "Tequila", correct: false }, 
                 { text: "Vodka", correct: false },
                 { text: "Gin", correct: true }, 
                 { text: "Rum", correct: false }
             ]
    },
        //17
    {
        question: "In what year were the first Air Jordan sneakers released?",
        answers: [
            { text: "1984", correct: true }, 
            { text: "1980", correct: false },
            { text: "1996", correct: false }, 
            { text: "1991", correct: false }
        ],
    },
        //18
    {
        question: "Which two U.S. states do not observe Daylight Saving Time?",
        answers: [
            { text: "NY and NJ", correct: false }, 
            { text: "Arizona and Hawaii", correct: true },
            { text: "California and Oregon", correct: false }, 
            { text: "Alaska and Hawaii", correct: false }
        ]
    },
          //19
        {
          question: "What color eyes do most humans have?",
          answers: [
              { text: "Blue", correct: false }, 
              { text: "Amber", correct: false },
              { text: "Brown", correct: true }, 
              { text: "Green", correct: false }
          ]
        },
        //20
        {
          question: "Water has a pH level of around?",
          answers: [
              { text: "7", correct: true }, 
              { text: "3", correct: false },
              { text: "2", correct: false }, 
              { text: "6", correct: false }
          ] 
        },
          //21
        {
          question: "What is Harry Potter's Patronus?",
          answers: [
              { text: "boar", correct: false }, 
              { text: "Cat", correct: false },
              { text: "Stag", correct: true }, 
              { text: "Doe", correct: false }
          ] 
        },
          //22    
        {
          question: "What is Harry Potter's Patronus?",
          answers: [
              { text: "boar", correct: false }, 
              { text: "Cat", correct: false },
              { text: "Stag", correct: true }, 
              { text: "Doe", correct: false }
          ]   
        },
          //23    
        {
          question: "Which animal sleep with one eye open?",
          answers: [
              { text: "Birds", correct: false }, 
              { text: "Turtles", correct: false },
              { text: "Cats", correct: false }, 
              { text: "Dolphins", correct: true }
          ]
        },
    
]

scoreCounter = num => 
{
    score +=num;
    scoreText.innerText = score;
    
}

setInterval(updateCountdown,1000);

function updateCountdown() 
{
    countdownElement.innerHTML = time;
    time--;
    if(time == 0)
    {
        
        if(shuffledQuestions.length > currentQuestionIndex+1)
        {
            nextButton.classList.remove("hide")
        }
        else
        {
    
            
            location.href = '/end.html';
            startButton.innerText = "Restart"
            startButton.classList.remove("hide")
            localStorage.setItem(score);
        }
        currentQuestionIndex++;
        setNextQuestion();
        
    }
}

function resetTimer()
{
    time = 15;
    countdownElement.innerHTML = time;
}






