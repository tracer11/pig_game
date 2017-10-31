/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, player1, player2, gamePlaying;



newGame();



var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
      // 1 Random Number
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;

      // 2 Display the result
      document.getElementById('dice-1').style.display = 'block'
      document.getElementById('dice-2').style.display = 'block'
      document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
      document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

      // 3 Update the round score if the rolled number was not 1
      if (dice1 !== 1 && dice2 !== 1) {
          roundScore += dice1 + dice2;
          document.querySelector('#current-' + activePlayer).textContent = roundScore;
      } else {
        nextPlayer();
      }
     }


});


document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying){
  scores[activePlayer] += roundScore;

  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winningScore;

    if(input) {
      winningScore = input;
    }else {
      winningScore = 100;
    }

   if (scores[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner';
    document.getElementById('dice-1').style.display = 'block'
    document.getElementById('dice-2').style.display = 'block'
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;  
    } else {
      nextPlayer();
    }
  }


});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  
  roundScore = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}


document.querySelector('.btn-new').addEventListener('click', newGame);

function newGame(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  player1 = prompt(' Player 1, enter your name');
  player2 = prompt('Player 2, enter your name');
  gamePlaying = true;

  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';

  document.getElementById('score-0').textContent = '0'
  document.getElementById('score-1').textContent = '0'
  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'

  document.getElementById('name-0').textContent = player1;
  document.getElementById('name-1').textContent = player2;
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');




}
