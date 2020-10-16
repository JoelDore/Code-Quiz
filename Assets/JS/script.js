const timerEl = document.getElementById('timer');
let currentScore = 0;
let currentQ = 0;

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
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                endGame();
            }
        }, 1000);
};

function nextQuestion() {
    // Populate question-container w/ next questionBank[currentQ]
}

function handleAnswerClick(event) {
    // let correctAnswer = getCorrectAnswer(currentQ);
    // if event.target.textContent===correctAnswer,
    // // currentScore += 10;
    // // event.target.classList.add(.correct)
    // else 
    // // secondsLeft -=10;
    // // event.target.classList.add(.wrong)
    // setTimeout(-move to next question-, 500)
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