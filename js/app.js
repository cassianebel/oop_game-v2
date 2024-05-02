/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

document.getElementById('btn__reset').addEventListener('click', () => {
  game = new Game();
  game.startGame();
});


const buttons = document.querySelectorAll('button.key');
for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    game.handleInteraction(e.target);
  });
}