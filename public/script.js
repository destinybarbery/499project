const startButton = document.getElementById("start-button")
const nextButton = document.getElementById("next-button")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById('question')
let shuffledQuestions, currentQuestionIndex
const answerButtonsElement = document.getElementById('answer-buttons')


startButton.addEventListener("click", startGame)
nextButton.addEventListener("click",()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame()
{
    console.log("Game Started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
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
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex+1)
    {
        nextButton.classList.remove("hide")
    }
    else
    {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
    
}

function setStatusClass(element, isCorrect)
{
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
            { text: "12", correct: false }, 
        ],
        //2
        question: "What European country has 158 verses to its anthem?",
        answers: [
            { text: "Germany", correct: false }, 
            { text: "Ireland", correct: false },
            { text: "Monaco", correct: false }, 
            { text: "Greece", correct: true },
        ],
        //3
        question: "What is the oddest name of a town located in norway?",
        answers: [
            { text: "Normal", correct: false }, 
            { text: "Ireland", correct: false },
            { text: "Monaco", correct: false }, 
            { text: "Greece", correct: true },
        ],
        //4
        question: "What food could turn your skin color orange throughout your body?",
        answers: [
            { text: "Cantaloupe", correct: false }, 
            { text: "Butternut squash", correct: false },
            { text: "Carrots", correct: true }, 
            { text: "Sweet potatoes", correct: false },
        ],
        //5
        question: "How fast was the first person ever convicted of speeding?",
        answers: [
            { text: "13 mph", correct: false }, 
            { text: "8 mph", correct: true },
            { text: "70 mph", correct: false }, 
            { text: "85 mph", correct: false },
        ],
        //6
        question: "On Sunday what is illegal to sell in Columbus, Ohio?",
        answers: [
            { text: "Cornflakes", correct: true }, 
            { text: "Apples", correct: false },
            { text: "Red meat", correct: false }, 
            { text: "Orange juice", correct: false },
        ],
        //7
        question: "On Sunday what is illegal to sell in Columbus, Ohio?",
        answers: [
            { text: "Cornflakes", correct: true }, 
            { text: "Apples", correct: false },
            { text: "Red meat ", correct: false }, 
            { text: "Orange juice", correct: false },
        ],
        //8
        question: "Who said 'Champagne should be dry, cold and free'?",
        answers: [
            { text: "JFK", correct: false }, 
            { text: "Joseph Stalin", correct: false },
            { text: "Winstom Churchill", correct: true }, 
            { text: "MLK", correct: false },
        ],
        //9
        question: " What sport has been played on the moon?",
        answers: [
            { text: "Tennis", correct: false }, 
            { text: "Golf", correct: true },
            { text: "Ping Pong", correct: false }, 
            { text: "Basketball", correct: false },
        ],
        //10
        question: " What sport has been played onFrom which country do French fries originate?",
        answers: [
            { text: "France", correct: false }, 
            { text: "Switzerland", correct: false },
            { text: "Italy", correct: false }, 
            { text: "Belgium", correct: true },
        ],
        //11
        question: "The average person does what thirteen times a day?",
        answers: [
            { text: "Smiles", correct: false }, 
            { text: "Crys", correct: false },
            { text: "Laughs", correct: true }, 
            { text: "Frowns", correct: false },
        ],
        //12
        question: "What is 'cynophobia?",
        answers: [
            { text: "fear of dogs", correct: true }, 
            { text: "fear of trains", correct: false },
            { text: "fear of cynics", correct: false }, 
            { text: "fear of cantelope", correct: false },
        ],
        //13
        question: "How many questions are written by right to left?",
        answers: [
            { text: "15", correct: false }, 
            { text: "4", correct: false },
            { text: "12", correct: true }, 
            { text: "8", correct: false },
        ],
        //14
        question: "What animal can be seen on the Porsche logo?",
        answers: [
            { text: "Lion", correct: false }, 
            { text: "Ram", correct: false },
            { text: "Tiger", correct: false }, 
            { text: "Horse", correct: true },
        ],
         //15
         question: "What is the rarest M&M color?",
         answers: [
             { text: "Green", correct: false }, 
             { text: "Brown", correct: true },
             { text: "Red", correct: false }, 
             { text: "Orange", correct: false },
         ],
        //16
         question: "'Hendricks', 'Larios', and 'Seagram's' are some of the best selling brands of which spirit?",
             answers: [
                 { text: "Tequila", correct: false }, 
                 { text: "Vodka", correct: false },
                 { text: "Gin", correct: true }, 
                 { text: "Rum", correct: false },
             ],
        //17
        question: "In what year were the first Air Jordan sneakers released?",
        answers: [
            { text: "1984", correct: true }, 
            { text: "1980", correct: false },
            { text: "1996", correct: false }, 
            { text: "1991", correct: false },
        ],
        //18
        question: "Which two U.S. states don’t observe Daylight Saving Time?",
        answers: [
            { text: "NY and NJ", correct: false }, 
            { text: "Arizona and Hawaii", correct: true },
            { text: "California and Oregon", correct: false }, 
            { text: "Alaska and Hawaii", correct: false },
        ],
          //19
          question: "What color eyes do most humans have?",
          answers: [
              { text: "Blue", correct: false }, 
              { text: "Amber", correct: false },
              { text: "Brown", correct: true }, 
              { text: "Green", correct: false },
          ],
        //20
          question: "Water has a pH level of around?",
          answers: [
              { text: "7", correct: true }, 
              { text: "3", correct: false },
              { text: "2", correct: false }, 
              { text: "6", correct: false },
          ], 
          //21
          question: "What is Harry Potter's Patronus?",
          answers: [
              { text: "boar", correct: false }, 
              { text: "Cat", correct: false },
              { text: "Stag", correct: true }, 
              { text: "Doe", correct: false },
          ], 
          //22    
          question: "What is Harry Potter's Patronus?",
          answers: [
              { text: "boar", correct: false }, 
              { text: "Cat", correct: false },
              { text: "Stag", correct: true }, 
              { text: "Doe", correct: false },
          ],   
          //23    
          question: "Which animal sleep with one eye open?",
          answers: [
              { text: "Birds", correct: false }, 
              { text: "Turtles", correct: false },
              { text: "Cats", correct: false }, 
              { text: "Dolphins", correct: true },
          ], 
        //24    
          question: "What is the most toxic metal?",
          answers: [
              { text: "Copper", correct: false }, 
              { text: "Mercury", correct: true },
              { text: "Nickel", correct: false }, 
              { text: "Zinc", correct: false },
          ], 
          //25    
          question: "How many apples will kill a human?",
          answers: [
              { text: "200", correct: true }, 
              { text: "150", correct: false },
              { text: "100", correct: false }, 
              { text: "250", correct: false },
          ], 
            //26    
            question: "Which state has the lowest indivudual tax burden in the US?",
            answers: [
                { text: "NY", correct: false }, 
                { text: "Alaska", correct: true },
                { text: "Florida", correct: false }, 
                { text: "Nebraska", correct: false },
            ],
            //27    
            question: "Which state has the lowest indivudual tax burden in the US?",
            answers: [
                { text: "NY", correct: flse }, 
                { text: "Alaska", correct: true },
                { text: "Florida", correct: false }, 
                { text: "Nebraska", correct: false },
            ],
           //28    
            question: "What is the crows grouop known as?",
            answers: [
                { text: "crows-es", correct: false }, 
                { text: "Flock", correct: false },
                { text: "Murderer", correct: true }, 
                { text: "Herd", correct: false },
            ],
            //29    
            question: "What language has the most words?",
            answers: [
                { text: "Russian", correct: false }, 
                { text: "Spanish", correct: false },
                { text: "Chinese", correct: false }, 
                { text: "English", correct: true },
            ],
            //30    
            question: "Which of Shakespeare's plays is the longest?",
            answers: [
                { text: "Macbeth", correct: false }, 
                { text: "Hamelt", correct: true },
                { text: "King Lear", correct: false }, 
                { text: "Romeo and Juliet", correct: false },
            ],
            //31    
            question: "Who performs the character of Mark Zuckerberg in the movie 'The Social Network' ?",
            answers: [
                { text: "Jesse Eisenberg", correct: true }, 
                { text: "Mark Ruffalo", correct: false },
                { text: "Tom Cruise", correct: false }, 
                { text: "Hugh Jackman", correct: false },
            ],
            //32    
            question: "What country has the most vending machines per capita?",
            answers: [
                { text: "United Kingdom", correct: false }, 
                { text: "Australia", correct: false },
                { text: "United States", correct: false }, 
                { text: "Japan", correct: true },
            ],
            //33    
            question: "Where would you find an ISBN number?",
            answers: [
                { text: "Furniture", correct: false }, 
                { text: "Phone", correct: false },
                { text: "Book", correct: true }, 
                { text: "Toy", correct: false },
            ],
            //34    
            question: "Who sang the title song for the lastest Bond film, No Time to Die?",
            answers: [
                { text: "Adele", correct: false }, 
                { text: "Billie Eillish", correct: true },
                { text: "Sam Smith", correct: false }, 
                { text: "Ariana Grande", correct: false },
            ],
            //35    
            question: "What is the name of the festival held yearly in Chicago's Grant Park?",
            answers: [
                { text: "Lollapalooza", correct: true }, 
                { text: "Fyre Fest", correct: false },
                { text: "Gov Ball", correct: false }, 
                { text: "EDC", correct: false },
            ],
            //36    
            question: "An egg-shaped galaxy is called",
            answers: [
                { text: "Irregular", correct: false }, 
                { text: "Spiral", correct: false },
                { text: "Elliptical", correct: false }, 
                { text: "Circular", correct: false },
            ]
    }
]
