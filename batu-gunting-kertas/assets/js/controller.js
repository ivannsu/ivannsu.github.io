function toggleDisplay() {
  if(resultContainer.style.display === 'none') {
    resultContainer.style.display = 'block';
    selectContainer.style.display = 'none';
  } else {
    resultContainer.style.display = 'none';
    selectContainer.style.display = 'block';
  }
}
function startGame() {
  // console.log('Game starting');

  let choices = document.getElementById('choices').children;
  let userImg = document.getElementById('userImg');
  let comImg = document.getElementById('comImg');

  for(let i = 0; i < choices.length; i++) {
    choices[i].onclick = function() {

      game.setUserChoice(i);
      game.setComChoice();
      game.processPattern();
      game.getWinnerChoice();
      game.getWinnerName();

      toggleDisplay();

      if(game.winnerName === 'Kamu') {
        resultContainer.firstElementChild.innerHTML = 'MENANG!';
      } else {
        resultContainer.firstElementChild.innerHTML = 'KALAH!';
      }

      for(let i = 0; i < game.patternKey.length; i++) {
        if(i === game.userChoice) {
          userImg.src = 'assets/images/' + game.patternKey[i] + '.png';
        } else if(i === game.comChoice) {
          comImg.src = 'assets/images/' + game.patternKey[i] + '.png';
        }
      }
    }
  }
}

let pattern = [
  {rock: 0, paper: 1, scissors: 1, result: 'scissors'},
  {rock: 1, paper: 1, scissors: 0, result: 'paper'},
  {rock: 1, paper: 0, scissors: 1, result: 'rock'},
];
let patternKey = ['rock', 'paper', 'scissors'];
let game = new RockPaperScissors(pattern, patternKey);

let resetBtn = document.getElementById('reset');
let resultContainer = document.getElementById('result');
let selectContainer = document.getElementById('select');

resultContainer.style.display = 'none';
selectContainer.style.display = 'block';

resetBtn.addEventListener('click', function() {
  // console.log('it works');
  toggleDisplay();
  startGame();
});

startGame();