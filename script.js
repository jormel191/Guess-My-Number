

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
//const message = document.querySelector('.message');
//const scoreResult = document.querySelector('.score');

const scoreResult = function (value) {
    document.querySelector('.score').textContent = value;
}



document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);


    // When there is no input
    if (!guess) {
        displayMessage('Should enter a number 👻');

        //when player winner
    } else if (guess === secretNumber) {
        displayMessage('Correct Number 🥳 🎉 ');

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;


        }
        //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? ' Too high 📈' : ' Too low 📉' );

            score--
            scoreResult(score);
           // scoreResult.textContent = score;
            document.querySelector('.guess').value = '';

        } else {
            displayMessage(' You lose the game 😭');
            document.querySelector('body').style.backgroundColor = 'rgb(230, 80, 80)';
            scoreResult(0);
          //  scoreResult.textContent = 0;
        }


    }

})


document.querySelector('.again').addEventListener('click', function () {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem'

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    scoreResult.textContent = score;


})













