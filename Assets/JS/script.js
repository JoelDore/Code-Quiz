const timerEl = document.getElementById('timer');
let currentScore = 0;

// Move to next div # from current div #
function changeDiv(curr, next) {
    document.getElementById(curr).classList.add('hide');
    document.getElementById(next).removeAttribute('class')
};

// Handle Start button click
function startGame() {
    changeDiv('start-page', 'question-container');
    startTimer();
};

// Timer function
function startTimer() {
    let secondsLeft = 60;
    timerEl.textContent = secondsLeft;
    let timerInterval = setInterval(
        () => {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
};

function handleAnswerClick() {
    // button onclick --> this function
    // let correctAnswer = getCorrectAnswer();

};

function getCorrectAnswer(currQ) {
    // loop through answersArray, identify correct answer
    // retrieve correct answer from questionBank.
};

function endGame() {
    // Log currentScore in #final-score
    changeDiv('question-container', 'results-page')
}
