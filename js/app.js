/* Cassia Nebel's
 * Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/**
 * Listens for a button click to start a new game
 */
document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
});


/**
 * Listens for letter button clicks
 */
const buttons = document.querySelectorAll('button.key');
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    game.handleInteraction(e.target);
  });
}