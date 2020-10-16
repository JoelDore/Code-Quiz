const questionBank = [

    {
        question: 'Which is NOT a primitive data type?',
        answersArray: [{ answer: 'string', correct: false },
        { answer: 'array', correct: true },
        { answer: 'boolean', correct: false },
        { answer: 'undefined', correct: false }]
    },

    {
        question: 'Which of these statements is NOT equivalent to the others?',
        answersArray: [{ answer: 'i++', correct: false },
        { answer: 'i=+1', correct: true },
        { answer: 'i+=1', correct: false },
        { answer: 'i=i+1', correct: false }]
    },

    {
        question: 'What is the function of `array.pop()`?',
        answersArray: [{ answer: 'Removes first element of array', correct: false },
        { answer: 'Removes last element of array', correct: true },
        { answer: 'Adds element to end of array', correct: false },
        { answer: 'Adds element to start of array', correct: false }]
    },

    {
        question: 'Which statement will return the number 10?',
        answersArray: [{ answer: 'Math.floor(9.9)', correct: false },
        { answer: 'Math.round(9.9)', correct: false },
        { answer: "parseInt('10.6')", correct: true },
        { answer: "parseFloat('10.6')", correct: false }]
    },

    {
        question: 'Which of these is a JavaScript comparison operator?',
        answersArray: [{ answer: '=', correct: false },
        { answer: '!==', correct: true },
        { answer: '+=', correct: false },
        { answer: '--', correct: false }]
    }

];

function shuffleQB() {
    // clone questionBank
    let questionBankClone = questionBank;
    // For each question, shuffle answer order
    for (let i = 0; i < questionBankClone.length; i++) {

        let answersArray = questionBankClone[i].answersArray;
        answersArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    // Shuffle question order
    questionBankClone = questionBankClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });
    return questionBankClone;
};