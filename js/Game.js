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
}