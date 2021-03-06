const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('quiz-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')
const submitButton = document.getElementById('submit-btn')
const endForm = document.getElementById('end-form')

var sec
let shuffledQuestions, currentQuestionIndex
var score = 0

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
submitButton.addEventListener('click', submitQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    submitButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    endForm.classList.add('hide')
    startTimer()
    nextQuestion()
}

function startTimer() {
    sec = 180
    var timer = setInterval(function() {
        document.getElementById('time').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function nextQuestion() {
    reset()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', yourAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function submitQuiz() {
    reset()
    questionContainer.classList.add('hide')
    endForm.classList.remove('hide')
    submitButton.classList.add('hide')
    startButton.classList.remove('hide')
    startButton.innerText = "Take it again"
}

function reset() {
    clearClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function yourAnswer(e) {
    const selectedAnswer = e.target
    const correct = selectedAnswer.dataset.correct
    answerCheck(document.body, correct)
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        submitButton.classList.remove('hide')
    }
}

function answerCheck(element, correct) {
    clearClass(element)
    if (correct) {
        score++
    }
    else {
        sec-= 10
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        highlightCorrect(button, button.dataset.correct)
    })
}

function highlightCorrect(element, correct) {
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}


function clearClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

const questions = [
    {
        question:'Which HTML element do we put in our JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<javascript>', correct: false },
            { text: '<header>', correct: false },
            { text: '<java>', correct: false },
        ] 
    
    },

    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is',
        answers: [
            { text: 'Javascript', correct: false },
            { text: 'terminal/bash', correct: false },
            { text: 'for loops', correct: false },
            { text: 'console.log', correct: true },
        ] 
    
    },

    {
        question:'Commonly used data structures DO NOT include:',
        answers: [
            { text: 'strings', correct: false },
            { text: 'booleans', correct: true },
            { text: 'alerts', correct: false },
            { text: 'numbers', correct: false },
        ] 
    
    },

    {
        question:'String values must be enclosed within ____ when being assigned to variables.',
        answers: [
            { text: 'parentheses', correct: false },
            { text: 'square brackets', correct: false },
            { text: 'quotes', correct: true },
            { text: 'curly brackets', correct: false },
        ] 
    
    },

    {
        question:'The condition in an if / else statement must be enclosed with ______.',
        answers: [
            { text: 'parentheses', correct: true },
            { text: 'curly brackets', correct: false },
            { text: 'square brackets', correct: false },
            { text: 'quotes', correct: false },
        ] 
    
    },

    {
        question:'We want to create a variable that CANNOT be changed. How should we define it?',
        answers: [
            { text: 'var', correct: false },
            { text: 'let', correct: false },
            { text: 'fixed', correct: false },
            { text: 'const', correct: true },
        ] 
    
    },

    {
        question:'Where should we insert a Javascript?',
        answers: [
            { text: '<footer>', correct: false },
            { text: '<head>', correct: true },
            { text: '<title>', correct: false },
            { text: '<body>', correct: false },
        ] 
    
    }
]
