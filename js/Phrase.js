/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    const phraseDiv = document.getElementById('phrase');
    const ul = phraseDiv.querySelector('ul');
    const characters = this.phrase.split('');
    let html = ``;
  
    for(let i = 0; i < characters.length; i++) {
      if(characters[i] === ' ') {
        html += `<li class="space"> </li>`
      } else {
        html += `<li class="hide letter ${characters[i]}">${characters[i]}</li>`;
      }
    }

    ul.innerHTML = html;
  };


  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    return this.phrase.split('').includes(letter);
  };


  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    const letters = document.querySelectorAll(`.${letter}`);
    letters.forEach((li) => {
      li.classList.remove('hide');
      li.classList.add('show');
    });
  };

}