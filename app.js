



var score,activePlayer,roundScore,gamePlaying;

init();


document.querySelector('.btn-roll').addEventListener('click',function(){
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6 +1);

    var diceRom = document.querySelector('.dice');

    diceRom.style.display = 'block';

    diceRom.src = 'dice-'+dice+'.png';

    if (dice !== 1) {
      roundScore += dice;
      document.getElementById('current-'+activePlayer).textContent = roundScore;

    }
    else {
      //next player et round score a 0 et current score a 0
      nextPlayer();
    }
  }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
  if (gamePlaying) {
    score[activePlayer] += roundScore;

    document.getElementById('score-'+activePlayer).textContent = score[activePlayer];

    if (score[activePlayer] >= 100) {
      document.getElementById('name-'+activePlayer).textContent = "Gagnant";
      document.querySelector('.dice').style.display = 'none';

      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
      document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      gamePlaying = false;
    }
    else {
      nextPlayer();
    }
  }


});

function nextPlayer (){
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  roundScore = 0;

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');


}
document.querySelector('.btn-new').addEventListener('click',init);

function init()
{

  score = [0,0];

  activePlayer = 0;

  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;
  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('name-0').textContent = "Player 1";
  document.getElementById('name-1').textContent = "Player 2";

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.add('active');

}
