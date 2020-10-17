function populateHighScores() {
    // get array from storage, or initialize as empty array
    let highScoresList = JSON.parse(localStorage.getItem('highScores')) || [];
    // populate highscores list
    let list = '';
    highScoresList.forEach(score => {
        list = list + '<p>' + score.initials + '  :  ' + score.score + '</p>';
    });
    highScoresListEl.innerHTML = list;
}

function resetScores() {
    localStorage.clear();
    populateHighScores();
}

populateHighScores();