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
}