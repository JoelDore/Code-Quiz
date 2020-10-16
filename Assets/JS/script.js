const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const answerOne = document.getElementById('answer-1');
const answerTwo = document.getElementById('answer-2');
const answerThree = document.getElementById('answer-3');
const answerFour = document.getElementById('answer-4');

let currentScore = 0;
let currentQ = 0;

// Move to next div # from current div #
function changeDiv(curr, next) {
    document.getElementById(curr).classList.add('hide');
    document.getElementById(next).removeAttribute('class')
};

// Handle Start button click
function startGame() { // Handle Start button click
    changeDiv('start-page', 'question-container');
    nextQuestion();
    currentQ = 0; // reset initial increment in nextQuestion()
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
    // If currently on last question, end the game
    if (currentQ = questionBank.length - 1) {
        endGame();
    } else {
        // Otherwise populate question-container div
        questionEl.textContent = questionBank[currentQ].question;
        answerOne.textContent = questionBank[currentQ].answersArray[currentQ].answer;
        answerTwo.textContent = questionBank[currentQ].answersArray[currentQ].answer;
        answerThree.textContent = questionBank[currentQ].answersArray[currentQ].answer;
        answerFour.textContent = questionBank[currentQ].answersArray[currentQ].answer;
        // and increment currentQ
        currentQ++;
    }
}

function handleAnswerClick(event) {
    // let correctAnswer = getCorrectAnswer(currentQ);
    // if event.target.textContent===correctAnswer,
    // // currentScore += 10;
    // // event.target.classList.add(.correct)
    // else 
    // // secondsLeft -=10;
    // // event.target.classList.add(.wrong)
    // setTimeout(nextQuestion(), 500)
};

function getCorrectAnswer(currentQ) {
    let arr = questionBank[currentQ].answersArray;
    // loop through answersArray, identify correct answer
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].correct) {
            // return correct answer.
            return arr[j].answer
        }
    }
};

function endGame() {
    // Log currentScore in #final-score text
    // set currentScore = 0;
    // changeDiv('question-container', 'results-page');
}



/*--------------------------------*/


// const arr = [{age: 3, name: 'Jim'}, {age: 4, name: 'Joe'}]

// arr.sort(function(current, next) {
//     if (current.age > next.age) {
//         return 1
//     } else if (current.age < next.age) {
//         return -1
//     } else {
//         return 0
//     }
// })