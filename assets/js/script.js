const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('quiz-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const resultsBox = document.getElementById("results");
const highscoresBox = document.getElementById("highscores");
const timerBox = document.getElementById("timer");
const submitButton = document.getElementById("submit");


const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function yourAnswer() {

}

const questions = [
    {
        question:'',
        answers: [
            { text: '', correct: true },
            { text: '', correct: false },
        ]
    
    
    }
]

