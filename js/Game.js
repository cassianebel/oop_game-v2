/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [new Phrase('A DIAMOND IN THE ROUGH'), 
                    new Phrase('A WALK IN THE THE PARK'), 
                    new Phrase('BETTER LATE THAN NEVER'),  
                    new Phrase('BETTER SAFE THAN SORRY'),  
                    new Phrase('GET ALL YOUR DUCKS IN A ROW'),  ];
    this.activePhrase = null;
  }

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    let num = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[num];
  };


  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };


  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    const hiddenLetters = document.querySelectorAll('.hide.letter');
    return hiddenLetters.length === 0 ? true : false;
  };


  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    this.missed += 1;
    document.querySelector('img[src="images/liveHeart.png"]').setAttribute('src', 'images/lostHeart.png');
    if(this.missed === 5) {
      this.gameOver(false);
    }
  };


  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    let message;
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    overlay.classList.remove('start');
    if(gameWon){
      overlay.classList.remove('lose');
      overlay.classList.add('win');
      message = "Nice Work, You Won!";
    } else {
      overlay.classList.remove('win');
      overlay.classList.add('lose');
      message = "Better Luck Next Time!"
    }
    document.querySelector('h1').textContent = message;
  };

}