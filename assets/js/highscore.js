//Created a function to show highscore
function showScore () {
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    console.log(highScores);
    let ol = document.getElementById('high-scores');
    for (let i = 0; i < highScores.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
        ol.appendChild(li);
    }
}
showScore();





