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
        location.href = '/hunterEnd.html';
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
        question: "What was the fist item sent through NYC's post office pneumatic tube?",
        answers: [
            { text: 'a cat', correct: true },
            { text: "a person", correct: false }, 
            { text: 'a burger', correct: false },
            { text: "a pen", correct: false }
        ]
    },
        //2
    {
        question: "You're how many times more likely to be bitten by a New Yorker than a shark?",
        answers: [
            { text: "0", correct: false }, 
            { text: "12", correct: false },
            { text: "10", correct: true }, 
            { text: "2", correct: false }
        ]
    },
        //3
    {
        question: "The population of New York exceeds that of how many states?",
        answers: [
            { text: "12", correct: false }, 
            { text: "49", correct: false },
            { text: "22", correct: false }, 
            { text: "39", correct: true }
        ]
    },
        //4
    {
        question: "What food made its debut in New York?",
        answers: [
            { text: "hotdogs", correct: false }, 
            { text: "carrot cake", correct: false },
            { text: "ice cream cones", correct: true }, 
            { text: "cheesecake", correct: false }
        ]
    },
        //5
    {
        question: "What weird law is actually true?",
        answers: [
            { text: "you cannot walk your dog near a church on sundays", correct: false }, 
            { text: "farting in church is a misdemeanor", correct: true },
            { text: "You must be 5'8+ to drive a train", correct: false }, 
            { text: "Cats must all be registered to keep track of their population", correct: false }
        ]
    },
        //6
    {
        question: "What was Times Square originally called?",
        answers: [
            { text: "Longacre Square", correct: true }, 
            { text: "Times center", correct: false },
            { text: "Union Sqaure", correct: false }, 
            { text: "Always been called Times Sqaure", correct: false }
        ]
    },
        //7
    {
        question: "Whose eyeballs are stored in the city??",
        answers: [
            { text: "Albert Einstein", correct: true }, 
            { text: "Walt Disney", correct: false },
            { text: "John Lennon", correct: false }, 
            { text: "Michael Jackson", correct: false }
        ]
    },
        //8
    {
        question: "How much did New York sell a private Island for in 1975?",
        answers: [
            { text: "$18", correct: false }, 
            { text: "$55", correct: false },
            { text: "$10", correct: true }, 
            { text: "$276", correct: false }
        ]
    },
        //9
    {
        question: "How often is there a birth in NYC?",
        answers: [
            { text: "every 2 minutes", correct: false }, 
            { text: "every 4.4 minutes", correct: true },
            { text: "every 5.7 minutes", correct: false }, 
            { text: "every 15 seconds", correct: false }
        ]
    },
        //10
    {
        question: "What is it not illegal to do in NYC?",
        answers: [
            { text: "Scam", correct: false }, 
            { text: "litter", correct: false },
            { text: "do coke", correct: false }, 
            { text: "go topless", correct: true }
        ]
    },
        //11
    {
        question: "How often does the Empire State building get hit by lightning?",
        answers: [
            { text: "52 times a year", correct: false }, 
            { text: "2 times a year", correct: false },
            { text: "23 times a year", correct: true }, 
            { text: "102 times a year", correct: false }
        ]
    },
        //12
    {
        question: "What is the average rent for one bedroom apartment in manhattan?",
        answers: [
            { text: "3400", correct: true }, 
            { text: "5500", correct: false },
            { text: "1250", correct: false }, 
            { text: "6400", correct: false }
        ]
    },
        //13
    {
        question: "What can be found in NYC's drinking water?",
        answers: [
            { text: "nothing", correct: false }, 
            { text: "mice", correct: false },
            { text: "small crustaceans", correct: true }, 
            { text: "roaches", correct: false }
        ]
    },
        //14
    {
        question: "New Yorkers can request for what to be put in front of their home for free?",
        answers: [
            { text: "A water fountain", correct: false }, 
            { text: "A trash can", correct: false },
            { text: "A statue", correct: false }, 
            { text: "A tree", correct: true }
        ]
    },
         //15
        {
         question: "How many books is the New York public Libary home to?",
         answers: [
             { text: "600,000", correct: false }, 
             { text: "50 million", correct: true },
             { text: "2 million", correct: false }, 
             { text: "15 million", correct: false }
         ]
        },
        //16
    {
         question: "What was New York originnally named",
             answers: [
                 { text: "Yorkville", correct: false }, 
                 { text: "New England", correct: false },
                 { text: "New Amsterdam", correct: true }, 
                 { text: "Jersey", correct: false }
             ]
    },
        //17
    {
        question: "How many languages are spoken in NYC?",
        answers: [
            { text: "800", correct: true }, 
            { text: "1,000", correct: false },
            { text: "529", correct: false }, 
            { text: "62", correct: false }
        ],
    },
        //18
    {
        question: "Which borough is the most populated?",
        answers: [
            { text: "Manhattan", correct: false }, 
            { text: "Brooklyn", correct: true },
            { text: "Queens", correct: false }, 
            { text: "The Bronx", correct: false }
        ]
    },
          //19
        {
          question: "How much did the dutch have to pay to aquire Manhattan",
          answers: [
              { text: "1 million dollars", correct: false }, 
              { text: "$52,000", correct: false },
              { text: "$1000", correct: true }, 
              { text: "$50", correct: false }
          ]
        },
        //20
        {
          question: "Brown street signs in NYC mean what?",
          answers: [
              { text: "You are in a historic district", correct: true }, 
              { text: "There are no trains near by", correct: false },
              { text: "They ran out of green signs", correct: false }, 
              { text: "there is a sewer system center beneath the ground", correct: false }
          ] 
        },
          //21
        {
          question: "What is a medallion referring to in NYC?",
          answers: [
              { text: "award given by the city", correct: false }, 
              { text: "award given by the state", correct: false },
              { text: "license to drive a taxi cab", correct: true }, 
              { text: "license to operate a train", correct: false }
          ] 
        },
          //22    
        {
          question: "How much does it cost to operate a hotdog stand?",
          answers: [
              { text: "25,000", correct: false }, 
              { text: "15,000", correct: false },
              { text: "150,000", correct: true }, 
              { text: "500,000", correct: false }
          ]   
        },
          //23    
        {
          question: "How much does the Naked Cowboy make annually?",
          answers: [
              { text: "50,000", correct: false }, 
              { text: "12,000", correct: false },
              { text: "85,0000", correct: false }, 
              { text: "150,000", correct: true }
          ]
        },
        //24
        {
            question: "New York has the largest population of what ethnic group in the United States",
            answers: [
                { text: "Greek", correct: false }, 
                { text: "Puerto Rican", correct: false },
                { text: "Asian", correct: false }, 
                { text: "All of the above", correct: true }
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






