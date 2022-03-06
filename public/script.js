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
        question: "What is 2+2?",
        answers: [
            { text: '4', correct: true },
            {text: "22", correct: false },
                
        ]
    }
]