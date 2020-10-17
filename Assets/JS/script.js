const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const answerOne = document.getElementById('answer-1');
const answerTwo = document.getElementById('answer-2');
const answerThree = document.getElementById('answer-3');
const answerFour = document.getElementById('answer-4');
const finalScoreEl = document.getElementById('final-score');
const initialsEl = document.getElementById('initials');
const highScoresListEl = document.getElementById('highscores-list')
const shuffledQuestionBank = shuffleQB();

let secondsLeft = 60;
let currentScore = 0;
let currentQ = -1;
let finalScore;

// Move to next div # from current div #
function changeDiv(curr, next) {
    document.getElementById(curr).classList.add('hide');
    document.getElementById(next).removeAttribute('class')
};

// Handle Start button click
function startGame() {
    changeDiv('start-page', 'question-container');
    nextQuestion();
    startTimer();
};

// Timer function
function startTimer() {
    timerEl.textContent = secondsLeft;
    let timerInterval = setInterval(
        () => {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
};

function nextQuestion() {
    currentQ++;
    // If there are no more questions, end the game
    if (currentQ === shuffledQuestionBank.length) {
        secondsLeft = 0;
        endGame();
    } else {
        // Otherwise populate questionEl
        questionEl.textContent = shuffledQuestionBank[currentQ].question;
        // and populate answer buttons
        let arr = [answerOne, answerTwo, answerThree, answerFour];
        let i = 0;
        arr.forEach(element => {
            element.textContent = shuffledQuestionBank[currentQ].answersArray[i].answer;
            i++
        }, i);
    };
};

// When user clicks an answer button
function handleAnswerClick(event) {
    // Get the correct answer string
    let correctAnswer = getCorrectAnswer(currentQ);
    // Compare to user click
    if (event.target.textContent === correctAnswer) {
        currentScore += 10;
        // color indicates correct choice
        event.target.classList.add('correct')
    } else {
        secondsLeft -= 10;
        // color indicates wrong choice
        event.target.classList.add('wrong')
    }
    // Wait 0.5 sec, reset btn color, go to next question
    setTimeout(
        () => {
            event.target.className = 'btn';
            nextQuestion();
        }, 500);
};

function getCorrectAnswer(currentQ) {
    let arr = shuffledQuestionBank[currentQ].answersArray;
    // loop through answersArray, identify correct answer
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].correct) {
            // return correct answer.
            return arr[j].answer
        }
    }
};

function endGame() {
    timerEl.textContent = 0;
    changeDiv('question-container', 'results-page');
    // Log currentScore on results page
    finalScore = currentScore;
    finalScoreEl.textContent = finalScore;
}

function handleSubmit() {
    let initials = initialsEl.value;
    // get array from storage, or initialize as empty array
    let highScoresList = JSON.parse(localStorage.getItem('highScores')) || [];
    // push new score to array
    highScoresList.push({ initials: initials, score: finalScore });
    // sort array ascending
    highScoresList = highScoresList.sort((curr, next) => {
        if (curr.score < next.score) {
            return 1
        } else if (curr.score > next.score) {
            return -1
        } else {
            return 0
        }
    });
    // set updated array to local storage
    localStorage.setItem('highScores', JSON.stringify(highScoresList))
    // go to highscores page
    window.location.href = './highscores.html';
}
